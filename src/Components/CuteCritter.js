

const CuteCritter=(props)=>{ 
    console.log(props)

    //// js
    const clickHandler =()=>{ console.log(props.critter.name)

        props.updateFavorites(props.critter)
        // f(critter)

    }
    ////

    return(<>
        
        <h3 onClick={clickHandler}>
            {props.critter.name}
        </h3>
            {/* <h2>CuteCritter</h2> */}
        
        </>) 

}
export default CuteCritter