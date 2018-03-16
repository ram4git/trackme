import {Alert} from "react-native";

var request = require('superagent-bluebird-promise');
export const fetchData = (url, headers) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Access-Control-Allow-Credentials", true);
    myHeaders.append("Access-Control-Allow-Origins", "*");
    myHeaders.append('Access-Control-Allow-Origin' , 'http://localhost'),
    myHeaders.append("Access-Control-Allow-Headers", "Content-Type, Authorization");

    /*myHeaders.append("Authorization", headers.authorization || "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3d3dy5ieWdjcm0uY29tIiwiZXhwIjoxNTE4NjA2MzY0MDkwLCJzdWIiOiJhcHAiLCJpYXQiOjE1MTg1MTk5NjQwOTEsImp0aSI6ImUxZWI3MDEwLTEwYWQtMTFlOC04ZmEyLTA1ZGY1NDNlNGNlNSIsInVzZXJJZCI6IlU5NTA2ODc1MzI3NjM0NTEzOTIiLCJ1c2VyTmFtZSI6IiIsInJlZ2lzdHJhdGlvbklkIjoiUkVHOTYzMzQwNzQ1MjU3OTE0MzY4IiwidXNlclR5cGUiOiJtZW1iZXIiLCJkb21haW4iOiJieWciLCJhY2NvdW50SWQiOiJBQzgxOTE2OTc3NDQ2MTI3NjE2MCJ9.NjUo1kjbf9uUiZB0g85HYeUA9P6J-Oxj3Q_lxh1mEWs");
    myHeaders.append("Cache-Control", "no-cache");
    myHeaders.append('X-Center-Id' , headers.centerId || '819169774465470464');*/
    var myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        credentials : "same-origin"
    };
    return fetch(url, myInit)
        .then(response => {
            return response.json();
        })
        .catch(error => {
            Alert.alert("error");
            throw error;
        });
};

export const bluebird = (url, param, header) => {

    console.log("BLUEBIRD", url);

    if(!header)
        header = {
            'Content-Type' : 'application/x-www-form-urlencoded'
        }

    return request
        .post(url)
        .set(header)
        .send(param)
        .then((res) => {
            return JSON.parse(res.text);
        }).catch((err) => {
            return err;
        });

}
