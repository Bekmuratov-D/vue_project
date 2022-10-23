<template>
    <v-container
        max-width="1400"
    >
        <v-app-bar>
            <v-app-bar-title><router-link to="/">Vue3</router-link></v-app-bar-title>
            <v-spacer/>

            <v-responsive
                class="mx-auto"
                max-width="344"
            >
                <v-text-field
                label="Search"
                hide-details="auto"
                ></v-text-field>
            </v-responsive>
            <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-spacer/>
            <v-btn>
                <router-link to="/">Главная</router-link>
            </v-btn>
            <v-btn>
                <router-link to="/news">Новости</router-link>
            </v-btn>
            <v-btn>
                <router-link to="/photo">Галерея</router-link>
            </v-btn>
            <v-btn class="login__btn" >
                <router-link to="/login">Войти</router-link>
            </v-btn>
            <v-btn>
                <router-link to="/user">
                    Профиль
                </router-link>
            </v-btn>
        </v-app-bar>
    </v-container>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.login__btn{
    background-color: rgb(79, 151, 81);
    color: white;
}
</style>