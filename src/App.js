import React, {useState} from 'react';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';

function App() {
const [search, setSearch] = useState({searchCenter: {longitude: null, latitude: null}})

function handleSearchResult(geoData){

}

  return (
    <>
    <Header 
    handleSearchResult={handleSearchResult}
    />
      
    <Main 
    
    />
    </>
  );
}

export default App;
