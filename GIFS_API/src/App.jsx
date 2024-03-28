iimport React from 'react';
import './App.css'; 
import './style.css'; 

function LandingPage() {
  return (
    <div>
      <div className="container">
        <header>
          <h1>GIFs</h1>
          <div className="search-container">
            <input type="text" id="search" placeholder="Buscar GIFs" />
            <button id="searchBtn">Buscar</button>
          </div>
        </header>
        <div className="gif-container" id="gifContainer">
          {/* Tarjetas de GIFs */}
          <div className="gif-item">
            <img src="/assets/image/giphy1.gif" alt="Placeholder" />
          </div>
          {/* Añade el resto de las tarjetas de GIFs aquí */}
        </div>
        <div className="pagination">
          <button id="prevBtn" className="pagination-btn">Previous page</button>
          <button id="nextBtn" className="pagination-btn">Next page</button>
        </div>
        <footer>
          <div className="social-icons">
            <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
            <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default LandingPage;
