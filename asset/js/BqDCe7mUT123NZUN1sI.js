function is_enter(event, fun_nm) {
    var function_name = fun_nm;
    if (!event.altKey && !event.ctrlKey && event.keyCode == 13) {
        window[function_name]();
    }
}
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    } else {
        return true;
    }
}
var strongPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,40}$/;
function validateAlpha(evt){
    var keyCode = (evt.which) ? evt.which : evt.keyCode
    if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32)
        return false;
    return true;
}
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
function showLoader(id) {
    $("."+id).css("display", "");
}

function hideLoader(id) {
    $("."+id).css("display", "none");
}
function copyClipboard(id) {
    document.getElementById(id).select();
    document.execCommand("Copy");
    toastr.success('Clipboard copied !');
}
function copyToClipboard(divId) {
        var success = true,
        range = document.createRange(),
        selection;
        var tmpElem = $('<div>');
        tmpElem.css({
            position: "absolute",
            left: "-1000px",
            top: "-1000px",
        });
        tmpElem.html($('#' + divId).html());
        $("body").append(tmpElem);
        range.selectNodeContents(tmpElem.get(0));
        selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        try {
            success = document.execCommand("copy", false, null);
        } catch (e) {
            CopyToClipboard(divId);
        }
        if (success) {
            toastr.success('Clipboard copied !');
            tmpElem.remove();
        }
    }