// function* gen() {
//   let x = yield "hi 1";
//   let y = yield "hi 2";
//   let z = yield "hi 3";
//   return x + y + z;
// }

// let myGen = gen();
// console.log(myGen.next());
// console.log(myGen.next(2));
// console.log(myGen.next(4));
// console.log(myGen.next(6));

window.onload = function () {
  genWrapper(function* () {
    let tweets = yield fetch("data/tweets.json", { method: "get" });
    console.log(tweets);
    let friends = yield fetch("data/friends.json", { method: "get" });
    console.log(friends);
    let pets = yield fetch("data/pets.json", { method: "get" });
    console.log(pets);
  });

  function genWrapper(generator) {
    let myGen = generator();
    function handler(yielded) {
      if (!yielded.done) {
        yielded.value
          .then((data) => data.json())
          .then((data) => handler(myGen.next(data)));
      }
    }
    return handler(myGen.next());
  }
};
