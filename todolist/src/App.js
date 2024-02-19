import "./App.css";
import { useState } from "react";
import Input from "./components/Input";
import Item from "./components/Item";
import Header from "./components/Header";

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="bg-orange-900/40">
      <div className="h-screen flex flex-col items-center justify-center">
        <Header></Header>
        <div className="w-3/4 h-2/3 flex p-10 bg-white	rounded-lg shadow-md">
          <div className="w-2/5 h-full ">
            input
            <br />
            남은 과제 수 500개
            <br />
            할일을 추가하새요
            <Input list={list} setList={setList} />
          </div>
          <div className="w-3/5 h-full ">
            값을 줘요,.. output
            <Item list={list} setList={setList} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
