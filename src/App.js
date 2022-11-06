import "./App.css";
import Spotlight from "./components/screens/Spotlight";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BreakFast from "./components/screens/BreakFast";
import Lunch from "./components/screens/Lunch";
import Dinner from "./components/screens/Dinner";
import IceCream from "./components/screens/IceCream";
import Coffee from "./components/screens/Coffee";


function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Spotlight />} />
                    <Route path="/breakfast" element={<BreakFast />} />
                    <Route path="/lunch" element={<Lunch />} />
                    <Route path="/dinner" element={<Dinner />} />
                    <Route path="/icecream" element={<IceCream />} />
                    <Route path="/coffee" element={<Coffee />} />
                </Routes>
            </Router>
        </>
    );
}
export default App;
