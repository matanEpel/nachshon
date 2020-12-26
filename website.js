bindict = []
encdict = []
defaultBicDict = ["00000", "00001", "00010", "00011", "00100", "00101", "00110", "00111", "01000", "01001", "01010", "01011", "01100", "01101", "01110", "01111", "10000", "10001", "10010", "10011", "10100", "10101"]
am_l = [1]
default_binary = [1]
default_encryption = [1]
playing = false
audio2 = new Audio('riddle.mp3')
audio4_1_a = new Audio("400-1-a.wav")
audio5_1_a = new Audio("500-1-a.wav")
audio6_1_a = new Audio("600-1-a.wav")
audio7_1_a = new Audio("700-1-a.wav")
audio8_1_a = new Audio("800-1-a.wav")
audio4_0_a = new Audio("400-0-a.wav")
audio5_0_a = new Audio("500-0-a.wav")
audio6_0_a = new Audio("600-0-a.wav")
audio7_0_a = new Audio("700-0-a.wav")
audio8_0_a = new Audio("800-0-a.wav")
audio4_1_f = new Audio("400-1-f.wav")
audio5_1_f = new Audio("500-1-f.wav")
audio6_1_f = new Audio("600-1-f.wav")
audio7_1_f = new Audio("700-1-f.wav")
audio8_1_f = new Audio("800-1-f.wav")
audio4_0_f = new Audio("400-0-f.wav")
audio5_0_f = new Audio("500-0-f.wav")
audio6_0_f = new Audio("600-0-f.wav")
audio7_0_f = new Audio("700-0-f.wav")
audio8_0_f = new Audio("800-0-f.wav")

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

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

function toam(){
    $("#FM").show()
    $("#AM").hide()
    am_l[0] = 0
}

function tofm(){
    $("#AM").show()
    $("#FM").hide()
    am_l[0] = 1
}

function printdict(){
    window.alert("מפעיל שמע לפי ההצפנה הבאה")
    window.alert(bindict)
    window.alert(encdict)
}

function toYourBinary(){
    default_binary[0] = 0
    $("#BY").show()
    $("#BD").hide()
}

function toDefaultBinary(){
    default_binary[0] = 1
    $("#BD").show()
    $("#BY").hide()
}

function toYourEnc(){
    default_encryption[0] = 0
    $("#DY").show()
    $("#DD").hide()
}

function toDefaultEnc(){
    default_encryption[0] = 1
    $("#DD").show()
    $("#DY").hide()
}

function main() {
    $("#AM").show()
    $("#FM").hide()
    $("#home").hide()
    $("#binarydict").hide()
    $("#encryptiondict").hide()
    $("#sending").hide()
    $("#riddle").hide()
    $("#stopriddle").hide()
    $("#stop").hide()

}

function bits_from_location(loc){
    if(default_binary[0] == 0){
        final_data = []
        for(let i = 0; i < bindict[loc].length; i++){
            final_data.push(parseInt(bindict[loc][i]))
        }
        return final_data
    } else {
        final_data = []
        for(let i = 0; i < defaultBicDict[loc].length; i++){
            final_data.push(parseInt(defaultBicDict[loc][i]))
        }
        return final_data
    }
}

function to_enc_letter(letter){
    if(default_encryption[0] == 1){
        return letter
    }
    if(letter == " "){
        return " "
    }
    if("א" == letter){
        return encdict[0]
    }
    if("ב" == letter){
        return encdict[1]
    }
    if("ג" == letter){
        return encdict[2]
    }
    if("ד" == letter){
        return encdict[3]
    }
    if("ה" == letter){
        return encdict[4]
    }
    if("ו" == letter){
        return encdict[5]
    }
    if("ז" == letter){
        return encdict[6]
    }
    if("ח" == letter){
        return encdict[7]
    }
    if("ט" == letter){
        return encdict[8]
    }
    if("י" == letter){
        return encdict[9]
    }
    if("כ" == letter){
        return encdict[10]
    }
    if("ל" == letter){
        return encdict[11]
    }
    if("מ" == letter){
        return encdict[12]
    }
    if("נ" == letter){
        return encdict[13]
    }
    if("ס" == letter){
        return encdict[14]
    }
    if("ע" == letter){
        return encdict[15]
    }
    if("פ" == letter){
        return encdict[16]
    }
    if("צ" == letter){
        return encdict[17]
    }
    if("ק" == letter){
        return encdict[18]
    }
    if("ר" == letter){
        return encdict[19]
    }
    if("ש" == letter){
        return encdict[20]
    }
    if("ת" == letter){
        return encdict[21]
    }
}

