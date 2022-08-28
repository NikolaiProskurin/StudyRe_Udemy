import EmployersListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

const EmployersList = ({ data }) => {
  const elements = data.map((item) => {
    const { id, ...itemProsps } = item;
    return <EmployersListItem key={id} {...itemProsps} />;
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployersList;
