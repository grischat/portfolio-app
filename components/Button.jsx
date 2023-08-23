import "../scss/Button.scss";

function Button({ showIcon, className, children, onClick }) {
  return (
    <div className="btn__container">
      {showIcon && (
        <div className="triangle__icon">
          <img
            className="icon__image"
            src="../media/images/icons/down-arrows-default.svg"
            alt="Triangle Icon"
          />
        </div>
      )}

      <button className={className} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default Button;
