$(document).ready(function(){
    $("form").submit(function(){
        $(".ContactCards").append(
            "<div class='Cards' d='<p>"+
            $("#description").val()+
            "</p>'><h1>"+
            $("#first_name").val()+" "+
            $("#last_name").val()+" "+
            "</h1><p>Click for Description</p></div>"
        );
        return false; 
    });
    $(document).on("click", '.ContactCards div', function(){
        var temp = $(this).attr("d");
        $(this).attr("d",$(this).html());
        $(this).html(temp);
    });
});