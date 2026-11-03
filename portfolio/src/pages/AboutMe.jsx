import profilePic from "../assets/ProfilePic.jpg"

// About me page create
export const AboutMe = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        {/* Heading for About me page */}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 item-center">
                <div className="space-y-6">
                    {/* Adding the profession */}
                    <h3 className="text-2xl font-semibold">
                        Software Developer & AI Researcher
                    </h3>

                    {/* Short Describe about Me */}
                    <p className="text-muted-foreground">
                        I am an Artificial Intelligence student at Centennial College with an interest in 
                        software development, artificial intelligence, and data-driven solutions. 
                        I have experience working with programming languages such as 
                        Python, C#, Java, and JavaScript, along with web development, databases, and Linux.
                    </p>

                    <p className="text-muted-foreground">
                        I enjoy learning new technologies, solving problems, and building projects that help me 
                        improve my skills. My long-term goal is to continue developing my knowledge in 
                        AI and software development and work on meaningful technology projects.
                    </p>

                    {/* Add link to redirect to the Contact page */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get In Touch
                        </a>

                        {/* Create a link to View and Download my CV */}
                        <a 
                            href="/Anjula_SewathGedara_CV.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 cursor-pointer"
                        >
                            {" "}
                            View & Download CV
                        </a>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <div className="relative group max-w-[300px] sm:max-w-[360px]">
                        {/* Background Glow Effect */}
                        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-purple-600 opacity-10 blur-lg group-hover:opacity-20 transition duration-300" />
                        
                        {/* Profile Image */}
                        <img 
                            src={profilePic} 
                            alt="Anjula Profile" 
                            className="relative rounded-2xl object-cover w-full h-[320px] sm:h-[380px] shadow-2xl border border-primary/20 card-hover" 
                        />
                        <p className="text-xl font-semibold py-2 text-muted-foreground"> Anjula SewathGedara</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}