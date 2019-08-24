const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const messageFour = document.querySelector('#message-4')
const messageFive = document.querySelector('#message-5')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    messageThree.textContent = ''
    messageFour.textContent = ''
    messageFive.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
            messageOne.textContent = data.location
            messageTwo.innerHTML = "<p style='font-weight: bold;display:inline'>Temperature: </p>"+data.forecast.temperature+"°"
            messageThree.innerHTML = "<p style='font-weight: bold;display:inline'>High temperature: </p>"+data.forecast.temperatureHigh+"°"
            messageFour.innerHTML = "<p style='font-weight: bold;display:inline'>Low temperature: </p>"+data.forecast.temperatureLow+"°"
            messageFive.innerHTML = "<p style='font-weight: bold;display:inline'>Summary: </p>"+data.forecast.summary

            }
        })
    })
})