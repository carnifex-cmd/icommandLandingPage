export default function Footer() {
    return (
        <footer className="border-t border-[#333333] py-8 px-6 bg-[#0d0d0d]">
            <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-gray-500">
                <div>
                    <span className="font-bold text-white">icommand</span>
                </div>
                <div className="flex gap-6">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#eebd2b] transition-colors"
                    >
                        github
                    </a>
                    <span>MIT license</span>
                </div>
            </div>
        </footer>
    );
}
