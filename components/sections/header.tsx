import Link from "next/link";
import Image from "next/image";

function Header() {
    return (
        <header className="fixed top-[40px] left-0 right-0 w-full z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between bg-black bg-opacity-20 backdrop-blur-md rounded-full py-3 px-6 border border-gray-800/30">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="text-xl text-white font-brand">Verbaland</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;