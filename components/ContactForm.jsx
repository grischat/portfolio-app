import "../scss/ContactForm.scss";
import Button from "./Button";
import "../scss/Button.scss";
function ContactForm() {
  return (
    <form>
      <div className="form__container">
        <div className="form__field">
          <label>Name</label>
          <input placeholder='Your name'id="name" type="text"></input>
        </div>
        <div className="form__field">
          <label>Email Address</label>
          <input placeholder='Your email' id="email" type="text"></input>
        </div>
        <div className="form__field">
          <label>Message</label>
          <textarea placeholder='Your message' id="message" type="text"></textarea>
        </div>
      </div>
      <Button className='btn__sendmsg'>SEND MESSAGE</Button>
    </form>
  );
}

export default ContactForm;
