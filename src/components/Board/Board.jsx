/**
 * 
 * @Developer Mounir Boudhan
 * 
 * @Package Codes Create Account App
 * 
 * @Date 11/2022
 * 
 */
import { useEffect, useState } from 'react';
import StepOne from './Step One/StepOne';
import StepTwo from './Step Two/StepTwo';
import StepThree from './Step Three/StepThree';
import './Board.css';

function Board() {
    const [count, setCount] = useState(1);
    const [state, setState] = useState();

    const handleClick = (count) => {
        setCount(count);
    };
    useEffect(() => {
        switch (count) {
            case 1:
                setState(<StepOne handleClick={
                    handleClick
                } />);
                break;

            case 2:
                setState(<StepTwo handleClick={
                    handleClick
                } />);
                break;

            default:
                setState(<StepThree />);
                break;
        }
    }, [count])

    return (
        <div className="board">
            <div className='steps'>
                <div className='step'>
                    <span className={
                        (count === 1) ? 'circle circle-active' : 'circle'
                    }>
                        <span className={
                            (count === 1) ? 'span-active' : ''
                        }>1</span>
                    </span>
                    <span className='line'></span>
                </div>
                <div className='step'>
                    <span className={
                        (count === 2) ? 'circle circle-active' : 'circle'
                    }>
                        <span className={
                            (count === 2) ? 'span-active' : ''
                        }>2</span>
                    </span>
                    <span className='line'></span>
                </div>
                <div className='step'>
                    <span className={
                        (count === 3) ? 'circle circle-active' : 'circle'
                    }>
                        <span className={
                            (count === 3) ? 'span-active' : ''
                        }>3</span>
                    </span>
                </div>
            </div>
            {state}
        </div>
    );
}

export default Board;