import React, { Component } from "react";
import data from "../data/fakeCatch.json";
const catches = [{"id": 6,"timestamp": "2017-12-14T05:50:53.549Z","location": "New Mexico","weight": 9291,"species": "engineer","fishermanId": 1},{"id": 21,        "timestamp": "2020-02-08T15:02:21.078Z",        "location": "Wyoming",        "weight": 43512,        "species": "multi-byte",        "fishermanId": 1      },      {        "id": 2,        "timestamp": "2020-04-13T17:53:53.051Z",        "location": "North Carolina",        "weight": 7894,        "species": "HTTP",        "fishermanId": 1      },      {        "id": 26,        "timestamp": "2015-07-30T06:33:50.415Z",        "location": "Ohio",        "weight": 31876,        "species": "back-end",        "fishermanId": 2      },      {        "id": 8,        "timestamp": "2017-09-17T08:20:33.420Z",        "location": "Wyoming",        "weight": 75266,        "species": "matrix",        "fishermanId": 3      },      {        "id": 15,        "timestamp": "2018-03-27T00:01:12.940Z",        "location": "Ohio",        "weight": 46237,        "species": "end-to-end",        "fishermanId": 3      },      {        "id": 4,        "timestamp": "2017-07-16T03:53:02.596Z",        "location": "New Mexico",        "weight": 68838,        "species": "Borders",        "fishermanId": 4      },      {        "id": 30,        "timestamp": "2015-01-13T04:44:14.840Z",        "location": "Ohio",        "weight": 64217,        "species": "Iranian Rial",        "fishermanId": 4      },      {        "id": 14,        "timestamp": "2020-02-09T05:16:53.534Z",        "location": "Wyoming",        "weight": 98118,        "species": "Enhanced",        "fishermanId": 5      },      {        "id": 25,        "timestamp": "2016-02-19T10:06:30.992Z",        "location": "New Mexico",        "weight": 64494,        "species": "redundant",        "fishermanId": 5      },      {        "id": 27,        "timestamp": "2019-12-01T06:52:52.281Z",        "location": "Ohio",        "weight": 20358,        "species": "web-enabled",        "fishermanId": 5      },      {        "id": 22,        "timestamp": "2019-03-10T00:50:46.026Z",        "location": "Wyoming",        "weight": 74041,        "species": "web-readiness",        "fishermanId": 6      },      {        "id": 11,        "timestamp": "2016-10-25T09:18:03.684Z",        "location": "New Mexico",        "weight": 30262,        "species": "Books",        "fishermanId": 6      },      {        "id": 1,        "timestamp": "2017-01-07T10:59:39.370Z",        "location": "Ohio",        "weight": 72979,        "species": "Handmade Frozen Chair",        "fishermanId": 6      },      {        "id": 5,        "timestamp": "2019-08-05T16:00:26.556Z",        "location": "Wyoming",        "weight": 71342,        "species": "Shoes",        "fishermanId": 7      },      {        "id": 7,        "timestamp": "2020-04-30T13:32:39.009Z",        "location": "New Mexico",        "weight": 61700,        "species": "users",        "fishermanId": 7      },      {        "id": 10,        "timestamp": "2018-09-13T23:15:47.068Z",        "location": "Ohio",        "weight": 12073,        "species": "XML",        "fishermanId": 7      },      {        "id": 12,        "timestamp": "2018-07-12T10:23:21.538Z",        "location": "Wyoming",        "weight": 94556,        "species": "deposit",        "fishermanId": 7      },      {        "id": 17,        "timestamp": "2017-11-07T00:39:01.070Z",        "location": "New Mexico",        "weight": 58354,        "species": "Pizza",        "fishermanId": 7      },      {        "id": 29,        "timestamp": "2019-06-02T19:48:29.203Z",        "location": "New Mexico",        "weight": 23135,        "species": "hub",        "fishermanId": 7      },      {        "id": 3,        "timestamp": "2018-12-04T07:32:49.663Z",        "location": "North Carolina",        "weight": 65351,        "species": "invoice",        "fishermanId": 8      },      {        "id": 13,        "timestamp": "2017-07-31T06:12:26.479Z",        "location": "North Carolina",        "weight": 28189,        "species": "Credit Card Account",        "fishermanId": 8      },      {        "id": 18,        "timestamp": "2018-06-01T15:47:15.655Z",        "location": "Wyoming",        "weight": 80387,        "species": "Tuna",        "fishermanId": 9      },      {        "id": 20,        "timestamp": "2017-06-25T23:01:54.894Z",        "location": "North Carolina",        "weight": 37996,        "species": "Soft",        "fishermanId": 9      },      {        "id": 23,        "timestamp": "2016-04-25T14:45:43.353Z",        "location": "Wyoming",        "weight": 72966,        "species": "Alabama",        "fishermanId": 9      },      {        "id": 24,        "timestamp": "2020-02-13T01:06:22.638Z",        "location": "New Mexico",        "weight": 33233,        "species": "Extended",        "fishermanId": 9      },      {        "id": 19,        "timestamp": "2015-09-25T12:33:26.985Z",        "location": "Ohio",        "weight": 82485,        "species": "payment",        "fishermanId": 10      },      {        "id": 28,        "timestamp": "2016-03-05T10:04:36.601Z",        "location": "North Carolina",        "weight": 31674,        "species": "Personal Loan Account",        "fishermanId": 10      }];
let _ = require('underscore');
//const catGroup = _.groupBy(catches, "location");
var locatn = [];
var fID = [];

catches.forEach(function (val) {
    locatn.push(val['location']);
    fID.push(val['fishermanId']);
});

function aggregate(array) {
    var obj ={};

    array.forEach(function (val) {
        if(!obj[val])
            obj[val] = 1;
        else
            obj[val]++;
    });
    return JSON.stringify(obj,null,4)
}

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);

class Government extends Component {

    render() {
        return (
            <div>
                <h2>Catches per location</h2>
                <label>(Location : Number of Catches)</label>
                <p>{aggregate(locatn)}</p>
                <ColoredLine color='lightblue' />
                <h2>Catches per fishermen</h2>
                <label>(FishermanId : Catches per fisherman)</label>
                <p>{aggregate(fID)}</p>
            </div>
        );
    }
}

export default Government;

