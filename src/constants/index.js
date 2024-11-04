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
  Etech,
  Etech1,
  Lysb,
  LysbPr,
  SwitchVideo,
  AllianceVideo,
  GalleryVideo,
  JseaReVideo,
  VitualVideo,
  Tableau,
  TableauPr,
  UnityG,
  Vcc,
  Vtv,
  BCM,
  EURO,
  DiemThi,
  ShopTTo
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
    title: "Frontend Web Developer",
    company_name: "Skyblaze Studios",
    icon: skyblaze,
    iconBg: "#383E56",
    date: "Jan 2021 - October 2023",
    points: [
      "Served as the primary frontend developer in most of the projects.",
      "Seminar on React, UI, and UX techniques for building effective components.",
      "Exploring React Native with Expo,CLI and learn about 2D Unity game.",
      "Develop web applications using ReactJS, NextJS, and related technologies.",
      "Serve as the lead Front-End Developer for the majority of the company's projects.",
      "Create applications such as QR code scanning, Switch game, Website Register, Photo editing and beautification web development. app qr code scanning for ios and websites with fairly complex animations.",
      "Discuss with team and propose suitable methods for each project.",
    ],
  },
  {
    title: "Frontend Developer Team leader",
    company_name: "Vccorp",
    icon: Vcc,
    iconBg: "#FFF",
    date: "October 2023 - Present",
    points: [
      "Leader HTML team WS",
      "Seminar on React, UI, and UX techniques for building effective components",
      "Plan and estimate time, allocate tasks, and control the output quality of team members.",
      "Execute partners' orders using ReactJS, JavaScript, and jQuery, build a web interface, templates hub. develop plugins for news websites such as VTC, Kenh14, Soha, Tuổi Trẻ, Chính phủ",
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
    name: "Điểm thi THPT, Đại học 2024 - Báo tuổi trẻ",
    time:"2024",
    description: "Website providing information on university entrance exam results, 10th-grade entrance exam results, and university search based on scores",
    works: [
      "Build the source code in JavaScript to generate a JS file, create plugins according to the provided API, and embed them into the website.",
      "Implement the UI and functionality for websites providing 10th-grade, high school, and university exam results, and university search",
      "Create statistical charts, candidate lists, score lookup, and university search according to the provided API."
    ],
    link:'https://tuoitre.vn/diem-thi/tra-cuu-dai-hoc.htm',
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: DiemThi,
  },


  {
    name: "EURO 2024 - Báo thể thao văn hóa",
    time:"2024",
    description: "A sports website providing information about Euro 2024.",
    works: [
      "Build the source code in JavaScript to generate a JS file, create plugins according to the provided API, and embed them into the website",
      "Match schedule plugin, match result plugin, match progress plugin",
      "Tournament bracket plugin, participating teams list plugin, team statistics by team and by individual player"
    ],
    link:'https://thethaovanhoa.vn/euro-2024.htm',
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: EURO,
  },


 {
    name: "Admin Shop - Báo tuổi trẻ",
    time:"2024",
    description: "Website CMS Admin dashboard for the fashion store of the newspaper ",
    works: [
      "Developed the source code base for the Shop and integrated the admin website into the main IMS system",
      "Implement revenue statistics, order import/export, product collections, and drag-and-drop functionality for featured products Add products to collections, CRUD collections, orders",
    ],
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: ".net",
        color: "pink-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: ShopTTo,
  },

  {
    name: "Báo VTV",
    time:"2020",
    description: "Website for the VTV television station",
    works: [
      "Implement UI VTV Thể thao, VTV9, VTV8, VTV Tấm Lòng Việt page follow Figma",
      "Responsive and fix bugs",
      "Use canvas to save image and add sticker and frame",
      "Control the output quality of the team",
      "Integrate api, Responsive and fix bugs.",
    ],
    tags: [
      {
        name: ".net",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "jquery",
        color: "green-text-gradient",
      },
    ],
    image: Vtv,
  },


  {
    name: "Bầu cử mỹ - Báo tuổi trẻ",
    time:"2023",
    description: "Website about the US election for youth",
    works: [
      "Build the source code in JavaScript to generate a JS file, create plugins according to the provided API, and embed them into the website.",
      "Implement UI and function all page",
    ],
    link:'https://tuoitre.vn/bau-cu-tong-thong-my-e587.htm',
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: BCM,
  },

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
    link:'https://switchproductions.asia/experiences',
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
  {
    name: "Unity 2D game",
    time:"2020",
    description:
      "Training the team in Unity 2D game development, Creating a game similar to Mario with customizable and editable characters.",
    works: [
      "Implement characters and maps.",
      "Adding character animations (idle, run, jump, fall, die) and corresponding sound effects for each animation.",
      "Implementing character item pickup, collision with objects, and collision with traps functionality",
      "Implementing the menu selection and level transition functionality.",
    ],
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
    ],
    image: UnityG,
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
];

export { technologies, experiences, testimonials, projects };
