var colors=['#ed405d','#f78c44','#cdba00','#32dd3d','#277ace','#fff015','#49bcf7','#aa55ff','#4af0ff','#ff2ff5'];
$(window).load(function() {
	$(".loading").fadeOut()
})
$(function() {
	createBaseDataTable('#feature1');
	createBaseDataTable('#feature2');
	createBaseDataTable('#feature3');
	createBaseDataTable('#feature4');
	createSurvivalDataTable('#survival1');
	createSurvivalDataTable('#survival2');
	createSurvivalDataTable('#survival3');
	createDeathDataTable('#death');
	createRelationDataTable('#relation1');
	createRelationDataTable('#relation2');
	createRelationDataTable('#relation3');
	createHazardsDataTable('#hazards1');
	createHazardsDataTable('#hazards2');
	createHazardsDataTable('#hazards3');
	echarts_1();
	echarts_2();
	echarts_3();
	echarts_4();
	//echarts_5();
	//zb1();
	//zb2();
	//zb3();
	function createBaseDataTable(domID) {
		var jsonStr =
			'[\
			{"性别":"男","死亡":"0","糖尿病入院":"0","肾病入院":"0","其它":"1","再血管化手术":"0","癌症":"0","肺病":"0","心源性入院":"0","主动脉球囊反搏术":"0","瓣膜置换":"0","植入心脏起搏器":"0","冠状动脉旁路移植术":"0","植入心脏除颤器":"0","心脏射频消融术":"0","PCI":"0","冠脉造影":"0","ARB":"1","抗凝药物":"0","ACEI":"0","beta-blocker":"0","强心药":"0","抗血小板":"1","钙通道阻滞剂":"1","利尿剂":"0","扩血管药":"0","抗酸剂":"1","他汀":"1","高脂血症":"1","心包疾病":"0","脑梗/脑出血":"0","糖尿病":"0","心率失常":"0","贫血":"0","心力衰竭":"0","瓣膜病":"0","肾功能不全":"0","甲亢或甲减":"1","心肌梗死":"0","先天性心脏病":"0","高血压":"1","心肌病":"0","冠心病":"1","脑利钠肽前体":"1","丙氨酸转移酶":"0","天冬氨酸氨基转移酶":"0","总蛋白":"0","血清白蛋白":"0","总胆红素":"0","直接胆红素":"0","葡萄糖":"0","尿素":"0","肌酐":"0","血清尿酸 ":"0","钠":"0","钙":"0","无机磷":"0","镁":"0","钾":"0","γ谷氨酰基转移酶":"0","碱性磷酸酶":"0","肌酸激酶":"0","肌钙蛋白":"0","乳酸脱氢酶":"0","总胆固醇":"0","甘油三酯":"0","高密度脂蛋白胆固醇":"0","低密度脂蛋白胆固醇":"0","红细胞计数":"0","血小板计数":"0","血红蛋测定":"0","红细胞比积测定":"0","红细胞体积分布宽度测定":"0","白细胞计数":"0","中性粒细胞":"0","淋巴细胞":"0","单核细胞":"0","嗜酸性粒细胞":"0","嗜碱性粒细胞":"0","平均血小板体积测定":"0","C-反应蛋白测定":"0","凝血酶时间测定":"0","血浆凝血酶原时间测定":"0","血浆凝血酶原活动度测定":"0","血浆纤维蛋白测定":"0","血浆D-二聚体测定":"1","血压Low":"1","射血分数":"0","血压high":"1","脉搏":"0","EGFR":"0","年龄＞60":"1","住院天数＞15":"1","BMI过高":"1"},\
			{"性别":"女","死亡":"0","糖尿病入院":"0","肾病入院":"0","其它":"1","再血管化手术":"0","癌症":"0","肺病":"0","心源性入院":"0","主动脉球囊反搏术":"0","瓣膜置换":"0","植入心脏起搏器":"0","冠状动脉旁路移植术":"0","植入心脏除颤器":"0","心脏射频消融术":"0","PCI":"0","冠脉造影":"0","ARB":"0","抗凝药物":"0","ACEI":"0","beta-blocker":"0","强心药":"0","抗血小板":"0","钙通道阻滞剂":"0","利尿剂":"0","扩血管药":"0","抗酸剂":"0","他汀":"0","高脂血症":"0","心包疾病":"0","脑梗/脑出血":"0","糖尿病":"0","心率失常":"0","贫血":"0","心力衰竭":"0","瓣膜病":"0","肾功能不全":"0","甲亢或甲减":"0","心肌梗死":"0","先天性心脏病":"0","高血压":"0","心肌病":"0","冠心病":"0","脑利钠肽前体":"1","丙氨酸转移酶":"0","天冬氨酸氨基转移酶":"0","总蛋白":"0","血清白蛋白":"0","总胆红素":"0","直接胆红素":"0","葡萄糖":"0","尿素":"0","肌酐":"0","血清尿酸 ":"0","钠":"0","钙":"0","无机磷":"0","镁":"0","钾":"0","γ谷氨酰基转移酶":"0","碱性磷酸酶":"0","肌酸激酶":"0","肌钙蛋白":"0","乳酸脱氢酶":"0","总胆固醇":"0","甘油三酯":"0","高密度脂蛋白胆固醇":"0","低密度脂蛋白胆固醇":"0","红细胞计数":"0","血小板计数":"0","血红蛋测定":"0","红细胞比积测定":"0","红细胞体积分布宽度测定":"0","白细胞计数":"0","中性粒细胞":"0","淋巴细胞":"0","单核细胞":"0","嗜酸性粒细胞":"1","嗜碱性粒细胞":"0","平均血小板体积测定":"0","C-反应蛋白测定":"0","凝血酶时间测定":"0","血浆凝血酶原时间测定":"0","血浆凝血酶原活动度测定":"0","血浆纤维蛋白测定":"0","血浆D-二聚体测定":"1","血压Low":"1","射血分数":"0","血压high":"0","脉搏":"0","EGFR":"0","年龄＞60":"1","住院天数＞15":"1","BMI过高":"1"}\
			]';
		var featureData = JSON.parse(jsonStr);
		var tableHTML = '<tbody>';
		var colCount = 17;
		for (var title = 0; title < Object.keys(featureData[0]).length / colCount; title++) {
			for (var i = 0; i < featureData.length; i++) {
				rowData = featureData[i];
				if (i == 0) {
					tableHTML += '<tr>';
					var index = -1;
					for (var ele in rowData) {
						if (index == -1) {
							tableHTML += '<th scope="col">' + ele + '</th>';
							index++;
							continue;
						}
						index++;
						if (index > colCount * (title + 1) || index <= colCount * title) continue;
						tableHTML += '<th scope="col">' + ele + '</th>';
					}
					tableHTML += '</tr>';
				}
				tableHTML += '<tr>';
				var index = -1;
				for (var ele in rowData) {
					if (index == -1) {
						var color = i == 0 ? '#ed405d' : '#f78c44';
						tableHTML += '<td><span style="background:' + color + '">' + rowData[ele] + '</span></td>';
						index++;
						continue;
					}
					index++;
					if (index > colCount * (title + 1) || index <= colCount * title) continue;
					tableHTML += '<td>' + rowData[ele] + '</td>';
				}
				tableHTML += '</tr>';
			}
		}
		tableHTML += '</tbody>';
		//console.log(tableHTML);
		$(domID).html(tableHTML);
	}

	function createSurvivalDataTable(domID) {
		$.ajax({
			type: 'get',
			url: 'json/survivalData.json', //请求数据的地址
			dataType: "json", //返回数据形式为json
			contentType: 'application/json;charset=UTF-8',
			success: function(result) {
				//请求成功时执行该函数内容，result即为服务器返回的json对象
				$.each(result, function(index, item) {
					var tableHTML = '<tbody>';
					var keys=Object.keys(item);
					for (var i = 0; i < keys.length; i++) {
						var key = keys[i];
						tableHTML+='<tr>';
						if(i==0){
							tableHTML += '<th scope="col">'+key+'</th>';
						}
						else{
							tableHTML += '<td  width=200px><span style="background:' + colors[i-1] + '">'+key+'</span></td>';
						}
						for (var j = 0; j < item[key].length; j++) {
							tableHTML += '<td>'+item[key][j]+'</td>';
						}
						tableHTML+='</tr>';
					}
					tableHTML += '</tbody>';
					//console.log(tableHTML);
					$(domID).html(tableHTML);
				});
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				//请求失败时执行该函数
				alert(textStatus + " 图表请求数据失败!");
				myChart.hideLoading();
			}
		});
		
	}
	
	function createDeathDataTable(domID) {
		$.ajax({
			type: 'get',
			url: 'json/deathData.json', //请求数据的地址
			dataType: "json", //返回数据形式为json
			contentType: 'application/json;charset=UTF-8',
			success: function(result) {
				//请求成功时执行该函数内容，result即为服务器返回的json对象
				$.each(result, function(index, item) {
					var tableHTML = '<tbody>';
					var keys=Object.keys(item);
					for (var i = 0; i < keys.length; i++) {
						var key = keys[i];
						tableHTML+='<tr>';
						if(i==0){
							tableHTML += '<th scope="col">'+key+'</th>';
						}
						else{
							tableHTML += '<td ><span style="background:' + colors[i-1] + '">'+key+'</span></td>';
						}
						for (var j = 0; j < item[key].length; j++) {
							tableHTML += '<td>'+item[key][j]+'</td>';
						}
						tableHTML+='</tr>';
					}
					tableHTML += '</tbody>';
					//console.log(tableHTML);
					$(domID).html(tableHTML);
				});
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				//请求失败时执行该函数
				alert(textStatus + " 图表请求数据失败!");
				myChart.hideLoading();
			}
		});
		
	}

	function createRelationDataTable(domID) {
		$.ajax({
			type: 'get',
			url: 'json/relationData.json', //请求数据的地址
			dataType: "json", //返回数据形式为json
			contentType: 'application/json;charset=UTF-8',
			success: function(result) {
				//请求成功时执行该函数内容，result即为服务器返回的json对象
				$.each(result, function(index, item) {
					var tableHTML = '<tbody>';
					var keys=Object.keys(item);
					tableHTML+='<tr><th scope="col">Relation</th>';
					for (let i = 0; i < item[keys[0]].length; i++) {
						var td=item[keys[0]][i];
						tableHTML += '<th scope="col">'+td+'</th>';
					}
					tableHTML+='</tr>';
					for (let i = 0; i < item[keys[1]].length; i++) {
						tableHTML+='<tr>';
						var td=item[keys[1]][i];
						tableHTML += '<td><span style="background:' + colors[i-1] + '">'+td+'</span></td>';
						for (let j = i*item[keys[0]].length; j < (i+1)*item[keys[0]].length; j++) {
							tableHTML += '<td>'+item[keys[2]][j][2]+'</td>';
						}
						tableHTML+='</tr>';
					}
					tableHTML += '</tbody>';
					//console.log(tableHTML);
					$(domID).html(tableHTML);
				});
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				//请求失败时执行该函数
				alert(textStatus + " 图表请求数据失败!");
				myChart.hideLoading();
			}
		});
		
	}
	
	function createHazardsDataTable(domID) {
		$.ajax({
			type: 'get',
			url: 'json/hazardsData.json', //请求数据的地址
			dataType: "json", //返回数据形式为json
			contentType: 'application/json;charset=UTF-8',
			success: function(result) {
				//请求成功时执行该函数内容，result即为服务器返回的json对象
				$.each(result, function(index, item) {
					var tableHTML = '<tbody>';
					var keys=Object.keys(item);
					tableHTML+='<tr><th scope="col">hazards ratio</th><th scope="col">value</th><th scope="col">start</th><th scope="col">end</th></tr>';
					for (let i = 1; i < item[keys[0]].length; i++) {
						tableHTML+='<tr>';
						var td=item[keys[0]][i];
						tableHTML += '<td><span style="background:' + colors[i-1] + '">'+td+'</span></td>';
						for (let j = 0; j < 3; j++) {
							tableHTML += '<td>'+item[keys[1]][i][j+1]+'</td>';
						}
						tableHTML+='</tr>';
					}
					tableHTML += '</tbody>';
					//console.log(tableHTML);
					$(domID).html(tableHTML);
				});
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				//请求失败时执行该函数
				alert(textStatus + " 图表请求数据失败!");
				myChart.hideLoading();
			}
		});
		
	}
	
	function get_data(myChart) {
		var option= myChart.getOption();
		myChart.showLoading();
		$.ajax({
			type: 'get',
			url: 'json/survivalData.json', //请求数据的地址
			dataType: "json", //返回数据形式为json
			contentType: 'application/json;charset=UTF-8',
			success: function(result) {
				//请求成功时执行该函数内容，result即为服务器返回的json对象
				$.each(result, function(index, item) {
					var keys=Object.keys(item);
					var seriesData=[];
					for (var i = 0; i < keys.length; i++) {
						var key = keys[i];
						if(i==0){
							legend=keys.slice(1);
							option.legend[0].data=legend;
						}
						else{
							data = [];
							xData=Object.values(item[keys[0]]);
							yData=Object.values(item[key]);
							for (var j = 0; j < xData.length; j++) {
								data.push([xData[j],yData[j]]);
							}
							if(option.series[i-1]==undefined){
								option.series.push(JSON.parse(JSON.stringify(option.series[i-2])));
							}
							option.series[i-1].data=data;
							option.series[i-1].name=key;
							option.series[i-1].itemStyle.color=colors[i-1];
						}
					}
					myChart.setOption(option);
				});


				myChart.hideLoading(); //隐藏加载动画
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				//请求失败时执行该函数
				alert(textStatus + " 图表请求数据失败!");
				myChart.hideLoading();
			}
		});
	}
	
	function getRadarData(myChart) {
		var option= myChart.getOption();
		myChart.showLoading();
		$.ajax({
			type: 'get',
			url: 'json/deathData.json', //请求数据的地址
			dataType: "json", //返回数据形式为json
			contentType: 'application/json;charset=UTF-8',
			success: function(result) {
				//请求成功时执行该函数内容，result即为服务器返回的json对象
				$.each(result, function(index, item) {
					var keys=Object.keys(item);
					var seriesData=[];
					for (var i = 0; i < keys.length; i++) {
						var key = keys[i];
						if(i==0){
							legend=keys.slice(1);
							option.legend[0].data=legend;
						}
						else{
							data = [];
							yData=Object.values(item[key]);
							if(option.series[0].data[i-1]==undefined){
								option.series[0].data.push(JSON.parse(JSON.stringify(option.series[0].data[i-2])));
							}
							option.series[0].data[i-1].value=yData;
							option.series[0].data[i-1].name=key;
						}
					}
					myChart.setOption(option);
				});


				myChart.hideLoading(); //隐藏加载动画
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				//请求失败时执行该函数
				alert(textStatus + " 图表请求数据失败!");
				myChart.hideLoading();
			}
		});
	}
	
	function getRelationData(myChart) {
		var option= myChart.getOption();
		myChart.showLoading();
		$.ajax({
			type: 'get',
			url: 'json/relationData.json', //请求数据的地址
			dataType: "json", //返回数据形式为json
			contentType: 'application/json;charset=UTF-8',
			success: function(result) {
				//请求成功时执行该函数内容，result即为服务器返回的json对象
				$.each(result, function(index, item) {
					var keys=Object.keys(item);
					var seriesData=[];
					option.xAxis[0].data=item[keys[0]];
					option.yAxis[0].data=item[keys[1]];
					option.series[0].data=item[keys[2]];
					myChart.setOption(option);
				});
				myChart.hideLoading(); //隐藏加载动画
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				//请求失败时执行该函数
				alert(textStatus + " 图表请求数据失败!");
				myChart.hideLoading();
			}
		});
	}
	
	function getHazardsData(myChart) {
		var option= myChart.getOption();
		myChart.showLoading();
		$.ajax({
			type: 'get',
			url: 'json/hazardsData.json', //请求数据的地址
			dataType: "json", //返回数据形式为json
			contentType: 'application/json;charset=UTF-8',
			success: function(result) {
				//请求成功时执行该函数内容，result即为服务器返回的json对象
				$.each(result, function(index, item) {
					var keys=Object.keys(item);
					var seriesData=[];
					option.xAxis[0].data=item[keys[0]];
					option.series[0].data=item[keys[1]];
					myChart.setOption(option);
				});
				myChart.hideLoading(); //隐藏加载动画
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
					color: 'rgba(255,255,255,1)',
				}
			},
			radar: [{
				indicator: [{
						text: 'Samples',
						max: 2500,
						color: 'rgba(255,255,255,1)',
					},
					{
						text: 'Average visits',
						max: 5,
						color: 'rgba(255,255,255,1)',
					},
					{
						text: 'Death',
						max: 1000,
						color: 'rgba(255,255,255,1)',
					},
					{
						text: 'Death rate(%)',
						max: 100,
						color: 'rgba(255,255,255,1)',
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
							color: "rgba(240, 249, 255, .5)"
						},
					},
				]
			}]
		};
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		getRadarData(myChart);
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
							color: 'rgba(255,255,255,1)',
							fontSize: 10,
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
					data: [],
					splitArea: {
						show: true
					}
				},
				yAxis: {
					type: 'category',
					axisLabel: {
						show: true,
						textStyle: {
							color: 'rgba(255,255,255,1)',
							fontSize: 10,
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
					data: [],
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
					data: [],
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
			getRelationData(myChart);
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
					top: '70',
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
							color: 'rgba(255,255,255,.9)'
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
				}],
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
							color: 'rgba(255,255,255,.9)'
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
					type: 'line',
					smooth: true,
					symbol: 'circle',
					symbolSize: 5,
					showSymbol: false,
					itemStyle: {
						color: '#cdba00',
					}
				}, {
					type: 'line',
					smooth: true,
					symbol: 'circle',
					symbolSize: 5,
					showSymbol: false,
					itemStyle: {
						color: '#277ace',
					}
				}]
			};

			// 使用刚指定的配置项和数据显示图表。
			myChart.setOption(option);
			get_data(myChart);
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
					top: 20,
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
							color: 'rgba(255,255,255,.9)'
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
					data: []
				}],
				yAxis: [{
					name: 'Mortality less likely      Mortality more likely                                                   ',
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
							color: 'rgba(255,255,255,.9)'
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
					data: [],
					lineStyle: {
						normal: {
							width: 2
						}
					},
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
			getHazardsData(myChart);
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
})
