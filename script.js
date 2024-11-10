
var ctx1 = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx1, {
    type: 'line', 
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Revenue Over Time',
            data: [1200, 1500, 1800, 1100, 1900, 2000],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


var ctx2 = document.getElementById('myProductChart').getContext('2d');
var productChart = new Chart(ctx2, {
    type: 'bar', 
    data: {
        labels: ['Plan 1', 'Plan 2', 'Plan 3', 'Plan 4', 'Plan 5'],
        datasets: [{
            label: 'Product Sales',
            data: [120, 150, 200, 180, 90],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


var ctx3 = document.getElementById('subscriptionChart').getContext('2d');
var subscriptionChart = new Chart(ctx3, {
    type: 'pie', 
    data: {
        labels: ['Monthly', 'Yearly', 'Life time'],
        datasets: [{
            label: 'Subscriptions',
            data: [200, 350, 100], 
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(75, 192, 192, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});