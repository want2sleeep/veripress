<script setup>
import {ref, computed, provide} from 'vue'
import ChooseWay from '@/components/login/ChooseWay.vue'
import VerifyCode from '@/components/login/VerifyCode.vue'
import Email from '@/components/login/Email.vue'
import Password from '@/components/login/Password.vue'
import Signup from '@/components/login/Signup.vue'

const CARD_CONFIG = {
    Email: {component: Email, targets: ['ChooseWay', 'Signup']},
    ChooseWay: {component: ChooseWay, targets: ['Password', 'VerifyCode']},
    Password: {component: Password, targets: []},
    VerifyCode: {component: VerifyCode, targets: []},
    Signup: {component: Signup, targets: ['Email']},
}
const currentCard = ref('Email') // 初始卡片
const history = ref([])
const email = ref('')
provide('email', email)

const currentComponent = computed(
    () => CARD_CONFIG[currentCard.value].component,
)

const currentTargets = computed(() => CARD_CONFIG[currentCard.value].targets)

const hasHistory = computed(() => history.value.length > 0)

const handleNavigation = (target) => {
    history.value.push(currentCard.value)
    currentCard.value = target
}
</script>

<template>
    <v-container class="fill-height bg-blue-lighten-5 bg-animation" fluid>
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

<style scoped>
.bg-animation {
    background: #bbdefb;
    margin: 0;
    min-height: 100%;
    position: relative;
    background-image: radial-gradient(
        closest-side,
        rgba(13, 71, 161, 0.8),
            /* 深蓝（主色 #0D47A1） */ rgba(13, 71, 161, 0)
    ),
    radial-gradient(
        closest-side,
        rgba(33, 150, 243, 0.7),
            /* 亮蓝 #2196F3 */ rgba(33, 150, 243, 0)
    ),
    radial-gradient(
        closest-side,
        rgb(107, 206, 224, 0.8),
            /* 灰蓝 #78909C */ rgba(120, 144, 156, 0)
    ),
    radial-gradient(
        closest-side,
        rgba(254, 234, 131, 0.6),
        rgba(254, 234, 131, 0)
    ),
    radial-gradient(
        closest-side,
        rgb(234, 238, 177),
        rgba(248, 192, 147, 0)
    );
    background-size: 130vmax 130vmax, 80vmax 80vmax, 90vmax 90vmax,
    110vmax 110vmax, 90vmax 90vmax;
    background-position: -80vmax -80vmax, 60vmax -30vmax, 10vmax 10vmax,
    -30vmax -30vmax, 50vmax 50vmax;
    background-repeat: no-repeat;
    animation: 10s movement linear infinite;
    background-attachment: fixed;
}

.bg-animation::after {
    position: fixed;
    content: "";
    display: block;

    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    z-index: -1;
}

@keyframes movement {
    0%,
    100% {
        background-size: 130vmax 130vmax, 80vmax 80vmax, 90vmax 90vmax,
        110vmax 110vmax, 90vmax 90vmax;
        background-position: -80vmax -80vmax, 60vmax -30vmax, 10vmax 10vmax,
        -30vmax -30vmax, 50vmax 50vmax;
    }
    25% {
        background-size: 100vmax 100vmax, 90vmax 90vmax, 100vmax 100vmax,
        100vmax 100vmax, 60vmax 60vmax;
        background-position: -60vmax -90vmax, 50vmax -40vmax, 0vmax 20vmax,
        -40vmax -20vmax, 40vmax 60vmax;
    }
    50% {
        background-size: 80vmax 80vmax, 110vmax 110vmax, 89vmax 88vmax,
        60vmax 60vmax, 80vmax 80vmax;
        background-position: -50vmax -70vmax, 40vmax -30vmax, 10vmax 0vmax,
        20vmax 10vmax, 30vmax 70vmax;
    }
    75% {
        background-size: 90vmax 90vmax, 90vmax 90vmax, 100vmax 100vmax,
        90vmax 90vmax, 70vmax 70vmax;
        background-position: -50vmax -40vmax, 50vmax -30vmax, 20vmax 0vmax,
        -10vmax 10vmax, 40vmax 60vmax;
    }
}
</style>
