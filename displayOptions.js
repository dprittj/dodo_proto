
function elementFromHTML(html){

    const template = document.createElement("template");
    template.innerHTML=html.trim();
    const newElement = template.content.firstElementChild;
    return newElement;

}

function displayInterests(array){

    const thisArray = array;
    const createUL = document.createElement("ul");
    const createLI = document.createElement("li");
    let itemsNum = array.length();

    for (let i = 0; i < itemsNum; i++) {
        let li = document.createElement("li");
        let liString = thisArray[i];

    }
    

}


const interestsArr = localStorage.getItem("interests").split(',');

const interestsList = document.createElement("li");
interestsList.setAttribute("class", "userInterests");

for ( let i = 0; i < interestsArr.length; i++ ) {
    const showItem = document.createElement("li");
    showItem.textContent(interestsArr[i]);
    interestsList.appendChild(showItem);
}