var buttonCondition = false;
document.getElementById('rounded_menu').style.transition = '1s';
function buttonClicked() {
    if (buttonCondition === false) {
        document.getElementById('add_btn').style.transition = '1s';
        document.getElementById('rounded_menu').style.transition = '1s';
        document.getElementById('rounded_menu').style.transform = 'scale(1)';
        document.getElementById('add_btn').style.transform = "rotate(45deg)";
        buttonCondition = true;
    } else {
        document.getElementById('add_btn').style.transition = '1s';
        document.getElementById('rounded_menu').style.transition = '1s';
        document.getElementById('rounded_menu').style.transform = 'scale(0)';
        document.getElementById('add_btn').style.transform = "rotate(0deg)";
        buttonCondition = false;
    }
}