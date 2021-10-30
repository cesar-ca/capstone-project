import React, {useState, createContext} from 'react';

export const TopicsContext = createContext();

export const TopicsContextProvider = (props) => {
    const [topics, setTopics] = useState([]);

    const addTopics = (topic) => {
        setTopics([...topic, topic]);
    };

    return (
        <TopicsContext.Provider value={{ topics, setTopics, addTopics }}>
            {props.children}
        </TopicsContext.Provider>
    );
};
