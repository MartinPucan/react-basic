import regeneratorRuntime from "regenerator-runtime";
import React from "react";

const Header = (props) => {
	return (
		<header>
			<h1>{ props.title }</h1>
			<span className="length">length: { props.totalUsers }</span>
		</header>
	);
}

const User = (props) => {
	return (
		<div className="user">
			<div className="user-name">{ props.name }</div>
			<button className="remove-user" onClick={ () => props.removeUser(props.id) }>
				✖
			</button>
		</div>
	);
}

class App extends React.Component {

	state = {
		users: []
	};

	componentDidMount = async () => {
		const apiUrl = 'https://reqres.in/api/users?page=2';

		const usersResponse = await fetch(apiUrl);
		const { data } = await usersResponse.json();

		this.setState({ users: data });
	}

	handleRemoveUser = (id) => {
		this.setState( prevState => {
			return {
				users: prevState.users.filter( p => p.id !== id )
			}
		});
	}

	render() {
		return (
			<div className="title">
				<Header
					title="Users"
					totalUsers={ this.state.users.length }
				/>

				{ this.state.users.map( user =>
					<User
						name={ user.email }
						id={user.id}
						key={ user.id.toString() }
						removeUser={this.handleRemoveUser}
					/>
				)}
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
