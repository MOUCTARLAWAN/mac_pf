import WindowWrapper from "#hoc/WindowWrapper";
import WindowControls from "#components/WindowControls";
import { Search } from "lucide-react";
import { locations } from "#constants";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";
import clsx from "clsx";

const Finder = () => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();

  const openItem = (item) => {
    // 📁 Folder → navigation
    if (item.kind === "folder") return setActiveLocation(item);

    // Figma
    if(["fig", "url"].includes(item.fileType) && item.href) return window.open(item.href, "_blank");

    // 📄 PDF
    if (item.fileType === "pdf") return openWindow("resume", item);

    // 📝 TXT
    if (item.fileType === "txt") {
      openWindow("txtfile", item);
      return;
    }

    // 🖼 Image
    if (item.fileType === "img") {
      openWindow("imgfile", item);
      return;
    }

    // 🌐 URL
    if (item.fileType === "url") {
      window.open(item.href, "_blank");
    }
  };

  const renderList = (title, items) => (
    <div>
      <h3 className="sidebar-title">{title}</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveLocation(item)}
            className={clsx(
              "sidebar-item",
              activeLocation?.id === item.id && "active"
            )}
          >
            <img src={item.icon} className="w-4" />
            <p className="text-sm truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        {/* Sidebar */}
        <div className="sidebar">
          {renderList("Favorites", Object.values(locations))}
          {renderList("Work", locations.work.children)}
        </div>

        {/* Content */}
        <ul className="content">
          {activeLocation?.children?.map((item) => (
            <li
              key={item.id}
              className={item.position}
              onDoubleClick={() => openItem(item)} // 👈 important
            >
              <img src={item.icon} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};


const FinderWindow = WindowWrapper(Finder, "finder");
export default FinderWindow;