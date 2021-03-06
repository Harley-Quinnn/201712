var timeBox = document.getElementById('timeBox');

function computed() {
    var nowTime = new Date(),
        targetTime = new Date('2017/10/22 16:43:00');
    var spanTime = targetTime - nowTime;//->获取的结果是两个时间之间的毫秒差

    //=>已经到达考试的时间：此时我们可以提示开始考试
    if (spanTime <= 0) {
        timeBox.innerHTML = '开始考试';
        window.clearInterval(timer);
        return;
    }

    //=>还没有到达考试的时间：在总毫秒差中计算出还有多少小时、分钟、秒
    var hour = Math.floor(spanTime / (1000 * 60 * 60));
    spanTime -= hour * 60 * 60 * 1000;//->把小时占据的毫秒去除掉,剩下的值中计算还有多少分钟
    var minute = Math.floor(spanTime / (1000 * 60));
    spanTime -= minute * 60 * 1000;
    var second = Math.floor(spanTime / 1000);

    //=>不足十位补零
    hour < 10 ? hour = '0' + hour : null;
    minute < 10 ? minute = '0' + minute : null;
    second < 10 ? second = '0' + second : null;

    timeBox.innerHTML = hour + ':' + minute + ':' + second;
}

computed();


//=>以后每隔1S中都重新的执行computed
var timer = window.setInterval(computed, 1000);