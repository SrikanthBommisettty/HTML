let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved");
    }, 3000);
  });
  
  myPromise.then(result => {
    console.log(result);
  });
  