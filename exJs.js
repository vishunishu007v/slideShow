/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    $("button").click(function(){
        $("div").animate({
            left:'250px',
            height:'+=150px',
            width:'+=150px'
        });
    });
});


function newWindow(x){
    window.open(x,"_blank",
        "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=yes, width=200, height=200");
}

