import React from "react";
import Cow from "../Home/CowPooja/CowPooja";
import './CowPujaF.css'

export default function CowPuja() {
  return (
    <div>
      <div className="cowpuja-section">
        <h1>About KamdhenuSeva</h1>
        <p className="para">
          At Sri Devraha Baba's Ashram, Vrindavan, we have a long tradition of
          dedicated Cow seva as Sri Devraha Baba stated his blessings are with
          those devotees who serve and protect Cow Mata. The unfortunate fate of
          many cows in India after their ability to produce milk has ceased is
          that they are either sent to slaughterhouses or abandoned by their
          owners to roam the streets as they are no longer seen as being
          productive. Here at Sri Devraha Baba's Ashram in Vrindavan, we have
          started a movement in which we protect and care for cows regardless of
          their age or any illnesses they might have. We are currently blessed
          with the opportunity of caring for over 500 cows and bulls and our
          numbers are increasing as we never refuse a cow or bull in need of
          shelter and care. We treat Cow Mata with love and care and see great
          potential in utilizing all the magnificent things Cow Mata can produce
          and offer us apart from just giving milk, for example, we are exploring
          the possibility of making paper, tiles, bricks, medicine and natural gas
          from cow dung and urine.
        </p>
      </div>
      <Cow />
    </div>
  );
}
