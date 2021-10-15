import { useEffect, useState } from 'react';

import { Hours, Minutes, Seconds } from './components/index'
import Digits from './types';
import './Clock.css';

const Clock = () => {
    const [date, setDate] = useState<Date>(new Date());
    const [digit, setDigits] = useState<Digits>({
        Hours:   date.getHours(),
        Minutes: date.getMinutes(),
        Seconds: date.getSeconds() 
    });

    useEffect(() => {
        const currentInterval = 
            setInterval( () => {
                setDate(new Date());
                setDigits({
                    Hours:   date.getHours(),
                    Minutes: date.getMinutes(),
                    Seconds: date.getSeconds()
                })
            }, 1000);
        return () => {
            clearInterval(currentInterval);
        }
    }, [date]);

    return (
        <div className="Clock">
            <Hours digit={digit.Hours} />
            <Minutes digit={digit.Minutes} />
            <Seconds digit={digit.Seconds} />
        </div>
    )
}

export default Clock;