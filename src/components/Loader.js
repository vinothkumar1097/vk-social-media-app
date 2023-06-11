const Loader = ({ text }) => {
  return (
    <p className="d-flex align-items-center">
      <span className="spinner-border spinner-border-sm me-2"></span>
      {text}
    </p>
  );
};
Loader.defaultProps = {
    text: "Loading..."
}
export default Loader;
