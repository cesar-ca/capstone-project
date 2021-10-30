import React, {useContext, useEffect} from 'react';
import TopicLearn from '../apis/TopicLearn';
import { TopicsContext } from '../context/TopicsContext';

const TopicList = (props) => {

    const {topic, setTopics} = useContext(TopicsContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await TopicLearn.get("/");
                setTopics(response.data.data.topic);
            } catch (err) {
    
            }
        };
        fetchData();
        
    },[]);

    return (
        <div className="list-group">
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Topic</th>
                        <th scope="col">Difficulty</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {topics.map(topic => {
                        return (
                            <tr key={topic.id}>
                            <td>{topic.name}</td>
                            <td>{topic.difficulty}</td>
                            <td><button className="btn btn-warning">Update</button></td>
                            <td><button className="btn btn-primary">Learn More</button></td>
                        </tr>

                        )
                        
                    })} */}
                    {/* <tr>
                        <td>mcdonals</td>
                        <td>new york</td>
                        <td>$$</td>
                        <td>rating</td>
                        <td><button className="btn btn-warning">Update</button></td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default TopicList;