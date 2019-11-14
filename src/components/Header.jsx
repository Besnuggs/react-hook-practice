import React, {useState} from 'react';
import '../styles/header.css'
import ReactDependentScript from 'react-dependent-script'
import PlacesAutocomplete,{
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
  } from 'react-places-autocomplete';
import {Stage, Layer, Rect, Circle} from 'react-konva'
import Konva from 'konva';



function Header(props){
    const [values, setValues] = useState({location: ''})

    function handleOnChange(e){
        // console.log(e)
        // const {value, name} = e.target
        setValues({...values, ['location']: e})   
    }

    const handleSelect = address => {
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => {
            console.log('Success', latLng)
            props.handleSearchResult(latLng)
          })
          .catch(error => console.error('Error', error));
      };

    //   const itemSelection = () => {
    //     return(
          
    //     )
    // }

    
    return(
      <ReactDependentScript
      scripts={[`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_API_KEY}&libraries=places`]}
      >
        <div id="header">
           <div id="item-selection">
             <div id="rect-selection">
            <Stage
            width={50}
            height={50}
            >
              <Layer>
                    <Rect
                    height={50}
                    width={50}
                    fill={'red'}
                    onClick={() => console.log("I've been clicked! - Red Square")}
                    />
              </Layer>
            </Stage>
              </div>
              <div id="circle-selection">
                  <Stage
                  width={50}
                  height={50}
                  >
                  <Layer>
                    <Circle
                      height={50}
                      width={50}
                      x={0}
                      y={0}
                      fill={'blue'}
                      onClick={() => console.log("I've been clicked! - Blue circle")}
                    />
                    </Layer>
                  </Stage>
              </div>
           </div>

           <PlacesAutocomplete
            value={values.location}
            onChange={(e) => handleOnChange(e)}
            onSelect={handleSelect}
            name="location"
            
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      
        </div>
      </ReactDependentScript>
    )
}

export default Header