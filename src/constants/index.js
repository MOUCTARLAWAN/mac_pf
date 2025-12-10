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

const techStack = [
      {
        category: "Data Engineering",
        items: ["Python", "SQL", "Spark", "Airflow", "Databricks","ADF"],
      },
      {
        category: "Data Analysis",
        items: ["Power BI", "Tableau", "SQL", "Python"],
      },
      {
        category: "Data Visualization",
        items: ["Power BI", "Tableau"],
      },
      {
        category: "Big Data",
        items: ["Hadoop", "Kafka"],
      },
      {
        category: "Cloud",
        items: ["Azure"],
      },
      {
        category: "DevOps",
      items: [ "GitHub",  "Docker", "Kubernetes",  "Terraform", "Ansible", "Jenkins", "Azure DevOps" ],
    },
  ];

export { navLinks, navIcons, dockApps, techStack } ;




const INITIAL_Z_INDEX = 1000;
const WINDOW_CONFIG = {
    finder: {
        isOpen: false,
        zIndex: INITIAL_Z_INDEX,
        data: null,
    },
    safari: {
        isOpen: false,
        zIndex: INITIAL_Z_INDEX,
        data: null,
    },
    photos: {
        isOpen: false,
        zIndex: INITIAL_Z_INDEX,
        data: null,
    },
    contact: {
        isOpen: false,
        zIndex: INITIAL_Z_INDEX,
        data: null,
    },
    terminal: {
        isOpen: false,
        zIndex: INITIAL_Z_INDEX,
        data: null,
    },
    imgfile: {
        isOpen: false,
        zIndex: INITIAL_Z_INDEX,
        data: null,
    },
    resume: {
        isOpen: false,
        zIndex: INITIAL_Z_INDEX,
        data: null,
    },
    txtfile: {
        isOpen: false,
        zIndex: INITIAL_Z_INDEX,
        data: null,
    },
};
export { INITIAL_Z_INDEX, WINDOW_CONFIG } ;

