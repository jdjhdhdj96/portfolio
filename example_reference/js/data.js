// ===================================
// Sample Data for Food Economics Visualization
// ===================================

// Food Categories Data
const foodCategoriesData = {
  vegetables: {
    name: 'Vegetables',
    color: '#7CB342',
    avgPrice: 2.45,
    change: 12.3,
    items: [
      { name: 'Tomatoes', price: 3.20, weight: 85 },
      { name: 'Carrots', price: 1.80, weight: 92 },
      { name: 'Lettuce', price: 2.50, weight: 78 },
      { name: 'Broccoli', price: 3.80, weight: 65 },
      { name: 'Cabbage', price: 1.50, weight: 88 },
      { name: 'Peppers', price: 4.20, weight: 72 },
      { name: 'Cucumbers', price: 2.20, weight: 80 },
      { name: 'Spinach', price: 3.50, weight: 70 }
    ]
  },
  fruits: {
    name: 'Fruits',
    color: '#FFB74D',
    avgPrice: 3.20,
    change: 8.7,
    items: [
      { name: 'Apples', price: 3.50, weight: 95 },
      { name: 'Bananas', price: 2.20, weight: 100 },
      { name: 'Oranges', price: 3.80, weight: 88 },
      { name: 'Grapes', price: 5.20, weight: 75 },
      { name: 'Strawberries', price: 6.50, weight: 60 },
      { name: 'Watermelon', price: 2.80, weight: 90 },
      { name: 'Pineapple', price: 4.50, weight: 70 },
      { name: 'Berries', price: 7.20, weight: 55 }
    ]
  },
  meat: {
    name: 'Meat & Protein',
    color: '#FF7043',
    avgPrice: 12.80,
    change: -3.2,
    items: [
      { name: 'Chicken', price: 8.50, weight: 95 },
      { name: 'Beef', price: 18.20, weight: 85 },
      { name: 'Pork', price: 12.50, weight: 88 },
      { name: 'Fish', price: 15.80, weight: 78 },
      { name: 'Eggs', price: 4.50, weight: 100 },
      { name: 'Turkey', price: 10.20, weight: 82 }
    ]
  },
  grains: {
    name: 'Grains',
    color: '#4FC3F7',
    avgPrice: 1.85,
    change: 15.4,
    items: [
      { name: 'Rice', price: 2.20, weight: 100 },
      { name: 'Wheat', price: 1.80, weight: 98 },
      { name: 'Oats', price: 2.50, weight: 85 },
      { name: 'Corn', price: 1.60, weight: 95 },
      { name: 'Quinoa', price: 5.20, weight: 65 },
      { name: 'Barley', price: 1.90, weight: 88 }
    ]
  },
  dairy: {
    name: 'Dairy',
    color: '#AB47BC',
    avgPrice: 4.50,
    change: 6.8,
    items: [
      { name: 'Milk', price: 3.20, weight: 100 },
      { name: 'Cheese', price: 8.50, weight: 82 },
      { name: 'Yogurt', price: 4.20, weight: 90 },
      { name: 'Butter', price: 6.80, weight: 75 }
    ]
  }
};

// Price Trends 2013-2024
const priceTrendsData = {
  years: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
  categories: {
    vegetables: [2.10, 2.15, 2.08, 2.12, 2.18, 2.25, 2.28, 2.35, 2.42, 2.50, 2.38, 2.45],
    fruits: [2.80, 2.85, 2.75, 2.82, 2.90, 2.95, 3.05, 3.15, 3.22, 3.18, 3.15, 3.20],
    meat: [11.50, 11.80, 12.20, 12.50, 12.80, 13.20, 13.50, 13.80, 14.20, 13.50, 13.20, 12.80],
    grains: [1.45, 1.50, 1.48, 1.52, 1.55, 1.60, 1.62, 1.68, 1.75, 1.80, 1.78, 1.85],
    dairy: [3.80, 3.85, 3.90, 4.00, 4.10, 4.15, 4.20, 4.35, 4.45, 4.50, 4.48, 4.50]
  }
};

// Regional Price Comparison
const regionalData = {
  regions: ['North America', 'Europe', 'Asia', 'South America', 'Africa', 'Oceania'],
  avgBasketCost: [145.50, 132.80, 98.50, 105.20, 87.30, 156.70],
  colors: ['#7CB342', '#FFB74D', '#FF7043', '#4FC3F7', '#AB47BC', '#9CCC65']
};

