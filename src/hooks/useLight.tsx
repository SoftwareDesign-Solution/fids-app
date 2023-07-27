import { useState, useEffect } from 'react';

const useLight = () => {

    const [first, setFirst] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => setFirst(prevState => !prevState), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="grid grid-cols-2 gap-1">
            <div className={'h-8 w-8 ' + (first ? 'bg-green-700' : '')}></div>
            <div className={'h-8 w-8 ' + (!first ? 'bg-green-700' : '')}></div>
        </div>
    );
};

export { 
    useLight
};