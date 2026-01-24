import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'
import { SkillsSection } from './sections/SkillsSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { ContactSection } from './sections/ContactSection'

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
