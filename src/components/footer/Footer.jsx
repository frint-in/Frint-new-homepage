import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { SocialIcon } from 'react-social-icons';
import "./footer.css";

function Box(props) {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame((state, delta) => (ref.current.rotation.x += delta));
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

const Footer = () => {

  return (
    // <Canvas>
    //   <ambientLight />
    //   <pointLight position={[10, 10, 10]} />
    //   <Box position={[-1.2, 0, 0]} />
    //   <Box position={[1.2, 0, 0]} />
    // </Canvas>

    <section className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="src\assets\logo.png" alt="" width="100px" />
        </div>
        <div className="footer-nav">
          <ul className="footer-nav-list">
            <li className="footer-nav-item">Home</li>
            <li className="footer-nav-item">Browse Internships</li>
            <li className="footer-nav-item">Our services</li>
            <li className="footer-nav-item">Contact us</li>
          </ul>
        </div>
        <div className="footer-social-media">
          {/* <SocialIcon className="footer-social-media-item" url="https://facebook.com/jaketrent" />
          <SocialIcon className="footer-social-media-item" url="https://twitter.com/jaketrent" />
          <SocialIcon className="footer-social-media-item" url="https://instagram.com/jaketrent" />
          <SocialIcon className="footer-social-media-item" url="https://linkedin.com/jaketrent" /> */}
          <img className="footer-social-media-item" src="src\assets\social-media\facebook.jpeg" alt="FB-social-media" width={50}/>
          <img className="footer-social-media-item" src="src\assets\social-media\twitter.png" alt="TW-social-media" width={50}/>
          <img className="footer-social-media-item" src="src\assets\social-media\instagram.jpeg" alt="IG-social-media" width={50}/>
          <img className="footer-social-media-item" src="src\assets\social-media\linkedin.png" alt="LID" width={50}/>
        </div>
      </div>
      <div className="copyright">
        Frint 2023 © All Rights are Reserved
      </div>
    </section>
  );
};

export default Footer;
