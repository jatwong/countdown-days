const Input = (props) => {
  return (
    <>
      <label htmlFor={props.for}>{props.label}</label>
      <input type={props.type} id={props.id} placeholder={props.placeholder} />
    </>
  );
};

export default Input;