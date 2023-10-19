<script setup lang="ts">
// Import predefined theme
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { Auth } from '@nuxtbase/auth-ui-vue'

const supabaseClient = useSupabaseClient()
</script>

<template>
    <h1>Login page</h1>
    <Auth :supabaseClient="supabaseClient" :appearance="{
        theme: ThemeSupa
    }" />
</template>