// Regional Category Breakdown (Bubble Chart Data)
const regionalCategoryData = [
  // North America
  { region: 'North America', category: 'Vegetables', price: 2.85, variance: 18, color: '#7CB342' },
  { region: 'North America', category: 'Fruits', price: 3.65, variance: 22, color: '#FFB74D' },
  { region: 'North America', category: 'Meat', price: 14.20, variance: 35, color: '#FF7043' },
  { region: 'North America', category: 'Grains', price: 2.10, variance: 15, color: '#4FC3F7' },
  { region: 'North America', category: 'Dairy', price: 5.20, variance: 20, color: '#AB47BC' },
  
  // Europe
  { region: 'Europe', category: 'Vegetables', price: 2.65, variance: 16, color: '#7CB342' },
  { region: 'Europe', category: 'Fruits', price: 3.45, variance: 20, color: '#FFB74D' },
  { region: 'Europe', category: 'Meat', price: 13.50, variance: 32, color: '#FF7043' },
  { region: 'Europe', category: 'Grains', price: 1.95, variance: 14, color: '#4FC3F7' },
  { region: 'Europe', category: 'Dairy', price: 4.80, variance: 18, color: '#AB47BC' },
  
  // Asia
  { region: 'Asia', category: 'Vegetables', price: 1.85, variance: 25, color: '#7CB342' },
  { region: 'Asia', category: 'Fruits', price: 2.45, variance: 28, color: '#FFB74D' },
  { region: 'Asia', category: 'Meat', price: 10.20, variance: 40, color: '#FF7043' },
  { region: 'Asia', category: 'Grains', price: 1.50, variance: 20, color: '#4FC3F7' },
  { region: 'Asia', category: 'Dairy', price: 3.80, variance: 24, color: '#AB47BC' },
  
  // South America
  { region: 'South America', category: 'Vegetables', price: 2.05, variance: 22, color: '#7CB342' },
  { region: 'South America', category: 'Fruits', price: 2.85, variance: 24, color: '#FFB74D' },
  { region: 'South America', category: 'Meat', price: 11.50, variance: 38, color: '#FF7043' },
  { region: 'South America', category: 'Grains', price: 1.65, variance: 18, color: '#4FC3F7' },
  { region: 'South America', category: 'Dairy', price: 4.20, variance: 22, color: '#AB47BC' },
  
  // Africa
  { region: 'Africa', category: 'Vegetables', price: 1.65, variance: 30, color: '#7CB342' },
  { region: 'Africa', category: 'Fruits', price: 2.25, variance: 32, color: '#FFB74D' },
  { region: 'Africa', category: 'Meat', price: 9.80, variance: 45, color: '#FF7043' },
  { region: 'Africa', category: 'Grains', price: 1.40, variance: 25, color: '#4FC3F7' },
  { region: 'Africa', category: 'Dairy', price: 3.50, variance: 28, color: '#AB47BC' },
  
  // Oceania
  { region: 'Oceania', category: 'Vegetables', price: 3.20, variance: 20, color: '#7CB342' },
  { region: 'Oceania', category: 'Fruits', price: 3.95, variance: 24, color: '#FFB74D' },
  { region: 'Oceania', category: 'Meat', price: 15.50, variance: 30, color: '#FF7043' },
  { region: 'Oceania', category: 'Grains', price: 2.35, variance: 16, color: '#4FC3F7' },
  { region: 'Oceania', category: 'Dairy', price: 5.50, variance: 19, color: '#AB47BC' }
];

// Future Projections 2024-2030
const projectionData = {
  years: [2024, 2025, 2026, 2027, 2028, 2029, 2030],
  scenarios: {
    optimistic: {
      vegetables: [2.45, 2.48, 2.52, 2.55, 2.58, 2.60, 2.63],
      fruits: [3.20, 3.25, 3.30, 3.35, 3.38, 3.42, 3.45],
      meat: [12.80, 12.90, 13.00, 13.10, 13.15, 13.20, 13.25],
      grains: [1.85, 1.88, 1.90, 1.92, 1.95, 1.97, 2.00]
    },
    realistic: {
      vegetables: [2.45, 2.52, 2.60, 2.68, 2.75, 2.82, 2.90],
      fruits: [3.20, 3.30, 3.42, 3.52, 3.65, 3.75, 3.88],
      meat: [12.80, 13.10, 13.45, 13.80, 14.20, 14.55, 14.95],
      grains: [1.85, 1.92, 2.00, 2.08, 2.15, 2.22, 2.30]
    },
    pessimistic: {
      vegetables: [2.45, 2.58, 2.72, 2.88, 3.05, 3.22, 3.40],
      fruits: [3.20, 3.38, 3.58, 3.80, 4.05, 4.28, 4.55],
      meat: [12.80, 13.45, 14.20, 15.05, 16.00, 16.95, 18.00],
      grains: [1.85, 1.98, 2.12, 2.28, 2.45, 2.62, 2.82]
    }
  }
};

// Export data for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    foodCategoriesData,
    priceTrendsData,
    regionalData,
    regionalCategoryData,
    projectionData
  };
}