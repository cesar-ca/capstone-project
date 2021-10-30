import React from 'react';
import Header from '../components/Header';
import AddTopic from '../components/AddTopic';
import TopicList from '../components/TopicList';

const Home = () => {
    return (
        <div>
            <Header/>
            <AddTopic/>
            <TopicList/>
        </div>
    )
}

export default Home;