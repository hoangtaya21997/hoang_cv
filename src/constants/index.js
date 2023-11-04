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
    date: "October 2022 - December 2023",
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
    date: "October 2022 - December 2023",
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
    date: "December 2022 - Present",
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
      "Trang web về giảm thiểu chất thải và bảo vệ môi trường biển, project chỉ cần giao diện và chức năng bên khách hàng sẽ đảm nhiệm backend",
    works: [
      "Tạo source code ReactJS",
      "Xâu dựng UI Header, Footer, Trang Home, About, Resources, Media, RPT dựa theo Figma",
      "Tạo Animation Hiện nội dung khi scroll đến Element",
      "Tạo Animation Chuyển động của các túi rác thải, Chai nhựa, animation count number",
      "Tạo Carousel bằng thư viện OwlCarousel phần Leaderships cho About page",
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
    description: "Trang Web chụp ảnh và làm đẹp, tạo short video với các hiệu ứng tùy chỉnh, có thể chụp ảnh hoặc đăng ảnh để chỉnh sửa, thêm frame, sticker cho ảnh, quay video tạo bomerang...",
    works: [
      "frontend chính của dự án",
      "Tạo Source code NextJS",
      "Đảm nhiệm phần Photo",
      "Tạo Canvas để lưu lại frame ảnh",
      "Tạo UI Trang chụp ảnh, add Frame, add Stiker, lưu ảnh theo Figma",
      "Tạo chức năng thêm Frame vào ảnh, Thêm Stickers vào ảnh",
      "Tạo chức năng tải ảnh về dưới dạng .png",
      "Integrate API",
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
      "Trang web về giảm thiểu chất thải và bảo vệ môi trường biển, project chỉ cần giao diện và chức năng bên khách hàng sẽ đảm nhiệm backend",
    works: [
      "frontend chính của dự án",
      "Tạo source code ReactJS",
      "Xâu dựng UI Header, Footer, Trang OutWork, Our Stories, News, Membership, Clean4Change và Contact Us dựa theo Figma",
      "Tạo Video autoplay trong banner trang Home",
      "Tạo Carousel bằng thư viện OwlCarousel phần Our latest projects cho Home page",
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
      "Trang web hiển thị thông tin sự kiện và form đăng ký sự kiện cho người tham gia, sau khi đăng ký thành công gửi vé mời về email của người đăng ký",
    works: [
      "frontend chính của dự án",
      "Xậy Dựng UI Header, Footer, Banner, Overview, Outline, Contact, Register theo Figma",
      "Tạo Form và chức năng đăng ký cho phần Register",
      "Integrate API register bằng axios",
      "Tạo chức năng scroll to Element",
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
      "Trang web hiển thị thông tin của tất cả mọi người đã tham gia đăng ký Event JSEA Registration, Khi đăng ký Event JSEA Registration thông tin sẽ được lưu lại tai trang web Etech Portal và vé mời tham dự sẽ được gửi vào email của người đăng ký bao gồi thời gian địa điểm và mã qr code, Khi đến tham gia sự kiện người đăng ký sẽ đưa ra mã qr code nhân viên sẽ Scan qr code đó cho phép họ vào tham gia sự kiện cũng như đưa ra thẻ đeo đúng với chức danh họ đã đăng ký trong sự kiên",
    works: [
      "Xây Dựng Trang web quét mã qr code",
      "Xây dựng PopUp cho trang Etech Portal",
      "Tạo Form và chức năng đăng ký cho phần Register",
      "Integrate API trang qét mã qr code",
      "Tạo React native app quét mã qr code cho ios",
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
      "Trang web hiển thị toàn bộ hình ảnh của một sự kiện theo từng danh mục",
    works: [
      "frontend chính của dự án",
      "Thiết Kế UI Toàn bộ trang web theo Figma",
      "Tạo animation hiểm thị ảnh, Thanh scroll, responsive",
      "Tạo carousel bằng thư viện React-slick và chỉnh sửa giao diện",
      "Lazy load cho hình ảnh",
      "Integrate API danh sách hình ảnh bằng axios",
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
      "Trang web giớ thiệu về Switch và các chiến dịch của họ cùng với một vài game nhỏ",
    works: [
      "Tạo UI trang Experiences game theo Figma",
      "Tạo UI trang PIECE ME UP game",
      "Xây dựng game PIECE ME UP bằng phương pháp kéo thả onDrag onDrop element",
      "tạo chức năng âm thanh, animation bàn tay",
      "responsive bằng phương pháp chia tỉ lệ theo % của các thẻ div"
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
      "Trang web bán hàng cung cấp phân phối âm thanh karaoke, Hội trường, dự án được thực hiện năm 3 đại học",
    works: [
      "Xậy Dựng UI Toàn bộ trang web",
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
      "Trang web quay gacha để các nhận thưởng theo tỷ lệ",
    works: [
      "Xậy Dựng UI Toàn bộ trang web",
      "Tạo Carousel bằng thư viện OwlCarousel ",
      "Play Video quay gacha",
      "Tạo UI và logic cho popup Sign Up form",
      "intergrate API quay gacha"
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
];

export { technologies, experiences, testimonials, projects };
