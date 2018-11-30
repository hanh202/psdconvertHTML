Chart.defaults.global.elements.arc.borderWidth = 0;

Chart.pluginService.register({
  beforeDraw: function(chart) {
    if (chart.config.options.elements.center) {
      //Get ctx from string
      var ctx = chart.chart.ctx;

      //Get options from the center object in options
      var centerConfig = chart.config.options.elements.center;
      var fontStyle = centerConfig.fontStyle || 'Arial';
      var txt = centerConfig.text;
      var color = centerConfig.color || '#000';

      var fontSizeToUse = '32';

      //Set font settings to draw it correctly.
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
      var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
      ctx.font = 'bold ' + fontSizeToUse + 'px ' + fontStyle;
      ctx.fillStyle = color;

      //Draw text in center
      ctx.fillText(txt, centerX, centerY);
    }
  }
});

function fnConfig(
  rota1,
  rota2,
  mauChart1,
  mauChart2,
  padding,
  textLabel,
  mauLabel
) {
  return {
    type: 'doughnut',
    data: {
      datasets: [
        {
          data: [rota1, rota2],
          backgroundColor: [mauChart1, mauChart2],
          label: 'Dataset 1'
        }
      ],
      labels: ['Red', 'Orange']
    },
    options: {
      responsive: true,
      cutoutPercentage: 90,
      legend: {
        display: false
      },
      layout: {
        padding: {
          bottom: padding
        }
      },
      elements: {
        center: {
          text: textLabel,
          color: mauLabel,
          fontStyle: 'NotoSans'
        }
      }
    }
  };
}

var ctx = document.getElementById('chart1').getContext('2d');
var pie = new Chart(
  ctx,
  fnConfig('50', '50', '#e76c90', '#f0eff4', '50', '50%', '#2c304d')
);

var ctx2 = document.getElementById('chart2').getContext('2d');
var pie2 = new Chart(
  ctx2,
  fnConfig('50', '50', 'white', '#9ec0f3', '50', '50%', '#2c304d')
);

var ctx3 = document.getElementById('chart3').getContext('2d');
var pie3 = new Chart(
  ctx3,
  fnConfig('65', '35', '#06a0bd', '#f0eff4', '0', '65%', '#2c304d')
);

Chart.defaults.global.legend.labels.usePointStyle = true;
function configBarChart() {
  return (configBarChart = {
    type: 'bar',
    data: {
      labels: [
        'JAN',
        'FEB',
        'MAR',
        'APR',
        'MAY',
        'JUN',
        'JUL',
        'AUG',
        'SEP',
        'OCT',
        'NOV',
        'DEC'
      ],
      datasets: [
        {
          label: 'delivered',
          data: [90, 70, 70, 40, 90, 70, 70, 50, 90, 70, 70, 40],
          backgroundColor: '#5d5386'
        },
        {
          label: 'estimated',
          data: [10, 25, 20, 50, 10, 25, 20, 50, 10, 25, 20, 50],
          backgroundColor: '#e4e8f0'
        }
      ]
    },
    options: {
      scales: {
        xAxes: [
          {
            ticks: {
              display: false
            },
            barPercentage: 0.5,
            stacked: true,
            gridLines: { display: false, color: '#fff' }
          }
        ],
        yAxes: [
          {
            ticks: {
              display: false
            },
            stacked: true,
            gridLines: { display: false, color: '#fff' }
          }
        ]
      },
      layout: {
        padding: {
          top: 50,
          bottom: 50
        },
        borderRadius: 5
      },
      legend: { position: 'bottom', usePointStyle: true }
    }
  });
}
var ctx4 = document.getElementById('chartBar');
var pie4 = new Chart(ctx4, configBarChart());
