import React from 'react';
import { Layout, theme, Space, Typography, Card } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import useApiRequest from '../../hooks/useApiRequest';
import moneyFormat from '../../utils/MoneyFormatUtil';
import '../../styles/components/detailPageComponent/productsection.css';

const { Sider, Content } = Layout;
const { Title } = Typography;
const { Meta } = Card;

const ProductSection = ({ id }) => {
  const { token: { colorBgContainer } } = theme.useToken();
  const { data } = useApiRequest(`http://localhost:8000/product/${id}`);

  return (
    <Sider
      width={320}
      style={{
        background: { colorBgContainer },
        overflowX: 'hidden',
        overflowY: 'auto',
      }}
    >
      <Content className='sider'>
        <Title level={3} style={{ color: 'white' }}>PRODUCT</Title>
        <hr style={{ width: '100%', color: 'white' }} />
      </Content>

      <Content className='comment-content-display'>
        <Space direction="vertical" size={20}>
          {data && data.map((item) => (
            item.productList.map((product) => (
              <Card
                style={{ width: '260px' }}
                cover={<img alt={product.name} src={product.imageLink} />}
                actions={[
                  <a
                    href={product.link}
                    key={product.link}
                    target="_blank"
                    rel='noreferrer'
                    style={{ color: 'black', fontSize: '16px' }}
                  >
                    <ShoppingCartOutlined /> Buy!
                  </a>,
                ]}
              >
                <Meta title={DisplayName(product.name)} description={DisplayPrice(product.price)} />
              </Card>
            ))
          ))}
        </Space>
      </Content>
    </Sider>
  );
};

const DisplayPrice = (price) => (
  <span style={{ color: 'black' }}>
    <b>Price:</b> Rp.{moneyFormat(price)}
  </span>
);

const DisplayName = (name) => (
  <div style={{ wordWrap: 'break-word', whiteSpace: 'normal' }}>
    {name}
  </div>
);

export default ProductSection;
