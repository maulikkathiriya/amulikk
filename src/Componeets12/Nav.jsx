import { useState } from "react"

function Nav() {
    return (
        <div >
            <nav className="flex justify-between items-center px-8 py-4 bg-gray-500">
                <h1 className="text-2xl font-bold">MyPortfolio</h1>
                <div className="flex gap-6">
                    <a href="#Home" className="hover:text-blue-400">Hero</a>
                    <a href="#about" className="hover:text-blue-400">About</a>
                    <a href="#projects" className="hover:text-blue-400">Projects</a>
                    <a href="#contact" className="hover:text-blue-400">Contact</a>
                </div>
            </nav>
        </div>
    )
}

export default Nav;