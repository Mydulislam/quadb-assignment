import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const MovieSummary = () => {
    const { name, summary, image, updated } = useLoaderData()
    return (
        <div className='my-5'>
            <h1 className='text-center mb-4'><u>This Summary Of Movie</u></h1>
            <div class="card mb-3">
                <img src={image.medium} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{summary.replace(/<[^>]*>/g, "")}</p>
                    <p class="card-text">Last Updated: <b>{new Date(updated).toDateString()}</b></p>
                </div>
            </div>

            <div className='my-4'>
                <Link className='btn btn-primary' to='/'>Back to Homepage</Link>
            </div>
        </div>
    );
};

export default MovieSummary;