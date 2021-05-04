const request = new XMLHttpRequest();
request.open('POST', 'https://jsonplaceholder.typicode.com/posts')

request.addEventListener('load', function() {
    console.log('Status: ', request.status)
    console.log('Status text: ', request.statusText)
    console.log('Response: ', request.responseText)
})

const requestBody = JSON.stringify({
    title: 'News title',
    author: 'Chika'
})

request.send(requestBody)