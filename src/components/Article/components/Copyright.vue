<script setup lang="ts">
// 引入用户信息
import useUserStore from '@/stores/Author'

const store = useUserStore()
const { authorInfo } = storeToRefs(store)

store.getAuthor()
</script>

<template>
    <div class="Copyright">
        <p>作者：{{ authorInfo.name }}</p>
        <p>版权：此文章版权归 {{ authorInfo.name }} 所有，如有转载，请注明出处!</p>
    </div>
</template>

<style scoped lang="scss">
.Copyright {
    padding: 10px;
    border-left: 3px solid #03a9f4;
    background-color: #ecf7fe;
    border-radius: $round;
    font-size: 14px;
}
</style>
