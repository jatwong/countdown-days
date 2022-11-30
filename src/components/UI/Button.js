import "./Button.css";

const Button = (props) => {
  return (
    <button type={props.type} disabled={props.invalid} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
