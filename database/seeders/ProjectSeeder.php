<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Project::create([
            'title' => 'Portfolio Website',
            'description' => 'A personal portfolio website to showcase my projects and skills.',
            'image' => 'portfolio.png',
            'tech' => json_encode(['Laravel', 'Inertia.js', 'Vue.js']),
            'visit_link' => 'https://myportfolio.com',
            'repo_link' => 'https://github.com/username/portfolio-website',
        ]);
    }
}
