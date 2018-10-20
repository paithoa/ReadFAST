
var a;

function paste(){
    navigator.clipboard.readText().then(
        function(clipText){
            a = clipText
            a=a.split('.').join("");
            a=a.split('`').join("")
            clipText = clipText.split('.').join("");
            cliptext=clipText.split('`').join("")
            
            document.getElementById("currentText").innerText = clipText 
            $('#currentText').find('br').replaceWith( " " );
            
            document.getElementById("play").disabled = false;

        } 
    );  
}


function startMarquee(desiredOption){
    if ($(".border").find("#anotherdiv").length > 0){ 
        $( "#anotherdiv" ).remove();
      }
      console.log(desiredOption)
    var Option = $("#Speed").val();

    var text = document.createElement("marquee")
    text.setAttribute("id","anotherdiv")
    text.setAttribute("scrollamount",Option)
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
function onResume(){
    var option = $("#Speed").val();
    console.log(option)
    $('#anotherdiv').attr('scrollamount', option);
    document.getElementById('anotherdiv').start();

	
}


