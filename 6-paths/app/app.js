(function(nx){

	// instantiate next app
	const app = new nx.ui.Application();

	// configuration object
	const topologyConfig = {
        // configuration for nodes
        width: window.innerWidth,
        height: window.innerHeight,
		nodeConfig: {
			label: "model.name",
            iconType: "model.device_type",
            color: "model.color"
		},
		// configuration for links
		linkConfig: {
            linkType: "straight",
			//linkType: "curve",
			//linkType: "parallel",
            color: "model.color"
		},
		// if true, the nodes' icons are shown, a dot is shown instead
		showIcon: true,
		// "engine" that process topology prior to rendering
		'dataProcessor': 'force',	
		// PATHS : property name to identify unique nodes MANDATORY for drawing link between icons
		'identityKey': 'name', // helps to link source and target
	};
	

	// instantiate Topology class
	const topology = new nx.graphic.Topology(topologyConfig);

	// load topology data from app/data.js
	topology.data(topologyData);

//// Here under the code needed for displaying path //////
	// Let define here what will be the path : just e list of hops 
	var pathHops = [
	  "San Francisco",
	  "Los Angeles",
	  "Houston",
	  "New Jersey"
	];
//// the code needed for displaying path - END//////	
//// Here under the code needed for displaying path //////
	topology.on("topologyGenerated", function() {

	  // path layer - need to draw paths
	  var pathLayer = topology.getLayer("paths");
	  // node dictionary to get nodes by name (by default only 'id' is available)
	  var nodesDict = topology.getLayer("nodes").nodeDictionary();

	  var linkList = getLinkList(topology, nodesDict, pathHops);

		//"arrow": "cap"
		//"arrow": "end"
		
	  var pathInst = new nx.graphic.Topology.Path({
	    "pathWidth": 5,
	    "links": linkList,
		"stroke-dasharray": "2, 1",
	    "arrow": "cap"
	  });

	  pathLayer.addPath(pathInst);
	  // pathLayer.removePath(pathInst);

	});

	function getLinkList(topology, nodesDict, pathHops) {

	  var linkList = [];

	  for (var i = 0; i < pathHops.length - 1; i++) {

	    var srcNode = nodesDict.getItem(pathHops[i]);
	    var destNode = nodesDict.getItem(pathHops[i + 1]);

	    var links = getLinksBetweenNodes(topology, srcNode, destNode);

	    linkList.push(links[0]);
	  }

	  return linkList;
	}

	function getLinksBetweenNodes(topo, src, dest) {

	  var linkSet = topo.getLinkSet(src.id(), dest.id());
	  if (linkSet !== null) {
	    return nx.util.values(linkSet.links());
	  }
	  return false;
	}
////  the code needed for displaying path - END//////
	

	// bind the topology object to the app
	topology.attach(app);

	// app must run inside a specific container. In our case this is the one with id="topology-container"
	app.container(document.getElementById("topology-container"));

})(nx);