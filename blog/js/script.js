const textarea_JS = 

document.querySelector('textarea[name="comment"]');

const countView =

document.getElementById('countView');

textarea_JS.addEventListener('input', () => {
    const len = textarea_JS.value.length;
    countView.textContent = `現在：${len}文字`;
});

// ===== いいね1 =====
const btn1 = document.getElementById("likeBtn1");
const num1 = document.getElementById("likeCount1");

btn1.addEventListener("click", () => {
    btn1.classList.add("liked");
    let count = Number(num1.textContent);
    count++;
    num1.textContent = count;
});

// ===== いいね2 =====
const btn2 = document.getElementById("likeBtn2");
const num2 = document.getElementById("likeCount2");

btn2.addEventListener("click", () => {
    btn2.classList.add("liked");
    let count = Number(num2.textContent);
    count++;
    num2.textContent = count;
});

// ===== いいね3 =====
const btn3 = document.getElementById("likeBtn3");
const num3 = document.getElementById("likeCount3");

btn3.addEventListener("click", () => {
    btn3.classList.add("liked");
    let count = Number(num3.textContent);
    count++;
    num3.textContent = count;
});

// ===== いいね4 =====
const btn4 = document.getElementById("likeBtn4");
const num4 = document.getElementById("likeCount4");

btn4.addEventListener("click", () => {
    btn4.classList.add("liked");
    let count = Number(num4.textContent);
    count++;
    num4.textContent = count;
});
