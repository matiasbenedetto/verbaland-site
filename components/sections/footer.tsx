import Link from "next/link";

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <Link href="/">Verbaland</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
