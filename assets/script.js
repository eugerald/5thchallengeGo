$(".saveplan").on("click",function(){
    var userPlanEntry = $(this).siblings("textarea").val()
    var time = $(this).siblings("textarea").attr("id")
    localStorage.setItem(time,userPlanEntry)
})
// $("#11").val(localStorage.getItem("11"));
// $("#10").val(localStorage.getItem("10"));
// $("#9").val(localStorage.getItem("9"));
// $("#12").val(localStorage.getItem("12"));
// $("#13").val(localStorage.getItem("13"));
// $("#14").val(localStorage.getItem("14"));
// $("#15").val(localStorage.getItem("15"));
// $("#16").val(localStorage.getItem("16"));

var currentHour = dayjs().hour()

for(let i =9;i<=17;i++){
    $("#"+i).val(localStorage.getItem(i));
    if(i<currentHour){
        $("#"+i).addClass("bg-secondary")
    }else if(currentHour === i){
        $("#"+i).addClass("bg-danger")

    }else{    
            $("#"+i).addClass("bg-info")


    }

}



$("#date").text(dayjs().format("MM/DD/YYYY"))

