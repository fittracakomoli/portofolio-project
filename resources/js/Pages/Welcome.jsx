import { Head, Link } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import TextType from "@/Components/TextType";
import SpotlightCard from "@/Components/SpotlightCard";

export default function Welcome() {
    const tools = [
        {
            label: "PHP",
            path: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png",
        },
        {
            label: "Laravel",
            path: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1154px-Laravel.svg.png",
        },
        {
            label: "JavaScript",
            path: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png",
        },
        {
            label: "React",
            path: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        },
        {
            label: "Tailwind",
            path: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
        },
        {
            label: "Bootstrap",
            path: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png",
        },
        {
            label: "MySQL",
            path: "https://upload.wikimedia.org/wikipedia/id/a/a9/MySQL.png",
        },
        {
            label: "HTML",
            path: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png",
        },
        {
            label: "CSS",
            path: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/851px-CSS3_logo_and_wordmark.svg.png",
        },
        {
            label: "Node JS",
            path: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-512.png",
        },
        {
            label: "GIT",
            path: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png",
        },
        {
            label: "Python",
            path: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png",
        },
        {
            label: "Java",
            path: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png",
        },
        {
            label: "C++",
            path: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/911px-ISO_C%2B%2B_Logo.svg.png",
        },
        {
            label: "Go Lang",
            path: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/512px-Go_Logo_Blue.svg.png",
        },
        {
            label: "Figma",
            path: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png",
        },
        {
            label: "After Effects",
            path: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/2101px-Adobe_After_Effects_CC_icon.svg.png",
        },
        {
            label: "Premiere Pro",
            path: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/2101px-Adobe_Premiere_Pro_CC_icon.svg.png",
        },
        {
            label: "Photoshop",
            path: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/500px-Adobe_Photoshop_CC_icon.svg.png",
        },
        {
            label: "Illustrator",
            path: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/512px-Adobe_Illustrator_CC_icon.svg.png?20251029195730",
        },
        {
            label: "OBS Studio",
            path: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/OBS_Studio_Logo.svg/1024px-OBS_Studio_Logo.svg.png",
        },
        {
            label: "vMix",
            path: "https://images.seeklogo.com/logo-png/43/2/vmix-logo-png_seeklogo-433108.png",
        },
        { label: "React", path: "#" },
        { label: "React", path: "#" },
        { label: "React", path: "#" },
        { label: "React", path: "#" },
        { label: "React", path: "#" },
    ];

    const academicJourney = [
        {
            year: "2020",
            endyear: "2023",
            title: "SMK negeri 2 Pati",
            desc: "Multimedia Department",
        },
        {
            year: "2023",
            endyear: "Present",
            title: "Universitas Negeri Semarang",
            desc: "Informatics Engineering Department",
        },
    ];

    const orgJourney = [
        {
            year: "2024",
            endyear: "2025",
            title: "Hima Ilmu Komputer UNNES",
            desc: "Staff of Communication and Information Division",
        },
        {
            year: "2025",
            endyear: "Present",
            title: "Hima Ilmu Komputer UNNES",
            desc: "Vice Head of Communication and Information Division",
        },
    ];

    const certification = [
        {
            year: "2023",
            endyear: "2025",
            title: "BNSP",
            desc: "KKNI Multimedia Level 2 Certification",
        },
        {
            year: "2024",
            endyear: "Present",
            title: "Dicoding Academy",
            desc: "Javascript Programming Certification",
        },
        {
            year: "2025",
            endyear: "Present",
            title: "Huawei",
            desc: "AI Basic: Overview of Artificial Intelligence Certification",
        },
    ];

    const projects = [
        {
            title: "Hima Ilkom Official Website",
            link: "https://himailkomunnes.com",
            image: "/img/himailkom.png",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad voluptates dolorum numquam culpa accusantium aspernatur minus cumque temporibus, adipisci earum.",
            techStack: ["Laravel", "React"],
        },
        {
            title: "Attendance Website",
            link: "https://presensi.himailkomunnes.com",
            image: "/img/presensi.png",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad voluptates dolorum numquam culpa accusantium aspernatur minus cumque temporibus, adipisci earum.",
            techStack: ["Laravel", "React"],
        },
        {
            title: "Ticket-Ink",
            link: "#",
            image: "/img/ticketink.png",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad voluptates dolorum numquam culpa accusantium aspernatur minus cumque temporibus, adipisci earum.",
            techStack: ["Laravel", "Blade"],
        },
        {
            title: "Kentucky Catering",
            link: "#",
            image: "/img/catering.png",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad voluptates dolorum numquam culpa accusantium aspernatur minus cumque temporibus, adipisci earum.",
            techStack: ["HTML", "CSS", "JavaScript"],
        },
        {
            title: "Eternal Commerce",
            link: "#",
            image: "/img/eternal.png",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad voluptates dolorum numquam culpa accusantium aspernatur minus cumque temporibus, adipisci earum.",
            techStack: ["HTML", "CSS", "JavaScript"],
        },
        {
            title: "Wedding Invitation",
            link: "#",
            image: "/img/wedding.png",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad voluptates dolorum numquam culpa accusantium aspernatur minus cumque temporibus, adipisci earum.",
            techStack: ["HTML", "CSS"],
        },
        {
            title: "Restorasi Citra",
            link: "#",
            image: "/img/restorasi.png",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad voluptates dolorum numquam culpa accusantium aspernatur minus cumque temporibus, adipisci earum.",
            techStack: ["Python", "Flask", "MatLab"],
        },
        {
            title: "Laptop Recommendation",
            link: "#",
            image: "/img/laptop.png",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad voluptates dolorum numquam culpa accusantium aspernatur minus cumque temporibus, adipisci earum.",
            techStack: ["Python", "Flask", "Random Forest"],
        },
        {
            title: "SIRINA",
            link: "#",
            image: "/img/sirina.png",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad voluptates dolorum numquam culpa accusantium aspernatur minus cumque temporibus, adipisci earum.",
            techStack: ["Figma"],
        },
        {
            title: "KarirNess",
            link: "#",
            image: "/img/karirness.png",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad voluptates dolorum numquam culpa accusantium aspernatur minus cumque temporibus, adipisci earum.",
            techStack: ["Figma"],
        },
        {
            title: "Disaster Alert",
            link: "#",
            image: "/img/disaster.png",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad voluptates dolorum numquam culpa accusantium aspernatur minus cumque temporibus, adipisci earum.",
            techStack: ["Figma"],
        },
        {
            title: "LogiLink",
            link: "#",
            image: "/img/logilink.png",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad voluptates dolorum numquam culpa accusantium aspernatur minus cumque temporibus, adipisci earum.",
            techStack: ["Figma"],
        },
    ];

    const socials = [
        {
            name: "Explore",
            desc: "GitHub",
            subDesc: "Repositories & Projects",
            url: "https://github.com/fittracakomoli",
            colorClass: "gray-500",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                    aria-hidden
                >
                    <path d="M12 .5C5.73.5.75 5.48.75 11.74c0 4.93 3.19 9.11 7.61 10.59.56.1.77-.24.77-.54 0-.27-.01-1-.02-1.96-3.09.67-3.74-1.49-3.74-1.49-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.07-.67.07-.67 1.1.08 1.68 1.13 1.68 1.13.97 1.66 2.55 1.18 3.17.9.1-.7.38-1.18.69-1.45-2.47-.28-5.07-1.24-5.07-5.52 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.11 1.15a10.8 10.8 0 0 1 2.83-.38c.96.01 1.93.13 2.83.38 2.15-1.45 3.1-1.15 3.1-1.15.62 1.54.24 2.68.12 2.96.72.78 1.16 1.78 1.16 3 0 4.29-2.61 5.24-5.09 5.51.39.34.73 1.03.73 2.08 0 1.5-.01 2.71-.01 3.08 0 .3.2.65.78.54A11.26 11.26 0 0 0 23.25 11.75C23.25 5.48 18.27.5 12 .5z" />
                </svg>
            ),
        },
        {
            name: "Connect",
            desc: "LinkedIn",
            subDesc: "Professional Profile",
            url: "https://www.linkedin.com/in/fittra-marga-ardana",
            colorClass: "blue-500",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                    aria-hidden
                >
                    <path d="M4.98 3.5A2.5 2.5 0 1 1 4.98 8.5 2.5 2.5 0 0 1 4.98 3.5zM3 9h4v12H3zM9 9h3.8v1.6h.1c.5-.9 1.7-1.8 3.5-1.8 3.7 0 4.4 2.4 4.4 5.5V21H17V15.7c0-1.3 0-3-1.8-3-1.8 0-2.1 1.4-2.1 2.9V21H9z" />
                </svg>
            ),
        },
        {
            name: "Stalk",
            desc: "Instagram",
            subDesc: "Photo & Video Sharing",
            url: "https://instagram.com/fittracakomoli",
            colorClass: "pink-500 ",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    className="w-5 h-5"
                    aria-hidden
                >
                    <path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
            ),
        },
        {
            name: "Watch",
            desc: "YouTube",
            subDesc: "Video Content",
            url: "https://www.youtube.com/@fittracakomoli",
            colorClass: "red-500 ",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    fill="currentColor"
                    className="w-5 h-5"
                    aria-hidden
                >
                    <path d="M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z" />
                </svg>
            ),
        },
    ];

    return (
        <>
            <GuestLayout>
                <div className="mx-auto max-w-full px-8 lg:px-48">
                    <section id="greetings" className="pt-40">
                        <div className="md:flex justify-between items-center gap-20">
                            <div className="flex flex-col w-full">
                                <h3 className="text-3xl font-medium text-white mb-4">
                                    Hello, I'm Fittra.
                                </h3>
                                <h1 className="text-7xl font-bold text-white">
                                    <TextType
                                        text={[
                                            "Frontend",
                                            "Backend",
                                            "Fullstack",
                                        ]}
                                        typingSpeed={100}
                                        deletingSpeed={150}
                                        pauseDuration={1500}
                                        showCursor={false}
                                        cursorCharacter="|"
                                        textColors={[
                                            "#16a34a",
                                            "#2563eb",
                                            "#9333ea",
                                        ]}
                                    />
                                </h1>
                                <h1 className="text-7xl font-bold text-white">
                                    Developer
                                </h1>
                                <p className="my-8 text-2xl text-gray-300">
                                    I passionately craft web applications that
                                    are not only visually stunning but also
                                    deliver seamless user experiences and robust
                                    functionality across the entire stack.
                                </p>
                                <div className="flex items-center gap-4">
                                    <a
                                        href="#projects"
                                        className="text-white text-lg font-semibold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 px-6 py-2 rounded-full"
                                    >
                                        Explore Projects
                                    </a>
                                    <Link className="text-white text-lg font-semibold border border-white px-6 py-2 rounded-full">
                                        Download CV
                                    </Link>
                                </div>
                            </div>
                            <div className="sm:w-2/5 my-8">
                                <div className="border border-white p-8 rounded-full">
                                    <img
                                        src="/img/Capture06391.jpg"
                                        className="rounded-full w-full object-cover"
                                        alt="Fittra Cakomoli"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="about" className="pt-32">
                        <div className="md:flex justify-between items-center gap-20">
                            <div className="flex justify-center flex-col items-center w-full">
                                <div className="w-full grid md:grid-cols-3 gap-8 mx-auto justify-between items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-lg transition-all duration-300 ease-in-out p-4">
                                    <div className="text-white group hover:bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 p-4 rounded-lg transition-all duration-300">
                                        <h4 className="font-semibold text-xl mb-2 text-green-600 group-hover:text-white transition-colors duration-200">
                                            Personality Specificity
                                        </h4>
                                        <p className="text-lg text-justify group-hover:text-white transition-colors duration-200">
                                            I am a Full-Stack Developer as
                                            usually on Backend Developer focused
                                            on creating intuitive and
                                            user-centered interfaces or building
                                            scalable and efficient backend
                                            applications.
                                        </p>
                                    </div>
                                    <div className="text-white group hover:bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 p-4 rounded-lg transition-all duration-300">
                                        <h4 className="font-semibold text-xl mb-2 text-green-600 group-hover:text-white transition-colors duration-200">
                                            Outcome and Goals
                                        </h4>
                                        <p className="text-lg text-justify group-hover:text-white transition-colors duration-200">
                                            My main goal is to transform complex
                                            ideas or obvious inspiration into
                                            digital solutions that are elegant,
                                            functional, and deliver real value
                                            to users. I believe in measurable
                                            outcomes.
                                        </p>
                                    </div>
                                    <div className="text-white group hover:bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 p-4 rounded-lg transition-all duration-300">
                                        <h4 className="font-semibold text-xl mb-2 text-green-600 group-hover:text-white transition-colors duration-200">
                                            Growth Mindset and Collaboration
                                        </h4>
                                        <p className="text-lg text-justify">
                                            I have a strong appetite for new
                                            knowledge about Full-Stack
                                            Developer, and I excel in
                                            collaborative team environments. I
                                            am ready to bring my enthusiasm for
                                            learning and my technical skills to
                                            your next project.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="skills" className="pt-32">
                        <div className="md:flex justify-between items-center gap-20">
                            <div className="flex justify-center flex-col items-center w-full">
                                <h3 className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 inline-block text-transparent bg-clip-text text-4xl font-bold mb-2">
                                    Familiar Tools
                                </h3>
                                <p className="text-white text-center mb-8">
                                    Some tools and tech-stack I have used to my
                                    projects.
                                </p>
                                <div className="w-full grid grid-cols-3 md:grid-cols-9 gap-2">
                                    {tools.map((tools, idx) => (
                                        <div
                                            key={idx}
                                            className="flex w-full items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-lg transition-all duration-300 ease-in-out p-4 text-center text-white"
                                        >
                                            <div className="flex flex-col justify-center items-center gap-2">
                                                <img
                                                    src={tools.path}
                                                    alt={tools.label}
                                                    className="h-8 mb-2"
                                                />
                                                <p>{tools.label}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="journey" className="pt-32">
                        <div className="md:flex justify-between items-center gap-20">
                            <div className="flex justify-center flex-col items-center w-full">
                                <h3 className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 inline-block text-transparent bg-clip-text text-4xl font-bold mb-2">
                                    Amazing Journey
                                </h3>
                                <p className="text-white text-center mb-8">
                                    Some tools and tech-stack I have used to my
                                    projects.
                                </p>

                                <div className="w-full md:flex gap-4">
                                    <div className="w-full mx-auto relative px-6">
                                        <div className="py-4 text-center rounded-full bg-gradient-to-r from-green-600 via-blue-600 to-purple-600">
                                            <h3 className="text-white text-xl font-semibold">
                                                Academic Journey
                                            </h3>
                                        </div>
                                        {/* vertical line */}
                                        <div className="absolute left-12 top-0 -z-10 bottom-0 w-px bg-white/20"></div>

                                        <div className="mt-12">
                                            {academicJourney.map(
                                                (item, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="mb-12 flex items-center gap-6"
                                                    >
                                                        <div className="flex flex-col items-center">
                                                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 flex items-center justify-center text-white font-semibold text-sm"></div>
                                                            {idx !==
                                                                academicJourney.length -
                                                                    1 && (
                                                                <div className="w-px bg-white/10 flex-1 mt-2" />
                                                            )}
                                                        </div>

                                                        <div className="ml-4 bg-white/5 p-4 rounded-lg border border-white/10 text-white w-full">
                                                            <h4 className="font-semibold text-base">
                                                                {item.year} -{" "}
                                                                {item.endyear}
                                                            </h4>
                                                            <h4 className="font-semibold text-lg bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
                                                                {item.title}
                                                            </h4>
                                                            <p className="text-base text-gray-300 mt-1">
                                                                {item.desc}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                    <div className="w-full mx-auto relative px-6">
                                        <div className="py-4 text-center rounded-full bg-gradient-to-r from-green-600 via-blue-600 to-purple-600">
                                            <h3 className="text-white text-xl font-semibold">
                                                Organization Calling
                                            </h3>
                                        </div>
                                        {/* vertical line */}
                                        <div className="absolute left-12 top-0 -z-10 bottom-0 w-px bg-white/20"></div>

                                        <div className="mt-12">
                                            {orgJourney.map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className="mb-12 flex items-center gap-6"
                                                >
                                                    <div className="flex flex-col items-center">
                                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 flex items-center justify-center text-white font-semibold text-sm"></div>
                                                        {idx !==
                                                            orgJourney.length -
                                                                1 && (
                                                            <div className="w-px bg-white/10 flex-1 mt-2" />
                                                        )}
                                                    </div>

                                                    <div className="ml-4 bg-white/5 p-4 rounded-lg border border-white/10 text-white w-full">
                                                        <h4 className="font-semibold text-base">
                                                            {item.year} -{" "}
                                                            {item.endyear}
                                                        </h4>
                                                        <h4 className="font-semibold text-lg bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
                                                            {item.title}
                                                        </h4>
                                                        <p className="text-base text-gray-300 mt-1">
                                                            {item.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="w-full mx-auto relative px-6">
                                        <div className="py-4 text-center rounded-full bg-gradient-to-r from-green-600 via-blue-600 to-purple-600">
                                            <h3 className="text-white text-xl font-semibold">
                                                Certification
                                            </h3>
                                        </div>
                                        {/* vertical line */}
                                        <div className="absolute left-12 top-0 -z-10 bottom-0 w-px bg-white/20"></div>

                                        <div className="mt-12">
                                            {certification.map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className="mb-12 flex items-center gap-6"
                                                >
                                                    <div className="flex flex-col items-center">
                                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 flex items-center justify-center text-white font-semibold text-sm"></div>
                                                        {idx !==
                                                            certification.length -
                                                                1 && (
                                                            <div className="w-px bg-white/10 flex-1 mt-2" />
                                                        )}
                                                    </div>

                                                    <div className="ml-4 bg-white/5 p-4 rounded-lg border border-white/10 text-white w-full">
                                                        <h4 className="font-semibold text-base">
                                                            {item.year}
                                                        </h4>
                                                        <h4 className="font-semibold text-lg bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
                                                            {item.title}
                                                        </h4>
                                                        <p className="text-base text-gray-300 mt-1">
                                                            {item.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="projects" className="pt-32">
                        <div className="md:flex justify-between items-center gap-20">
                            <div className="flex justify-center flex-col items-center w-full">
                                <h3 className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 inline-block text-transparent bg-clip-text text-4xl font-bold mb-2">
                                    Projects Experience
                                </h3>
                                <p className="text-white text-center mb-8">
                                    Some tools and tech-stack I have used to my
                                    projects.
                                </p>

                                <div className="w-full grid md:grid-cols-3 gap-4">
                                    {projects.map((project, index) => (
                                        <SpotlightCard
                                            key={index}
                                            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl custom-spotlight-card"
                                            spotlightColor="rgba(255, 255, 255, 0.1)"
                                        >
                                            <div className="z-10">
                                                <div className="aspect-video w-full">
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="object-cover w-full h-full rounded-lg"
                                                    />
                                                </div>

                                                <h3 className="py-4 font-black text-3xl bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
                                                    {project.title}
                                                </h3>

                                                <p className="text-white text-lg">
                                                    {project.description}
                                                </p>

                                                <div className="w-full flex flex-wrap gap-2 pt-4">
                                                    {project.techStack.map(
                                                        (tech, techIndex) => (
                                                            <span
                                                                key={techIndex}
                                                                className="bg-gradient-to-r from-green-600/50 via-blue-600/50 to-purple-600/50 px-4 py-1 rounded-full text-white font-semibold text-sm"
                                                            >
                                                                {tech}
                                                            </span>
                                                        )
                                                    )}
                                                </div>

                                                <div className="mt-4 flex gap-3">
                                                    {project.repoUrl ? (
                                                        <a
                                                            href={
                                                                project.repoUrl
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex justify-center text-center items-center px-4 py-2 border border-white text-white rounded-full w-full font-semibold"
                                                            aria-label={`View repository for ${project.title}`}
                                                        >
                                                            View Repository
                                                        </a>
                                                    ) : (
                                                        <button
                                                            type="button"
                                                            disabled
                                                            className="border hidden text-center border-white inline-flex justify-center items-center px-4 py-2 bg-white/6 text-white rounded-full w-full font-semibold opacity-40 cursor-not-allowed"
                                                        >
                                                            View Repository
                                                        </button>
                                                    )}

                                                    {project.link ? (
                                                        <a
                                                            href={project.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="w-full text-center inline-flex justify-center items-center px-4 py-2 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white rounded-full font-semibold"
                                                            aria-label={`Visit site for ${project.title}`}
                                                        >
                                                            Visit Site
                                                        </a>
                                                    ) : (
                                                        <button
                                                            type="button"
                                                            disabled
                                                            className="w-full hidden text-center inline-flex justify-center items-center px-4 py-2 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white rounded-full font-semibold opacity-40 cursor-not-allowed"
                                                        >
                                                            Visit Site
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </SpotlightCard>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="contacts" className="py-32">
                        <div className="md:flex justify-between items-center gap-20">
                            <div className="flex justify-center flex-col items-center w-full">
                                <h3 className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 inline-block text-transparent bg-clip-text text-4xl font-bold mb-2">
                                    Let's Collaborate
                                </h3>
                                <p className="text-white text-center mb-8">
                                    Some tools and tech-stack I have used to my
                                    projects.
                                </p>

                                <div className="w-full md:flex">
                                    <form
                                        action=""
                                        method="POST"
                                        class="bg-transparent pe-8 w-full mx-auto rounded-md"
                                        autocomplete="off"
                                    >
                                        <div class="flex flex-col gap-6 text-white">
                                            <div class="flex flex-col gap-2">
                                                <label class="font-semibold text-lg">
                                                    Name
                                                </label>
                                                <input
                                                    placeholder="Your Full Name"
                                                    class="bg-transparent border border-white py-2.5 px-4 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-600 transition-colors duration-300 ease-in-out"
                                                    required=""
                                                    type="text"
                                                    name="name"
                                                />
                                            </div>
                                            <div class="flex flex-col gap-2">
                                                <label class="font-semibold text-lg">
                                                    Email
                                                </label>
                                                <input
                                                    placeholder="youremail@example.com"
                                                    class="bg-transparent border border-white py-2.5 px-4 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-600 transition-colors duration-300 ease-in-out"
                                                    required=""
                                                    type="email"
                                                    name="email"
                                                />
                                            </div>
                                            <div class="flex flex-col gap-2">
                                                <label class="font-semibold text-lg">
                                                    Message
                                                </label>
                                                <textarea
                                                    name="message"
                                                    id="message"
                                                    cols="45"
                                                    rows="7"
                                                    placeholder="Hello! I'm interested in collaborating with you on..."
                                                    class="bg-transparent border border-white py-2.5 px-4 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-600 transition-colors duration-300 ease-in-out"
                                                    required=""
                                                ></textarea>
                                            </div>
                                            <div>
                                                <button
                                                    type="submit"
                                                    class="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 px-5 py-2 rounded-full block font-semibold hover:font-bold transition-all hover:scale-101"
                                                >
                                                    Send Message
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="flex flex-col items-start md:items-end w-full md:ps-8 py-8">
                                        <div className="flex flex-col gap-4 justify-center w-full">
                                            {socials.map((s) => (
                                                <div
                                                    key={s.name}
                                                    className="flex items-center justify-between gap-4 bg-white/4 border border-white/10 rounded-xl p-3 hover:shadow-lg transition-transform transform hover:-translate-y-1"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <span
                                                            className={`flex items-center justify-center w-12 h-12 rounded-full text-white shadow-md bg-${s.colorClass}`}
                                                        >
                                                            {s.icon}
                                                        </span>
                                                        <div className="text-left">
                                                            <h4 className="font-semibold text-white">
                                                                {s.desc}
                                                            </h4>
                                                            <p className="text-sm text-gray-300">
                                                                {s.subDesc}
                                                            </p>
                                                            <p className="text-xs text-gray-400 truncate max-w-[220px] mt-1">
                                                                {s.url.replace(
                                                                    /^https?:\/\//,
                                                                    ""
                                                                )}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <a
                                                            href={s.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/8 hover:bg-white/12 text-white rounded-lg font-semibold transition"
                                                        >
                                                            <span className="hidden sm:inline">
                                                                Open
                                                            </span>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24"
                                                                width="16"
                                                                height="16"
                                                                className="opacity-90"
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"
                                                                />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </GuestLayout>
        </>
    );
}
