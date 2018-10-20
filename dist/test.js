
var a;
function paste(){
    navigator.clipboard.readText().then(
        function(clipText){
            a = clipText
            
            document.getElementById("currentText").innerText = clipText 
            
        } 
    );  
}

function startMarquee(){
    var text = document.createElement("marquee")
    text.setAttribute("id","anotherdiv")
    text.setAttribute("scrollamount","15")
    text.innerText = a
    
    document.getElementById("currentText").innerHTML = ""
    document.getElementById("currentText").appendChild(text);
    $( "br" ).replaceWith( " " );
}

function changeSpeed(){

}

function fontSize(){

}