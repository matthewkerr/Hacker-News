import Link from 'next/link';
import Head from 'next/head';
import '../styles/global.scss';
import Router from 'next/router';

const Layout = ({children, title, description, backButton}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}></meta>

            </Head>
            <div className="container">
                <nav>
                    {backButton && <span onClick={()=> Router.back()} className='back-button'>&#x2b05;</span>}
                    <Link href='/'><a><span className="main-title">Hacker News</span></a></Link>
                </nav>
                {children}
            </div>
        </div>
    );
}

export default Layout;