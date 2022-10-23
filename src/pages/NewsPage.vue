<template>
    <v-container>
        <h1>Новости</h1>
        <div class="news__items" > 
            <div class="news__item" v-for="n in news" :key="n.id" @click="$router.push(`/news/${n.id}`)">
                <v-card
                class="mx-auto"
                color="grey-lighten-4"
                height="450px"
                >
                    <v-img
                    :aspect-ratio="16/9"
                    cover
                    :src="require(`@/img/${n.preview_image}`)"
                    >
                    </v-img>
                    <v-card-text
                    class="pt-6"
                    style="position: relative;"
                    >
                    <h3 class="text-h4 font-weight-light text-orange mb-2">
                        {{n.name}}
                    </h3>
                    <div class="font-weight-light text-h6 mb-2">
                        {{n.shortDesc}}
                    </div>
                    </v-card-text>
                </v-card>
            </div>
        </div>
    </v-container>
</template>

<script>
import article from "@/article.json"
export default {
    data(){
        return{
            news: article
        }
    }
}
</script>

<style scoped>
    .news__items{
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
    }
    .news__item{
        margin: 10px;
        cursor: pointer;
        width: 350px;
        margin: 10px auto;
    }
</style>