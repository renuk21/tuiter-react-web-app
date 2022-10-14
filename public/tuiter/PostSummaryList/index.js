import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";
const PostSummary = () => {
    return (`
            <ul class="list-group">
            ${posts.map(post => {
            return (PostSummaryItem(post));
            }).join('')
            }
            </ul>
`);
}

export default PostSummary;