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
						'color': 'model.color'
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
						nodeTooltipContentClass: 'MyNodeTooltip'
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
									"content":"DO Something !"
								}
							}								
					}												
				]			  
			}
	});	
    nx.define('MyNodeTooltip', nx.ui.Component, {
        properties: {		
            node: {},
            topology: {}		
        },
        view: {
            content: [			
			{
                tag: 'b',
                content: [ {
                    tag: 'span',
                    content: '{#node.id}'
                }]
            }
			]			
        }
		
    });	
})(nx);