import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
          <section id="header">
        <a href="#"> <img src="img/logo.png" alt=""/> </a>
        
        <div>

            <ul id="navBar">
             <li><Link className="active" to="/">Home</Link></li>
             <li><Link to="/shop">Shop</Link></li>
             <li><Link to="/blog">Blog</Link></li>
             <li><Link to="/about">About</Link></li>
             <li><Link to="/contact">Contact</Link></li>
             <li><Link id="lg_bag" to="/shop"><i ClassName="fa-sharp fa-solid fa-cart-shopping"></i></Link></li>
             <Link to="/shop" id="close"><i ClassName="fa-solid fa-xmark"></i></Link>
            </ul>
            
        </div>
        <div id="mobil">
            <a href="Cart.html"><i ClassName="fa-sharp fa-solid fa-cart-shopping"></i></a>
            <i id="bar" ClassName="fas fa-outdent"></i>

        </div>
    </section>
    </div>
  )
}
