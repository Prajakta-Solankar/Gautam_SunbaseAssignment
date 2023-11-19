
import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Mainpage from './pages/CustomerDetails';
import AddCustomer from './Components/AddCustomer';
function App() {
  return (
    <div >
      <Routes>
        <Route path='/customer' element = {<Mainpage/>} />
        <Route path='/' element = {<Login/>}/>
        <Route path="/add" element = {<AddCustomer />}/>
      </Routes>
    </div>
  );
}

export default App;
