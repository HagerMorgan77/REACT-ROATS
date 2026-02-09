export default function Map() {
    return (
      <div>
        <section id="contact_detaails" className="section-p1">
          <div className="deatails">
            <span>GET IN TOUCH</span>
            <h2>Visit One Of Agency Locations Or Contact Us Today</h2>
            <h3>Head Office</h3>
  
            <ul>
              <li>
                <i className="fa-regular fa-map"></i>
                <p>56 Glassford Street Glasgow GL 1UL New York</p>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <p>01062501682</p>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <p>mahmoudhabib55200@gmail.com</p>
              </li>
              <li>
                <i className="fa-regular fa-clock"></i>
                <p>Monday To Saturday: 9:00am to 4:00pm</p>
              </li>
            </ul>
          </div>
  
          <div className="Google_Map">
            <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.511775687403!2d46.67529531500409!3d24.713551384126734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f02d1f1b1c7df%3A0x1b5b8b2b8d9f1b9a!2z2KfZhNi02YrYqQ!5e0!3m2!1sar!2ssa!4v1700000000000"

              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    );
  }
  