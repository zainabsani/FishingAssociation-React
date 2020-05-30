import React, { Component } from "react";
import {Table} from "semantic-ui-react";
import data from "../data/fakeCatch.json";

class Association extends Component {
    render() {
        return (
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Fisherman Id</Table.HeaderCell>
                        <br />
                        <Table.HeaderCell>Catches Id</Table.HeaderCell>
                        <br />
                        <Table.HeaderCell>Timestamp</Table.HeaderCell>
                        <br />
                        <Table.HeaderCell>Location</Table.HeaderCell>
                        <br />
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {data.map( el => {
                        return (
                            <Table.Row key = {el.id}>
                                <Table.Cell>{el.fishermanId}</Table.Cell>
                                <br />
                                <Table.Cell>{el.id}</Table.Cell>
                                <br />
                                <Table.Cell>{el.timestamp}</Table.Cell>
                                <br />
                                <Table.Cell>{el.location}</Table.Cell>
                                <br />
                            </Table.Row>
                        );
                    })}
                </Table.Body>
            </Table>

        );
    }
}

export default Association;
