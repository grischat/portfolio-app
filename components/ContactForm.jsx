

function ContactForm() {
  return (
    <form>
      <div className="form__container">
        <div className="field__name">
            <label>Name</label>
            <input type="text"></input>
        </div>
        <div className="field__email">
            <label>Email Address</label>
            <input type="text"></input>
        </div>
        <div className="field__message">
            <label>Message</label>
            <input type="text"></input>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;