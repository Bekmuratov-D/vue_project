<template>
    <div class="news__items" > 
        <v-card
        class="mx-auto"
        color="grey-lighten-4"
        max-width="1000"
        
        >
            <v-img
            :aspect-ratio="16/9"
            cover
            :src="require(`@/img/${detailedPage.full_image}`)"
            >
            </v-img>
            <v-card-text
            class="pt-6"
            style="position: relative;"
            >
            <div class="font-weight-light text-grey text-h6 mb-2">
                {{detailedPage.date}}
            </div>
            <h3 class="text-h4 font-weight-light text-orange mb-2">
                {{detailedPage.name}}
            </h3>
            <div class="font-weight-light text-h6 mb-2">
                {{detailedPage.desc}}
            </div>
            </v-card-text>
        </v-card>
    </div>
    <v-form
        class="form"
    >
        <v-row>
            <v-col>
                <v-text-field
                    :counter="10"
                    label="Ваш коментарий"
                    required
                />
            </v-col>
        </v-row>
        <v-card
            class="mx-auto"
            max-width="1000"
            >
            <v-list>
                <div class="coment__item">
                    <p><strong>Дима</strong></p>
                    <p>Здес будет коментарии</p>
                </div>
                <div class="coment__item">
                    <p><strong>Дима2</strong></p>
                    <p>Здес будет коментарии2</p>
                </div>
            </v-list>
        </v-card>
    </v-form>
</template>

<script>
import article from "@/article.json"
export default {
    data(){
        return{
            detailedPage: article.filter(t => t.id == this.$route.params.id )[0]
        }
    }
}
</script>

<style scoped>
    .form{
        max-width: 1000px;
        margin: 40px auto;
    }
    .coment__item{
        margin: 10px 20px;
    }
</style>