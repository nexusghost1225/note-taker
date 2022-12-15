let clickHandler = function () {
    let textInput = document.getElementById('textInput'),
        noteManager = document.getElementById("noteManager"),
        childSection = document.createElement('section'),
        childNote = document.createTextNode(textInput.value);

    childSection.appendChild(childNote);
    noteManager.appendChild(childSection);

    textInput.value = '';
}

document.getElementById("addButton").addEventListener('click', clickHandler);
