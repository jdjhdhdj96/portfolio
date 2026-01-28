// ===================================
// Chart Initialization & Configuration
// ===================================

// Chart.js Global Configuration
Chart.defaults.font.family = "'Roboto', 'Inter', sans-serif";
Chart.defaults.color = '#757575';

// ===================================
// Section 01: Category Bar Chart (Chart.js)
// ===================================
function initCategoryBarChart() {
  const ctx = document.getElementById('categoryBarChart');
  if (!ctx) return;
  
  const categories = Object.keys(foodCategoriesData);
  const labels = categories.map(key => foodCategoriesData[key].name);
  const prices = categories.map(key => foodCategoriesData[key].avgPrice);
  const colors = categories.map(key => foodCategoriesData[key].color);
  
  const categoryBarChart = new Chart(ctx.getContext('2d'), {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Average Price ($/kg)',
        data: prices,
        backgroundColor: colors.map(c => c + '90'),
        borderColor: colors,
        borderWidth: 2,
        borderRadius: 10,
        borderSkipped: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(66, 66, 66, 0.95)',
          titleFont: {
            size: 14,
            weight: 700
          },
          bodyFont: {
            size: 13
          },
          padding: 12,
          cornerRadius: 8,
          callbacks: {
            label: function(context) {
              return 'Price: $' + context.parsed.x.toFixed(2) + '/kg';
            }
          }
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return '$' + value;
            },
            font: {
              size: 11
            }
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          }
        },
        y: {
          grid: {
            display: false
          },
          ticks: {
            font: {
              size: 12,
              weight: 600
            }
          }
        }
      }
    }
  });

  return categoryBarChart;
}

// ===================================
// Section 01: Radial Chart (ECharts)
// ===================================
function initRadialChart() {
  const chartDom = document.getElementById('radialChart');
  const myChart = echarts.init(chartDom);

  const categories = Object.keys(foodCategoriesData);
  const data = categories.map(key => {
    const category = foodCategoriesData[key];
    return {
      name: category.name,
      value: category.avgPrice,
      itemStyle: { color: category.color },
      children: category.items.map(item => ({
        name: item.name,
        value: item.price,
        weight: item.weight
      }))
    };
  });

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: function(params) {
        if (params.data.children) {
          return `<strong>${params.data.name}</strong><br/>Avg Price: $${params.data.value.toFixed(2)}/kg`;
        } else {
          return `<strong>${params.data.name}</strong><br/>Price: $${params.data.value.toFixed(2)}/kg<br/>Weight: ${params.data.weight}`;
        }
      }
    },
    series: [
      {
        type: 'sunburst',
        data: data,
        radius: [0, '90%'],
        label: {
          fontSize: 12,
          fontWeight: 600,
          color: '#424242'
        },
        itemStyle: {
          borderWidth: 2,
          borderColor: '#fff'
        },
        levels: [
          {},
          {
            r0: '0%',
            r: '40%',
            label: {
              fontSize: 14,
              fontWeight: 700
            }
          },
          {
            r0: '40%',
            r: '75%',
            label: {
              fontSize: 11
            }
          }
        ],
        emphasis: {
          focus: 'ancestor',
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.3)'
          }
        }
      }
    ]
  };

  myChart.setOption(option);

  // Responsive resize
  window.addEventListener('resize', () => {
    myChart.resize();
  });
}

// ===================================
// Section 01: Category Pie Chart (Chart.js)
// ===================================
function initCategoryPieChart() {
  const ctx = document.getElementById('categoryPieChart');
  if (!ctx) return;
  
  const categories = Object.keys(foodCategoriesData);
  const labels = categories.map(key => foodCategoriesData[key].name);
  const prices = categories.map(key => foodCategoriesData[key].avgPrice);
  const colors = categories.map(key => foodCategoriesData[key].color);
  
  const categoryPieChart = new Chart(ctx.getContext('2d'), {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        data: prices,
        backgroundColor: colors.map(c => c + 'CC'),
        borderColor: colors,
        borderWidth: 3,
        hoverOffset: 15
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: {
            padding: 15,
            font: {
              size: 12,
              weight: 600
            },
            usePointStyle: true,
            pointStyle: 'circle'
          }
        },
        tooltip: {
          backgroundColor: 'rgba(66, 66, 66, 0.95)',
          titleFont: {
            size: 14,
            weight: 700
          },
          bodyFont: {
            size: 13
          },
          padding: 12,
          cornerRadius: 8,
          callbacks: {
            label: function(context) {
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage = ((context.parsed / total) * 100).toFixed(1);
              return context.label + ': $' + context.parsed.toFixed(2) + '/kg (' + percentage + '%)';
            }
          }
        }
      },
      cutout: '65%'
    }
  });

  return categoryPieChart;
}

