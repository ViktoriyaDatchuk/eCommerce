import PropTypes from 'prop-types';

interface ButtonProps {
  text: string;
  isPrimary: boolean;
}

export default function Button({ text, isPrimary }: ButtonProps) {
  const basicStyle = 'px-2.5 py-1  font-sans font-bold uppercase rounded-md hover:bg-pink-600 ';
  const buttonStyle = isPrimary ? `${basicStyle}  bg-teal-400` : `${basicStyle}  bg-orange-400`;

  return (
    <button type="button" className={buttonStyle}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool.isRequired,
};
