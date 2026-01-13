
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
// DAY12弹窗逻辑
// 1.获取三个关键元素
var modal = document.getElementById('my-modal');
var btn = document.getElementById('contact-btn');
var closeSpan = document.querySelector('.close-btn');//找那个叉叉
// 2.点击按钮-》打开弹窗
btn.addEventListener('click', function () {
  modal.style.display = 'flex';//把display：none改成flex，它就出来了！
});
// 3.点击叉叉-》关闭弹窗
closeSpan.addEventListener('click', function () {
  modal.style.display = 'none';//把display：flex改成none，它就隐藏起来了！
});
//4.高级功能！  点击黑色背景也要关闭弹窗
window.addEventListener('click', function (event) {
  //如果点击的是弹窗本身（而不是里面的叉叉）
  if (event.target == modal) {
    modal.style.display = 'none';//就关闭弹窗
  }

})
var images = ['p1.png', 'p2.png', 'p3.png'];
var currentIndex = 0;
var imgElement = document.getElementById('magic-image');
var prevBtn = document.getElementById('prev-btn');
var nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click', function () {
  currentIndex = currentIndex + 1;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  imgElement.src = images[currentIndex];
  console.log(currentIndex);
})
// --- 给“上一张”按钮装脑子 ---
prevBtn.addEventListener("click", function () {

  // 1. 编号减 1 (倒退)
  currentIndex = currentIndex - 1;

  // 2. 【关键逻辑】如果减过头了 (变成 -1 了)
  if (currentIndex < 0) {
    // 就跳到最后一张 (数组长度减 1，也就是 3-1=2)
    currentIndex = images.length - 1;
  }

  // 3. 更新图片 (跟下一张的逻辑一样)
  imgElement.src = images[currentIndex];

  // (可选) 打印看看
  console.log("当前播放第：" + currentIndex + " 张");
});