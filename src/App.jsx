import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./components/Pages/Main";
import ExchangeList from './components/ExchangeList/ExchangeList';

function App() {

  return (
     <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/exchange-list" element={<ExchangeList />} />
      </Routes>
    </Router>
  );
}

export default App;
