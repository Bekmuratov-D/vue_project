<template>
    <v-container>
        {{photo.id}}
    </v-container>
</template>

<script>
export default {
    props: {
        photo: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>

</style>