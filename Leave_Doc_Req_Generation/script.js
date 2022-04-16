function leaveLetterPrefill() {    
    var initialdate = document.querySelector("body > div > form > input[type=date]:nth-child(10)").value
    var finaldate = document.querySelector("body > div > form > input[type=date]:nth-child(13)").value
    var fullname = document.querySelector("body > div > form > input[type=text]:nth-child(1)").value
    var duration = (Date.parse(finaldate)-Date.parse(initialdate))/(24*3600000)+1
    document.getElementById("body").value = "Respected Mr/Mrs,"+ "\n\n" +
    "I would like to bring to your kind attention that due to (enter the reason),"+
    " I would like to take a leave of absence for " + duration +
    " days. I have handled my responsibilities to (enter the names) and I am sure they will co-operate in my absence."+
    " I hope you understand my situation and grant me leave from " +
     initialdate +" to "+finaldate +"."+
    "\n\nThank You," + "\n\nYours Faithfully\n"+fullname;
}

function requestDocsPrefill(){
    var fullname = document.querySelector("body > div > form > input[type=text]:nth-child(1)").value
    var documents = document.querySelector("body > div > form > input[type=text]:nth-child(10)").value
    document.getElementById("body").value = "Respected Mr/Mrs,"+ "\n\n" +
    "This letter is to inform you that for further process of your request we need the required documents as mentioned: "+
    documents + "." + " You are requested to do the needful as early as possible." + 
    "\n\nThank You," + "\n\n"+"Yours faithfully\n"+fullname;
}  

function get_pdf() {
    var from = document.getElementsByName('fullname')[0].value
    var to = document.getElementsByName('fullname_reciever')[0].value
    var subject = document.getElementsByName('subject')[0].value
    var body = document.getElementById('body').value
    /* body = body.slice(19);
    body = body.slice(0,body.indexOf('\n')); */
    /* var final_text = 'From: '+from+'\n\n'+'To: '+to+'\n\n'+'Subject: '+subject+'\n\n'+body;
    var doc = new jsPDF();
    doc.setFontSize(14);
    doc.text(30, 20,final_text);
    doc.save('mail.pdf'); */

    var doc = new jspdf();
    var line = 25 // Line height to start text at
    var lineHeight = 5
    var leftMargin = 20
    var wrapWidth = 180
    var longString = 'From: '+from+'\n\n'+'To: '+to+'\n\n'+'Subject: '+subject+'\n\n'+body;

    var splitText = doc.splitTextToSize(longString, wrapWidth)
    for (var i = 0, length = splitText.length; i < length; i++) {
    // loop thru each line and increase
    doc.text(splitText[i], leftMargin, line)
    line = lineHeight + line
    }
    doc.save('mail.pdf');
    return true;
}