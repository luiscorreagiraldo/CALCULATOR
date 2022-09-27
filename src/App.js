import './App.css';
import Boton from "./components/boton"
import Pantalla from "./components/pantalla";
import BotonClear from "./components/botonClear";
import { useState } from "react";
import {evaluate} from "mathjs";



function App() {

  const [input, setInput] = useState("");

  const addInput = val => {
    setInput(input + val);
  };

  const calculateResult =()=> {
    if(input){
    setInput(evaluate(input))}
    else{
      setInput("Use the numbers!")
    }
    ;
    
  }



  return (
    <div className="App">
      <div className="calculator-container">
        <Pantalla
          input={input}
        />

        <div className="fila">
          <Boton manejarClick={addInput}>1</Boton>
          <Boton manejarClick={addInput}>2</Boton>
          <Boton manejarClick={addInput}>3</Boton>
          <Boton manejarClick={addInput}>+</Boton>


        </div>

        <div className="fila">
          <Boton manejarClick={addInput}>4</Boton>
          <Boton manejarClick={addInput}>5</Boton>
          <Boton manejarClick={addInput}>6</Boton>
          <Boton manejarClick={addInput}>-</Boton>

        </div>

        <div className="fila">
          <Boton manejarClick={addInput}>7</Boton>
          <Boton manejarClick={addInput}>8</Boton>
          <Boton manejarClick={addInput}>9</Boton>
          <Boton manejarClick={addInput}>*</Boton>
        </div>

        <div className="fila">
          <Boton manejarClick={calculateResult}>=</Boton>
          <Boton manejarClick={addInput}>0</Boton>
          <Boton manejarClick={addInput}>.</Boton>
          <Boton manejarClick={addInput}n>/</Boton>
        </div>

        <div className="fila">
          <BotonClear manejarClear={()=>setInput("")}>
            CLEAR
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
