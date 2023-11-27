const btnSearch = document.querySelector("#btnSearch");
const divSearch = document.querySelector("#search");
const txtSearch = document.querySelector("#txtSearch");
const gifArea = document.querySelector("#gifs");
const btnRemove = document.querySelector("#btnRemove");


// qSmnvqGVFjlFqX52082Vsp4xsm56CHy3

async function searchForGif(){
    console.log(txtSearch.value);
    const findImg = await axios.get("https://api.giphy.com/v1/gifs/search", {params:{ api_key: "qSmnvqGVFjlFqX52082Vsp4xsm56CHy3", q: `${txtSearch.value}`}})
    // console.log(findImg);

    const newGif = findImg.data.data[0].images.original.url;
    console.log(newGif);


    const newImg = document.createElement('img');
    newImg.src = newGif;

    gifArea.append(newImg);
}

function removeAllGifs(){
    gifArea.innerHTML = "";
}

btnSearch.addEventListener('click', searchForGif);
btnRemove.addEventListener('click', removeAllGifs);

