(function(nx){
    // instantiate NeXt app
    var app = new nx.ui.Application();
    // configuration object for next
    var topologyConfig = {
		// canvas size
		"width":600,
		"height":600,
        // special configuration for nodes
        "nodeConfig": {
            "label": "model.name",
            "iconType": "model.icon",
			"color": "model.color"
        },
        // special configuration for links
        "linkConfig": {
            "linkType": "curve"
        },
        // if true, the nodes' icons are shown, otherwise a user sees a dot instead
        "showIcon": true,
        // automatically compute the position of nodes
        "dataProcessor": "force"
    };

    // instantiate Topology class
    var topology = new nx.graphic.Topology(topologyConfig);
	// add new icons
	topology.registerIcon("warning", "icons/warning.jpg", 40, 48);	
	topology.registerIcon("icon1", "https://www.google.com/images/srpr/logo11w.png", 80, 32);
    // load topology data from app/data.js
    topology.data(topologyData);
    // bind the topology object to the app
    topology.attach(app);
    // app must run inside a specific container. In our case this is the one with id="topology-container"
    app.container(document.getElementById("topology-container"));
})(nx);
