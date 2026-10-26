import WindowWrapper from "#hoc/WindowWrapper";
import WindowControlers from "#components/WindowControlers";
import { ArrowLeft, ArrowRight, Shield, Share, Plus, Copy, RotateCw, ExternalLink, Github, GraduationCap, Award, Sparkles } from "lucide-react";

const Safari = ({ windowKey }: { windowKey: any }) => {
    const projects = [
        {
            title: "CLMS – Campus Laundry Management",
            description: "Full-stack university laundry platform replacing paper logging with real-time order tracking, single-active-order enforcement, and automated OTP-based pickup verification.",
            tags: ["React", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL", "Google OAuth"],
            liveUrl: "https://clms-murex.vercel.app/",
            githubUrl: "https://github.com/uATrisk/clms",
            status: "Live in Production",
        },
        {
            title: "TeleVault – Zero-Knowledge Crypto Vault",
            description: "Personal media archival system with strict client-side AES-256-GCM encryption via WebCrypto API. Stores ciphertext chunks anonymously in Telegram channels with Cloudflare D1 coordination.",
            tags: ["React", "WebCrypto API", "Cloudflare Workers", "Cloudflare D1", "Telegram API"],
            githubUrl: "https://github.com/uATrisk/tele-vault",
            status: "Featured Project",
        },
        {
            title: "Chai Adda – College Canteen System",
            description: "End-to-end canteen ordering web app for college campuses with digital menus, UPI payment proof validation, live order status updates, and vendor revenue analytics.",
            tags: ["Next.js", "Node.js", "Express", "PostgreSQL", "Prisma ORM", "Vercel"],
            liveUrl: "https://chai-adda-system.vercel.app/",
            githubUrl: "https://github.com/uATrisk/ChaiAdda-System",
            status: "Live Demo",
        },
        {
            title: "PSYS – Multi-Tenant Attendance System",
            description: "Classroom attendance system using computer vision and face recognition. Integrates a Next.js web portal with a Python camera microservice and Supabase pgvector embeddings.",
            tags: ["Next.js", "Python", "OpenCV", "Supabase", "pgvector", "TypeScript"],
            githubUrl: "https://github.com/ps-ys/PSYS",
            status: "Research & Systems",
        },
        {
            title: "AI Resume Ranker",
            description: "Intelligent candidate resume screening platform utilizing TF-IDF vectorization and cosine similarity to match candidate CVs against target job specifications with automated candidate tiering.",
            tags: ["Python", "Streamlit", "NLP", "Scikit-Learn", "NLTK"],
            githubUrl: "https://github.com/uATrisk/ai_candidate_evaluation",
            status: "ML & NLP",
        },
    ];

    return (
        <div className="flex flex-col h-full w-full bg-white rounded-lg overflow-hidden font-sans">
            {/* Safari Header */}
            <div className="bg-[#f2f2f2] p-3 flex items-center gap-4 border-b border-gray-300 relative z-20">
                <WindowControlers windowKey={windowKey} />

                <div className="flex gap-6 text-gray-500 ml-4">
                    <ArrowLeft size={16} className="cursor-pointer hover:text-black" />
                    <ArrowRight size={16} className="cursor-pointer hover:text-black" />
                </div>

                <div className="flex-1 flex justify-center px-4">
                    {/* Search Bar */}
                    <div className="bg-white rounded-lg py-1.5 px-3 flex items-center gap-2 w-full max-w-xl shadow-sm border border-gray-200 group focus-within:ring-2 focus-within:ring-blue-400 transition-all">
                        <Shield size={12} className="text-gray-400 group-focus-within:hidden" />
                        <input
                            type="text"
                            defaultValue="https://anshtomar.dev/portfolio"
                            className="bg-transparent outline-none flex-1 text-sm text-center text-gray-500 placeholder-gray-400 group-focus-within:text-left group-focus-within:text-black"
                        />
                        <RotateCw size={12} className="text-gray-400 group-focus-within:hidden opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                </div>

                <div className="flex gap-5 text-gray-500">
                    <Share size={16} className="cursor-pointer hover:text-black" />
                    <Plus size={16} className="cursor-pointer hover:text-black" />
                    <Copy size={16} className="cursor-pointer hover:text-black" />
                </div>
            </div>

            {/* Safari Content */}
            <div className="flex-1 overflow-y-auto w-full custom-scrollbar bg-white">
                <div className="max-w-4xl mx-auto px-8 py-14">

                    {/* Hero Section */}
                    <div className="mb-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-gray-100">
                        <div className="space-y-4 flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold">
                                <Sparkles size={14} />
                                <span>Full-Stack Developer & CS Undergrad</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                                Hi, I'm Ansh Tomar.
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                                Full-stack engineer focused on building production-style web applications with real authentication, database design, and deployment pipelines. Passionate about algorithms, zero-knowledge encryption, and high-performance user experiences.
                            </p>

                            {/* Social Buttons */}
                            <div className="flex flex-wrap gap-3 pt-2">
                                <a href="mailto:anshtomarrr@gmail.com" className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm">
                                    Personal Mail
                                </a>
                                <a href="mailto:ansh.tomar20240@nst.rishihood.edu.in" className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                                    College Mail
                                </a>
                                <a href="https://github.com/uATrisk" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                    <Github size={14} /> GitHub
                                </a>
                            </div>

                            {/* Ratings Badge Row */}
                            <div className="flex flex-wrap gap-3 pt-2">
                                <div className="flex items-center gap-2 px-3 py-1 bg-yellow-50 text-yellow-700 rounded-lg text-xs font-semibold border border-yellow-200">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png" alt="LeetCode" className="w-4 h-4 object-contain" />
                                    <span>LeetCode Rating:</span>
                                    <span className="text-yellow-800 font-bold">1400+ (300+ Solved)</span>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-semibold border border-blue-200">
                                    <img src="https://cdn-1.webcatalog.io/catalog/codeforces/codeforces-icon-filled-256.png?v=1714773964567" alt="Codeforces" className="w-4 h-4 object-contain" />
                                    <span>Codeforces Rating:</span>
                                    <span className="text-blue-800 font-bold">950+</span>
                                </div>
                            </div>
                        </div>

                        {/* Profile Image */}
                        <div className="shrink-0 relative">
                            <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden shadow-xl border-4 border-white ring-1 ring-gray-200">
                                <img
                                    src="/images/ansh.jpg"
                                    alt="Ansh Tomar"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="absolute -bottom-2 -right-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-white shadow-sm">
                                AVAILABLE
                            </span>
                        </div>
                    </div>

                    {/* Featured Projects Section */}
                    <div className="mb-16">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">Featured Projects</h2>
                                <p className="text-sm text-gray-500">Selected full-stack and systems engineering projects</p>
                            </div>
                            <a
                                href="https://github.com/uATrisk?tab=repositories"
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1"
                            >
                                View all on GitHub <ExternalLink size={14} />
                            </a>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {projects.map((p, idx) => (
                                <div key={idx} className="flex flex-col justify-between p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all bg-white group">
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700">
                                                {p.status}
                                            </span>
                                            <div className="flex items-center gap-2">
                                                {p.githubUrl && (
                                                    <a href={p.githubUrl} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors" title="Source Code">
                                                        <Github size={16} />
                                                    </a>
                                                )}
                                                {p.liveUrl && (
                                                    <a href={p.liveUrl} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors" title="Live Demo">
                                                        <ExternalLink size={16} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                            {p.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {p.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-1.5 pt-4 mt-2 border-t border-gray-100">
                                        {p.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className="text-[11px] font-medium px-2 py-0.5 rounded bg-gray-50 text-gray-600 border border-gray-100">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education & Leadership Section */}
                    <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 space-y-3">
                            <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                                <GraduationCap size={18} />
                                <span>Education</span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">
                                Newton School of Technology
                            </h3>
                            <p className="text-sm font-medium text-gray-700">
                                B.Tech in Computer Science & Artificial Intelligence
                            </p>
                            <p className="text-xs text-gray-500">
                                2024 – 2028 • Currently in Semester 5
                            </p>
                            <p className="text-xs text-gray-600 pt-1 leading-relaxed">
                                Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, Operating Systems.
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 space-y-3">
                            <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm">
                                <Award size={18} />
                                <span>Outreach & Leadership</span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">
                                Student Community Onboarding
                            </h3>
                            <p className="text-sm font-medium text-gray-700">
                                Community Outreach & Student Mentor
                            </p>
                            <p className="text-xs text-gray-500">
                                Newton School of Technology
                            </p>
                            <p className="text-xs text-gray-600 pt-1 leading-relaxed">
                                Personally onboarded and guided 60+ new engineering students into tech tracks, organizing introductory workshops, collaborative study groups, and hackathon teams.
                            </p>
                        </div>
                    </div>

                    {/* Social Text Links */}
                    <div className="pt-6 pb-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 text-sm">
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                            <a href="https://www.linkedin.com/in/ansh-tomar-03a493302/" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-800 transition-colors font-medium">LinkedIn</a>
                            <a href="https://github.com/uATrisk" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-800 transition-colors font-medium">GitHub</a>
                            <a href="https://leetcode.com/u/uATrisk/" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-800 transition-colors font-medium">LeetCode</a>
                            <a href="https://codeforces.com/profile/anshtomarrr" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-800 transition-colors font-medium">Codeforces</a>
                            <a href="https://codechef.com/users/anshtomar" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-800 transition-colors font-medium">CodeChef</a>
                        </div>
                        <span className="text-xs text-gray-400">Delhi, India</span>
                    </div>

                    {/* Footer */}
                    <footer className="mt-8 pt-6 border-t border-gray-100 text-center text-gray-400 text-sm">
                        <p>© 2026 Ansh Tomar. Built with React & Tailwind CSS.</p>
                    </footer>

                </div>
            </div>
        </div>
    );
};

export default WindowWrapper(Safari, "safari");
