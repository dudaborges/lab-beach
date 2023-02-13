import { useState } from 'react';
import './App.css';
import AddBeach from './components/AddBeach';
import BeachList from './components/BeachList';
import EditBeach from './components/EditBeach';
import Header from './components/Header';
import Introduction from './components/Introduction';

function App() {

    const [showPopup, setShowPopup] = useState(false)
    const [showPopupEdit, setShowPopupEdit] = useState(false)
  return (
    <div>
      <Header />
      <Introduction />
      <BeachList showedit={setShowPopupEdit} show={setShowPopup} />
      <AddBeach trigger={showPopup} setTrigger={setShowPopup} />
      <EditBeach trigger={showPopupEdit} setTrigger={setShowPopupEdit} />


    </div>
  );
}

export default App;
