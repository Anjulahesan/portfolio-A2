import { Mail, MapPin, Phone, Send } from "lucide-react"
import {cn} from '@/lib/utils';

// Create Contact Page
export const Contact = () => {
    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            {/* Header for page */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary"> Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a project in mind or interested in collaborating ? <br />Let's connect: 
                I am always open to exploring new professional opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    {/* Adding Contact Informations about me */}
                    <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" /> {" "}
                            </div>
                            <div>
                                <h4 className="font-medium"> Email</h4>
                                <a href="mailto:AJDemo12@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    AJDemo12@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary" /> {" "}
                            </div>
                            <div>
                                <h4 className="font-medium"> Phone</h4>
                                <a href="tel:+6471211212" className="text-muted-foreground hover:text-primary transition-colors">
                                    +1 (647) 121-1212
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary" /> {" "}
                            </div>
                            <div>
                                <h4 className="font-medium"> Location</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">
                                    Toronto, ON, Canada
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Customer Details to contact me */}
                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6"> Send a Message </h3>

                    {/* Creating form to get the details */}
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="fname" className="block text-sm font-medium mb-2"> 
                                {" "}
                                First Name: </label>
                            <input 
                                type="text" 
                                id="fname"
                                name="fname"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background foucs:ring-2 foucs:outline-hidden focus:ring-primary"
                                placeholder="John..."
                            />
                            
                            <label htmlFor="lname" className="block text-sm font-medium mb-2 pt-2"> 
                                {" "}
                                Last Name: </label>
                            <input 
                                type="text" 
                                id="lname"
                                name="lname"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background foucs:ring-2 foucs:outline-hidden focus:ring-primary"
                                placeholder="Smith..."
                            />

                            <label htmlFor="cnumber" className="block text-sm font-medium mb-2 pt-2"> 
                                {" "}
                                Contact Number: </label>
                            <input 
                                type="text" 
                                id="cnumber"
                                name="cnumber"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background foucs:ring-2 foucs:outline-hidden focus:ring-primary"
                                placeholder="+1 (xxx)-xxx-xxxx"
                            />

                            <label htmlFor="email" className="block text-sm font-medium mb-2 pt-2"> 
                                {" "}
                                Email: </label>
                            <input 
                                type="text" 
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background foucs:ring-2 foucs:outline-hidden focus:ring-primary"
                                placeholder="John@gmail.com"
                            />

                            <label htmlFor="message" className="block text-sm font-medium mb-2 pt-2"> 
                                {" "}
                                Your Message </label>
                            <textarea 
                                id="message"
                                name="message"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background foucs:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                                placeholder="Hello, I'd like to talk about..."
                            />

                            <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2",

                            )}>
                                Send Message
                                <Send size={16}/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
}