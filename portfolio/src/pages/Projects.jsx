// Create Projects and store in array

const projects = [
    {
        id: 1,
        title: "Safe Earth Landing Page",
        description: "Designed Natural Disasters website using, covering different types of natural disasters and providing information and how to prepare for it, using HTML and CSS", 
        image: "/projects/project1.png",
        tags: ["HTML", "CSS"]
    },
    {
        id: 2,
        title: "Fitness Database - ER Diagram",
        description: "Designed a fitness database using SQL to covering Customers, Memberships, Equipment, Locations, Employees, and Payment options details", 
        image: "/projects/project2.png",
        tags: ["SQL","ERDiagram", "CRUD"]
    },
    {
        id: 3,
        title: "CatchaPath - College finder",
        description: "Analyze and design a college/university recommendation system career path suggestions, search scholarships and multilingual decision support with an AI chatbot", 
        image: "/projects/project3.png",
        tags: ["Requirement Engineering", "SDLC"]
    }
]

//  Create the Page
export const Projects = () => {

    return (
    <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {" "}
            Featured <span className="text-primary"> Projects </span>
            </h2>

            {/* Description about projects */}
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects. Each project was carefully 
                crafted with attention to detail, performance, and user experience.
            </p>

            {/* Display the projects using Project Array details */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div 
                        key={key} 
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transtion-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary-foreground">{tag}</span>
                                ))}
                            </div>
                        
                        
                        <h3 className="text-l font-semibold mb-1"> {project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    )
};