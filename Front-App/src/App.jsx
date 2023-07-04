import { useState, useEffect } from 'react';
import './App.css';
import Table from './components/Table/Table';
import axios from 'axios';

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		axios
			.get('https://apitest.likewatt-infra.com/entry-test/2')
			.then((res) => res.data.data)
			.then((data) => {
				setData(data);
			})
			.catch(() => {
				alert('No search results');
			});
	};

	return <Table data={data} setData={setData} />;
}

export default App;
