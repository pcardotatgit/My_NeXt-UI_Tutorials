nx.define("ContactModel", {
	properties: {
		firstName: null,
		lastName: null,
		title: {
			get: function(){
				return (this.gender === "male") ? "Mr." : "Ms."
			}
		},
		fullName: {
			get: function () {
				return this.title() + " " + this.firstName() + " " + this.lastName();
			}
		}
	},
	methods: {
		init: function (args) {
			this.inherited();
			this.sets(args);
		}
	}
});

nx.define('ContactView', nx.ui.Component, {
	view: {
		content: [
			{
				tag: 'input',
				props: {
					'class': 'input-search',
					value: '{filterKey}',
					placeholder: 'Search...'
				}
			},
			{
				tag: 'hr'
			},
			{
				tag: 'ul',
				props: {
					'class': 'contact-list',
					template: {
						tag: 'li',
						events: {
							click: '{showInfo}'
						},
						content: [
							{
								tag: 'div',
								content: '{fullName}',
								props: {
									style: "font-size: 24px; font-weight: bold;"
								}
							},
							{
								tag: "div",
								content: "{phone}",
								props: {
									style: "font-weight: bold;"
								}
							},
							{
								tag: 'small',
								content: '{company}'
							}
						]
					},
					items: '{filteredContacts}'
				}
			}
		]
	}
});

nx.define('ContactViewModel', nx.data.ObservableObject, {
	properties: {
		contacts: null,
		filteredContacts: null,
		filterKey: {
			get: function () {
				return this._filterKey;
			},
			set: function (value) {
				this._filterKey = value;
				this.filter(value);
			}
		}
	},
	methods: {
		init: function () {
			this.inherited();
			this.contacts(new nx.data.ObservableCollection());
			this.filteredContacts(new nx.data.ObservableCollection());
			this.load(contacts);
		},
		load: function (contacts) {
			contacts.forEach(function (item) {
				this.contacts().add(new ContactModel(item));
				this.filter(null);
			}, this);
		},
		filter: function (key) {
			this.filteredContacts().clear();
			this.contacts().each(function (contact) {
				if (!key || contact.fullName().toLowerCase().indexOf(key) >= 0) {
					this.filteredContacts().add(contact);
				}
			}, this);
		}
	}
});

var contacts = [
	{
		"firstName": "Harry",
		"lastName": "Potter",
		"company": "Hogwarts",
		"phone": "+44 555 1997000",
		"gender": "male"
	},
	{
		"firstName": "Dorian",
		"lastName": "Gray",
		"company": "Passion, Inc.",
		"phone": "+44 555 6660666",
		"gender": "male"
	},
	{
		"firstName": "Frank",
		"lastName": "Cowperwood",
		"company": "Cowperwood and Company",
		"phone": "+1 555 1912333",
		"gender": "male"
	},
	{
		"firstName": "Dagny",
		"lastName": "Taggart",
		"company": "Taggart Transcontinental",
		"phone": "+1 555 1860777",
		"gender": "female"
	},
	{
		"firstName": "Randle",
		"lastName": "McMurphy",
		"company": "Coockoo's Nest",
		"phone": "+1 555 1962000",
		"gender": "male"
	}
];

var app = new nx.ui.Application();

var contactViewModel = new ContactViewModel();
var contactView = new ContactView();

contactView.model(contactViewModel);

contactView.attach(app);

app.container(document.getElementById("next-container"));
