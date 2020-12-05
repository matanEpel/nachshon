function main() {
    // let x = 2
    // document.write(x)
}

function changescreen() {
    todisplay = document.getElementById("pageoptions").value;
    $("#home").hide()
    $("#binarydict").hide()
    $("#encryptiondict").hide()
    $("#sending").hide()
    $("#riddle").hide()
    $(todisplay).show()
}

main()