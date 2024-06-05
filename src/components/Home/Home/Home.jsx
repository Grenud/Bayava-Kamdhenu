import React, { useRef } from 'react';
import CowCatalogue  from '../CowCatalogue/CowCatalogue.jsx'
import Header from '../../Header/Header.jsx';
import AboutDevraha from '../AboutDevraha/AboutDevraha.jsx';
import JoinCampaign from '../JoinCampaign/Join.jsx';
import CowPooja from '../CowPooja/CowPooja.jsx';




export const Home = () =>  {
  const bottomRef = useRef(null);
  return (
    <div>
    <Header bottomRef={bottomRef}/>
     <AboutDevraha/>
     <JoinCampaign/>
     <CowCatalogue bottomRef={bottomRef}/>
     <CowPooja/>
      
          
    </div>
  )
}


