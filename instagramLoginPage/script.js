const container = document.querySelector('.container');
const LOrSBtn = document.querySelector('.loginOrSignup')
let loginBoolean = true
const displayFunction = () => {
    loginBoolean ? LOrSBtn.innerHTML = `Sign up` : LOrSBtn.innerHTML = `Login`
    loginBoolean ? container.innerHTML += `<div id="login">
    <img id="insta" src = "https://fontmeme.com/images/instagram-new-logo.png"  alt="">
    <div id="detailBox">
    <input id="user" type="email" placeholder="phone number,username or email">
    <input id="user" type="password" placeholder="password">
    <button class="BTN">Login</button>
    <div id="line">------------ or ------------</div>
    <div id="facebook"> <img id="fb1" src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19757.png" alt="">Login with Facebook</div>
    <div id="pwd">Forgotten your password?</div>
    </div>
    <div id="Account">Don't have an account?</div>
    <div id="getApp">Get the app</div>
    <div id="App"> <img id="app" src="https://digitopoly.files.wordpress.com/2016/06/app-store-logo.png" alt=""> 
    <img id="app1" src="https://freepngimg.com/download/android/67006-app-play-google-android-store-free-clipart-hd.png" alt=""> </div>
    </div>`: container.innerHTML += ` <div id="login">
    <img id="insta" src="https://fontmeme.com/images/instagram-new-logo.png"  alt="">
    <div id="facebook"> <img id="fb1" src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19757.png" alt="">Login with Facebook</div>
    <div id="line1">------------ or ------------</div>
    <div id="detailBox">
    <input id="user" type="email" placeholder="Mobile Number or Email">
    <input id="user" type="text" placeholder="Full Name">
    <input id="user" type="text" placeholder="Username">
    <input id="user" type="password" placeholder="password">
    <input id="user" type="password" placeholder="confirm password">
    <button class="BTN">Sign up</button>
    </div>
    <p>By signing up, you agree to  <br> Terms, Data Policy and Cookies <br> Policy</p>
    </div>`
    }
displayFunction()
LOrSBtn.addEventListener('click', () => {
    loginBoolean = !loginBoolean
    container.innerHTML=''
    displayFunction()
})