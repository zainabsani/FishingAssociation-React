import React, { Component } from "react";
import {  Table } from "semantic-ui-react";
import fishmen from '../data/fakeData.json';

class Contact extends Component {
    render() {
        return (
            <Table celled>
                <Table.Header singleLine >
                    <Table.Row>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Full Name</Table.HeaderCell>
                        <Table.HeaderCell>Phone</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Equipment Used</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {fishmen.map( el => {
                        return (
                            <Table.Row key = {el.id}>
                                <Table.Cell>{el.id}</Table.Cell>
                                <Table.Cell>
                                    {el.firstName} {el.lastName}
                                </Table.Cell>
                                <Table.Cell>{el.contact}</Table.Cell>
                                <Table.Cell>{el.email}</Table.Cell>
                                <Table.Cell>{el.equipment}</Table.Cell>
                            </Table.Row>
                        );
                    })}
                </Table.Body>
            </Table>
        );
    }
}

export default Contact;
