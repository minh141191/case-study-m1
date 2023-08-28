class FormStory {
    img;
    name;

    author;
    constructor( img, name, author) {
        this.img = img;
        this.name = name;
        this.author = author;
    }

    getImg() {
        return this.img;
    }

    getName() {
        return this.name;
    }

    getAuthor() {
        return this.author;
    }

    setImg(img) {
        this.img = img;
    }

    setName(name) {
        this.name = name;
    }

    setAuthor(author) {
        this.author = author;
    }
}

let story = new FormStory("1.jpg", "Đấu La Đại Lục", "Đường Gia Tam Thiếu");
let story1 = new FormStory("images.jpg", "Naruto", "Kishimoto Masashi");
let story2 = new FormStory("images (1).jpg", "One Piece", "Oda Eiichiro");
let story3 = new FormStory("dptk.jpg", "Đấu Phá Thương Khung", "Thiên Tàm Thổ Đậu");
let story4 = new FormStory("pntt.jpg", "Phàm Nhân Tu Tiên", "Vong Ngữ");
let theGioiHoanMy = new FormStory("https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/2022/01/The-Gioi-Hoan-My.jpg?resize=300%2C421&ssl=1",
    "Thế Giới Hoàn Mỹ", "Thần Đông");
let voThanChuaTe = new FormStory("https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/2022/01/Vo-Than-Chua-Te.jpg?resize=300%2C421&ssl=1",
     "Võ Thần Chúa Tể", "Ám Ma Sư")
let thoPheTinhKhong = new FormStory("https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/2022/01/Thon-Phe-Tinh-Khong.jpg?resize=300%2C421&ssl=1",
    "Thôn Phệ Tinh Không", "Ngã Cật Tây Hồng Thị");
let vuCanhKy = new FormStory("https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/2022/01/Vu-Canh-Ky-4.jpg?resize=300%2C421&ssl=1",
     "Vũ Canh Kỷ", "Trịnh Kiện Hoà - Đặng Chí Huy");
let vanGioiDocTon = new FormStory("https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/Van-Gioi-Doc-Ton-2.jpg?resize=300%2C421&ssl=1",
    "Vạn Giới Độc Tôn", "Bốn Mắt Tú Tài");
let storyArr = [story, story1, story2, story3, story4, theGioiHoanMy, voThanChuaTe, thoPheTinhKhong, vuCanhKy, vanGioiDocTon];
console.log(storyArr);
let indexEdit = -1;


// Danh sách truyện ngoài trang chủ ==>
function disPlay() {
    let data = "<div class='grid-stories'>";
    for (let i = 0; i <storyArr.length; i++) {
        data += "<div class='story-grid'><image src='" + storyArr[i].img + "'</div>";
        data += "<div class='info'>"
        data += "<div class='story-name'>" + storyArr[i].name + "</div>";
        data+= "</div>";
        data += "</div>"
    }
    document.getElementById("showstory").innerHTML = data;

}
disPlay();


// Danh sách truyện sau khi đăng nhập ==>
function listStory(storyResultList) {
    let data = "<table class='table-grid'>";
    data += "<tr><th style='font-size: 30px' colspan='5'>Danh sách truyên</th></tr>";
    data += "<tr>";
    data += "<th>STT</th>";
    data += "<th>Ảnh</th>";
    data += "<th>Tên Truyện</th>";
    data += "<th>Tác Giả</th>";
    data += "<th>Tùy Chọn</th>";
    data += "</tr>";

    for (let i = 0; i < storyResultList.length; i++) {
        data += "<tr>";
        data += "<td>" + (i + 1) + "</td>";
        data += "<td class='story-list'><image src='" + storyResultList[i].img + "'</td>";
        data += "<td>" + storyResultList[i].name + "</td>";
        data += "<td>" + storyResultList[i].author + "</td>";
        data += "<td>"
        data += "<button class='btn-edit' onclick='editStory(" + i + ")'>Chỉnh Sửa</button>"
        data += "<button class='bnt-delete' onclick='deleteStory(" + i + ")'>Xóa</button>"
        data += "</td>";
        data += "</tr>";
    }
    data += "</table>";
    document.getElementById("listsotory").innerHTML = data;
}
listStory(storyArr);

// Hàm cập nhật truyện ==>
function updateStory() {
    let img = document.getElementById("img").value;
    let name = document.getElementById("name").value;
    let author = document.getElementById("author").value;
    storyArr[indexEdit].setImg(img);
    storyArr[indexEdit].setName(name);
    storyArr[indexEdit].setName(author);
    disPlay();
    listStory(storyArr);
    showListStory();
    clearFormStory();


}

// Hàm chỉnh sửa truyện tại vị trí cụ thể ==>
function editStory(index) {
    indexEdit = index;
    document.getElementById("img").value = storyArr[index].getImg();
    document.getElementById("name").value = storyArr[index].getName();
    document.getElementById("author").value = storyArr[index].getAuthor();
    showEdit();

}

// Hàm xóa giá trị tại chỗ mình nhập chỉnh sửa sau khi thêm hay cập nhật truyện ==>
function clearFormStory() {
    document.getElementById("img").value = '';
    document.getElementById("name").value = '';
    document.getElementById("author").value = '';
    document.getElementById("search").value = '';
}

// Hàm xóa truyện ==>
function deleteStory(index) {
    if(confirm("Xóa?")) {
        storyArr.splice(index, 1);
    }
    disPlay();
    listStory(storyArr)
}

// Hàm thêm truyện ==>
function addStory() {
    let img = document.getElementById("img").value;
    let name = document.getElementById("name").value;
    let author = document.getElementById("author").value;
    let story = new FormStory(img, name, author);
    storyArr.push(story);
    disPlay();
    listStory(storyArr);
    showListStory();
    clearFormStory();
}

// Hàm tìm kiếm truyện sau khi đăng nhập ==>
function searchStory() {
    let valueSearchInput = document.getElementById("search").value;
    let storySearch = storyArr.filter(value => {
        return value.name.toLowerCase().includes(valueSearchInput.toLowerCase() )
    })
    console.log(storySearch);
    listStory(storySearch);
    // showListStory();
    disPlay();
    clearFormStory()
}


// Hiện thị trang chủ ==>
function showHome() {
    document.getElementById("formLogin").style.display = 'none';
    document.getElementById("home").style.display = 'block';
    document.getElementById("mystories").style.display = 'none';
    document.getElementById("formRegister").style.display = 'none';
    document.getElementById("action").style.display = 'none';

}

// Hiện thị danh sách truyện ==>
function showListStory() {
    document.getElementById("formLogin").style.display = 'none';
    document.getElementById("formRegister").style.display = 'none';
    document.getElementById("home").style.display = 'none';
    document.getElementById("mystories").style.display = 'block';
    document.getElementById("action").style.display = 'none';

}
function showEdit() {
    document.getElementById("formLogin").style.display = 'none';
    document.getElementById("formRegister").style.display = 'none';
    document.getElementById("home").style.display = 'none';
    document.getElementById("mystories").style.display = 'none';
    document.getElementById("action").style.display = 'block';
}

function hidenInformation() {
    document.getElementById("action").style.display = 'none';
    clearFormStory();
}
