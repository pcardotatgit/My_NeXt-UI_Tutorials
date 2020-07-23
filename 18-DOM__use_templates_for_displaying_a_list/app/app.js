//create app
var app = new nx.ui.Application();

nx.define("ContactList", nx.ui.Component, {
    view: {
        tag: 'ul',
        props: {
        	  // items to iterate on
            items: '{#contacts}',
            // template for iterations (will remain the same for the items)
            template: {
                tag: 'li',
                content: [
                    {
                    	"tag": "span",
                        "content": "{name}",
                        "props": {
                        	"style": "font-weight: bold;"
                        }
                    },
                    {
                      "tag": "span",
                      "content": ": "
                    },
                    {
                    	"tag": "span",
                    	"content": "{phone}"
                    }
                ]
            },
            props: {
                // any HTML attributes go here
            }
        }
    },
    properties: {
        contacts: null
    }
});

// input array
var contacts = [
	{
		"name": "Machin",
		"phone": "+33333333333"
	},
	{
		"name": "Chose",
		"phone": "+22222222222"
	},
	{
		"name": "Toto",
		"phone": "+444444444444"
	}
];

// create new UI component
var contactList = new ContactList();
// pass the input array and render it in UI
contactList.contacts(contacts);

//attach the component to app;
contactList.attach(app);

