import React from 'react';

const useOutsideClick = <T extends HTMLElement = HTMLElement>(ref: React.RefObject<T>, callback: () => void) => {
    React.useEffect(() => {
        const listener = (event: React.BaseSyntheticEvent | MouseEvent) => {
            if (!ref.current || ref.current.contains(event.target)) return;

            callback();
        };

        document.addEventListener('click', listener);

        return () => {
            document.removeEventListener('click', listener);
        };
    }, [ref, callback]);
};

export default useOutsideClick;
