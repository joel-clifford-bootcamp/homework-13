// Set devoured = true for selected burger
$(".devour").on("click", function(event) {
    const id = $(this).data("id");

    $.ajax({
        type: "PUT",
        url: "/api/burgers/" + id,
        success: function (response) {
            console.log("devoured burger " + id);
            $("#burgerImage").attr("src","/assets/images/burger-animated.gif");
            setTimeout(() => {location.reload()}, 950);
        }
    });
});

// Create a new burger
$("#addBurger").on("click", function(event) {
    const newBurger = {
        burger_name: $("#burgerName").val().trim()
    };

    $.ajax({
        type: "POST",
        url: "/api/burgers",
        data: newBurger,
        success: function (response) {
            location.reload();
        }
    });
});

// Clear all burgers
$("#clear").on("click", function(event){
    $.ajax({
        type: "DELETE",
        url: "/api/burgers/clear",
        success: function (response) {
            location.reload();
        }
    });
})