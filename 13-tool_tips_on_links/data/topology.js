var topologyData = {
        nodes: [{
            "id": 0,
            "x": 410,
            "y": 100,
            "name": "c0"
        }, {
            "id": 1,
            "x": 410,
            "y": 280,
            "name": "c1"
        }, {
            "id": 2,
            "x": 660,
            "y": 280,
            "name": "c2"
        }, {
            "id": 3,
            "x": 660,
            "y": 100,
            "name": "c4"
        }],
        nodeSet: [{
        "id": 666000,
            "root": 0,
            "nodes": [0],
            "name": "r0",
            "x": 410,
            "y": 100,
        },{
        "id": 666001,
            "root": 1,
            "nodes": [1],
            "name": "r1",
            "x": 410,
            "y": 280,
        },{
        "id": 666002,
            "root": 2,
            "nodes": [2],
            "name": "r2",
             "x": 660,
            "y": 280,
        },{
        "id": 666003,
            "root": 3,
            "nodes": [3],
            "name": "r3",
             "x": 660,
            "y": 100,
        },{
        "id": 666004,
            "root": 666000,
            "nodes": [666000,666001],
            "name": "pop1",
            "x": 410,
            "y": 100,
        }],
        links: [{
        		"id" : 555000,
            "status": 0,
            "source": 0,
            "target": 1
        },{
        		"id" : 555001,
            "status": 0,
            "source": 0,
            "target": 3
        },{
        		"id" : 555002,
            "status": 0,
            "source": 1,
            "target": 3
        },{
        		"id" : 555003,
            "status": 0,
            "source": 2,
            "target": 3
        } ,{
        		"id" : 555004,
            "status": 0,
            "source": 2,
            "target": 3
        },{
        		"id" : 555005,
          "status": 0,
            "source": 0,
            "target": 3
        }]
    };
var topologyUpdateData = {
  nodes: [{
            "id": 0
        }],
  links: [
          {
        		"id" : 555005,
            "status": 16
          },
          {
        		"id" : 555003,
            "status": 16
          },
          {
        		"id" : 555004,
            "status": 16
          }
        ]
};