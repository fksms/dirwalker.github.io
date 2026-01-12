<script setup>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import MainView from './components/MainView.vue';

// DirWalkerアイコンの場所
const iconPath = import.meta.env.BASE_URL + 'DirWalker.png';
</script>

<template>
    <v-app>
        <v-app-bar color="grey-lighten-3" height="70">
            <Header :icon-path="iconPath"></Header>
        </v-app-bar>

        <v-main>
            <MainView :icon-path="iconPath"></MainView>
        </v-main>

        <v-footer color="grey-lighten-3" height="200">
            <Footer :icon-path="iconPath"></Footer>
        </v-footer>
    </v-app>
</template>

<style>
:root {
    /* フォントの指定 */
    font-family: Avenir, YuGothic, 'Yu Gothic', Futura, 'Century Gothic', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
}
</style>
