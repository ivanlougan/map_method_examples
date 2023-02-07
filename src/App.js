import { useState } from 'react';
import './App.css';

function App() {

  const bookPrices = [2.4, 3, 4.25, 6, 8]
  const [allPeople, setAllPeople] = useState([
    { name: "Dan", age: 32 },
    { name: "Bob", age: 30 },
    { name: "Kri", age: 23 }
  ]);

  const handleClick = (clickValue) => {
    console.log(clickValue);

    if (clickValue == 8) {
      alert("expensive stuff");
    }

  }

  return (
    <div className="App">
      <h1>Map method</h1>

      {bookPrices.map(( price, index ) => {
        return <h2 key={index} onClick={() => handleClick(price)}> This book is {price}</h2>
      })}

      {allPeople.map( (singlePerson, index) => {
        return <Person key={index} 
          runOnClick={() => handleClick(singlePerson)} 
          personsName={singlePerson.name} 
          personsAge={singlePerson.age} />        
      })}
      
    </div>
  );
}

const Person = (props) => {

  return (
    <div onClick={props.runOnClick}> 
      <h3>{props.personsName}</h3>
      <p>{props.personsAge}</p>
    </div>
  )

}

export default App;
