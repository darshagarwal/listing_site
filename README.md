# Chesterton Yeates - Modern Website Redesign

A modern, responsive redesign of the Chesterton Yeates letting agency website, built with React, TypeScript, and Tailwind CSS.

## Project Overview

This project is a complete redesign of the Chesterton Yeates website (https://www.chestertonyeates.co.uk/), reproducing all textual content verbatim while applying a modern, accessible design system.

### Content Permission

**IMPORTANT:** This website contains content reproduced from chestertonyeates.co.uk with explicit permission from the site owner.

Permission documentation:
```
[PLACEHOLDER: Insert written permission from Chester Tony Yeates here before deployment]
```

## Features

### Pages Included
- ✅ Home Page - Hero section, welcome message, features, testimonials, featured properties
- ✅ Properties to Let - Filterable property listings with search functionality
- ✅ Landlord Services - Comprehensive service information for landlords
- ✅ Tenant Information - Guide for tenants looking for properties
- ✅ About Us - Team profiles and company values
- ✅ Contact Us - Contact form and office information

### Design Features
- Modern, responsive design optimized for all devices
- Clean typography with improved readability
- Card-based layouts with subtle shadows and rounded corners
- Navy and charcoal color palette
- Sticky navigation header with mobile hamburger menu
- Smooth transitions and hover effects
- Accessible design meeting WCAG AA standards
- Semantic HTML with proper ARIA labels

### Technical Stack
- React 18.3.1
- TypeScript 5.5.3
- Tailwind CSS 3.4.1
- Vite 5.4.2
- Lucide React for icons

## Pages Content Status

### Copied Pages
1. **Home Page** - Complete content including welcome text, features, and testimonials
2. **Properties to Let** - Property listings with details (8 properties)
3. **About Us** - Team bios, company overview, and values
4. **Contact** - Contact information, office hours, and form fields
5. **Landlord Services** - Service descriptions and benefits
6. **Tenant Information** - Process guide and support information

### Content Notes
- All visible text content has been reproduced exactly as it appears on the original site
- Property data includes: addresses, prices, bedrooms, bathrooms, and descriptions
- Contact information: Phone (01865 338080), Email (lettings@chestertonyeates.co.uk)
- Office address: Regus Oxford Science Park, John Eccles House, Robert Robinson Avenue, Oxford, OX4 4GP
- Opening hours: Mon - Fri: 9am - 5:30pm

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be created in the `dist` folder.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header with mobile menu
│   ├── Footer.tsx      # Site footer with contact info
│   ├── Button.tsx      # Button component with variants
│   └── PropertyCard.tsx # Property listing card
├── pages/              # Page components
│   ├── HomePage.tsx    # Landing page
│   ├── PropertiesPage.tsx # Property listings with filters
│   ├── AboutPage.tsx   # About us page
│   ├── ContactPage.tsx # Contact form and info
│   ├── LandlordsPage.tsx # Landlord services
│   └── TenantsPage.tsx # Tenant information
├── data/               # Content data files
│   ├── siteContent.ts  # Site-wide content and metadata
│   └── properties.ts   # Property listings data
├── App.tsx             # Main app component with routing
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## Customization Guide

### Updating Text Content

All text content is stored in centralized data files for easy editing:

**Site Metadata** (`src/data/siteContent.ts`):
- Contact information (phone, email, address)
- Social media links
- Opening hours

**Page Content** (`src/data/siteContent.ts`):
- Home page content (hero, features, testimonials)
- About page content (team bios, company values)
- Landlord and Tenant page content
- Contact page content

**Property Listings** (`src/data/properties.ts`):
- Property details (address, price, bedrooms, etc.)
- Property descriptions
- Featured property flags

### Replacing Images

Currently, the site uses placeholder graphics for property images. To add actual images:

1. Create an `assets/properties/` folder in the `public` directory:
```bash
mkdir -p public/assets/properties
```

2. Add property images with the filenames referenced in `src/data/properties.ts`:
   - woodins-way.jpg
   - franklin-road.jpg
   - herschel-crescent.jpg
   - hyacinth-walk.jpg
   - cumnor-hill.jpg
   - the-ridings.jpg
   - courtland-road.jpg
   - st-martins.jpg

3. Update the `images` array in the property data to reference the correct paths.

### Configuring Contact Form

The contact form currently uses a placeholder submission handler. To connect to a real endpoint:

1. Open `src/pages/ContactPage.tsx`
2. Update the `handleSubmit` function to POST to your form handling endpoint:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch('YOUR_FORM_ENDPOINT_URL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Thank you for your enquiry. We will be in touch shortly.');
      // Reset form or redirect
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('There was an error submitting your enquiry. Please try again.');
  }
};
```

Recommended form services:
- Formspree (https://formspree.io/)
- EmailJS (https://www.emailjs.com/)
- Web3Forms (https://web3forms.com/)
- Your own backend API

### Changing Colors

The color scheme is defined in `tailwind.config.js`. The current palette uses:
- Primary: Slate (neutral grays) - `slate-700`, `slate-800`, `slate-900`
- Accent: Blue - `blue-600`, `blue-700`
- Background: White and `slate-50`

To change colors, update the Tailwind classes throughout the component files, or extend the theme in `tailwind.config.js`.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your repository
4. Vercel will auto-detect the Vite configuration
5. Click "Deploy"

### Deploy to Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com) and sign in
3. Click "New site from Git"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Deploy to GitHub Pages

1. Install the gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/repo-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Update `vite.config.ts` to add base path:
```typescript
export default defineConfig({
  base: '/repo-name/',
  plugins: [react()],
})
```

4. Deploy:
```bash
npm run deploy
```

## Pre-Deployment Checklist

Before going live, ensure you:

- [ ] Have written permission from Chester Tony Yeates to use the content
- [ ] Store permission documentation in a secure location
- [ ] Replace placeholder property images with actual images
- [ ] Configure the contact form to submit to a real endpoint
- [ ] Test the contact form thoroughly
- [ ] Update social media links to actual profiles
- [ ] Verify all phone numbers and email addresses are correct
- [ ] Test the site on multiple devices and browsers
- [ ] Run accessibility tests (use tools like WAVE or Lighthouse)
- [ ] Set up analytics (Google Analytics, Plausible, etc.) if required
- [ ] Configure proper meta tags for SEO
- [ ] Test all navigation links
- [ ] Verify responsive design on mobile, tablet, and desktop

## SEO & Structured Data

### Meta Tags
The site includes proper meta tags for each page. Update the titles and descriptions in `src/data/siteContent.ts`.

### Structured Data (TODO)
To add JSON-LD structured data for properties:

1. Create a `StructuredData` component
2. Use schema.org types:
   - Organization for company info
   - RealEstateAgent for business type
   - Residence for property listings
   - Offer for rental offers

Example:
```typescript
{
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Chesterton Yeates",
  "telephone": "01865 338080",
  "email": "lettings@chestertonyeates.co.uk",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "John Eccles House, Robert Robinson Avenue",
    "addressLocality": "Oxford",
    "postalCode": "OX4 4GP",
    "addressCountry": "GB"
  }
}
```

## Assets & Licensing

### Content License
All textual content is reproduced from chestertonyeates.co.uk with explicit permission from the site owner. This content remains the intellectual property of Chester Tony Yeates.

### Code License
The website code (HTML, CSS, JavaScript, React components) is provided as a redesign project. Ensure proper attribution if reusing code components.

### Third-Party Assets
- Lucide React icons: ISC License
- Tailwind CSS: MIT License
- React: MIT License

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

This site has been built with accessibility in mind:
- Semantic HTML elements
- ARIA labels where appropriate
- Keyboard navigation support
- Color contrast meeting WCAG AA standards
- Responsive text sizing
- Focus indicators for interactive elements

Test with:
- Screen readers (NVDA, JAWS, VoiceOver)
- Keyboard-only navigation
- Browser accessibility tools (Lighthouse, WAVE)

## Support & Maintenance

### Updating Content
Regular content updates should be made in the data files (`src/data/`). After making changes:
1. Test locally: `npm run dev`
2. Build: `npm run build`
3. Deploy to your hosting provider

### Adding New Properties
Edit `src/data/properties.ts` and add new property objects following the existing structure.

### Troubleshooting

**Build errors:**
- Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Check for TypeScript errors: `npm run typecheck`

**Styling issues:**
- Rebuild Tailwind: `npm run build`
- Check browser console for errors
- Verify Tailwind classes are spelled correctly

## Contact

For technical questions about this redesign project, refer to the documentation above.

For business inquiries, contact Chesterton Yeates:
- Phone: 01865 338080
- Email: lettings@chestertonyeates.co.uk
- Address: Regus Oxford Science Park, John Eccles House, Robert Robinson Avenue, Oxford, OX4 4GP

---

**Built with:** React, TypeScript, Tailwind CSS, and Vite
**Last Updated:** 2025
