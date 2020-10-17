(function (nx) {
	nx.define('MyTopology', nx.graphic.Topology, {
		methods: {
			"init": function(){
				this.inherited({
					// width 100% if true
					'adaptive': false,
					// show icons' nodes, otherwise display dots
					'showIcon': true,
					// special configuration for nodes
					'nodeConfig': {
						'label': 'model.name',
						'iconType': 'router',
						'color': '#0how00'
					},
					// special configuration for links
					'linkConfig': {
						'linkType': 'curve',
						'color': "model.color"
					},				
					// property name to identify unique nodes
					'identityKey': 'id', // helps to link source and target
					// canvas size
					'width': 1000,
					'height': 600,
					// "engine" that process topology prior to rendering
					//'dataProcessor': 'force',
					// moves the labels in order to avoid overlay
					'enableSmartLabel': true,
					// smooth scaling. may slow down, if true
					'enableGradualScaling': true,
					// if true, two nodes can have more than one link
					'supportMultipleLink': true,
					// enable scaling
					"scalable": true,
					tooltipManagerConfig: {
						linkTooltipContentClass: 'LinkTooltip',
					}					
				});
			}
		}
	});
	nx.define('LinkTooltip', nx.ui.Component, {
			properties: {
				link: {},
				topology: {}
			},
			view: 
			{
				content:
				[
					{
						// display a centered title
						tag:"h2",
						props:
						{
							"align":"center",
						},
						content:"Title"
					},
					{
						// display a table
						tag: "table",
						props :
						{
							// html tag table properties
							"border" : "1"
						},					  
					  content: [
						  {
							tag: "thead",
							props :
							{
								// html tag thead properties
								"align": "center",
								"bgcolor" : "aqua"
							},							
							content:
							{
							  tag: "tr",
							  content: [
								{
								  tag: "td",
								  content:"Name"
								},
								{
								  tag: "td",
								  content: "value"
								}
							  ]
							}							
						  },
						  {
							tag: "tbody",
							name : "tbody",
							tag: "tr",
							content: 
							[  
								{
								  tag: "td",
								  content: "TEST-X"
								},
								{
								  tag: "td",
								  content: "TEST-Y"
								}
							]							
						  }
					  ]
					},
					{
						// display an horisontal line
						tag:"hr"
					},
					{
						tag:'form',
						props:{
							"action":"https://www.google.com"
						},
						"content":
							{
								// display a centered button
								tag:"center",
								"content":{
									tag:"button",
									"props": {
										"type": "submit",							
									},
									"content":"BUTTON"
								}
							}								
					}
					
				]			  
			}
	});	
})(nx);