import React, {useState} from "react";

function Tile ({ hog }) {
    const [visibleDetails, setVisibleDetails] =useState(false)

    function handleClick () {
        setVisibleDetails(!visibleDetails)
    }

    return (
        <div className="pigTile"
            onClick={handleClick}>
            <h1>{hog.name}</h1>
            <img src={hog.image}></img>
            { visibleDetails ? 
                <div>
                    <div>Specialty: {hog.specialty}</div>
                    <div>Weight: {hog.weight} lbs.</div>
                    <div>Greased: {hog.greased ? "Yes" : "No"}</div>
                    <div>Highest Medal Achieved: {hog['highest medal achieved']}</div>
                </div> : ""}
         </div>
    )
}

// function Tile (hog) {
//     return (
//         <div className="ui eight wide column">
//             <h1>{hog.name}</h1>
//             <img src={hog.image}></img>
//         </div>
//     )
// }

export default Tile;