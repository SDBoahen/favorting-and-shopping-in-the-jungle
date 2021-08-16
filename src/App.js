import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react'

import CuteCritterList from './Components/CuteCrittersList';
import CuteCritter from './Components/CuteCritter';
import Favorites from './Favorites';




function App() {


    const [critters, setCritters] = useState( [] )
  // cont [variable, function() ]   useState(defaultState)
    console.log("State of Critter:  ", critters)


  // useEffect( ()=>{ } , dependancy )
  const fetchOurCritters =()=>{

    // ()=>{ 
    
    console.log("In Use Effect") 

      fetch('http://localhost:8080/cuteCritters')
      .then(response => response.json())
      .then(fetchedCritters => { console.log("FROM OUR FETCH:  ", fetchedCritters)
      // .then(fetchedCritters => console.log(fetchedCritters));
      
        setCritters(fetchedCritters)
          //X// setCritters(critters)
    
      });

  }
  useEffect( fetchOurCritters, [] )

  // useEffect( ()=>{ console.log("In Use Effect") } , dependancy )
  // useEffect( ()=>{ console.log("In Use Effect") } )
  // useEffect()



  return (<>

    <h1>YAY! SHHHHOPPIIIING!!!!🛒💫</h1>

      <CuteCritterList listOfCritters={critters} />
        {/* <CuteCritter />
        <CuteCritter />
        <CuteCritter />
        <CuteCritter />
        <CuteCritter /> */}

      {/* <Favorites /> */}

  </>);


}
export default App;





//  < App />   < CuteCritterList />  < Favorites />   < CuteCritter />


//                                                  < App />  [ data ] 
//              < CuteCritterList d={data} />                               < Favorites />   ??
//      < CuteCritter eachData={eachDataCritter} />
//      < CuteCritter eachData={eachDataCritter} />
//      < CuteCritter eachData={eachDataCritter} />
//      < CuteCritter eachData={eachDataCritter} />
//      < CuteCritter eachData={eachDataCritter} />




// < CuteCritters />
// < CuteCritter />
