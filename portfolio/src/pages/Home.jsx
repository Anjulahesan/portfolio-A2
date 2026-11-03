import { Navbar } from "../components/Navbar"
import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "@/components/StarBackground"
import { HeroSection } from "../components/HeroSection"
import { AboutMe } from "./AboutMe"
import { Projects } from "./Projects"
import { Education } from "./Education"
import { Services } from "./Services"
import { Contact } from "./Contact"
import { Footer } from "../components/Footer"

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*Theme Toggle*/}
        <ThemeToggle />
        {/*Background Effect*/}
        <StarBackground />

        {/*Navbar*/}
        <Navbar />

        {/*Main Content*/}
        <main>
            <HeroSection />
            <AboutMe />
            <Projects />
            <Education />
            <Services />
            <Contact />
        </main>
        
        {/*Footer*/}
        <Footer />
    </div>
}