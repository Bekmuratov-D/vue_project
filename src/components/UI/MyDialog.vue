<template>
    <div class="dialog" v-if="show" @click.stop="hideDialog">
       <div class="dialog__content" @click.stop>
            <slot>
                <h3 class="title__dialog">Редактироват профил</h3>
                <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                >
                    <v-text-field
                        label="Имя"
                        required
                    ></v-text-field>

                    <v-text-field
                        label="Фамилия"
                        required
                    ></v-text-field>
                    <v-btn
                        color="success"
                        class="mr-4"
                        @click="hideDialog"
                    >
                        Редактироват
                    </v-btn>
                </v-form>
            </slot>
       </div>
    </div>
</template>

<script>
export default {
    name: 'my-dialog',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods:{
        hideDialog(){
            this.$emit('update:show', false)
        }
    }
}
</script>

<style scoped>
.dialog{
    z-index: 1000;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
}
.dialog__content{
    margin: auto;
    background: white;
    border-radius: 12px;
    width: 500px;
    height: 300px;
    padding: 20px;
}
.title__dialog{
    margin: 10px;
}
</style>

