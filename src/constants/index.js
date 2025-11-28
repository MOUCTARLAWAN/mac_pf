const navLinks = [
    {
     id: 1,
     name: "Projects",
     type: "finder"
    },
    {
        id: 2, 
        name: "Contact" 
    },
    {
        id: 3, 
        name: "Resume",
        type: "resume"
    },
];

const navIcons = [
{
    id:1 ,
    imag: "/icons/wifi.svg"
},
{
    id:2 ,
    imag: "/icons/search.svg",
},
{
    id:3 ,
    imag: "/icons/user.svg",
},
{
    id:4 ,
    imag: "/icons/mode.svg",
},
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio",
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles",
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery",
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact",
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills",
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive",
        icon: "trash.png",
        canOpen: true,
    },
];


export { navLinks, navIcons, dockApps } ;