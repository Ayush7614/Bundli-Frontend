window.onload = function () {
    document.querySelector('.cont_modal').className = "cont_modal";
}
var c = 0;
function open_close() {
    if (c % 2 == 0) {
        document.querySelector('.cont_modal').className = "cont_modal cont_modal_active";
        c++;
    } else {
        document.querySelector('.cont_modal').className = "cont_modal";
        c++;
    }
}