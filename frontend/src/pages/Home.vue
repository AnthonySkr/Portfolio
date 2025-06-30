<script setup lang="ts">
// Imports sections
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>

<template>
  <div class="home-page">
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <ContactSection />
  </div>
</template>

<style scoped lang="scss">
@use 'sass:color';
@use '@/styles/variables' as vars;

.home-page {
  overflow-x: hidden;
}
</style>
