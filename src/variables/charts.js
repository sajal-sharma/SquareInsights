/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
const Chart = require("chart.js");
//
// Chart extension for making the bars rounded
// Code from: https://codepen.io/jedtrow/full/ygRYgo
//

Chart.elements.Rectangle.prototype.draw = function () {
	var ctx = this._chart.ctx;
	var vm = this._view;
	var left, right, top, bottom, signX, signY, borderSkipped, radius;
	var borderWidth = vm.borderWidth;
	// Set Radius Here
	// If radius is large enough to cause drawing errors a max radius is imposed
	var cornerRadius = 6;

	if (!vm.horizontal) {
		// bar
		left = vm.x - vm.width / 2;
		right = vm.x + vm.width / 2;
		top = vm.y;
		bottom = vm.base;
		signX = 1;
		signY = bottom > top ? 1 : -1;
		borderSkipped = vm.borderSkipped || "bottom";
	} else {
		// horizontal bar
		left = vm.base;
		right = vm.x;
		top = vm.y - vm.height / 2;
		bottom = vm.y + vm.height / 2;
		signX = right > left ? 1 : -1;
		signY = 1;
		borderSkipped = vm.borderSkipped || "left";
	}

	// Canvas doesn't allow us to stroke inside the width so we can
	// adjust the sizes to fit if we're setting a stroke on the line
	if (borderWidth) {
		// borderWidth shold be less than bar width and bar height.
		var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
		borderWidth = borderWidth > barSize ? barSize : borderWidth;
		var halfStroke = borderWidth / 2;
		// Adjust borderWidth when bar top position is near vm.base(zero).
		var borderLeft = left + (borderSkipped !== "left" ? halfStroke * signX : 0);
		var borderRight =
			right + (borderSkipped !== "right" ? -halfStroke * signX : 0);
		var borderTop = top + (borderSkipped !== "top" ? halfStroke * signY : 0);
		var borderBottom =
			bottom + (borderSkipped !== "bottom" ? -halfStroke * signY : 0);
		// not become a vertical line?
		if (borderLeft !== borderRight) {
			top = borderTop;
			bottom = borderBottom;
		}
		// not become a horizontal line?
		if (borderTop !== borderBottom) {
			left = borderLeft;
			right = borderRight;
		}
	}

	ctx.beginPath();
	ctx.fillStyle = vm.backgroundColor;
	ctx.strokeStyle = vm.borderColor;
	ctx.lineWidth = borderWidth;

	// Corner points, from bottom-left to bottom-right clockwise
	// | 1 2 |
	// | 0 3 |
	var corners = [
		[left, bottom],
		[left, top],
		[right, top],
		[right, bottom],
	];

	// Find first (starting) corner with fallback to 'bottom'
	var borders = ["bottom", "left", "top", "right"];
	var startCorner = borders.indexOf(borderSkipped, 0);
	if (startCorner === -1) {
		startCorner = 0;
	}

	function cornerAt(index) {
		return corners[(startCorner + index) % 4];
	}

	// Draw rectangle from 'startCorner'
	var corner = cornerAt(0);
	ctx.moveTo(corner[0], corner[1]);

	for (var i = 1; i < 4; i++) {
		corner = cornerAt(i);
		let nextCornerId = i + 1;
		if (nextCornerId === 4) {
			nextCornerId = 0;
		}

		// let nextCorner = cornerAt(nextCornerId);

		let width = corners[2][0] - corners[1][0];
		let height = corners[0][1] - corners[1][1];
		let x = corners[1][0];
		let y = corners[1][1];
		// eslint-disable-next-line
		var radius = cornerRadius;

		// Fix radius being too large
		if (radius > height / 2) {
			radius = height / 2;
		}
		if (radius > width / 2) {
			radius = width / 2;
		}

		ctx.moveTo(x + radius, y);
		ctx.lineTo(x + width - radius, y);
		ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
		ctx.lineTo(x + width, y + height - radius);
		ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
		ctx.lineTo(x + radius, y + height);
		ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
		ctx.lineTo(x, y + radius);
		ctx.quadraticCurveTo(x, y, x + radius, y);
	}

	ctx.fill();
	if (borderWidth) {
		ctx.stroke();
	}
};

