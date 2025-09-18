import { useState } from "react";
import {cn} from "@/lib/utils";

const skills = [
    // frontend
    {name: "HTML/CSS", level: "90", category: "frontend"},
    {name: "JavaScript", level: "85", category: "frontend"},
    {name: "React", level: "80", category: "frontend"},
    {name: "Tailwind CSS", level: "85", category: "frontend"},

    // backend
    {name: "C#", level: "80", category: "backend"},
    {name: "Node.js", level: "75", category: "backend"},
    {name: "Python", level: "60", category: "backend"},
    {name: "Express.js", level: "70", category: "backend"},
    {name: "MongoDB", level: "65", category: "backend"},
    {name: "SQL", level: "80", category: "backend"},
    {name: "FireBase", level: "80", category: "backend"},

    
    // tools
    {name: "Git/GitHub", level: "90", category: "tools"},
    {name: "VS Code", level: "90", category: "tools"},
    {name: "Postman", level: "70", category: "tools"},
    {name: "Figma", level: "85", category: "tools"},
    {name: "Netlify", level: "65", category: "tools"},

]
const categories = ["all","frontend","backend","tools"];

export const SkillSection = () => {
    const [activeCategory, setActiveCategory] =useState("tools");
    const filteredSkills = skills.filter((skill)=> activeCategory === "all"|| skill.category === activeCategory);
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30"> 

        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center mb-12 gap-4">
                {categories.map((category,key)=>(
                    <button key={key} 
                    onClick={()=>setActiveCategory(category)}
                className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                             )}>
                        {category}
                    </button>
                ))}

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4   gap-6">
                {filteredSkills.map((skill,key) => (
                    <div key={key} className="bg-card p-3 rounded-lg shadow-xs card-hover">

                    <div className="text-left mb-4">
                    <h3 className="font-semibold text-sm">{skill.name} </h3>
                    </div>
                 <div className="w-full">
                    <div className="bg-secondary/50 h-2 rounded-full overflow-hidden">
                             <div 
                                className="bg-primary h-2 rounded-full origin-left animate-[grow-1.5s-ease-out]" 
                                style={{width: skill.level + "%"}}
                            ></div>
                         </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                     </div>
                 </div>


                 </div>
                ))}

            </div>

        </div>

        </section>
    )
};