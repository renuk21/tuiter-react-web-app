import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";
const WhoToFollowList = () => {
    return (`
            <div class="row py-2 text-bg-light border- rounded-top ms-1">
                <div class="fw-bold small">Who to follow</div>
            </div>
            ${who.map(who => {
                    return (WhoToFollowListItem(who));
                }).join('')
            }
`);
}

export default WhoToFollowList;