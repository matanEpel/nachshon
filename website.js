bindict = []
encdict = []
playing = false
audio = new Audio('example.mp3');
audio2 = new Audio('example.mp3');

function notletter(val){
    if(val != "א" && val != "ב" && val != "ג" && 
        val != "ד" && val != "ה" && val != "ו" && 
        val != "ז" && val != "ח" && val != "ט" &&
        val != "י" && val != "כ" && val != "ל" && 
        val != "מ" && val != "נ" && val != "ס" && 
        val != "ע" && val != "פ" && val != "צ" && 
        val != "ק" && val != "ר" && val != "ש" && val != "ת"){
        return true
    }

    return false
}

function printdict(){
    window.alert("מפעיל שמע לפי ההצפנה הבאה")
    window.alert(bindict)
    window.alert(encdict)
}

function main() {
    $("#home").hide()
    $("#binarydict").hide()
    $("#encryptiondict").hide()
    $("#sending").hide()
    $("#riddle").hide()
    $("#stopriddle").hide()
    $("#stop").hide()

}

function playAudio() {
    if (playing){
        $("#play").show()
        $("#stop").hide()
        audio.pause()
        playing = false
    }
    else{
        $("#stop").show()
        $("#play").hide()
        playing = true
        audio.play();
    }
}

function playAudioRiddle() {
    if (playing){
        $("#playriddle").show()
        $("#stopriddle").hide()
        audio2.pause()
        playing = false
    }
    else{
        $("#stopriddle").show()
        $("#playriddle").hide()
        playing = true
        audio2.play();
    }
}

function changescreen() {
    audio.pause()
    audio2.pause()
    playing = false
    todisplay = document.getElementById("pageoptions").value;
    $("#home").hide()
    $("#binarydict").hide()
    $("#encryptiondict").hide()
    $("#sending").hide()
    $("#riddle").hide()
    $(todisplay).show()
    $("#playriddle").show()
    $("#stopriddle").hide()
    $("#play").show()
    $("#stop").hide()
}

function countInArray(array, what) {
    let count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == what) {
            count++;
        }
    }
    return count;
}

function not1and0(val){
    for (let i = 0; i < val.length; i++){
        if (val[i] !== "0" && val[i] !== "1"){
            return true
        }
    }

    return false
}

function addBinDict() {
    bindict.push(document.querySelector('input[name=a1]').value)
    bindict.push(document.querySelector('input[name=a2]').value)
    bindict.push(document.querySelector('input[name=a3]').value)
    bindict.push(document.querySelector('input[name=a4]').value)
    bindict.push(document.querySelector('input[name=a5]').value)
    bindict.push(document.querySelector('input[name=a6]').value)
    bindict.push(document.querySelector('input[name=a7]').value)
    bindict.push(document.querySelector('input[name=a8]').value)
    bindict.push(document.querySelector('input[name=a9]').value)
    bindict.push(document.querySelector('input[name=a10]').value)
    bindict.push(document.querySelector('input[name=a11]').value)
    bindict.push(document.querySelector('input[name=a12]').value)
    bindict.push(document.querySelector('input[name=a13]').value)
    bindict.push(document.querySelector('input[name=a14]').value)
    bindict.push(document.querySelector('input[name=a15]').value)
    bindict.push(document.querySelector('input[name=a16]').value)
    bindict.push(document.querySelector('input[name=a17]').value)
    bindict.push(document.querySelector('input[name=a18]').value)
    bindict.push(document.querySelector('input[name=a19]').value)
    bindict.push(document.querySelector('input[name=a20]').value)
    bindict.push(document.querySelector('input[name=a21]').value)
    bindict.push(document.querySelector('input[name=a22]').value)
    
    ok = true

    for(let i = 0; i < 22 && ok; i++){
        if(not1and0(bindict[i])) {
            window.alert("הכנסת קידוד שלא מורכב מ0 ו1")
            ok = false
        }
        else if(bindict[i] != "" && countInArray(bindict, bindict[i]) > 1) {
            window.alert("הכנסת את אותו הערך פעמיים")
            ok = false
        }
        else if(bindict[i] == ""){
            window.alert("שכחת אות אחת")
            ok = false
        }
        else if(bindict[i].length != 5){
            window.alert("אחד הקידודים שלך לא מכיל 5 אותיות")
            ok = false
        }
    }

    if(ok){
        window.alert("!המילון הבינארי שלך עודכן בהצלחה")
    }
    else {
        bindict = []
    }
}

function addEncDict() {
    encdict.push(document.querySelector('input[name=b1]').value)
    encdict.push(document.querySelector('input[name=b2]').value)
    encdict.push(document.querySelector('input[name=b3]').value)
    encdict.push(document.querySelector('input[name=b4]').value)
    encdict.push(document.querySelector('input[name=b5]').value)
    encdict.push(document.querySelector('input[name=b6]').value)
    encdict.push(document.querySelector('input[name=b7]').value)
    encdict.push(document.querySelector('input[name=b8]').value)
    encdict.push(document.querySelector('input[name=b9]').value)
    encdict.push(document.querySelector('input[name=b10]').value)
    encdict.push(document.querySelector('input[name=b11]').value)
    encdict.push(document.querySelector('input[name=b12]').value)
    encdict.push(document.querySelector('input[name=b13]').value)
    encdict.push(document.querySelector('input[name=b14]').value)
    encdict.push(document.querySelector('input[name=b15]').value)
    encdict.push(document.querySelector('input[name=b16]').value)
    encdict.push(document.querySelector('input[name=b17]').value)
    encdict.push(document.querySelector('input[name=b18]').value)
    encdict.push(document.querySelector('input[name=b19]').value)
    encdict.push(document.querySelector('input[name=b20]').value)
    encdict.push(document.querySelector('input[name=b21]').value)
    encdict.push(document.querySelector('input[name=b22]').value)
    
    ok = true

    for(let i = 0; i < 22 && ok; i++){
        if(notletter(encdict[i])) {
            window.alert("הכנסת הצפנה שהיא לא אות בעברית")
            ok = false
        }
        else if(encdict[i] != "" && countInArray(encdict, encdict[i]) > 1) {
            window.alert("הכנסת את אותו הערך פעמיים")
            ok = false
        }
        else if(encdict[i].length != 1){
            window.alert("אורך אחת ההצפנות לא טוב")
        }
    }

    if(ok){
        window.alert("!המילון הבינארי שלך עודכן בהצלחה")
    }
    else {
        encdict = []
    }
}

main()