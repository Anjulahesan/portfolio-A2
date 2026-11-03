import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X} from "lucide-react";

// Create the items for Navbar
const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Projects", href: "#projects"},
    {name: "Education", href: "#education"},
    {name: "Services", href: "#services"},
    {name: "Contact", href: "#contact"},
];

// Check Navbar needs to scroll or not and adjut for Web & Mobile Pages
export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
    <nav 
        className={cn(
            "fixed w-full z-40 bg-card border-b border-border/40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )} 
        >
            {/* Creating the Navbar Logo */}
            <div className="container flex items-center justify-between">
                <a className="text-xl font-bold text-primary flex items-center gap-3 cursor-pointer group" href="#hero">
                    {/* Shape Logo */}
                    <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple-600 shadow-md group-hover:scale-105 transition-transform duration-300">
                        <div className="absolute -inset-0.5 rounded-xl bg-primary/40 blur-xs opacity-50" />
                        <span className="relative z-10 text-white text-base font-extrabold tracking-wider">
                            AJ
                        </span>
                    </div>

                    <span className="text-glow text-foreground font-semibold tracking-wide">
                        Portfolio
                    </span>
                </a>

                {/*Desktop Navigation*/}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                </div>

                {/*Mobile Navigation*/}

                <button 
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                > 
                    {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}{" "}
                </button>

                <div 
                    className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen 
                            ? "opacity-100 pointer-events-auto" 
                            : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a 
                                key={key} 
                                href={item.href} 
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>

            </div>
    </nav>
    );
};