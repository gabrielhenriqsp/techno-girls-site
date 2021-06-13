import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,800&display=swap" rel="stylesheet" />
                    <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />

                    <link rel="stylesheet" href="src/styles/fontawesome.css" />
                    <link rel="stylesheet" href="src/styles/templatemo-sixteen.css" />
                    <link rel="stylesheet" href="src/styles/owl.css" />
                    <link rel="stylesheet" href="src/styles/custom.css" />

                    <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet" />

                    <script src="//code.jquery.com/jquery-3.6.0.min.js"></script>
                </Head>
                <Header />
                <body>
                    <Main />
                    <NextScript />
                </body>
                <Footer />
            </Html>
        )
    }
}