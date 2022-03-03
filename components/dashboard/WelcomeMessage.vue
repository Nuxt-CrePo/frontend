<template>
     <div class="welcomme__message">
            <h1>Hello {{user}}</h1>
            <p>
                Welcome Back !
            </p>
        </div>
</template>

<script>
    export default {
        props: ['user']
    }
</script>

<style lang="scss" scoped>
.welcomme__message {
    margin: 30px 0px;
    h1 {
        font-weight: 500;
        font-size: 30px;
    }
    p {
        font-size: 12px;
        color: lightgrey;
        margin-top: 10px;
    }
}
</style>