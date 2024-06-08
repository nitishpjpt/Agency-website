// Function to authenticate the user with a token
function authenticateUser(token) {
  // Simulated authentication logic
  return new Promise((resolve, reject) => {
    // Assuming some asynchronous authentication process here
    setTimeout(() => {
      if (token === "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQ2MzQ2ODgsInNvdXJjZSI6InNyLWF1dGgtaW50IiwiZXhwIjoxNzE0MzY0NDYxLCJqdGkiOiJZVlhPU21UUUxGaXFIdnVhIiwiaWF0IjoxNzEzNTAwNDYxLCJpc3MiOiJodHRwczovL3NyLWF1dGguc2hpcHJvY2tldC5pbi9hdXRob3JpemUvdXNlciIsIm5iZiI6MTcxMzUwMDQ2MSwiY2lkIjoyNjg0MTUsInRjIjozNjAsInZlcmJvc2UiOmZhbHNlLCJ2ZW5kb3JfaWQiOjAsInZlbmRvcl9jb2RlIjoiIn0.aOEt7OMMbht-gv6jBE66MslbfHcyDEjnmbddWW2zseg") {
        resolve({
          authenticated: true,
          user: {
            email: "codingshutter@gmail.com",
            Password: "9871785113",
          },
        });
      } else {
        reject(new Error("Invalid token"));
      }
    }, 1000); // Simulate a delay of 1 second
  });
}

// Example token
const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQ2MzQ2ODgsInNvdXJjZSI6InNyLWF1dGgtaW50IiwiZXhwIjoxNzE0MzY0NDYxLCJqdGkiOiJZVlhPU21UUUxGaXFIdnVhIiwiaWF0IjoxNzEzNTAwNDYxLCJpc3MiOiJodHRwczovL3NyLWF1dGguc2hpcHJvY2tldC5pbi9hdXRob3JpemUvdXNlciIsIm5iZiI6MTcxMzUwMDQ2MSwiY2lkIjoyNjg0MTUsInRjIjozNjAsInZlcmJvc2UiOmZhbHNlLCJ2ZW5kb3JfaWQiOjAsInZlbmRvcl9jb2RlIjoiIn0.aOEt7OMMbht-gv6jBE66MslbfHcyDEjnmbddWW2zseg"
// Calling the authentication function with the token
authenticateUser(authToken)
  .then((result) => {
    console.log("Authentication successful!");
    console.log("User:", result.user);
  })
  .catch((error) => {
    console.error("Authentication failed:", error.message);
  });
