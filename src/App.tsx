import ArchitectureSection from './components/ArchitectureSection'
import CompanySection from './components/CompanySection'
import RiskSection from './components/RiskSection'
import { Closing, Footer, Header, Hero, SectionIndex } from './components/SiteChrome'
import ScrollStory from './components/ScrollStory'
import TechnologySection from './components/TechnologySection'
import TeamSection from './components/TeamSection'
import UIDSection from './components/UIDSection'
import './App.css'
import './footer-theme.css'

export default function App() {
  return <>
    <Header />
    <ScrollStory />
    <main>
      <Hero />
      <SectionIndex />
      <CompanySection />
      <UIDSection />
      <TechnologySection />
      <RiskSection />
      <ArchitectureSection />
      <Closing />
      <TeamSection />
    </main>
    <Footer />
  </>
}
