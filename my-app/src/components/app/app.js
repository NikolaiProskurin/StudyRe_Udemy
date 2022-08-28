import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employees-list";
import EmployersAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

function App() {
  const data = [
    { name: "Alice S.", salary: 800, increase: false, id: 1 },
    { name: "Nick O.", salary: 1500, increase: true, id: 2 },
    { name: "Alex K.", salary: 4500, increase: false, id: 3 },
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployersList data={data} />
      <EmployersAddForm />
    </div>
  );
}

export default App;
