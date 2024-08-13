import Hero from "@/components/Fragments/Hero.tsx";
import Contact from "@/components/Fragments/Contact.tsx";
import About from "@/components/Fragments/About.tsx";
import Navbar from "@/components/Fragments/Navbar.tsx";
import Project from "@/components/Fragments/Project.tsx";
import WorkExperience from "@/components/Fragments/WorkExperience.tsx";
import Footer from "@/components/Fragments/Footer.tsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <WorkExperience />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
