import { useState } from "react";
import FormButton from "./components/FormButton";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import EmmployeeTable from "./components/EmployeeTable";

const emp_data = [
	{ name: "Tejasvee", id: "1" },
	{ name: "Himanshu", id: "2" },
	{ name: "Shreesh", id: "3" },
];
function App() {
	const [data, setData] = useState(emp_data);
	return (
		<div className="App">
			<EmmployeeTable data={data} />
			<FormButton data={data} setData={setData} />
		</div>
	);
}

export default App;
