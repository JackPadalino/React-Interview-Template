import { useState } from "react";
import "./App.css";

const App = () => {
  const [userData, setUserData] = useState("");
  const [loading, setLoading] = useState(false);
  const handleFetchData = () => {
    setLoading(true);
    const url = "https://randomuser.me/api";
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error!");
        }
        return response.json();
      })
      .then((data) => {
        const stringData = JSON.stringify(data);
        setUserData(stringData);
      })
      .catch((err) => {
        console.log("There was an error", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <button onClick={handleFetchData}>Get random user data</button>
      {loading ? <p>Please wait...</p> : <p>{userData}</p>}
    </div>
  );
};

export default App;
