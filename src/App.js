import { useState } from 'react';
import './App.css';
import AddBeach from './components/AddBeach';
import BeachList from './components/BeachList';
import Header from './components/Header';
import Introduction from './components/Introduction';

function App() {

    const [showPopup, setShowPopup] = useState(false)
  return (
    <div>
      <Header />
      <Introduction />
      <BeachList />
      <AddBeach trigger={showPopup} setTrigger={setShowPopup} />
      <div className="add-beach">
          <p>Você conhece mais alguma praia que não está listada acima?</p>
          <button onClick={() => setShowPopup(true)} className="btn-show-popup">Adicionar</button>
      </div>

    </div>
  );
}

export default App;
