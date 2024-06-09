import React from 'react'
import image3 from '../../assets/Gaumata3.jpeg';
import { TiTick } from "react-icons/ti";
import '../AdoptGaumataPage/GaumataPages.css';

function Vibhuti() {
    let arr=[
        {
          Name:"Donation amount, Rupee",
          amount1:"1000",
          amount2:"4900.00",
          amount3:"14700.00",
          amount4:"29400.00",
          amount5:"58800.00",
          amount6:"294000.00",
          amount7:"1176000.00"
        },
        {
            Name:"Goshala news",
            amount1:<TiTick />,
            amount2:<TiTick />,
            amount4:<TiTick />,
            amount3:<TiTick />,
            amount5:<TiTick />,
            amount6:<TiTick />,
            amount7:<TiTick />,
          },
          {
            Name:"Happy Birthday",
            amount1:<TiTick />,
            amount2:<TiTick />,
            amount4:<TiTick />,
            amount3:<TiTick />,
            amount5:<TiTick />,
            amount6:<TiTick />,
            amount7:<TiTick />,
          },
          {
            Name:"invitations to participate in ashram programs as a special guest",
            amount1:<TiTick />,
            amount2:<TiTick />,
            amount4:<TiTick />,
            amount3:<TiTick />,
            amount5:<TiTick />,
            amount6:<TiTick />,
            amount7:<TiTick />,
          },
          {
            Name:"Gurujee’s blessings",
            amount1:<TiTick />,
            amount2:<TiTick />,
            amount4:<TiTick />,
            amount3:<TiTick />,
            amount5:<TiTick />,
            amount6:<TiTick />,
            amount7:<TiTick />,
          },
          {
            Name:"Discount on Ashram products",
            amount1:<TiTick />,
            amount2:<TiTick />,
            amount4:<TiTick />,
            amount3:<TiTick />,
            amount5:<TiTick />,
            amount6:<TiTick />,
            amount7:<TiTick />,
          },
          {
            Name:"Communication with the cow",
            amount1:<TiTick />,
            amount2:<TiTick />,
            amount4:<TiTick />,
            amount3:<TiTick />,
            amount5:<TiTick />,
            amount6:<TiTick />,
            amount7:<TiTick />,
          },
          {
            Name:"Pendant on gaumata’s neck with the sponsor’s name",
            amount1:"",
            amount2:"",
            amount4:"",
            amount3:"",
            amount5:<TiTick/>,
            amount6:<TiTick/>,
            amount7:<TiTick/>,
          },
    /* css */      
]
  return (
    <div>
      <h1 className='Heading'>Help us to Care Vishnupatni Gaumata</h1>
      <img src={image3} className='Image'/>
      <button className='DonateBtn'>Donate Now</button>
      <a href='' className='Link'>DESCRIPTION</a>
       <a href='' className='Link'>DONORS</a>
      <div>
      <table  className="TableBorder"  >
        <caption className='TableIntro'>Support and reward options for our sponsoring partners</caption>
        <thead >
          <tr>
            <th className='TableHead' id='Guardianship'>GUARDIANSHIP OF A COW</th>
            <th className='TableHead' id='White'>WHITE custom amount</th>
            <th className='TableHead' id='Green'>GREEN 1 month</th>
            <th className='TableHead' id='Bronze'>BRONZE 3 months</th>
            <th className='TableHead' id='Silver'>SILVER 6 months</th>
            <th className='TableHead' id='Gold'>GLOD 1 year</th>
            <th className='TableHead' id='Platinum'>PLATINUM 5 years</th>
            <th className='TableHead' id='Diamond'>DIAMOND for life</th>
          </tr>
        </thead>
        <tbody>
        {arr.map((item) => (
            <tr>
              <td className='TableData' id='NameData'>{item.Name}</td>
              <td className='TableData' id='MainAmount'>{item.amount1}</td>
              <td className='TableData' id='MainAmount'>{item.amount2}</td>
              <td className='TableData' id='MainAmount'>{item.amount3}</td>
              <td className='TableData' id='MainAmount'>{item.amount4}</td>
              <td className='TableData' id='MainAmount'>{item.amount5}</td>
              <td className='TableData' id='MainAmount'>{item.amount6}</td>
              <td className='TableData' id='MainAmount'>{item.amount7}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Vibhuti;
