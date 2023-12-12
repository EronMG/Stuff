import PropTypes from "proptypes";
const Output = ({ value, className }) => {
  return <div className={className}>{value}</div>;
};
Output.propTypes = {
  value: PropTypes.any.isRequired,
  className: PropTypes.any.isRequired,
};
export default Output;
