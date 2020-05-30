const faker = require('faker');
const fs = require('fs');

let generateFishermen = () => {
    let fishermen = [];

    for (let id = 1; id < 11; id++) {
        let firstName = faker.name.firstName();
        let lastName = faker.name.lastName();
        let email = faker.internet.email();
        let contact = faker.phone.phoneNumber();
        let equipment = faker.lorem.words(2);
        let baits = faker.lorem.words(2);
        let techniques = faker.lorem.words(2);
        let poles = faker.lorem.words(1);

        fishermen.push({
            "id": id,
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "contact": contact,
            "equipment": equipment,
            "baits": baits,
            "techniques": techniques,
            "poles": poles
        });
    }
    return { "fishermen": fishermen }
}


let generateCatch = () => {
    let catches = [];

    for (let id = 1; id < 31; id++) {
        let location = faker.address.state();
        let timestamp = faker.date.between('2015-01-01', '2020-05-20');
        let weight = faker.random.number();
        let species = faker.random.word();
        let fishermanId = faker.random.number({min:0, max:10});

        catches.push({
            "id": id,
            "timestamp": timestamp,
            "location": location,
            "weight": weight,
            "species": species,
            "fishermanId": fishermanId
        });
    }
    return { "catches": catches }
}

module.exports = generateCatch;
module.exports = generateFishermen();


fs.writeFile('fakeData.json',
    JSON.stringify({fishermen: this.fishermen}),
    (err) => {console.log(err)});

fs.writeFile('fakeCatch.json',
    JSON.stringify({catches: this.catches}),
    (err) => {console.log(err)});
