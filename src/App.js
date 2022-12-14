import { useEffect, useState } from "react";
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
			<FormButton data={data} setData={setData} />
			<EmmployeeTable data={data} />
		</div>
	);
}

export default App;
