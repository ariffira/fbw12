// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("activeChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Mild", "Critical"],
    datasets: [{
      data: [1911018, 56903],
      backgroundColor: ['#4e73df','#fc5252'],
      hoverBackgroundColor: ['#2e59d9', '#c81c1c'],
      hoverBorderColor: "#8b0000",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      bodyFontColor: "#FAC5C0",
      borderColor: '#8b0000',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
