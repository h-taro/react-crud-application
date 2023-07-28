import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react'

export default function Read() {
  const [apiData, setApiData] = useState([{}])

  useEffect(() => {
    axios.get('https://64c34138eb7fd5d6ebd0a7b3.mockapi.io/fakeData')
      .then((response) => {
        setApiData(response.data)
      })
  }, [])

  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {apiData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </div>
  )
}