var mode = "light"; //(themeMode) ? themeMode : 'light';
var fonts = {
	base: "Open Sans",
};

// Colors
var colors = {
	gray: {
		100: "#f6f9fc",
		200: "#e9ecef",
		300: "#dee2e6",
		400: "#ced4da",
		500: "#adb5bd",
		600: "#8898aa",
		700: "#525f7f",
		800: "#32325d",
		900: "#212529",
	},
	theme: {
		default: "#172b4d",
		primary: "#5e72e4",
		secondary: "#f4f5f7",
		info: "#11cdef",
		success: "#2dce89",
		danger: "#f5365c",
		warning: "#fb6340",
	},
	black: "#12263F",
	white: "#FFFFFF",
	transparent: "transparent",
};

// Methods

// Chart.js global options
function chartOptions() {
	// Options
	var options = {
		defaults: {
			global: {
				responsive: true,
				maintainAspectRatio: false,
				defaultColor: mode === "dark" ? colors.gray[700] : colors.gray[600],
				defaultFontColor: mode === "dark" ? colors.gray[700] : colors.gray[600],
				defaultFontFamily: fonts.base,
				defaultFontSize: 13,
				layout: {
					padding: 0,
				},
				legend: {
					display: false,
					position: "bottom",
					labels: {
						usePointStyle: true,
						padding: 16,
					},
				},
				elements: {
					point: {
						radius: 0,
						backgroundColor: colors.theme["primary"],
					},
					line: {
						tension: 0.4,
						borderWidth: 4,
						borderColor: colors.theme["primary"],
						backgroundColor: colors.transparent,
						borderCapStyle: "rounded",
					},
					rectangle: {
						backgroundColor: colors.theme["warning"],
					},
					arc: {
						backgroundColor: colors.theme["primary"],
						borderColor: mode === "dark" ? colors.gray[800] : colors.white,
						borderWidth: 4,
					},
				},
				tooltips: {
					enabled: true,
					mode: "index",
					intersect: false,
				},
			},
			doughnut: {
				cutoutPercentage: 83,
				legendCallback: function (chart) {
					var data = chart.data;
					var content = "";

					data.labels.forEach(function (label, index) {
						var bgColor = data.datasets[0].backgroundColor[index];

						content += '<span class="chart-legend-item">';
						content +=
							'<i class="chart-legend-indicator" style="background-color: ' +
							bgColor +
							'"></i>';
						content += label;
						content += "</span>";
					});

					return content;
				},
			},
		},
	};

	// yAxes
	Chart.scaleService.updateScaleDefaults("linear", {
		gridLines: {
			borderDash: [2],
			borderDashOffset: [2],
			color: mode === "dark" ? colors.gray[900] : colors.gray[300],
			drawBorder: false,
			drawTicks: false,
			lineWidth: 0,
			zeroLineWidth: 0,
			zeroLineColor: mode === "dark" ? colors.gray[900] : colors.gray[300],
			zeroLineBorderDash: [2],
			zeroLineBorderDashOffset: [2],
		},
		ticks: {
			beginAtZero: true,
			padding: 10,
			callback: function (value) {
				if (!(value % 10)) {
					return value;
				}
			},
		},
	});

	// xAxes
	Chart.scaleService.updateScaleDefaults("category", {
		gridLines: {
			drawBorder: false,
			drawOnChartArea: false,
			drawTicks: false,
		},
		ticks: {
			padding: 20,
		},
	});

	return options;
}

// Parse global options
function parseOptions(parent, options) {
	for (var item in options) {
		if (typeof options[item] !== "object") {
			parent[item] = options[item];
		} else {
			parseOptions(parent[item], options[item]);
		}
	}
}

