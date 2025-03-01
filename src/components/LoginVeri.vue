<script setup>

</script>

<template>
    <v-container fluid class="fill-height bg-grey-lighten-3">
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="6" lg="4">

                <v-card
                    class="py-8 px-6 text-center mx-auto ma-4"
                    elevation="12"
                    max-width="400"
                    width="100%"
                >
                    <h3 class="text-h6 mb-4">Verify Your Account</h3>

                    <div class="text-body-2">
                        We sent a verification code to john..@gmail.com <br>

                        Please check your email and paste the code below.
                    </div>

                    <v-sheet color="surface">
                        <v-otp-input
                            v-model="otp"
                            variant="solo"
                        />
                    </v-sheet>

                    <RouterLink to="login">
                        <v-btn
                            class="my-4"
                            color="primary"
                            height="40"
                            variant="flat"
                            width="70%"
                        >
                            Verify
                        </v-btn>
                    </RouterLink>


                    <div class="text-caption">
                        Didn't receive the code? <a href="#" @click.prevent="otp = ''">Resend</a>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        otp: '',
    }),
}
</script>

<style scoped>

</style>
