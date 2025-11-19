import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Aurora from "@/Components/Aurora";

export default function GuestLayout({ children }) {
    return (
        <div className="relative">
            {/* background layer — absolute (bukan fixed) => akan ikut bergeser saat scroll */}
            <div className="absolute inset-0 -z-30 pointer-events-none">
                {/* Aurora di bagian atas halaman */}
                <div className="absolute inset-x-0 top-0 h-96 overflow-hidden">
                    <Aurora
                        blend={0.5}
                        amplitude={1.0}
                        speed={1}
                        className="h-full"
                    />
                </div>
            </div>

            {/* konten utama dengan z-10 agar selalu di atas background */}
            <div className="relative z-10">
                <Navbar />
                <main>{children}</main>
                <Footer />
            </div>
        </div>
    );
}
