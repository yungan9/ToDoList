import "./App.css";
import { useState } from "react";
import Input from "./components/Input";
import Header from "./components/Header";
import ShowList from "./components/ShowList";

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="bg-orange-900/40">
      <div className="h-screen flex flex-col items-center justify-center">
        <Header></Header>
        <div className="w-3/4 h-2/3 flex p-10 bg-zinc-100	rounded-lg shadow-md">
          <div className="w-2/5 h-full bg-white rounded-lg shadow-lg">
            <h1 className="flex justify-center items-center">To-do list</h1>
            <Input  list={list} setList={setList} />
          </div>
          <div className="w-3/5 h-full bg-white rounded-lg shadow-lg ">
            <ShowList list={list} setList={setList} />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
