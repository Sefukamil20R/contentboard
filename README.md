# Blog Viewer App

A modern blog viewer built with **Next.js** and **TypeScript**.

## Features

- Responsive design for desktop and mobile
- Highlighted and similar posts sections
- Newsletter subscription form
- Leave comment functionality
- Clean, modular CSS

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Sefukamil20R/contentboard
   cd contentboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Folder Structure

```
contentboard/
├── data/
│   └── posts.json
├── pages/
│   ├── index.tsx
│   └── post/
│       └── [id].tsx
├── public/
│   └── images/
├── styles/
│   ├── Home.module.css
│   └── Post.module.css
├── .gitignore
├── package.json
└── README.md
```

- **data/** – Blog post data (JSON)
- **pages/** – Next.js pages (main app and post details)
- **public/images/** – Images for posts
- **styles/** – CSS modules for styling
