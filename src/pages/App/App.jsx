/*========================================
        Import dependencies
========================================*/
import { useState } from 'react';
import { Routes, Route } from "react-router-dom"
import { getUser } from "../../utilities/users-service.js"
/*========================================
        Import Css
========================================*/
import './App.css';
/*========================================
        Import Pages
========================================*/
import AuthPage from '../Auth/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage.jsx';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage.jsx'
import NavBar from "../../components/NavBar/NavBar.jsx"

export default function App() {

const [user, setUser] = useState(getUser())
  
  return (
    <main className="App">
      { user ? 
      <>
      <NavBar user={user}/>
      <Routes>
        {/* Route components in here */}
        <Route path="/orders/new" element={<NewOrderPage />} />
        <Route path="/orders" element={<OrderHistoryPage />} />
      </Routes>
      </>
        :
        <Routes>
          <Route path="/" element={<AuthPage setUser={setUser}/>} />

        </Routes>
      }
    </main>
  )
}