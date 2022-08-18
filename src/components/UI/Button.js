import "./Button.css";

const Button = (props) => {
  return <button disabled={props.valid} onClick={props.onClick} >{props.children}</button>;
};

export default Button;