function to_bits(letter){
    if(letter == " "){
        return []
    }
    letter = to_enc_letter(letter)
    if("א" == letter){
        return bits_from_location(0)
    }
    if("ב" == letter){
        return bits_from_location(1)
    }
    if("ג" == letter){
        return bits_from_location(2)
    }
    if("ד" == letter){
        return bits_from_location(3)
    }
    if("ה" == letter){
        return bits_from_location(4)
    }
    if("ו" == letter){
        return bits_from_location(5)
    }
    if("ז" == letter){
        return bits_from_location(6)
    }
    if("ח" == letter){
        return bits_from_location(7)
    }
    if("ט" == letter){
        return bits_from_location(8)
    }
    if("י" == letter){
        return bits_from_location(9)
    }
    if("כ" == letter){
        return bits_from_location(10)
    }
    if("ל" == letter){
        return bits_from_location(11)
    }
    if("מ" == letter){
        return bits_from_location(12)
    }
    if("נ" == letter){
        return bits_from_location(13)
    }
    if("ס" == letter){
        return bits_from_location(14)
    }
    if("ע" == letter){
        return bits_from_location(15)
    }
    if("פ" == letter){
        return bits_from_location(16)
    }
    if("צ" == letter){
        return bits_from_location(17)
    }
    if("ק" == letter){
        return bits_from_location(18)
    }
    if("ר" == letter){
        return bits_from_location(19)
    }
    if("ש" == letter){
        return bits_from_location(20)
    }
    if("ת" == letter){
        return bits_from_location(21)
    }
}

function playSequence(files_seq, idx){
    if(idx >= files_seq.length){
        return
    }

    a = files_seq[idx]
    a.play()
    a.onended = function() {
        playSequence(files_seq, idx + 1)
    }
}

function playAudio() {
    $("#stop").show()
    $("#play").hide()
    playing = true
    let freq = $('input[id=frequencychoice]').val()
    let freq_zone = Math.trunc(freq/21)+1

    word_bits = []
    let word = $('input[id=word]').val()
    for(let i = 0; i < word.length; i++){
        word_bits.push(to_bits(word[i]))
    }

    files_seq = []
    am = am_l[0]
    for(let h = 0; h < word_bits.length; h++){
        for(let j = 0; j < word_bits[h].length; j++){
            if(word_bits[h][j] == 0){
                if(freq_zone == 1){
                    if(am == 1){
                        files_seq.push(audio4_0_a)
                    }
                    else {
                        files_seq.push(audio4_0_f)
                    }
                }
                if(freq_zone == 2){
                    if(am == 1){
                        files_seq.push(audio5_0_a)
                    }
                    else {
                        files_seq.push(audio5_0_f)
                    }
                }
                if(freq_zone == 3){
                    if(am == 1){
                        files_seq.push(audio6_0_a)
                    }
                    else {
                        files_seq.push(audio6_0_f)
                    }
                }
                if(freq_zone == 4){
                    if(am == 1){
                        files_seq.push(audio7_0_a)
                    }
                    else {
                        files_seq.push(audio7_0_f)
                    }
                }
                if(freq_zone == 5){
                    if(am == 1){
                        files_seq.push(audio8_0_a)
                    }
                    else {
                        files_seq.push(audio8_0_f)
                    }
                }
            }
            else{
                if(freq_zone == 1){
                    if(am == 1){
                        files_seq.push(audio4_1_a)
                    }
                    else {
                        files_seq.push(audio4_1_f)
                    }
                }
                if(freq_zone == 2){
                    if(am == 1){
                        files_seq.push(audio5_1_a)
                    }
                    else {
                        files_seq.push(audio5_1_f)
                    }
                }
                if(freq_zone == 3){
                    if(am == 1){
                        files_seq.push(audio6_1_a)
                    }
                    else {
                        files_seq.push(audio6_1_f)
                    }
                }
                if(freq_zone == 4){
                    if(am == 1){
                        files_seq.push(audio7_1_a)
                    }
                    else {
                        files_seq.push(audio7_1_f)
                    }
                }
                if(freq_zone == 5){
                    if(am == 1){
                        files_seq.push(audio8_1_a)
                    }
                    else {
                        files_seq.push(audio8_1_f)
                    }
                }
            }
        }
    }
    
    
    playSequence(files_seq, 0)
    $("#stop").hide()
    $("#play").show()
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
        audio2.play()
        playing = true
    }
}

