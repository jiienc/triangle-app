import "../styles/Profile.css";
import profile from "../assets/profile.png"

export default function ProfilePage() {
    return (
        <div className="profile">
            <img className="ellipse-icon" alt="" src={profile} />

            <img className="profile-child" alt="" src={profile} />

            <div className="joko-widodo">Joko Widodo</div>
            <div className="profile-item" />
            <div className="edit-profile">Edit Profile</div>

            <div className="profile-inner" />
            <div className="div">1</div>
            <div className="playlists">Playlists</div>

            <div className="rectangle-div" />
            <div className="div1">1</div>
            <div className="followers">Followers</div>

            <div className="profile-child1" />
            <div className="div2">1</div>
            <div className="following">Following</div>

            <div className="my-favorite-artist">My Favorite Artist</div>
            <img className="rectangle-icon" alt="" src="/rectangle-47@2x.png" />
            <div className="ghea-indrawari">Ghea Indrawari</div>
            <img className="profile-child2" alt="" src="/rectangle-12@2x.png" />
            <div className="james-arthur">James Arthur</div>
            <img className="profile-child3" alt="" src="/rectangle-48@2x.png" />
            <div className="bruno-mars">Bruno Mars</div>
            <img className="profile-child4" alt="" src="/rectangle-46@2x.png" />
            <div className="fourtwnty">Fourtwnty</div>
            <img className="profile-child5" alt="" src="/rectangle-52@2x.png" />
            <div className="taylor-swift">Taylor Swift</div>
            <img className="profile-child6" alt="" src="/rectangle-16@2x.png" />
            <div className="blackpink">BLACKPINK</div>
        </div>
    );
}
