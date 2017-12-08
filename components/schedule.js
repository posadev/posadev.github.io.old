import React from 'react';
import { Table } from 'antd';
import { schedule, communities, talkTypes, rooms } from '../data' ;

const hourToNumber = (hour) => Number(hour.replace(':', '').replace(/(am|pm)/, ''));
const basicFilter = (key) => (value, record) => record[key].indexOf(value) === 0;

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
    key: 'community',
    filters: Object.values(communities).map((community) => ({
      text: community,
      value: community
    })),
    onFilter: basicFilter('community')
  },
  {
    title: "Tipo",
    dataIndex: 'type',
    key: 'type',
    filters: Object.values(talkTypes).map((type) => ({
      text: type,
      value: type
    })),
    onFilter: basicFilter('type')
  },
  {
    title: "Sala",
    dataIndex: 'room',
    key: 'room',
    filters: Object.values(rooms).map((room) => ({
      text: room,
      value: room
    })),
    onFilter: basicFilter('room')
  }
];

export default function() {
  return (
    <Table columns={columns} dataSource={schedule} pagination={false}/>
  )
};
