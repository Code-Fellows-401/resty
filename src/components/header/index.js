import React from 'react';

function Header(props) {
	return (
		<header>
			<h1>RESTy</h1>
			<button
				onClick={() => props.dispatch({ type: 'SHOW-HISTORY', payload: false })}
			>
				Search
			</button>
			<button
				onClick={() => props.dispatch({ type: 'SHOW-HISTORY', payload: true })}
			>
				History
			</button>
		</header>
	);
}

export default Header;
