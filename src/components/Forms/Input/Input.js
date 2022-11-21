import React from 'react';

const Input = (props) => {
  return (
    <>
      <label htmlFor={props.for}>{props.label}</label>
      <input
        className={props.className}
        maxLength={props.max}
        min={props.min}
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        readOnly={props.read}
      />
    </>
  );
};

export default Input;
