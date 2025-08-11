import { useEffect } from 'react';

function useSetTheme(themeName = 'Default') {
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', themeName);
    }, [themeName]);
}

export default useSetTheme;