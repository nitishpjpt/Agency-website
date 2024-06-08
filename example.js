// function ot fetch the return order with shiprocket api

function returnOrders(authToken)  {
    const api = "https://apiv2.shiprocket.in/v1/external/orders/processing/return";

   // make a http get request
   return fetch(api ,{
    "method": 'GET',
    "Authentication": `${authToken}`
   });
},