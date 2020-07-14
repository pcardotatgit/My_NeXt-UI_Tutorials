nx.define('MyExtendLink', nx.graphic.Topology.Link, {
    properties: {
        sourcelabel: 'null',
        targetlabel: 'null'
    },
    view: function(view) {
        view.content.push({
            name: 'source',
            type: 'nx.graphic.Text',
            props: {
                'class': 'sourcelabel',
                'alignment-baseline': 'text-after-edge',
                'text-anchor': 'start'
            }
        }, {
            name: 'sourcedesc',
            type: 'nx.graphic.Text',
            props: {
                'class': 'sourcedesc',
                'alignment-baseline': 'text-after-edge',
                'text-anchor': 'start'
            }
        },{
            name: 'target',
            type: 'nx.graphic.Text',
            props: {
                'class': 'targetlabel',
                'alignment-baseline': 'text-after-edge',
                'text-anchor': 'end'
            }
        });
        
        return view;
    },
    methods: {
      
        update: function() {
            
            this.inherited();
            var el, point;
   
            var line = this.line();
            var angle = line.angle();
            var stageScale = this.stageScale();
            
            // pad line
            line = line.pad(18 * stageScale, 18 * stageScale);
                 var canvas = document.getElementsByTagName("canvas")[0];
          var context = canvas.getContext("2d");
          var fontsize = 16 * stageScale;
          context.font =fontsize+'px Cisco Sans Reg';
            var labelsInTheLine=this.sourcelabel()+"  "+this.targetlabel();
           console.log("before calculating total text length:"+context.measureText(labelsInTheLine).width+ ' font size:'+fontsize+ " line length:"+line.length());


               while (context.measureText(labelsInTheLine).width > line.length() ) {
                 if ( fontsize === 6) { break; } //smallest fontsize 
                 fontsize--;
                 context.font =fontsize+'px Cisco Sans Reg';
                 console.log("total text length:"+context.measureText(labelsInTheLine).width+ ' font size:'+fontsize+ " line length:"+line.length());
                } 
            
            if (this.sourcelabel()) {
                el = this.view('source');
                point = line.start;
                 var textangle = angle;
               if (!(textangle>-90 && textangle<90)) {
                textangle=textangle+180;
                el.setStyle('text-anchor','end');
                } else {
                el.setStyle('text-anchor','start');
                }
                var sx = line.start.x+(5*Math.sin(textangle * (Math.PI / 180)));
                var sy = line.start.y-(5*Math.cos(textangle * (Math.PI / 180)));
                el.set('x', sx);
                el.set('y', sy);
                el.set('text', this.sourcelabel());
                el.set('transform', 'rotate(' + textangle + ' ' + sx + ',' + sy + ')');
                el.setStyle('font-size', fontsize);
            }
            if (this.targetlabel()) {
                el = this.view('target');
                var textangle = angle;
                var tx = line.end.x+(5*Math.sin(textangle * (Math.PI / 180)));
                var ty = line.end.y-(5*Math.cos(textangle * (Math.PI / 180)));
                if (!(textangle>-90 && textangle<90)) {
                var tx = line.end.x-(5*Math.sin(textangle * (Math.PI / 180)));
                var ty = line.end.y+(5*Math.cos(textangle * (Math.PI / 180)));
                el.setStyle('text-anchor','start');
                textangle=textangle+180
                } else {
                el.setStyle('text-anchor','end');
                }
                el.set('x', tx);
                el.set('y', ty);
                el.set('text', this.targetlabel());
                el.set('transform', 'rotate(' + textangle + ' ' + tx + ',' + ty + ')');
                el.setStyle('font-size', fontsize);
            }


                
        }
    }
});
nx.define('MyLinkTooltip', nx.ui.Component, {
        properties: {
            link: {
                set: function (value) {
                    this._link=value;
                    var timestamp = value.model()._data.timestamp;
                  timestamp = timestamp.replace(/^"(.*)"$/, '$1');
                    console.log(Math.floor(Date.now() / 1000));
                    var d = new Date(timestamp);	// Convert the passed timestamp to milliseconds
                  console.log(d.getTime());
                  var yyyy = d.getFullYear();
                  console.log("y:"+yyyy);
                }
            
            },
            topology: {}
        },
        view: {
            content: [{
                tag: 'p',
                content: [{
                    tag: 'label',
                    content: 'Source'
                }, {
                    tag: 'span',
                    content: '{#link.sourceNodeID}'
                }, {
                    tag: 'label',
                    content: 'Target'
                }, {
                    tag: 'span',
                    content: '{#link.targetNodeID}'
                }]
            }, {
                tag: 'p',
                content: '{#link.model.timestamp}'
            }]
        },
          methods: {
            _click: function (sender, events) {
                var link = sender.model().edge;
            }
        }
    });
