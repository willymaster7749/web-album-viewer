
let album = ['https://img.ruten.com.tw/s1/b/46/3b/22032040219195_190.jpg',
             'https://img.ruten.com.tw/s1/4/5b/bf/22027792253887_163.jpg',
             'https://www.hd-mv.com/wp-content/uploads/2018/12/%E5%85%AB%E5%BA%A6%E7%A9%BA%E9%97%B4.jpg',
             'https://getimg.link/images/2020/08/25/6858ce44-611b-29aa-daa2-a0909cff5ce7.jpg',
             'https://i2.kknews.cc/SIG=3tht3ae/19170005393pon951on1.jpg',
             'https://i.pinimg.com/originals/a5/6c/fd/a56cfda22eea5eecea5bbc8b3ffed68f.jpg',
             'https://www.hd-mv.com/wp-content/uploads/2019/07/%E4%BE%9D%E7%84%B6%E8%8C%83%E7%89%B9%E8%A5%BF.jpg',
             'https://d3rwyinxzcqr6y.cloudfront.net/Assets/93/361/L_p0130836193.jpg',
             'https://i.imgur.com/QmeBai9.jpg',
             'https://i.imgur.com/a2id1t1.jpg',
             'https://www.hd-mv.com/wp-content/uploads/2020/09/%E6%83%8A%E5%8F%B9%E5%8F%B7.jpg',
             'https://static.qobuz.com/images/covers/99/36/0886443793699_600.jpg',
             'https://s1.ax1x.com/2020/07/31/aMoi4K.jpg',
             'https://www.music-bazaar.mobi/album-images/vol31/1131/1131133/2997761-big/Jay-Chou-s-Bedtime-Stories-cover.jpg'
            ]

// preprocessing
let pic = document.getElementById('display');
pic.setAttribute('src', album[0]);

let source = document.getElementsByTagName('a');
source[0].setAttribute('href', album[0]);
source[0].innerHTML = album[0];

let count = 0;
let length = album.length;
let left_button = document.getElementById('left_button');
let right_button = document.getElementById('right_button');

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
        break;
        }
    }
}

let button_available = () => {
    if(count === 0){
        left_button.classList.add('disabled');
    } else if (count === length - 1){
        right_button.classList.add('disabled');
    } else {
        left_button.classList.remove('disabled');
        right_button.classList.remove('disabled');
    }
}

let click_left = () => {
    if(count > 0){
        count--;
        pic.setAttribute('src', album[count]);
        source[0].setAttribute('href', album[count]);
        source[0].innerHTML = album[count];
        button_available();
    }
}

let click_right = () => {
    if(count < length - 1){
        count++;
        pic.setAttribute('src', album[count]);
        source[0].setAttribute('href', album[count]);
        source[0].innerHTML = album[count];
        button_available();
    }
}

button_available();
left_button.addEventListener('click', click_left);
right_button.addEventListener('click', click_right);


