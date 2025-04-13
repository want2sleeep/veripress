<template>
    <v-footer
        style="background: linear-gradient(270deg, #ffffff, #90caf9)"
        height="40"
        app
    >
        <div class="text-caption">慧析新闻 Veripress</div>

        <div
            class="text-caption text-disabled"
            style="position: absolute; right: 16px"
        >
            &copy; 2025-{{ new Date().getFullYear() }}
            <span class="d-none d-sm-inline-block">Veripress, LLC</span>
            —
            <a
                class="text-decoration-none on-surface"
                href="https://vuetifyjs.com/about/licensing/"
                rel="noopener noreferrer"
                target="_blank"
            >
                MIT License
            </a>
        </div>
    </v-footer>
</template>

<script setup></script>

<style scoped lang="sass">
.social-link :deep(.v-icon)
    color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
    text-decoration: none
    transition: .2s ease-in-out

    &:hover
        color: rgba(25, 118, 210, 1)
</style>
