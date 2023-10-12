import React from 'react';
import Overview from './Overview';

function Movie({ title, poster_path, vote_average, overview}) {
    return (
        <div className="Container">
            <div className="Contents">
                <img className="img" src={poster_path} />
                <div className="Text">
                    <div className="Title">{title}</div>
                    <div className="VoteAverage">{vote_average}</div>
                </div>
                <Overview title={title} overview={overview} />
            </div>
        </div>
    );
}

export default Movie