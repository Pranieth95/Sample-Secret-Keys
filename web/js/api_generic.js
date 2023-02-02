var apiToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

AJS.$(document).ready(function() {
  AJS.$.ajax({
    url: "https://domain.com/rest/api/content",
    type: "GET",
    headers: {
      "Authorization": "Bearer " + apiToken
    },
    success: function(data) {
      console.log("Success:", data);
    },
    error: function(error) {
      console.error("Error:", error);
    }
  });
});

