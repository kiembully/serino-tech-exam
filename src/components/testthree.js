import React from "react";

const TestThree = () => {
    const initialData = [
        {
          "id": 1,
          "name": "John Doe",
          "status": 1
        },
        {
          "id": 2,
          "name": "Jane Doe",
          "status": 2
        },
        {
          "id": 3,
          "name": "Adam Rocket",
          "status": 2
        },
        {
          "id": 4,
          "name": "Luis Rocket",
          "status": 1
        }
    ]

    const groupByStatus = (data) => {
        const output = {};

        for (const item of data) {
            const { id, name, status } = item;
        
            if (!output[`status-${status}`]) {
              output[`status-${status}`] = [];
            }
        
            output[`status-${status}`].push({ id, name, status });
        }
        
        return output;
    }
    
    return (
        <div>
            <h2>Technical Exam</h2>
            <h3>Code ouput</h3>
            <pre>{JSON.stringify(groupByStatus(initialData), null, 2)}</pre>
        </div>
    )
}

export default TestThree;