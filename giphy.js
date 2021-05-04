const API_KEY = 'l09bSCBP0Se4iS9cFsiGy8Fml8szc6mM';

const $search = document.getElementById('search')
const $doc = document.getEle
const $searchBtn = document.getElementById('searchBtn')
const $content = document.getElementById('content')
const API_URL = 'https://api.giphy.com/v1/gifs/search'
const $inputLim = document.getElementById('inputLimit')

function searchGifs(options = {keyword: '', limit:0}) {
    const request = new XMLHttpRequest();

    request.open('GET', API_URL +`?api_key=${API_KEY}&q=${options.keyword}&limit=${options.limit}`);
    
    request.addEventListener('load', function() {
        console.log(request.status);
        const parsed = JSON.parse(request.responseText);

        parsed.data.forEach(function(gif) {
            const $iframe = document.createElement('iframe');
            
           
            $iframe.src = gif.embed_url;
            $iframe.width = 150;
            $iframe.height = 150;

            $content.append($iframe)
        })
    });
    request.send()
}



$searchBtn.addEventListener('click', function() {
    if(!$search.value) {
        alert('Заполние поле')
        return

    }
    $content.innerHTML = '';
    searchGifs({keyword:$search.value, limit:$inputLim.value})

})



