const players = [
	{
		name: "Josh",
		score: 100
	},
	{
		name: "Mike",
		score: 20
	},
	{
		name: "Harvey",
		score: 50
	},
	{
		name: "Rachel",
		score: 30
	},
	{
		name: "Donna",
		score: 90
	}
];

const Header = (props) => {
	console.log(props);
	return (
		<header>
			<h1>{ props.title }</h1>
			<span>Player: {props.totalPlayers}</span>
		</header>
	);
}

const Player = (props) => {
	return (
		<div className="player">
			<span className="player-name">
				{ props.name }
			</span>
			<Counter score={props.score} />
		</div>
	);
}

const Counter = (props) => {
	return (
		<div className="counter">
			<button className="counter-action decrement"> - </button>
			<span className="counter-score">{ props.score }</span>
			<button className="counter-action increment"> + </button>
		</div>
	);
}

const App = (props) => {
	return (
		<div className="scoreboard">
			<Header title="ScoreBoard" totalPlayers={1}/>

			{/* Prints all Players */}
			{props.initialsPlayers.map( player =>
				<Player
					name={player.name}
					score={player.score}
				/>
			)}
		</div>
	);
}

ReactDOM.render(
	<App initialsPlayers={ players } />,
	document.getElementById('root')
);
