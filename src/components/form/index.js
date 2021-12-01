import './form.scss';

function Form(props) {
	return (
		<>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					props.dispatch({ type: 'DATA', payload: e.target.value });
				}}
			>
				<label>
					<span>Search By URL: </span>
					<input
						onChange={(e) => {
							console.log(e.target.value);
							props.dispatch({
								type: 'PARAMS',
								payload: { url: e.target.value },
							});
						}}
					/>
					<button type='submit'>GO!</button>
				</label>
				<label className='methods'>
					<button
						onClick={(e) =>
							props.dispatch({ type: 'METHOD', payload: e.target.value })
						}
						type='button'
						id='get'
						value='GET'
					>
						GET
					</button>
					<button
						onClick={(e) =>
							props.dispatch({ type: 'METHOD', payload: e.target.value })
						}
						type='button'
						id='post'
						value='POST'
					>
						POST
					</button>
					<button
						onClick={(e) =>
							props.dispatch({ type: 'METHOD', payload: e.target.value })
						}
						type='button'
						id='put'
						value='PUT'
					>
						PUT
					</button>
					<button
						onClick={(e) =>
							props.dispatch({ type: 'METHOD', payload: e.target.value })
						}
						type='button'
						id='delete'
						value='DELETE'
					>
						DELETE
					</button>
				</label>
				{/* <textarea onChange={handleUserData} name='json' /> */}
			</form>
		</>
	);
}

export default Form;
