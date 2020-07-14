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
            color: "model.color",
		},
		// configuration for links
		linkConfig: {
            linkType: "straight",
            color: "model.color"
		},
		// if true, the nodes' icons are shown, a dot is shown instead
		showIcon: true,
	};

	// instantiate Topology class
	const topology = new nx.graphic.Topology(topologyConfig);

	// load topology data from app/data.js
	topology.data(topologyData);

	// bind the topology object to the app
	topology.attach(app);

	// app must run inside a specific container. In our case this is the one with id="topology-container"
	app.container(document.getElementById("topology-container"));

})(nx);