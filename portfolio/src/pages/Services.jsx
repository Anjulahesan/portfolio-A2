import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

{/* Create an array of services Data */}
const servicesData = [
    {
        id: 1,
        title: "Web Development",
        description: "Designing and building high-performance, fully responsive web applications. Focused on translating clean UI/UX designs into seamless digital experiences using modern frameworks like React, Vite, and fluid Tailwind CSS layouts.",
        image: "/works/skill1.png",
        features: ["React & Vite: Fast apps.", "Tailwind Fluid UI", "Clean Components: Reusable code."]
    },
    {
        id: 2,
        title: "Software Programming",
        description: "Architecting clean, efficient, and highly maintainable server-side logic and core computing scripts. Experienced in writing structural, multi-paradigm code across versatile ecosystems including Python, Java, C#, and relational SQL databases.",
        image: "/works/skill2.png",
        features: ["Multi-Language: Python, Java, C#", "System Controls: Linux terminal", "SQL Databases: Data management"]
    },
    {
        id: 3,
        title: "AI Research & Solutions",
        description: "Analyzing complex datasets and exploring predictive algorithms to solve real-world problems. Leveraging academic training in Artificial Intelligence to build data-driven models, automate workflows, and audit emerging AI technologies.",
        image: "/works/skill3.png",
        features: ["Data Modeling", "Data Analysis: Python processing", "Script Automation: Quick workflows."]
    }
];

export const Services = () => {
    return (
        // Create section for services
        <section id="services" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">

                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    What I <span className="text-primary">Offer</span>
                </h2>
                
            {/* Services page description */}
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Foundational knowledge and programming frameworks 
                    to build Softwares, AI solutions..
                </p>

                {/* ServicesData Array using */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, key) => (
                        <div 
                            key={key} 
                            className={cn ("group bg-card rounded-xl overflow-hidden border border-border/30 shadow-xs flex flex-col justify-between card-hover")}
                        >
                            {/* Images */}
                            <div className="h-44 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10 opacity-40" />
                                <img 
                                    src={service.image} 
                                    alt={service.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Card Body content */}
                            <div className="p-6 flex-grow flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-lg font-bold text-foreground tracking-wide group-hover:text-primary transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                                    </div>
                                    
                                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed text-left">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Sub-bullet list */}
                                <ul className="space-y-2 border-t border-border/10 pt-4 text-left">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-xs font-medium text-foreground/70">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_6px_var(--color-primary)]" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
