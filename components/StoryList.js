import Error from 'next/error';
import StoryListItem from '../components/StoryListItem';


class StoryList extends React.Component {
    
    render() {

        const { stories } = this.props;

        if ( stories.length === 0  ){ return <Error statusCode={503}/>}

        const content = stories.map((story, index) => {
            return <StoryListItem 
                        key={story.id} 
                        story={story}
                    />
        })

        return (
            <div>
                {content}
            </div>
        )
    }
}

export default StoryList;