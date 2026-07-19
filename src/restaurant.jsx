import React from "react";
import products from './assets/products.png';
import specials from './assets/specials.jpeg';
import contact from './assets/Contact.png';

export function Menu() {

return (
<>
<img src = {products} className = "menucard" />
<div className = "menucontents">
<h1 className = "menuhead"> Menu </h1>

<h2 className = "menusubl"> Starters </h2>

</div>
</>

);

}


export function Specials() {

return (
<>
<img src = {specials} className = "specialsimg" />
<div className = "splcontents">
<h1 className = "splhead"> Specials </h1>
<ul>
<li className = "splitems"> Korean BBQ Chicken, ₹200 </li>
</ul>
</div>
</>

);

}

export function About() {

return (

<div>
<h1 style = {{position:"absolute", top: "5%"}}> About us! </h1>

<h2 style = {{position:"absolute", top: "30%"}}> Our vision... </h2>

<h2 style = {{position:"absolute", top: "50%"}}> Our creator... </h2>

<h2 style = {{position:"absolute", top: "70%"}}> Our other ventures... </h2>

</div>)

}


export function Contact() {
return (
<>
<img src = { contact } className = "contactcard" />
<div className = "contactcontents">

<h2 className = "contactwhatsapp"> <a href = "https://whatsapp.com/channel/0029Vb7a189I7BeDLSnIkk2C"> Follow my WhatsApp channel for updates </a> </h2>

<h2 className = "contactinsta"> <a href = "https://www.instagram.com/craftsbyshubathra/">@craftsbyshubathra</a></h2>

<h2 className = "contactcall"> <a href = "https://wa.me/919831157073?text=Hello!%20I%20am%20interested%20in%20purchasing%20from%20your%20catalogue!">Order on WhatsApp!</a></h2>

</div>
</>

);

}


export function Back() {
<button>Back to restaurant</button>

}


export function BackHome() {



}
