import { Link } from "react-router-dom";
const Movie = ({ user }) => {
    const { show } = user;
    return (
        <div>
            <div className="col">
                <div className="card">
                    <img src={show.image.medium} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body d-flex justify-content-between">
                        <div>
                            <h5 className="card-title">Name: {show.name}</h5>
                            <p>Language: {show.language}</p>
                        </div>
                        <div>
                            <p className="my-0">Status: {show.status}</p>
                            <a href={show.url} target='_Blank' rel="noreferrer">Read More...</a>
                        </div>
                    </div>
                    {/* <Link className="btn btn-primary">Summary</Link> */}
                    <div className="text-center my-3">
                        <Link to={`/summary/${show.id}`} className="btn btn-primary">Movie Summary</Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Movie;