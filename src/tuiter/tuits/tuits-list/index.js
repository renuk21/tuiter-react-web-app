import React, {useEffect} from "react";
import {findTuitsThunk}
    from "../../../services/tuits-thunks";
import TuitItem
    from "../tuits-item/index";
import {useSelector, useDispatch} from "react-redux";

const PostSummaryList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, []);
    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }

            {
                tuits.map(tuit => <TuitItem key={tuit._id} tuit={tuit}/>)
            }
        </ul>
    );
};
export default PostSummaryList;