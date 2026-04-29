# Ambati Sonia - Portfolio Website

A modern, fully responsive portfolio website inspired by anime character pages, showcasing Ambati Sonia's profile as a Cloud Developer/Media specialist.

## Features

- **Home Section**: Eye-catching hero section with animated elements and image gallery
- **About Section**: Professional introduction with highlights and background
- **Projects Section**: Showcase of key projects with hover effects and tags
- **Skills Section**: Interactive skill bars and technology stack display
- **Contact Section**: Contact form and multiple ways to get in touch
- **Modern Design**: Clean, professional layout with anime-inspired aesthetics
- **Fully Responsive**: Works seamlessly on all devices from desktop to mobile
- **Interactive Elements**:
  - Smooth scrolling navigation with active state tracking
  - Image gallery with color theme switcher via dot navigation
  - Custom cursor effect
  - Parallax scrolling effects
  - Fade-in animations on scroll
  - Animated skill progress bars
  - Interactive project cards
  - Working contact form

## Sections

### 1. Home
- Large hero section with profile image
- Role and description
- Social media links
- Call-to-action buttons
- Image gallery (click dots to switch images)

### 2. About
- Personal introduction
- Professional highlights
- Education & experience overview
- Styled profile image with decorative frame

### 3. Projects
- Grid layout of project cards
- Project categories and descriptions
- Technology tags
- Hover effects with project links
- Placeholder images (replace with your actual project images)

### 4. Skills
- Organized by categories (Cloud, Development, Media)
- Animated progress bars
- Tools & technologies grid
- Responsive layout

### 5. Contact
- Contact information cards
- Working contact form
- Social media links
- Email, LinkedIn, GitHub, Portfolio links

## Technologies Used

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox, Animations)
- Vanilla JavaScript
- Google Fonts (Poppins, Playfair Display)

## Getting Started

1. Open `index.html` in your web browser
2. Navigate through sections using the navigation menu
3. Click on the dots on the right to change images and color themes
4. Explore projects, skills, and contact sections
5. Fill out the contact form to send a message

## File Structure

```
sonia_website/
├── img/                # Image folder
│   ├── sonia1.png     # Profile image 1
│   ├── sonia2.png     # Profile image 2
│   ├── sonia3.png     # Profile image 3
│   ├── sonia4.png     # Profile image 4
│   └── sonia5.png     # Profile image 5
├── index.html         # Main HTML file
├── styles.css         # Stylesheet with responsive design
├── script.js          # JavaScript for interactivity
└── README.md          # This file
```

## Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #8B5A5C;
    --secondary-color: #E8A5A5;
    --dark-color: #2C2C2C;
    --light-bg: #F5F5F5;
}
```

### Updating Profile Information
Edit the content in `index.html`:
- Name and title
- Description text
- Social media links
- Profile images

### Adding Projects
In `index.html`, duplicate a `.project-card` div and update:
- Project image URL
- Project title and description
- Technology tags
- Project link

### Customizing Skills
In `index.html`, modify skill items and adjust percentage widths in the `style` attribute of `.skill-progress` divs.

### Contact Form Integration
The contact form currently shows an alert. To connect it to a backend:
1. Edit the form submit handler in `script.js`
2. Add your email service API (e.g., EmailJS, Formspree)
3. Or connect to your own backend server

## Adding More Images

Place additional images in the `img/` folder. The dot navigation currently supports 6 images (5 unique + 1 repeat). Update `script.js` to add more:

```javascript
const images = [
    'img/sonia1.png',
    'img/sonia2.png',
    // Add more images here
];
```

## Social Links

- LinkedIn: [Ambati Sonia](https://www.linkedin.com/in/ambati-sonia-569159329/)
- GitHub: [SoniaAmbati](https://github.com/SoniaAmbati)
- Portfolio: [soniaambati.github.io](https://soniaambati.github.io/)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

- Optimize images before uploading (recommended size: under 500KB each)
- Use WebP format for better compression
- Lazy load images if adding many more projects
- Minify CSS and JavaScript for production

## License

This project is open source and available for personal use.

---

**Made with ❤️ by Ambati Sonia**
