<template>
    <div>
        <button class="btn" @click.prevent="btnFunction">
            {{btnTitle}}
        </button>
    </div>
</template>

<script>
    export default {
        name:'Button',
        props: {
            btnTitle: String,
            btnFunction: Function
        }
    }
</script>

<style lang="scss" scoped>
.btn {
    color: grey;
    border: solid 1px grey;
    padding: 1%;

    &:hover{
        color: white;
        border: solid 1px white;
    }
}
</style>