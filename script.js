$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var message = $("#message");

    envelope.click(function() {
        open();
    });

    btn_open.click(function() {
        open();
    });

    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open").removeClass("close");
        message.css("opacity", "1"); // Hace visible el mensaje
    }

    function close() {
        envelope.addClass("close").removeClass("open");
        message.css("opacity", "0"); // Oculta el mensaje
    }
});
