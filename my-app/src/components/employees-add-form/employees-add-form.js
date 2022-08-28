import "./employees-add-form.css";

const EmployersAddForm = () => {
  return (
    <div className="app-add-form">
      <h3>Add new empliyers</h3>
      <form className="add-form d-flex">
        <input
          type="text"
          className="from-control new-post-lable"
          placeholder="Name"
        />
        <input
          type="number"
          className="from-control new-post-lable"
          placeholder="Salary?"
        />

        <button type="submit" className="btn btn-outline-light">
          Add
        </button>
      </form>
    </div>
  );
};

export default EmployersAddForm;
