import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json.slice(0, 10)));
    }, []);

  return (
    <>
      <h1>React PWA App</h1>
        <div className="card">
            {data.map((item, index) => (
                <div key={index} className="main">
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>
    </>
  );
}

export default App;
