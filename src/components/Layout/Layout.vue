<script setup lang='ts'>
// 引入五彩纸屑
import confetti from 'canvas-confetti';

// 引入五彩纸屑：Fireworks 效果
var duration = 3 * 1000;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min: number, max: number) {

  return Math.random() * (max - min) + min;
}

var interval: any = setInterval(function () {
  var timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  var particleCount = 50 * (timeLeft / duration);

  // 由于粒子下降，因此开始比随机高一点
  confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
  confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
}, 250);

</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style scoped></style>