import { Briefcase, Code, Network, User, WholeWord } from "lucide-react"

export const AboutMeSection = () => {
    return <section id="about" className="py-25 px-4 relative ">
        <div className="container max-auto max-w-4xl ">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2  gap-12 items-center">
                   <div className="space-y-6 ">
                    <h3 className="font-semibold text-xl">Passionate Web Developer & <span>IT Support</span>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed  ">
                        I'm Mohamed Suraif Ganee, a dedicated web developer and IT support specialist with a passion for creating 
                        seamless digital experiences. With a strong foundation in Both front-end and back-end development,
                         I thrive on building responsive, user-friendly websites that not only look great but also perform flawlessly.
                     </p>
        
                    <p className="text-muted-foreground leading-relaxed  ">
                     My journey in IT support has equipped me with problem-solving skills and a customer-centric approach, 
                        allowing me to understand and address user needs effectively.
                        I am committed to continuous learning and staying updated with the latest 
                        industry trends to deliver innovative solutions.
                        Let's connect and explore how I can contribute to your next project!
                    
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 ">
                        <a href="#contact" className="cosmic-button"> Get In Touch</a>
                        <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 ">
                        Download CV </a>
                    </div>

                </div> 

                <div className="grid grid-cols-1 gap-6">
                     <div className="gradient-border p-6 card-hover">
                         <div className="flex items-start gap-4">
                             <div className="p-3 rounded-full bg-primary/10">
                             <Code  className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Web Development </h4>
                                <p className="text-muted-foreground"> creating responsive websites and web applications with modern frameworks. </p>

                            </div>
                         </div>
                     </div>
                      <div className="gradient-border p-6 card-hover">
                         <div className="flex items-start gap-4">
                             <div className="p-3 rounded-full bg-primary/10">
                             <User  className="h-6 w-6 text-primary"/>
                            </div>
                             <div className="text-left">
                                <h4 className="font-semibold text-lg"> UI/UX Design </h4>
                                <p className="text-muted-foreground"> Design Intuitive user interfaces and seamless user experience. </p>

                            </div>
                         </div>
                     </div>
                      <div className="gradient-border p-6 card-hover">
                         <div className="flex items-start gap-4">
                             <div className="p-3 rounded-full bg-primary/10">
                             <Briefcase  className="h-6 w-6 text-primary"/>
                            </div>
                             <div className="text-left">
                                <h4 className="font-semibold text-lg"> Project Management </h4>
                                <p className="text-muted-foreground"> Leading projects from conception to completion with agile methodologies. </p>
                            </div>
                         </div>
                     </div>
                     <div className="gradient-border p-6 card-hover">
                         <div className="flex items-start gap-4">
                             <div className="p-3 rounded-full bg-primary/10">
                             <Network className="h-6 w-6 text-primary"/>
                            </div>
                             <div className="text-left">
                                <h4 className="font-semibold text-lg"> IT Support </h4>
                                <p className="text-muted-foreground"> providing technical assistance, troubleshooting issues, and ensuring smooth operation of computer systems and networks. </p>
                            </div>
                         </div>
                     </div>
                </div>
            </div>
        </div>
    </section>
}