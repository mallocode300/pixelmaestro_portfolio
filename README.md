# PixelMaestro AI Art Portfolio

A modern, responsive portfolio website for AI artist PixelMaestro. This project showcases AI-generated artwork through an elegant and interactive user interface.

## Features

- 🎨 Stunning gallery of AI-generated artwork
- 🌓 Dark/light mode toggle
- 📱 Fully responsive design
- ⚡ Built with Next.js and Tailwind CSS
- 🔥 Smooth animations with Framer Motion
- 🧩 Modular component architecture
- 📝 Contact form for commission inquiries with direct email delivery

## Tech Stack

- **Frontend Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **TypeScript**: For type safety
- **Theme Toggle**: Next-themes for dark/light mode
- **Email Service**: EmailJS for sending contact form emails

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/pixelmaestro-portfolio.git
cd pixelmaestro-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Setting Up EmailJS for Contact Form

The contact form uses EmailJS to send emails directly to romainrossi25@gmail.com. Follow these steps to set it up:

1. **Create an EmailJS Account**
   - Sign up at [emailjs.com](https://www.emailjs.com/sign-up/)
   - Verify your email address

2. **Create an Email Service**
   - Go to "Email Services" in the dashboard
   - Add a new service and connect to your email provider
   - Note down the Service ID

3. **Create an Email Template**
   - Go to "Email Templates"
   - Create a new template with these variables:
     - From Name: `{{from_name}}`
     - Reply To: `{{from_email}}`
     - To Email: `{{to_email}}`
     - Subject: `New Contact Form Message: {{subject}}`
     - Message: `{{message}}`
   - Note down the Template ID

4. **Get Your Public Key**
   - Go to "Account" → "API Keys"
   - Copy your Public Key

5. **Update Your Code**
   - Open `src/app/contact/page.tsx`
   - Update these constants with your actual values:
   ```javascript
   const EMAILJS_SERVICE_ID = "paste_your_service_id_here";
   const EMAILJS_TEMPLATE_ID = "paste_your_template_id_here";
   const EMAILJS_PUBLIC_KEY = "paste_your_public_key_here";
   ```

6. **For Production**
   - Create a `.env.local` file in the project root with:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   NEXT_PUBLIC_RECIPIENT_EMAIL=romainrossi25@gmail.com
   ```
   - Update your code to use environment variables:
   ```javascript
   const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
   const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
   const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
   ```

## Deployment

This project is designed to be easily deployed on Vercel. Simply push to your GitHub repository and connect it to Vercel for continuous deployment.

```bash
npm run build
```

## Project Structure

```
├── public/             # Static assets and images
├── src/
│   ├── app/            # Next.js App Router pages
│   ├── components/     # Reusable UI components
│   ├── styles/         # Global styles
│   └── types/          # TypeScript types
├── package.json        # Project dependencies
└── README.md           # Project documentation
```

## Customization

- Replace placeholder gradient backgrounds with actual artwork images in `public/images/`
- Update artist information and portfolio details
- Customize colors in the Tailwind configuration

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Design inspiration from modern art gallery websites
- Instagram: [@pixelmaestro_ai](https://www.instagram.com/pixelmaestro_ai/)
