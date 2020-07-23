nx.define("DynamicTooltipClass", nx.ui.Component, {
  'events': ['setNode'],
  'properties': {
    "nodeModel": {},
    "node": {
      "set": function(node) {
        this._node = node;
        this.fire("setNode");
      }
    },
    "topology": {},
    "tooltips": {}
  },
  "view": {
    content: {
      name: "myNodeTooltip",
      content: "test"
    }
  },
  "methods": {
    "init": function(args) {
      this.inherited(args);
      this.sets(args);

      this._initTooltips();

      this.on("setNode", function() {

        this.nodeModel(this.node().model()._data);

        var nodeType = this.node().model().get("nodeType");
        this._setTooltip(nodeType);
      });

      
    },
    "_setTooltip": function(type) {
        this.view("myNodeTooltip").set("content", this._getTooltip(type));
    },

    "_getTooltip": function(type) {
      return this.tooltips().getItem(type);
    },

    "_initTooltips": function() {

      var tooltipDict = new nx.data.Dictionary({});

      // type 1
      tooltipDict.setItem("type1", {
        content: "This is tooltip template for node type #1"
      });

      // type 2
      tooltipDict.setItem("type2", {
        "content": [{
            "content": "The tooltip for type2 is little bit different",
            "props": {
              "style": "font-weight: bold;"
            }
          },
          [{
            "tag": "span",
            "content": "Name: "
          }, {
            "tag": "span",
            "content": "{#node.x}",
          }]
        ]
      });

      this.tooltips(tooltipDict);

    }
  }
});


nx.define("ExtendedTooltipPolicy",nx.graphic.Topology.TooltipPolicy, {

	"properties": {
		topology: {},
		tooltipManager: {}
	},

	"methods": {

		// inherit methods and properties from base class (nx.graphic.Topology.TooltipPolicy)
		"init": function(args){
			this.inherited(args);
			this.sets(args);
			this._tm = this.tooltipManager();
		},

		// disable default behavior: "click" closes the tooltip
		"clickNode": function(node){
      
      var blackList = ["type3"];
      var nodeType = node.model().get("nodeType");
      
      // if node type exists in the black list: close tooltips
      if(blackList.indexOf(nodeType) === -1){
        topo.tooltipManager().openNodeTooltip(node);
      }
      // otherwise, show the pop-up
      else{
        this._tm.closeAll();
      }
      
			
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
  },
  tooltipManagerConfig: {
    nodeTooltipContentClass: "DynamicTooltipClass"
  }
});

topo.tooltipManager().tooltipPolicyClass('ExtendedTooltipPolicy');

//set data
topo.on('ready', function() {
  topo.data(topologyData);
});

//create app
var app = new nx.ui.Application();
//attach topo to app;
topo.attach(app);

var topologyData = {
  nodes: [{
    "id": 0,
    "x": 410,
    "y": 100,
    "name": "12K-1",
    "nodeType": "type1"
  }, {
    "id": 1,
    "x": 410,
    "y": 280,
    "name": "12K-2",
    "nodeType": "type1"
  }, {
    "id": 2,
    "x": 660,
    "y": 280,
    "name": "Of-9k-03",
    "nodeType": "type1"
  }, {
    "id": 3,
    "x": 660,
    "y": 100,
    "name": "Of-9k-02",
    "nodeType": "type2"
  }, {
    "id": 4,
    "x": 180,
    "y": 190,
    "name": "Of-9k-01",
    "nodeType": "type3"
  }],
  links: [{
    "source": 0,
    "target": 1
  }, {
    "source": 1,
    "target": 2
  }, {
    "source": 1,
    "target": 3
  }, {
    "source": 4,
    "target": 1
  }, {
    "source": 2,
    "target": 3
  }, {
    "source": 2,
    "target": 0
  }, {
    "source": 3,
    "target": 0
  }, {
    "source": 3,
    "target": 0
  }, {
    "source": 3,
    "target": 0
  }, {
    "source": 0,
    "target": 4
  }, {
    "source": 0,
    "target": 4
  }]
};