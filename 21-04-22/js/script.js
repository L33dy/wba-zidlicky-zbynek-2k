const sum = () => {
    let x = 2;
    let y = 6;

    console.log("Součet: ", x + y);
}

sum();

function h1click() {
    document.getElementById("demo").innerHTML = "Demo Text"
}

$(document).ready(function() {
    $("#click").click(function() {
        console.log("Button has been pressed.")
    });
});