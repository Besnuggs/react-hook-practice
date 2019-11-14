import React, {useState} from 'react';
import '../styles/header.css'
import PlacesAutocomplete,{
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
  } from 'react-places-autocomplete';



function Header(props){
    const [values, setValues] = useState({location: ''})

    function handleOnChange(e){
        // console.log(e)
        // const {value, name} = e.target
        setValues({...values, ['location']: e})   
    }

    function handleOnKeyUp(e){
        // console.log(e)
        if(e.keyCode === 13){
            fetchLongAndLatitude(values.location)
        }
    }

    function fetchLongAndLatitude(location){
        console.log(location)
    }

    const handleSelect = address => {
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => console.log('Success', latLng))
          .catch(error => console.error('Error', error));
      };

    
    return(
        <div id="header">
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
    )
}

export default Header