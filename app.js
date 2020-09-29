const players = [
	{
		name: "Josh",
		score: 100,
		id: 1
	},
	{
		name: "Mike",
		score: 20,
		id: 2
	},
	{
		name: "Harvey",
		score: 50,
		id: 3
	},
	{
		name: "Rachel",
		score: 30,
		id: 4
	},
	{
		name: "Donna",
		score: 90,
		id: 5
	}
];

const Header = (props) => {
	return (
		<header>
			<h1>{ props.title }</h1>
			<span>Player: { props.totalPlayers }</span>
		</header>
	);
}

const Player = (props) => {
	return (
		<div className="player">
			<span className="player-name">
				{ props.name }
			</span>
			<Counter />
		</div>
	);
}

class Counter extends React.Component {

	state = {
		score: 0
	};

	incrementScore = () => {
		this.setState({
			score: this.state.score + 1
		});
	}

	decrementScore = () => {
		this.setState({
			score: this.state.score - 1
		});
	}

	render() {
		return (
			<div className="counter">
				<button className="counter-action decrement" onClick={this.decrementScore}> - </button>
				<span className="counter-score">{ this.state.score }</span>
				<button className="counter-action increment"
						onClick={this.incrementScore}> + </button>
			</div>
		);
	}
}

const App = (props) => {
	return (
		<div className="scoreboard">
			<Header
				title="ScoreBoard"
				totalPlayers={ props.initialsPlayers.length }
			/>

			{/* Prints all Players */}
			{ props.initialsPlayers.map( player =>
				<Player
					name={ player.name }
					key={ player.id.toString() }
				/>
			)}
		</div>
	);
}

ReactDOM.render(
	<App initialsPlayers={ players } />,
	document.getElementById('root')
);
