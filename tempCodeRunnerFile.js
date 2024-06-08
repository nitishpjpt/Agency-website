// Function to fetch return orders using Shiprocket API
function fetchReturnOrders(authToken) {
  // Shiprocket API endpoint for return orders
  const apiUrl = 'https://apiv2.shiprocket.in/v1/external/orders?page=3';

  // Make a GET request to the Shiprocket API
  return fetch(apiUrl, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}` // Include the token in the Authorization header
      }
  })
  .then(response => {
      // Check if the response is successful (status code 200)
      if (!response.ok) {
          throw new Error(`Failed to fetch return orders. Status: ${response.status}`);
      }
      // Parse the JSON response and return it
      return response.json();
  })
  .catch(error => {
      throw new Error(`Error fetching return orders: ${error.message}`);
  });
}

// Example token
const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQ2MzQ2ODgsInNvdXJjZSI6InNyLWF1dGgtaW50IiwiZXhwIjoxNzE1MzI3NzYwLCJqdGkiOiJ0SERKWm9UckhxT2Y0QUpZIiwiaWF0IjoxNzE0NDYzNzYwLCJpc3MiOiJodHRwczovL3NyLWF1dGguc2hpcHJvY2tldC5pbi9hdXRob3JpemUvdXNlciIsIm5iZiI6MTcxNDQ2Mzc2MCwiY2lkIjoyNjg0MTUsInRjIjozNjAsInZlcmJvc2UiOmZhbHNlLCJ2ZW5kb3JfaWQiOjAsInZlbmRvcl9jb2RlIjoiIn0.FPdPRyB-d8mcIA3ZOy9ap5G4zkZKhRrlEYWMIRGHO9k";

// Fetch return orders using the authentication token
fetchReturnOrders(authToken)
  .then(returnOrders => {
      console.log('Return orders:', returnOrders);
  })
  .catch(error => {
      console.error(error.message);
  });
