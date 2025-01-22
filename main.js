// selecteer element
const openChatButton = document.querySelector ('.chat-button')
const theSearch = document.querySelector ('.zoeken')

// voeg event en functie toe
openChatButton.addEventListener('click', openSearch)

function openSearch() {
    theSearch.classList.add('toonSearch')
}

