import React from "react";
import { useParams, useOutletContext } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import './Side.css'

const Sidebar = () => {

  const { varietyId } = useParams();
  const { selected } = useOutletContext(); 

  if (!selected || !selected.varieties) {
    return <p>No varieties available.</p>;
  }

  const variety = selected.varieties.find(v => v.id == varietyId);

 if (!variety) {
  return (
    <div>
      <p className="varity">Please select a variety from the left.</p>
      <p className="varities">Please select a variety from the top.</p>
    </div>
  );
}


  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <Carousel>
      <Carousel.Item>
        <img src={variety.img} className="side-img" alt="" />
      </Carousel.Item>
    </Carousel>
    <h2 className="side-title">{variety.title}</h2>
    <p className="side-para">{variety.desc}</p>
    </div>
  );
};

export default Sidebar;
