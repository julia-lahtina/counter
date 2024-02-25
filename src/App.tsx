import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter';

export type CounterType = {
    getIncreaseCounter: (counter: number) => void
    getResetCounter: () => void
    counter: number
    minValue: number
    maxValue: number
}


function App() {

    const minValue = 0;
    const maxValue = 5;

    const [counter, setCounter] = useState(minValue)

    const getIncreaseCounter = (counter: number) => {
        setCounter(counter + 1)
    }
    const getResetCounter = () => {
        setCounter(minValue)
    }


    return (
        <div className="App">

            <div className="counter">
                <Counter
                    getIncreaseCounter={getIncreaseCounter}
                    getResetCounter={getResetCounter}
                    counter={counter}
                    maxValue={maxValue}
                    minValue={minValue}
                />
            </div>

        </div>
    );
}

export default App;
