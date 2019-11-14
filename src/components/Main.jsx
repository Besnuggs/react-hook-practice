import React, {useState, useEffect} from 'react';
import {Stage, Layer, Rect, Circle, Transformer} from 'react-konva';
import Konva from 'konva';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import '../styles/main.css';

function Main(props) {
    const [values, setValues] = useState({
        center: {
            lat: 35.584340,
            lng: -80.461820
            },
        zoom: 11
        })
    const [shapes, setShapes] = useState({shapes: []})

    useEffect(() => {
    if(props.type){
        console.log(props.type, 'Main Stage update')
    }
    //*    Get Map Details - Needs to load latitude/longitude of where stage was created  *//
    // Will need to know the width/height of Stage as well as the zoom in which it was created.
    // The scaling of the Stage, as well as child components, would need to scale when the user scales in/out
    // Needs to create item layer - loading all previously created items.
    // Needs to know how large the stage will have to be - Should be static/consistent with a default zoom. - How is this determined by the user? Will there be a Stage creation process?
    // 
    }, [])

    function createItemLayer(){

    }

    function handleStageClick(e){
        // Will need to know which stage (id) and the x,y coordinates of click on Stage to place shape.
        console.log(e.evt.layerX, e.evt.layerY, e.currentTarget.id)
    }
    
    const TheStage = () => {
        return(
            <Stage
            width={100}
            height={100}
            id={'theStage'}
            onClick={handleStageClick}
            key={1}
            >
                <Layer>
                    <Rect
                    height={50}
                    width={50}
                    fill={'red'}
                    onClick={() => console.log("I've been clicked!")}
                    />
                </Layer>
            </Stage>
        )
    }

    console.log(props)
    return(
        <div className="main">

            <div id="map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY }}
                    defaultCenter={props.center}
                    center={props.center}
                    defaultZoom={values.zoom}
                    yesIWantToUseGoogleMapApiInternals
                >
                <TheStage
                    lat={35.584340}
                    lng={-80.461820}
                    scale={1}
                />
                </GoogleMapReact>
            </div>



        </div>
    )
}

export default Main
