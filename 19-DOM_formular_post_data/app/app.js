nx.define("ExampleForm", nx.ui.Component, {
	"properties": {
		"name": "Jack"
	},
	"view": {
		"content": [
			{
				"tag": "form",
				"props": {
					"action": "next.php",
					"method": "post",
					"content": [
					{
						"tag": "input",
						"props": {
							"value": "{#name}",
							"name": "nom"
						}
					},
					{
						"tag": "button",
						"props": {
							"type": "submit",
							
						},
						"content":"ENVOYER"
					}
					]
				}
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