import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import Layout from '../components/Layout';
import Link from 'next/link';
import StoryList from '../components/StoryList';

class Index extends React.Component {

    static async getInitialProps({ req, res, query }) {
        let stories;
        let page;

        try {
            page = Number(query.page) || 1;
            if ( page === 0 ) { page = 1 };
            const response = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`)
            stories = await response.json();
        } catch ( err ) {
            console.log('err', err)
            stories = [];
        }
        return { stories, page };
    }

    render() {

        const { stories , page} = this.props;

        if ( stories.length === 0  ){ return <Error statusCode={503}/>}

        return (
            <Layout title="Hacker News" description="Sample Hacker News App">
                <div>
                    <h1>Hacker News</h1>
                    <div>
                    <StoryList stories={stories} />
                    </div>
                </div>
                <footer>
                    <Link href={`/?page=${page - 1}`}><a>({page - 1})</a></Link>
                    <span className="current-page">{ page }</span>
                    <Link href={`/?page=${page + 1}`}><a>({page + 1})</a></Link>
                </footer>
            </Layout>
        )
    }
}

export default Index;