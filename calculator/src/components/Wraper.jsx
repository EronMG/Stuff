import PropTypes from "proptypes";

const Wraper = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};
Wraper.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.any.isRequired,
};
export default Wraper;
