# Links Portal

A modern, dynamic links portal built with Astro that pulls link data from Google Sheets and leverages Zapier automation. Perfect for creating a centralized hub of important links that can be easily managed through a spreadsheet interface.

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)
[![Netlify Status](https://api.netlify.com/api/v1/badges/060db1b4-99c3-4eca-ae20-f33308c14c7a/deploy-status)](https://app.netlify.com/sites/links-portal/deploys)

## ✨ Features

- **Dynamic Content**: Links are dynamically pulled from Google Sheets
- **Modern UI**: Clean, responsive design built with Tailwind CSS
- **Fast Performance**: Built with Astro for optimal loading speeds
- **Easy Management**: Update links through Google Sheets interface
- **Automation Ready**: Zapier integration for workflow automation
- **Zero Config**: Simple setup and deployment

## 🛠️ Tech Stack

- **[Astro](https://astro.build)** - Static site generator for optimal performance
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[Google Sheets API](https://developers.google.com/sheets/api)** - Data source for links
- **[Google Apps Script](https://developers.google.com/apps-script)** - Server-side API endpoint
- **[Zapier](https://zapier.com)** - Automation and workflow integration

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- A Google account with access to Google Sheets and Apps Script
- Zapier account (optional, for automation features)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/links-portal.git
cd links-portal
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## 📊 Google Sheets Setup

### Sheet Structure

Create a Google Sheet with the following columns:

- **Column A**: `active` (TRUE/FALSE)
- **Column B**: `name` (Link title)
- **Column C**: `url` (Link URL)
- **Column D**: `description` (Link description)

### Apps Script Integration

1. Open your Google Sheet
2. Go to `Extensions > Apps Script`
3. Replace the default code with the contents of `google-function-doGet.js`
4. Deploy as a web app with public access
5. Copy the web app URL for use in your Astro project

## ⚡ Zapier Integration

The portal is designed to work seamlessly with Zapier for automation:

- **Trigger**: New row added to Google Sheet
- **Action**: Webhook to trigger site rebuild (if using Netlify/Vercel)
- **Filter**: Only process rows where `active` is TRUE

### Example Zapier Workflows

1. **Slack to Links**: Add links shared in Slack channels automatically
2. **Email to Links**: Parse emails for links and add to portal
3. **RSS to Links**: Monitor RSS feeds and add new articles
4. **Form to Links**: Accept link submissions through web forms

## 🏗️ Project Structure

```
├── src/
│   ├── components/
│   │   ├── Footer.astro       # Site footer
│   │   ├── Header.astro       # Site header
│   │   ├── Link.astro         # Individual link component
│   │   └── Portal.astro       # Main portal component
│   ├── layouts/
│   │   └── Layout.astro       # Base layout
│   └── pages/
│       └── index.astro        # Home page
├── public/
│   └── favicon.ico
├── google-function-doGet.js   # Google Apps Script code
└── package.json
```

## 🎨 Customization

### Styling

The project uses Tailwind CSS for styling. Customize the appearance by modifying:

- `tailwind.config.mjs` - Tailwind configuration
- Component files in `src/components/` - Individual component styles

### Data Structure

Modify the Google Apps Script in `google-function-doGet.js` to:

- Add new columns to your sheet
- Change the data structure returned
- Add filtering or sorting logic

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Deploy to Vercel

```bash
npx vercel
```

## 🔧 Configuration

### Environment Variables

If using sensitive data, create a `.env` file:

```env
GOOGLE_SHEETS_API_URL=your_apps_script_url_here
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Powered by [Google Sheets](https://sheets.google.com)
- Enhanced with [Zapier](https://zapier.com)
