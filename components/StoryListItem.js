import Link from 'next/link';

const StoryListItem = ( props ) => {
    return (
        <div>
            <h2 className="story-title">{props.story.title}</h2>
            <span className="story-points">{props.story.points || 0} points</span>
            <span className="story-link">
            <Link href={`/story?id=${props.story.id}`}>
                <a>{props.story.comments_count || 0 } comments</a>
            </Link>
            </span>
        </div>
    );
}

export default StoryListItem;