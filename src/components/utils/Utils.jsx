import { useEffect, useState } from 'react';

function ScreenSize() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return screenWidth;
}

export function reduceTo20Words(inputString) {
    const words = inputString.trim().split(/\s+/); // Split the string into words
    const reducedWords = words.slice(0, 20); // Take the first 20 words
    const reducedString = reducedWords.join(' '); // Join the words back into a string
    
    return reducedString;
}

export function reduceTo5Words(inputString) {
    const words = inputString.trim().split(/\s+/); // Split the string into words
    const reducedWords = words.slice(0, 5); // Take the first 20 words
    const reducedString = reducedWords.join(' '); // Join the words back into a string
    
    return reducedString;
}



export default ScreenSize;
