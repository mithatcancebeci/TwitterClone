import React from "react";
import "./Input.css";

const InputComp = (props) => {
  const {
    name,
    type,
    active,
    onChange,
    error,
 
    size,
    style,
    defaultValue,
    id,
    icon,
  } = props;

  let className = "form-control";
  if (error !== undefined) {
    className += " is-invalid";
  }
  return (
    <div className="form-group ">
      {active && (
        <label for={id} style={{ cursor: "pointer" }}>
          {icon}
        </label>
      )}
      <input
        className={className}
        style={style}
        name={name}
        type={type}
        onChange={onChange}
        outline
        id={id}
        size={size}
        defaultValue={defaultValue}
      />
      <div className="invalid-feedback">
        <span>{props.error}</span>
      </div>
    </div>
  );
};

export default InputComp;
