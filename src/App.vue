<script setup>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import MainView from './components/MainView.vue';
</script>

<template>
    <v-app>
        <v-app-bar color="grey-lighten-3" height="70">
            <Header></Header>
        </v-app-bar>

        <v-main>
            <MainView></MainView>
        </v-main>

        <v-footer color="grey-lighten-3" height="200">
            <Footer></Footer>
        </v-footer>
    </v-app>
</template>

<style>
:root {
    /* フォントの指定 */
    font-family: Avenir, YuGothic, 'Yu Gothic', Futura, 'Century Gothic', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
}
</style>
