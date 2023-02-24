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
  const initialState = JSON.parse(localStorage.getItem("currentBeach")) || []
    const [name, setName] = useState('')
    const [area, setArea] = useState('')
    const [status, setStatus] = useState('')
    const [suitable, setSuitable] = useState('')
    const [currentBeach, setCurrentBeach] = useState(initialState)
    const [edit, setEdit] = useState(null)

    useEffect(() => {
      localStorage.setItem("currentBeach", JSON.stringify(currentBeach))
    }, [currentBeach])

    const [showPopup, setShowPopup] = useState(false)
    const [showPopupEdit, setShowPopupEdit] = useState(false)

  return (
    <div>
      <Header />
      <Introduction />
      <h2>Praias de Florianópolis</h2>
      <Filter />
      <BeachList 
      showedit={setShowPopupEdit} 
      show={setShowPopup} 
      currentBeach={currentBeach}
      />

      <AddBeach 
      trigger={showPopup} 
      setTrigger={setShowPopup}
      name={name}
      setName={setName}
      area={area}
      setArea={setArea}
      status={status}
      setStatus={setStatus}
      suitable={suitable}
      setSuitable={setSuitable}
      currentBeach={currentBeach}
      setCurrentBeach={setCurrentBeach}
      />
      
      <EditBeach 
      trigger={showPopupEdit} 
      setTrigger={setShowPopupEdit} 
      currentBeach={currentBeach}
      setCurrentBeach={setCurrentBeach}
      edit={edit}
      setEdit={setEdit}
      setName={setName}
      setArea={setArea}

      />

      <Footer show={setShowPopup} />
    </div>
  );
}

export default App;
