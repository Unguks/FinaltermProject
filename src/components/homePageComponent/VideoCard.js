import { useState } from 'react';
import { Card } from 'antd';
import {Link} from 'react-router-dom';
import '../../styles/components/homePageComponent/videocard.css'

const { Meta } = Card;
const VideoCard = ({ id, title, image, link }) => {
    const [videoDetail] = useState({id: id, title: title, image: image, link: link});

    return (
        <Link to={`/video/${id}`} state={videoDetail} >
            <Card
                className='video-card'
                hoverable={true}
                loading={false}
                cover={<img alt={title} src={image} />}
            >
                <Meta title={DisplayName(title)} className='video-card-text'/>
            </Card>
        </Link>
    )
}

const DisplayName = (name) => {
    return (
        <div style={{ wordWrap: 'break-word', whiteSpace: 'normal' }}>
            {name}
        </div>
    )
}
export default VideoCard;