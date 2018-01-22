$(function ready() {

    $.getJSON("/api/orders", function (data) {
      
        data.forEach(function (item) {
           
                var toppings="";
                var nonvegtopping="";
                if(item.vegToppings.length>0 || item.vegToppings!='undefined')
            {
               for(i=0;i<item.vegToppings.length;i++)
                {
                toppings+=item.vegToppings[i] + " ";
                }
            }
            
        
        if(item.nonvegToppings.length>0|| item.nonvegToppings!='undefined')
         {  
             for(i=0;i<item.nonvegToppings.length;i++)
            {
                nonvegtopping+=item.nonvegToppings[i] + " ";
            }
         }
         

            $('#orders').
            append('<tr><td>' + item.pizzaSize + '</td><td>' + item.crustType + '</td><td>' + item.quantity + '</td><td>'+item.phone +'</td><td>'+item.address+'</td><td>'+toppings+'</td><td>'+nonvegtopping+'</td>'+'</td></tr>');
        });
    });

    

});

function searchData()
    {
        var phone=$('#phone').val();
        var address=$('#address').val();
        if(phone!=""&&address!="")
        {
            $('#orders').empty();
            $('#orders').append('<thead><th>'+'Pizza Size'+'</th><th>'+'Crust Type'+'</th><th>'+'Quantity'+'</th><th>'+'Phone Number'+'</th><th>'+'Address'+'</th><th>'+'Veg Toppings'+'</th><th>'+'Non-Veg Toppings'+'</th></thead>');
            $.getJSON("/api/orders",{phone:phone,address:address}, function (data) {
            console.log(data);
            data.forEach(function (item) {
            if(item.phone==phone&&item.address==address)
            {    var toppings="";
                var nonvegtopping="";
                if(item.vegToppings.length>0 || item.vegToppings!='undefined')
            {
               for(i=0;i<item.vegToppings.length;i++)
                {
                toppings+=item.vegToppings[i] + " ";
                }
            }
        
        if(item.nonvegToppings.length>0|| item.nonvegToppings!='undefined')
         {  
             for(i=0;i<item.nonvegToppings.length;i++)
            {
                nonvegtopping+=item.nonvegToppings[i] + " ";
            }
         }
            $('#orders').
            append('<tr><td>' + item.pizzaSize + '</td><td>' + item.crustType + '</td><td>' + item.quantity + '</td><td>'+item.phone +'</td><td>'+item.address+'</td><td>'+toppings+'</td><td>'+nonvegtopping+'</td>'+'</td></tr>');
        }
        
        });
    });
        }//if ends

        else if(phone==""&&address!="")
        {
            $('#orders').empty();
            $('#orders').append('<thead><th>'+'Pizza Size'+'</th><th>'+'Crust Type'+'</th><th>'+'Quantity'+'</th><th>'+'Phone Number'+'</th><th>'+'Address'+'</th><th>'+'Veg Toppings'+'</th><th>'+'Non-Veg Toppings'+'</th></thead>');
            $.getJSON("/api/orders",{phone:phone,address:address}, function (data) {
            console.log(data);
            data.forEach(function (item) {
            if(item.address==address)
            {    var toppings="";
                var nonvegtopping="";
                if(item.vegToppings.length>0 || item.vegToppings!='undefined')
            {
               for(i=0;i<item.vegToppings.length;i++)
                {
                toppings+=item.vegToppings[i] + " ";
                }
            }
        
        if(item.nonvegToppings.length>0|| item.nonvegToppings!='undefined')
         {  
             for(i=0;i<item.nonvegToppings.length;i++)
            {
                nonvegtopping+=item.nonvegToppings[i] + " ";
            }
         }
            $('#orders').
            append('<tr><td>' + item.pizzaSize + '</td><td>' + item.crustType + '</td><td>' + item.quantity + '</td><td>'+item.phone +'</td><td>'+item.address+'</td><td>'+toppings+'</td><td>'+nonvegtopping+'</td>'+'</td></tr>');
        }
        
                });
             });     
        }
        else if(phone!="" && address=="")
        {
             $('#orders').empty();
             $('#orders').append('<thead><th>'+'Pizza Size'+'</th><th>'+'Crust Type'+'</th><th>'+'Quantity'+'</th><th>'+'Phone Number'+'</th><th>'+'Address'+'</th><th>'+'Veg Toppings'+'</th><th>'+'Non-Veg Toppings'+'</th></thead>');
            $.getJSON("/api/orders",{phone:phone,address:address}, function (data) {
            console.log(data);
            data.forEach(function (item) {
            if(item.phone==phone)
            {    var toppings="";
                var nonvegtopping="";
                if(item.vegToppings.length>0 || item.vegToppings!='undefined')
            {
               for(i=0;i<item.vegToppings.length;i++)
                {
                toppings+=item.vegToppings[i] + " ";
                }
            }
        
        if(item.nonvegToppings.length>0|| item.nonvegToppings!='undefined')
         {  
             for(i=0;i<item.nonvegToppings.length;i++)
            {
                nonvegtopping+=item.nonvegToppings[i] + " ";
            }
         }
            $('#orders').
            append('<tr><td>' + item.pizzaSize + '</td><td>' + item.crustType + '</td><td>' + item.quantity + '</td><td>'+item.phone +'</td><td>'+item.address+'</td><td>'+toppings+'</td><td>'+nonvegtopping+'</td>'+'</td></tr>');
        }
        
                });
             });     

        }
        else{
            $.getJSON("/api/orders", function (data) {
      
        data.forEach(function (item) {
           
                var toppings="";
                var nonvegtopping="";
                if(item.vegToppings.length>0 || item.vegToppings!='undefined')
            {
               for(i=0;i<item.vegToppings.length;i++)
                {
                toppings+=item.vegToppings[i] + " ";
                }
            }
        
        if(item.nonvegToppings.length>0|| item.nonvegToppings!='undefined')
         {  
             for(i=0;i<item.nonvegToppings.length;i++)
            {
                nonvegtopping+=item.nonvegToppings[i] + " ";
            }
         }
            $('#orders').
            append('<tr><td>' + item.pizzaSize + '</td><td>' + item.crustType + '</td><td>' + item.quantity + '</td><td>'+item.phone +'</td><td>'+item.address+'</td><td>'+toppings+'</td><td>'+nonvegtopping+'</td>'+'</td></tr>');
        });
    });
        }
        
    }




    
