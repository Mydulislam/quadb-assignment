import React, { useEffect, useState } from 'react';
import User from '../Movie/Movie';

const Movies = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                console.log(data);
            }
            )
    }, [])
    return (
        <div>
            <h1 className='text-center my-5'><u>Our Movies</u></h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    users.map(user => <User
                        key={user.score}
                        user={user}
                    ></User>
                    )
                }
            </div>
        </div>
    );
};

export default Movies;