
export async function sendContact() {
    var name = (document.getElementById("Nome") as HTMLInputElement).value;
    var email = (document.getElementById("Email") as HTMLInputElement).value;
    var assunto = (document.getElementById("Assunto") as HTMLInputElement).value;
    var msg = (document.getElementById("Mensagem") as HTMLInputElement).value;


    var bodyMsg = "Nome: " + name +
        "<br>\n E-mail " + email +
        "<br>\n Assunto " + assunto +
        "<br>\n Mensagem " + msg;

    var axios = require('axios');
    var data = JSON.stringify(
        {
            "email":
            {
                "subject": "Contato - Techno Girls",
                "body": bodyMsg,
                "replayEmail": email,
                "replayName": name,
                "addressEmail": "gabrielhenriquesp@gmail.com",
                "addressName": "Gabriel Name"
            }
        });

    var config = {
        method: 'post',
        url: 'https://gabrielhenriq.com.br/send/send',
        headers: {
            'user': 'api-sender-user',
            'password': '123456789@',
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            $(".msg-sucesos").show();
            $("#contato").trigger("reset");
        })
        .catch(function (error) {
            $(".msg-error").show();
            console.log(error);
        });

}


export default function Contact() {
    return (
        <main>
            <div className="page-heading about-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-content">
                                <h4>Contato</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="best-features about-features">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>Entre em contato conosco</h2>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="contact-form">
                                <div className='msg-sucesos'><span className="alert alert-success">Formulário enviado com sucesso!</span></div>
                                <div className='msg-error'><span className="alert">Erro ao enviar Formulário!</span></div>
                                <form
                                    onSubmit={async e => {
                                        e.preventDefault();
                                        sendContact();
                                    }}
                                    id="contato" name="contato" method="POST" action="" >
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <fieldset>
                                                <input name="Nome" type="text" className="form-control" id="Nome" placeholder="Nome" />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <fieldset>
                                                <input name="Email" type="text" className="form-control" id="Email" placeholder="E-Mail" />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <fieldset>
                                                <input name="Assunto" type="text" className="form-control" id="Assunto" placeholder="Assunto" />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <textarea name="Mensagem" className="form-control" id="Mensagem" placeholder="Mensagem" />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <button type="submit" id="form-submit" className="filled-button">Enviar Mensagem</button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script src="../../js/validate.js" />
        </main>
    )
}
