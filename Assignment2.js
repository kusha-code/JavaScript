/// Ques

// function getData(uId) {
//     setTimeout(() => {
//     console.log("Fetched the data!");
//     return "skc@gmail.com";
//     }, 4000);
//     }
    
//     console.log("start");
//     var email = getData("skc");
//     console.log("Email id of the user id is: " + email);
//     console.log("end");


        //Using Promise, Async-await

    function getData(uId) {
        return new Promise(resolve => setTimeout(() => {
          console.log("Fetched the data!");
          return resolve("skc@gmail.com");
        }, 4000));
      }
      console.log("start");
      async function runner(){      
        let email = await getData();
        console.log("Email id of the user id is: " + email);
        console.log("end");
      }
      runner();
