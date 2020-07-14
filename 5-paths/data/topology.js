	var topologyData = {
	  // define 3 nodess
	  "nodes": [{
	    "id": 0,
		x: 400, 
		y: -100,		
	    "name": "San Francisco",
		"device_type":"switch"
	  }, {
	    "id": 1,
		x: 400, 
		y: 0,
	    "name": "Los Angeles",
		"device_type":"switch"		
	  }, {
	    "id": 2,
		x: 400, 
		y: 100,
	    "name": "New York",
		"device_type":"switch"		
	  }, {
	    "id": 3,
		x: 600, 
		y: 100,
	    "name": "Houston"
	  }, {
	    "id": 4,
		x: 200, 
		y: 200,
	    "name": "New Jersey"
	  }, {
	    "id": 5,
		x: 400, 
		y: 200,
	    "name": "Salt Lake City"
	  }],
	  "links": [{
	    "source": "San Francisco",
	    "target": "Los Angeles"
	  }, {
	    "source": "Los Angeles",
	    "target": "New York"
	  }, {
	    "source": "Houston",
	    "target": "New York"
	  }, {
	    "source": "New Jersey",
	    "target": "New York"
	  }, {
	    "source": "Salt Lake City",
	    "target": "New York"
	  }, {
	    "source": "Houston",
	    "target": "Los Angeles"
	  }, {
	    "source": "Salt Lake City",
	    "target": "Houston"
	  }, {
	    "source": "New Jersey",
	    "target": "Houston"
	  }]
	};
