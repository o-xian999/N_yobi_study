var myBirthTime = new Date(1999, 9, 10, 8, 30);//誕生日をmyBirthTimeに代入
function updateParagraph(){
    var now = new Date();//現在の日時を所得し、nowに代入
    var seconds = (now.getTime() - myBirthTime.getTime()) / 1000;//.getTime()で1970年1月1日からのミリ秒取得
    document.getElementById('birth-time').innerText = '生まれてから' + seconds + '秒経過';//HTMLのid属性の要素にテキストで記述
}
setInterval(updateParagraph, 50);//指定された関数を50ミリ秒ごとに実行