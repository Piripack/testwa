import { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'
import { businessData } from '../data/businessData'

export default function BusinessTypeChart() {
  const chartRef = useRef(null)

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d')
      if (ctx) {
        const typeCounts = {}
        businessData.forEach(business => {
          typeCounts[business.type] = (typeCounts[business.type] || 0) + 1
        })

        new Chart(ctx, {
          type: 'pie',
          data: {
            labels: Object.keys(typeCounts),
            datasets: [{
              data: Object.values(typeCounts),
              backgroundColor: [
                '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'
              ]
            }]
          },
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'Business Types Distribution'
              }
            }
          }
        })
      }
    }
  }, [])

  return <canvas ref={chartRef}></canvas>
}

