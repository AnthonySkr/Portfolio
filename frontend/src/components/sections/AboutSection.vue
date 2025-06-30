<template>
  <section class="about-section" id="about">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">À propos de moi</h2>
        <p class="section-subtitle">Découvrez mon parcours et mes compétences</p>
      </div>

      <div class="about-grid">
        <div class="about-text">
          <p>
            Développeur passionné avec une expertise en développement web moderne. J'aime créer des
            applications performantes et des interfaces utilisateur intuitives qui résolvent des
            problèmes réels.
          </p>
          <p>
            Mon approche combine créativité technique et rigueur méthodologique pour livrer des
            solutions innovantes et robustes.
          </p>
        </div>

        <div class="skills-grid">
          <div class="skill-card">
            <h3>Frontend</h3>
            <ul>
              <li>Vue.js / React</li>
              <li>TypeScript</li>
              <li>SCSS / CSS3</li>
            </ul>
          </div>
          <div class="skill-card">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Python</li>
              <li>Bases de données</li>
            </ul>
          </div>
          <div class="skill-card">
            <h3>Outils</h3>
            <ul>
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>CI/CD</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use 'sass:color';
@use '@/styles/variables' as vars;

.about-section {
  background: white;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: vars.$spacing-xl;
  align-items: start;

  @media (max-width: vars.$mobile) {
    grid-template-columns: 1fr;
    gap: vars.$spacing-lg;
  }
}

.about-text {
  p {
    margin-bottom: vars.$spacing-md;
    font-size: 1.1rem;
    line-height: 1.7;
    color: color.adjust(vars.$dark-text, $lightness: 20%);
  }
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: vars.$spacing-md;
}

.skill-card {
  background: vars.$light-gray;
  padding: vars.$spacing-md;
  border-radius: 12px;

  h3 {
    color: vars.$primary-color;
    margin-bottom: vars.$spacing-sm;
    font-size: 1.2rem;
  }

  ul {
    list-style: none;

    li {
      padding: 4px 0;
      color: vars.$dark-text;

      &::before {
        content: '•';
        color: vars.$secondary-accent;
        margin-right: 8px;
      }
    }
  }
}
</style>
