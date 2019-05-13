class Data {

    constructor() {
        this.template = "app/data/data.html";
    }

    ready() {
        this.setChart();
    }

    setChart() {
        var ctx = document.getElementById('myChart').getContext('2d');
        ctx.height = 500;
        var lineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
                datasets: [{
                    data: [18, 19, 20, 21, 21, 22, 22, 21, 20, 20],
                    label: "Temperature (°C)",
                    borderColor: "#3e95cd",
                    fill: false
                }, {
                    data: [6, 3, 2, 2, 7, 10, 11, 8, 9, 7],
                    label: "YV",
                    borderColor: "#c45850",
                    fill: false
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Warehouse data'
                },
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }

}