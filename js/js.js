$(window).load(function() {
	$(".loading").fadeOut()
})
$(function() {
	echarts_1();
	echarts_2();
	echarts_3();
	echarts_4();
	//echarts_5();
	//zb1();
	//zb2();
	//zb3();

	function get_data(myChart) {
		myChart.showLoading();
		$.ajax({
			type: 'get',
			url: 'json/data.json', //请求数据的地址
			dataType: "json", //返回数据形式为json
			contentType: 'application/json;charset=UTF-8',
			data: {},
			success: function(result) {
				//请求成功时执行该函数内容，result即为服务器返回的json对象
				data = []
				$.each(result, function(index, item) {
					data.push([item.x, item.y]);
				});


				myChart.hideLoading(); //隐藏加载动画
				myChart.setOption({ //加载数据图表
					series: [{
						// 根据名字对应到相应的系列
						data: data
					}]
				});
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				//请求失败时执行该函数
				alert(textStatus + " 图表请求数据失败!");
				myChart.hideLoading();
			}
		});
	}

	function echarts_1() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('echart1'));
		option = {
			color: ["rgba(255, 69, 37, 1)", "rgba(56, 142, 255, 1)", "rgba(119, 255, 61, 1)"],
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				left: 'center',
				data: ['半年', '一年', '两年'],
				textStyle: {
					color: 'rgba(255,255,255,.6)',
				}
			},
			radar: [{
				indicator: [{
						text: 'Samples',
						max: 2500
					},
					{
						text: 'Average visits',
						max: 5
					},
					{
						text: 'Death',
						max: 1000
					},
					{
						text: 'Death rate(%)',
						max: 100
					}
				],
				center: ['50%', '50%'],
				radius: '70%'
			}],
			series: [{
				type: 'radar',
				tooltip: {
					trigger: 'item'
				},
				data: [{
						value: [2017, 4.88, 325, 4.36],
						name: '半年',
						areaStyle: {
							color: "rgba(255, 69, 37, .5)"
						},
					},
					{
						value: [1891, 4.16, 471, 7.83],
						name: '一年',
						areaStyle: {
							color: "rgba(56, 142, 255, .5)"
						},
					},
					{
						value: [1638, 4.08, 620, 12.97],
						name: '两年',
						areaStyle: {
							color: "rgba(119, 255, 61, .5)"
						},
					}
				]
			}]
		};
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		window.addEventListener("resize", function() {
			myChart.resize();
		});
	}

	function echarts_2() {
		var myCharts = document.getElementsByClassName('echart2')
		var hours = ['HBP', 'NT-proBNP', 'LVEF', 'Male', 'Age', 'Plasma d-dimer\n assay', 'IBP', 'Beta-blocker', 'CCR',
			'Creatine kinase'
		];
		var days = ['Creatine kinase', 'CCR', 'Beta-blocker', 'IBP', 'Plasma d-dimer\n assay', 'Age', 'Male', 'LVEF',
			'NT-proBNP', 'HBP'
		];

		var data = [
			[0, 0, 5],
			[0, 1, 1],
			[0, 2, 1],
			[0, 3, 1],
			[0, 4, 1],
			[0, 5, 1],
			[0, 6, 1],
			[0, 7, 1],
			[0, 8, 1],
			[0, 9, 1],
			[1, 0, 7],
			[1, 1, 1],
			[1, 2, 1],
			[1, 3, 1],
			[1, 4, 1],
			[1, 5, 1],
			[1, 6, 1],
			[1, 7, 1],
			[1, 8, 1],
			[1, 9, 1],
			[2, 0, 1],
			[2, 1, 1],
			[2, 2, 1],
			[2, 3, 1],
			[2, 4, 1],
			[2, 5, 1],
			[2, 6, 1],
			[2, 7, 1],
			[2, 8, 1],
			[2, 9, 1],
			[3, 0, 7],
			[3, 1, 3],
			[3, 2, 1],
			[3, 3, 1],
			[3, 4, 1],
			[3, 5, 1],
			[3, 6, 1],
			[3, 7, 1],
			[3, 8, 1],
			[3, 9, 1],
			[4, 0, 1],
			[4, 1, 3],
			[4, 2, 1],
			[4, 3, 1],
			[4, 4, 1],
			[4, 5, 1],
			[4, 6, 1],
			[4, 7, 1],
			[4, 8, 1],
			[4, 9, 1],
			[5, 0, 1],
			[5, 1, 2],
			[5, 2, 4],
			[5, 3, 1],
			[5, 4, 1],
			[5, 5, 3],
			[5, 6, 4],
			[5, 7, 6],
			[5, 8, 4],
			[5, 9, 4],
			[6, 0, 3],
			[6, 1, 3],
			[6, 2, 2],
			[6, 3, 5],
			[6, 4, 5],
			[6, 5, 2],
			[6, 6, 2],
			[6, 7, 6],
			[6, 8, 9],
			[6, 9, 11],
			[7, 0, 6],
			[7, 1, 7],
			[7, 2, 8],
			[7, 3, 12],
			[7, 4, 5],
			[7, 5, 5],
			[7, 6, 7],
			[7, 7, 2],
			[7, 8, 3],
			[7, 9, 2],
			[8, 0, 1],
			[8, 1, 9],
			[8, 2, 8],
			[8, 3, 10],
			[8, 4, 6],
			[8, 5, 5],
			[8, 6, 5],
			[8, 7, 5],
			[8, 8, 7],
			[8, 9, 4],
			[9, 0, 2],
			[9, 1, 4],
			[9, 2, 5],
			[9, 3, 4],
			[9, 4, 7],
			[9, 5, 14],
			[9, 6, 13],
			[9, 7, 12],
			[9, 8, 9],
			[9, 9, 5]
		];

		data = data.map(function(item) {
			return [item[1], item[0], item[2] || '-'];
		});
		for (var i = 0; i < myCharts.length; i++) {
			myChart = echarts.init(myCharts[i]);
			option = {
				tooltip: {
					position: 'top'
				},
				animation: false,
				grid: {
					top: '50',
					left: '90',
					bottom: '90'
				},
				xAxis: {
					type: 'category',
					axisLabel: {
						show: true,
						rotate: 90,
						textStyle: {
							color: 'rgba(255,255,255,.6)',
							fontSize: 10,
						}
					},
					data: hours,
					splitArea: {
						show: true
					}
				},
				yAxis: {
					type: 'category',
					axisLabel: {
						show: true,
						textStyle: {
							color: 'rgba(255,255,255,.6)',
							fontSize: 10,
						}
					},
					data: days,
					splitArea: {
						show: true
					}
				},
				visualMap: {
					min: -1,
					max: 15,
					calculable: true,
					orient: 'horizontal',
					textGap: 100,
					top: '0',
					right: 'center',
					textStyle: {
						color: 'rgba(255,255,255,.6)',
						fontSize: 10,
					}
				},
				series: [{
					name: 'Punch Card',
					type: 'heatmap',
					data: data,
					label: {
						show: true
					},
					emphasis: {
						itemStyle: {
							shadowBlur: 10,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				}]
			};
			// 使用刚指定的配置项和数据显示图表。
			myChart.setOption(option);
			window.addEventListener("resize", function() {
				myChart.resize();
			});
		}
	}

	function echarts_3() {
		// 基于准备好的dom，初始化echarts实例
		var myCharts = document.getElementsByClassName('echart3')
		for (var i = 0; i < myCharts.length; i++) {
			myChart = echarts.init(myCharts[i]);
			option = {
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						lineStyle: {
							color: '#57617B'
						}
					}
				},
				legend: {

					//icon: 'vertical',
					data: ['Real', 'Bi-LSTM'],
					//align: 'center',
					// right: '35%',
					top: '0',
					textStyle: {
						color: "#fff"
					},
					// itemWidth: 15,
					// itemHeight: 15,
					itemGap: 20,
				},
				grid: {
					left: '25',
					right: '20',
					top: '10',
					bottom: '20',
					containLabel: true
				},
				xAxis: [{
					name: 'Time/day',
					nameLocation: 'center',
					nameGap: 25,
					nameTextStyle: {
						color: "#ffffff"
					},
					type: 'value',
					boundaryGap: false,
					axisLabel: {
						show: true,
						textStyle: {
							color: 'rgba(255,255,255,.6)'
						}
					},
					axisLine: {
						lineStyle: {
							color: 'rgba(255,255,255,.1)'
						}
					},
					splitLine: {
						lineStyle: {
							color: 'rgba(255,255,255,.1)'
						}
					},
					max: 200
				}, {}],
				yAxis: [{
					name: 'Percent survival',
					nameLocation: 'center',
					nameGap: 25,
					nameTextStyle: {
						color: "#ffffff"
					},
					min: 95,
					max: 100,
					axisLabel: {
						show: true,
						textStyle: {
							color: 'rgba(255,255,255,.6)'
						}
					},
					axisLine: {
						lineStyle: {
							color: 'rgba(255,255,255,.1)'
						}
					},
					splitLine: {
						lineStyle: {
							color: 'rgba(255,255,255,.1)'
						}
					}
				}],
				series: [{
					name: 'Real',
					type: 'line',
					smooth: true,
					symbol: 'circle',
					symbolSize: 5,
					showSymbol: false,
					lineStyle: {
						normal: {
							width: 2
						}
					},
					areaStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: 'rgba(24, 163, 64, 0.3)'
							}, {
								offset: 0.8,
								color: 'rgba(24, 163, 64, 0)'
							}], false),
							shadowColor: 'rgba(0, 0, 0, 0.1)',
							shadowBlur: 10
						}
					},
					itemStyle: {
						normal: {
							color: '#cdba00',
							borderColor: 'rgba(137,189,2,0.27)',
							borderWidth: 12
						}
					},
					data: get_data(myChart)
				}, {
					name: 'Bi-LSTM',
					type: 'line',
					smooth: true,
					symbol: 'circle',
					symbolSize: 5,
					showSymbol: false,
					lineStyle: {
						normal: {
							width: 2
						}
					},
					areaStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: 'rgba(39, 122,206, 0.3)'
							}, {
								offset: 0.8,
								color: 'rgba(39, 122,206, 0)'
							}], false),
							shadowColor: 'rgba(0, 0, 0, 0.1)',
							shadowBlur: 10
						}
					},
					itemStyle: {
						normal: {
							color: '#277ace',
							borderColor: 'rgba(0,136,212,0.2)',
							borderWidth: 12
						}
					},
					data: [
						[0, 95],
						[50, 96],
						[100, 98],
						[150, 97],
						[180, 95]
					]
				}]
			};

			// 使用刚指定的配置项和数据显示图表。
			myChart.setOption(option);
			window.addEventListener("resize", function() {
				myChart.resize();
			});
		}
	}

	function echarts_4() {
		var xData = ['', 'MVP', 'ACEI', 'Phosphorus', 'Thyroid', 'Vasodilators', 'Revascularization', 'Anemia', 'ALP',
			'LVEF', 'CCB'
		]
		var yData = [
						[],
						[1.26, 1.26, 0.719, 2.208],
						[0.439, 0.439, 0.288, 0.667],
						[2.177, 2.177, 1.732, 2.735],
						[0.205, 0.205, 0.077, 0.548],
						[0.565, 0.565, 0.447, 0.714],
						[0.113, 0.113, 0.047, 0.272],
						[1.528, 1.528, 1.16, 2.012],
						[4.012, 4.012, 3.063, 5.255],
						[1.692, 1.692, 1.229, 2.33],
						[0.572, 0.572, 0.449, 0.728]
					]
		// 基于准备好的dom，初始化echarts实例
		var myCharts = document.getElementsByClassName('echart4')
		for (var i = 0; i < myCharts.length; i++) {
			myChart = echarts.init(myCharts[i]);
			option = {
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						lineStyle: {
							color: '#2a7b45'
						}
					}
				},
				grid: [{
					bottom: '30%'
				}],
				xAxis: [{
					name: 'HR(95% CI)',
					nameLocation: 'center',
					nameGap: 120,
					nameTextStyle: {
						color: "#ffffff"
					},
					type: 'category',
					boundaryGap: false,
					axisLabel: {
						show: true,
						rotate: 90,
						textStyle: {
							color: 'rgba(255,255,255,.6)'
						}
					},
					axisLine: {
						lineStyle: {
							color: 'rgba(255,255,255,.1)'
						}
					},
					splitLine: {
						lineStyle: {
							color: 'rgba(255,255,255,.1)'
						}
					},
					data: xData
				}],
				yAxis: [{
					name: 'Mortality less likely      Mortality more likely                                                        ',
					nameLocation: 'center',
					nameGap: 25,
					nameTextStyle: {
						color: "#ffffff"
					},
					max: 6,
					interval: 1,
					axisLabel: {
						show: true,
						rotate: 90,
						textStyle: {
							color: 'rgba(255,255,255,.6)'
						}
					},
					axisLine: {
						lineStyle: {
							color: 'rgba(255,255,255,.1)'
						}
					},
					splitLine: {
						lineStyle: {
							color: 'rgba(255,255,255,.1)'
						}
					},
					axisPointer: {
						lineStyle: {
							width: 10
						}
					}
				}],
				series: [{
					type: 'k',
					data: yData,
					itemStyle: {
						normal: {
							color: '#ff0000',
							borderColor: 'rgba(255,0,0,1)',
							color0: '#ff0000',
							borderColor0: 'rgba(255,0,0,1)',
							borderWidth: 3
						}
					},
					barWidth: 10,
					markLine: {
						symbol: ['none', 'none'], //去掉箭头
						lineStyle: {
							type: 'solid',
							color: 'blue',
							width: 2
						},
						label: {
							show: false,
							position: 'left'
						},
						data: [{
								name: 'Y 轴值为 1 的水平线',
								yAxis: 1,
							},
							[{
									name: '标线1起点',
									value: 10,
									x: 0,
									y: 1
								},
								{
									name: '标线1终点',
									x: xData[10],
									y: 1
								}
							]
						]
					}
				}]
			};

			// 使用刚指定的配置项和数据显示图表。
			myChart.setOption(option);
			window.addEventListener("resize", function() {
				myChart.resize();
			});
		}
	}

	function echarts_5() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('echart5'));
		// 颜色
		var lightBlue = {
			type: 'linear',
			x: 0,
			y: 0,
			x2: 0,
			y2: 1,
			colorStops: [{
				offset: 0,
				color: 'rgba(41, 121, 255, 1)'
			}, {
				offset: 1,
				color: 'rgba(0, 192, 255, 1)'
			}],
			globalCoord: false
		}

		var option = {
			tooltip: {
				show: false
			},
			grid: {
				top: '0%',
				left: '65',
				right: '14%',
				bottom: '0%',
			},
			xAxis: {
				min: 0,
				max: 100,
				splitLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLine: {
					show: false
				},
				axisLabel: {
					show: false
				}
			},
			yAxis: {
				data: ['字段名称', '字段名称', '字段名称', '字段名称', '字段名称', '字段名称', '字段名称', '字段名称', '字段名称', '字段名称', '字段名称'],
				//offset: 15,
				axisTick: {
					show: false
				},
				axisLine: {
					show: false
				},
				axisLabel: {
					color: 'rgba(255,255,255,.6)',
					fontSize: 14
				}
			},
			series: [{
				type: 'bar',
				label: {
					show: true,
					zlevel: 10000,
					position: 'right',
					padding: 10,
					color: '#49bcf7',
					fontSize: 14,
					formatter: '{c}%'

				},
				itemStyle: {
					color: '#49bcf7'
				},
				barWidth: '15',
				data: [49, 80, 67, 99, 12, 19, 39, 84, 28, 47, 57, 100],
				z: 10
			}, {
				type: 'bar',
				barGap: '-100%',
				itemStyle: {
					color: '#fff',
					opacity: 0.1
				},
				barWidth: '15',
				data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
				z: 5
			}],
		};
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		window.addEventListener("resize", function() {
			myChart.resize();
		});
	}


	function zb1() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('zb1'));
		var v1 = 298 //男消费
		var v2 = 523 //女消费
		var v3 = v1 + v2 //总消费 
		option = {
			series: [{

				type: 'pie',
				radius: ['60%', '70%'],
				color: '#49bcf7',
				label: {
					normal: {
						position: 'center'
					}
				},
				data: [{
					value: v2,
					name: '女消费',
					label: {
						normal: {
							formatter: v2 + '',
							textStyle: {
								fontSize: 20,
								color: '#fff',
							}
						}
					}
				}, {
					value: v1,
					name: '男消费',
					label: {
						normal: {
							formatter: function(params) {
								return '占比' + Math.round(v2 / v3 * 100) + '%'
							},
							textStyle: {
								color: '#aaa',
								fontSize: 12
							}
						}
					},
					itemStyle: {
						normal: {
							color: 'rgba(255,255,255,.2)'
						},
						emphasis: {
							color: '#fff'
						}
					},
				}]
			}]
		};
		myChart.setOption(option);
		window.addEventListener("resize", function() {
			myChart.resize();
		});
	}

	function zb2() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('zb2'));
		var v1 = 298 //男消费
		var v2 = 523 //女消费
		var v3 = v1 + v2 //总消费 
		option = {

			//animation: false,
			series: [{
				type: 'pie',
				radius: ['60%', '70%'],
				color: '#cdba00',
				label: {
					normal: {
						position: 'center'
					}
				},
				data: [{
					value: v1,
					name: '男消费',
					label: {
						normal: {
							formatter: v1 + '',
							textStyle: {
								fontSize: 20,
								color: '#fff',
							}
						}
					}
				}, {
					value: v2,
					name: '女消费',
					label: {
						normal: {
							formatter: function(params) {
								return '占比' + Math.round(v1 / v3 * 100) + '%'
							},
							textStyle: {
								color: '#aaa',
								fontSize: 12
							}
						}
					},
					itemStyle: {
						normal: {
							color: 'rgba(255,255,255,.2)'
						},
						emphasis: {
							color: '#fff'
						}
					},
				}]
			}]
		};
		myChart.setOption(option);
		window.addEventListener("resize", function() {
			myChart.resize();
		});
	}

	function zb3() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('zb3'));
		var v1 = 298 //男消费
		var v2 = 523 //女消费
		var v3 = v1 + v2 //总消费 
		option = {
			series: [{

				type: 'pie',
				radius: ['60%', '70%'],
				color: '#62c98d',
				label: {
					normal: {
						position: 'center'
					}
				},
				data: [{
					value: v2,
					name: '女消费',
					label: {
						normal: {
							formatter: v2 + '',
							textStyle: {
								fontSize: 20,
								color: '#fff',
							}
						}
					}
				}, {
					value: v1,
					name: '男消费',
					label: {
						normal: {
							formatter: function(params) {
								return '占比' + Math.round(v2 / v3 * 100) + '%'
							},
							textStyle: {
								color: '#aaa',
								fontSize: 12
							}
						}
					},
					itemStyle: {
						normal: {
							color: 'rgba(255,255,255,.2)'
						},
						emphasis: {
							color: '#fff'
						}
					},
				}]
			}]
		};
		myChart.setOption(option);
		window.addEventListener("resize", function() {
			myChart.resize();
		});
	}
})
