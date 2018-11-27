// Chart.defaults.global.elements.arc.borderWidth = 0;


// Chart.pluginService.register({
//     beforeDraw: function (chart) {
//         if (chart.config.options.elements.center) {
//             //Get ctx from string
//             var ctx = chart.chart.ctx;

//             //Get options from the center object in options
//             var centerConfig = chart.config.options.elements.center;
//             var fontStyle = centerConfig.fontStyle || "Arial";
//             var txt = centerConfig.text;
//             var color = centerConfig.color || "#000";

//             var fontSizeToUse = "20";

//             //Set font settings to draw it correctly.
//             ctx.textAlign = "center";
//             ctx.textBaseline = "middle";
//             var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
//             var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
//             ctx.font = "bold " + fontSizeToUse + "px " + fontStyle;
//             ctx.fillStyle = color;

//             //Draw text in center
//             ctx.fillText(txt, centerX, centerY);
//         }
//     }
// });

// function fnConfig(mauLabel, mauChart1, mauChart2, textLabel) {
//     return {
//         type: "doughnut",
//         data: {
//             datasets: [
//                 {
//                     data: [50, 50],
//                     backgroundColor: [mauChart1, mauChart2],
//                     label: "Dataset 1"
//                 }
//             ],
//             labels: ["Red", "Orange"]
//         },
//         options: {
//             responsive: true,
//             cutoutPercentage: 90,
//             legend: {
//                 display: false
//             },
//             layout: {
//                 padding: {
//                     bottom: 40,
//                 },
//             },
//             elements: {
//                 center: {
//                     text: textLabel,
//                     color: mauLabel,
//                     fontStyle: "NotoSans",
//                 }
//             }
//         }
//     };
// }

// var ctx = document.getElementById("chart1").getContext("2d");
// var pie = new Chart(ctx, fnConfig('#2c304d', '#e76c90', '#f0eff4', '50%'));

// var ctx2 = document.getElementById("chart2").getContext("2d");
// var pie2 = new Chart(ctx2, fnConfig('white', 'white', '#9ec0f3', '50%'));

// var ctx3 = document.getElementById('chartBar').getContext('2d');
// var bar = new Chart(ctx3, {
//     type: 'bar',
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });