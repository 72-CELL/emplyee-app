import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import AllEmp from './components/AllEmp';
import { Routes ,Route} from 'react-router-dom';
import Empdetails from './components/Emp-details';

function App() {
  return (
    <div className="App">
      <AllEmp/>
      <Routes>
        <Route path="/" element={<AllEmp/>}/>
        <Route path="/empdetails/:{id}" element={<Empdetails/>}/>
      </Routes>
      <Empdetails/>
    </div>
  );
}

export default App;
