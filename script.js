let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];

  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map((element) => {
        if(element.profession === "developer"){
            console.log(element.name);
        }
    });
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((element) => {
        if(element.profession === "developer"){
            console.log(element.name);
        }
    });
    
  }
  
  function addData() {
    //Write your code here, just console.log
    arr.push({id:4,name:"susan",age:"20",profession:"intern"});
    console.log(arr[3]);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    /* buy creating new array
     let newArr = arr.filter((element) => {
         return element.profession !== "admin"; // Removes the element with value 3
       });

       console.log(newArr);*/

    // to change in the same array
       for(let i = 0; i < arr.length; i++){
        if(arr[i].profession === "admin"){
            arr.splice(i,1);
        }
       }
       console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let brr = [
        { id: 5, name: "Sunil Chhetri", age: "38", profession: "Football player" },
        { id: 6, name: "Virat Kohil", age: "34", profession: "Cricket player" },
        { id: 7, name: "Viswanathan Anand", age: "53", profession: "Chess player" },
      ];

      console.log(arr.concat(brr));
  }