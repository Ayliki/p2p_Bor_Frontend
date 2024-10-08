import cl from './styles.module.css'
import Dropdown from '../Dropdown/Dropdown'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import swap_icon from '../../assets/swap_icon.png'


const Main = () =>{

    const [selectedCurrency1, setSelectedCurrency1] = useState('Select an Currency');
    const [selectedCurrency2, setSelectedCurrency2] = useState('Select a Currency');
    const [currencies, setCurrencies] = useState(["USD", "EUR", "RUB", "CAD"]);
    const [amount, setAmount] = useState('')

    const navigate = useNavigate();

    const swapCurrencies = () => {
        setSelectedCurrency1(selectedCurrency2)
        setSelectedCurrency2(selectedCurrency1)
    }
    
    const handleExchangeClick = () => {
        if (amount){
            navigate('/exchange-list', { state: { amount, currency1: selectedCurrency1, currency2: selectedCurrency2 } });
        }
    }
 
    return(
        <div className={cl.wrapper}>
            <Header />

            <div>
                <h3>Amount</h3>
                <input 
                    type="text" 
                    placeholder='100$...'
                    value={amount}
                    onChange={(e)=>setAmount(e.target.value)}
                />
            </div>
            <Dropdown 
                selectedCurrency={selectedCurrency1} 
                setSelectedCurrency={setSelectedCurrency1}
                currencies={currencies}
            />
            <img 
                src={swap_icon} 
                alt="swap_icon" 
                className={cl.icon}
                onClick={swapCurrencies}
            />
             <Dropdown 
                selectedCurrency={selectedCurrency2} 
                setSelectedCurrency={setSelectedCurrency2}
                currencies={currencies}
            />
            <button 
                className={cl.convertBtn}
                onClick={handleExchangeClick}
            >
                Exchange
            </button>
        </div>
    )
}


export default Main
