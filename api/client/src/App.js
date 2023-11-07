import './App.css';
import react, { useEffect, useState } from "react";
import axios from "axios";


function App() {
  const [data, setData] = useState([]);

  const fetchContacts = async () => {
    try {
      const res = await axios.get("https://contact-backend2.onrender.com/api/contacts");
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchContacts();
  },[])
  return (
    <div className="App">
      <h1>your Contacts</h1>
      <div className=''>
        {data.map((item) => {
          return (
            <div>
              <h1>{item.username}</h1>
              <h3>{item.email}</h3>
              <h6>{item.phone}</h6>
            </div>
          )
        })

        }
    </div>
    </div>
  );
}

export default App;
