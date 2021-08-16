import CuteCritter from "./CuteCritter"
import Favorites from "../Favorites"
import { useState } from "react"




function CuteCritterList({ listOfCritters }){ 
    // <CuteCritterList listOfCritters={critters} />

    // function CuteCritterList(props){
         
        // console.log(props)
        //X// console.log(props.listOfCritters[0])


    const [favs, setFavs] = useState( [] )
    console.log("State of Favs: ", favs)
    // favs = [ all favrites ]
    //  L>  < Favorites favsToRender={favs} />


    //// js
    

    const setOurFavorites =(critterToFav)=>{

        console.log("State of Favs Before Copying: ", favs)
        setFavs( [...favs, critterToFav] )

    }



    const renderIfWeHaveCritters =()=>{

        let allCritters = listOfCritters.map( eachCritter => { console.log(eachCritter)
        
            return(<CuteCritter key={eachCritter.id} 
                        critter={eachCritter}
                        updateFavorites={setOurFavorites} 


            />)
        
        })
        return allCritters
        // =
        // <CuteCritter critter={eachCritter} />
        // <CuteCritter critter={eachCritter} />
        // <CuteCritter critter={eachCritter} />
        // <CuteCritter critter={eachCritter} />
        // <CuteCritter critter={eachCritter} />    

    }

    ////

    return(<>
    
        <h2>CuteCritterList</h2>

        Manually With Multiple Components
        { renderIfWeHaveCritters() }


        <br></br>

            < Favorites favsToRender={favs} />

        <br></br>
        <br></br>
        <br></br>
    
    </>) 

}
export default CuteCritterList










        // if(props.listOfCritters){

        //     return(
        //         <CuteCritter critter={props.listOfCritters[0]} />
        //     )
    
        // }



                {/* <CuteCritter />
        <CuteCritter />
        <CuteCritter />
        <CuteCritter /> */}