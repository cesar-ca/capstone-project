import React, { useContext, useState } from 'react';
import TopicLearn from '../apis/TopicLearn';
import { TopicsContext } from '../context/TopicsContext';

const AddTopic = () => {
    const {addTopics} = useContext(TopicsContext);
    const [name, setName] = useState("");
    const [difficulty, setDifficulty] = useState(""); 
    const [rango, setRango] = useState(""); 
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await TopicLearn.post("/", {
                name,
                difficulty,
                rango
            })
            addTopics(response.data.data.topic);
        } catch (err) {}

    }
    return (
        <div className="mb-4">
            <form action="">
                <div className="form-row">
                    <div className="col">
                        <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" placeholder="name"/>
                    </div>
                    <div className="col">
                        <input value={difficulty} onChange={e => setDifficulty(e.target.value)} className="form-control" type="text" placeholder="difficulty"/>
                    </div>
                    <div className="col">
                        <select value={rango} onChange={e => setRango(e.target.value)} className="custom-select my-1 mr-sm-2">
                            <option disabled>PriceRange</option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                            <option value="5">$$$$$</option>
                        </select>
                    </div>
                    <button onClick={handleSubmit} type="submit" className="btn btn-primary">Add</button>
        </div>
        </form>
        </div>

    );
};

export default AddTopic;
