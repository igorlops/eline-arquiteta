import './Sobre.css'


export default function Sobre(){
    return ( 
        <div id="sobre-min">
            <div className="container">
                <div className=" texto-sobre d-flex justify-content-around flex-row pt-5">
                    <div className="d-flex flex-column" >
                        <h2>Sobre mim</h2>
                        <p>Sou arquiteto licenciado com anos de experiência no setor.
                        Trabalhei em uma ampla gama de projetos, desde
                        residenciais e comerciais até empreendimentos de uso
                        misto. Meu objetivo é criar estruturas que durem muito
                        tempo e sejam utilizadas por muitas gerações futuras.</p>
                    </div>
                    <div className=" img-sobre d-flex flex-column">
                        <img src="img/my.avif" alt=""  />
                    </div>
                </div>
            </div>
        </div>
    )
}