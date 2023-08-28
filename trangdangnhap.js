class Account {

    username;
    password;

    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    getUsername() {
        return this.username;
    }

    getPassword() {
        return this.password;
    }

    setUsername(username) {
        this.username = username;
    }

    setPassword(password) {
        this.password = password;
    }

}

let account = new Account("minh", "123");
let accountArr = [account]
console.log(accountArr);

// Hàm đăng nhập ==>
function loginAccount() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let isValid = false;
    for (let i = 0; i < accountArr.length; i++) {
        if (accountArr[i].getUsername() === username && accountArr[i].getPassword() === password) {
            isValid = true;
            break;
        }
    }
    if (isValid) {
        showLogIn();
    } else {
        document.getElementById("result").innerHTML = "Tên hoặc mật khẩu bạn nhập không đúng!!";
    }
}


// Hàm hiện thị trang đăng ký ==>
function showFormRegister() {
    document.getElementById("formLogin").style.display = 'none';
    document.getElementById("formRegister").style.display = 'block';
}


// Hàm hiện thị trang đăng nhập
function showFormLogin() {
    document.getElementById("formLogin").style.display = 'block';
    document.getElementById("formRegister").style.display = 'none';
    document.getElementById("home").style.display = 'none';
}

// Hàm đăng ký ==>
function register() {
    let newUsername = document.getElementById("newName").value;
    let newPassword = document.getElementById("newPassword").value;
    let account1 = new Account(newUsername, newPassword);
    let name = true;
    for (let i = 0; i < accountArr.length; i++) {
        if (account1.username === accountArr[i].username || account1.username === ""
            || account1.password === "") {
            name = false;
        }
    }
    if (name) {
        alert("Đăng ký thành công!");
        accountArr.push(account1);
        showFormLogin()
    } else {
        document.getElementById("result1").innerHTML = "Tên đã có hoặc bạn nhập sai!";
    }
    console.log("account", accountArr);
}


// Hàm đăng xuất ==>
function logOut() {
    document.getElementById("story-manager").classList.add("hide");
    document.getElementById("out").classList.add("hide");
    document.getElementById("longin").classList.remove("hide");
    document.getElementById("mystories").style.display = 'none';
    document.getElementById("action").style.display = 'none';
    showHome();
}
// Hàm hiện thị sau khi đã đăng nhập
function showLogIn() {
    document.getElementById("story-manager").classList.remove("hide");
    document.getElementById("out").classList.remove("hide");
    document.getElementById("longin").classList.add("hide");
    document.getElementById("formLogin").style.display = 'none';
    document.getElementById("home").style.display = 'block';
    // document.getElementById("mystories").style.display = 'block';
}


