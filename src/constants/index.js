import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  skyblaze,
  dweb,
  mta,
  alliance,
  switchGame,
  gallery,
  virtualPhoto,
  Loa,
  JseaRe,
  Aepw,
  Etech,
  Etech1,
  Lysb,
  LysbPr,
  SwitchVideo,
  AllianceVideo,
  GalleryVideo,
  JseaReVideo,
  VitualVideo,
  HBL,
  Tableau,
  TableauPr,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Students studying military engineering",
    company_name: "Học Viện Kỹ Thuật Quân Sự (MTA)",
    icon: mta,
    iconBg: "#383E56",
    date: "2015-2020",
    points: [
      "Study at my university",
    ],
  },
  {
    title: "Front-end Wed Developer Internship",
    company_name: "DWEB",
    icon: dweb,
    iconBg: "#E6DEDD",
    date: "March 2020 - September 2020",
    points: [
      "Design UI web on PDF files",
      "Build a furniture e-commerce website using WordPress.",
      "Work with HTML, CSS, and jQuery.",
    ],
  },
  {
    title: "Front-end Wed Developer Internship",
    company_name: "Skyblaze Studios",
    icon: skyblaze,
    iconBg: "#383E56",
    date: "October 2020 - December 2020",
    points: [
      "Engage and gain experience through actual projects.",
      "Contribute to the development of User Interfaces and fixing bugs.",
    ],
  },
  {
    title: "Fresher Front-end Wed Developer",
    company_name: "Skyblaze Studios",
    icon: skyblaze,
    iconBg: "#383E56",
    date: "January 2021 - January 2022",
    points: [
      "Develop web applications using ReactJS, NextJS, and related technologies.",
      "Working in tandem with cross-functional teams, including designers, product managers, and fellow developers.",
      "Creating responsive websites and guaranteeing compatibility across different web browsers.",
      "Engaging in code reviews and offering valuable feedback to fellow developers."
    ],
  },
  {
    title: "Junior Frontend Web Developer",
    company_name: "Skyblaze Studios",
    icon: skyblaze,
    iconBg: "#383E56",
    date: "January 2022 - Present",
    points: [
      "Develop web applications using ReactJS, NextJS, and related technologies.",
      "Serve as the lead Front-End Developer for the majority of the company's projects.",
      "Create applications such as QR code scanning, Switch game, Website Register, Photo editing and beautification web development. app qr code scanning for ios and websites with fairly complex animations.",
      "Discuss with team and propose suitable methods for each project.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Alliance",
    time:"2020",
    description:
      "website focusing on waste reduction and marine environmental protection.",
    works: [
      "create source code base ReactJS",
      "Implement UI Header, Footer, Home page, About, Resources, Media, RPT follow Figma",
      "Implement Scroll Fade-In Effect, Floating Animation.",
      "Implement Carousel using the OwlCarousel library and custom css, animation count number",
      "Responsive and fix bugs",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "jquery",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
    ],
    image: alliance,
    video: AllianceVideo,
  },
  {
    name: "Virtual Photobooth",
    time:"2020",
    description: "website for capturing and beautifying photos, creating short videos with custom effects, adding frames and stickers to photos, and shooting videos to make boomerangs",
    works: [
      "Create Source base NextJS typescript",
      "Implement Photo section, UI Photo, UI add Frame, UI add Sticker, UI share and download Image",
      "Use canvas to save image and add sticker and frame",
      "Implement the photo capture feature and save the image to canvas",
      "Implement the function to add frames and stickers to image in canvas.",
      "Implementing the drag-and-drop sticker feature using the Fabric library.",
      "Export an image from the canvas and implement the feature to download the image to the device.",
      "Integrate api, Responsive and fix bugs.",
    ],
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "nextJS",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: virtualPhoto,
    video: VitualVideo
  },
  {
    name: "Alliance Version 2",
    time:"2020",
    description:
      "website focusing on waste reduction and marine environmental protection.",
    works: [
      "Implement UI Header, Footer, OutWork, Our Stories, News, Membership, Clean4Change và Contact Us follow Figma",
      "Implement Scroll Fade-In Effect, Floating Animation",
      "Implement Carousel using the OwlCarousel library and custom css",
      "Implement video autoplay react-player",
      "Responsive and fix bug"
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "jquery",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
    ],
    image: Aepw,
    link: "https://endplasticwaste.org/"
  },
  {
    name: "JSEA Registration",
    time:"2020",
    description:
      "Website displaying event information and a registration form for participants. After successful registration, it sends an invitation ticket to the registrant's email, including the time, location, and a QR code",
    works: [
      "Implement UI page follow Figma.",
      "Implement the registration function.",
      "Implement countdown function",
      "Integrate API register",
      "Implementing an API to display agenda information.",
      "Create the scroll to element function.",
      "Responsive and fix bugs"
    ],
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "nextJS",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: JseaRe,
    video: JseaReVideo
  },
  {
    name: "Etech Portal, Scan Qrcode",
    time:"2020",
    description:
      "A website stores all the information of users who have successfully Event Register for an event. It allows for editing and displaying user information. When the event takes place, users bring their invitation emails with QR codes. Event staff scan the QR codes to verify the registrant's information and print corresponding badges based on the information they provided during the event registration.",
    works: [
      "Implement UI Scan QR code page.",
      "Implement UI Popup Show info user registered in Etech Portal page",
      "Implement Scan QR code function and Integrate API scan.",
      "Create React Native app Scan qrcode for IOS",
      "Responsive Scan QR code page and Fix bugs",
    ],
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "nextJS",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "jquery",
        color: "blue-text-gradient",
      },
      {
        name: "websocket",
        color: "green-text-gradient",
      },
    ],
    image: Etech,
    imageProject: Etech1,
  },
  
  {
    name: "Burger King Photo Gallery",
    time:"2020",
    description:
      "website displaying all event images categorized by event after the event has concluded. Users can click to view and download images to their device",
    works: [
      "Implement UI lists images.",
      "Implement the image detail display functionality using the React-Slick carousel.",
      "Implement function download image to device image.png",
      "Implement animation Show, scale image",
      "Integrate API list images",
      "Responsive and Fix bugs",
    ],
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: gallery,
    // source_code_link: "https://github.com/",
    video: GalleryVideo
  },
  {
    name: "Switch Game",
    time:"2020",
    description:
      "website introducing Switch and their campaigns, along with creating a few small games.",
    works: [
      "Implement Experiences page follow Figma",
      "Create the UI for the 'PIECE ME UP' game page.",
      "Implement the 'PIECE ME UP' game using the drag-and-drop method with onDrag and onDrop elements.",
      "Implement play sound and video with react-player, implement hand animation features.",
      "Responsive using percentage-based scaling according to the device's frame"
    ],
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
      {
        name: "jquery",
        color: "blue-text-gradient",
      },
    ],
    image: switchGame,
    source_code_link: "https://github.com/hoangtaya21997/web_drag_game",
    link:'https://switchproductions.asia/',
    video: SwitchVideo
  },
  {
    name: "Công Vinh Audio",
    time:"2020",
    description:
      "website selling audio equipment for karaoke, conference halls,",
    works: [
      "Implement UI all page",
    ],
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
    ],
    image: Loa,
  },
  {
    name: "Web LYSB",
    time:"2020",
    description:
      "website for spinning a gacha to receive rewards based on probabilities.",
    works: [
      "Create Source base NextJS typescript",
      "implement Carousel using owlcarousel library",
      "Implement UI Page",
      "Integrate AIP gacha",
      "Implement the UI and registration function to receive rewards.",
      "implement show video gacha using react-player library"
    ],
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "nextJS",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "jquery",
        color: "blue-text-gradient",
      },
      {
        name: "websocket",
        color: "green-text-gradient",
      },
    ],
    image: Lysb,
    imageProject: LysbPr,
  },
  {
    name: "HBL VE",
    time:"2020",
    description:
      "website that allows HBL users to search for information and download their PDF files.",
    works: [
      "Implement UI page follow Figma",
      "Responsive as per request, scaling down in both horizontal and vertical directions to ensure 100% content visibility",
      "Integrate API Info use and function download PDF file",
      "Fix bugs",
    ],
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "nextJS",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "jquery",
        color: "blue-text-gradient",
      },
    ],
    image: HBL,
  },
  {
    name: "Tableau VOD",
    time:"2020",
    description:
      "Website displaying Tableau event information chronologically, from registration events, followed by live events, and concluding with VOD video viewing events.",
    works: [
      "Implementing a countdown function to display time intervals for event phases: registration start, registration end, live event start, live event end, VOD viewing event.",
      "Implement UI Home page, Login Page, Live Page, Register page",
      "Implement UI and function Register",
      "Implement UI and function Login User",
      "Responsive and fix bugs",
    ],
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "nextJS",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "jquery",
        color: "blue-text-gradient",
      },
    ],
    image: Tableau,
    imageProject: TableauPr,
  },
];

export { technologies, experiences, testimonials, projects };
