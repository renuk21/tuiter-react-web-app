import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft, faBirthdayCake, faCalendar} from '@fortawesome/free-solid-svg-icons'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {faLocationPin} from "@fortawesome/free-solid-svg-icons/faLocationPin";
import './index.css';

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile)
    return (
        profile.map(profile =>
            <div>
                <div className="row">
                    <div className="col-1 align-items-center p-3 ps-4">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </div>
                    <div className="col-11">
                        <span className="fw-bolder">{profile.firstName} {profile.lastName}</span><br/>
                        <span className="text-muted">6114 Tuits</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <img src={"../../images/" + profile.bannerPicture} width="100%" height="250px"/>
                        <img src={"../../images/" + profile.profilePicture} height="100px" width="100px" className="rounded-circle wd-profile-picture bg-white ms-2"/>
                        <Link to="/tuiter/edit-profile">
                            <button className="btn btn-outline-primary rounded-pill float-end m-2">Edit Profile</button></Link>
                    </div>
                </div>

                <h2 className="m-0">{profile.firstName} {profile.lastName}</h2>

                <div className="text-secondary mb-3">{profile.handle}</div>
                <div className="mb-3">{profile.bio}</div>
                <div className="mb-3">Website: {profile.website}</div>
                <div className="row mb-3">
                    <div className="col-3"><FontAwesomeIcon icon={faLocationPin}/> {profile.location}</div>
                    <div className="col-5"><FontAwesomeIcon icon={faBirthdayCake}/> Born: {profile.dateOfBirth}</div>
                    <div className="col-4"><FontAwesomeIcon icon={faCalendar}/> Joined: {profile.dateJoined}</div>
                </div>
                <div className="row">
                    <div className="col-3"><b>{profile.followingCount}</b> Following</div>
                    <div className="col-3"><b>{profile.followersCount}</b> Followers</div>
                </div>
            </div>)

    )
}

export default ProfileComponent;