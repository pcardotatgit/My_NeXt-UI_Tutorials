	// instantiate NeXt app
	var app = new nx.ui.Application();

	// instantiate Topology class
	var topology = new nx.graphic.Topology({
		// width 100% if true
		'adaptive': false,
		// show icons' nodes, otherwise display dots
		'showIcon': true,
		// special configuration for nodes
		'nodeConfig': {
			'label': 'model.name',
			'iconType': "router",
			'color': '#0how00'
		},
		// special configuration for links
		'linkConfig': {
			'linkType': 'curve'
		},
		// property name to identify unique nodes
		'identityKey': 'name', // helps to link source and target
		// canvas size
		'width': 1000,
		'height': 600,
		// "engine" that process topology prior to rendering
		'dataProcessor': 'force',
		// moves the labels in order to avoid overlay
		'enableSmartLabel': true,
		// smooth scaling. may slow down, if true
		'enableGradualScaling': true,
		// if true, two nodes can have more than one link
		'supportMultipleLink': true,
		// enable scaling
		"scalable": true
	});

topology.on("ready", function(){
  	// load topology data from app/data.js
	topology.data(topologyData);
});


	// bind the topology object to the app
	topology.attach(app);


	//console.log(topology.getNode("San Francisco"));
	var pathHops = [
		"San Francisco",
		"Los Angeles",
		"Houston",
		"New Jersey"
	];

	topology.on("topologyGenerated", function() {

		var groupsLayer = topology.getLayer("groups");
		var nodesDict = topology.getLayer("nodes").nodeDictionary();

		var nodes1 = [nodesDict.getItem("San Francisco"), nodesDict.getItem("Los Angeles"), nodesDict.getItem("San Diego")];
		var group1 = groupsLayer.addGroup({
			nodes: nodes1,
			label: 'California',
			color: '#f00',
      id: 'group1'
		});

		var nodes2 = [nodesDict.getItem("Dallas"), nodesDict.getItem("San Antonio")];
		var group2 = groupsLayer.addGroup({
			nodes: nodes2,
			label: 'Texas',
			color: '#0f0',
      id: 'group2'
		});
    
    // groupsLayer.removeGroup("group1");
    
	});

