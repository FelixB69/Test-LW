/* eslint-disable react/prop-types */

import {
	Button,
	Container,
	Edition,
	Slider,
	TD,
	TH,
	Title,
	Visualisation,
} from './Table.styled';

import { GoTrash } from 'react-icons/go';

function Table({ data, setData }) {

	let newData = [];

	const handleInputChange = (event, key, index) => {
		const value = event.target.value;
		setData((prevData) => {
			const newData = [...prevData];
			newData[index][key] = value;
			return newData;
		});
	};

	const handleCheckboxChange = (event, key, index) => {
		const checked = event.target.checked;
		setData((prevData) => {
			const newData = [...prevData];
			newData[index][key] = checked;
			return newData;
		});
	};
	const handleDeleteRow = (index) => {
		setData((prevData) => {
			const newData = [...prevData];
			newData.splice(index, 1);
			return newData;
		});
	};

	const handleAddRow = () => {
		setData((prevData) => {
			const newData = [...prevData];
			newData.push({
				label: '',
				tilt: 0,
				capacity: 0,
				model: '',
			});
			return newData;
		});
	};

	return (
		<>
			<img src="../public/logo-likewatt.png" alt="logo Likewatt" />
			<Container>
				<div>
					<Title>Visualisation</Title>
					<Visualisation>
						<thead>
							<tr>
								<TH>Modèle</TH>
								<TH>Inclinaison</TH>
								<TH>Capacité</TH>
								<TH>Actif ?</TH>
							</tr>
						</thead>
						<tbody>
							{data.map((row, index) => (
								<tr key={index}>
									<TD>{row.model}</TD>
									<TD>{row.tilt}°</TD>
									<TD>{row.capacity}</TD>
									<TD>
										<input
											type="checkbox"
											name=""
											id=""
											checked={row.isActive}
										/>
									</TD>

									<td>
										<GoTrash
											color="white"
											onClick={() => handleDeleteRow(index)}
										/>
									</td>
								</tr>
							))}
						</tbody>
					</Visualisation>
				</div>

				<div>
					<Title>Edition</Title>
					<Edition>
						<thead>
							<tr>
								<TH>Modèle</TH>
								<TH>Inclinaison</TH>
								<TH>Capacité</TH>
								<TH>Actif ?</TH>
							</tr>
						</thead>
						<tbody>
							{data.map((row, index) => (
								<tr key={index}>
									<TD>
										<input
											type="text"
											id="label"
											value={row.model}
											onChange={(e) => handleInputChange(e, 'model', index)}
										/>
									</TD>
									<TD>
										<Slider>
											<label>{row.tilt}°</label>
											<input
												type="range"
												id="tilt"
												min="0"
												max="180"
												value={row.tilt}
												onChange={(e) => handleInputChange(e, 'tilt', index)}
											/>
										</Slider>
									</TD>

									<TD>
										<input
											type="number"
											maxLength="30"
											minLength="5"
											id="capacity"
											value={row.capacity}
											onChange={(e) => handleInputChange(e, 'capacity', index)}
										/>
									</TD>
									<TD>
										<input
											type="checkbox"
											id="isActive"
											checked={row.isActive}
											onChange={(e) =>
												handleCheckboxChange(e, 'isActive', index)
											}
										/>
									</TD>
								</tr>
							))}

							<Button onClick={() => handleAddRow()}>Ajouter</Button>
						</tbody>
					</Edition>
				</div>
			</Container>
		</>
	);
}

export default Table;
