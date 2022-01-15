var i = 0;
var txt = 'The Forest.';
var typingSpeed = 125;
var deleteSpeed = 75;
var title = document.getElementById("title");

function Type() {
    if(i >= txt.length) {
        setTimeout(DeleteText, 2500);
        return;
    }

    if (i < txt.length) {
        title.innerHTML += txt.charAt(i);
        i++;
        setTimeout(Type, typingSpeed);
    }
}

function DeleteText() {
    if(i <= 0) {
        setTimeout(Type, 1000);
        return;
    }

    if(i > 0) {
        var newName = title.innerHTML.split('');
        newName.pop();
        i--;
        title.innerHTML = newName.join('');
        setTimeout(DeleteText, deleteSpeed);
    }
}