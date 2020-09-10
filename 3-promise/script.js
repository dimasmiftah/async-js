window.onload = () => {
  function get(url) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.onload = () => {
        if (xhr.status == 200) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject(xhr.statusText);
        }
      };
      xhr.onerror = () => {
        reject(xhr.statusText);
      };
      xhr.send();
    });
  }

  let promise = get("data/tweets.json");
  promise
    .then((tweets) => {
      console.log(tweets);
      return get("data/friends.json");
    })
    .then((friends) => {
      console.log(friends);
      return get("data/pets.json");
    })
    .then((pets) => console.log(pets))
    .catch((error) => console.log(error));
};
