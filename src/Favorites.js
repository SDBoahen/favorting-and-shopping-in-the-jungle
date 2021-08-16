import CuteCritter from "./Components/CuteCritter"




function Favorites(props){ 
    console.log("IN FAVORITES - Props: ", props)

    //// js
    
    const renderFavs =()=>{

        return(

            props.favsToRender.map( eachCritter => { console.log(eachCritter)
    
                return(<CuteCritter critter={eachCritter} />)
            
            })

        )
 
    }

    ////

    return(<>
    
        {/* <h2>Favorites</h2> */}
        <h2>Cart</h2>

        {renderFavs()}
        {/* {

            props.favsToRender.map( eachCritter => { console.log(eachCritter)

                return(<CuteCritter critter={eachCritter} />)
            
            })

        } */}

    </>) 

}
export default Favorites




        // [  { Woobly }, { Joobly } ]
        let favCritters = props.favsToRender.map( eachCritter => { console.log(eachCritter)
        
            return(<CuteCritter critter={eachCritter} />)
        
        })
        return favCritters
        // favCritters =
        // <CuteCritter />
        // <CuteCritter />