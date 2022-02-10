  function addTask2() {

    var x= document.getElementById("myForm");
    let username = document.getElementById("username").value;
    //console.log(username);
    let name = document.getElementById("name").value;
    //console.log(name);
    let dob=document.getElementById("dob").value;
    //console.log(dob);
    var gender="male";
    var hobbies= x.elements[6].value;
    let hobbiesArray = hobbies.split(" ");

    if(x.elements[3].checked){
      gender =x.elements[3].value;

    if(x.elements[4].checked)
      gender =x.elements[4].value;

    if(x.elements[5].checked)
      gender =x.elements[5].value;    

    

    const dbRef = firebase.database().ref();
    dbRef.child("users").child(username).get().then((snapshot) => {
       console.log("Here: "+snapshot.val());
      if (snapshot.exists()) {
        alert("Username already exists!")
      } else {
        firebase.database().ref('users/'+username).set({
            username: username,
            name:name,
            dob:dob,
            hobbies:hobbiesArray,
          });

          for(let i=0;i<hobbiesArray.length;i++){
            dbRef.child("hobbies/"+hobbiesArray[i]+"/"+username).set({
              username:name,
            });
          }

          
      }
    }).catch((error) => {
      console.error(error);
    });
  }
}
  




  // firebase.database().ref('users/'+name).set({
  //   username: name,
  // });


  // if(snapshot.val().name== name){
  //   alert("Username Taken");
  // }
  // else{
  //   firebase.database().ref('users/'+name).push({
  //     username: name,
  //   });
  // }


  // function addTask(){

    
  //   const dbRef = firebase.database().ref();
  //   var data = dbRef.child("users").get().then((snapshot) => {
  //     if (snapshot.exists()) {
  //       //console.log(snapshot.val());
  //     } else {
        
  //     }
  //   }).catch((error) => {
  //     console.error(error);
  //   });
    
  //   //console.log(data);
      
  //     var div = document.createElement("div");
  //     div.classList.add("task");
    
  //     var title = document.createElement("div");
  //     title.classList.add("task-name");
  //     title.innerHTML="Meet with Lauren for Coffee.";

  //     var deadline = document.createElement("div");
  //     deadline.classList.add("task-deadline");
  //     deadline.innerHTML="Oct 08,2021";

  //     var category = document.createElement("div");
  //     category.classList.add("task-category");
  //     category.innerHTML="Personal";

  //     var status = document.createElement("div");
  //     status.classList.add("task-status");
      
  //     div.append(title);
  //     div.append(deadline);
  //     div.append(category);
  //     div.append(status);
      
  //   document.getElementById("tasks").append(div);

  // }

  