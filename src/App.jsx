import gsap from "gsap";

import {Draggable} from "gsap/Draggable";

import { Navbar, Welcome, Dock } from "#components"
import TerminalWindow from "#windows";
import useWindowStore from "#store/window.js";




gsap.registerPlugin(Draggable);
const App = () => {
  return (
   <main>
    
    <Navbar />

    <TerminalWindow  />

    <Dock />
   
    <Welcome />
    
   </main>
  )
}

export default App