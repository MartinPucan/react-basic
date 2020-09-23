const title = React.createElement(
	'h1',
	{ id: 'main-title', title: 'this is a title' },
	'My first react element'
);

const desc = React.createElement(
	'p',
	null,
	'I just learned how to create react node and render it into the DOM.'
);

const header = React.createElement(
	'header',
	null,
	title,
	desc
);

ReactDOM.render(
	header,
	document.getElementById('root')
);
