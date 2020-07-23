nx.define('MyExtendLink', nx.graphic.Topology.Link, {
    properties: {
        sourcelabel: null,
        sourcecolor :  '#0011ff',
        targetlabel: null
    },
    view: function(view) {
        view.content.push({
            name: 'source',
            type: 'nx.graphic.Text',
            props: {
                'class': 'sourcelabel',
                 'fill' : 'sourcecolor',
                'alignment-baseline': 'text-after-edge',
                'text-anchor': 'start'
            }
        }, {
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
            
            if (this.sourcelabel()) {
                el = this.view('source');
                point = line.start;
                el.set('x', point.x);
                el.set('y', point.y);
                el.set('text', this.sourcelabel());
                el.set('transform', 'rotate(' + angle + ' ' + point.x + ',' + point.y + ')');
                el.setStyle('font-size', 12 * stageScale);
            }
            
            
            if (this.targetlabel()) {
                el = this.view('target');
                point = line.end;
                el.set('x', point.x);
                el.set('y', point.y);
                el.set('text', this.targetlabel());
                el.set('transform', 'rotate(' + angle + ' ' + point.x + ',' + point.y + ')');
                el.setStyle('font-size', 12 * stageScale);
            }
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
                sourcelabel: 'model.srcTrafficMap.Default.EMPTYQUEUE',
                targetlabel: 'model.tgtTrafficMap.Default.EMPTYQUEUE'
    },
    showIcon: true,
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
        "name": "SJC-0",
        "longitude": -111.5063870293093,
        "latitude": 45.9189159739438,
        "isActive": true,
        "index": 0,
        "weight": 0,
        "x": 490.2062921863415,
        "y": -110.45390150953385,
        "px": 157.46154658695713,
        "py": -95.59987534722373
    }, {
        "id": 1,
        "name": "SJC-1",
        "longitude": -120.821987029309,
        "latitude": 36.1335825345565,
        "isActive": true,
        "index": 1,
        "weight": 0,
        "x": -331.07087666658816,
        "y": -103.24153109870315,
        "px": -58.29510161320293,
        "py": 194.05032658683652
    }, {
        "id": 2,
        "name": "SJC-2",
        "longitude": -121.801,
        "latitude": 46.5306,
        "isActive": true,
        "index": 2,
        "weight": 0,
        "x": -27.032105478883352,
        "y": -108.8149899693051,
        "px": -27.02912662826393,
        "py": -108.74513245014197
    }, {
        "id": 3,
        "name": "NYC-3",
        "x": 551.1799992926093,
        "y": 200.15306778945478,
        "longitude": -73.7391460371094,
        "latitude": 45.3935305430517,
        "isActive": false,
        "index": 3,
        "weight": 0,
        "px": 113.32181447959563,
        "py": 200.07641190568663
    }, {
        "id": 4,
        "name": "NYC-4",
        "x": 271.6847872684018,
        "y": 3.8493599324645675,
        "longitude": -76.8641460371094,
        "latitude": 32.3144502251186,
        "isActive": true,
        "index": 4,
        "weight": 0,
        "px": -93.74489154930534,
        "py": 37.54542225948876
    }, {
        "id": 5,
        "name": "NYC-5",
        "x": -26.810317044921597,
        "y": 203.85257869994675,
        "longitude": -70.6637460371094,
        "latitude": 34.8443888602803,
        "isActive": false,
        "index": 5,
        "weight": 0,
        "px": 213.79736534432473,
        "py": 67.47904143884969
    }],
    "links": [{
        "id": 0,
        "source": 5,
        "target": 3,
        "srcUtilMap": {
            "Default": {
                "EMPTYQUEUE": 20
            }
        },
        "tgtUtilMap": {
            "Default": {
                "EMPTYQUEUE": 30
            }
        },
        "srcUtil": 20,
        "tgtUtil": 0,
        "curvePoint1Position": [44.7906171422464, -72.67513669109276],
        "curvePoint2Position": [46.5235580044612, -121.7193617222874],
        "srcCapacity": 10000,
        "tgtCapacity": 10000,
        "srcTrafficMap": {
            "Default": {
                "EMPTYQUEUE": 2000
            }
        },
        "tgtTrafficMap": {
            "Default": {
                "EMPTYQUEUE": 3000
            }
        },
        "srcTraffic": 0,
        "tgtTraffic": 0,
        "isActive": true
    }, {
        "id": 1,
        "source": 4,
        "target": 3,
        "srcUtilMap": {
            "Default": {
                "EMPTYQUEUE": 85
            }
        },
        "tgtUtilMap": {
            "Default": {
                "EMPTYQUEUE": 34
            }
        },
        "srcUtil": 70,
        "tgtUtil": 30,
        "curvePoint1Position": [42.303252889539316, -76.87990945757291],
        "curvePoint2Position": [45.39678138241343, -73.75333835254331],
        "srcCapacity": 10000,
        "tgtCapacity": 10000,
        "srcTrafficMap": {
            "Default": {
                "EMPTYQUEUE": 8500
            }
        },
        "tgtTrafficMap": {
            "Default": {
                "EMPTYQUEUE": 3400
            }
        },
        "srcTraffic": 0,
        "tgtTraffic": 0,
        "isActive": true
    }, {
        "id": 2,
        "source": 5,
        "target": 4,
        "srcUtilMap": {
            "Default": {
                "EMPTYQUEUE": 55.00000000000001
            }
        },
        "tgtUtilMap": {
            "Default": {
                "EMPTYQUEUE": 45
            }
        },
        "srcUtil": 0,
        "tgtUtil": 0,
        "srcCapacity": 10000,
        "tgtCapacity": 10000,
        "srcTrafficMap": {
            "Default": {
                "EMPTYQUEUE": 5500
            }
        },
        "tgtTrafficMap": {
            "Default": {
                "EMPTYQUEUE": 4500
            }
        },
        "srcTraffic": 0,
        "tgtTraffic": 0,
        "isActive": true
    }, {
        "id": 3,
        "source": 2,
        "target": 0,
        "srcUtilMap": {
            "Default": {
                "EMPTYQUEUE": 95
            }
        },
        "tgtUtilMap": {
            "Default": {
                "EMPTYQUEUE": 25
            }
        },
        "srcUtil": 0,
        "tgtUtil": 0,
        "curvePoint1Position": [46.530565733480316, -121.80224894350945],
        "curvePoint2Position": [45.9189159739438, -99.5063870293093],
        "srcCapacity": 10000,
        "tgtCapacity": 10000,
        "srcTrafficMap": {
            "Default": {
                "EMPTYQUEUE": 9500
            }
        },
        "tgtTrafficMap": {
            "Default": {
                "EMPTYQUEUE": 2500
            }
        },
        "srcTraffic": 0,
        "tgtTraffic": 0,
        "isActive": true
    }, {
        "id": 4,
        "source": 5,
        "target": 2,
        "srcUtilMap": {
            "Default": {
                "EMPTYQUEUE": 60
            }
        },
        "tgtUtilMap": {
            "Default": {
                "EMPTYQUEUE": 60
            }
        },
        "srcUtil": 0,
        "tgtUtil": 0,
        "curvePoint1Position": [44.75732404660327, -69.63851430461955],
        "curvePoint2Position": [46.51871542764465, -123.91025254101761],
        "srcCapacity": 10000,
        "tgtCapacity": 10000,
        "srcTrafficMap": {
            "Default": {
                "EMPTYQUEUE": 6000
            }
        },
        "tgtTrafficMap": {
            "Default": {
                "EMPTYQUEUE": 6000
            }
        },
        "srcTraffic": 0,
        "tgtTraffic": 0,
        "isActive": true
    }, {
        "id": 5,
        "source": 5,
        "target": 3,
        "srcUtilMap": {
            "Default": {
                "EMPTYQUEUE": 20
            }
        },
        "tgtUtilMap": {
            "Default": {
                "EMPTYQUEUE": 30
            }
        },
        "srcUtil": 0,
        "tgtUtil": 0,
        "srcCapacity": 10000,
        "tgtCapacity": 10000,
        "srcTrafficMap": {
            "Default": {
                "EMPTYQUEUE": 2000
            }
        },
        "tgtTrafficMap": {
            "Default": {
                "EMPTYQUEUE": 3000
            }
        },
        "srcTraffic": 0,
        "tgtTraffic": 0,
        "isActive": true
    }, {
        "id": 6,
        "source": 1,
        "target": 2,
        "srcUtilMap": {
            "Default": {
                "EMPTYQUEUE": 35
            }
        },
        "tgtUtilMap": {
            "Default": {
                "EMPTYQUEUE": 55.00000000000001
            }
        },
        "srcUtil": 0,
        "tgtUtil": 0,
        "curvePoint1Position": [35.969045181023695, -120.79442185716769],
        "curvePoint2Position": [46.266906715175956, -121.78336028240378],
        "srcCapacity": 10000,
        "tgtCapacity": 10000,
        "srcTrafficMap": {
            "Default": {
                "EMPTYQUEUE": 3500
            }
        },
        "tgtTrafficMap": {
            "Default": {
                "EMPTYQUEUE": 5500
            }
        },
        "srcTraffic": 0,
        "tgtTraffic": 0,
        "isActive": true
    }],
    "nodeSet": []
}