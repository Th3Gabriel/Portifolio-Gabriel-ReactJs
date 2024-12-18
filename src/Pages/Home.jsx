import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Hero from '../Components/Hero/Hero'
import About from '../Components/About/About'
import Skills from '../Components/Skills/Skills'
import Contact from '../Components/Contato/contact'
import Experience from '../Components/Experience/Experience'
import ProjectList from '../Components/ProjectList/Project'

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <ProjectList />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
