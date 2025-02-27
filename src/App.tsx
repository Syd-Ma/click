import React from 'react';
import './App.css';
import logo from './public/logo192.png';

export default function App() {

    const [items, setItems] = React.useState<{ id: number; image: string; x: number; y: number }[]>([]);
    const [balance, setBalance] = React.useState(0);

    const addItem = () => {
        const randomX = Math.floor(Math.random() * window.innerWidth * 0.8);
        const randomY = Math.floor(Math.random() * window.innerHeight * 0.8);
        const item = { id: Date.now(), image: '/logo192.png', x: randomX, y: randomY };
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
                    <div className={"element"} key={item.id}>
                        <img src={item.image} alt="Item"
                             style={{
                                 position: 'absolute',
                                 left: `${item.x}px`,
                                 top: `${item.y}px`
                             }}
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}


