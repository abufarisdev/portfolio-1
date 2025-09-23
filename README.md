# Portfolio Website

A modern, responsive portfolio website built with Next.js, featuring a clean design and smooth animations.

## 🌟 Features

- **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Responsive Design**: Optimized for all devices
- **Dark/Light Mode**: Toggle between themes with persistent preferences
- **Interactive Components**: Smooth animations using Magic UI components
- **Blog System**: Dynamic blog pages with individual post routes
- **Contact Form**: Integrated contact functionality with API endpoint
- **Project Showcase**: Dedicated section for displaying projects
- **Professional Layout**: Clean, organized presentation of work, education, and experience

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui inspired design
- **Animations**: Magic UI for smooth transitions
- **Icons**: Custom icon system

## 📁 Project Structure
```
📁 PROJECT STRUCTURE

portfolio/
├── 📁 node_modules/           (Third-party dependencies - truncated for brevity)
├── 📁 public/                 (Static assets and media files)
│   ├── 🖼️ blog/               (Blog-related images)
│   │   └── hackathonexp.jpg   (Hackathon experience image)
│   ├── 🏫 education/          (Educational institution logos)
│   │   ├── stads.jpeg         (STADS institution logo)
│   │   └── svu-logo.png       (SVU university logo)
│   ├── 💼 projects/           (Project screenshots/thumbnails)
│   │   └── crypton.png        (Crypton project image)
│   ├── 💼 work/               (Work/company logos)
│   │   └── gdgkolkata.png     (GDG Kolkata logo)
│   ├── hoverAvatarUrl.jpg     (Hover effect avatar image)
│   └── me.jpeg                (Main profile picture)
├── 📁 src/                    (Source code directory)
│   ├── 📁 app/                (Next.js App Router pages)
│   │   ├── 🌐 api/            (API routes directory)
│   │   │   └── chatgpt/       (ChatGPT integration API)
│   │   │       └── route.ts   (API route handler)
│   │   ├── 📝 blog/           (Blog section pages)
│   │   │   ├── [slug]/        (Dynamic blog post pages)
│   │   │   │   └── page.tsx   (Individual blog post component)
│   │   │   └── page.tsx       (Blog listing page)
│   │   ├── 📞 contact/        (Contact section)
│   │   │   └── page.tsx       (Contact page component)
│   │   ├── globals.css        (Global CSS styles)
│   │   ├── layout.tsx         (Root layout component)
│   │   └── page.tsx           (Home page component)
│   ├── 📦 components/         (Reusable React components)
│   │   ├── 🧩 magicui/        (Animated UI components)
│   │   │   ├── blur-fade-text.tsx (Text blur fade animation)
│   │   │   └── blur-fade.tsx      (Blur fade animation)
│   │   ├── 🎨 ui/             (Base UI components)
│   │   │   ├── avatar.tsx     (Avatar component)
│   │   │   ├── badge.tsx      (Badge component)
│   │   │   ├── button.tsx     (Button component)
│   │   │   ├── card.tsx       (Card component)
│   │   │   ├── input.tsx      (Input field component)
│   │   │   ├── label.tsx      (Label component)
│   │   │   ├── separator.tsx  (Separator component)
│   │   │   ├── tabs.tsx       (Tabs component)
│   │   │   ├── textarea.tsx   (Textarea component)
│   │   │   └── tooltip.tsx    (Tooltip component)
│   │   ├── AboutMeBot.tsx     (AI chatbot component)
│   │   ├── contact-form.tsx   (Contact form component)
│   │   ├── icons.tsx          (Icon components)
│   │   ├── mode-toggle.tsx    (Theme mode toggle)
│   │   ├── navbar.tsx         (Navigation bar component)
│   │   ├── project-card.tsx   (Project card component)
│   │   ├── resume-card.tsx    (Resume card component)
│   │   └── theme-provider.tsx (Theme context provider)
│   ├── 📊 data/               (Static data files)
│   │   └── resume.tsx         (Resume data and content)
│   └── 🔧 lib/                (Utility functions)
│       └── utils.ts           (Utility functions library)
└── 📄 Configuration files     (package.json, tsconfig.json, etc.)
```

🔑 **KEY DIRECTORIES:**
- 📁 public/     : Static assets, images, and media files
- 📁 src/app/    : Next.js pages, layouts, and API routes
- 📦 components/ : Reusable React components and UI elements
- 📊 data/       : Static data and content management
- 🔧 lib/        : Utility functions and helpers


## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```
3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```
## 🤝 Contributing

While this is a personal portfolio, feedback and suggestions are welcome. Please feel free to open issues or submit pull requests for improvements.

## 📄 License

This project is open source and available under the MIT License
   





