import SectionHeader from "./SectionHeader";

const Contact = () => {
  return (
    <section id="contact">
      <SectionHeader text={"contact"} />
      <div className="contact-container">
        <div className="self-intro">
          <img
            src={require("../static/img/selfie.png")}
            width="300"
            height="300"
            alt="selfie"
          />
        </div>
        <div className="contact-form">
        <div>
          <label className="custom-text">Name</label>
          <input  />
        </div>
        <div>
          <label className="custom-text">Email</label>
          <input
            type="email"
           
          />
        </div>
        <div>
          <label className="custom-text">Message</label>
          <textarea
            type="email"
          ></textarea>
        </div>
        <button className="send">Send it!</button>
      </div>
      </div>
    </section>
  );
};

export default Contact;
