import cl from './styles.module.css'
import Dropdown from '../Dropdown/Dropdown'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';


const Main = () =>{

    const [selectedCurrency1, setSelectedCurrency1] = useState('Select an Option');
    const [selectedCurrency2, setSelectedCurrency2] = useState('Select an Option');
    const [currencies, setCurrencies] = useState(["USD", "EUR", "RUB", "CAD"]);
    const [amount, setAmount] = useState('')

    const navigate = useNavigate();

    const swapCurrencies = () => {
        setSelectedCurrency1(selectedCurrency2)
        setSelectedCurrency2(selectedCurrency1)
    }
    
    const handleConvertClick = () => {
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
                src="src/assets/swap_icon.png" 
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
                onClick={handleConvertClick}
            >
                Convert
            </button>
        </div>
    )
}


export default Main
