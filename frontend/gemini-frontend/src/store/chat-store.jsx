import { createContext, useRef, useState } from "react";
import main from '../config/api-call';

export const Context = createContext();

const ContextProvider = (props) => {
    const input = useRef();
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState([]);

    function setInputValue(value) {
        input.current.value = value;
    }

    async function onSent() {
        const userMessage = input.current.value.trim();
        if (!userMessage) return;

        setLoading(true);
        setResultData(prev => [...prev, { role: 'user', content: userMessage }]);

        input.current.value = '';

        try {
            const response = await main(userMessage);
            const botMessage = response.message || "Sorry, no response.";
            setResultData(prev => [...prev, { role: 'bot', content: botMessage }]);
        } catch (error) {
            setResultData(prev => [...prev, { role: 'bot', content: "Error: Could not fetch response." }]);
        }

        setLoading(false);
    }

    const contextValue = {
        onSent,
        loading,
        resultData,
        input,
        setInput: setInputValue,
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
