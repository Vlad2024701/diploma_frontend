import './App.css';
import Sign from '../index/sign.js';
import Main from '../js/main';
import User from '../user/user';
import UserBooked from '../userBooked/userBooked'
import About from '../about/about'
import Tour from '../tour/tour';
import Booking from '../booking/booking';
import Tours from '../tours/tours';
import Countries from '../countries/countries';
import CountriesAdd from '../countries/addCountry';
import CountriesDelete from '../countries/deleteCountry';
import Hotels from '../hotels/hotels';
import Hotel from '../hotel/hotel';
import Room from '../room/room';
import { Route, BrowserRouter, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/tour/:id' element={<Tour/>} />
          <Route path='/hotel/:id' element={<Hotel/>} />
          <Route path='/register' element={<Sign/>}/>
          <Route path='/main' element={<Main/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='/userBooked' element={<UserBooked/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/tour' element={<Tour/>}/>
          <Route path='/booking' element={<Booking/>}/>
          <Route path='/tours' element={<Tours/>}/>
          <Route path='/countries' element={<Countries/>}/>
          <Route path='/hotels' element={<Hotels/>}/>
          <Route path='/hotel' element={<Hotel/>}/>
          <Route path='/countriesAdd' element={<CountriesAdd/>}/>
          <Route path='/countriesDelete' element={<CountriesDelete/>}/>
          <Route path='/room' element={<Room/>}/>
          <Route path='/room/:id' element={<Room/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
