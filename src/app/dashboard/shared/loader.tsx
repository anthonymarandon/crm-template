export default function Loader() {
    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="relative w-40 h-40">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border-8 border-transparent border-t-blue-400 border-r-indigo-400 border-b-violet-400 border-l-blue-500 animate-[spin_1.5s_linear_infinite] shadow-lg shadow-blue-500/50"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full border-8 border-transparent border-t-indigo-400 border-r-violet-400 border-b-blue-400 border-l-indigo-500 animate-[spin_1.5s_linear_infinite_reverse] shadow-lg shadow-indigo-500/50"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border-8 border-transparent border-t-violet-400 border-r-blue-400 border-b-indigo-400 border-l-violet-500 animate-[spin_1.5s_linear_infinite] shadow-lg shadow-violet-500/50"></div>
                </div>
            </div>
        </div>
    );
}