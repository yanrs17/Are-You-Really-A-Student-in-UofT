// $(document).
$('button').click(function() {
    if ($(this).attr('class') == 'active') {
        $(this).removeAttr('class');
    } else if ($(this).attr('class') == undefined) {
        $('button').removeAttr('class');
        $(this).attr('class', 'active');
    }
});
