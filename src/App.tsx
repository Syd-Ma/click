import React from 'react';
import './App.css';

export default function App() {

    const [items, setItems] = React.useState<{ id: number; text: string}[]>([]);

    const addItem = () => {
        const item = {id: Date.now(), text: "huy"};
        setItems([...items, item]);
    }

  return (
    <div className="App">
      <div className={"clicker"}>
        <button className={"bablo"} onClick={addItem}>bablo</button>
          <ul>
              {items.map((item) => (
                  <li key={item.id}>{item.text}</li>
              ))}
          </ul>
      </div>
    </div>
  );
}


