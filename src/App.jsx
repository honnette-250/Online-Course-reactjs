import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Spinner from './components/Spinner.jsx';
import LandingPage from './components/LandingPage.jsx';
// import Booking from './pages/Booking.jsx';
// import AboutB from './headers/AboutB.jsx';
// import ServicesB from './headers/ServicesB.jsx';
// import GarrelyB from './headers/GarrelyB.jsx';
// import ContactB from './headers/ContactB.jsx';
// import BookingB from './headers/BookingB.jsx';
import Footer from './components/Footer.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Forgot from './pages/Forgot.jsx';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const isLoginOrRegisterPage =
    window.location.pathname === '/login' || window.location.pathname === '/signup';

  return (
    <Router>
      <div className="App">
        {loading ? (
          <Spinner />
        ) : (
          <>
            {/* Conditionally render Navbar and Footer */}
            {!isLoginOrRegisterPage && <Navbar />}
            <div className="content">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot" element={<Forgot />} />
                {/* <Route path="/reset" element={<ResetPassword />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/about" element={<AboutB />} />
                <Route path="/service" element={<ServicesB />} />
                <Route path="/garrely" element={<GarrelyB />} />
                <Route path="/contact" element={<ContactB />} />
                <Route path="/bookings" element={<BookingB />} /> */}
              </Routes>
            </div>
            {!isLoginOrRegisterPage && <Footer />}
          </>
        )}
      </div>
    </Router>
  );
}

export default App;