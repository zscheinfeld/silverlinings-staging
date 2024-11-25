const ctx = document.getElementById('myChart');
let delayed;
const myChart = new Chart(ctx, {

  type: 'bar',
  data: {
    labels: ['1600', '1800', '1900', '1950', '2000', '2024'],
    data : [],
    datasets: [
        {
        label: 'POPULATION',
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 1)',
        backgroundColor: 'rgba(127, 168, 233, 1)'
    },
    {
        label: 'PER CAPITA GDP',
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 1)',
        backgroundColor: 'rgba(223, 192, 255, 1)'
      },
    
]
  },
  
  options: {
    animation: {
        onComplete: () => {
          delayed = true;
        },
        delay: (context) => {
          let delay = 0;
          if (context.type === 'data' && context.mode === 'default' && !delayed) {
            delay = context.dataIndex * 300 + context.datasetIndex * 100;
          }
          return delay;
        },
      },
    responsive: true,
    scales: {
    //   y: {
    //     beginAtZero: true
    //   },
 
    y: {
        
        border: {
            dash:[2,2]
          },
        grid: {
          
          color: 'rgba(0, 0, 0, .2)' // Adjust color as needed
        },
        ticks: {
            font: {
              family:"Spectral",  // Font family
              size: 12,         // Font size
              weight: '400',   // Font weight
              style: 'italic',  // Font style
              
            },
            color: 'rgba(0, 0, 0, 1)' 
        }
      },

      x: {
        border: {
            display: false
          },
        grid: {
          display: false,
          color: 'rgba(0, 0, 0, 1)' // Adjust color as needed
        }
        ,
        ticks: {
            font: {
              family:"Spectral",  // Font family
              size: 12,         // Font size
              weight: '400',   // Font weight
              
            },
            color: 'rgba(0, 0, 0, 1)' 
        }
      },
    },
    
    plugins: {
        legend: {
            labels: {
                // This more specific font property overrides the global property
                font: {
                    family:"Spectral",
                    size: 12,
                    weight: '400'
                },
                color:'rgba(0, 0, 0, 1)',
                textAlign:"center",
                boxHeight: 10,
                boxWidth: 10,
                
            },
            
            
        },
        tooltip: {
            usePointStyle: true,
            backgroundColor:'rgba(255, 255, 255, 1)',
            cornerRadius:0,
            bodyColor:	'rgba(0, 0, 0, 1)',
            borderWidth: 1,
            borderColor:'rgba(0, 0, 0, 1)',
            caretSize:0,
            titleColor:'rgba(0, 0, 0, 1)',
            titleFont: {
                family: 'Spectral',       // Font family for the tooltip title
                size: 12,              // Font size for the tooltip title
                weight: '600',        // Font weight for the tooltip title
             // Font style for the tooltip title
              },
              // Body font settings
              bodyFont: {
                family: 'Spectral',     // Font family for the tooltip body
                size: 12,              // Font size for the tooltip body
                weight: 'normal',      // Font weight for the tooltip body
                style: 'normal',       // Font style for the tooltip body
              },
            

        },
        title: {
            display: true,
            text: 'POPULATION AND PER CAPITA GDP',
            font: {
              family:"Spectral",
              size: 24,
              weight: '400'
            },
            color:'rgba(0, 0, 0, 1)',
            padding: {
                bottom: 30
            }
          }
    },
  }
});

function animateChart() {
    setTimeout(() => {
        console.log("here")
    myChart.data.datasets[0].data = [12, 19, 3, 5, 2, 3]
    myChart.data.datasets[1].data = [6, 12, 8, 10, 8, 13]
    myChart.update();
      }, 300); 
}

function resetChart() {
   
    setTimeout(() => {
        console.log("here")
        myChart.data.datasets[0].data = [0]
        myChart.data.datasets[1].data = [0]
        myChart.update();
      }, 300); 
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // If chart is in viewport and threshold is met, animate it
            
            animateChart(); 
            // observer.unobserve(entry.target); // Stop observing once animated
        }

        else{
            resetChart(); 
        }
    });
}, {
    root: null, 
    rootMargin: "0% 0%", 
    threshold: 1 // Trigger when 50% of the element is visible
});

// Observe the chart element
const chartElement = document.getElementById('myChart');
observer.observe(chartElement);