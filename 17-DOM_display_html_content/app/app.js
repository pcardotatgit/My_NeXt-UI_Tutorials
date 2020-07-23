nx.define("MyComponent", nx.ui.Component, {
	"view": {
		"content": [
			{
				"tag": "div",
				"content": "<h1>html content here - look at app.js</h1>",
				"props": {
					"style": "color: #f00;"
				}
			},
			{
				"tag": "div",
				"tag": "h1",
				"content": "ANOTHER HTML CONTENT CORRECTLY DISPLAYED",
				"props": {
					"style": "color: #00f;"
				}
			}
		]
	}
});

var myc = new MyComponent();

//create app
var app = new nx.ui.Application();
//attach topo to app;
myc.attach(app);
