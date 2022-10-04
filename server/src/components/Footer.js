
import React from 'react'
import Figure from 'react-bootstrap/Figure';
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';
import stack from '../img/stack.png';


function Footer() {
  return (
    <Figure>
    <a href="https://github.com/J28819">
    <Figure.Image
      marging={3}
      width={40}
      height={42}
      alt="85x90"
      src={github}
    />
    </a>
    <a href="https://www.linkedin.com/in/ismael-leal-45062429/">
    <Figure.Image
      marging={3}
      width={40}
      height={42}
      alt="85x90"
      src={linkedin}
    />
    </a>
    <a href="#">
    <Figure.Image
      marging={3}
      width={40}
      height={42}
      alt="85x90"
      src={stack}
    /></a>
  </Figure>
  
  );
}

export default Footer;