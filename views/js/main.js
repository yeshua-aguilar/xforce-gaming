 let log_ingre = document.getElementById("log_ingre");


log_ingre.addEventListener('click', (btn_log) =>{
    btn_log.preventDefault();
    IniciarSesion();
});


const IniciarSesion = ()=> { 
    let it_correo =document.getElementById("it_correo").value;
    let it_pass =document.getElementById("it_pass").value;
   // alert('enviando..' + it_correo + it_pass);

    auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // clear the form
      signUpForm.reset();
      // close the modal
      $("#signupModal").modal("hide");
    });
};
// Logout
const logout = document.querySelector("#logout");

logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log("signup out");
  });
});

// SingIn
const signInForm = document.querySelector("#login-form");

signInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = signInForm["login-email"].value;
  const password = signInForm["login-password"].value;

  // Authenticate the User
  auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
    // clear the form
    signInForm.reset();
    // close the modal
    $("#signinModal").modal("hide");
  });
});

// Posts
const postList = document.querySelector(".posts");
const setupPosts = (data) => {
  if (data.length) {
    let html = "";
    data.forEach((doc) => {
      const post = doc.data();
      const li = `
      <li class="list-group-item list-group-item-action">
        <h5>${post.title}</h5>
        <p>${post.content}</p>
      </li>
    `;
      html += li;
    });
    postList.innerHTML = html;
  } else {
    postList.innerHTML = '<h4 class="text-white">Login to See Posts</h4>';
  }
};

// events
// list for auth state changes
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("signin");
    fs.collection("posts")
      .get()
      .then((snapshot) => {
        setupPosts(snapshot.docs);
        loginCheck(user);
      });
  } else {
    console.log("signout");
    setupPosts([]);
    loginCheck(user);
  }
})






