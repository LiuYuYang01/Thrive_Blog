import { ref, onMounted, onDeactivated } from "vue"

export default () => {
    const top = ref<number>(0)

    const scroll = () => {
        top.value = document.documentElement.scrollTop
    }

    onMounted(() => {
        window.addEventListener("scroll", scroll)
    })

    onDeactivated(() => {
        window.removeEventListener('scroll', scroll)
    })

    return top
}