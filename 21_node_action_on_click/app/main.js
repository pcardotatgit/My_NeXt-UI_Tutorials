(function(nx){
	nx.define('ExtendedScene', nx.graphic.Topology.DefaultScene, {
		methods: {
			clickNode: function(sender, node){
				this.inherited(sender, node);
				//alert("hello!"+node.id());
				popup = window.open( 'https://www.google.com', '1', 'toolbar=no,scrollbars=no,location=no,statusbar=no,menubar=no,resizable=yes,width=500,height=550' );
				popup.focus();
			}
		}
	});	
	
	// instantiate NeXt app
	var app = new nx.ui.Application();

	// instantiate Topology class
	var topology = new MyTopology();

	topology.on("ready", function(){
		// load topology data from app/data.js
		topology.data(topologyData);
		topology.registerScene('extended-scene', 'ExtendedScene');
		topology.activateScene('extended-scene');		
	});
	
	// load topology data from app/data.js
	topology.data(topologyData);

	// bind the topology object to the app
	topology.attach(app);

	// app must run inside a specific container. In our case this is the one with id="topology-container"
	app.container(document.getElementById("topology-container"));

})(nx);