nx.define('MyNodeTooltip', nx.ui.Component, {
        properties: {
            node: {
                set: function (value) {
                    var model = value.model();
                    this.view('list').set('items', new nx.data.Dictionary(model.getData()));
                    this.title(value.label());
                }
            },
            topology: {},
            title: {
                get: function () {
                    return this._title;
                },
                set: function (value) {
                      if (value) {
                          this.view("title").dom().setStyle("color", "red");
                           this._title='source';
                      } else {
                          //this.view("title").dom().setStyle("display", "none");
                      }

                      if (this._title != value) {
                          this._title = value;
                          return true;
                      } else {
                          return false;
                      }
                  }
              }
        },
        view: {
            content: [
                {
                    name: 'header',
                    props: {
                        'class': 'n-topology-tooltip-header'
                    },
                    content: [
                        {
                            tag: 'span',
                            props: {
                                'class': 'n-topology-tooltip-header-text'
                            },
                            name: 'title',
                            content: '{#title}'
                        }
                    ]
                },
                {
                    name: 'content',
                    props: {
                        'class': 'n-topology-tooltip-content n-list'
                    },
                    content: [
                        {
                            name: 'list',
                            tag: 'ul',
                            props: {
                                'class': 'n-list-wrap',
                                template: {
                                    tag: 'li',
                                    props: {
                                        'class': 'n-list-item-i',
                                        role: 'listitem'
                                    },
                                    content: [
                                        {
                                            tag: 'label',
                                            content: '{key}: '
                                        },
                                        {
                                            tag: 'span',
                                            content: '{value}'
                                        }
                                    ]

                                }
                            }
                        }
                    ]
                }
            ]
        },
        methods: {
            init: function (args) {
                this.inherited(args);
                this.sets(args);
            }
        }
    });


var topo = new nx.graphic.Topology({
    adaptive: true,
    nodeConfig: {
        label: 'model.name'
    },
    nodeSetConfig: {
        label: 'model.name'
    },
    linkConfig: {
        linkType: 'parallel',
                sourcelabel: 'model.sourcelabel',
                timestamp: 'model.timestamp',
                targetlabel: 'model.targetlabel'
    },
    showIcon: true,
    tooltipManagerConfig: {
   nodeTooltipContentClass: 'MyNodeTooltip',
  },
    linkInstanceClass: 'MyExtendLink' // set the link class
});



topo.on('ready', function () {
    topo.data(topologyData);
});

//app
var app = new nx.ui.Application();
topo.attach(app);

var topologyData = {
    "nodes": [{
        "id": 0,
        "name": "source",
        "x": 490.2062921863415,
        "y": -110.45390150953385
    }, {
        "id": 1,
        "name": "target",
        "x": -331.07087666658816,
        "y": -103.24153109870315
    }],
    "links": [{
        "id": 0,
        "source": 0,
       "sourcelabel" : "G0/0/0/0/1.20006",
        "targetlabel" : "T0/0/0/0/1.2000",
        "target": 1,
        
    },],
    "nodeSet": []
}