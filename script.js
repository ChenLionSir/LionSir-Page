
// 定义一个“魔法”函数，用于切换打招呼的文字
//获取当前的小时数（0-23）
var hour = new Date().getHours();
//找到那个我想修改的HTML元素（根据身份证号 id）
var greetingElement = document.getElementById('greeting-text');
//开始判断逻辑（if else）
if (hour < 12) {
  //如果还没有到12点
  greetingElement.innerText = "早上好！又是充满希望的一天☀️"
} else if (hour < 18) {
  //如果不到18点（也就是下午）
  greetingElement.innerText = "下午好！这是最容易犯困的时候，起来活动活动吧！☕"

} else {
  //剩下的情况也就是晚上
  greetingElement.innerText = "晚上好！大狮陪你一起写代码！🦁"
}
//第二部分：新增实时时钟逻辑
//1.定义一个任务，专门用来显示当前时间
function showTime() {
  var now = new Date();//拿现在完整时间
  //toLocaleTimeString 是个偷懒神技，它会把时间自动变成“20：45：12“这种格式
  var timeString = now.toLocaleTimeString();
  //把时间放在id=”clock“那个盒子里
  document.getElementById("clock").innerText = timeString;
}
//2.只有定义任务还不行，要设定定时器
//语法：setInterval（任务名字，毫秒数）
//1000ms =1s
setInterval(showTime, 1000);
//3.为了防止刚打开网页那一秒是空的，我们先手动运行一次
showTime();
// --- 👇 第三部分：黑白模式切换 👇 ---

// 1. 找到开关按钮
var toggleBtn = document.getElementById("theme-toggle");

// 2. 监听点击事件
toggleBtn.addEventListener("click", function () {
  // 3. 每次点击，给 body 贴上或撕掉 "dark-mode" 标签
  document.body.classList.toggle("dark-mode");

  // (选做) 可以在控制台看看有没有成功
  console.log("切换模式啦！");
});