import { GraduationCap, Calendar } from "lucide-react";

// Create Education data array
const educationData = [
    {
        id: 1,
        degree: "Advanced Diploma in AI - Software Engineering Technology",
        institution: "Centennial College",
        year: "2025 - Present",
        details: "Python Programming |  Unix/Linux OS | C# Programming | Database (SQL) | Client-Side Web Development | Java Programming | AI Systems Design | Software Requirements Engineering",
        tags: ["AI", "C#", "Java", "Python", "Linux", "SQL", "JavaScript", "Node.js", "React"]
    },
    {
        id: 2,
        degree: "Diploma in Information Technology",
        institution: "SIBA Campus (UGC Approved)",
        year: "Graduated 2024",
        details: "Computer Application Development - C# | Website_Designing & Development | Java Programming | Introduction to Python Programming | Computer 2D Animation",
        tags: ["C#", "Java", "2D Animation"]
    },
    {
        id: 3,
        degree: "DevOps - TechOps Certification",
        institution: "Institute of Digital Engineering Technology (Remote)",
        year: "Completed 2026",
        details: "Focused studies Linux/RedHat OS | Shell Scripting | DevOps | TechOps | Docker | Ansible",
        tags: ["Linux", "CLI", "AWS"]
    }
];

export const Education = () => {
    return (
        <section id="education" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                {/* Section Header Layout */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    My <span className="text-primary">Education</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    My academic background, technical qualifications, 
                    and core domain knowledge.
                </p>

                {/* Create Education details cards using an Educationdata array */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {educationData.map((item, key) => (
                        <div 
                            key={key} 
                            className="group bg-card p-6 rounded-lg overflow-hidden border border-border/10 shadow-xs flex flex-col justify-between card-hover text-center"
                        >
                            <div>
                                {/* Education Icon  */}
                                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5 text-primary group-hover:scale-110 transition-transform duration-300">
                                    <GraduationCap size={24} />
                                </div>

                                {/* Timeline - I completed the courses */}
                                <div className="flex justify-center items-center gap-2 mb-4 text-xs font-medium text-muted-foreground bg-secondary/50 py-1 px-3 rounded-full w-fit mx-auto border border-border/20">
                                    <Calendar size={12} className="text-primary" />
                                    <span>{item.year}</span>
                                </div>

                                {/* Main Qualification */}
                                <h3 className="text-lg font-bold mb-1 text-foreground tracking-wide group-hover:text-primary transition-colors duration-300"> 
                                    {item.degree}
                                </h3>
                                <p className="text-sm font-medium text-primary/80 mb-3">{item.institution}</p>

                                {/* Qualification Explanations */}
                                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                                    {item.details}
                                </p>
                            </div>

                            {/* Skill Tags */}
                            <div className="flex flex-wrap gap-2 justify-center pt-2 border-t border-border/10">
                                {item.tags.map((tag, tagKey) => (
                                    <span 
                                        key={tagKey} 
                                        className="px-2 py-0.5 text-[11px] font-medium border border-border/40 rounded-full bg-background text-muted-foreground shadow-2xs"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
