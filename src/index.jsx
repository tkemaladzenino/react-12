
import React from 'react';
import ReactDOM from 'react-dom/client';

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];

const App = () => {
    const rotatedProducts = [...products.slice(1), products[0]];

    const listItemStyle = {
        listStyle: 'none',
        fontSize: '1.5rem',
    };

    return (
        <ul>
            {rotatedProducts.map(({ title, isFruit, id }) => (
                <li key={id} style={listItemStyle}>
                    <span style={{ color: isFruit ? 'purple' : 'green' }}>{title}</span>
                </li>
            ))}
        </ul>
    );
};

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);





