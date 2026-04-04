import gsap from "gsap";

import {Draggable} from "gsap/Draggable";

import { Navbar, Welcome, Dock } from "#components"
import { Resume, TerminalWindow, SafariWindow, Finder } from "#windows";
import useWindowStore from "#store/window.js";




gsap.registerPlugin(Draggable);
const App = () => {
  return (
   <main>
    
    <Navbar />

    <TerminalWindow  />

    <SafariWindow  />

    <Finder />

    <Resume />

    <Dock />
   
    <Welcome />
    
   </main>
  )
}

export default App