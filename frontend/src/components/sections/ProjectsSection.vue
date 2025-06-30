<template>
  <section class="projects-preview" id="projects">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Projets récents</h2>
        <p class="section-subtitle">Quelques réalisations dont je suis fier</p>
      </div>

      <div class="projects-grid">
        <div class="project-card">
          <div class="project-image">
            <div class="project-placeholder">🎯</div>
          </div>
          <div class="project-content">
            <h3>Projet 1</h3>
            <p>Application web moderne développée avec Vue.js</p>
            <div class="project-tags">
              <span class="tag">Vue.js</span>
              <span class="tag">TypeScript</span>
            </div>
          </div>
        </div>

        <div class="project-card">
          <div class="project-image">
            <div class="project-placeholder">📱</div>
          </div>
          <div class="project-content">
            <h3>Projet 2</h3>
            <p>API REST avec Node.js et base de données</p>
            <div class="project-tags">
              <span class="tag">Node.js</span>
              <span class="tag">MongoDB</span>
            </div>
          </div>
        </div>

        <div class="project-card">
          <div class="project-image">
            <div class="project-placeholder">⚡</div>
          </div>
          <div class="project-content">
            <h3>Projet 3</h3>
            <p>Application full-stack performante</p>
            <div class="project-tags">
              <span class="tag">Full Stack</span>
              <span class="tag">Docker</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use 'sass:color';
@use '@/styles/variables' as vars;

.projects-preview {
  background: vars.$light-gray;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: vars.$spacing-lg;
}

.project-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 5px 20px color.adjust(vars.$dark-text, $alpha: -0.9);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px color.adjust(vars.$dark-text, $alpha: -0.85);
  }
}

.project-image {
  height: 200px;
  background: linear-gradient(135deg, vars.$primary-color, vars.$secondary-accent);
  display: flex;
  align-items: center;
  justify-content: center;

  .project-placeholder {
    font-size: 3rem;
    color: white;
  }
}

.project-content {
  padding: vars.$spacing-md;

  h3 {
    color: vars.$dark-text;
    margin-bottom: vars.$spacing-sm;
    font-size: 1.3rem;
  }

  p {
    color: color.adjust(vars.$dark-text, $lightness: 30%);
    margin-bottom: vars.$spacing-md;
    line-height: 1.6;
  }
}

.project-tags {
  display: flex;
  gap: vars.$spacing-xs;
  flex-wrap: wrap;
}

.tag {
  background: vars.$light-gray;
  color: vars.$dark-text;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}
</style>
