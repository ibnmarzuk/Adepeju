/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Expertise } from "./components/sections/Expertise";
import { Process } from "./components/sections/Process";
import { Brands } from "./components/sections/Brands";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { SocialConnect } from "./components/sections/SocialConnect";
import { Footer } from "./components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-black selection:bg-brand-gold selection:text-brand-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Process />
        <Brands />
        <Projects />
        <Contact />
        <SocialConnect />
      </main>
      <Footer />
    </div>
  );
}
