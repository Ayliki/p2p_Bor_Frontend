import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import cl from './styles.module.css';

const ExchangeList = () => {
    const [exchangers, setExchangers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedExchanger, setSelectedExchanger] = useState(null);

    const location = useLocation();
    const navigate = useNavigate();

    const { state } = location;
    const { amount, currency1, currency2 } = state || {};

    useEffect(() => {
        setExchangers([
            {
                id: 1,
                name: 'Ilya Belov',
                amount: '500 USD',
                profilePicture: 'src/assets/profile1.jpeg',
                telegramHandle: 'Ayliki',
                rating: 4.5,
                details: 'Ilya Belov has been exchanging currency for over 5 years and has a great reputation.',
            },
            {
                id: 2,
                name: 'Ivan Ivanov',
                amount: '300 USD',
                profilePicture: 'src/assets/profile2.jpeg',
                telegramHandle: 'IvanovI',
                rating: 4.7,
                details: 'Ivan Ivanov is known for quick and reliable exchanges.',
            },
        ]);
    }, [])

    const filteredExchangers = exchangers.filter(exchanger => {
        const exchangerAmount = parseFloat(exchanger.amount.split(' ')[0]);
        return exchangerAmount >= parseFloat(amount)
    })

    const openProfile = (exchanger) =>{
        setSelectedExchanger(exchanger);
        setIsModalOpen(true);
    }

    const closeProfile = (exchanger) =>{
        setIsModalOpen(false);
        setSelectedExchanger(null);
    }

    const toTelegrammMesages = (telegramHandle) =>{
        window.Telegram.WebApp.openTelegramApp(`https://t.me/${telegramHandle}`);

    }

    return(
        <div className={cl.exchangeList}>
            <button 
                onClick={() => navigate('/')} 
                className={cl.backButton}
            >
                Back to Main
            </button>
            <h2>Available Exchangers</h2>
            {filteredExchangers.length > 0 ? (
                <div className={cl.list}>
                    {filteredExchangers.map(exchanger=>(
                        <div className={cl.listItem} key={exchanger.id}>
                            <img 
                                src={exchanger.profilePicture} 
                                alt={exchanger.name} 
                                className={cl.profilePicture}
                            />
                            <div>
                                <h3>{exchanger.name}</h3>
                                <p>{exchanger.amount}</p>
                                <p>Rating: {exchanger.rating}</p>
                                <button 
                                    onClick={() => openProfile(exchanger)}
                                    className={cl.actionButton}
                                >
                                    Profile
                                </button>
                                <button 
                                    onClick={() => messageExchanger(exchanger.telegramHandle)}
                                    className={cl.actionButton}
                                >
                                    Message the Exchanger 
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )
            : (
            <p>No exchangers available for the specified amount. </p> 
            )}
            

            {isModalOpen && selectedExchanger && (
                <div className={cl.modal}>
                    <div className={cl.modalContent}>
                        <button 
                            onClick={closeProfile} 
                            className={cl.closeBtn}
                        >
                            X
                        </button>
                        <h2>{selectedExchanger.name}</h2>
                        <p>{selectedExchanger.details}</p>
                        <img 
                            src={selectedExchanger.profilePicture} 
                            alt={selectedExchanger.name} 
                            className={cl.modalProfilePicture}
                        />
                        <p>Amount Available: {selectedExchanger.amount}</p>
                        <p>Rating: {selectedExchanger.rating}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ExchangeList