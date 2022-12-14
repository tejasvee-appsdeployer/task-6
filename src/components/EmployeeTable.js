import { Container, Table } from "react-bootstrap";

const EmmployeeTable = ({ data }) => {
	return (
		<Container>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>ID</th>
					</tr>
				</thead>
				<tbody>
					{data.map((emp, index) => {
						return (
							<tr key={emp.id}>
								<td>{index + 1}</td>
								<td>{emp.name}</td>
								<td>{emp.id}</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</Container>
	);
};

export default EmmployeeTable;
