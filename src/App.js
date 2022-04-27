// import Maingrid from "./components/homeContent/maingrid/Maingrid";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import News from "./components/News";
// import TopHeadline from "./components/homeContent/topheadline/TopHeadline";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route exact path="/world" element={<News key="world" category="world"/>} />
        <Route exact path="/us" element={<News key="us" category="us"/>} />
        <Route exact path="/politics" element={<News key="politics" category="politics"/>} />
        <Route exact path="/automobiles" element={<News key="automobiles" category="automobiles"/>} />
        <Route exact path="/business" element={<News key="business" category="business"/>} />
        <Route exact path="/fashion" element={<News key="fashion" category="fashion"/>} />
        <Route exact path="/food" element={<News key="food" category="food"/>} />
        <Route exact path="/insider" element={<News key="insider" category="insider"/>} />
        <Route exact path="/movies" element={<News key="movies" category="movies"/>} />
        <Route exact path="/science" element={<News key="science" category="science"/>} />
        <Route exact path="/sports" element={<News key="sports" category="sports"/>} />
        <Route exact path="/technology" element={<News key="technology" category="technology"/>} />
        <Route exact path="/travel" element={<News key="travel" category="travel"/>} />
        <Route exact path="/health" element={<News key="health" category="health"/>} />
        <Route exact path="/books" element={<News key="books" category="books"/>} />
      </Routes>
    </Router>


    
    </>
  );
}

export default App;
