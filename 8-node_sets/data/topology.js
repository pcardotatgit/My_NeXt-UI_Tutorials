var topologyData = {
	// define 3 nodess
	"nodes": [
		{
			"id": 0,
			"name": "San Francisco"
		},
		{
			"id": 1,
			"name": "Los Angeles"
		},
		{
			"id": 2,
			"name": "New York"
		}
	],
	// and links
	"links": [
		{
			"source": 0,
			"target": 1
		},
		{
			"source": 1,
			"target": 2
		}
	],
	// unite nodes with IDs 0 & 1 into a nodeset
	"nodeSet": [
		{
			"id": 3,
			"nodes": [0, 1]
		}
	]
};