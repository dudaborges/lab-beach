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


  return (
    <div>
      <Header />
      <Introduction />
      <h2>Praias de Florianópolis</h2>
      <BeachList showedit={setShowPopupEdit} show={setShowPopup} />
      <AddBeach trigger={showPopup} setTrigger={setShowPopup} />
      <EditBeach trigger={showPopupEdit} setTrigger={setShowPopupEdit} />
      <Footer show={setShowPopup} />
    </div>
  );
}

export default App;
