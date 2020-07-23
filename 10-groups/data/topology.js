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
			"name": "San Diego"
		},
		{
			"id": 3,
			"name": "Dallas"
		},
		{
			"id": 4,
			"name": "San Antonio"
		}
	],
	// and links
	"links": [
		{
			"source": "San Francisco",
			"target": "Los Angeles"
		},
		{
			"source": "San Francisco",
			"target": "Dallas"
		},
		{
			"source": "San Antonio",
			"target": "Dallas"
		},
		{
			"source": "San Diego",
			"target": "Los Angeles"
		},
		{
			"source": "San Antonio",
			"target": "San Diego"
		}
	]
};