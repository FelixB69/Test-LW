/* eslint-disable react/prop-types */
function Table({ key, model, tilt, capacity, isActive }) {
	return (
		<div>
			{' '}
			<table>
				<thead>
					<tr>
						<th>Label</th>
						<th>Tilt</th>
						<th>Capacity</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					<tr key={key}>
						<td>{model}</td>
						<td>{tilt}</td>
						<td>{capacity}</td>
						<td>
							<input type="checkbox" name="" id="" checked={isActive} />
						</td>

						<td>
							<button>Delete</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Table;
