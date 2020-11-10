import Characters from './compoments/Characters';
// import Form from './compoments/Form';
import Header from './compoments/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header age='42' status='chickenLord' poulet='miam' />
      {/* <Form /> */}
      <Characters />
    </div>
  );
}

export default App;
