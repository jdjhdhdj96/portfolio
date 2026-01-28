# 🌱 Food Economics: Data Story Visualization

A creative and interactive infographic website that tells the story of global food economics through stunning data visualizations. This project combines beautiful design with powerful data storytelling to explore food prices, trends, and sustainability.

![Version](https://img.shields.io/badge/version-1.0.0-green.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 🎨 Design Philosophy

This project embodies the **Creative Infographic Aesthetic** with:
- **Organic Data Visualization**: Natural, flowing visual elements
- **Editorial Magazine Style**: Professional layout with typographic hierarchy
- **Data Storytelling**: Narrative-driven insights
- **Sustainable Theme**: Eco-friendly color palette centered around food and nature

## ✨ Key Features

### Currently Implemented

✅ **Hero Section with Animated Statistics**
- Dynamic hero section with organic background animations
- Key statistics display (8+ years of data, 50+ categories, 12 regions)
- Smooth scroll call-to-action

✅ **Section 01: Food Price Overview**
- Interactive radial sunburst chart (ECharts)
- Category breakdown with detailed pricing
- Information cards for each food category
- Key insights highlighting climate impact

✅ **Section 02: Price Trends (2013-2024)**
- Multi-line chart showing historical price trends
- Interactive category filters
- Timeline milestones marking significant events
- Smooth animations and hover effects

✅ **Section 03: Regional Analysis**
- Bar chart comparing regional food basket costs
- Bubble chart showing price variance across categories and regions
- Statistical cards highlighting key differences
- 6 global regions coverage

✅ **Section 04: Insights & Future Outlook**
- Four key insight cards with detailed analysis
- Future price projection chart (2024-2030)
- Climate, sustainability, and consumer behavior insights
- Realistic scenario modeling

✅ **Interactive Features**
- Smooth scroll navigation
- Responsive mobile menu
- GSAP-powered animations
- ScrollTrigger effects
- Hover interactions
- Keyboard navigation support

✅ **Responsive Design**
- Mobile-first approach
- Tablet optimization
- Desktop multi-column layouts
- Adaptive charts and visualizations

## 🎯 Functional Entry Points

### Main Pages
- **`index.html`** - Home page with all data story sections
  - `#overview` - Hero section
  - `#section-01` - Food price overview
  - `#section-02` - Price trends
  - `#section-03` - Regional analysis
  - `#section-04` - Insights and projections

### Interactive Functions
- `scrollToSection(sectionId)` - Navigate to specific sections
- `exportChartAsImage(chartId, filename)` - Export charts as images
- `copyToClipboard(text)` - Copy data to clipboard
- Filter buttons for trend visualization

## 🏗️ Project Structure

```
food-economics-visualization/
├── index.html                 # Main HTML file
├── css/
│   └── style.css             # Complete styling system
├── js/
│   ├── data.js               # Sample data for all visualizations
│   ├── charts.js             # Chart initialization and configuration
│   ├── animations.js         # GSAP animations and scroll effects
│   └── main.js               # Core app functionality
└── README.md                 # Project documentation
```

## 🎨 Color System

### Primary Colors
- **Green Primary**: `#7CB342` - Vegetables, sustainable theme
- **Orange**: `#FFB74D` - Fruits, emphasis
- **Coral Red**: `#FF7043` - Meat & Protein, alerts
- **Sky Blue**: `#4FC3F7` - Grains, water resources
- **Purple**: `#AB47BC` - Dairy, complementary

### Background Colors
- **White**: `#FFFFFF` - Main background
- **Light Green**: `#E8F5E9` - Alternate sections
- **Off White**: `#FAFAFA` - Cards and panels

### Text Colors
- **Dark**: `#424242` - Primary text
- **Gray**: `#757575` - Secondary text
- **Light Gray**: `#9E9E9E` - Captions and labels

## 📊 Data Models

### Food Categories Data Structure
```javascript
{
  category: {
    name: String,
    color: String (hex),
    avgPrice: Number,
    change: Number (percentage),
    items: [{
      name: String,
      price: Number,
      weight: Number
    }]
  }
}
```

### Price Trends Data
```javascript
{
  years: [2013-2024],
  categories: {
    vegetables: [prices],
    fruits: [prices],
    meat: [prices],
    grains: [prices],
    dairy: [prices]
  }
}
```

### Regional Data
```javascript
{
  regions: [Array of region names],
  avgBasketCost: [Array of costs],
  colors: [Array of hex colors]
}
```

## 🛠️ Technology Stack

### Visualization Libraries
- **Chart.js 4.4.0** - Line and bar charts
- **ECharts 5** - Radial sunburst and bubble charts
- **D3.js v7** - Data processing and SVG manipulation

### Animation & Effects
- **GSAP 3.12.2** - Advanced animations
- **ScrollTrigger** - Scroll-based animations

### Fonts & Icons
- **Google Fonts**: Poppins, Roboto, Inter
- **Font Awesome 6.4.0** - Icons

### Core Technologies
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **Vanilla JavaScript** - No framework dependencies

## 🚀 Getting Started

### Quick Start
1. Clone or download this repository
2. Open `index.html` in a modern web browser
3. No build process or server required!

### Recommended Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above (multi-column layout)
- **Tablet**: 768px - 1023px (2-column layout)
- **Mobile**: Below 768px (single column, stacked)

## 🎯 Usage Examples

### Navigate to a Section
```javascript
scrollToSection('section-02');
```

### Export a Chart
```javascript
exportChartAsImage('trendsChart', 'price-trends-2024.png');
```

### Filter Trend Data
Click on filter buttons in Section 02 to show/hide specific categories.

## ⚡ Performance Optimization

- Lazy loading for images
- Optimized chart rendering
- Efficient animation performance
- CSS containment for layout optimization
- Minimal external dependencies

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
  --green-primary: #7CB342;
  --orange: #FFB74D;
  /* ... other colors */
}
```

### Adding Data
Modify the data objects in `js/data.js`:
```javascript
const foodCategoriesData = {
  // Add or modify categories
};
```

### Creating New Charts
Add chart initialization in `js/charts.js`:
```javascript
function initYourChart() {
  // Chart configuration
}
```

## 📈 Future Enhancements

### Planned Features
- [ ] **Interactive Data Upload** - Allow users to upload CSV/JSON data
- [ ] **More Chart Types** - Sankey diagrams, network graphs, geographic maps
- [ ] **Data Comparison Tool** - Compare multiple time periods or regions
- [ ] **Export to PDF** - Generate comprehensive PDF reports
- [ ] **Dark Mode** - Theme toggle for dark/light preferences
- [ ] **Multi-language Support** - i18n implementation
- [ ] **Real-time Data Integration** - Connect to live data APIs
- [ ] **User Annotations** - Allow users to add notes to charts
- [ ] **Social Sharing** - Share specific insights on social media
- [ ] **Print Optimization** - Enhanced print stylesheet

### Advanced Features
- [ ] **AI-Powered Insights** - Machine learning trend predictions
- [ ] **Custom Dashboard Builder** - Drag-and-drop visualization creator
- [ ] **Collaborative Features** - Share and collaborate on data stories
- [ ] **Animation Timeline Editor** - Customize animation sequences
- [ ] **3D Visualizations** - Three.js integration for 3D charts

## 🔧 Development Workflow

### Recommended Next Steps
1. **Data Integration**: Replace sample data with real-world datasets
2. **Additional Sections**: Add more story sections (consumption patterns, waste analysis)
3. **Enhanced Interactivity**: Add zoom, pan, and drill-down capabilities
4. **Accessibility**: Improve ARIA labels and keyboard navigation
5. **Performance**: Implement code splitting and lazy loading for charts
6. **Testing**: Add unit tests and visual regression tests

## 📚 Educational Use

This project is perfect for:
- **Data Journalism** students learning visualization techniques
- **Web Design** courses teaching modern CSS and animations
- **Data Science** classes exploring storytelling with data
- **Sustainability** education demonstrating environmental data

## 🤝 Contributing

Contributions are welcome! Areas for improvement:
- Additional data sources and datasets
- New chart types and visualization methods
- Accessibility enhancements
- Performance optimizations
- Documentation improvements

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

### Data Sources
- National Statistics Bureau (illustrative data)
- FAO - Food and Agriculture Organization
- World Bank Data
- USDA Economic Research Service

### Design Inspiration
- Information is Beautiful
- The Pudding
- National Geographic Infographics
- New York Times Data Visualizations

### Libraries & Tools
- Chart.js by Chart.js contributors
- ECharts by Apache ECharts team
- D3.js by Mike Bostock
- GSAP by GreenSock
- Font Awesome by Fonticons, Inc.

## 📞 Contact & Support

For questions, suggestions, or issues:
- Open an issue on the project repository
- Refer to the inline documentation in source files
- Check browser console for debugging information

---

**Made with 💚 for data storytelling and sustainability**

*Last Updated: 2024*