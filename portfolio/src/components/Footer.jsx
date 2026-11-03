import { ArrowUp } from "lucide-react"

// Footer
export const Footer = () => {
    return (
        <footer className="py-8 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
            {" "}
            <p className="text-sm text-muted-foreground"> 
                {" "}    
                &copy; {new Date().getFullYear()} | Anjula SewathGedara - Assignment 1 - COMP229 | Using Images, Logos, Details Only For the Education purpose
            </p>
            <a 
                href="#hero" 
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                <ArrowUp size={20}/>
            </a>
        </footer>
    )
}