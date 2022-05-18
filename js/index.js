var status = false;

$(".switch").click(function(){
    if (status == "false"){
        status = true;
        $(".switch").css("background-color","#10d5c2");
        $(".switch__btn").css("transform","translate(2rem,.20rem)");
    } else if (status == "true") {
        status = false;
        $(".switch").css("background-color","#cdd7ee");
        $(".switch__btn").css("transform","translate(.25rem,.20rem)");
    }
})

function handleInputChange(e) {
    console.log(e.target);
    let target = e.target;
    if (e.target.type !== 'range'){
        target = $("#range");
    }

    const min = target.min;
    const max = target.max;
    const val = target.value;

    const percent = (val - min) * 100 / (max - min );
    const price = 2 * 0.16 * percent ;

    target.style.backgroundSize = percent + "% 100%";

    $(".pricing__pageview").text(2*percent + "K pageviews")
    $(".pricing__price").text("$" + price.toFixed(2));
}

$("input").change(handleInputChange);