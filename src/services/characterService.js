import http from './httpService'
import { endpoint } from '../config.json'

const apiEndPoint = endpoint + 'character'

function characterUrl(id) {
    return `${apiEndPoint}/${id}`
}
function random(numbers) {
    let list = []
    while (list.length < 4) {
        let r = Math.floor(Math.random() * numbers) + 1
        if (list.indexOf(r) === -1) list.push(r)
    }
    return `${apiEndPoint}/${list.toString()}`
}
export function getCharacters(page) {
    return http.get(apiEndPoint, { params: { page } })
}
export function getRandomCharacters(numbers) {
    return http.get(random(numbers))
}
export function getCharacter(id) {
    return http.get(characterUrl(id))
}
