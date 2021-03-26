let labels2 = ['Terkonfirmasi', 'Sembuh', 'Meninggal'];
let data2 = [1482.559, 1317.199, 40.081];
let colors2 = ['#49A9EA', '#36CAAB', '#34495E'];

let myChart2 = document.getElementById("myChart2").getContext('2d');

let chart2 = new Chart(myChart2, {
    type: 'bar',
    data: {
        labels: labels2,
        datasets: [ {
            data: data2,
            backgroundColor: colors2
        }]
    },
    options: {
        title: {
            text: "Jumlah Terpapar Covid-19",
            display: true
        },
        legend: {
          display: false
        }
    }
});

