$(document).ready(function () {

    $('#ContactForm').click(function () {
        var email = $('#email').val()
        function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }

        if ($('#name').val() == '') {
            alert('Please enter your name')
            return
        } else if (!validateEmail(email)) {
            alert('please enter valid email')
            return
        } else if ($('#message').val() == '') {
            alert('please enter Message')
            return
        }
        var data = {
            time: new Date(),
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        }
        $.ajax({
            url: "http://sunnytrans.meegatrucnz.com:3000/contact/ccForm",
            data: JSON.stringify(data),
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            success: function (result) {
                if (result.msg == 'success') {
                    alert('Thank you!! we will get in touch with you')
                    $('#name').val("")
                    $('#email').val("")
                    $('#message').val("")
                }
            }
        })
    })

    function validations() {

    }
    var tl = new TimelineMax({ onUpdate: updatePercentage });
    var tl2 = new TimelineMax();
    const controller = new ScrollMagic.Controller();

    tl.from('blockquote', .5, { x: 200, opacity: 0 });
    tl.from('span', 1, { width: 0 }, "=-.5");
    tl.from('#office', 1, { x: -200, opacity: 0, ease: Power4.easeInOut }, "=-1");
    tl.from('#building', 1, { x: 200, opacity: 0, ease: Power4.easeInOut }, "=-.7");

    tl2.from("#box", 1, { opacity: 0, scale: 0 });
    tl2.to("#box", .5, { left: "20%", scale: 1.3, borderColor: 'white', borderWidth: 12, boxShadow: '1px 1px 0px 0px rgba(0,0,0,0.09)' })

    const scene = new ScrollMagic.Scene({
        triggerElement: ".sticky",
        triggerHook: "onLeave",
        duration: "100%"
    })
        .setPin(".sticky")
        .setTween(tl)
        .addTo(controller);

    const scene2 = new ScrollMagic.Scene({
        triggerElement: "blockquote"
    })
        .setTween(tl2)
        .addTo(controller);


    function updatePercentage() {
        //percent.innerHTML = (tl.progress() *100 ).toFixed();
        tl.progress();
        console.log(tl.progress());
    }
})