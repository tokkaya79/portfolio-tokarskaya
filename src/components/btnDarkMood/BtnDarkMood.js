import { useEffect } from 'react';

import { useLocalStorage } from '../../utils/useLocalStorage';

import detectDarkMood from '../../utils/detectDarkMood';

import './style.css';

import sun from './img/sun.svg';
import moon from './img/moon.svg';

const BtnDarkMood = () => {
    const [darkMood, setDarkMood] = useLocalStorage(
        'darkMood',
        detectDarkMood()
    );

    const toggleDarkMood = () => {
        setDarkMood((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light';
        });
    };
    useEffect(() => {
        if (darkMood === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMood]);

    useEffect(() => {
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', (event) => {
                const newColorScheme = event.matches ? 'dark' : 'light';
                setDarkMood(newColorScheme);
            });
    }, [setDarkMood]);

    const btnNormal = 'dark-btn';
    const btnActive = 'dark-btn dark-btn--active';

    return (
        <>
            <button
                className={darkMood === 'dark' ? btnActive : btnNormal}
                onClick={toggleDarkMood}
            >
                <img
                    className="dark-btn__sun"
                    src={sun}
                    alt="sun-btn"
                />
                <img
                    className="dark-btn__moon"
                    src={moon}
                    alt="moon-btn"
                />
            </button>
        </>
    );
};

export default BtnDarkMood;
