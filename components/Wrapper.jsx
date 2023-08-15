import "../scss/Wrapper.scss";

function Wrapper({ children }) {
  return <div className="mobile__container">{children}</div>;
}

export default Wrapper;
