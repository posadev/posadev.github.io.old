import React from 'react';
import { Table } from 'antd';
import schedule from '../data/schedule';

const basicSorter = (a,b) => a - b;

const columns = [
  {
    title: 'Hora',
    dataIndex: 'hour',
    key: 'hour',
    sorter: basicSorter
  },
  {
    title: 'Título',
    dataIndex: 'title',
    key: 'title',
    sorter: basicSorter
  },
  {
    title: "Speaker",
    dataIndex: 'speaker',
    key: 'speaker'
  },
  {
    title: "Comunidad",
    dataIndex: 'community',
    key: 'community',
    sorter: basicSorter
  },
  {
    title: "Tipo",
    dataIndex: 'type',
    key: 'type',
    sorter: basicSorter
  }
];

export default function() {
  return (
    <Table columns={columns} dataSource={schedule}/>
  )
};
