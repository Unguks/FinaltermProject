import FooterComponent from '../components/layouts/FooterComponent';
import HeaderComponent from '../components/layouts/HeaderComponent';
import CommentSection from '../components/detailPageComponent/CommentSection';
import ProductSection from '../components/detailPageComponent/ProductSection';
import { Layout } from 'antd';
import { useLocation } from 'react-router-dom';
import '../styles/pages/detailpage.css'
const { Content } = Layout;

function DetailPage() {
    const location = useLocation();
    const { id, title, link } = location.state;
    const videoId = link.substring(link.lastIndexOf('/') + 1)

    return (
        <Layout className='layout'>
            <HeaderComponent />
            <Layout>
                <ProductSection id={id} />
                <Content className='content-iframe'>
                    <h1 style={{ color: 'white' }}>{title}</h1>
                    <iframe
                        width="100%"
                        height="90%"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </Content>
                <CommentSection id={id} />
            </Layout>
            <FooterComponent />
        </Layout>
    );
};

export default DetailPage;