function changescreen() {
    playing = false
    audio2.pause()
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
    bindict = []
    if(document.querySelector('input[name=a1]').value != ""){
        bindict.push(document.querySelector('input[name=a1]').value)
    }
    else {
        bindict.push("00000")
    }
    if(document.querySelector('input[name=a2]').value != ""){
        bindict.push(document.querySelector('input[name=a2]').value)
    }
    else {
        bindict.push("00001")
    }
    if(document.querySelector('input[name=a3]').value != ""){
        bindict.push(document.querySelector('input[name=a3]').value)
    }
    else {
        bindict.push("00010")
    }
    if(document.querySelector('input[name=a4]').value != ""){
        bindict.push(document.querySelector('input[name=a4]').value)
    }
    else {
        bindict.push("00011")
    }
    if(document.querySelector('input[name=a5]').value != ""){
        bindict.push(document.querySelector('input[name=a5]').value)
    }
    else {
        bindict.push("00100")
    }
    if(document.querySelector('input[name=a6]').value != ""){
        bindict.push(document.querySelector('input[name=a6]').value)
    }
    else {
        bindict.push("00101")
    }
    if(document.querySelector('input[name=a7]').value != ""){
        bindict.push(document.querySelector('input[name=a7]').value)
    }
    else {
        bindict.push("00110")
    }
    if(document.querySelector('input[name=a8]').value != ""){
        bindict.push(document.querySelector('input[name=a8]').value)
    }
    else {
        bindict.push("00111")
    }
    if(document.querySelector('input[name=a9]').value != ""){
        bindict.push(document.querySelector('input[name=a9]').value)
    }
    else {
        bindict.push("01000")
    }
    if(document.querySelector('input[name=a10]').value != ""){
        bindict.push(document.querySelector('input[name=a10]').value)
    }
    else {
        bindict.push("01001")
    }
    if(document.querySelector('input[name=a11]').value != ""){
        bindict.push(document.querySelector('input[name=a11]').value)
    }
    else {
        bindict.push("01010")
    }
    if(document.querySelector('input[name=a12]').value != ""){
        bindict.push(document.querySelector('input[name=a12]').value)
    }
    else {
        bindict.push("01011")
    }
    if(document.querySelector('input[name=a13]').value != ""){
        bindict.push(document.querySelector('input[name=a13]').value)
    }
    else {
        bindict.push("01100")
    }
    if(document.querySelector('input[name=a14]').value != ""){
        bindict.push(document.querySelector('input[name=a14]').value)
    }
    else {
        bindict.push("01101")
    }
    if(document.querySelector('input[name=a15]').value != ""){
        bindict.push(document.querySelector('input[name=a15]').value)
    }
    else {
        bindict.push("01110")
    }
    if(document.querySelector('input[name=a16]').value != ""){
        bindict.push(document.querySelector('input[name=a16]').value)
    }
    else {
        bindict.push("01111")
    }
    if(document.querySelector('input[name=a17]').value != ""){
        bindict.push(document.querySelector('input[name=a17]').value)
    }
    else {
        bindict.push("10000")
    }
    if(document.querySelector('input[name=a18]').value != ""){
        bindict.push(document.querySelector('input[name=a18]').value)
    }
    else {
        bindict.push("10001")
    }
    if(document.querySelector('input[name=a19]').value != ""){
        bindict.push(document.querySelector('input[name=a19]').value)
    }
    else {
        bindict.push("10010")
    }
    if(document.querySelector('input[name=a20]').value != ""){
        bindict.push(document.querySelector('input[name=a20]').value)
    }
    else {
        bindict.push("10011")
    }
    if(document.querySelector('input[name=a21]').value != ""){
        bindict.push(document.querySelector('input[name=a21]').value)
    }
    else {
        bindict.push("10100")
    }
    
    if(document.querySelector('input[name=a22]').value != ""){
        bindict.push(document.querySelector('input[name=a22]').value)
    }
    else {
        bindict.push("10101")
    }
    
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
    encdict = []
    if(document.querySelector('input[name=b1]').value != ""){
        encdict.push(document.querySelector('input[name=b1]').value)
    }
    else {
        encdict.push("א")
    }
    if(document.querySelector('input[name=b2]').value  != ""){
        encdict.push(document.querySelector('input[name=b2]').value)
    }
    else {
        encdict.push("ב")
    }
    if(document.querySelector('input[name=b3]').value  != ""){
        encdict.push(document.querySelector('input[name=b3]').value)
    }
    else {
        encdict.push("ג")
    }
    if(document.querySelector('input[name=b4]').value  != ""){
        encdict.push(document.querySelector('input[name=b4]').value)
    }
    else {
        encdict.push("ד")
    }
    if(document.querySelector('input[name=b5]').value  != ""){
        encdict.push(document.querySelector('input[name=b5]').value)
    }
    else {
        encdict.push("ה")
    }
    if(document.querySelector('input[name=b6]').value  != ""){
        encdict.push(document.querySelector('input[name=b6]').value)
    }
    else {
        encdict.push("ו")
    }
    if(document.querySelector('input[name=b7]').value  != ""){
        encdict.push(document.querySelector('input[name=b7]').value)
    }
    else {
        encdict.push("ז")
    }
    if(document.querySelector('input[name=b8]').value  != ""){
        encdict.push(document.querySelector('input[name=b8]').value)
    }
    else {
        encdict.push("ח")
    }
    if(document.querySelector('input[name=b9]').value  != ""){
        encdict.push(document.querySelector('input[name=b9]').value)
    }
    else {
        encdict.push("ט")
    }
    if(document.querySelector('input[name=b10]').value  != ""){
        encdict.push(document.querySelector('input[name=b10]').value)
    }
    else {
        encdict.push("י")
    }
    if(document.querySelector('input[name=b11]').value  != ""){
        encdict.push(document.querySelector('input[name=b11]').value)
    }
    else {
        encdict.push("כ")
    }
    if(document.querySelector('input[name=b12]').value  != ""){
        encdict.push(document.querySelector('input[name=b12]').value)
    }
    else {
        encdict.push("ל")
    }
    if(document.querySelector('input[name=b13]').value  != ""){
        encdict.push(document.querySelector('input[name=b13]').value)
    }
    else {
        encdict.push("מ")
    }
    if(document.querySelector('input[name=b14]').value  != ""){
        encdict.push(document.querySelector('input[name=b14]').value)
    }
    else {
        encdict.push("נ")
    }
    if(document.querySelector('input[name=b15]').value  != ""){
        encdict.push(document.querySelector('input[name=b15]').value)
    }
    else {
        encdict.push("ס")
    }
    if(document.querySelector('input[name=b16]').value  != ""){
        encdict.push(document.querySelector('input[name=b16]').value)
    }
    else {
        encdict.push("ע")
    }
    if(document.querySelector('input[name=b17]').value  != ""){
        encdict.push(document.querySelector('input[name=b17]').value)
    }
    else {
        encdict.push("פ")
    }
    if(document.querySelector('input[name=b18]').value  != ""){
        encdict.push(document.querySelector('input[name=b18]').value)
    }
    else {
        encdict.push("צ")
    }
    if(document.querySelector('input[name=b19]').value  != ""){
        encdict.push(document.querySelector('input[name=b19]').value)
    }
    else {
        encdict.push("ק")
    }
    if(document.querySelector('input[name=b20]').value  != ""){
        encdict.push(document.querySelector('input[name=b20]').value)
    }
    else {
        encdict.push("ר")
    }
    if(document.querySelector('input[name=b21]').value  != ""){
        encdict.push(document.querySelector('input[name=b21]').value)
    }
    else {
        encdict.push("ש")
    }
    if(document.querySelector('input[name=b22]').value != ""){
        encdict.push(document.querySelector('input[name=b22]').value)
    }
    else {
        encdict.push("ת")
    }
    
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
        window.alert("!מילון ההצפנה שלך עודכן בהצלחה")
    }
    else {
        encdict = []
    }
}

main()