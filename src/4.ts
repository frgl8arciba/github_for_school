import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/repos/facebook/react')
      .then(response => response.json())
      .then(data => setMessage(data.description))
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}
