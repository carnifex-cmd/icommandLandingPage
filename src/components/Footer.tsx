export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-[#333333] py-8 px-6 bg-[#0d0d0d]">
            <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-gray-500">
                <div>
                    <span className="font-bold text-white">icommand</span>
                </div>
                <div className="flex flex-col items-end gap-1">
                    <span>Built by Shardul</span>
                    <span>&copy; {currentYear}</span>
                </div>
            </div>
        </footer>
    );
}
