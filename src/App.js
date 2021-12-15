import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [num, setNum] = useState("");
  const [name, setName] = useState("");
  const baseURL = "https://pokeapi.co/api/v2/pokemon/";
  useEffect(() => {
    async function getData() {
      const res = await axios.get(`${baseURL}${num}`);
      setName(res.data.name);
    }

    getData();
  });
  return (
    <div className="App">
      <h1>you choose {name}</h1>
      <select
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
}
