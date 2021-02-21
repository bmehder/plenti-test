const contentSource = [{
"pager": 1,
"path": "/blog/components",
"type": "blog",
"filename": "components.json",
"fields": {
    "title": "Dynamic components example",
    "body": [
        "The <a href=\"https://plenti.co/docs/allcomponents\">allComponents</a> helper object holds references to all svelte templates on your site.",
        "This allows you to load components from your JSON data source without explicitly importing them.",
        "Just remember to use a <em>component signature</em> (e.g. layout/components/ball.svelte becomes layout_components_ball_svelte)."
    ],
	"components": [
		{
			"name": "ball"
		},
		{
			"name": "block"
		}
	],
    "author": "Jim Fisk",
    "date": "12/9/2020"
}
},{
"pager": 1,
"path": "/blog/perry",
"type": "blog",
"filename": "perry.json",
"fields": {
    "title": "Customize your Planarian",
    "body": [
        "Meet our mascot - Perry the Planarian!",
        "If you want to customize Perry's style, you can do so <a href='https://perry.plenti.co' target='blank' rel='noopener noreferrer'>here</a> (Coming soon).",
        "Check out this <a href='https://youtu.be/Gr3KTOnsWEM' target='blank' rel='noopener noreferrer'>video</a> to see how the app was made!"
    ],
    "author": "Jim Fisk",
    "date": "10/1/2020"
}
},{
"pager": 1,
"path": "/blog/pletiform",
"type": "blog",
"filename": "pletiform.json",
"fields": {
    "title": "Build sites with good form",
    "body": [
        "Need an easy webform solution?",
        "Try adding a <a href='https://plentiform.com' target='blank' rel='noopener noreferrer'>plentiform</a>! (Coming soon)"
    ],
    "author": "Jim Fisk",
    "date": "1/26/2020"
}
},{
"pager": 1,
"path": "/blog/stores",
"type": "blog",
"filename": "stores.json",
"fields": {
    "title": "Svelte writable stores example",
    "body": [
        "Here's a basic counter implementation using Svelte Writable Stores"
    ],
    "store": true,
    "author": "Jim Fisk",
    "date": "8/25/2020"
}
},{
"pager": 1,
"path": "/",
"type": "index",
"filename": "index.json",
"fields": {
	"title": "Welcome to Plenti!",
	"intro": [
		"Take a look around to see how things work.",
		"The bottom of each page will tell you where to find the corresponding template in your project.",
		"If you get stuck, check out our <a href='https://plenti.co/docs' target='blank' rel='noopener noreferrer'>docs</a>. If you need extra help, <a href='https://github.com/plentico/plenti/issues/new' target='blank' rel='noopener noreferrer'>let us know</a>! Enjoy :)"
	]
}
},{
"pager": 1,
"path": "/about",
"type": "pages",
"filename": "about.json",
"fields": {
	"title": "About Plenti",
	"description": [
		"Plenti is a minimalist <a href='https://jamstack.org/' target='blank' rel='noopener noreferrer'>JAMstack</a> framework that's flexible and easy to use.",
		"We've cut out as many dependencies as possible so you can focus on being productive instead of wrestling with tools.",
		"The <a href='https://svelte.dev/' target='blank' rel='noopener noreferrer'>Svelte</a> frontend gives users get a snappy experience, and the <a href='https://golang.org/' target='blank' rel='noopener noreferrer'>Go</a> backend builds fast so you can get more done."
	],
	"author": "Jim Fisk"
}
},{
"pager": 1,
"path": "/contact",
"type": "pages",
"filename": "contact.json",
"fields": {
	"title": "Contact Us",
	"description": [
		"Plenti is 100% free and open source!",
		"You can fork it for your own purposes, or help us out by reporting bugs / contributing code on <a href='https://github.com/plentico/plenti' target='blank' rel='noopener noreferrer'>Our GitHub</a>.",
		"Give us <a href='https://twitter.com/plentico' target='blank' rel='noopener noreferrer'>a tweet</a> if you like what you see!",
		"And this, my friend, is another paragraph."
		
	],
	"author": "Jim Fisk"
}
},{
"pager": 1,
"path": "/services",
"type": "pages",
"filename": "services.json",
"fields": {
	"title": "Services",
	"description": [
		"We offer bare service for all the mandem (and galdem)."
	],
	"author": "Jim Fisk"
}
},{
"pager": 1,
"path": "/1",
"type": "index",
"filename": "index.json",
"fields": { "title": "Welcome to Plenti!", "intro": [ "Take a look around to see how things work.", "The bottom of each page will tell you where to find the corresponding template in your project.", "If you get stuck, check out our <a href='https://plenti.co/docs' target='blank' rel='noopener noreferrer'>docs</a>. If you need extra help, <a href='https://github.com/plentico/plenti/issues/new' target='blank' rel='noopener noreferrer'>let us know</a>! Enjoy :)" ] }
},{
"pager": 2,
"path": "/2",
"type": "index",
"filename": "index.json",
"fields": { "title": "Welcome to Plenti!", "intro": [ "Take a look around to see how things work.", "The bottom of each page will tell you where to find the corresponding template in your project.", "If you get stuck, check out our <a href='https://plenti.co/docs' target='blank' rel='noopener noreferrer'>docs</a>. If you need extra help, <a href='https://github.com/plentico/plenti/issues/new' target='blank' rel='noopener noreferrer'>let us know</a>! Enjoy :)" ] }
},];

export default contentSource;