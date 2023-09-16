import React from 'react'

const Card = ({movieList, setMovielist}) => {
  return (
    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3'>
        
        {
            movieList.map(movie => ((   
                
                <div className=" p-3" key={movie.title} data-testid='movie-card'>
                    <div className="card-img">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className='img-fluid' data-testid='movie-poster'/>
                    </div>
                    <div className="card-body mt-2">
                        <small className="text-muted" data-testid='movie-release-date'>USA, {movie.release_date}</small>
                        <div className=''>
                            <div className="d-flex align-item-center mt-1 ">
                                {/* <h3 className="badge bg-warning fw-bolder text-dark me-1 text-center">IMDb</h3> */}
                                <img src="./Images/imdb.png" className='me-2' alt="" />
                                <small className="rating">{movie.vote_average}/10</small>
                            </div>
                            <div className="right">

                            </div>
                        </div>
                        <p className='fw-bold my-1'data-testid='movie-title'>{movie.title}</p>
                        <small className="text-muted fw-bold">Action, Adventure, Drama</small>
                    </div>
                </div>
            )))
        }
    </div>
  )
}

export default Card