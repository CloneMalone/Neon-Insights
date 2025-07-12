import { useEffect } from 'react';

function useSetTheme(themeName = 'CyberDash') {
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', themeName);
    }, [themeName]);
}

export default useSetTheme;