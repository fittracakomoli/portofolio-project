import React from "react";

export default function Footer({ year = new Date().getFullYear() }) {
    function backToTop() {
        if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }

    return (
        <footer className="text-gray-200">
            <div className="mx-auto px-8 lg:px-48 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <h4 className="text-2xl font-semibold text-white">
                    Fittra Cakomoli
                </h4>

                <p className="text-sm text-white">
                    Copyright © {year} Fittra Cakomoli. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
