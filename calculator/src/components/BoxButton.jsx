import PropTypes from "proptypes";

const BoxButton = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};
BoxButton.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.any.isRequired,
};
export default BoxButton;
