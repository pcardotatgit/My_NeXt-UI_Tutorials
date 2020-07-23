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
						'iconType': 'model.device_type',
						'color': 'model.color'
					},
					// special configuration for links
					'linkConfig': {
						'linkType': 'curve'
					},
					tooltipManagerConfig: {
						nodeTooltipContentClass: 'MyNodeTooltip'
					},					
					// property name to identify unique nodes
					'identityKey': 'id', // helps to link source and target
					// canvas size
					'width': 1000,
					'height': 600,					
					// "engine" that process topology prior to rendering
					//'dataProcessor': 'force',
					// moves the labels in order to avoid overlay
					//'enableSmartLabel': true,
					// smooth scaling. may slow down, if true
					//'enableGradualScaling': true,
					// if true, two nodes can have more than one link
					//'supportMultipleLink': true,
					// enable scaling
					//"scalable": true
				});
			}
		}
	});
    var mainModel = {
        username: 'root'
    };
    nx.define('MyNodeTooltip', nx.ui.Component, {
        properties: {		
            node: {},
            topology: {}		
        },
        view: {
            content: [{
                tag: 'h2',
				content: '{#node.x}'
            }, {
                tag: 'p',
                content: [{
                    tag: 'label',
                    content: 'Username'
                }, {
                    tag: 'span',
                    content: '{username}'
                }]
            }, {
                tag: 'p',
                content: '{#topology.width}'
            },{
				tag: 'div',
				'content': [
					{
						'tag': 'form',
						'props': {
							'action': 'https://www.google.com'
						},
						'content': [
							{
								'tag': 'button',
								'props': {
									'type': 'submit',
									'value':'ENVOYER',
									'class':'btn btn-warning'
								},
								'content':'GO TO GOOGLE'
							}
						]
					}
				]
			},
			{
                tag: "table",
                props: {
                    class: "col-md-12",
                    border: "1"
                },
                content: [{
                    tag: "thead",
                    content: {
                        tag: "tr",
                        content: [{
                            tag: "td"
                        }, {
                            tag: "td",
                            content: "pkts"
                        }, {
                            tag: "td",
                            content: "bytes"
                        }]
                    }
                }, {
                    tag: "tbody",
                    props: {
                        items: "{#node.model.data}",
                        template: {
                            tag: "tr",
                            content: [{
                                tag: "td",
                                content: "{nodeName}"
                            }, {
                                tag: "td",
                                content: "{packets}"
                            }, {
                                tag: "td",
                                content: "{bytes}"
                            }]
                        }
                    }
                }]
            }],
			// applies to the whole tooltip box
			props: {
				// css class; see style.css pour la taille du tool tips
				'class': 'custom-tooltip'
			}			
        }
		
    });
	// ci dessous faire apparaître unde topologie dans le tooltips
    nx.define('Tooltip.Node', nx.ui.Component, {
        view: {
            content: {
                name: 'topo',
                type: 'nx.graphic.Topology',
                props: {
                    adaptive: true,
                    nodeConfig: {
                        label: 'model.id'
                    },
                    linkConfig: {
                        linkType: 'curve'
                    },
                    tooltipManagerConfig: {
                        nodeTooltipContentClass: 'MyNodeTooltip'
                    },
                    showIcon: true,
                    data: topologyData
                }
            }
        },
        methods: {
            attach: function(args) {
                this.inherited(args);
                this.model(mainModel);
            }
        }
    });	
})(nx);