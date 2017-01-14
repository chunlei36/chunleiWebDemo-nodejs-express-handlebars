//搜索范围
	var radius = 4000;
	var map = new BMap.Map("allmap");
	//中心点
	var mPoint = new BMap.Point(113.663221, 34.7568711);
	map.enableScrollWheelZoom();
	map.centerAndZoom(mPoint, 14); //缩放级别

	//画个圈圈
	var circle = new BMap.Circle(mPoint, radius, {
		fillColor: "blue",
		strokeWeight: 1,
		fillOpacity: 0.3,
		strokeOpacity: 0.3
	});
	map.addOverlay(circle);

	//搜半径内的地铁站
	var local = new BMap.LocalSearch(map, {
		renderOptions: {
			map: map,
			autoViewport: false,
			panel: "r-result"
		}
	});
	local.searchNearby('大河锦江饭', mPoint, radius);