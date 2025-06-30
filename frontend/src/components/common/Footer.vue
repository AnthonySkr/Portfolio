<template>
  <footer class="footer">
    <div class="container">
      <!-- Section principale du footer -->
      <div class="footer-content">
        <!-- Informations personnelles -->
        <div class="footer-section">
          <h3 class="footer-title">Anthony Skr</h3>
          <p class="footer-description">
            Développeur Full Stack passionné par la création d'expériences 
            digitales innovantes et performantes.
          </p>
          <div class="social-links">
            <a href="https://github.com/anthonyskr" class="social-link" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/anthonyskr" class="social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="mailto:contact@anthony.dev" class="social-link" aria-label="Email">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.98L12 13.636l9.382-9.815h.982c.904 0 1.636.732 1.636 1.636z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Navigation rapide -->
        <div class="footer-section">
          <h4 class="footer-subtitle">Navigation</h4>
          <ul class="footer-links">
            <li><a href="#home" @click.prevent="scrollToSection('home')">Accueil</a></li>
            <li><a href="#about" @click.prevent="scrollToSection('about')">À propos</a></li>
            <li><a href="#projects" @click.prevent="scrollToSection('projects')">Projets</a></li>
            <li><a href="#contact" @click.prevent="scrollToSection('contact')">Contact</a></li>
          </ul>
        </div>

        <!-- Technologies -->
        <div class="footer-section">
          <h4 class="footer-subtitle">Technologies</h4>
          <ul class="footer-links">
            <li>Vue.js & TypeScript</li>
            <li>Node.js & Express</li>
            <li>MongoDB & PostgreSQL</li>
            <li>Docker & AWS</li>
          </ul>
        </div>

        <!-- Contact info -->
        <div class="footer-section">
          <h4 class="footer-subtitle">Contact</h4>
          <ul class="footer-contact">
            <li>
              <span class="contact-icon">📧</span>
              <a href="mailto:contact@anthony.dev">contact@anthony.dev</a>
            </li>
            <li>
              <span class="contact-icon">📍</span>
              <span>France</span>
            </li>
            <li>
              <span class="contact-icon">💼</span>
              <span>Disponible pour projets</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Ligne de séparation -->
      <div class="footer-divider"></div>

      <!-- Copyright et mentions -->
      <div class="footer-bottom">
        <div class="footer-copyright">
          <p>&copy; {{ currentYear }} Anthony Skrzypczak. Tous droits réservés.</p>
        </div>
        <div class="footer-meta">
          <span>Fait avec ❤️ et Vue.js</span>
          <span class="separator">•</span>
          <a href="#" class="footer-link">Mentions légales</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

// Navigation smooth vers les sections (même logique que le Header)
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<style scoped lang="scss">
@use 'sass:color';
@use '@/styles/variables' as vars;

.footer {
  background: vars.$dark-text;
  color: vars.$light-text;
  padding: vars.$spacing-xl 0 vars.$spacing-md;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: vars.$spacing-lg;
  margin-bottom: vars.$spacing-lg;
  
  @media (max-width: vars.$tablet) {
    grid-template-columns: 1fr 1fr;
    gap: vars.$spacing-md;
  }
  
  @media (max-width: vars.$mobile) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: vars.$spacing-lg;
  }
}

.footer-section {
  .footer-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: vars.$spacing-sm;
    color: vars.$light-text;
    
    @media (max-width: vars.$mobile) {
      font-size: 1.8rem;
    }
  }
  
  .footer-subtitle {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: vars.$spacing-sm;
    color: vars.$secondary-accent;
  }
  
  .footer-description {
    line-height: 1.6;
    margin-bottom: vars.$spacing-md;
    opacity: 0.9;
    max-width: 300px;
    
    @media (max-width: vars.$mobile) {
      max-width: none;
    }
  }
}

// Liens sociaux
.social-links {
  display: flex;
  gap: vars.$spacing-sm;
  
  @media (max-width: vars.$mobile) {
    justify-content: center;
  }
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: color.adjust(vars.$light-text, $alpha: -0.9);
  color: vars.$light-text;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    background: vars.$primary-color;
    transform: translateY(-2px);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
}

// Listes de liens
.footer-links {
  list-style: none;
  
  li {
    margin-bottom: 8px;
    
    a {
      color: color.adjust(vars.$light-text, $alpha: -0.3);
      text-decoration: none;
      transition: color 0.3s ease;
      cursor: pointer;
      
      &:hover {
        color: vars.$secondary-accent;
      }
    }
  }
}

// Contact info
.footer-contact {
  list-style: none;
  
  li {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    
    @media (max-width: vars.$mobile) {
      justify-content: center;
    }
    
    .contact-icon {
      margin-right: 8px;
      font-size: 1.1rem;
    }
    
    a {
      color: color.adjust(vars.$light-text, $alpha: -0.3);
      text-decoration: none;
      transition: color 0.3s ease;
      
      &:hover {
        color: vars.$secondary-accent;
      }
    }
    
    span:not(.contact-icon) {
      color: color.adjust(vars.$light-text, $alpha: -0.3);
    }
  }
}

// Divider
.footer-divider {
  height: 1px;
  background: color.adjust(vars.$light-text, $alpha: -0.8);
  margin: vars.$spacing-lg 0;
}

// Footer bottom
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  
  @media (max-width: vars.$mobile) {
    flex-direction: column;
    gap: vars.$spacing-sm;
    text-align: center;
  }
}

.footer-copyright {
  color: color.adjust(vars.$light-text, $alpha: -0.4);
}

.footer-meta {
  display: flex;
  align-items: center;
  gap: vars.$spacing-sm;
  color: color.adjust(vars.$light-text, $alpha: -0.4);
  
  .separator {
    opacity: 0.5;
  }
  
  .footer-link {
    color: color.adjust(vars.$light-text, $alpha: -0.4);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: vars.$secondary-accent;
    }
  }
}

// Responsive adjustments
@media (max-width: vars.$mobile) {
  .footer {
    padding: vars.$spacing-lg 0 vars.$spacing-md;
  }
}
</style>