// sales summary
let sales = {
	options: {
		scales: {
			yAxes: [
				{
					gridLines: {
						color: colors.gray[900],
						zeroLineColor: colors.gray[900],
					},
					ticks: {
						callback: function (value) {
							if (!(value % 10)) {
								return "$" + value + "k";
							}
						},
					},
				},
			],
		},
		tooltips: {
			callbacks: {
				label: function (item, data) {
					var label = data.datasets[item.datasetIndex].label || "";
					var yLabel = item.yLabel;
					var content = "";

					if (data.datasets.length > 1) {
						content += label;
					}

					content += ": $" + yLabel + "k";
					return content;
				},
			},
		},
	},
	data1: (canvas) => {
		return {
			labels: [
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec",
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
			],
			datasets: [
				{
					label: "You",
					data: [
						12.6,
						14,
						13.7,
						20.1,
						22.1,
						20.2,
						16.8,
						15.2,
						20.3,
						25.6,
						27.8,
						29.1,
					],
				},
				{
					label: "Comparables",
					data: [
						13.5,
						16,
						16.9,
						18.3,
						20.4,
						18.2,
						17.4,
						17.4,
						19.7,
						24.7,
						25.9,
						28.2,
					],
				},
			],
		};
	},
	data2: (canvas) => {
		return {
			labels: ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
			datasets: [
				{
					label: "You",
					data: [4.8, 5.1, 4.0, 2.1, 2.2, 2.8, 3.7],
				},
				{
					label: "Comparables",
					data: [4.4, 4.8, 3.6, 2.4, 2.4, 3.1, 3.3],
				},
			],
		};
	},
};

let orders = {
	options: {
		scales: {
			yAxes: [
				{
					ticks: {
						callback: function (value) {
							if (!(value % 10)) {
								return value;
							}
						},
					},
				},
			],
		},
		tooltips: {
			callbacks: {
				label: function (item, data) {
					var label = data.datasets[item.datasetIndex].label || "";
					var yLabel = item.yLabel;
					var content = "";
					if (data.datasets.length > 1) {
						content += label + ": ";
					}
					content += yLabel;
					return content;
				},
			},
		},
	},
	data: {
		labels: ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
		datasets: [
			{
				label: "You",
				data: [463, 481, 382, 210, 206, 248, 352],
				maxBarThickness: 10,
			},
			{
				label: "Comparables",
				data: [435, 479, 342, 228, 240, 291, 309],
				maxBarThickness: 10,
			},
		],
	},
};

let timeOfDay = {
	options: {
		scales: {
			yAxes: [
				{
					gridLines: {
						color: colors.gray[900],
						zeroLineColor: colors.gray[900],
					},
					ticks: {
						callback: function (value) {
							if (!(value % 10)) {
								return "$" + value + "k";
							}
						},
					},
				},
			],
		},
		tooltips: {
			callbacks: {
				label: function (item, data) {
					var label = data.datasets[item.datasetIndex].label || "";
					var yLabel = item.yLabel;
					var content = "";

					if (data.datasets.length > 1) {
						content += label;
					}

					content += ": $" + yLabel + "k";
					return content;
				},
			},
		},
	},
	data1: (canvas) => {
		return {
			labels: [
				"8 AM",
				"9 AM",
				"10 AM",
				"11 AM",
				"12 PM",
				"1 PM",
				"2 PM",
				"3 PM",
				"4 PM",
				"5 PM",
				"6 PM",
				"7 PM",
				"8 PM",
				"9 PM",
				"10 PM",
				"11 PM",
			],
			datasets: [
				{
					label: "You",
					data: [
						0,
						0.1,
						0.3,
						0.3,
						2.2,
						2.5,
						1.6,
						1.4,
						1.3,
						2.8,
						3.3,
						3.5,
						3.1,
						2.9,
						1.3,
						1.1,
					],
				},
				{
					label: "Comparables",
					data: [
						0.1,
						0.2,
						0.4,
						0.4,
						2.1,
						2.3,
						1.6,
						1.6,
						1.5,
						2.6,
						3,
						3,
						3,
						2.6,
						1.4,
						1,
					],
				},
			],
		};
	},
};

