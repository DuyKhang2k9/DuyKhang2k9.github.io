const starfield = document.querySelector('.starfield');
const numStars = 100; // số lượng đốm sáng
const stars = [];

// Tạo ngôi sao ngẫu nhiên vị trí
for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = Math.random() * window.innerHeight + 'px';
  star.style.left = Math.random() * window.innerWidth + 'px';
  starfield.appendChild(star);

  stars.push({
    el: star,
    x: parseFloat(star.style.left),
    y: parseFloat(star.style.top)
  });
}

// Vị trí chuột
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

// Nghe sự kiện di chuyển chuột
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Cập nhật vị trí sao
function animate() {
  stars.forEach(star => {
    // hướng dịch chuyển dựa vào vị trí chuột so với tâm màn hình
    const dx = (mouseX - window.innerWidth / 2) * 0.001;
    const dy = (mouseY - window.innerHeight / 2) * 0.001;

    star.x += dx * (Math.random() * 5);
    star.y += dy * (Math.random() * 5);

    // giữ sao trong khung màn hình
    if (star.x < 0) star.x = window.innerWidth;
    if (star.x > window.innerWidth) star.x = 0;
    if (star.y < 0) star.y = window.innerHeight;
    if (star.y > window.innerHeight) star.y = 0;

    star.el.style.left = star.x + 'px';
    star.el.style.top = star.y + 'px';
  });

  requestAnimationFrame(animate);
}

animate();




