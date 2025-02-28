import React from 'react';
import './App.css';
import logo from './public/logo192.png';

export default function App() {

    const [items, setItems] = React.useState<{ id: number; image: string; x: number; y: number }[]>([]);
    const [balance, setBalance] = React.useState(0);

    const addItem = () => {
        const randomX = Math.floor(Math.random() * window.innerWidth);
        const randomY = Math.floor(Math.random() * window.innerHeight);
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
        <div className={"container"}>
        <div className={"balance"}>
            <h1 className={"balik"}>Your balance {balance} uah</h1>
            <button className={"clear"} onClick={clearItems}>clear balance</button>
        </div>

        <div className={"clicker"}>
            <button className={"bablo"} onClick={addItem}></button>
            <div className={"elements"}>
                {items.map((item) => (
                    <div className={"element"} key={item.id}>
                        <img className={"money"} src={item.image} alt="Item"
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
    </div>
  );
}


