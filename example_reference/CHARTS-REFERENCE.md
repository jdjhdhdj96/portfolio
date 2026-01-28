# 📊 Charts & Visualizations Reference Guide

Complete reference for all data visualizations in the Food Economics website.

---

## 🎯 Quick Overview

### Total Visualizations: **10 Interactive Charts**

**Section 01 (Food Price Overview)**: 4 charts  
**Section 02 (Price Trends)**: 1 chart  
**Section 03 (Regional Analysis)**: 4 charts  
**Section 04 (Future Outlook)**: 1 chart

---

## 📍 Section 01: Food Price Overview

### Chart 1: Average Price Comparison
- **Type**: Horizontal Bar Chart
- **Library**: Chart.js
- **Element ID**: `categoryBarChart`
- **Function**: `initCategoryBarChart()`
- **Data**: Average price per kg for 5 food categories
- **Features**:
  - Color-coded bars by category
  - Rounded corners (10px)
  - Interactive tooltips
  - USD currency formatting

### Chart 2: Price Distribution by Category
- **Type**: Radial Sunburst Chart
- **Library**: ECharts
- **Element ID**: `radialChart`
- **Function**: `initRadialChart()`
- **Data**: Hierarchical price distribution with individual items
- **Features**:
  - Multi-level exploration
  - Inner ring: Categories
  - Outer ring: Individual items
  - Click to drill down

### Chart 3: Market Share by Category
- **Type**: Doughnut Chart
- **Library**: Chart.js
- **Element ID**: `categoryPieChart`
- **Function**: `initCategoryPieChart()`
- **Data**: Relative market share based on average prices
- **Features**:
  - 65% cutout (doughnut)
  - Percentage and absolute values
  - 15px hover offset
  - Legend on right side

### Chart 4: Detailed Price Breakdown (Table)
- **Type**: Data Table
- **Element**: HTML table with CSS styling
- **Class**: `.price-table`
- **Data Columns**:
  1. Category (with color indicator)
  2. Number of items
  3. Average price
  4. Minimum price
  5. Maximum price
  6. Year-over-year change

---

## 📍 Section 02: Price Trends 2013-2024

### Chart 5: Historical Price Trends
- **Type**: Multi-line Chart
- **Library**: Chart.js
- **Element ID**: `trendsChart`
- **Function**: `initTrendsChart()`
- **Data**: 12 years of price data (2013-2024) for 5 categories
- **Features**:
  - 5 colored lines
  - Area fill with transparency
  - Interactive filter buttons
  - Smooth bezier curves (tension: 0.4)
  - Hover crosshair

**Filter Options**:
- All Categories
- Vegetables
- Fruits
- Meat
- Grains

---

## 📍 Section 03: Regional Price Comparison

### Chart 6: Average Food Basket Cost by Region
- **Type**: Vertical Bar Chart
- **Library**: Chart.js
- **Element ID**: `regionalChart`
- **Function**: `initRegionalChart()`
- **Data**: Average basket cost for 6 global regions
- **Features**:
  - Unique color per region
  - 8px rounded corners
  - USD formatting
  - Gradient-like colors

**Regions Covered**:
1. North America
2. Europe
3. Asia
4. South America
5. Africa
6. Oceania

### Chart 7: Price Variance Across Categories
- **Type**: Bubble (Scatter) Chart
- **Library**: ECharts
- **Element ID**: `bubbleChart`
- **Function**: `initBubbleChart()`
- **Data**: 30 data points (6 regions × 5 categories)
- **Features**:
  - Bubble size = variance percentage
  - X-axis = regions
  - Y-axis = price
  - Color = category
  - Interactive legend

### Chart 8: Category Price Comparison by Region
- **Type**: Radar Chart
- **Library**: Chart.js
- **Element ID**: `radarChart`
- **Function**: `initRadarChart()`
- **Data**: 5 regions × 5 categories = 25 data points
- **Features**:
  - Pentagon shape (5 axes)
  - Semi-transparent fill (30% opacity)
  - Grid reference lines
  - Multiple overlays
  - Color-coded regions

**Best For**: Comparing multiple regions across all categories simultaneously

### Chart 9: Price Heatmap - Regions vs Categories
- **Type**: Heatmap
- **Library**: ECharts
- **Element ID**: `heatmapChart`
- **Function**: `initHeatmapChart()`
- **Data**: 6 × 5 matrix (30 cells)
- **Features**:
  - Color gradient: Light green → Dark green
  - Price labels on cells
  - Interactive visual map slider
  - Hover for details
  - Split area background

**Color Scale**:
- `#E8F5E9` (Low prices: $0-5)
- `#7CB342` (Medium prices: $5-15)
- `#558B2F` (High prices: $15+)

---

## 📍 Section 04: Key Insights & Future Outlook

### Chart 10: Future Price Projections (2024-2030)
- **Type**: Multi-line Chart with Area Fill
- **Library**: Chart.js
- **Element ID**: `projectionChart`
- **Function**: `initProjectionChart()`
- **Data**: 7-year forecast for 4 main categories
- **Features**:
  - Realistic scenario model
  - Area fills for trend visualization
  - 5px point radius
  - White point borders
  - Interactive hover

**Projected Categories**:
1. Vegetables (Green)
2. Fruits (Orange)
3. Meat & Protein (Red)
4. Grains (Blue)

---

## 🎨 Color Coding System

### Category Colors
```css
Vegetables:     #7CB342  (Green)
Fruits:         #FFB74D  (Orange)
Meat & Protein: #FF7043  (Coral Red)
Grains:         #4FC3F7  (Sky Blue)
Dairy:          #AB47BC  (Purple)
```

