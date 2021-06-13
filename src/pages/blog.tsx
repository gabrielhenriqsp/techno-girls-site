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
                                <div dangerouslySetInnerHTML={{ __html: props.quemSomos[0]['text'][0]['text'] }} />
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
