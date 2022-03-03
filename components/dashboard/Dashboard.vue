<template>
    <div class="dashboard__wrapper">
            <div class="sidebar__left">
                <SidebarLeft/>
            </div>
            <div class="dashboard__content">
                <main>
                    <slot/>
                    <SearchBar/>
                    <WelcomeMessage user="kevlin"/>

                </main>
            </div>
            <div class="idebar__right">
                <SidebarRight/>
            </div>
        </div>
</template>

<script>
import SearchBar from './SearchBar.vue';
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";
import WelcomeMessage from './WelcomeMessage.vue';
    export default {
         components: { SidebarLeft, SidebarRight, WelcomeMessage, SearchBar }
    }
</script>

<style lang="scss" scoped>
    .dashboard__wrapper {
    display: flex;
    justify-content: space-between;
    .sidebar {
        &__left {
            width: 15%;
        }
        &__right {
            width: 15%;
        }
    }
    .dashboard__content {
        width: 70%;
        padding: 20px;
    }
}
</style>