import React from 'react';
import { Layout } from 'antd';
import { Schedule } from './components';

const { Header, Footer, Sider, Content } = Layout;

export default function() {
  return (
    <Layout>
      <Content>
        <Schedule/>
      </Content>
    </Layout>
  )
}
