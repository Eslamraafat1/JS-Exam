let color = $(".navbart").outerWidth();
$(".navbart").animate({ left: -color }, 500);
$(".mark").click(() => {
  $(".navbart").animate({ left: -color }, 500);
});
$(".open").click(() => {
  if ($(".navbart").css("left") == "0px") {
    $(".navbart").animate({ left: -color }, 500);
  } else {
    $(".navbart").animate({ left: "0px" }, 500);
  }
});

// $(document).ready(function () {
//   $("#singers div:first").css("display", "block");
//   $("#singers h4").click(function () {
//     $(this).next().slideToggle(500);
//     $("#singers div").not($(this).next()).slideUp(500);
//   });
// });
let meals;
var foodList = [];
async function getFood() {
  let food = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  let myData = await food.json();
  foodList = myData.meals;
  display();
}
getFood();

function display() {
  let temp = "";
  foodList.forEach((z) => {
    temp += `<div class="col-md-6 col-lg-3 my-3 myM shadow item clisk" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <div class=" inner2 ">
    <img src="${z.strMealThumb}" class="w-100 rounded" alt="" />
    <div class="layer">
    <h2>${z.strMeal}</h2>
    
    <p>${z.strInstructions}</p>
  </div>
    
   </div>
  </div>`;
    document.getElementById("Row").innerHTML = temp;
  });
}

async function getRecipDetails(id) {
  let myResponce = await fetch(
    `www.themealdb.com/api/json/v1/1/list.php?i=list
    ${id}`
  );
  let myfood = await myResponce.json();
  meals = myfood.meals;
  displayFood();
}

function displayFood() {
  let temp = "";
  meals.strInstructions.forEach((e) => {
    temp += `<li>${e}</li>`;
  });

  document.getElementById("myList").innerHTML = temp;
  document.getElementById("title").innerHTML = meals.strCategory;
  document.getElementById("myImg").setAttribute("src", meals.strMealThumb);
}

getRecipDetails("52772")












$("#area").click(async function () {
  window.open;
  let food = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  let myData = await food.json();
  foodList = myData.meals;
  let temp = "";
  foodList.forEach((f) => {
    temp += `<div class="col-md-6 col-lg-3 my-3 myM shadow clisk" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <div class=" ">
    <i class="fa-solid fa-city fa-3x"></i>
    <div class="areae">
    <h2>${f.strArea}</h2>
    
  </div>
    
   </div>
  </div>`;
    document.getElementById("Row").innerHTML = temp;
  });
});

$("#Ingredients").click(async function () {
  window.open;
  let food = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
  );
  let myData = await food.json();
  foodList = myData.meals;
  let temp = "";
  foodList.forEach((d) => {
    temp += `<div class="col-md-6 col-lg-3 my-3 myM shadow clisk" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <div class=" ">
    <i class="fa-solid fa-bowl-food fa-3x doloer"></i>
    <div class="areae">
    
    <h2>${d.strIngredient}</h2>
    <p class="text-white">${d.strDescription
      .split(" ")
      .splice(0, 20)
      .join(" ")}</p>
  </div>
    
   </div>
  </div>`;
    document.getElementById("Row").innerHTML = temp;
  });
});

$("#Categories").click(async function () {
  window.open;
  let food = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  let myData = await food.json();
  foodList = myData.categories;
  let temp = "";
  foodList.forEach((L) => {
    temp += `<div class="col-md-6 col-lg-3 my-3 myM shadow clisk" data-bs-toggle="modal" data-bs-target="#exampleModal>
    <div class=" ">
 
    <div class="areae">
    <img src="${L.strCategoryThumb}" class="w-100 rounded" alt="" />
    <h2>${L.strCategory}</h2>
   
  </div>
    
   </div>
  </div>`;
    document.getElementById("Row").innerHTML = temp;
  });
});



$(".item5").click(async function () {
  // window.open;
  let temp = "";
  temp += `
  <section id="contact" class="container myM w-75 mx-auto mb-5 ">
<div class="p-2">
<h2 class="text-light mb-5 contact">ContacUs...</h2>
<div class="row">
  <div class="col-md-6">
    <div class="form-group">
      <input class="form-control shadow bahs " onkeyup="validation()" id="name"
      
        placeholder="Enter Your Name">
        <p id="demo"></p>
      <div class="alert mt-1 alert-danger d-none" id="namealert" role="alert">
        Special Characters and Numbers not allowed
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="form-group">
      <input onkeyup="validation()" class="form-control bahs" id="email" placeholder="Enter Email">
      <p id="demo"></p>
      <div class="alert mt-1 alert-danger d-none" id="emailalert" role="alert">
        Enter valid email. *Ex: xxx@yyy.zzz
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="form-group">
      <input onkeyup="validation()" class="form-control bahs" id="phone" placeholder="Enter phone">
      <p id="demo"></p>
      <div class="alert mt-1 alert-danger  d-none" id="phonealert" role="alert">
        Enter valid Phone Number
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="form-group">
      <input onkeyup="validation()" class="form-control bahs" id="id1" placeholder="Enter Age">
      
      <p id="demo"></p>
      <div class="alert mt-1 alert-danger  d-none" id="agealert" role="alert">
        Enter valid Age
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="form-group">
      <input onkeyup="validation()" class="form-control bahs" type="password" id="password"
        placeholder="Enter Password">
        <p id="demo"></p>
      <div class="alert mt-1 alert-danger  d-none" id="passwordalert" role="alert">
        Enter valid password *Minimum eight characters, at least one letter and one number:*
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="form-group">
      <input onkeyup="validation()" class="form-control bahs" type="password" id="rePassword"
        placeholder="Enter RePassword">
        <p id="demo"></p>
      <div class="alert mt-1 alert-danger  d-none" id="repasswordalert" role="alert">
        Enter valid Repassword
      </div>
    </div>
  </div>


  </div>
  <button  class="btn btn-outline-danger submiete" onclick="myFunctionArt()">Submit</button>

</div>

</section>`;
  document.getElementById("Row").innerHTML = temp;
});
function myFunctionArt() {
  let text;
  if (document.getElementById("id1").validity.rangeOverflow) {
    text = "Value too large";
  } else {
    text = "Input OK";
  } 
  document.getElementById("demo").innerHTML = text;
}

