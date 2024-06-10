import React from "react";
import "./AdoptGaumata.css";

import image1 from "../../assets/Gaumata1.jpeg";
import image2 from "../../assets/Gaumata2.jpeg";
import image3 from "../../assets/Gaumata3.jpeg";
import image4 from "../../assets/Gaumata4.jpeg";
import image5 from "../../assets/Gaumata5.jpeg";
import image6 from "../../assets/Gaumata6.jpeg";
import image7 from "../../assets/Gaumata7.jpeg";
import image8 from "../../assets/Gaumata8.jpeg";
import image9 from "../../assets/Gaumata9.jpeg";
import image10 from "../../assets/Gaumata10.jpeg";
import image11 from "../../assets/Gaumata11.jpeg";
import image12 from "../../assets/Gaumata12.jpeg";
import { Link } from "react-router-dom";


export default function AdoptGaumata() {
  return (
    <div className="AdoptGaumata">
      <div className="header">
        <h1>Adopt Gaumatas</h1>
        <button>Already Adopted</button>
      </div>
      <div className="AdoptGau">
        <div className="Gaumata">
         <Link to="/Shraddha_Gaumata"><img src={image1} /></Link>  
          <h1>Help us to Care Shraddha Gaumata</h1>
          <p>Support And Reward For Our sponsoring</p>
          <p>Partners GARDIANSHIP OF A COW WHITE Coustom</p>
        </div>
        <div className="Gaumata">
         <Link to="/Vishnupatni_Gaumata"><img src={image2} /></Link>
          <h1 className="aheading">Help us to Care Vishnupatni Gaumata</h1>
          <p>Support And Reward For Our sponsoring</p>
          <p>Partners GARDIANSHIP OF A COW WHITE Coustom</p>
        </div>
        <div className="Gaumata">
          <Link to="/Vibhuti_Gaumata"><img src={image3} /></Link>
          <h1>Help us to Care Vibhuti Gaumata</h1>
          <p>Support And Reward For Our sponsoring</p>
          <p>Partners GARDIANSHIP OF A COW WHITE Coustom</p>
        </div>
        <div className="Gaumata">
          <img src={image4} />
          <h1>Help us to Care Udaranga Gaumata</h1>
          <p>Support And Reward For Our sponsoring</p>
          <p>Partners GARDIANSHIP OF A COW WHITE Coustom</p>
        </div>
        {/* css */}
        <div className="Gaumata">
          <img src={image5} />
          <h1>Help us to Care Padmasundari Gaumata</h1>
          <p>Support And Reward For Our sponsoring</p>
          <p>Partners GARDIANSHIP OF A COW WHITE Coustom</p>
        </div>
        <div className="Gaumata">
          <img src={image6} />
          <h1>Help us to Care Shivakari Gaumata</h1>
          <p>Support And Reward For Our sponsoring</p>
          <p>Partners GARDIANSHIP OF A COW WHITE Coustom</p>
        </div>
        <div className="Gaumata">
          <img src={image7} />
          <h1>Help us to Care Padmapriya Gaumata</h1>
          <p>Support And Reward For Our sponsoring</p>
          <p>Partners GARDIANSHIP OF A COW WHITE Coustom</p>
        </div>
        <div className="Gaumata">
          <img src={image8} />
          <h1>Help us to Care Padmobhava Gaumata</h1>
          <p>Support And Reward For Our sponsoring</p>
          <p>Partners GARDIANSHIP OF A COW WHITE Coustom</p>
        </div>
        <div className="Gaumata">
          <img src={image9} />
          <h1>Help us to Care Sanghavi Gaumata</h1>
          <p>Support And Reward For Our sponsoring</p>
          <p>Partners GARDIANSHIP OF A COW WHITE Coustom</p>
        </div>
        <div className="Gaumata">
          <img src={image10} />
          <h1>Help us to Care Padmamukhi Gaumata</h1>
          <p>Support And Reward For Our sponsoring</p>
          <p>Partners GARDIANSHIP OF A COW WHITE Coustom</p>
        </div>
        <div className="Gaumata">
          <img src={image11} />
          <h1>Help us to Care NavaDurga Gaumata</h1>
          <p>Support And Reward For Our sponsoring</p>
          <p>Partners GARDIANSHIP OF A COW WHITE Coustom</p>
        </div>
        <div className="Gaumata">
          <img src={image12} />
          <h1>Help us to Care Lokamatri Gaumata</h1>
          <p>Support And Reward For Our sponsoring</p>
          <p>Partners GARDIANSHIP OF A COW WHITE Coustom</p>
        </div>
      </div>
    </div>
  );
}