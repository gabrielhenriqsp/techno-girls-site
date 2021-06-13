import { api } from '../services/api';
import { GetStaticProps } from 'next';
import Image from 'next/image';

type QuemSomos = {
    id: string;
    title: string;
    members: string;
}

type QuemSomoProps = {
    quemSomos: QuemSomos[];
}

export const getStaticProps: GetStaticProps = async () => {
    const { data } = await api.get('quemSomos');

    return {
        props: {
            quemSomos: data,
        },
        revalidate: 60 * 60 * 8
    }
}

export default function Home(props: QuemSomoProps) {
    return (
        <main>
            <div className="page-heading about-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-content">
                                <h4>{props.quemSomos[0]['text'][0]['title']}</h4>
                                <h2>{props.quemSomos[0]['text'][0]['sub']}</h2>
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
                                <h2>TECHNO GIRLS</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-image">
                                <img src="http://gabrielhenriq.com.br/tecnho-girls/header.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="left-content">
                                <h4>{props.quemSomos[0]['text'][0]['title']}</h4>
                                <p className="p-padrao">
                                    Somos um projeto que
                                    promove ações para:Aumentar a representatividade das mulheres na área da Computação;
                                    Despertar o interesse de futuras estudantes da área Tech;
                                    Mantendo a motivação daquelas já inseridas nos cursos de Tecnologia do Centro Universitário UNA e demais instituições do grupo Ânima.
                                    <br /><br />
                                    <b>Missão:</b> fortalecer a representatividade feminina na área de tecnologia;
                                    <br /> <b>Visão:</b> ser referência nacional em diversidade de gênero na tecnologia;
                                    <br /> <b>Valores:</b> diversidade, interação, equipe (juntos somos mais fortes), união, respeito
                                </p>
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
        </main>
    )
}
