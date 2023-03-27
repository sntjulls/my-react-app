import "./app-filter.css";

const AppFilter = (props) => {
  const buttonsData = [
    { name: "all", label: "All employees", colored: false },
    { name: "rise", label: "For an increase", colored: false },
    { name: "moreThen1000", label: "Salary more than $1000", colored: true },
  ];

  const buttons = buttonsData.map(({ name, label, colored }) => {
    const active = props.filter === name;
    const clazz = active ? "btn-light" : "btn-outline-light";
    const style = colored ? { color: "red" } : null;
    return (
      <button
        type="button"
        className={`btn ${clazz}`}
        key={name}
        onClick={() => props.onFilterSelect(name)}
        style={style}
      >
        {label}
      </button>
    );
  });

  return (
    <div className="btn-group">
      {buttons}
      {/* <button type="button" className="btn btn-light">
        All employees
      </button>
      <button type="button" className="btn btn-outline-light">
        For an increase
      </button>
      <button type="button" className="btn btn-outline-light">
        Salary more than $1000
      </button> */}
    </div>
  );
};

export default AppFilter;
