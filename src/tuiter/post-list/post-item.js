import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRetweet, faHeart, faUpload, faCircleCheck, faLink } from '@fortawesome/free-solid-svg-icons'
import "../home/index.css"

const PostItem = (
    {
        post
    }) => {
    let hasContent = true;
    let hasTitle = true;
    let titleClass = "pt-2 pb-1";
    let contentClass = "pb-2";

    if (post.title === "") {
        hasTitle = false;
        titleClass = "";
    }
    if (post.content === "") {
        hasContent = false;
        contentClass = "";
    }

    return(
        <li className="list-group-item wd-bg-black">
            <div className="row pt-2">
            <div className="col-2">
                <img src={post.userImage} height="40px" width="40px" className="rounded-circle"/>
            </div>
            <div className="col-10">
                <b className="text-black">{post.userName} </b> <span className="text-muted"> <FontAwesomeIcon icon={faCircleCheck} className="wd-dodgerblue"/> @{post.handle} · {post.time}</span>
                <p dangerouslySetInnerHTML={{__html: post.title}}></p>
                <div className="row rounded wd-border-gray me-2">
                    <img className=" rounded wd-border-bottom-gray p-0" src={post.image} width="100%" height="264px"/>

                    <span className={`text-black ${titleClass}`}><b>{post.desc1}</b></span>
                    <span  className={`text-black ${contentClass}`}>{post.desc2}</span>
                    <div className="wd-gray">
                        <a href="https://${post.link}" className="wd-textdec wd-gray"><FontAwesomeIcon icon={faLink} /> {post.link}</a>
                    </div>
                </div>
                <div className="row pt-2 pb-2">

                    <div className="col-3"><a className="wd-gray wd-textdec"  href="#"><i className="bi bi-chat"></i> <span className="wd-post">{post.comments}</span></a></div>
                    <div className="col-3"><a className="wd-gray wd-textdec"  href="#"><FontAwesomeIcon icon={faRetweet} /> <span className="wd-post">{post.retweets}</span></a></div>
                    <div className="col-3"><a className="wd-gray wd-textdec"  href="#"><FontAwesomeIcon icon={faHeart} /> <span className="wd-post">{post.likes}</span></a></div>
                    <div className="col-3"><a className="wd-gray wd-textdec"  href="#"><FontAwesomeIcon icon={faUpload} /> <span className="wd-post"></span></a></div>

                </div>
            </div>
        </div>
        </li>
    );
}

export default PostItem;