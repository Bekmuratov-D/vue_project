<template>
  <div>
    <h2>Ваш профиль</h2>
    <v-card class="profile__card">
        <div class="prof__continer">
                <v-avatar color="surface-variant" size="100"></v-avatar>
                <p><strong>Бекмуратов Дилмурат</strong></p>
                <p>@user1</p>
            <div>
                <v-card-text>
                    <v-row
                    align="center"
                    class="mx-0"
                    >
                    <v-rating
                        :model-value="4.5"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="14"
                    ></v-rating>
            
                    <div class="text-grey ms-4">
                        4.5 (413)
                    </div>
                    </v-row>
                </v-card-text>
            
                <v-divider class="mx-4 mb-1"></v-divider>
                <div class="px-4">
                    <v-chip-group>
                    <v-chip>00000</v-chip>
            
                    <v-chip>0000</v-chip>
            
                    <v-chip>0000</v-chip>
            
                    <v-chip>0000</v-chip>
                    </v-chip-group>
                </div>
            
                <v-card-actions>
                    <v-btn
                    color="deep-purple-lighten-2"
                    text
                    @click="reserve"
                    >
                    Редактироват
                    </v-btn>
                </v-card-actions>
            </div>
        </div>
    </v-card>
</div>
</template>

<script>

</script>

<style scoped>
.profile__card{
align-items: center;
padding: 20px;
}
.prof__continer{
justify-items:center;
}
</style>