// import Characters from './compoments/Characters';
// import Form from './compoments/Form';
import Count from './compoments/Count';
import Header from './compoments/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header age='42' status='chickenLord' poulet='miam' />
      {/* <Form /> */}
      {/* <Characters /> */}
      <Count />
    </div>
  );
}

export default App;
