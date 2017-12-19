import mapJava from '../snippets/map.java'

const apiUrl = 'http://52.0.204.239:8080'

export const fetchMapTemplate = () => fetch(mapJava).then(response => response.text())

export const submitMapAnswer = answer => submitAnswer('map', answer)

export const submitAnswer = (type, answer) => {
  return fetch(`${apiUrl}/submit/${type}`, {
    headers: { 'Content-Type': 'text/plain' },
    method: 'POST',
    body: answer
  }).then(response => response.text())
}
