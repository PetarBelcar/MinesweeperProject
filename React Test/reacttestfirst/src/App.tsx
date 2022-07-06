import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation';

import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetups from './pages/NewMeetups';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<AllMeetups />}>
        </Route>

        <Route path='/newmeetup' element={<NewMeetups />}>
        </Route>

        <Route path='/favorites' element={<Favorites />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;