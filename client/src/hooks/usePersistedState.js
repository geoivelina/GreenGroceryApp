import { useState } from "react";

export default function usePersistedSTate(key, defaultValue) {
    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem(key);
        if (persistedState) {
            return JSON.parse(persistedState);
        }
        return defaultValue;
    });

    const setPersistedState = (value) => {
        setState(value);
        let seriliazedValue;

        if (typeof value ==='function') {
            seriliazedValue = JSON.stringify(value(state));
        } else{
            seriliazedValue = JSON.stringify(value);
        }

        localStorage.setItem(key, seriliazedValue);
    };

    return [state, setPersistedState];
}
