import React from "react";

const FormControl = (props) => {
    const { label, id, value, name, placeholder, onChange  } = props;

  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type="text"
        id={id}
        className="form-control"
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default FormControl;
