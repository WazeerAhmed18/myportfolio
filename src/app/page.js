"use client";
import dynamic from 'next/dynamic';
import '../app/globals.css';

// Dynamically import each component with SSR disabled
const Hero = dynamic(() => import('@/Components/Hero'), { ssr: false });
const Navbar = dynamic(() => import('../Components/Navbar'), { ssr: false });
const MouseCircle = dynamic(() => import('@/Components/MouseCircle'), { ssr: false });
const About = dynamic(() => import('@/Components/About'), { ssr: false });
const AboutNew = dynamic(() => import('../Components/AboutNew'), { ssr: false });
const Contact = dynamic(() => import('@/Components/Contact'), { ssr: false });
const Footer = dynamic(() => import('../Components/Footer'), { ssr: false });
const Projects = dynamic(() => import('@/Components/Projects'), { ssr: false });

export default function Home() {
  return (
    <div className="">
      <MouseCircle />
      <Navbar />
      <Hero />
      <AboutNew />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
