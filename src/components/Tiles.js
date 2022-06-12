import React, {useState} from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import Tile from "./Tile"

function Tiles ({ hogs }) {
    //console.log(hogs)
    const [isGreased, setIsGreased] = useState(false)
    const [wantedHogs, setWantedHogs] = useState(hogs)
    const [sortName, setSortName] = useState(false)
    const [sortWeight, setSortWeight] = useState(false)

    function handleName(e) {
        setSortName(!sortName)
        if(e.target.checked === true) {
            setWantedHogs(wantedHogs.slice().sort( (a,b) => {
                if(a.name < b.name) return -1
                if(a.name > b.name) return 1
                return 0
            }))

        } else {
            setWantedHogs(hogs)
        }
    }

    function handleWeight(e) {
        setSortWeight(!sortName)
        setSortName(false)
        if(e.target.checked === true) {
            setWantedHogs(wantedHogs.slice().sort( (a,b) => {
                if(a.weight < b.weight) return -1
                if(a.weight > b.weight) return 1
                return 0
            }))

        } else {
            setWantedHogs(hogs)
        }
    }

    // console.log(wantedHogs.map( hog => hog.name="Bob"))

    function handleGrease (e) {
        setIsGreased(!isGreased)
        if(e.target.checked === true) {

            setWantedHogs(wantedHogs.filter(hog => {
                return hog.greased === true
            }))

            // const hogsFiltered = wantedHogs.filter(hog => {
            //     return hog.greased === true
            // })
            // setWantedHogs(hogsFiltered)
        }

        else {
            setWantedHogs(hogs)
        }

        // const filterHogs = wantedHogs.filter( hog => {
        //     return hog.greased === true
        // })
    }

    // const renderHogs = hogs.map(hog => <Tile key={hog.name} hog={hog} />)
    return (
        <div className="ui grid container">
            <div>Greased? <input type="checkbox" id="filter" onClick={handleGrease}></input></div>
            <div>Sort name? <input type="checkbox" id="sort" onClick={handleName}></input></div>
            {/* onClick={handleName} */}
            <div>Sort weight? <input type="checkbox" id="sort" onClick={handleWeight}></input></div>
            {wantedHogs.map( hog => <Tile hog={hog} />)}
        </div>
    )
}

export default Tiles