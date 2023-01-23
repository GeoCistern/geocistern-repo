import "@picocss/pico";
import "./App.css";
import Header from "./Header";
import Explore from "./Pages/Explore";
import Home from "./Pages/Home";
import People from "./Pages/People";
import Statistics from "./Pages/Statistics";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className='App container'>
            <Header />
            <main className='container'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/explore' element={<Explore />} />
                    <Route path='/statistics' element={<Statistics />} />
                    <Route path='/settings' element={<People />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
