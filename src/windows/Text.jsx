import WindowWrapper from "#hoc/WindowWrapper";
import {WindowControls} from "#components";
import { Text as TextIcon } from "lucide-react";
import useWindowStore from "#store/window.js";


const Text = () => {
    const {windows} = useWindowStore();
    const data = windows.txtfile?.data;
    if(!data) return null;
    const {name, image,subtitle, description} = data;
  return (
    <>
        <div id="window-header">
            <WindowControls target="txtfile"/>
            <h2>{name}</h2>
        </div>

        
    </>
  )
}

export default Text