import React from 'react';
import ReactJson from 'react-json-view';

function Results(props) {
	return (
		<section>
			<pre>
				{props.apiData ? (
					<ReactJson src={props.apiData} theme='summerfruit:inverted' />
				) : null}
			</pre>
		</section>
	);
}

export default Results;
