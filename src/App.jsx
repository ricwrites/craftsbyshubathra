import heroImg from './assets/logo.jpeg'
import './App.css'
import { React, useState }  from "react";
import { Menu, Specials, About, Contact, Back, BackHome } from './restaurant.jsx';
import landing from './assets/landing.jpeg'


export function App() {
const [section,setSection] = useState(null)

if (section === "products") {
return (
<div>
<button style = {{position: "absolute", top: "10px"}} onClick = {() => setSection(null)}> Back </button>
<Menu />
</div>
);
}

if (section === "testimonials") {
return (
<div>
<button style = {{position: "absolute", top: "10px"}} onClick = {() => setSection(null)}> Back </button>
<Specials />
</div>
);
}

if (section === "contact") {
return (
<div>
<button style = {{position: "absolute", top: "10px"}} onClick = {() => setSection(null)}> Back </button>
<Contact />
</div>
);
}

if (section === "about") {
return (
<div>
<button style = {{position: "absolute", top: "10px"}} onClick = {() => setSection(null)}> Back </button>
<About />
</div>
);
}



return (
<div className="restaurant-container">

    <img
        src={landing}
        className="restfixes"
        alt="Landing"
    />

    <button
        className="Products"
        onClick={() => setSection("products")}
    >
        Products
    </button>

    <button
        className="Testimonials"
        onClick={() => setSection("testimonials")}
    >
        Testimonials
    </button>

    <button
        className="About"
        onClick={() => setSection("about")}
    >
        About
    </button>

    <button
        className="Contact"
        onClick={() => setSection("contact")}
    >
        Contact
    </button>

    <h1 className="bizname">
        Crafts by Shubathra
    </h1>

    <h4 className="instructions">
        Click on the tote bag, phone, book or cup to learn more!
    </h4>

</div>
);
}
export default App
