import React from 'react';
import './Header.css'; // Adicione seus estilos personalizados aqui

function Header() {
  return (
    <header id="home" className="header-container">
     
        <div className="image-wrapper">

            <div className="overlay"></div>
            <img 
            src="img/arquitetura-contemporanea.jpg" 
            alt="Imagem Projeto de Arquitetura casa elegante" 
            className="header-image"
            />   
            <div className='header-titulo'>
                <h1>Eline Silva</h1>
                <p>Transformando espaços e criando experiências únicas através da arquitetura.</p>
            </div>
        </div>
    </header>
  );
}

export default Header;