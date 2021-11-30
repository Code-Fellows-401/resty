import { useEffect, useState } from 'react';
import './app.scss';
import axios from 'axios';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App() {
	const [methodRequest, setMethodRequest] = useState('');
	const [requestUrl, setRequestUrl] = useState('');
	const [requestParams, setRequestParams] = useState({});
	const [apiData, setApiData] = useState('');

	// const callApi = (formParams) => {
	// 	// console.log(formParams);
	// 	// mock output
	// 	// const data = {
	// 	// 	count: 2,
	// 	// 	results: [
	// 	// 		{ name: 'fake thing 1', url: 'http://fakethings.com/1' },
	// 	// 		{ name: 'fake thing 2', url: 'http://fakethings.com/2' },
	// 	// 	],
	// 	// };
	// 	// setData(data);
	// 	setRequestParams({ ...requestParams, ...formParams });
	// 	// console.log(requestParams);
	// };

	useEffect(() => {
		let action = async () => {
			try {
				switch (methodRequest) {
					case 'GET':
						await axios.get(requestUrl).then((response) => {
							setApiData(response.data);
						});
						break;
					case 'POST':
						setApiData({
							Message:
								'You have clicked on POST, Click GET to retrieve Data from the API',
						});
						break;
					default:
						console.log('welp');
						break;
				}
			} catch (e) {
				console.log(e);
			}
		};
		action();
	}, [requestUrl, methodRequest]);
	return (
		<>
			<Header />
			<div>Request Method: {methodRequest}</div>
			<div>URL: {requestUrl}</div>
			<Form
				setMethodRequest={setMethodRequest}
				setRequestUrl={setRequestUrl}
				setRequestParams={setRequestParams}
				requestParams={requestParams}
			/>
			{apiData ? (
				<Results apiData={apiData} requestParams={requestParams} />
			) : (
				<p>loading</p>
			)}
			<Footer />
		</>
	);
}

export default App;
