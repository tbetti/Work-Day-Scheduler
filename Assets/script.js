// Constants and global variables
var START_HOUR = 9;
var TOTAL_WORKDAY = 8;
var currentHour = moment().format("H");
var userInput = JSON.parse(localStorage.getItem("Tasks")) || [
    {
        task: ""
    },
    {
        task: ""
    },
    {
        task: ""
    },
    {
        task: ""
    },
    {
        task: ""
    },    {
        task: ""
    },    {
        task: ""
    },    {
        task: ""
    },    {
        task: ""
    }
];

// Refresh every 15 minutes
setInterval(changeColor, 900000);

// Display current date
var currentDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDate);

// Create multiple time blocks:
var container = $(".container");
for(i=START_HOUR; i < TOTAL_WORKDAY+START_HOUR; i++){
    var row = $("<div>").attr("class", "row time-block");
    var hour = $("<div>").attr("class", "col-1 column hour");
    var hourDisplay = $("<h2>");
    var inputColumn = $("<div>").attr("class", "col-10 column");
    var saveBtn = $("<div>").attr("class", "col-1 column saveBtn");
    var textArea = $("<textarea>");
    var iBtn = $("<i>");

    container.append(row);
    row.append(hour.append(hourDisplay));
    row.append(inputColumn);
    textArea.attr("id", "task"+i);
    inputColumn.append(textArea);
    row.append(saveBtn);
    saveBtn.append(iBtn);
    iBtn.attr("class", "fas fa-save");

    // fill textArea with userInput object
    textArea.text(userInput[i-START_HOUR].task);

    // display time
    if (i<12)
    {
        hourDisplay.text(i + " AM");
    } else if (i===12){
        hourDisplay.text(i + " PM");
    }
    else {
        var twelveHour = i - 12;
        hourDisplay.text(twelveHour + " PM");
    }

    changeColor();
}

// change row colors based on current time
function changeColor(){
    if(currentHour==i){
        inputColumn.addClass("present");
    } else if (currentHour>i){
        inputColumn.addClass("past");
    } else{
        inputColumn.addClass("future");
    }
}

// Save user input when save button clicked
var save = $("i");
save.on("click", function(){
    // commits what user inputs into the userInput object - is there a way to for-loop this?
    userInput[0].task = task9.value; 
    userInput[1].task = task10.value;
    userInput[2].task = task11.value;
    userInput[3].task = task12.value;
    userInput[4].task = task13.value;
    userInput[5].task = task14.value;
    userInput[6].task = task15.value;
    userInput[7].task = task16.value;

    // commits user input into the local storage
    localStorage.setItem("Tasks", JSON.stringify(userInput));
})

// Clear userInput when clear button is clicked
var clearAll = $("#clear");
clearAll.on("click", function(){
    for(i=0; i < userInput.length; i++){
        userInput[i].task = ""; 
    }
    
    localStorage.setItem("Tasks", JSON.stringify(userInput));

    // fill textArea with blank tasks
    task9.value = "";
    task10.value = "";
    task11.value = "";
    task12.value = "";
    task13.value = "";
    task14.value = "";
    task15.value = "";
    task16.value = "";
});