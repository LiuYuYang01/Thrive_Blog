<script setup lang="ts">
import { onMounted } from 'vue';
import gsap from 'gsap'

onMounted(() => {
    const photobox = {
        container: document.querySelector(".photos"),
        img_data: [],
        container_width: 0,
        container_height: 0,
        photo_width: 0,
        photo_height: 0,
        if_movable: false,
        mouse_x: 0,
        mouse_y: 0,
        standard_width: 1440,
        scale_nums: 1,
        init() {
            this.resize();
            window.addEventListener("resize", () => {
                this.resize();
            });
            this.container.addEventListener("mousedown", () => {
                this.if_movable = true;
                this.mouse_x = event.clientX;
                this.mouse_y = event.clientY;
            });
            this.container.addEventListener("mouseup", () => {
                this.if_movable = false;
            });
            this.container.addEventListener("mouseleave", () => {
                this.if_movable = false;
            });
            this.container.addEventListener("mousemove", () => {
                this.move(event.clientX, event.clientY);
            });
        },
        resize() {
            let imgs = [...document.querySelectorAll(".photos_line_photo")];

            this.container_width = this.container.offsetWidth;
            this.container_height = this.container.offsetHeight;
            this.photo_width = imgs[0].offsetWidth;
            this.photo_height = imgs[0].offsetHeight;
            this.scale_nums = document.body.offsetWidth / this.standard_width;
            this.container.style.transform = `scale(${this.scale_nums})`;
            gsap.to(imgs, {
                transform: `translate(0,0)`,
                duration: 0,
                ease: 'power4.out'
            });
            this.img_data = [];
            imgs.forEach(img => {
                this.img_data.push({
                    node: img,
                    x: img.offsetLeft,
                    y: img.offsetTop,
                    mov_x: 0,
                    mov_y: 0,
                    ani: 0
                });
            });
        },
        move(x, y) {
            if (!this.if_movable) return 0;
            let distance_x = (x - this.mouse_x) / this.scale_nums;
            let distance_y = (y - this.mouse_y) / this.scale_nums;
            this.img_data.forEach((img) => {
                let duration = 1;
                img.mov_x += distance_x;
                if (img.x + img.mov_x > this.container_width) {
                    img.mov_x -= this.container_width;
                    duration = 0;
                }
                if (img.x + img.mov_x < -this.photo_width) {
                    img.mov_x += this.container_width;
                    duration = 0;
                }
                img.mov_y += distance_y;
                if (img.y + img.mov_y > this.container_height) {
                    img.mov_y -= this.container_height;
                    duration = 0;
                }
                if (img.y + img.mov_y < -this.photo_height) {
                    img.mov_y += this.container_height;
                    duration = 0;
                }
                if (img.ani) img.ani.kill();
                img.ani = gsap.to(img.node, {
                    transform: `translate(${img.mov_x}px,${img.mov_y}px)`,
                    duration: duration,
                    ease: 'power4.out'
                });
            });
            this.mouse_x = x;
            this.mouse_y = y;
        }
    };

    photobox.init();
})
</script>

<template>
    <div class="container">
        <div class="photos">
            <div class="photos_line">
                <div class="photos_line_photo">
                    <img src="../assets/photos/photo (1).png" />
                </div>
                <div class="photos_line_photo">
                    <img src="../assets/photos/photo (2).png" />
                </div>
                <div class="photos_line_photo">
                    <img src="../assets/photos/photo (3).png" />
                </div>
                <div class="photos_line_photo">
                    <img src="../assets/photos/photo (4).png" />
                </div>
                <div class="photos_line_photo">
                    <img src="../assets/photos/photo (5).png" />
                </div>
                <div class="photos_line_photo">
                    <img src="../assets/photos/photo (6).png" />
                </div>
                <div class="photos_line_photo">
                    <img src="../assets/photos/photo (7).png" />
                </div>
            </div>

            <div class="photos_line">
                <div class="photos_line_photo">
                    <img src="../assets/photos/photo (8).png" />
                </div>
                <div class="photos_line_photo">
                    <img src="../assets/photos/photo (9).png" />
                </div>
                <div class="photos_line_photo">
                    <img src="../assets/photos/photo (10).png" />
                </div>
                <div class="photos_line_photo">
                    <img src="../assets/photos/photo (11).png" />
                </div>
                <div class="photos_line_photo">
                    <img src="../assets/photos/photo (12).png" />
                </div>
                <div class="photos_line_photo">
                    <img src="../assets/photos/photo (13).png" />
                </div>
                <div class="photos_line_photo">
                    <img src="../assets/photos/photo (14).png" />
                </div>
            </div>

            <div class="photos_line">
                <div class="photos_line_photo">
                    <img src="../assets/photos/photo (15).png" />
                </div>
                <div class="photos_line_photo">
                    <img src="../assets/photos/photo (16).png" />
                </div>
                <div class="photos_line_photo">
                    <img src="../assets/photos/photo (17).png" />
                </div>
                <div class="photos_line_photo">
                    <img src="../assets/photos/photo (18).png" />
                </div>
                <div class="photos_line_photo">
                    <img src="../assets/photos/photo (19).png" />
                </div>
                <div class="photos_line_photo">
                    <img src="../assets/photos/photo (20).png" />
                </div>
                <div class="photos_line_photo">
                    <img src="../assets/photos/photo (21).png" />
                </div>
            </div>
            
            <div class="photos_line">
                <div class="photos_line_photo">
                    <img src="../assets/photos/photo (22).png" />
                </div>
                <div class="photos_line_photo">
                    <img src="../assets/photos/photo (23).png" />
                </div>
                <div class="photos_line_photo">
                    <img src="../assets/photos/photo (24).png" />
                </div>
                <div class="photos_line_photo">
                    <img src="../assets/photos/photo (25).png" />
                </div>
                <div class="photos_line_photo">
                    <img src="../assets/photos/photo (26).png" />
                </div>
                <div class="photos_line_photo">
                    <img src="../assets/photos/photo (27).png" />
                </div>
                <div class="photos_line_photo">
                    <img src="../assets/photos/photo (28).png" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
* {
    padding: 0;
    margin: 0;
}

img {
    pointer-events: none;
    user-select: none;
}

div {
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
}

.container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #171717;
    overflow: hidden;
}

.photos {
    position: absolute;
    flex-direction: column;
    overflow: hidden;
    cursor: pointer;
}

.photos_line {
    font-size: 1px;
    height: 342em;
    margin-bottom: 48em;
    flex-shrink: 0;
}

.photos_line_photo {
    font-size: 1px;
    width: 234em;
    height: 100%;
    margin-right: 36em;
    border-radius: 15em;
    background-color: #17f700;
    overflow: hidden;
    flex-shrink: 0;
}

.photos_line_photo img {
    height: 100%;
    transition: 0.3s ease;
}

.photos_line_photo:hover img {
    transform: scale(1.2);
}

@media screen and (max-aspect-ratio: 1.5/1) {

    .photos_line,
    .photos_line_photo {
        font-size: 2px;
    }
}

@media screen and (max-aspect-ratio: 0.8/1) {

    .photos_line,
    .photos_line_photo {
        font-size: 2.8px;
    }
}
</style>
