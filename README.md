# Dongjun Hahm Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Clean, professional design with light theme
- 📱 Fully responsive layout
- ⚡ Built with Next.js 14 and TypeScript
- 🎯 Optimized for performance and SEO
- 🧩 Component-based architecture with shadcn/ui
- 📊 Comprehensive project showcase
- 🎓 Education and experience sections
- 🛠️ Skills and technologies display

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/dongjunhahm/dongjun-hahm-portfolio.git
cd dongjun-hahm-portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
bun install
\`\`\`

3. Run the development server:
\`\`\`bash
bun dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Project Structure

\`\`\`
dongjun-hahm-portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   └── theme-provider.tsx # Theme provider
├── lib/                  # Utility functions
│   └── utils.ts          # Utility helpers
├── public/               # Static assets
├── package.json          # Dependencies
├── tailwind.config.ts    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
\`\`\`

## Customization

### Personal Information
Update the personal information in `app/page.tsx`:
- Name, title, and contact details
- About me section
- Experience and education
- Projects and skills

### Styling
- Modify `tailwind.config.ts` for theme customization
- Update `app/globals.css` for global styles
- Customize component styles in individual files

### Adding Projects
Add new projects in the projects section of `app/page.tsx`:
1. Create a new `Card` component
2. Add project details, technologies, and links
3. Include relevant icons and badges

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: dongjunathahm@gmail.com
- **LinkedIn**: [linkedin.com/in/dongjun-hahm](https://linkedin.com/in/dongjun-hahm)
- **GitHub**: [github.com/dongjunhahm](https://github.com/dongjunhahm)
