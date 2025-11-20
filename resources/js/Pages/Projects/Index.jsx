import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";

export default function Index({ projects }) {
    const { delete: destroy } = useForm({});

    const handleDelete = (projectId) => {
        if (
            confirm(
                "Are you sure you want to delete this project? This action cannot be undone."
            )
        ) {
            // Kirim request DELETE ke rute destroy
            destroy(route("admin.projects.destroy", projectId));
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Projects
                    </h2>
                    <a
                        href={route("admin.projects.create")}
                        className="bg-black text-white px-4 py-2 rounded-lg"
                    >
                        Create Project
                    </a>
                </div>
            }
        >
            <div className="py-12">
                <div className="mx-auto max-w-7xl px-6 md:px-8">
                    {projects.length > 0 ? (
                        <>
                            <div className="grid md:grid-cols-3 gap-4">
                                {projects.map((project) => (
                                    <div
                                        key={project.id}
                                        className=" bg-white shadow-sm rounded-lg p-4"
                                    >
                                        <div className="aspect-video w-full">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="object-cover w-full h-full rounded-lg"
                                            />
                                        </div>

                                        <h3 className="font-bold text-xl my-4">
                                            {project.title}
                                        </h3>

                                        <p className="text-base">
                                            {project.description}
                                        </p>

                                        <div className="w-full flex flex-wrap gap-2 my-4">
                                            {JSON.parse(project.tech).map(
                                                (tag, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-black px-4 py-1 rounded-full text-white font-semibold text-sm"
                                                    >
                                                        {tag}
                                                    </span>
                                                )
                                            )}
                                        </div>

                                        {/* edit delete button */}
                                        <div className="flex gap-4">
                                            <a
                                                href={`/admin/projects/${project.id}/edit`}
                                                className="w-full bg-black px-4 py-2 text-white text-center rounded-lg"
                                            >
                                                Edit
                                            </a>
                                            <button // Gunakan <button> untuk Delete
                                                onClick={() =>
                                                    handleDelete(project.id)
                                                } // Panggil handler
                                                className="w-full bg-red-600 px-4 py-2 text-white text-center rounded-lg" // Ganti warna menjadi merah
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="w-full bg-white backdrop-blur-md p-6 rounded-xl text-center">
                            No projects available. Please add new projects.
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
