const url = 'https://apitest.likewatt-infra.com/entry-test/1';

const fetchData = async (url) => {
	try {
		const promise = await fetch(url);

		const responseData = await promise.json();

		const selectData = responseData.data;
		return selectData;
	} catch (error) {
		console.error(
			'Une erreur est survenue lors de la récupération des données'
		);
	}
};

const filterData = async (url) => {
	const dataFetched = await fetchData(url);

	const filterByType = (array, type) => {
		return array.filter((item) => typeof item === type);
	};

	const sortByLocale = (array) => {
		return array.sort((a, b) =>
			a.localeCompare(b, 'fr', { sensitivity: 'base' })
		);
	};

	const caractersInOrder = sortByLocale(
		filterByType(dataFetched, 'string').filter(
			(caracter) => caracter.length === 1
		)
	);
	const wordsInOrder = sortByLocale(
		filterByType(dataFetched, 'string').filter((word) => word.length > 1)
	);
	const numberInOrder = filterByType(dataFetched, 'number').sort(
		(a, b) => a - b
	);
	const objects = filterByType(dataFetched, 'object');

	const result = caractersInOrder.concat(wordsInOrder, numberInOrder, objects);
	console.log(result);
};

filterData(url);
