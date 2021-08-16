// function for simple interest
function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (principal * years * rate) / 100;
    var year = new Date().getFullYear() + parseInt(years);
    document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark><br/>" + "at an interest rate of <mark>" + rate + '%' + "</mark><br/>" + "You'll receive an amount of <mark>" + interest + "</mark><br/>" + "in the year <mark>" + year + "</mark>";

}

// function for rate
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + '%';
}

// function for validation 
function validation() {
    var principal = document.getElementById("principal").value;
    var biggerThanZero = parseInt(principal) > 0;
    if (!biggerThanZero) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
}