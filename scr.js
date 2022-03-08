$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);

var my_present = $(".above-fold");
var canvas = $("#canvas");
var input_name = $('.input-name');
var input_item = $('.input-name__item')
var input_header = $(".input-name__header");
var input_span = $(".input-name__header > span");
var btn = $('.input-name__submit > span');

// setInterval(() => {
//     var style = window.getComputedStyle(canvas).getPropertyValue("background-color");
//     input_span.style.color = style;
//     input_header.style.backgroundColor = style;
// }, 1000)

btn.onclick = function(e) {
    var input = $('input[type="text"]');
    nameGirl = input.value;
    // input_item.classList.add('hide');
    input_name.remove();
    my_present.classList.remove("hide");


    if (nameGirl==='Lisa' || nameGirl==='lisa' || nameGirl==='LISA') {
        nameGirl='Lisa';
        giftImage = 'https://1.bp.blogspot.com/-1hdlNNCGIRc/YCtoXaSoH4I/AAAAAAAA7uI/mNPFykEu36ssyfqcDsbMFzGYkazZ0IhzQCLcBGAsYHQ/s0/Lisa%2B%252829%2529.jpg'

    }
    else if (nameGirl=='Huong'||nameGirl=='huong'||nameGirl=='HUONG') {
        nameGirl ='Hương'
        giftImage = 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/273428592_1608320092839876_7259938086471122840_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=01WEnVsF52gAX-d1SAe&tn=XywZGRF9B7JWkw_i&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT_zPUh27JRXxbcG2SjGWmmJLdU3Z2irRUb4IcnXPbDB9A&oe=622BFC58'
        titleCard = `Tặng ${nameGirl}`;
        contentCard = `Chúc bạn ${nameGirl} 8/3, tay ôm nhiều hoa, giỏ đựng đầy quà, khỏi lo việc nhà, được đi chơi xa, ăn uống thả ga, tiền không phải trả, nói năng rôm rả, cười tươi như hoa.`;
    }
    else if (nameGirl=='Thoa'||nameGirl=='thoa'||nameGirl=='THOA') {
        nameGirl ='Thoa'
        giftImage = 'https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.6435-9/191208201_856421258296730_6534738395514294054_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_ohc=pZNe3a_Zkw8AX8mIUl3&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT9wXCFxTinrZArFXl6Youxg6AYHuPRKSt4vEJiMVSaUsg&oe=624B2108'
        titleCard = `Tặng ${nameGirl}`;
        contentCard = `Chúc bạn ${nameGirl} 8/3, tay ôm nhiều hoa, giỏ đựng đầy quà, khỏi lo việc nhà, được đi chơi xa, ăn uống thả ga, tiền không phải trả, nói năng rôm rả, cười tươi như hoa.`;
    }
    else {
        giftImage = 'https://jooinn.com/images/gift-67.jpg'
        titleCard = `Tặng ${nameGirl}`;
        contentCard = `Chúc bạn ${nameGirl} 8/3, tay ôm nhiều hoa, giỏ đựng đầy quà, khỏi lo việc nhà, được đi chơi xa, ăn uống thả ga, tiền không phải trả, nói năng rôm rả, cười tươi như hoa.`;
    }



    var to = nameGirl;
    var gift_url = giftUrl;
    var gift_image_url = giftImage || giftImageBase64;

    var nametag = document.getElementById("nametag");
    var present = document.getElementById("present");
    var presentImage = document.getElementById("present-image");

    function init() {
    var graphElem = document.querySelector('.present-box > .side.top .to');
    graphElem.setAttribute('data-before', eventName);
    document.querySelector('#card .title-card').innerHTML = `💘${titleCard}💘`;
    document.querySelector('#card .content-card').innerHTML = `${contentCard}`;
    document.querySelector('#card .honey').setAttribute('src', `${giftImage}`);

    var _giftLink, 
        _giftImg;
    
    if (gift_url) {
        _giftLink = document.createElement("a");
        _giftLink.href = gift_url;
        _giftLink.target = "_blank";
        presentImage.appendChild(_giftLink);
    }
    
    if (gift_image_url) {
        _giftImg = document.createElement("img");
        _giftImg.src = gift_image_url;
        if(_giftLink) {
        _giftLink.appendChild(_giftImg);
        } else {
        presentImage.appendChild(_giftImg);
        }
    }
        
    present.addEventListener("click", function(e){
        present.classList.toggle("open");
        document.getElementById('card').classList.add('card-show');
    }, false);
    
    
    
    nametag.innerText = to;
    }

    init();
}

