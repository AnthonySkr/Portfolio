<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'

  const isScrolled = ref(false)
  const isMobileMenuOpen = ref(false)
  const activeSection = ref('home')

  // Gestion du scroll pour l'effet de transparence
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
    
    // Détection de la section active
    const sections = ['home', 'about', 'projects', 'contact']
    const currentSection = sections.find(section => {
      const element = document.getElementById(section)
      if (element) {
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      }
      return false
    })
    
    if (currentSection) {
      activeSection.value = currentSection
    }
  }

  // Navigation smooth vers les sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
      isMobileMenuOpen.value = false
    }
  }

  // Toggle du menu mobile
  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
</script>

<template>
  <header class="header" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <nav class="navbar">
        <!-- Logo/Brand -->
        <div class="navbar-brand">
          <a href="#home" @click.prevent="scrollToSection('home')" class="brand-link">
            <span class="brand-text">Anthony</span>
            <span class="brand-dot">.</span>
          </a>
        </div>

        <!-- Navigation Desktop -->
        <ul class="navbar-nav desktop-nav">
          <li class="nav-item">
            <a 
              href="#home" 
              class="nav-link"
              :class="{ 'active': activeSection === 'home' }"
              @click.prevent="scrollToSection('home')"
            >
              Accueil
            </a>
          </li>
          <li class="nav-item">
            <a 
              href="#about" 
              class="nav-link"
              :class="{ 'active': activeSection === 'about' }"
              @click.prevent="scrollToSection('about')"
            >
              À propos
            </a>
          </li>
          <li class="nav-item">
            <a 
              href="#projects" 
              class="nav-link"
              :class="{ 'active': activeSection === 'projects' }"
              @click.prevent="scrollToSection('projects')"
            >
              Projets
            </a>
          </li>
          <li class="nav-item">
            <a 
              href="#contact" 
              class="nav-link"
              :class="{ 'active': activeSection === 'contact' }"
              @click.prevent="scrollToSection('contact')"
            >
              Contact
            </a>
          </li>
        </ul>

        <!-- CTA Button -->
        <div class="navbar-cta desktop-nav">
          <a 
            href="#contact" 
            class="btn btn-primary btn-sm"
            @click.prevent="scrollToSection('contact')"
          >
            Discutons !
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          class="mobile-menu-toggle"
          :class="{ 'active': isMobileMenuOpen }"
          @click="toggleMobileMenu"
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <!-- Mobile Navigation -->
      <div class="mobile-nav" :class="{ 'open': isMobileMenuOpen }">
        <ul class="mobile-nav-list">
          <li class="mobile-nav-item">
            <a 
              href="#home" 
              class="mobile-nav-link"
              :class="{ 'active': activeSection === 'home' }"
              @click.prevent="scrollToSection('home')"
            >
              Accueil
            </a>
          </li>
          <li class="mobile-nav-item">
            <a 
              href="#about" 
              class="mobile-nav-link"
              :class="{ 'active': activeSection === 'about' }"
              @click.prevent="scrollToSection('about')"
            >
              À propos
            </a>
          </li>
          <li class="mobile-nav-item">
            <a 
              href="#projects" 
              class="mobile-nav-link"
              :class="{ 'active': activeSection === 'projects' }"
              @click.prevent="scrollToSection('projects')"
            >
              Projets
            </a>
          </li>
          <li class="mobile-nav-item">
            <a 
              href="#contact" 
              class="mobile-nav-link"
              :class="{ 'active': activeSection === 'contact' }"
              @click.prevent="scrollToSection('contact')"
            >
              Contact
            </a>
          </li>
        </ul>
        <div class="mobile-nav-cta">
          <a 
            href="#contact" 
            class="btn btn-primary"
            @click.prevent="scrollToSection('contact')"
          >
            Discutons !
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  @use 'sass:color';
  @use '@/styles/variables' as vars;

  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: color.adjust(vars.$light-text, $alpha: -0.05);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid color.adjust(vars.$light-gray, $alpha: -0.5);
    transition: all 0.3s ease;
    
    &.scrolled {
      background: color.adjust(vars.$light-text, $alpha: -0.02);
      box-shadow: 0 2px 20px color.adjust(vars.$dark-text, $alpha: -0.92);
    }
  }

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    
    @media (max-width: vars.$mobile) {
      height: 60px;
    }
  }

  // Brand/Logo
  .navbar-brand {
    z-index: 1001;
    
    .brand-link {
      display: flex;
      align-items: center;
      text-decoration: none;
      font-size: 1.5rem;
      font-weight: 700;
      color: vars.$dark-text;
      transition: color 0.3s ease;
      
      &:hover {
        color: vars.$primary-color;
      }
    }
    
    .brand-text {
      color: vars.$dark-text;
    }
    
    .brand-dot {
      color: vars.$primary-color;
      margin-left: 2px;
    }
  }

  // Desktop Navigation
  .desktop-nav {
    @media (max-width: vars.$mobile) {
      display: none;
    }
  }

  .navbar-nav {
    display: flex;
    list-style: none;
    gap: vars.$spacing-lg;
    margin: 0;
    padding: 0;
  }

  .nav-item {
    position: relative;
  }

  .nav-link {
    text-decoration: none;
    color: vars.$dark-text;
    font-weight: 500;
    font-size: 0.95rem;
    padding: 8px 0;
    position: relative;
    transition: color 0.3s ease;
    
    &:hover {
      color: vars.$primary-color;
    }
    
    &.active {
      color: vars.$primary-color;
      
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, vars.$primary-color, vars.$secondary-accent);
        border-radius: 1px;
      }
    }
  }

  // CTA Button
  .navbar-cta {
    .btn-sm {
      padding: 8px 20px;
      font-size: 0.9rem;
    }
  }

  // Mobile Menu Toggle
  .mobile-menu-toggle {
    display: none;
    flex-direction: column;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
    z-index: 1001;
    
    @media (max-width: vars.$mobile) {
      display: flex;
    }
    
    span {
      width: 25px;
      height: 3px;
      background: vars.$dark-text;
      margin: 3px 0;
      transition: all 0.3s ease;
      border-radius: 2px;
    }
    
    &.active {
      span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      
      span:nth-child(2) {
        opacity: 0;
      }
      
      span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
      }
    }
  }

  // Mobile Navigation
  .mobile-nav {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background: vars.$light-text;
    border-bottom: 1px solid vars.$light-gray;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    
    &.open {
      max-height: 400px;
    }
    
    @media (min-width: calc(#{vars.$mobile} + 1px)) {
      display: none;
    }
  }

  .mobile-nav-list {
    list-style: none;
    margin: 0;
    padding: vars.$spacing-md 0;
  }

  .mobile-nav-item {
    text-align: center;
    margin-bottom: vars.$spacing-sm;
  }

  .mobile-nav-link {
    display: block;
    text-decoration: none;
    color: vars.$dark-text;
    font-weight: 500;
    font-size: 1.1rem;
    padding: vars.$spacing-sm vars.$spacing-md;
    transition: all 0.3s ease;
    
    &:hover,
    &.active {
      color: vars.$primary-color;
      background: color.adjust(vars.$primary-color, $alpha: -0.95);
    }
  }

  .mobile-nav-cta {
    text-align: center;
    padding: 0 vars.$spacing-md vars.$spacing-md;
    border-top: 1px solid vars.$light-gray;
    margin-top: vars.$spacing-md;
    padding-top: vars.$spacing-md;
  }

  // Responsive adjustments
  @media (max-width: 1024px) {
    .navbar-nav {
      gap: vars.$spacing-md;
    }
  }
</style>