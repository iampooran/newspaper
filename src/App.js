// import Maingrid from "./components/homeContent/maingrid/Maingrid";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import News from "./components/News";
// import TopHeadline from "./components/homeContent/topheadline/TopHeadline";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "./components/footer/Footer";
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react'


function App() {
  const [progress, setProgress] = useState(0)
  return (
    <>
    <Router>
      <Navbar/>
      <LoadingBar
        height={2}
        color='black'
        progress={progress} 
      />
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route exact path="/us" element={<News setProgress={setProgress} key="us" category="us"/>} />
        <Route exact path="/politics" element={<News setProgress={setProgress} key="politics" category="politics"/>} />
        <Route exact path="/automobiles" element={<News setProgress={setProgress} key="automobiles" category="automobiles"/>} />
        <Route exact path="/arts" element={<News setProgress={setProgress} key="arts" category="arts"/>} />
        <Route exact path="/obituaries" element={<News setProgress={setProgress} key="obituaries" category="obituaries"/>} />
        <Route exact path="/food" element={<News setProgress={setProgress} key="food" category="food"/>} />
        <Route exact path="/opinion" element={<News setProgress={setProgress} key="opinion" category="opinion"/>} />
        <Route exact path="/movies" element={<News setProgress={setProgress} key="movies" category="movies"/>} />
        <Route exact path="/sundayreview" element={<News setProgress={setProgress} key="sundayreview" category="sundayreview"/>} />
        <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" category="sports"/>} />
        <Route exact path="/theater" element={<News setProgress={setProgress} key="theater" category="theater"/>} />
        <Route exact path="/t-magazine" element={<News setProgress={setProgress} key="t-magazine" category="t-magazine"/>} />
        <Route exact path="/upshot" element={<News setProgress={setProgress} key="upshot" category="upshot"/>} />
        <Route exact path="/books" element={<News setProgress={setProgress} key="books" category="books"/>} />
      </Routes>
      <Footer/>
    </Router>


    
    </>
  );
}

export default App;
