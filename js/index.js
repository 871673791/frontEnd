window.onload = function() {
    showTime();
    aToggle();
}

//定义时间函数
function showTime() {
    let show_time = document.querySelector(".showtime");
    let str,
        t = setTimeout(timer, 1000)

    function timer() {
        clearTimeout(t);
        let date = new Date();
        let year = date.getFullYear(),
            month = date.getMonth() + 1,
            d = date.getDate(),
            hour = date.getHours(),
            minute = date.getMinutes(),
            second = date.getSeconds();
        if (hour < 10) hour = "0" + hour;
        if (minute < 10) minute = "0" + minute;
        if (second < 10) second = "0" + second;
        str = `当前时间:${year}年${month}月${d}日 ${hour}:${minute}:${second}`;
        show_time.innerHTML = str;
        t = setTimeout(timer, 1000);
    }
}

//a 链接点击切换
function aToggle() {
    let links = document.querySelectorAll(".line h2 a");
    for (let i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            for (let j = 0; j < links.length; j++) {
                links[j].className = "";
            }
            this.className = 'active';
        }
    }
}