import React from 'react';
import './App.css';

export default function App() {

    const [items, setItems] = React.useState<{ id: number; text: string}[]>([]);
    const [balance, setBalance] = React.useState(0);

    const addItem = () => {
        const item = {id: Date.now(), text: "huy"};
        setBalance(prevBalance => prevBalance + 1);
        setItems([...items, item]);
    }
    const clearItems = () => {
        setBalance(0);
        setItems([]);
    };
  return (
    <div className="App">
        <div className={"balance"}>
            <h1 className={"balik"}>Your balance {balance}</h1>
            <button className={"clear"} onClick={clearItems}>clear</button>
        </div>

      <div className={"clicker"}>
        <button className={"bablo"} onClick={addItem}>bablo</button>
          <div className={"elements"}>
              {items.map((item) => (
                  <div className={"element"} key={item.id}>{item.text}</div>
              ))}
          </div>
      </div>
      </div>
  );
}


