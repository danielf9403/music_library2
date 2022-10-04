import { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SeachBar'
import { DataContext } from './context/DataContext'

const App = () => {
    let [searchTerm, setSearchTerm] = useState('')
    let [data, setData] = useState([])
    let [message, setMessage] = useState('Search for Music!')

function App() {
  return (
    <div className="App">
        <SearchBar handleSearch={handleSearch} />
        {message}
        <DataContext.Provider value={data} >
            <Gallery />
        </DataContext.Provider>
    </div>
)
}
}


export default App;



    

   

    
