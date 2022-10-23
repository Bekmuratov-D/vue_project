<template>
    <div
        class="form"
    >   
        <v-card>
            <v-tabs
            v-model="tab"
            background-color="primary"
            >
                <v-tab value="one">Войти</v-tab>
                <v-tab value="two">Регистрация</v-tab>
            </v-tabs>

            <v-card-text>
                <v-window v-model="tab">
                    <v-window-item value="one">
                        <v-form
                            ref="form"
                            v-model="valid"
                            lazy-validation
                        >
                            <v-text-field
                                label="E-mail"
                                required
                            ></v-text-field>

                            <v-text-field
                                label="Password"
                                required
                            ></v-text-field>
                            
                            <v-btn
                                color="success"
                                class="mr-4"
                            >
                                Войти
                            </v-btn>
                        </v-form>
                    </v-window-item>

                    <v-window-item value="two">
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

                            <v-text-field
                                label="E-mail"
                                required
                            ></v-text-field>

                            <v-text-field
                                label="Password"
                                required
                            ></v-text-field>
                            
                            <v-btn
                                color="success"
                                class="mr-4"
                            >
                                Войти
                            </v-btn>
                        </v-form>
                    </v-window-item>
                </v-window>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    data: () => ({
      tab: null,
    }),
}
</script>

<style scoped>
    .form{
        max-width: 400px;
        margin: auto;
        align-self: center;
    }
</style>