// ===================================
// Section 02: Trends Line Chart (Chart.js)
// ===================================
function initTrendsChart() {
  const ctx = document.getElementById('trendsChart').getContext('2d');
  
  const datasets = Object.keys(priceTrendsData.categories).map(key => {
    const colors = {
      vegetables: '#7CB342',
      fruits: '#FFB74D',
      meat: '#FF7043',
      grains: '#4FC3F7',
      dairy: '#AB47BC'
    };
    
    return {
      label: foodCategoriesData[key].name,
      data: priceTrendsData.categories[key],
      borderColor: colors[key],
      backgroundColor: colors[key] + '20',
      borderWidth: 3,
      tension: 0.4,
      pointRadius: 4,
      pointHoverRadius: 6,
      pointBackgroundColor: colors[key],
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      fill: true
    };
  });

  const trendsChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: priceTrendsData.years,
      datasets: datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            padding: 15,
            font: {
              size: 12,
              weight: 600
            },
            usePointStyle: true
          }
        },
        tooltip: {
          backgroundColor: 'rgba(66, 66, 66, 0.95)',
          titleFont: {
            size: 14,
            weight: 700
          },
          bodyFont: {
            size: 13
          },
          padding: 12,
          cornerRadius: 8,
          displayColors: true,
          callbacks: {
            label: function(context) {
              return context.dataset.label + ': $' + context.parsed.y.toFixed(2) + '/kg';
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: false,
          ticks: {
            callback: function(value) {
              return '$' + value.toFixed(2);
            },
            font: {
              size: 11
            }
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          }
        },
        x: {
          grid: {
            display: false
          },
          ticks: {
            font: {
              size: 11,
              weight: 600
            }
          }
        }
      },
      interaction: {
        intersect: false,
        mode: 'index'
      }
    }
  });

  // Filter functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      filterButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      const category = this.dataset.category;
      
      if (category === 'all') {
        trendsChart.data.datasets.forEach(dataset => {
          dataset.hidden = false;
        });
      } else {
        trendsChart.data.datasets.forEach(dataset => {
          dataset.hidden = !dataset.label.toLowerCase().includes(category);
        });
      }
      
      trendsChart.update();
    });
  });

  return trendsChart;
}

// ===================================
// Section 03: Regional Bar Chart (Chart.js)
// ===================================
function initRegionalChart() {
  const ctx = document.getElementById('regionalChart').getContext('2d');
  
  const regionalChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: regionalData.regions,
      datasets: [{
        label: 'Average Food Basket Cost',
        data: regionalData.avgBasketCost,
        backgroundColor: regionalData.colors,
        borderRadius: 8,
        borderSkipped: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(66, 66, 66, 0.95)',
          titleFont: {
            size: 14,
            weight: 700
          },
          bodyFont: {
            size: 13
          },
          padding: 12,
          cornerRadius: 8,
          callbacks: {
            label: function(context) {
              return 'Avg Cost: $' + context.parsed.y.toFixed(2);
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return '$' + value;
            },
            font: {
              size: 11
            }
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          }
        },
        x: {
          grid: {
            display: false
          },
          ticks: {
            font: {
              size: 11,
              weight: 600
            }
          }
        }
      }
    }
  });

  return regionalChart;
}

