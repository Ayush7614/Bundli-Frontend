/* the function I'm going to create, I'm going to call it compute loan 
because I've already made references to it here inside my HTML code. */

function computeLoan() {

    // Let's add some variables.

    var amount = document.getElementById('amount').value;
        // This would be this will represent the amount of loan that you want to borrow.

    var interest_rate = document.getElementById('interest_rate').value;
        /* Here we got a variable called interest on the score rate */

    var months = document.getElementById('months').value;
        /* here we got variable called months.
        any value that is entered for that value for that month will be attached to this variable. */

    var interest = (amount * (interest_rate * .01)) / months;
        /* And here is the variable called interest. 
        this is going to represent the actual interest.*/

    var payment = ((amount / months) + interest).toFixed(2);
        /*  And here we have variable called payment and the variable is going to be equal to the amount. 
        This will represent the monthly payment that the loan borrower have to pay.*/

        //it's going to be equal to the amount divided by the months plus the interest.

    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    document.getElementById('payment').innerHTML = "Monthly Payment = $" + payment;

}