type TSelect = {
  type: string;
  label: string;
};

const Selection = ({ type, label }: TSelect) => {
  return (
    <div>
      <div className="selection d-flex align-align-items-center gap-2">
        <input type={type} />
        <label>{label}</label>
      </div>
    </div>
  );
};

export default Selection;
