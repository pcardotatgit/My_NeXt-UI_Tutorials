
nx.define('ExtendedNodeClass', nx.graphic.Topology.Node, {
     properties: {
        status : {
                set: function (inValue) {
                    var value = this._processPropertyValue(inValue);
                        if (value == 0) {
                            this.view('label').dom().setStyle('fill', 'green');
                            this.view('icon').set('color', 'green');
                            this._color = 'green';
                        } else if (value == 4) {
                            this.view('label').dom().setStyle('fill', 'black');
                            this.view('icon').set('color', 'orange');  
                            this._color =  'orange';
                        } else if (value == 8) {
                            this.view('label').dom().setStyle('fill', 'black');
                            this.view('icon').set('color', 'yellow');  
                            this._color =  'yellow';
                        } else if (value == 12) {
                            this.view('label').dom().setStyle('fill', 'black');
                            this.view('icon').set('color', 'purple');  
                            this._color =  'purple';
                        } else if (value == 16) {
                            this.view('label').dom().setStyle('fill', 'black');
                            this.view('icon').set('color', 'red');  
                            this._color =  'red';
                        } else {
                            this.view('label').dom().setStyle('fill', 'black');
                            this.view('icon').set('color', 'black');  
                            this._color =  'black';
                        }
                }
            },
        color: {
                set: function (inValue) {
                    var value = this._processPropertyValue(inValue);
                    this.view('label').dom().setStyle('fill', value);
                    this.view('icon').set('color', value);
                    this._color = value;
                }
            },
     },
     methods: {
         update: function() {
         this.inhereted();
         }
     }
 });
nx.define('ExtendedLinkClass', nx.graphic.Topology.Link, {
     properties: {
        srcmetric: {
                set: function(inValue) {
                    var value = this._processPropertyValue(inValue);
                    this._srcmetric = value;
                }
            },
        dstmetric: {
                set: function(inValue) {
                    var value = this._processPropertyValue(inValue);
                    this._dstmetric = value;
                }
            },
        status: {
                get: function() {
                    return this.status !== undefined ? this.status : '55';
                },
                set: function(inValue) {
                    var value = this._processPropertyValue(inValue);
                    if (value == 0) {
                            this.color('green');
                        } else if (value == 4) {
                            this.color('orange');
                        } else if (value == 8) {
                            this.color('yellow');
                        } else if (value == 12) {
                            this.color('purple');
                        } else if (value == 16) {
                            this.color('red');
                        } else {
                            this.color('black');
                        }
                    this._status = value;
                }
            },
         color: {
                get: function() {
                    return this.color !== undefined ? this.color : 'black';
                },
                set: function(inValue) {
                    var value = this._processPropertyValue(inValue);
                    this.view('line').dom().setStyle('stroke', value);
                    this.view('path').dom().setStyle('stroke', value);
                    this._color = value;
                }
            }   
     }
 });
