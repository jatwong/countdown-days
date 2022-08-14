const Input = (props) => {
  return (
    <>
      <label htmlFor={props.for}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
      />
    </>
  );
};

export default Input;
