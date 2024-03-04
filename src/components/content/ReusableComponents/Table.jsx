import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';

const TablePetition = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://ec2-54-162-151-251.compute-1.amazonaws.com:4000/petitions/1');
        setData(response?.data || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const handleDownloadPetitions = () => {
    const content = data.map(item => item.Petition).join('\n\n\n'); 
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'petitions.txt'; 
    document.body.appendChild(element); 
    element.click(); 
  };

  const defaultColumns = [
    {
      title: 'Petições do Usuário',
      dataIndex: 'Petition',
      width: '70%',
      editable: false,
      render: text => <span>{`${text.substring(0, 50)}...`}</span>,
    },
    {
      title: 'Adquirir petição',
      dataIndex: 'pdfLink',
      render: (_, record) => (
        <a onClick={handleDownloadPetitions}>Baixar Petição</a>
      ),
    },
  ];

  const columns = defaultColumns.map((col) => ({
    ...col,
  }));

  return (
    <div>
      <Table
        bordered
        dataSource={data}
        columns={columns}
      />
    </div>
  );
};

export default TablePetition;
