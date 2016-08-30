var Note = React.createClass({
	displayName: "Note",

	render: function () {
		return React.createElement(
			"div",
			{ className: "note" },
			" "
		);
	}
});

ReactDOM.render(React.createElement(
	Note,
	null,
	" hello "
), document.getElementById('react-container'));