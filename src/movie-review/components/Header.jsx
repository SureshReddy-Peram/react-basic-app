import React from 'react'

const Header = () => {
  return (
    <>
    
    <header className="d-flex justify-content-center pt-3 bg-dark  border-bottom">
      <a href="/" className="d-flex align-items-center ms-2 mb-3 mb-md-2 me-md-auto text-light text-decoration-none">
       <svg xmlns="http://www.w3.org/2000/svg" width="40" height="36" fill="currentColor" className="bi bi-film" viewBox="0 0 16 16">
        <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"/>
       </svg>
        <span className="fs-2 fw-700 ms-2">Film Nagar</span>
      </a>

      <ul className="nav nav-pills me-5 pe-5">
        <li className="nav-item"><a href="localhost:3000/" className="nav-link" aria-current="page">HOME</a></li>
        <li className="nav-item"><a href="#" className="nav-link">REVIEWS</a></li>
        <li className="nav-item"><a href="https://filmyfocus.com/movie-news" className="nav-link">MOVIE NEWS</a></li>
        <li className="nav-item"><a href="#" className="nav-link">OTT</a></li>
        <li className="nav-item"><a href="#" className="nav-link">WEB STORIES</a></li>
        <li className="nav-item"><a href="#" className="nav-link">FOCUS</a></li>
        <li className="nav-item"><a href="#" className="nav-link">COLLECTIONS</a></li>
      </ul>

      <div className="flex align-items-center justify-content-end ">
      <form className="w-100 me-3" role="search">
          <div className="d-flex flex me-4 ">
          <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
            <button type="submit" className="btn btn-outline-success ms-2">Search</button>
          </div>
        </form>
      </div>
       
    </header>
  
  </>
  )
}

export default Header;
