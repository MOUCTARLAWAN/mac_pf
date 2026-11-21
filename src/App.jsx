import gsap from "gsap";

import {Draggable} from "gsap/Draggable";

import { Navbar, Welcome, Dock } from "#components"
import { Resume, TerminalWindow, SafariWindow, Finder, TextWindow, ImageWindow } from "#windows";
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

    <TextWindow />

    <ImageWindow />

    <Dock />
   
    <Welcome />
    
   </main>
  )
}

export default App