import React from "react";
import "./JoinMission.css";
import Asharam from "../../assets/AshramDevraha.png";
import Cowgrass from '../../assets/cowgrass.png';
import { useNavigate } from "react-router-dom";

export default function JoinMission() {
    const navigate = useNavigate();
  return (
    <div className="head-data">
      <div className="Ashram">
        <img src={Asharam} alt="Ashram" />
      </div>
      <div className="paragraph">
        <p>
          You can become the guardian of one or more cows, her (their) friend,
          visit her (them) in the ashram of Sri Devraha Baba or receive news
          about her (them) remotely. You can also become just a happy donator
          and the doors of the Sri Devraha Baba ashram will always be open to
          you. All friends of our Goshala cows always receive special
          blessings from Guruji Mahatma Sri Devdas Ji Maharaj. In the Sri
          Devraha Baba Ashram goshala the mother cows receive full, balanced
          and high-quality nutrition, care, and most importantly the love of
          caring people who came to the goshala from a calling in the heart.
          In the name of human well-being, global well-being, cows must be
          healthy and happy. Our employees friends of Gomata thoroughly know
          how to meet all her needs, to make her stay in the goshala
          comfortable and joyful. We carefully select environmentally friendly
          feeds from trusted suppliers near Vrindavan for a varied and
          balanced feeding of our cows taking into account the seasons. So, in
          winter, we give cows a variety of warming grains: oats, wheat,
          amaranth, wajour, chopped hay from rice shoots, corn, as well as
          root crops potatoes, carrots, beets and, finally, a little gur for
          raising body temperature and mood! In the warmer months, they eat a
          lot of fresh meadow grass, rich in vitamins and trace elements:
          clover, ryegrass, oatmeal, alfalfa and many others. In the ashram
          goshala 7 days a week there is a veterinarian to perform routine
          preventive measures: an examination, spraying, inclusion of vitamins
          or medicines in the feed. If necessary, we attract additional
          medical resources. We are very fond of our cows, the full-fledged
          inhabitants of the Ashram of Sri Devraha Baba, who are under His
          direct protection. 
            <br/><br/>
             <br />You can view the expenditure grid of the Ashram goshala. Indicators may vary depending on changes in the market for products and services.<br />
            <br /><strong>Cow Protection costs - click here</strong><br />

        </p>
    
        <img src={Cowgrass} alt="Cow grass" />
      </div>
      <div>
        <table className="table">
          <tbody>
            <tr>
              <td><strong>GUARDIANSHIP OF A COW</strong></td>
              <td><strong>WHITE<br/>custom amount</strong></td>
              <td style={{backgroundColor: "green", color: "black"}}><strong>GREEN<br />1 month</strong></td>
              <td style={{backgroundColor: "#cd7f32"}}><strong>BRONZE<br />3 months</strong></td>
              <td style={{backgroundColor: "#c0c0c0", color: "black"}}><strong>SILVER<br />6 months</strong></td>
              <td style={{backgroundColor: "#ffd700", color: "black"}}><strong>GOLD<br />1 year</strong></td>
              <td style={{backgroundColor: "#e5e4e2", color: "black"}}><strong>PLATINUM<br />5 years</strong></td>
              <td style={{backgroundColor: "#b9f2ff", color: "black"}}><strong>DIAMOND<br />for life</strong></td>
            </tr>
            <tr>
              <td><strong>Donation amount, Rupee</strong></td>
              <td><strong>from 1000</strong></td>
              <td><strong>4 900.00</strong></td>
              <td><strong>14 500.00</strong></td>
              <td><strong>28 700.00</strong></td>
              <td><strong>57 250.00</strong></td>
              <td><strong>286 130.00</strong></td>
              <td><strong>1 431 000.00</strong></td>
            </tr>
            <tr>
              <td><strong>Goshala news</strong></td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>
            <tr>
                <td><strong>Happy Birthday</strong></td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
            </tr>
            <tr>
                <td><strong>Invitation to participate in ashram programs as a special quest</strong></td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
            </tr>
            <tr>
                <td>Gurujee's blessings</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
            </tr>
            <tr>
                <td>Discounts on Ashram products</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
            </tr>
            <tr>
              <td>Communication with the cow</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>
            <tr>
              <td><strong>Pendant on gaumata's neck with the sponsor's name</strong></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>
          </tbody>
        </table>
        <button onClick={() => navigate("/adopt-gaumata")}><strong>Adopt A Cow</strong></button>
      </div>
    </div>
  );
}
