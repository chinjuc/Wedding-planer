import React from 'react'
import Home from './Components/Home/Home'
import Nav from './Components/Home/Nav'
import Collection from './Components/Contents/Collection'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Collist from './Components/Contents/Collist';
import Sidebar from './Components/Contents/Sidebar';
import 'aos/dist/aos.css';
import FeedbackApp from './Pages/Feedback';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          {/* Home + Collection */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <Collection />
              </>
            }
          />

          <Route path="/collection/:service" element={<Collist />}>
            <Route index element={<Sidebar />} />          
            <Route path=":varietyId" element={<Sidebar />} />
            {/* <Route element={<FeedbackApp />}></Route> */}
            {/* <Route path="/feedback" element={<FeedbackApp /> } /> */}
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
