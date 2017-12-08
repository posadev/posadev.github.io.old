import React from 'react';
import { Table } from 'antd';
import schedule from '../data/schedule';

const hourToNumber = (hour) => Number(hour.replace(':', '').replace(/(am|pm)/, ''));

const columns = [
  {
    title: 'Hora',
    dataIndex: 'hour',
    key: 'hour',
    sorter: (a, b) => hourToNumber(a.hour) - hourToNumber(b.hour)
  },
  {
    title: 'Título',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: "Speaker",
    dataIndex: 'speaker',
    key: 'speaker'
  },
  {
    title: "Comunidad",
    dataIndex: 'community',
    key: 'community'
  },
  {
    title: "Tipo",
    dataIndex: 'type',
    key: 'type'
  }
];

export default function() {
  return (
    <Table columns={columns} dataSource={schedule} pagination={false}/>
  )
};
