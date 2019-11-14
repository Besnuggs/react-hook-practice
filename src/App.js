import React, {useState} from 'react';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';

function App() {
const [search, setSearch] = useState({center: {
  lat: 35.584340,
  lng: -80.461820
  }})

const [item, setItem] = useState({type: ''})

function handleSearchResult(geoData){
  setSearch({center: geoData})
}

function handlingItemChange(type){
  setItem({type})
}

  return (
    <>
    <Header 
      handleSearchResult={handleSearchResult}
    />
      
    <Main 
      center={search.center}
      item={item.type}
    />
    </>
  );
}

export default App;