// ===================================
// Section 03: Bubble Chart (ECharts)
// ===================================
function initBubbleChart() {
  const chartDom = document.getElementById('bubbleChart');
  const myChart = echarts.init(chartDom);

  // Group data by category
  const categories = ['Vegetables', 'Fruits', 'Meat & Protein', 'Grains', 'Dairy'];
  const colors = ['#7CB342', '#FFB74D', '#FF7043', '#4FC3F7', '#AB47BC'];
  
  const series = categories.map((category, index) => {
    const categoryData = regionalCategoryData
      .filter(d => d.category === category)
      .map(d => [
        regionalData.regions.indexOf(d.region),
        d.price,
        d.variance,
        d.region
      ]);

    return {
      name: category,
      type: 'scatter',
      symbolSize: function(data) {
        return Math.sqrt(data[2]) * 8;
      },
      data: categoryData,
      itemStyle: {
        color: colors[index],
        opacity: 0.7
      },
      emphasis: {
        itemStyle: {
          opacity: 1,
          shadowBlur: 10,
          shadowColor: colors[index]
        }
      }
    };
  });

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: function(params) {
        return `<strong>${params.seriesName}</strong><br/>
                Region: ${params.value[3]}<br/>
                Price: $${params.value[1].toFixed(2)}/kg<br/>
                Variance: ${params.value[2]}%`;
      }
    },
    legend: {
      data: categories,
      top: 'bottom',
      icon: 'circle',
      textStyle: {
        fontSize: 11,
        fontWeight: 600
      }
    },
    grid: {
      left: '10%',
      right: '10%',
      top: '10%',
      bottom: '15%'
    },
    xAxis: {
      type: 'category',
      data: regionalData.regions,
      axisLabel: {
        fontSize: 11,
        fontWeight: 600,
        rotate: 30
      },
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#E0E0E0'
        }
      }
    },
    yAxis: {
      name: 'Price ($/kg)',
      nameLocation: 'middle',
      nameGap: 50,
      nameTextStyle: {
        fontSize: 12,
        fontWeight: 600
      },
      axisLabel: {
        formatter: '${value}',
        fontSize: 11
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(0, 0, 0, 0.05)'
        }
      }
    },
    series: series
  };

  myChart.setOption(option);

  // Responsive resize
  window.addEventListener('resize', () => {
    myChart.resize();
  });
}

// ===================================
// Section 03: Radar Chart (Chart.js)
// ===================================
function initRadarChart() {
  const ctx = document.getElementById('radarChart');
  if (!ctx) return;
  
  const categories = ['Vegetables', 'Fruits', 'Meat & Protein', 'Grains', 'Dairy'];
  
  // Select 5 regions for clarity
  const selectedRegions = ['North America', 'Europe', 'Asia', 'South America', 'Africa'];
  const regionColors = {
    'North America': '#7CB342',
    'Europe': '#FFB74D',
    'Asia': '#FF7043',
    'South America': '#4FC3F7',
    'Africa': '#AB47BC'
  };
  
  const datasets = selectedRegions.map(region => {
    const data = categories.map(category => {
      const item = regionalCategoryData.find(d => d.region === region && d.category === category);
      return item ? item.price : 0;
    });
    
    return {
      label: region,
      data: data,
      borderColor: regionColors[region],
      backgroundColor: regionColors[region] + '30',
      borderWidth: 2,
      pointBackgroundColor: regionColors[region],
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6
    };
  });
  
  const radarChart = new Chart(ctx.getContext('2d'), {
    type: 'radar',
    data: {
      labels: categories,
      datasets: datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            padding: 15,
            font: {
              size: 11,
              weight: 600
            },
            usePointStyle: true
          }
        },
        tooltip: {
          backgroundColor: 'rgba(66, 66, 66, 0.95)',
          titleFont: {
            size: 13,
            weight: 700
          },
          bodyFont: {
            size: 12
          },
          padding: 10,
          cornerRadius: 8,
          callbacks: {
            label: function(context) {
              return context.dataset.label + ': $' + context.parsed.r.toFixed(2) + '/kg';
            }
          }
        }
      },
      scales: {
        r: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return '$' + value;
            },
            font: {
              size: 10
            },
            stepSize: 5
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.1)'
          },
          angleLines: {
            color: 'rgba(0, 0, 0, 0.1)'
          },
          pointLabels: {
            font: {
              size: 11,
              weight: 600
            }
          }
        }
      }
    }
  });

  return radarChart;
}