### Regional Colors (Radar Chart)
```css
North America:  #7CB342  (Green)
Europe:         #FFB74D  (Orange)
Asia:           #FF7043  (Red)
South America:  #4FC3F7  (Blue)
Africa:         #AB47BC  (Purple)
```

---

## 📊 Chart Library Usage

### Chart.js (v4.4.0)
**Used for**: 7 charts
- Bar charts (2)
- Line charts (2)
- Doughnut chart (1)
- Radar chart (1)

**Advantages**:
- Lightweight and fast
- Excellent for standard chart types
- Great animation support
- Easy customization

### ECharts (v5)
**Used for**: 3 charts
- Sunburst chart (1)
- Bubble chart (1)
- Heatmap (1)

**Advantages**:
- Rich visualization types
- Complex hierarchical data
- Advanced interactions
- Beautiful default styling

---

## 🔧 Technical Details

### Chart Initialization
All charts are initialized in `js/charts.js` through:
```javascript
initAllCharts()
```

This function is called automatically on:
- `DOMContentLoaded` event
- Or immediately if DOM is already ready

### Responsive Behavior
All charts automatically resize on:
```javascript
window.addEventListener('resize', () => {
  chart.resize();
});
```

### Performance Optimization
- Charts initialize with 100ms delay
- ECharts instances managed separately
- Chart.js uses canvas for better performance
- Minimal data processing overhead

---

## 📱 Mobile Responsiveness

### Desktop (1024px+)
- All charts display at full width
- Multi-column layouts
- Legends positioned optimally

### Tablet (768-1023px)
- Charts stack in 1 column
- Reduced padding
- Adjusted label sizes

### Mobile (<768px)
- Single column layout
- Smaller fonts (10-11px)
- Horizontal scroll for tables
- Simplified tooltips
- Touch-friendly interactions

---

## 🎯 Interactive Features

### Hover Effects
- **Tooltips**: All charts show detailed info on hover
- **Highlighting**: Active data points enlarge/brighten
- **Shadow Effects**: Depth indication on hover

### Click Interactions
- **Legend Toggle**: Click legend items to show/hide data
- **Drill Down**: Sunburst chart allows category exploration
- **Filter Buttons**: Section 02 has category filters

### Animations
- **Initial Load**: Staggered entrance animations
- **Data Updates**: Smooth transitions
- **Hover**: Scale and shadow changes
- **Scroll**: Reveal animations via ScrollTrigger

---

## 🛠️ Customization Guide

### Changing Chart Colors
Edit in `js/charts.js`:
```javascript
const colors = {
  vegetables: '#7CB342',
  fruits: '#FFB74D',
  // ... change as needed
};
```

### Adjusting Chart Height
In `index.html`:
```html
<div class="chart-container" style="height: 450px;">
```

### Modifying Tooltips
In chart options:
```javascript
tooltip: {
  callbacks: {
    label: function(context) {
      return 'Custom: ' + context.parsed.y;
    }
  }
}
```

### Adding New Data
Update `js/data.js`:
```javascript
const foodCategoriesData = {
  // Add new categories or modify existing
};
```

---

## 📈 Data Flow

```
data.js
  ↓
  [Data Objects]
  ↓
charts.js
  ↓
  [Chart Initialization Functions]
  ↓
  [Chart Rendering]
  ↓
index.html
  [Visual Display]
```

---

## 🚀 Performance Metrics

### Load Time
- Charts initialize: ~100-200ms
- Total page load: <2s (on good connection)
- Interactive ready: <500ms

### File Sizes
- `charts.js`: 23KB
- `data.js`: 7KB
- Total JS for charts: ~30KB (uncompressed)

### Browser Compatibility
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

---

## 📚 External Dependencies

### CDN Libraries
1. **Chart.js 4.4.0**
   ```html
   <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0"></script>
   ```

2. **ECharts 5**
   ```html
   <script src="https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.min.js"></script>
   ```

3. **D3.js v7** (for potential data processing)
   ```html
   <script src="https://d3js.org/d3.v7.min.js"></script>
   ```

---

## 💡 Tips for Best Results

### For Developers
- Always test charts after data changes
- Use browser DevTools to monitor performance
- Check responsive behavior at all breakpoints
- Validate chart accessibility (ARIA labels)

### For Content Editors
- Keep category names consistent
- Ensure data ranges are logical
- Update chart titles to match data
- Test all interactive features

### For Designers
- Maintain color consistency across charts
- Ensure adequate contrast for accessibility
- Use consistent spacing and alignment
- Test on actual devices, not just browser resize

---

## 🔍 Troubleshooting

### Chart Not Displaying
1. Check if element ID exists in HTML
2. Verify chart function is called in `initAllCharts()`
3. Open console for JavaScript errors
4. Ensure data is properly formatted

### Responsive Issues
1. Check chart container has proper styling
2. Verify `maintainAspectRatio` is set correctly
3. Test `window.resize` event firing
4. Check CSS media queries

### Performance Problems
1. Reduce data points for complex charts
2. Use `debounce` for resize events
3. Disable animations if needed
4. Consider lazy loading for below-fold charts

---

## 📞 Support Resources

- **Chart.js Docs**: https://www.chartjs.org/docs/
- **ECharts Docs**: https://echarts.apache.org/en/index.html
- **D3.js Docs**: https://d3js.org/

---

**Last Updated**: 2024-10-31  
**Version**: 1.2.0  
**Total Charts**: 10 interactive visualizations