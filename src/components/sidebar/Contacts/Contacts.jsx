import "./Contacts.css";

export default function Contacts() {
  return (
    <div>
      <img src="/images/avatar.png" alt="avatar" className="avatar" />
      <div className="contacts">
        <h3 className="contacts-title">Contacts</h3>
        <p>
          <span className="contacts-type">C:</span>
          <a href="tel:+380961919232" className="contacts-link">
            +380961919232
          </a>
        </p>
        <p>
          <span className="contacts-type">E:</span>
          <a href="mailto:dmt.solovey@gmail.com" className="contacts-link">
            dmt.solovey@gmail.com
          </a>
        </p>
        <p>
          <span className="contacts-type">L:</span>
          <a
            href="https://www.linkedin.com/in/dmytro-solovey-290281248/"
            className="contacts-link"
            target="_blank"
          >
            Linkedin
          </a>
        </p>
        <p>
          <span className="contacts-type">G:</span>
          <a
            href="https://github.com/dmtsolovey"
            className="contacts-link"
            target="_blank"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
}
