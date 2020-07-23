nx.define("ExampleForm", nx.ui.Component, {
	"properties": {
		// name to display
		"name": "",
		// name to change from form
		"tempName": ""
	},
	"methods": {
		"saveName": function(){
			// use a setter over getter
			this.name(this.tempName());
		}
	},
	"view": {
		"content": [
			{
				"tag": "div",
				"content": [
					{
						"tag": "input",
						"props": {
							"value": "{#tempName}"
						}
					},
					{
						"tag": "button",
						"content": "Save",
						"events": {
							"click": "{#saveName}"
						}
					}
				]
			},
			{
				"tag": "div",
				"content": [
					{
						"tag": "span",
						"content": "Name: ",
						"props": {
							"style": "font-weight: bold;"
						}
					},
					{
						"tag": "span",
						"content": "{#name}"
					}
				]
			}
		]
	}
});

//create app
var app = new nx.ui.Application();
var form = new ExampleForm();
//attach topo to app;
form.attach(app);