let userName,
  userEmail,
  userPhone,
  userAge,
  userPassword,
  userRePassword,
  userNameAlert,
  userEmailAlert,
  userPhoneAlert,
  userAgeAlert,
  userpasswordAlert,
  userRepasswordAlert;
(userName = document.getElementById("name")),
  (userEmail = document.getElementById("email")),
  (userPhone = document.getElementById("phone")),
  (userAge = document.getElementById("age")),
  (userPassword = document.getElementById("password")),
  (userRePassword = document.getElementById("rePassword")),
  (userNameAlert = document.getElementById("namealert")),
  (userEmailAlert = document.getElementById("emailalert")),
  (userPhoneAlert = document.getElementById("phonealert")),
  (userAgeAlert = document.getElementById("agealert")),
  (userpasswordAlert = document.getElementById("passwordalert")),
  (userRepasswordAlert = document.getElementById("repasswordalert"));




$(".item1").click(async function () {
  window.open;

  let temp = "";

  temp += `
        <div class="row">
        <div class="col-md-6"><input id="user-inp" class="form-control mb-2 bahs2 " placeholder="Search By Name">
        </div>
        <div class="col-md-6">
          <input class="form-control bahs2 " type="text"  id="user-inp"
            placeholder="search By First Letter...">
        </div>
        <button type="button" class="btn btn-secondary  POTON" id="search-btn" >Search</button>
        <i class = "fas fa-times"></i>
      </button>
      <div id="result"></div>
      </div>
      `;
  $("#searchInput").keyup((e) => {
    search(e.target.value);
  });
  $("#letter").keyup((e) => {
    getByLetter(e.target.value);
  });

  $("#letter").on("input", function () {
    if (this.value.length > 1) this.value = this.value.slice(0, 1);
  });
  document.getElementById("Row").innerHTML = temp;
});












function validation() {

  if (nameToached) {
      if (userNameValid()) {
          userName.classList.remove("is-invalid")
          userName.classList.add("is-valid")
          userNameAlert.classList.replace("d-block", "d-none")
          userNameAlert.classList.replace("d-block", "d-none")

      } else {
          userName.classList.replace("is-valid", "is-invalid")
          userNameAlert.classList.replace("d-none", "d-block")
      }
  }

  if (emailToached) {
      if (userEmailValid()) {
          userEmail.classList.remove("is-invalid")
          userEmail.classList.add("is-valid")
          userEmailAlert.classList.replace("d-block", "d-none")
          userEmailAlert.classList.replace("d-block", "d-none")
      } else {
          userEmail.classList.replace("is-valid", "is-invalid")
          userEmailAlert.classList.replace("d-none", "d-block")
      }
  }

  if (phoneToached) {
      if (userPhoneValid()) {
          userPhone.classList.remove("is-invalid")
          userPhone.classList.add("is-valid")
          userPhoneAlert.classList.replace("d-block", "d-none")
          userPhoneAlert.classList.replace("d-block", "d-none")
      } else {
          userPhone.classList.replace("is-valid", "is-invalid")
          userPhoneAlert.classList.replace("d-none", "d-block")
      }
  }

  if (ageToached) {
      if (userAgeValid()) {
          userAge.classList.remove("is-invalid")
          userAge.classList.add("is-valid")
          userAgeAlert.classList.replace("d-block", "d-none")
          userAgeAlert.classList.replace("d-block", "d-none")
      } else {
          userAge.classList.replace("is-valid", "is-invalid")
          userAgeAlert.classList.replace("d-none", "d-block")
      }
  }

  if (passwordToached) {
      if (userPasswordValid()) {
          userPassword.classList.remove("is-invalid")
          userPassword.classList.add("is-valid")
          userpasswordAlert.classList.replace("d-block", "d-none")
          userpasswordAlert.classList.replace("d-block", "d-none")
      } else {
          userPassword.classList.replace("is-valid", "is-invalid")
          userpasswordAlert.classList.replace("d-none", "d-block")
      }
  }

  if (repasswordToached) {
      if (userRePasswordValid()) {
          userRePassword.classList.remove("is-invalid")
          userRePassword.classList.add("is-valid")
          userRepasswordAlert.classList.replace("d-block", "d-none")
          userRepasswordAlert.classList.replace("d-block", "d-none")
      } else {
          userRePassword.classList.replace("is-valid", "is-invalid")
          userRepasswordAlert.classList.replace("d-none", "d-block")
      }
  }

  if(userNameValid() && userEmailValid() && userPhoneValid() && userAgeValid() && userPasswordValid() && userRePasswordValid()){
      document.getElementById("submitBtn").removeAttribute("disabled")
  }else{
      document.getElementById("submitBtn").setAttribute("disabled","true")
  }

}

function userNameValid() {
  return /^[a-zA-Z ]+$/.test(userName.value)
}

function userEmailValid() {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(userEmail.value)
}

function userPhoneValid() {
  return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(userPhone.value)
}

function userAgeValid() {
  return /^[1-9][0-9]?$|^100$/.test(userAge.value)
}

function userPasswordValid() {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(userPassword.value)
}

function userRePasswordValid() {
  return userPassword.value == userRePassword.value
}
