export default function Home() {
  return (
    <main>
      <div className="page-heading about-heading header-text"></div>
      <div className="best-features about-features">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>TECHNO GIRLS</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-image">
                <video width="100%" height="auto" controls>
                  <source src="http://gabrielhenriq.com.br/tecnho-girls/techno-video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="col-md-6">
              <div className="left-content">
                <h4>sobre o projeto</h4>
                <div>
                  <p className="p-padrao">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <ul className="social-icons">
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fa fa-behance"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="best-features about-features">
        <div className="container">
          <div className="row elementos-home">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Eventos</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="image" style={{ backgroundImage: "url(http://gabrielhenriq.com.br/tecnho-girls/evento1706jpg.jpg),url('http://gabrielhenriq.com.br/tecnho-girls/header.jpg')" }} >
              </div>
            </div>
            <div className="col-md-6">
              <div className="left-content">
                <h4>Talk - 17/06/2021 </h4>
                <div>
                  <p className="p-padrao">Bate papo com nossa convidada Dani Marinho, Dani atua na parte de
                    Analytics Translator na ThoughtWorks Brasil</p>
                </div>
                <ul className="social-icons">
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fa fa-behance"></i></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row elementos-home">
            <div className="col-md-6">
              <div className="image" style={{ backgroundImage: "url(http://gabrielhenriq.com.br/tecnho-girls/logo-tecnho-girls.png),url('http://gabrielhenriq.com.br/tecnho-girls/header.jpg')" }} >
              </div>
            </div>
            <div className="col-md-6">
              <div className="left-content">
                <h4>Encontros - Toda Quarta</h4>
                <div>
                  <p className="p-padrao">Encontros semanais para discussão do projeto, apresentação dos trabalhos
                  desenvolvidos ao longo do semana.</p>
                </div>
                <ul className="social-icons">
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fa fa-behance"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="service-item">
                <div className="icon">
                  <i className="fa fa-graduation-cap"></i>
                </div>
                <div className="down-content">
                  <h4>Realização</h4>
                  <p>Projeto de Extensão - GRUPO ANIMA</p>
                  <a href="#" target="blank" className="filled-button">Sobre</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <div className="icon">
                  <i className="fa fa-users"></i>
                </div>
                <div className="down-content">
                  <h4>Professora Orientadora</h4>
                  <p>Erica Oliveira</p>
                  <a href="https://www.linkedin.com/in/ericaoliveira/" target="blank" className="filled-button">Linkedin</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <div className="icon">
                  <i className="fa fa-envelope"></i>
                </div>
                <div className="down-content">
                  <h4>Contato</h4>
                  <p>Entre em contato conosco!</p>
                  <a href="contato" className="filled-button">Contato</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </main>
  )
}
