import { NavBar } from "../components/NavBar"
import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"
import { HomeSection } from "../components/HomeSection"
import { AboutMeSection } from "../components/AboutMeSection"
import { SkillSection } from "../components/SkillSection"
import { ProjectSection } from "../components/ProjectSection"

export const Home = () => {
    return (
        <div className="min-h-screen container bg-background text-foreground overflow-x-hidden"> 

            {/* Toggle Theme */}
            <ThemeToggle />

            {/* Background Effects */}
            <StarBackground />

            {/* Navbar */}
            <NavBar />

            {/* Main Section */}
            <main>
                <HomeSection />
                <AboutMeSection />
                <SkillSection />
                <ProjectSection/>
            </main>

            {/*Footer*/}


        </div>
    )
}