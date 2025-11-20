// resources/js/Pages/ContactMessages/Index.jsx

import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, router } from "@inertiajs/react"; // Import router
import Modal from "@/Components/Modal"; // Asumsi Anda memiliki komponen Modal

export default function Index({ auth, messages, flash }) {
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Form untuk balasan email
    const replyForm = useForm({
        reply_message: "",
    });

    // Fungsi untuk membuka modal dan menandai sudah dibaca
    const handleOpenMessage = (message) => {
        setSelectedMessage(message);
        setIsModalOpen(true);

        // Tandai sebagai sudah dibaca jika statusnya 'false'
        if (!message.is_read) {
            // Gunakan router.patch karena Inertia tidak mengizinkan GET/POST biasa untuk state change
            router.patch(
                route("admin.messages.markAsRead", message.id),
                {},
                {
                    preserveScroll: true,
                    onSuccess: () => {
                        // Update data lokal (tidak wajib jika Inertia otomatis me-reload)
                        message.is_read = true;
                    },
                }
            );
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedMessage(null);
        replyForm.reset(); // Reset form balasan
    };

    const submitReply = (e) => {
        e.preventDefault();

        if (selectedMessage) {
            replyForm.post(route("admin.messages.reply", selectedMessage.id), {
                onSuccess: () => {
                    handleCloseModal();
                    alert("Balasan berhasil dikirim!"); // Tampilkan notifikasi
                },
                onError: (errors) => {
                    console.error(errors);
                },
            });
        }
    };

    // Asumsi flash.success dikirim dari controller
    const successMessage = flash?.success;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Daftar Pesan Kontak
                </h2>
            }
        >
            <Head title="Pesan Kontak" />

            {successMessage && (
                <div
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mx-auto max-w-7xl mt-4"
                    role="alert"
                >
                    <span className="block sm:inline">{successMessage}</span>
                </div>
            )}

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-xl font-bold mb-4">
                                Pesan Masuk ({messages.length})
                            </h3>

                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>{/* ... (Header kolom) ... */}</tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {messages.map((message) => (
                                            <tr
                                                key={message.id}
                                                // 4. INDIKATOR PESAN BELUM DIBACA
                                                className={`cursor-pointer hover:bg-gray-100 ${
                                                    !message.is_read
                                                        ? "bg-yellow-50 font-semibold"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    handleOpenMessage(message)
                                                }
                                            >
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {message.name}
                                                    {!message.is_read && (
                                                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                            Baru
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {message.email}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500 max-w-lg truncate">
                                                    {message.message}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {new Date(
                                                        message.created_at
                                                    ).toLocaleDateString()}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {messages.length === 0 && (
                                <p className="text-center py-4 text-gray-500">
                                    Belum ada pesan masuk.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. MODAL DETAIL & BALAS */}
            {selectedMessage && (
                <Modal
                    show={isModalOpen}
                    onClose={handleCloseModal}
                    maxWidth="2xl"
                >
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-4">
                            Detail Pesan
                        </h3>

                        <div className="border-b pb-4 mb-4">
                            <p>
                                <strong>Dari:</strong> {selectedMessage.name}{" "}
                                &lt;{selectedMessage.email}&gt;
                            </p>
                            <p>
                                <strong>Tanggal:</strong>{" "}
                                {new Date(
                                    selectedMessage.created_at
                                ).toLocaleString()}
                            </p>
                        </div>

                        <div className="bg-gray-100 p-4 rounded-lg mb-6">
                            <p className="whitespace-pre-wrap">
                                {selectedMessage.message}
                            </p>
                        </div>

                        {/* Form Balasan */}
                        <form onSubmit={submitReply}>
                            <h4 className="text-xl font-semibold mb-2">
                                Balas Email
                            </h4>
                            <div className="mb-4">
                                <label
                                    htmlFor="reply_message"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Pesan Balasan:
                                </label>
                                <textarea
                                    id="reply_message"
                                    value={replyForm.data.reply_message}
                                    onChange={(e) =>
                                        replyForm.setData(
                                            "reply_message",
                                            e.target.value
                                        )
                                    }
                                    rows="5"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder={`Membalas ke ${selectedMessage.email}...`}
                                    required
                                />
                                {replyForm.errors.reply_message && (
                                    <p className="text-sm text-red-600 mt-1">
                                        {replyForm.errors.reply_message}
                                    </p>
                                )}
                            </div>

                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                                >
                                    Tutup
                                </button>
                                <button
                                    type="submit"
                                    disabled={replyForm.processing}
                                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
                                >
                                    {replyForm.processing
                                        ? "Mengirim..."
                                        : "Kirim Balasan"}
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal>
            )}
        </AuthenticatedLayout>
    );
}
