# Khalid Hussain Siddique - Portfolio Website

A modern, responsive portfolio website showcasing Khalid's professional experience, skills, and projects. Built with HTML, CSS, and JavaScript, featuring smooth animations, dark mode support, and mobile-first design.

## 🌟 Features

### ✨ Design & UX
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Smooth Animations**: AOS (Animate On Scroll) library integration
- **Sticky Navigation**: Fixed navbar with scrollspy functionality
- **Scroll Progress Bar**: Visual indicator of page scroll progress
- **Back to Top Button**: Smooth scroll to top functionality

### 📱 Mobile Optimized
- **Hamburger Menu**: Collapsible navigation for mobile devices
- **Touch-Friendly**: Optimized for touch interactions
- **Responsive Images**: Adaptive image sizing across devices
- **Performance Optimized**: Throttled scroll events and lazy loading

### 🎨 Visual Elements
- **Modern Typography**: Inter font family for clean readability
- **Gradient Accents**: Beautiful gradient backgrounds and buttons
- **Hover Effects**: Interactive elements with smooth transitions
- **Card-Based Layout**: Clean, organized content presentation
- **Timeline Design**: Visual work experience timeline

## 🚀 Sections

1. **Hero Section**: Landing page with name, title, and call-to-action buttons
2. **About Me**: Professional summary and key highlights
3. **Work Experience**: Timeline of professional roles and achievements
4. **Projects**: Portfolio of key projects and research work
5. **Skills**: Categorized technical and soft skills
6. **Contact**: Contact form and professional information

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and accessibility
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (ES6+)**: Interactive functionality and animations
- **AOS Library**: Scroll-triggered animations
- **Google Fonts**: Inter font family
- **GitHub Pages**: Hosting platform

## 📁 Project Structure

```
khalid-portfolio/
├── index.html          # Main HTML file
├── style.css           # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
├── assets/             # Static assets
│   ├── favicon.ico     # Website favicon
│   └── profile.jpg     # Profile photo (placeholder)
└── .gitignore          # Git ignore file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript (for customization)
- Git (for version control)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/khalid-portfolio.git
   cd khalid-portfolio
   ```

2. **Open in browser**
   ```bash
   # Using Python (if installed)
   python -m http.server 8000
   
   # Using Node.js (if installed)
   npx serve .
   
   # Or simply open index.html in your browser
   ```

3. **Customize content**
   - Replace `assets/profile.jpg` with your actual profile photo
   - Update personal information in `index.html`
   - Modify colors and styling in `style.css`
   - Add custom functionality in `script.js`

## 🎨 Customization

### Colors and Themes
The website uses CSS custom properties for easy theming. Main color variables are defined in `style.css`:

```css
:root {
    --primary-color: #1e40af;
    --secondary-color: #3b82f6;
    --accent-color: #60a5fa;
    /* ... more variables */
}
```

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding CSS in `style.css`
3. Add navigation link in the navbar
4. Include AOS animations with `data-aos` attributes

### Modifying Animations
AOS animations can be customized by modifying the `data-aos` attributes:
- `data-aos="fade-up"` - Fade in from bottom
- `data-aos="fade-right"` - Fade in from left
- `data-aos="fade-left"` - Fade in from right
- `data-aos="zoom-in"` - Zoom in effect

## 🌐 Deployment

### GitHub Pages (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio website"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Select source branch (usually `main`)
   - Choose root folder
   - Save settings

3. **Custom Domain (Optional)**
   - Add custom domain in GitHub Pages settings
   - Update DNS records with your domain provider
   - Add `CNAME` file to repository root

### Other Hosting Options

- **Netlify**: Drag and drop the folder to deploy
- **Vercel**: Connect GitHub repository for automatic deployment
- **Firebase Hosting**: Use Firebase CLI for deployment
- **Traditional Web Hosting**: Upload files via FTP

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Performance Optimizations

- **Image Optimization**: Compress images before adding to assets
- **Minification**: Minify CSS and JS for production
- **Caching**: Implement browser caching headers
- **CDN**: Use CDN for external libraries
- **Lazy Loading**: Images load as needed

## 📊 Analytics Integration

The website includes basic analytics tracking. To enable Google Analytics:

1. Add Google Analytics script to `index.html` head section
2. Update tracking ID in `script.js`
3. Customize event tracking as needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

**Khalid Hussain Siddique**
- Email: khalidhussain.siddique@my.liu.edu
- LinkedIn: [Khalid Hussain Siddique](https://linkedin.com/in/khalid-hussain-siddique)
- Location: Jersey City, New Jersey

## 🙏 Acknowledgments

- [AOS Library](https://michalsnik.github.io/aos/) for scroll animations
- [Google Fonts](https://fonts.google.com/) for typography
- [GitHub Pages](https://pages.github.com/) for hosting
- [Inter Font](https://rsms.me/inter/) for beautiful typography

---

**Note**: This is a template portfolio website. Please replace placeholder content with your actual information, add your profile photo, and customize the design to match your personal brand. 