#!/usr/bin/node
/**
 * script that prints all characters of a Star Wars movie:
 */

const request = require('request');
const process = require('process');
const filmId = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${filmId}`;

function characterRequest(characterUrl) {
    return new Promise((resolve, reject) => {
        request.get(characterUrl, (error, _resp, body) => {
            if (error !== null) {
                reject(error);
            }
            resolve(body);
        });
    });
}

request.get(url, (error, _resp, body) => {
    if (error === null) {
        const film = JSON.parse(body);
        const characters = film.characters;
        characters.forEach((character) => {
            characterRequest(character).then((body) => {
                const characterInfo = JSON.parse(body);
                console.log(characterInfo.name);
            }).catch(error => console.log(error));
        });
    } else {
        console.log(error);
    }
});