// ===================================
// Section 03: Heatmap Chart (ECharts)
// ===================================
function initHeatmapChart() {
  const chartDom = document.getElementById('heatmapChart');
  if (!chartDom) return;
  
  const myChart = echarts.init(chartDom);
  
  const regions = ['North America', 'Europe', 'Asia', 'South America', 'Africa', 'Oceania'];
  const categories = ['Vegetables', 'Fruits', 'Meat', 'Grains', 'Dairy'];
  
  // Prepare heatmap data
  const heatmapData = [];
  regions.forEach((region, regionIndex) => {
    categories.forEach((category, categoryIndex) => {
      const fullCategory = category === 'Meat' ? 'Meat & Protein' : category;
      const item = regionalCategoryData.find(d => d.region === region && d.category === fullCategory);
      if (item) {
        heatmapData.push([categoryIndex, regionIndex, item.price]);
      }
    });
  });

  const option = {
    tooltip: {
      position: 'top',
      formatter: function(params) {
        return `<strong>${categories[params.value[0]]}</strong><br/>
                ${regions[params.value[1]]}<br/>
                Price: $${params.value[2].toFixed(2)}/kg`;
      }
    },
    grid: {
      left: '15%',
      right: '5%',
      top: '10%',
      bottom: '15%'
    },
    xAxis: {
      type: 'category',
      data: categories,
      splitArea: {
        show: true
      },
      axisLabel: {
        fontSize: 11,
        fontWeight: 600,
        rotate: 30
      }
    },
    yAxis: {
      type: 'category',
      data: regions,
      splitArea: {
        show: true
      },
      axisLabel: {
        fontSize: 11,
        fontWeight: 600
      }
    },
    visualMap: {
      min: 0,
      max: 20,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '0%',
      inRange: {
        color: ['#E8F5E9', '#7CB342', '#558B2F']
      },
      text: ['High', 'Low'],
      textStyle: {
        fontSize: 11
      }
    },
    series: [{
      name: 'Price',
      type: 'heatmap',
      data: heatmapData,
      label: {
        show: true,
        fontSize: 10,
        formatter: function(params) {
          return '$' + params.value[2].toFixed(1);
        }
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };

  myChart.setOption(option);

  // Responsive resize
  window.addEventListener('resize', () => {
    myChart.resize();
  });
}

// ===================================
// Section 04: Projection Chart (Chart.js)
// ===================================
function initProjectionChart() {
  const ctx = document.getElementById('projectionChart').getContext('2d');
  
  const projectionChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: projectionData.years,
      datasets: [
        {
          label: 'Vegetables (Realistic)',
          data: projectionData.scenarios.realistic.vegetables,
          borderColor: '#7CB342',
          backgroundColor: '#7CB34220',
          borderWidth: 3,
          tension: 0.4,
          pointRadius: 5,
          pointBackgroundColor: '#7CB342',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          fill: true
        },
        {
          label: 'Fruits (Realistic)',
          data: projectionData.scenarios.realistic.fruits,
          borderColor: '#FFB74D',
          backgroundColor: '#FFB74D20',
          borderWidth: 3,
          tension: 0.4,
          pointRadius: 5,
          pointBackgroundColor: '#FFB74D',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          fill: true
        },
        {
          label: 'Meat (Realistic)',
          data: projectionData.scenarios.realistic.meat,
          borderColor: '#FF7043',
          backgroundColor: '#FF704320',
          borderWidth: 3,
          tension: 0.4,
          pointRadius: 5,
          pointBackgroundColor: '#FF7043',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          fill: true
        },
        {
          label: 'Grains (Realistic)',
          data: projectionData.scenarios.realistic.grains,
          borderColor: '#4FC3F7',
          backgroundColor: '#4FC3F720',
          borderWidth: 3,
          tension: 0.4,
          pointRadius: 5,
          pointBackgroundColor: '#4FC3F7',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            padding: 15,
            font: {
              size: 12,
              weight: 600
            },
            usePointStyle: true
          }
        },
        tooltip: {
          backgroundColor: 'rgba(66, 66, 66, 0.95)',
          titleFont: {
            size: 14,
            weight: 700
          },
          bodyFont: {
            size: 13
          },
          padding: 12,
          cornerRadius: 8,
          displayColors: true,
          callbacks: {
            label: function(context) {
              return context.dataset.label + ': $' + context.parsed.y.toFixed(2) + '/kg';
            },
            footer: function(tooltipItems) {
              return 'Based on realistic scenario projections';
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: false,
          ticks: {
            callback: function(value) {
              return '$' + value.toFixed(2);
            },
            font: {
              size: 11
            }
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          }
        },
        x: {
          grid: {
            display: false
          },
          ticks: {
            font: {
              size: 11,
              weight: 600
            }
          }
        }
      },
      interaction: {
        intersect: false,
        mode: 'index'
      }
    }
  });

  return projectionChart;
}

// ===================================
// Initialize All Charts
// ===================================
function initAllCharts() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        // Section 01 charts
        initCategoryBarChart();
        initCategoryPieChart();
        
        // Section 02 charts
        initTrendsChart();
        
        // Section 03 charts
        initRegionalChart();
        initRadarChart();
        
        // Section 04 charts
        initProjectionChart();
      }, 100);
    });
  } else {
    setTimeout(() => {
      // Section 01 charts
      initCategoryBarChart();
      initCategoryPieChart();
      
      // Section 02 charts
      initTrendsChart();
      
      // Section 03 charts
      initRegionalChart();
      initRadarChart();
      
      // Section 04 charts
      initProjectionChart();
    }, 100);
  }
}

// Auto-initialize charts
initAllCharts();