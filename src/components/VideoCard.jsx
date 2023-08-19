import { Link } from "react-router-dom";

function VideoCard({ path, img, title }) {
    return ( 
        <div className="w-full rounded-md">
            <Link to={"/channels/" + path}>
                <div className="relative">
                    <img src={img} alt="image" className="h-96 object-cover rounded-lg"/>
                    <p className="absolute bottom-0 items-end px-3 py-1">{title}</p>
                </div>
            </Link>
        </div>
     );
}

export default VideoCard;