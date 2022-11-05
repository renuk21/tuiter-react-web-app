import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRetweet, faHeart, faUpload } from '@fortawesome/free-solid-svg-icons'


const TuitStats = (
    {
        tuit
    }) => {
    return(
        <div className="row">
            <div className="col-3"><a className="wd-grey" style={{"textDecoration": "none"}} href="#"><i className="bi bi-chat"></i> <span className="number">{tuit.replies}</span></a></div>
            <div className="col-3"><a className="wd-grey" style={{"textDecoration": "none"}} href="#"><FontAwesomeIcon icon={faRetweet} /> <span className="number">{tuit.retuits}</span></a></div>
            { !tuit.liked && <div className="col-3"><a className="wd-grey" style={{"textDecoration": "none"}} href="#"><FontAwesomeIcon icon={faHeart} /> <span className="number">{tuit.likes}</span></a></div> }
            { tuit.liked && <div className="col-3"><a className="wd-grey" style={{"textDecoration": "none"}} href="#"><FontAwesomeIcon style={{"color": "red"}} icon={faHeart} /> <span className="number">{tuit.likes}</span></a></div>}
            <div className="col-3"><a className="wd-grey" style={{"textDecoration": "none"}} href="#"><FontAwesomeIcon icon={faUpload} /> <span className="number"></span></a></div>
        </div>
    );
}

export default TuitStats;