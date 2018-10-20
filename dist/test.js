
var a;
function paste(){
    navigator.clipboard.readText().then(
        function(clipText){
            a = clipText
            
            document.getElementById("currentText").innerText = clipText 
            $('#currentText').find('br').replaceWith( " " );
        } 
    );  
}

function createMarquee(){

}

function startMarquee(){
    if ($(".border").find("#anotherdiv").length > 0){ 
        $( "#anotherdiv" ).remove();
      }
    var text = document.createElement("marquee")
    text.setAttribute("id","anotherdiv")
    text.setAttribute("scrollamount","15")
    text.innerText = a
    document.getElementById("currentText").innerHTML = ""
    document.getElementById("insideborder").appendChild(text);
    $( "br" ).replaceWith( " " );
    $('br').remove()
}

function reset(){
    console.log("test")
    setTimeout(function() {

        startMarquee()
      }, 1000);
}




function fontSize(){

}
