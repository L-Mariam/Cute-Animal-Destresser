
type ButtonProps = {
  color?: string; // optional since default provided
  text?: string;
  onClick: () => void;
};

const Button = ({ color = 'black', text, onClick}: ButtonProps) => {
  return (
    <button 
    onClick={onClick} 
    className='btn'
    style={{backgroundColor: color}}>
      {text}
    </button>
  )
}

// Button.defaultProps = {
//       color: 'black',
// }

export default Button
