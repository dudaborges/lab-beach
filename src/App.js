import { useEffect, useState } from 'react';
import './App.css';
import AddBeach from './components/AddBeach';
import BeachList from './components/BeachList';
import EditBeach from './components/EditBeach';
import Filter from './components/Filter';
import Footer from './components/Footer';
import Header from './components/Header';
import Introduction from './components/Introduction';

function App() {

    const [showPopup, setShowPopup] = useState(false)
    const [showPopupEdit, setShowPopupEdit] = useState(false)
    const [beach, setBeach] = useState([])

    useEffect(() => {
      document.addEventListener('localStorageUpdated', handleBeach, false)
    }, [])

    const handleBeach = () => {
      setBeach(JSON.parse(localStorage.getItem('beach')))
    }

  return (
    <div>
      <Header />
      <Introduction />
      <Filter />
      <h2 className='beach-list-title'>Praias de Florianópolis</h2>
      {beach && <BeachList beach={beach} showedit={setShowPopupEdit} />}
      <AddBeach trigger={showPopup} setTrigger={setShowPopup} />
      <EditBeach trigger={showPopupEdit} setTrigger={setShowPopupEdit} />
      <Footer show={setShowPopup} />

    </div>
  );
}

export default App;
