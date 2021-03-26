const konfirm =document.querySelector('konfirm');
const sembuh =document.querySelector('sembuh');
const meninggal =document.querySelector('meninggal');

var ctx = document.getElementById("PieChart").getcontext('2d');
var mychart = new Chart(ctx, {
	type: 'doughnut',
	data: {
		labels: ['konfirm', 'sembuh', 'meninggal']
		datasets: [
		{
			label: "# of votes",
			data: [10,10,10],
			backgroundColor: ['#DFDCE3', '#FC4A1A', '#F7B733'],
			borderWidth: 1
		}
	]
	}
});

const updateChartValue = (input, dataOrder) => {
	input.addEventListener('change', e => {
		mychart.data.datasets[0].data[dataOrder] =
		e.target.value;
		mychart.update();

	});
};

updateChartValue(konfirm, 0);
updateChartValue(sembuh, 1);
updateChartValue(meniggal, 2);


