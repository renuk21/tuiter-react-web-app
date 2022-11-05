import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom"
import {useState} from "react";
import {editProfile} from "../reducers/profile-reducer";
import './index.css';

const EditProfile = () => {
    const profile = useSelector(state => state.profile)
    const [name, setName] = useState(profile[0].firstName + " " + profile[0].lastName)
    const [bio, setBio] = useState(profile[0].bio)
    const [location, setLocation] = useState(profile[0].location)
    const [website, setWebsite] = useState(profile[0].website)
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let dateOfBirthFormat;
    dateOfBirthFormat = profile[0].dateOfBirth.split(" ");
    let newDOB;
    let month = monthNames.indexOf(dateOfBirthFormat[1])+1
    newDOB = dateOfBirthFormat[2] + "-" + month + "-" + dateOfBirthFormat[0];
    const [birthdate, setBirthdate] = useState(newDOB)

    const dispatch = useDispatch();
    const editProfileHandler = () => {
        const newProfile = {
            profile: {
                name,
                bio,
                location,
                website,
                birthdate
            }
        }

        dispatch(editProfile(newProfile));
    }
    return (
        profile.map(profile =>
            <div>
                <div className="row">
                    <div className="col-1 align-items-center p-3 ps-4">
                        <Link to="/tuiter/profile"><FontAwesomeIcon icon={faTimes} /></Link>
                    </div>
                    <div className="col-11">
                        <span className="p-3 fw-bolder">Edit Profile</span>
                        <Link to="/tuiter/profile"><button className="btn btn-outline-dark rounded-pill float-end m-2" onClick={editProfileHandler}>Save</button></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb-5">
                        <img src={"../../images/" + profile.bannerPicture} width="100%" height="250px"/>
                        <img src={"../../images/" + profile.profilePicture} height="100px" width="100px" className="rounded-circle wd-profile-picture bg-white ms-2"/>
                    </div>
                </div>

                <div className="border border-1 border-solid p-2 m-2">
                    <label htmlFor="name" className="col-2 col-form-label pb-0 text-muted">Name</label>
                    <div className="col-10">
                        <input type="text" className="form-control border border-0 ps-0 pt-0" placeholder="Name" value={name}
                               onChange={(event) => setName(event.target.value)}/>
                    </div>
                </div>
                <div className="border border-1 border-solid p-2 m-2">
                    <label htmlFor="name" className="col-2 col-form-label pb-0 text-muted">Bio</label>
                    <div className="col-10">
                        <textarea className="form-control border border-0 ps-0 pt-0" placeholder="Bio" value={bio}
                                  onChange={(event) => setBio(event.target.value)}/>
                    </div>
                </div>
                <div className="border border-1 border-solid p-2 m-2">
                    <label htmlFor="name" className="col-2 col-form-label pb-0 text-muted">Location</label>
                    <div className="col-10">
                        <input type="text" className="form-control border border-0 ps-0 pt-0" placeholder="Location" value={location}
                               onChange={(event) => setLocation(event.target.value)}/>
                    </div>
                </div>
                <div className="border border-1 border-solid p-2 m-2">
                    <label htmlFor="name" className="col-2 col-form-label pb-0 text-muted">Website</label>
                    <div className="col-10">
                        <input type="text" className="form-control border border-0 ps-0 pt-0" placeholder="Website" value={website}
                               onChange={(event) => setWebsite(event.target.value)}/>
                    </div>
                </div>
                <div className="border border-1 border-solid p-2 m-2">
                    <label htmlFor="name" className="col-2 col-form-label pb-0 text-muted">Birth Date</label>
                    <div className="col-10">
                        <input type="date" className="form-control border border-0 ps-0 pt-0" placeholder="Birth Date" value={birthdate}
                               onChange={(event) => setBirthdate(event.target.value)}/>
                    </div>
                </div>
            </div>)

    )
}

export default EditProfile;