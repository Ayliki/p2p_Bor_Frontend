import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./components/Pages/Main";
import ExchangeList from './components/ExchangeList/ExchangeList';
import { useEffect, useState } from 'react';


function App() {
  const [user, setUser] = useState({
    id: 0,
    username: "Unknown",
  });

  useEffect(()=>{
    async function fetchData() {
      const response = await request("user");
      setUser(response)
    }
    fetchData();
  },[])


  return (
     <Router>
      <Routes>
        <Route path="/" element={<Main data={user} setUser={setUser}/>} />
        <Route path="/exchange-list" element={<ExchangeList />} />
      </Routes>
    </Router>
  );
}

export default App;
