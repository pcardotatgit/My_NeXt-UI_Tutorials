nx.define('ExtendedScene', nx.graphic.Topology.DefaultScene, {
	methods: {
		clickNode: function(sender, node){
			this.inherited(sender, node);
			alert("hello!");
		}
	}
});

//initialize a topology component
var topo = new nx.graphic.Topology({
  width: 800,
  height: 600,
  showIcon: true,
  nodeConfig: {
    label: 'model.name'
  },
  linkConfig: {
    linkType: 'parallel'
  }
});

//set data
topo.on('ready', function() {
  topo.data(topologyData);
  topo.registerScene('extended-scene', 'ExtendedScene');
  topo.activateScene('extended-scene');
});

//create app
var app = new nx.ui.Application();
//attach topo to app;
topo.attach(app);

