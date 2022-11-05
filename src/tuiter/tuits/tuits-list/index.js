import React from "react";
import TuitItem
    from "../tuits-item/index";
import {useSelector} from "react-redux";

const PostSummaryList = () => {
    const tuitsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                tuitsArray.map(tuit =>
                    <TuitItem tuit={tuit}/> )
            }
        </ul>
    );
};
export default PostSummaryList;