import artists from "../assets/artist.png"
import albums from "../assets/album.png"
import playlists from "../assets/playlist.png"

export default function Browse() {
    return (
        <div>
            <div className="dashboard-before-login-item" />
            <div className="line-div-2" />
            <div className="browse">Browse</div>
            <div className="artists">Artists</div>
            <img className="musician-male-icon" alt="" src={artists} />
            <div className="albums">Albums</div>
            <img className="music-library-icon" alt="" src={albums} />
            <div className="playlists">Playlists</div>
            <img className="playlist-icon" alt="" src={playlists} />
        </div>
    );
}
