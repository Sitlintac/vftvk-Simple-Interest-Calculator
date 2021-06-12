function compute()
{
    //Retrieve user entries
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // Validate user entry for Principal
    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }

    //Calculate total investment at end of term, as well as when end of term is
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);

    //Compile a string with the results and populate it in the appropriate span
    var resultstring = "If you deposit \<span class=\"resultvar\"\>" + principal +"\<\\span\>,\<br\> at an interest rate of \<span class=\"resultvar\"\>" + rate + "%\<\\span\>,\<br\> You will receive an amount of \<span class=\"resultvar\"\>" + (interest + principal) + "\<\\span\>\<br\> In the year \<span class=\"resultvar\"\>" + year + "\<\\span\>";
    document.getElementById("result").innerHTML = resultstring;
}

function updateRate()
{
    //Update display text on Rate slider as different rates are chosen
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
        