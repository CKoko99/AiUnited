import React, { useEffect, useState } from 'react';

// Child component
const ChildComponent = (props) => {

    return (
        <div>
            Child Component
            <button onClick={props.action}>Perform Action</button>
        </div>
    );
};

// Parent component
const ParentComponent = () => {
    // State to keep track of actions
    const [actions, setActions] = useState([]);

    // Function to generate a random string of numbers
    const generateRandomString = () => {
        return Math.random().toString(36).substring(7);
    };

    // Function to perform action in each child component
    const performAction = (action) => {
        // Log the action
        console.log(`Action performed: ${action}`);
    };

    // Function to handle click event in parent component
    const createChild = () => {
        // Generate random string for the action
        const randomString = generateRandomString();
        // Update actions
        setActions([...actions, randomString]);
    };

    //create a function to log the child Ids
    const logButtonIds = () => {
        console.log(actions);
    }

    return (
        <div>
            <button onClick={createChild}>Create a Child</button>
            <button
                onClick={logButtonIds}
            >Log Button Ids</button>
            {/* Map over actions and render ChildComponent for each action */}
            {actions.map(id => (
                <ChildComponent key={id} id={id} action={() => performAction(id)} />
            ))}
        </div>
    );
};

export default ParentComponent;
