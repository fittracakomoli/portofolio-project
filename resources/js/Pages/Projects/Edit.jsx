import { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";

export default function Edit({ project }) {
    // 1. Inisialisasi useForm (tidak ada perubahan di sini)
    const form = useForm({
        title: project.title,
        description: project.description,
        image: null, // File input
        tech: JSON.parse(project.tech) || [],
        visit_link: project.visit_link,
        repo_link: project.repo_link,
    });

    const [techInput, setTechInput] = useState("");

    // 2. INISIALISASI IMAGE PREVIEW: Gunakan project.image sebagai nilai default
    const [imagePreview, setImagePreview] = useState(project.image);

    // 3. useEffect hanya perlu membersihkan blob URL, tidak perlu dipicu oleh project.image
    useEffect(() => {
        return () => {
            // Bersihkan hanya jika itu adalah Blob URL yang dibuat baru
            if (imagePreview && imagePreview.startsWith("blob:")) {
                URL.revokeObjectURL(imagePreview);
            }
        };
        // Dependency array harus kosong atau hanya menyertakan imagePreview jika perlu.
        // Di sini kita biarkan seperti ini agar hanya berjalan saat komponen unmount/mount.
    }, []);

    function handleFileChange(e) {
        const file = e.target.files[0];

        form.setData("image", file || null);

        if (file) {
            // Jika ada file baru, buat Blob URL baru
            const url = URL.createObjectURL(file);
            setImagePreview(url);
        } else {
            // JIKA FILE DIHAPUS (input file direset):
            // 1. Tampilkan kembali gambar lama (project.image)
            // 2. Jika tidak ada gambar lama, set ke null
            setImagePreview(project.image || null);
        }
    }

    function addTech(e) {
        e.preventDefault();
        const value = techInput.trim();
        if (!value) return;
        form.setData("tech", [...form.data.tech, value]);
        setTechInput("");
    }

    function removeTech(idx) {
        const newTech = form.data.tech.filter((_, i) => i !== idx);
        form.setData("tech", newTech);
    }

    function submit(e) {
        e.preventDefault();
        form.post(route("admin.projects.update", project.id), {
            forceFormData: true,
        });
    }

    return (
        <AuthenticatedLayout>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <h1 className="text-2xl font-bold mb-6">
                            Create New Project
                        </h1>

                        <form onSubmit={submit} encType="multipart/form-data">
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Project Title
                                </label>
                                <input
                                    type="text"
                                    value={form.data.title}
                                    onChange={(e) =>
                                        form.setData("title", e.target.value)
                                    }
                                    className="shadow-sm border rounded w-full py-2 px-3"
                                    placeholder="Enter project title"
                                />
                                {form.errors.title && (
                                    <p className="text-red-600 text-sm mt-1">
                                        {form.errors.title}
                                    </p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Description
                                </label>
                                <textarea
                                    value={form.data.description}
                                    onChange={(e) =>
                                        form.setData(
                                            "description",
                                            e.target.value
                                        )
                                    }
                                    className="shadow-sm border rounded w-full py-2 px-3 h-28"
                                    placeholder="Project description"
                                />
                                {form.errors.description && (
                                    <p className="text-red-600 text-sm mt-1">
                                        {form.errors.description}
                                    </p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Image
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="block w-full text-sm text-gray-700"
                                />
                                {/* TAMPILKAN PREVIEW */}
                                {imagePreview && (
                                    <div className="mt-2">
                                        <img
                                            src={imagePreview} // Menggunakan URL lama atau Blob URL baru
                                            alt="preview"
                                            className="max-h-48 object-contain"
                                        />
                                    </div>
                                )}
                                {form.errors.image && (
                                    <p className="text-red-600 text-sm mt-1">
                                        {form.errors.image}
                                    </p>
                                )}
                                <p className="text-gray-500 text-xs mt-1">
                                    Or, you can later set an external URL in the
                                    API if needed.
                                </p>
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Technologies (tech)
                                </label>

                                <div className="flex items-center gap-2 mb-2">
                                    <input
                                        type="text"
                                        value={techInput}
                                        onChange={(e) =>
                                            setTechInput(e.target.value)
                                        }
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") addTech(e);
                                        }}
                                        className="shadow-sm border rounded w-full py-2 px-3"
                                        placeholder="Type tech and press Enter or click Add"
                                    />
                                    <button
                                        onClick={addTech}
                                        className="bg-blue-600 text-white px-3 py-2 rounded"
                                    >
                                        Add
                                    </button>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {form.data.tech.map((t, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-gray-200 px-2 py-1 rounded flex items-center gap-2"
                                        >
                                            <span className="text-sm">{t}</span>
                                            <button
                                                type="button"
                                                onClick={() => removeTech(idx)}
                                                className="text-red-600 text-sm font-bold ml-1"
                                            >
                                                ×
                                            </button>
                                        </span>
                                    ))}
                                </div>

                                {form.errors.tech && (
                                    <p className="text-red-600 text-sm mt-1">
                                        {form.errors.tech}
                                    </p>
                                )}
                            </div>

                            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Visit Link
                                    </label>
                                    <input
                                        type="url"
                                        value={form.data.visit_link}
                                        onChange={(e) =>
                                            form.setData(
                                                "visit_link",
                                                e.target.value
                                            )
                                        }
                                        className="shadow-sm border rounded w-full py-2 px-3"
                                        placeholder="https://example.com"
                                    />
                                    {form.errors.visit_link && (
                                        <p className="text-red-600 text-sm mt-1">
                                            {form.errors.visit_link}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Repo Link
                                    </label>
                                    <input
                                        type="url"
                                        value={form.data.repo_link}
                                        onChange={(e) =>
                                            form.setData(
                                                "repo_link",
                                                e.target.value
                                            )
                                        }
                                        className="shadow-sm border rounded w-full py-2 px-3"
                                        placeholder="https://github.com/your/repo"
                                    />
                                    {form.errors.repo_link && (
                                        <p className="text-red-600 text-sm mt-1">
                                            {form.errors.repo_link}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <button
                                    type="submit"
                                    disabled={form.processing}
                                    className="bg-green-600 text-white px-4 py-2 rounded"
                                >
                                    {form.processing
                                        ? "Saving..."
                                        : "Update Project"}
                                </button>

                                <a
                                    href={route("admin.projects.index")}
                                    className="text-sm text-gray-600 hover:underline"
                                >
                                    Cancel
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