let items = {
	options: {
		scales: {
			yAxes: [
				{
					gridLines: {
						color: colors.gray[900],
						zeroLineColor: colors.gray[900],
					},
					ticks: {
						callback: function (value) {
							if (!(value % 10)) {
								return "$" + value;
							}
						},
					},
				},
			],
		},
		tooltips: {
			callbacks: {
				label: function (item, data) {
					var label = data.datasets[item.datasetIndex].label || "";
					var yLabel = item.yLabel;
					var content = "";

					if (data.datasets.length > 1) {
						content += label;
					}

					content += ": $" + yLabel;
					return content;
				},
			},
		},
	},
	data1: (canvas) => {
		return {
			labels: [
				"8 AM",
				"9 AM",
				"10 AM",
				"11 AM",
				"12 PM",
				"1 PM",
				"2 PM",
				"3 PM",
				"4 PM",
				"5 PM",
				"6 PM",
				"7 PM",
				"8 PM",
				"9 PM",
				"10 PM",
				"11 PM",
			],
			datasets: [
				{
					label: "Pizzas",
					data: [
						0,
						2,
						80,
						100,
						850,
						900,
						840,
						600,
						450,
						1075,
						1250,
						1500,
						1250,
						1100,
						450,
						400,
					],
				},
				{
					label: "Pastas",
					data: [
						0,
						0,
						85,
						50,
						650,
						750,
						460,
						405,
						400,
						625,
						750,
						600,
						450,
						500,
						300,
						350,
					],
				},
				{
					label: "Drinks",
					data: [
						0,
						0,
						0,
						0,
						100,
						135,
						50,
						45,
						50,
						340,
						550,
						750,
						900,
						850,
						350,
						275,
					],
				},
				{
					label: "Salads",
					data: [
						0,
						58,
						100,
						120,
						400,
						405,
						130,
						200,
						250,
						460,
						500,
						450,
						300,
						150,
						50,
						25,
					],
				},
				{
					label: "Calzones",
					data: [
						0,
						40,
						35,
						20,
						200,
						310,
						120,
						150,
						150,
						300,
						150,
						200,
						200,
						200,
						150,
						50,
					],
				},
			],
		};
	},
	data2: (canvas) => {
		return {
			labels: [
				"8 AM",
				"9 AM",
				"10 AM",
				"11 AM",
				"12 PM",
				"1 PM",
				"2 PM",
				"3 PM",
				"4 PM",
				"5 PM",
				"6 PM",
				"7 PM",
				"8 PM",
				"9 PM",
				"10 PM",
				"11 PM",
			],
			datasets: [
				{
					label: "Pizzas",
					data: [
						0,
						102,
						130,
						150,
						825,
						900,
						840,
						600,
						450,
						1075,
						1250,
						1500,
						1250,
						1100,
						450,
						400,
					],
				},
				{
					label: "Pastas",
					data: [
						0,
						0,
						135,
						100,
						625,
						750,
						460,
						405,
						400,
						625,
						750,
						600,
						450,
						500,
						300,
						350,
					],
				},
				{
					label: "Drinks",
					data: [
						0,
						0,
						0,
						0,
						50,
						135,
						50,
						45,
						50,
						340,
						550,
						750,
						900,
						850,
						350,
						275,
					],
				},
				{
					label: "Salads",
					data: [
						100,
						58,
						100,
						120,
						400,
						405,
						130,
						200,
						250,
						460,
						500,
						450,
						300,
						150,
						50,
						25,
					],
				},
				{
					label: "Calzones",
					data: [
						0,
						40,
						35,
						20,
						200,
						310,
						120,
						150,
						150,
						300,
						150,
						200,
						200,
						200,
						150,
						50,
					],
				},
			],
		};
	},
};

module.exports = {
	chartOptions,
	parseOptions,
	sales,
	orders,
	timeOfDay,
	items,
};
