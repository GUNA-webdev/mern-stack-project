import"./app.css";
import{BrowserRouter as Router, Routes, Route}from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Success from './Pages/Success';
import { Exploremenu } from "./Pages/Exploremenu";



const App = () => {
  return (
   
  <Router>
<Routes>
<Route path= "/" element={<Home/>}/>
<Route path= "/success" element={<Success/>}/>
<Route path= "*" element={<NotFound/>}/>
<Route path= "&" element={<Exploremenu/>}/>
</Routes>
<Toaster/>
</Router>
  );
  
};

export default App;