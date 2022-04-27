// import Maingrid from "./components/homeContent/maingrid/Maingrid";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import News from "./components/News";
// import TopHeadline from "./components/homeContent/topheadline/TopHeadline";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route exact path="/us" element={<News key="us" category="us"/>} />
        <Route exact path="/politics" element={<News key="politics" category="politics"/>} />
        <Route exact path="/automobiles" element={<News key="automobiles" category="automobiles"/>} />
        <Route exact path="/arts" element={<News key="arts" category="arts"/>} />
        <Route exact path="/obituaries" element={<News key="obituaries" category="obituaries"/>} />
        <Route exact path="/food" element={<News key="food" category="food"/>} />
        <Route exact path="/opinion" element={<News key="opinion" category="opinion"/>} />
        <Route exact path="/movies" element={<News key="movies" category="movies"/>} />
        <Route exact path="/sundayreview" element={<News key="sundayreview" category="sundayreview"/>} />
        <Route exact path="/sports" element={<News key="sports" category="sports"/>} />
        <Route exact path="/theater" element={<News key="theater" category="theater"/>} />
        <Route exact path="/t-magazine" element={<News key="t-magazine" category="t-magazine"/>} />
        <Route exact path="/upshot" element={<News key="upshot" category="upshot"/>} />
        <Route exact path="/books" element={<News key="books" category="books"/>} />
      </Routes>
      <Footer/>
    </Router>


    
    </>
  );
}

export default App;
