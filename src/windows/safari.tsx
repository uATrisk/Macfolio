import WindowWrapper from "#hoc/WindowWrapper";
import WindowControlers from "#components/WindowControlers";
import { ArrowLeft, ArrowRight, Shield, Share, Plus, Copy, RotateCw } from "lucide-react";

const Safari = ({ windowKey }: { windowKey: any }) => {
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
                            defaultValue="Search or enter website name"
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
                <div className="max-w-4xl mx-auto px-8 py-16">

                    {/* Hero Section */}
                    <div className="mb-20 space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-blue-600 font-medium tracking-wide uppercase text-sm">Full Stack Developer</h2>
                            <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
                                Hi, I'm Ansh Tomar.
                            </h1>
                        </div>
                        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                            Aspiring Full Stack Developer with a strong foundation in data structures and algorithms. Demonstrated expertise in problem-solving by implementing solutions to over 300 problems on LeetCode and achieving a 950+ rating on CodeForces.
                        </p>

                        {/* Social Links */}
                        <div className="flex flex-wrap gap-3 pt-3">
                            <a href="mailto:ansh.tomar20240@nst.rishihood.edu.in" className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                                College Mail
                            </a>
                            <a href="mailto:anshtomarrr@gmail.com" className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                                Personal Mail
                            </a>
                        </div>

                        {/* Ratings & Socials */}
                        <div className="pt-4 space-y-3">
                            {/* Ratings Badge Row */}
                            <div className="flex flex-wrap gap-3">
                                <div className="flex items-center gap-2 px-3 py-1 bg-yellow-50 text-yellow-700 rounded-lg text-xs font-semibold border border-yellow-200">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png" alt="LeetCode" className="w-4 h-4 object-contain" />
                                    <span>LeetCode Rating:</span>
                                    <span className="text-yellow-800">1400+</span>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-semibold border border-blue-200">
                                    <img src="https://cdn-1.webcatalog.io/catalog/codeforces/codeforces-icon-filled-256.png?v=1714773964567" alt="Codeforces" className="w-4 h-4 object-contain" />
                                    <span>Codeforces Rating:</span>
                                    <span className="text-blue-800">950+</span>
                                </div>
                            </div>

                            {/* Social Text Links */}
                            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                                <a href="https://www.linkedin.com/in/ansh-tomar-03a493302/" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-800 transition-colors font-medium">LinkedIn</a>
                                <a href="https://github.com/uATrisk" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-800 transition-colors font-medium">GitHub</a>
                                <a href="https://leetcode.com/u/uATrisk/" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-800 transition-colors font-medium">LeetCode</a>
                                <a href="https://codeforces.com/profile/anshtomarrr" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-800 transition-colors font-medium">Codeforces</a>
                                <a href="https://www.codechef.com/users/anshtomar" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-800 transition-colors font-medium">CodeChef</a>
                            </div>
                        </div>
                    </div>



                    {/* Footer */}
                    <footer className="mt-20 pt-8 border-t border-gray-100 text-center text-gray-400 text-sm">
                        <p>© 2026 Ansh Tomar. Built with React & Tailwind.</p>
                    </footer>

                </div>
            </div>
        </div>
    );
};

export default WindowWrapper(Safari, "safari");
