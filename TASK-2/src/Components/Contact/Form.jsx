import React from "react";

const peopleData = [
  {
    name: "John Doe",
    title: "Senior Marketing Manager",
    phone: "+0001230007788",
    email: "Concate@gmail.com",
    img: "img/people/1.png",
  },
  {
    name: "Wiliam Smith",
    title: "Senior Marketing Manager",
    phone: "+0001230007788",
    email: "Concate@gmail.com",
    img: "img/people/2.png",
  },
  {
    name: "Emama Stone",
    title: "Senior Marketing Manager",
    phone: "+0001230007788",
    email: "Concate@gmail.com",
    img: "img/people/3.png",
  },
];

const ContactSection = () => {
  return (
    <section id="form_deatails" className="section-p1">
      <form>
        <span>LEAVE A MESSAGE</span>
        <h2>We Love To Hear From You</h2>
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="E-mail" />
        <input type="text" placeholder="Subject" />
        <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
        <button className="normal">Submit</button>
      </form>

      <div className="people">
        {peopleData.map((person, index) => (
          <div key={index}>
            <img src={person.img} alt={person.name} />
            <p>
              <span>{person.name}</span>
              <br /> {person.title}
              <br /> Phone: {person.phone}
              <br /> Email: {person.email}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
