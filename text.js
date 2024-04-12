const sendRequest = async () => {
    try {
        const response = await fetch('http://localhost:8000/api/habits', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({date:"2024-04-06",habit:{name:"abc",status:"None"} }),
        });

        if (!response.ok) {
            throw new Error('Failed to add habit');
        }
        const data= await response.json()
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
};

sendRequest();
