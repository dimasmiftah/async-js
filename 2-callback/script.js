window.onload = () => {
  // SYNCHRONOUS CALLBACK
  // let animal = ["pig", "cat", "dog"];
  // animal.map((each) => console.log(each));
  // console.log("test");

  // ASYNCHRONOUS CALLBACK
  // fetch("data/tweets.json", { method: "get" })
  //   .then((data) => data.json())
  //   .then((data) => console.log(data));

  // CALLBACK HELL SOLVED
  function errorHandler(err) {
    console.log(err);
  }
  fetch("data/tweets.json", { method: "get" })
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      tweetsCallback();
    })
    .catch(errorHandler);

  function tweetsCallback() {
    fetch("data/friends.json", { method: "get" })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        friendsCallback();
      })
      .catch(errorHandler);
  }

  function friendsCallback() {
    fetch("data/pets.json", { method: "get" })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
      })
      .catch(errorHandler);
  }
};
