import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import Layout from '../components/Layout';
import CommentList from '../components/CommentsList';

class Story extends React.Component {
    
    static async getInitialProps({ req, res, query }) {
        
        const storyId = query.id;
        let content;
        try {
            const response = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`);
            content = await response.json();
        } catch ( err ) {
            content = [];
        }
        return ( { content });
    }
    
    render() {

        const { content } = this.props;

        if ( !content ) {
            return <Error statusCode={503} />
        }

        return (
            <Layout title={content.title} backButton={true}>
                <main>
                    <div className="story-title"><a href={content.url}>{content.title}</a></div>
                    <div className="story-details">
                        <strong>{content.points} Points</strong>
                        <strong>{content.comments_count} Comments</strong>
                        <strong>{content.time_ago}</strong>
                    </div>
                    {content.comments.length > 0 ? <CommentList comments={content.comments} />: <div></div> }
                </main>
            </Layout>
        )
    }
}
export default Story;