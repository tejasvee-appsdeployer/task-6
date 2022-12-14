import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const FormButton = ({ data, setData }) => {
	const [show, setShow] = useState(false);
	const [name, setName] = useState("");

	const handleClose = () => setShow(false);
	const handleOpen = () => setShow(true);
	const handleNameChange = (e) => setName(e.currentTarget.value);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (name.length > 0)
			setData([...data, { name: name, id: data.length + 1 }]);
		setName("");
		handleClose();
	};

	return (
		<div>
			<Button variant="primary" onClick={handleOpen}>
				Add Employee
			</Button>
			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>Employee Form</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-3" controlId="form-name">
							<Form.Label>Employee Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter Name"
								onChange={handleNameChange}
							/>
						</Form.Group>
						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default FormButton;
