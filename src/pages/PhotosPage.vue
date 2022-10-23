<template>
    <v-container>
        <div
            class="photo__items"
        >
            <div
                v-for ="photo in photos"
                :key="photo.id"
            >
                <img
                    class="photo__img"
                    :src="require(`@/img/${photo.full_image}`)"
                />
            </div>
        </div>
    </v-container>

</template>

<script>
import article from "@/article.json";
export default {
    data(){
        return{
            photos: article
        }
    },
}
</script>

<style scoped>
.photo__items{
    display: flex;
    flex-wrap: wrap;
}
.photo__img{
    max-width: 350px;
    margin: 10px;
}
</style>