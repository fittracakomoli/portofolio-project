import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({
    className = "",
    menuColor = "#fff",
    buttonBgColor = "rgba(255, 255, 255, 0.2)",
    buttonTextColor = "#fff",
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isShrunk, setIsShrunk] = useState(false);

    const items = [
        { label: "About Me", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Journey", href: "#journey" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contacts" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const shouldShrink = window.scrollY > 50;
            if (shouldShrink !== isShrunk) {
                setIsShrunk(shouldShrink);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isShrunk]);

    const navWidthClass = isShrunk ? "max-w-6xl" : "max-w-full";

    return (
        <div
            className={`fixed px-8 lg:px-48 top-8 inset-x-0 z-20 transition-all duration-300 ${className}`}
        >
            <nav
                className={`mx-auto flex justify-between items-center 
                           bg-white/10 backdrop-blur-md border border-white/20 rounded-full 
                           transition-all duration-300 ease-in-out px-8 py-4
                           ${navWidthClass}`}
            >
                <div className="flex items-center">
                    <a
                        href="#greetings"
                        className="text-white text-xl font-bold transition-all duration-300"
                    >
                        Fittra Cakomoli
                    </a>
                </div>

                <div className="hidden md:flex items-center space-x-6">
                    {items.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.href}
                            className="text-white font-medium hover:text-gray-200 transition duration-300"
                        >
                            {item.label}
                        </a>
                    ))}

                    <button
                        type="button"
                        className="inline-flex border-0 rounded-full px-4 py-2 items-center font-medium cursor-pointer transition-colors duration-300"
                        style={{
                            backgroundColor: buttonBgColor,
                            color: buttonTextColor,
                        }}
                    >
                        Download CV
                    </button>
                </div>

                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
                >
                    {isMenuOpen ? (
                        <FiX className="w-6 h-6" />
                    ) : (
                        <FiMenu className="w-6 h-6" />
                    )}
                </button>
            </nav>

            <div
                className={`md:hidden absolute inset-x-8 mt-2 p-4
                           bg-white/20 backdrop-blur-md border border-white/30 rounded-lg shadow-lg transition-all duration-300 origin-top
                           ${
                               isMenuOpen
                                   ? "scale-y-100 opacity-100"
                                   : "scale-y-0 opacity-0 h-0 pointer-events-none"
                           }`}
            >
                <div className="flex flex-col space-y-3">
                    {items.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.href}
                            className="text-white font-medium text-lg block py-1 hover:text-gray-200 transition duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                    <button
                        type="button"
                        className="w-full mt-4 text-center border-0 rounded-lg px-4 py-2 font-medium cursor-pointer transition-colors duration-300"
                        style={{
                            backgroundColor: buttonBgColor,
                            color: buttonTextColor,
                        }}
                    >
                        Download CV
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
