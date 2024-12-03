import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ItemCategory(){
    const [categoryName, setCategoryName] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000');
                setCategoryName(response.data);
            } catch (error) {
                setError(error.message);
            }
        }

        fetchData();
    }, []);


    return (<div>
        <h1>
            {error && <p>Error: {error}</p>}
            {categoryName ? <pre>{JSON.stringify(categoryName.message, null, 2)}</pre> : <p>Loading ...</p>}
        </h1>
    </div>);
};