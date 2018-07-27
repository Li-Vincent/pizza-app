<template>
    <div class="card text-dark bg-light mb-3">
        <div class="card-header">联系我们</div>
        <div class="card-body">
            <div class="card-title">联系我们</div>
            <p class="card-text">如果您有什么意见或建议，请联系我们。</p>
            <router-link :to="{name:'phone'}">电话</router-link>
            <router-link :to="{name:'person'}">联系人</router-link>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>
