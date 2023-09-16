import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Main from './components/Main';
import api from './api/config';
import Card from './components/Card';
import Footer from './components/Footer';



function App() {


  const [movieList , setMovieList] = useState([]);
  const [searchMovieList , setSearchMovieList] = useState([]);
  
  const fetchData = async() => {
    try {
      const users = await axios.get(`https://api.themoviedb.org/3/discover/movie`,{
        params: {
          api_key: api.apiKey
        }
      });
      const data = users.data.results;
      setMovieList(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(()=>{
    fetchData();
  },[])

  


  return (
    <>
     <Main
        movieList={movieList}
        setMovieList={setMovieList}
     />
     <div className='container mt-5'>
      <div className='d-flex align-items-center justify-content-between'>
        <h2 className='fw-bolder'>Featured Movies</h2>
        <a href='#'>See more</a>
      </div>
      <Card 
        movieList={movieList}
        setMovieList={setMovieList}
      />
     </div>
     <Footer />
    </>
   
  );
}

export default App;
