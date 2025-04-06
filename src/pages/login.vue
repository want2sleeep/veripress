<script setup>
import { ref, computed, provide } from "vue";
import ChooseWay from "@/components/login/ChooseWay.vue";
import VerifyCode from "@/components/login/VerifyCode.vue";
import Email from "@/components/login/Email.vue";
import Password from "@/components/login/Password.vue";
import Signup from "@/components/login/Signup.vue";

const CARD_CONFIG = {
    Email: { component: Email, targets: ["ChooseWay", "Signup"] },
    ChooseWay: { component: ChooseWay, targets: ["Password", "VerifyCode"] },
    Password: { component: Password, targets: [] },
    VerifyCode: { component: VerifyCode, targets: [] },
    Signup: { component: Signup, targets: ["Email"] },
};
const currentCard = ref("Email"); // 初始卡片
const history = ref([]);
const email = ref("");
provide("email", email);

const currentComponent = computed(
    () => CARD_CONFIG[currentCard.value].component
);

const currentTargets = computed(() => CARD_CONFIG[currentCard.value].targets);

const hasHistory = computed(() => history.value.length > 0);

const handleNavigation = (target) => {
    history.value.push(currentCard.value);
    currentCard.value = target;
};
</script>

<template>
    <v-container class="fill-height bg-blue-lighten-4" fluid>
        <v-row justify="center" align="center" class="transparent">
            <v-col cols="12" sm="6" md="4">
                <component
                    :is="currentComponent"
                    :key="currentCard"
                    :targets="currentTargets"
                    :can-go-back="hasHistory"
                    @navigate="handleNavigation"
                    rounded="xl"
                    class="bg-blue"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped lang="sass"></style>