nx.define('ExtendedLinkSetClass', nx.graphic.Topology.LinkSet, {
     properties: {
        links: {
                get: function () {
                    var links = {};
                    this.eachLink(function (link, id) {
                        links[id] = link;
                    }, this);
                    return links;
                }
            },
        color: {
                set: function (inValue) {
                    var value = this._processPropertyValue(inValue);
                    this.view('numBg').dom().setStyle('stroke', value);
                    this.view('path').dom().setStyle('stroke', value);
                    this._color = value;
                }
            }
     },
     methods: {
         update: function() {
                this.inherited();
                console.log("linkSet update triggered");
                var topo = this.topology();
                var model = this.model();
                var linkcount = 0;
                var errorcount = 0;
                var downcount = 0;
                nx.each(model.edges(), function (edge) {
                  console.log(edge);
                  var message="linkID:"+edge._data.id+" status:"+edge._data.status;
                  console.log(message);
                   if (edge._data.status >= 16) {
                        downcount++;
                    } else if (edge._data.status > 0) {
                        errorcount++;
                    }
                    linkcount++;                    
                });
                var message="linkcount:"+linkcount+" downcount:"+downcount+" errorcount:"+errorcount;
                console.log(message);
                if ((linkcount - downcount) == 0) {
                    this.view('numBg').dom().setStyle('stroke', 'red');
                    this.view('path').dom().setStyle('stroke', 'red');
                    this._color = 'red';
                } else if ((downcount) > 0) {
                    this.view('numBg').dom().setStyle('stroke', 'orange');
                    this.view('path').dom().setStyle('stroke', 'orange');
                    this._color = 'orange';
                } else if (errorcount > 0) {
                    this.view('numBg').dom().setStyle('stroke', 'yellow');
                    this.view('path').dom().setStyle('stroke', 'yellow');
                    this._color = 'yellow';
                } else {
                    this.view('numBg').dom().setStyle('stroke', 'green');
                    this.view('path').dom().setStyle('stroke', 'green');
                    this._color = 'green';
                }
         }
     }
 });
 nx.define('LinkSetTooltip', nx.ui.Component, {
        properties: {
            linkSet: {
                set: function (value) {
                    var items = [];
                    nx.each(value.model().edges(), function (edge) {
                        items.push({
                            item: edge});
                    });
                    this.view("tbody").items(items);
                }
            },
            topology: {}
        },
        view: {
          content: [{
              tag: "table",
              content: [
                  {
                    tag: "thead",
                    content:
						        {
                      tag: "tr",
                      content: [
                        {
                          tag: "td",
                          content: "name"
                        },
                        {
                          tag: "td",
                          content: "phone"
                        }
                      ]
						      },
                    
                  },
                  {
                  tag: "tbody",
                  name : "tbody",
                  props : {
                  template : {
                  tag: "tr",
                  content: [  
                    {
                      tag: "td",
                      content: "{item.id}"
                    },
                    {
                      tag: "td",
                      content: "{item.sourceID}"
                    }
                  ]
                  }
                  }
                  }
              ]
          }]
        },
        methods: {
            _click: function (sender, events) {
                var link = sender.model().edge;
            }
        }
});
topo = new nx.graphic.Topology({
  adaptive:true,
    showIcon: true,
    identityKey: 'id',
    nodeConfig: {
    label: 'model.id'
    },linkSetConfig: {
    color :  'yellow',
    linkKey : 'model_data.id',  
    },
    linkConfig: {
    linkType: 'parallel',
    linkKey : 'model_data.id',
    status: 'model.status',
    },
 	tooltipManagerConfig: {
 		linkSetTooltipContentClass: 'LinkSetTooltip',
 	},
  nodeInstanceClass : 'ExtendedNodeClass',
    linkInstanceClass : 'ExtendedLinkClass',
    linkSetInstanceClass : 'ExtendedLinkSetClass'

});


topo.on('ready',function(){
    topo.data(topologyData);
})

var app = new nx.ui.Application();
topo.attach(app);
//var myVar = setInterval(RefreshTime ,5000);
//var myVar = setTimeout(RefreshTime ,2000);


function RefreshTime() {

            nx.each(topologyUpdateData.nodes, function(nodeData) {
                var node = topo.getLayer("nodes")._MynodeDictionary.getItem(nodeData.id);
                //var node = topo.getNode(nodeData.id);
                if (typeof node !== "undefined") {
                node._data.status=nodeData.status;
                    if ( typeof topo.getNode(nodeData.id) !== "undefined" ) {
                    // update the nodeSet if its in the current scene
                        topo.getNode(nodeData.id).status(nodeData.status);
                        node._data.status=nodeData.status;
                    }
                } else {
                console.log("undefined node",nodeData.id)
                }
            });
            
            nx.each(topologyUpdateData.nodeSet, function(nodeData) {
                var node = topo.getLayer("nodes")._MynodeDictionary.getItem(nodeData.id);
                if (typeof node !== "undefined") {
                node._data.status=nodeData.status;
                    if ( typeof topo.getNode(nodeData.id) !== "undefined" ) {
                        // update the nodeSet if its in the current scene
                        topo.getNode(nodeData.id).status(nodeData.status);
                        node._data.status=nodeData.status;
                    }
                } else {
                  console.log("undefined node",nodeData.id)
                }
            });
            
             nx.each(topologyUpdateData.links, function(linkData) {
                var link = topo.getLayer("links")._MylinkDictionary.getItem(linkData.id);
                if (typeof link !== "undefined") {
                  link._data.status=linkData.status;
                    if ( typeof topo.getLink(linkData.id) !== "undefined" ) {
                        // update the link if its in the current scene
                        topo.getLink(linkData.id).status(linkData.status);
                        topo.getLink(linkData.id).update();
                    } else {
                      console.log("link is not in the current scene");
                    }
                } else {
                  console.log("undefined link:",linkData.id)
                }
    
            });
            
            var linkSetLayer = topo.getLayer("linkSet");
            linkSetLayer._linkSetDictionary.each(function(item, linkKey) {
            var linkset = topo.getLinkSetByLinkKey(linkKey);
            linkset.update();
            });
        
}

