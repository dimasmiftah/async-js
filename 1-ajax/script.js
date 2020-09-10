window.onload = () => {
  // let xhr = new XMLHttpRequest();
  // xhr.onreadystatechange = () => {
  //   if (xhr.readyState == 4 && xhr.status == 200) {
  //     console.log(JSON.parse(xhr.response));
  //   }
  // };
  // xhr.open("get", "data/tweet.json", true);
  // xhr.send();
  // console.log("test");

  fetch("data/tweets.json", {
    method: "get",
  })
    .then((response) => response.json())
    .then((response) => console.log(response));
};
