import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch('/api/chats', {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            // Your data here, e.g., message: "Hello, world!"
          }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    sendRequest();
  }, []);

  return (
    <div className="App">
      {/* Your component's content goes here */}
    </div>
  );
}

export default App;
