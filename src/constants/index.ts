const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
] as const;

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Bio & Experience", // was "Articles"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: true,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Oct 2026",
    title: "Zero-Knowledge Vaults: Client-Side AES-256-GCM with Telegram & Cloudflare",
    image: "/images/blog1.png",
    link: "https://github.com/uATrisk/tele-vault",
  },
  {
    id: 2,
    date: "Sep 2026",
    title: "Building Campus-Scale Full-Stack Systems with Next.js, Prisma & PostgreSQL",
    image: "/images/blog2.png",
    link: "https://github.com/uATrisk/clms",
  },
  {
    id: 3,
    date: "Aug 2026",
    title: "Automated Classroom Attendance with Face Embeddings and pgvector",
    image: "/images/blog3.png",
    link: "https://github.com/ps-ys/PSYS",
  },
];

const techStack = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "C++", "Java", "SQL"],
  },
  {
    category: "Web & Frontend",
    items: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "GSAP"],
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "Express.js", "REST APIs", "Prisma ORM", "WebCrypto API"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "Supabase (pgvector)", "MongoDB", "Cloudflare D1"],
  },
  {
    category: "DevOps & Cloud",
    items: ["Git", "GitHub", "Docker", "Vercel", "Render", "Cloudflare Workers"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#333",
    link: "https://github.com/uATrisk",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#0077b5",
    link: "https://www.linkedin.com/in/ansh-tomar-03a493302/",
  },
  {
    id: 3,
    text: "Telegram",
    icon: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
    bg: "#0088cc",
    link: "https://t.me/anshtomarrr",
  },
  {
    id: 4,
    text: "Call",
    icon: "https://www.reshot.com/preview-assets/icons/YUPNL5R2TW/phone-YUPNL5R2TW.svg",
    bg: "#25d366",
    link: "tel:+919927279293",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION: {
  id: number;
  type: string;
  name: string;
  icon: string;
  kind: string;
  children: any[];
} = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    {
      id: 11,
      name: "CLMS Laundry",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-8 left-8",
      children: [
        {
          id: 111,
          name: "overview.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-8 left-8",
          subtitle: "Campus Laundry Management Platform",
          description: [
            "PROJECT OVERVIEW:",
            "CLMS is a production-grade full-stack laundry management platform built for university campuses. It replaces manual paper tracking with real-time order status tracking and automated OTP-based pickup verification.",
            "",
            "CORE FEATURES:",
            "• 3 User Roles: Dedicated interfaces for Students, Staff, and Administrators",
            "• Real-time Order Tracking: End-to-end visibility from laundry submission to machine washing and folding",
            "• OTP Pickup Verification: Eliminates lost clothes and ensures orders are handed only to authorized owners",
            "• Institutional Google OAuth: Restricted to official university email domains with JWT-based session auth",
            "• Strict Audit-Trail: Prisma ORM PostgreSQL schema enforcing single-active-order rules and logging every status change",
            "",
            "TECH STACK:",
            "• Frontend: React.js, TypeScript, Tailwind CSS, Lucide Icons",
            "• Backend: Node.js, Express.js, Prisma ORM, PostgreSQL (Neon)",
            "• Security: JWT, Google OAuth 2.0, Role-Protected REST Endpoints",
            "• Deployment: Vercel (Frontend), Render (API Backend)",
          ],
        },
        {
          id: 112,
          name: "Live Demo",
          icon: "/icons/share.svg",
          kind: "file",
          fileType: "url",
          position: "top-8 left-36",
          href: "https://clms-murex.vercel.app/",
        },
        {
          id: 113,
          name: "GitHub",
          icon: "/icons/github.svg",
          kind: "file",
          fileType: "url",
          position: "top-8 left-64",
          href: "https://github.com/uATrisk/clms",
        },
        {
          id: 114,
          name: "Preview",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-40 left-8",
          imageUrl: "/images/project-1.png",
        },
      ],
    },
    {
      id: 12,
      name: "TeleVault",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-8 left-36",
      children: [
        {
          id: 121,
          name: "overview.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-8 left-8",
          subtitle: "Zero-Knowledge Media Vault backed by Telegram & Cloudflare",
          description: [
            "PROJECT OVERVIEW:",
            "TeleVault is an encrypted personal media library and archival vault designed with strict zero-knowledge cryptography. Photos and videos are encrypted client-side in the browser before leaving the device and stored anonymously across private Telegram channels.",
            "",
            "CORE FEATURES:",
            "• Zero-Knowledge Security: Master passphrase and derived encryption keys never leave the client browser",
            "• Client-Side AES-256-GCM: Pure WebCrypto API with PBKDF2 HMAC-SHA256 (600,000+ rounds) & HKDF subkey derivation",
            "• Unlimited Distributed Blob Store: Uses private Telegram channels as encrypted blob stores (20MB chunking)",
            "• Zero Plaintext Metadata: Telegram only ever receives random UUID .bin ciphertext files with zero EXIF or original filenames",
            "• Disaster Recovery: Complete media library can be reconstructed strictly from Telegram channel history using an Emergency Kit",
            "",
            "TECH STACK:",
            "• Client: React SPA, WebCrypto API, Tailwind CSS",
            "• Edge Backend: Cloudflare Workers, Cloudflare D1 (SQLite)",
            "• Storage Engine: Telegram Bot API (Private Channel Store)",
          ],
        },
        {
          id: 122,
          name: "GitHub",
          icon: "/icons/github.svg",
          kind: "file",
          fileType: "url",
          position: "top-8 left-36",
          href: "https://github.com/uATrisk/tele-vault",
        },
        {
          id: 123,
          name: "Preview",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-40 left-8",
          imageUrl: "/images/project-2.png",
        },
      ],
    },
    {
      id: 13,
      name: "Chai Adda",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-8 left-64",
      children: [
        {
          id: 131,
          name: "overview.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-8 left-8",
          subtitle: "College Canteen Management System",
          description: [
            "PROJECT OVERVIEW:",
            "Chai Adda is a full-stack campus canteen ordering application streamlining canteen operations for college students and food vendors with live order tracking and revenue analytics.",
            "",
            "CORE FEATURES:",
            "• Student Portal: Digital menu browsing, item ratings & reviews, UPI payment proof uploads, and real-time status updates",
            "• Vendor Dashboard: Complete order queue processing (Accept, Prepare, Complete), menu pagination, and transaction verification",
            "• Analytics & Insights: Sales trends, popular items, and customer review insights",
            "",
            "TECH STACK:",
            "• Frontend: Next.js, React, Tailwind CSS",
            "• Backend: Node.js, Express.js, PostgreSQL, Prisma ORM",
            "• Deployment: Vercel (Frontend), Render (API Backend)",
          ],
        },
        {
          id: 132,
          name: "Live Demo",
          icon: "/icons/share.svg",
          kind: "file",
          fileType: "url",
          position: "top-8 left-36",
          href: "https://chai-adda-system.vercel.app/",
        },
        {
          id: 133,
          name: "GitHub",
          icon: "/icons/github.svg",
          kind: "file",
          fileType: "url",
          position: "top-8 left-64",
          href: "https://github.com/uATrisk/ChaiAdda-System",
        },
        {
          id: 134,
          name: "Preview",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-40 left-8",
          imageUrl: "/images/project-3.png",
        },
      ],
    },
    {
      id: 14,
      name: "PSYS Attendance",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-40 left-8",
      children: [
        {
          id: 141,
          name: "overview.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-8 left-8",
          subtitle: "Multi-Tenant Face Recognition Attendance",
          description: [
            "PROJECT OVERVIEW:",
            "PSYS is a multi-tenant classroom attendance system leveraging computer vision and face recognition to automate student check-ins during university lectures.",
            "",
            "CORE FEATURES:",
            "• Split Architecture: Next.js web application for rosters and check-ins coupled with a dedicated Python camera service",
            "• Vector Face Matching: Supabase PostgreSQL with pgvector extension for high-dimensional face embeddings",
            "• Centralized Business Logic: SQL functions in Postgres prevent drift between Next.js and Python microservices",
            "",
            "TECH STACK:",
            "• Web App: Next.js (App Router), TypeScript, Tailwind CSS",
            "• Vision Service: Python, OpenCV, Face Recognition Embeddings",
            "• Database: Supabase PostgreSQL with pgvector extension",
          ],
        },
        {
          id: 142,
          name: "GitHub",
          icon: "/icons/github.svg",
          kind: "file",
          fileType: "url",
          position: "top-8 left-36",
          href: "https://github.com/ps-ys/PSYS",
        },
        {
          id: 143,
          name: "Preview",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-40 left-8",
          imageUrl: "/images/project-1.png",
        },
      ],
    },
    {
      id: 15,
      name: "AI Resume Ranker",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-40 left-36",
      children: [
        {
          id: 151,
          name: "overview.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-8 left-8",
          subtitle: "NLP & ML Candidate Resume Screening",
          description: [
            "PROJECT OVERVIEW:",
            "An intelligent resume ranking application using natural language processing to evaluate candidate CVs against target job descriptions.",
            "",
            "CORE FEATURES:",
            "• Multi-Format Parsing: Uploads and analyzes PDF, DOCX, and TXT resumes",
            "• Similarity Scoring: TF-IDF vectorization and cosine similarity calculations",
            "• Candidate Insights: Automated candidate tiering, pros/cons generation, and exportable JSON/CSV reports",
            "",
            "TECH STACK:",
            "• Python, Streamlit, Scikit-learn, NLTK, Natural Language Processing",
          ],
        },
        {
          id: 152,
          name: "GitHub",
          icon: "/icons/github.svg",
          kind: "file",
          fileType: "url",
          position: "top-8 left-36",
          href: "https://github.com/uATrisk/ai_candidate_evaluation",
        },
        {
          id: 153,
          name: "Preview",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-40 left-8",
          imageUrl: "/images/project-2.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-20 left-10",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/ansh.jpg",
      description: [
        "INTRODUCTION:",
        "Hi! I'm Ansh Tomar 👋 — Full-Stack Developer & Computer Science undergraduate based in Delhi, India.",
        "I specialize in building production-grade web applications with modern architectures, clean database schemas, and scalable deployment pipelines.",
        "",
        "EDUCATION:",
        "• Newton School of Technology – B.Tech in Computer Science & AI (2024 – 2028)",
        "• Currently in Semester 5",
        "",
        "COMPETITIVE PROGRAMMING & DSA:",
        "• Solved 300+ problems across LeetCode & Codeforces",
        "• Codeforces Rating: 950+",
        "• LeetCode Rating: 1400+",
        "• Passionate about algorithms, graph theory, dynamic programming, and writing performant solutions",
        "",
        "TECHNICAL ARSENAL:",
        "• Full-Stack: Next.js, React, Node.js, Express.js, TypeScript, REST APIs",
        "• Databases & ORM: PostgreSQL, MySQL, Supabase (pgvector), Prisma ORM, Cloudflare D1",
        "• Security & Cloud: Zero-Knowledge WebCrypto (AES-256-GCM), JWT, Google OAuth 2.0, Docker, Vercel, Render",
        "",
        "LEADERSHIP & OUTREACH:",
        "• Successfully mentored, referred, and onboarded 60+ students to Newton School of Technology",
        "• Active collaborator in university software teams and competitive coding hackathons",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // href: "/your/resume/path.pdf",
      position: "top-48 left-10",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "LeetCode.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/leetcode-profile.png",
    },
    {
      id: 2,
      name: "Codeforces.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/codeforces-profile.png",
    },
    {
      id: 3,
      name: "CodeChef.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-70 left-40",
      imageUrl: "/images/codechef-profile.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };