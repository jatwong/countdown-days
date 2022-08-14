import "./Button.css";

const Button = (props) => {
  return <button disabled={props.valid} >{props.children}</button>;
};

export default Button;
