/*
 /$$   /$$ /$$$$$$$$ /$$$$$$$$ /$$$$$$$        /$$$$$$$  /$$$$$$$$  /$$$$$$  /$$   /$$ /$$$$$$$$  /$$$$$$  /$$$$$$$$
| $$  | $$|__  $$__/|__  $$__/| $$__  $$      | $$__  $$| $$_____/ /$$__  $$| $$  | $$| $$_____/ /$$__  $$|__  $$__/
| $$  | $$   | $$      | $$   | $$  \ $$      | $$  \ $$| $$      | $$  \ $$| $$  | $$| $$      | $$  \__/   | $$
| $$$$$$$$   | $$      | $$   | $$$$$$$/      | $$$$$$$/| $$$$$   | $$  | $$| $$  | $$| $$$$$   |  $$$$$$    | $$
| $$__  $$   | $$      | $$   | $$____/       | $$__  $$| $$__/   | $$  | $$| $$  | $$| $$__/    \____  $$   | $$
| $$  | $$   | $$      | $$   | $$            | $$  \ $$| $$      | $$/$$ $$| $$  | $$| $$       /$$  \ $$   | $$
| $$  | $$   | $$      | $$   | $$            | $$  | $$| $$$$$$$$|  $$$$$$/|  $$$$$$/| $$$$$$$$|  $$$$$$/   | $$
|__/  |__/   |__/      |__/   |__/            |__/  |__/|________/ \____ $$$ \______/ |________/ \______/    |__/
                                                                        \__/
*/

/*
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}

$ json-server --watch db.json
http://localhost:3000/posts/1
//var baseurl = "http://localhost:3000"
*/


var baseurl = 'https://jsonplaceholder.typicode.com';


$.ajax({
  url: baseurl + '/posts/1',
  method: 'GET'
}).then(function(data) {
  console.log(data);
  console.log(data["id"])
  console.log(data["title"])
  console.log(data["author"])
});
