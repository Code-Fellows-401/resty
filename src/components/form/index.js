
import './form.scss';

function Form(props) {
	// Changes URL on submit
	const handleSubmit = (e) => {
		e.preventDefault();
		props.setRequestUrl(e.target[0].value);
	};

	// Changes Method on request
	const handleClick = (e) => {
		props.setMethodRequest(e.target.value);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Search By URL: </span>
					<input onSubmit={(e) => handleSubmit(e)} name='url' type='text' />
					<button type='submit'>
						GO!
					</button>
				</label>
				<label className='methods'>
					<button onClick={handleClick} type='button' id='get' value='GET'>
						GET
					</button>
					<button onClick={handleClick} type='button' id='post' value='POST'>
						POST
					</button>
					<button onClick={handleClick} type='button' id='put' value='PUT'>
						PUT
					</button>
					<button
						onClick={handleClick}
						type='button'
						id='delete'
						value='DELETE'
					>
						DELETE
					</button>
				</label>
				<textarea
					// onChange={(e) => setRequestData(e.target.value)}
					name='json'
				/>
			</form>
		</>
	);
}

export default Form;
