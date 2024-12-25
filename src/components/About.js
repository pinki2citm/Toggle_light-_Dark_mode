import React, { useState } from 'react'

function About() {
const[bgColor,SetBgColor] =useState('light');
const [TextColor,SetTextColor]= useState('dark');
const [text,setText]=useState('enable dark mode')
const toggle =()=>{
  if(bgColor==='light')
  {
    SetBgColor('dark');
    document.body.style.backgroundColor= 'dark';
    SetTextColor('light');
    setText('enable light mode');
  }
  else{
    SetBgColor('light');
    document.body.style.backgroundColor= 'light';
    SetTextColor('dark');
    setText('enable dark mode')
  }
}
  return (  
    <>
    <div className="container">
      <div className='row'>
        <div className='col'>
      <div className={`card bg-${bgColor}`}>
  <img src="https://hips.hearstapps.com/hmg-prod/images/close-up-of-blossoming-rose-flower-royalty-free-image-1580853844.jpg?crop=0.668xw:1.00xh;0.248xw" className="card-img-top" alt="flowers" />
  <div className="card-body">
    <h5 className={`card-title text-${TextColor}`}>Card title</h5>
    <p className={`card-text text-${TextColor}`}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button type='button' onClick={toggle} className="btn btn-primary">{text}</button>
  </div>
</div>
</div>
<div className='col'>
      <div className={`card bg-${bgColor}`}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXZPhgFPaPsxYe1dHx1lxNcphegpQY7_WgAQ&s" className="card-img-top" alt="flowers" />
  <div className="card-body">
    <h5 className={`card-title text-${TextColor}`}>Card title</h5>
    <p className={`card-text text-${TextColor}`}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button type='button' onClick={toggle} className="btn btn-primary">{text}</button>
  </div>
</div>
</div>
<div className='col'>
      <div className={`card bg-${bgColor}`}>
  <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-nature-scenery-free-image.jpeg?w=600&quality=80" className="card-img-top" alt="flowers" />
  <div className="card-body">
    <h5 className={`card-title text-${TextColor}`}>Card title</h5>
    <p className={`card-text text-${TextColor}`}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button type='button' onClick={toggle} className="btn btn-primary">{text}</button>
  </div>
</div>
</div>
    </div>
    </div>
    </>
  )
}

export default About;
