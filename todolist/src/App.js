import logo from "./logo.svg";
import "./App.css";
import Input from "./components/Input";
import Item from "./components/Item";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-amber-900/30">
      <Header></Header>
      <div className="h-screen flex items-center justify-center">
        <div className="w-3/4 h-2/3 flex bg-white	rounded-lg">
          <div className="w-2/5 h-full shadow-md">
            input
            <br />
            남은 과제 수 500개
            <br />
            할일을 추가하새요
            <Input></Input>
          </div>
          <div className="w-3/5 h-full shadow-md">
            값을 줘요,.. output
            <Item></Item>
            <Item></Item>
            <Item></Item>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
