function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-400 py-6 text-center">

            &copy; {new Date().getFullYear()} Your Name. All rights reserved.

            <div className="flex gap-4 mt-6">
                <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-pink-500">Instagram</a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-blue-400">Twitter</a>
                <a href="https://x.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-blue-600">X</a>
                <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="hover:text-green-500">WhatsApp</a>
            </div>

        </footer>

    );
}
export default Footer;