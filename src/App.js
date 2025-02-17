
import './App.css';
import Login from './Amministration/Login';
import Layout from './Amministration/Layout';
import DashboardDoctors from './Doctor/DashboardDoctors'
import NewPatient from './Doctor/NewPatient'
import DoctorProfile from './Doctor/DoctorProfile'
import Register from './Amministration/Register'
import { BrowserRouter as Router, Route, Routes , Link , useNavigate  } from 'react-router-dom';
function App() {
  return (
    <Layout>
        <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login  />}></Route>
          <Route path="/Dashboard" element={<DashboardDoctors />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/NewPatient" element={<NewPatient />}></Route>
          <Route path="/DoctorProfile" element={<DoctorProfile />}></Route>
        </Routes>
      </div>
    </Router>
      </Layout>
  );
}

export default App;
