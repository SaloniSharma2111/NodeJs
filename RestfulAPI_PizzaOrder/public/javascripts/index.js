$(function ready() {
    $("#submitForm").submit(function (event) {
        event.preventDefault();
         var vegtoppings = [];
         var nonvegtoppings=[];
            $.each($("input[class='veg']:checked"), function(){            
                vegtoppings.push($(this).attr('id'));
            });
            //alert("My vegtoppings are: " + vegtoppings.join(", "));
            $.each($("input[class='nonveg']:checked"), function(){            
                nonvegtoppings.push($(this).attr('id'));
            });
           // alert("My nonvegtoppings are: " + nonvegtoppings.join(", "));
        var orderInfo = JSON.stringify({
            pizzaSize: $('input[name=pizzaSize]:checked').val(),
            crustType: $('input[name=crustType]:checked').val(),
            vegToppings: vegtoppings,
            nonvegToppings: nonvegtoppings,
            vegtoppingsCost: $('#vegtoppingsCost').text(),
            nonvegtoppingsCost: $('#nonvegtoppingsCost').text(),
            smallPizzaCost:$('#smallPizzaCost').text(),
            mediumPizzaCost:$('#mediumPizzaCost').text(),
            largePizzaCost:$('#largePizzaCost').text(),
            personalPizzaCost:$('#personalPizzaCost').text(),
            stuffedCrustCost:$('#stuffedCrustCost').text(),
            quantity: $('#quantity').val(),
            phone:$('#phone').val(),
            address:$('#address').val(),
        });

        $.ajax({
            url: '/api/orders',
            type: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            data: orderInfo,
            success: function (json, status, request) {
                console.log('Request');
                console.log(request);
                console.log(json);
                $('#statusMsg').removeClass();
                $('#statusMsg').addClass('alert alert-success');
                $('#statusMsg').html('Order Placed successfully. Your order total is: '+ json.ordrTotal);
            },
            error: function (request, status) {
                $('#statusMsg').removeClass();
                $('#statusMsg').addClass('alert alert-danger');
                $('#statusMsg').html('Error placing the order');
                console.log('Request failed : ', status);
            }
        });

    });
});