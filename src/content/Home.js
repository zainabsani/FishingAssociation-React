import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div>
                <h2>This is the International Fishing Association Website</h2>
                <p><strong>Contact:</strong> to see the entire database of fishermen and their ids along with the
                    contact information.</p>
                <p><strong>Association:</strong> to see the entire database of fishermen and their catches along with their timestamps and locations.</p>
                <p><strong>Government:</strong> to see the collection of number of catches per location & number of catches by every fisherman. </p>
            </div>
        );
    }
}

export default Home;


/*
constructor(props) {
    super(props)
    this.state = {
        fishers: [],
    }
}

componentWillMount() {
    for (let i = 1; i < 11; i++) {
        const fisher = {
            id: Faker.random.number(),
            name: Faker.name.findName(),
            email: Faker.internet.email(),
            number: Faker.phone.phoneNumber(),
            address: Faker.address.city()
        }
        this.setState(prevState => ({
            fishers: [...prevState.fishers, fisher],
        }))
    }
}

renderUsers(fisher) {
    return (
        <div style={{ border: 'solid 1px #eee' }}>
            <h4>Id: {fisher.id} Name: {fisher.name}</h4>
        </div>
    )
}*/
