import { useEffect, useState, useReducer } from 'react';
import './app.scss';
import axios from 'axios';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history/history';

function App() {
	const initialState = {
		data: null,
		loading: false,
		requestUrl: '',
		method: '',
		body: {},
		history: [],
		showHistory: false,
	};

	let reducer = (state, action) => {
		switch (action.type) {
			case 'DATA':
				return {
					...state,
					data: action.payload,
				};
			case 'LOADING':
				return {
					...state,
					loading: action.payload,
				};
			case 'PARAMS':
				return {
					...state,
					body: action.payload.body,
					requestUrl: action.payload.url,
				};
			case 'METHOD':
				return {
					...state,
					method: action.payload,
				};
			case 'HISTORY':
				return {
					...state,
					history: [...state.data, action.payload],
				};
			case 'SHOW-HISTORY':
				return {
					...state,
					showHistory: action.payload,
				};
			default:
				return state;
		}
	};
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		let action = { type: 'DATA', payload: null };
		const apiRequest = async () => {
			try {
				switch (state.method) {
					case 'GET':
						// if (state.data === null) {
						let { headers, data } = await axios.get(state.requestUrl);
						action.payload = { headers, data };
						return dispatch(action);
					// } else {
					// 	let { headers, data } = await axios.get(
					// 		state.requestUrl + `/${state.userData}`
					// 	);
					// 	action.payload = { headers, data };
					// 	return dispatch(action);
					// }
					case 'POST':
						action.payload =
							'You have clicked on POST, Click GET to retrieve Data from the API';
						return dispatch(action);

					case 'PUT':
						action.payload =
							'You have clicked on POST, Click GET to retrieve Data from the API';
						return dispatch(action);
					case 'DELETE':
						action.payload =
							'You have clicked on POST, Click GET to retrieve Data from the API';
						return dispatch(action);
					default:
						console.log('welp');
						break;
				}
			} catch (e) {
				console.log(e);
			}
		};
		apiRequest();
	}, [state]);

	return (
		<>
			<Header dispatch={dispatch} />
			<div>Request Method: {state.method}</div>
			<div>URL: {state.requestUrl}</div>
			{state.showHistory ? <History /> : <Form dispatch={dispatch} />}
			{state.data ? <Results data={state.data} /> : <></>}
			;
			<Footer />
		</>
	);
}

export default App;
