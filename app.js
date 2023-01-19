//Use dayjs format
let currentDay = dayjs().format("dddd") + " " + dayjs().format("D MMM YYYY") ;
console.log(currentDay);
//current hour with dayjs format
let currentHour = dayjs().format("h:mm:ss A") ;
console.log(currentHour);
//Describe variables
let amNine = $("#9morning");
let amTen = $("#10morning");
let amEleven = $("#11morning");
let pmTwelve = $("#12afternoon");
let pmThirteen = $("#13afternoon");
let pmFourteen = $("#14afternoon");
let pmFifteen = $("#15afternoon");
let pmSixteen = $("#16afternoon");
let pmSeventeen = $("#17afternoon");

let hour = dayjs().hour();

let userInput;
let spanHour;

console.log(hour);
//Use setinterval method for repeating a block of code at every given timing event.
let interval = setInterval(function(){
    $("#currentDay").html(currentDay)
})



$(document).ready(function(){
    callPage();
    colorInput();
    

//Take the data and send it to local storage
   $(".btnS").on("click", function(){
    userInput = $(this).siblings(".form-control").val().trim();
    console.log(userInput);
    spanHour = $(this).siblings(".input-group-prepend").text().trim();
    console.log(spanHour);
    localStorage.setItem(spanHour, JSON.stringify(userInput))
   })
//when we click the button it will clear the page and user input rows at the same time!
   $("#clearDay").on("click", function(){
    localStorage.clear();
    callPage();

   })
})
//pull the data from local storage with json.parse
function callPage() {
    let call9 =JSON.parse(localStorage.getItem("09:00am"));
    amNine.val(call9);
    let call10 =JSON.parse(localStorage.getItem("10:00am"));
    amTen.val(call10);
    let call11 =JSON.parse(localStorage.getItem("11:00am"));
    amEleven.val(call11);
    let call12 =JSON.parse(localStorage.getItem("12:00pm"));
    pmTwelve.val(call12);
    let call13 =JSON.parse(localStorage.getItem("13:00pm"));
    pmThirteen.val(call13);
    let call14 =JSON.parse(localStorage.getItem("14:00pm"));
    pmFourteen.val(call14);
    let call15 =JSON.parse(localStorage.getItem("15:00pm"));
    pmFifteen.val(call15);
    let call16 =JSON.parse(localStorage.getItem("16:00pm"));
    pmSixteen.val(call16);
    let call17 =JSON.parse(localStorage.getItem("17:00pm"));
    pmSeventeen.val(call17);
}
//color will change according to hours//comparing present,past, future 
function colorInput(){
    $(".form-control").each(function(){
        let comp =parseInt($(this).attr("id"));
        hour = parseInt(hour);

        if (hour > comp){
            $(this).addClass("past")
        }
        else if (hour < comp) {
            $(this).addClass("future")
        }
        else{
            $(this).addClass("current")
        }
        
    })
}