import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter';

export type CounterType = {
    getIncreaseCounter: (counter: number) => void
    getResetCounter: () => void
    counter: number
}


function App() {

    const [counter, setCounter] = useState(0)

    const getIncreaseCounter = (counter: number) => {
        setCounter(counter + 1)
    }

    const getResetCounter = () => {
        setCounter(0)
    }




  return (
    <div className="App">

        <div className='counter'>
            <Counter
            getIncreaseCounter={getIncreaseCounter}
            getResetCounter={getResetCounter}
            counter={counter}
        />
        </div>

    </div>
  );
}

export default App;
