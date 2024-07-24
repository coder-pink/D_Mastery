import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto flex flex-col items-center">
                <div className="flex space-x-4 mb-4">
                    <Link href="https://facebook.com" className="text-xl" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </Link>
                    <Link href="https://twitter.com" className="text-xl" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </Link>
                    <Link href="https://instagram.com" className="text-xl" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </Link>
                    <Link href="https://linkedin.com" className="text-xl" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </Link>
                </div>
                <p className="text-center text-sm">
                    &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
