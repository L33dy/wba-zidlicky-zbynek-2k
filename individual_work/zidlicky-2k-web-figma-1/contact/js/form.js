function HidePlaceholder(a) {
    document.getElementById(a).style.visibility = "hidden";
}

function ShowPlaceHolder(holder, input) {
    const inputValue = document.getElementById(input).value;
    const value = inputValue.trim();


    if(value === "") {
        document.getElementById(holder).style.visibility = "visible";
    }
}

function toHomePage() {
    window.location.href = "../index.html";
}

