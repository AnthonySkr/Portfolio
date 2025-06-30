<script setup lang="ts">
  import { ref, onMounted } from 'vue'

  const isLoaded = ref(false)

  onMounted(() => {
    setTimeout(() => {
      isLoaded.value = true
    }, 100)
  })
</script>

<template>
    <section class="hero-section" :class="{ 'loaded': isLoaded }" id="home">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              Bonjour, je suis 
              <span class="highlight">Anthony</span>
            </h1>
            <h2 class="hero-subtitle">Développeur Full Stack</h2>
            <p class="hero-description">
              Passionné par le développement web moderne, je crée des expériences 
              digitales innovantes et performantes avec Vue.js, Node.js et bien plus.
            </p>
            <div class="hero-actions">
              <a href="#projects" class="btn btn-primary">Voir mes projets</a>
              <a href="#contact" class="btn btn-secondary">Me contacter</a>
            </div>
          </div>
          <div class="hero-visual">
            <div class="floating-card">
              <div class="card-icon">💻</div>
              <h3>Code</h3>
            </div>
            <div class="floating-card delay-1">
              <div class="card-icon">🎨</div>
              <h3>Design</h3>
            </div>
            <div class="floating-card delay-2">
              <div class="card-icon">🚀</div>
              <h3>Innovation</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<style scoped lang="scss">
  @use 'sass:color';
  @use '@/styles/variables' as vars;

  .hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, vars.$light-text 0%, color.adjust(vars.$light-gray, $lightness: 3%) 100%);
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 50%;
      height: 100%;
      background: linear-gradient(45deg, color.adjust(vars.$primary-color, $alpha: -0.95), color.adjust(vars.$secondary-accent, $alpha: -0.95));
      z-index: 1;
    }
    
    .container {
      position: relative;
      z-index: 2;
    }
  }

  .hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: vars.$spacing-xl;
    align-items: center;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;
    
    .loaded & {
      opacity: 1;
      transform: translateY(0);
    }
    
    @media (max-width: vars.$mobile) {
      grid-template-columns: 1fr;
      gap: vars.$spacing-lg;
      text-align: center;
    }
  }

  .hero-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: vars.$spacing-sm;
    
    .highlight {
      color: vars.$primary-color;
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: linear-gradient(90deg, vars.$primary-color, vars.$secondary-accent);
        border-radius: 2px;
      }
    }
  }

  .hero-subtitle {
    font-size: 1.5rem;
    color: color.adjust(vars.$dark-text, $lightness: 20%);
    margin-bottom: vars.$spacing-md;
    font-weight: 400;
  }

  .hero-description {
    font-size: 1.1rem;
    line-height: 1.7;
    color: color.adjust(vars.$dark-text, $lightness: 30%);
    margin-bottom: vars.$spacing-lg;
    max-width: 500px;
  }

  .hero-actions {
    display: flex;
    gap: vars.$spacing-md;
    
    @media (max-width: vars.$mobile) {
      flex-direction: column;
      align-items: center;
    }
  }

  .hero-visual {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    min-height: 400px;
  }

  .floating-card {
    background: white;
    padding: vars.$spacing-md;
    border-radius: 16px;
    box-shadow: 0 10px 30px color.adjust(vars.$dark-text, $alpha: -0.9);
    text-align: center;
    position: absolute;
    animation: float 3s ease-in-out infinite;
    
    &.delay-1 {
      animation-delay: 0.5s;
      top: 20%;
      right: 10%;
    }
    
    &.delay-2 {
      animation-delay: 1s;
      bottom: 10%;
      left: 20%;
    }
    
    .card-icon {
      font-size: 2rem;
      margin-bottom: vars.$spacing-sm;
    }
    
    h3 {
      color: vars.$primary-color;
      font-size: 1.1rem;
      font-weight: 600;
    }
  }
</style>