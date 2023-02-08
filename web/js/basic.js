const USERNAME = "userrnaame";
const PASSWORD = "DOntlookmypass55555";

const headers = new Headers({
  "Authorization": "Basic " + btoa(USERNAME + ":" + PASSWORD),
  "Content-Type": "application/json"
});

fetch("https://your-confluence-server.com/rest/api/content", {
  method: "GET",
  headers: headers
})
  .then(response => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
