<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Project;
use Illuminate\Http\Request;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{

    public function view()
    {
        $projects = Project::all();
        return Inertia::render('Welcome', [
            'projects' => $projects,
        ]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = Project::all();
        return Inertia::render('Projects/Index', [
            'projects' => $projects,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Projects/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|max:5120',
            'tech' => 'nullable|array',
            'tech.*' => 'string',
            'visit_link' => 'nullable|url|max:255',
            'repo_link' => 'nullable|url|max:255',
        ]);

        $imageUrl = null;
        if ($request->hasFile('image')) {
            $file = $request->file('image');

            // Inisiasi ImageManager dengan Driver (misalnya GD)
            $manager = new ImageManager(new Driver());

            // Muat gambar
            $img = $manager->read($file); 

            // resize if too large (max width 1200px, maintain aspect ratio)
            $maxWidth = 720;
            if ($img->width() > $maxWidth) {
                $img->scaleDown($maxWidth, null);
            }

            // optionally convert to WebP for better compression if supported
            $useWebp = true;
            $quality = 80; // 0-100

            if ($useWebp) {
                $extension = 'webp';
                $encoded = $img->toWebp($quality);
            } else {
                $extension = 'jpg';
                $encoded = $img->toJpeg($quality);
            }

            $filename = 'projects-image/' . uniqid('project_') . '.' . $extension;
            Storage::disk('public')->put($filename, $encoded);
            $imageUrl = Storage::url($filename);
        } elseif (!empty($request->input('image'))) {
            $imageUrl = $request->input('image');
        }

        $techArray = null;
        if (is_array($request->input('tech'))) {
            $techArray = array_values($request->input('tech'));
        } elseif ($request->filled('tech')) {
            $decoded = json_decode($request->input('tech'), true);
            $techArray = is_array($decoded) ? array_values($decoded) : null;
        }
        
        Project::create([
            'title' => $validated['title'],
            'description' => $validated['description'],
            'image' => $imageUrl,
            'tech' => $techArray !== null ? json_encode($techArray) : null,
            'visit_link' => $validated['visit_link'] ?? null,
            'repo_link' => $validated['repo_link'] ?? null,
        ]);

        return redirect()->route('admin.projects.index')->with('success', 'Project created.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $project = Project::findorFail($id);
        return Inertia::render('Projects/Edit', [
            'project' => $project,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|max:5120',
            'tech' => 'nullable|array',
            'tech.*' => 'string',
            'visit_link' => 'nullable|url|max:255',
            'repo_link' => 'nullable|url|max:255',
        ]);

        $imageUrl = $project->image;
        
        if ($request->hasFile('image')) {
            $file = $request->file('image');

            // HAPUS GAMBAR LAMA SEBELUM UPDATE
            if ($project->image) {
                $pathToDelete = str_replace(Storage::url(''), '', $project->image);
                Storage::disk('public')->delete($pathToDelete); 
            }

            // Inisiasi ImageManager (V3)
            $manager = new ImageManager(new Driver());
            $img = $manager->read($file); 
            
            // Resizing (Scale Down)
            $maxWidth = 720;
            if ($img->width() > $maxWidth) {
                $img->scaleDown($maxWidth, null);
            }

            // Encoding (WebP/JPEG)
            $useWebp = true;
            $quality = 80;

            $extension = $useWebp ? 'webp' : 'jpg';
            $encoded = $useWebp 
                       ? $img->toWebp($quality) 
                       : $img->toJpeg($quality);

            // Simpan File Baru
            $filename = 'projects-image/' . uniqid('project_') . '.' . $extension;
            Storage::disk('public')->put($filename, $encoded);
            
            // Set URL baru
            $imageUrl = Storage::url($filename);
            
        } elseif ($request->input('image') === null || $request->input('image') === '') {
            if ($project->image) {
                $pathToDelete = str_replace(Storage::url(''), '', $project->image);
                Storage::disk('public')->delete($pathToDelete); 
            }
            $imageUrl = null;
        }

        $techArray = null;
        if (is_array($request->input('tech'))) {
            $techArray = array_values($request->input('tech'));
        } elseif ($request->filled('tech')) {
            $decoded = json_decode($request->input('tech'), true);
            $techArray = is_array($decoded) ? array_values($decoded) : null;
        }

        // Menggunakan metode update() pada Model yang sudah ada
        $project->update([
            'title' => $validated['title'],
            'description' => $validated['description'],
            'image' => $imageUrl,
            'tech' => $techArray !== null ? json_encode($techArray) : null,
            'visit_link' => $validated['visit_link'] ?? null,
            'repo_link' => $validated['repo_link'] ?? null,
        ]);

        return redirect()->route('admin.projects.index')->with('success', 'Project updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // 1. Cari Project berdasarkan ID atau gagal
        $project = Project::findOrFail($id);

        // 2. Hapus File Gambar dari Storage (Wajib)
        // Cek apakah project memiliki URL gambar yang tersimpan
        if ($project->image) {
            // Hapus prefix URL storage (misal: 'http://localhost/storage/' )
            // untuk mendapatkan path relatif (misal: 'projects-image/project_xxxx.webp')
            $pathToDelete = str_replace(Storage::url(''), '', $project->image);
            
            // Lakukan penghapusan dari disk 'public'
            Storage::disk('public')->delete($pathToDelete); 
        }

        // 3. Hapus Project dari Database
        $project->delete();

        // 4. Redirect dan Beri Pesan Sukses
        return redirect()->route('admin.projects.index')->with('success', 'Project deleted successfully.');
    }
}
