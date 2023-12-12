import PropTypes from "proptypes";

const Buttons = ({ value, onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {value}
    </button>
  );
};

Buttons.propTypes = {
  value: PropTypes.any.isRequired,
  onClick: PropTypes.any.isRequired,
  className: PropTypes.any.isRequired,
};

export default Buttons;
