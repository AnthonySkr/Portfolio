<template>
  <section class="contact-section" id="contact">
    <div class="container">
      <div class="contact-content">
        <h2>Travaillons ensemble</h2>
        <p>Vous avez un projet en tête ? Contactez-moi pour en discuter !</p>
        <div class="contact-actions">
          <a href="mailto:contact@anthony.dev" class="btn btn-primary"> 📧 Me contacter </a>
          <a href="#" class="btn btn-secondary"> 📄 Mon CV </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use 'sass:color';
@use '@/styles/variables' as vars;

.contact-section {
  background: vars.$dark-text;
  color: vars.$light-text;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: vars.$spacing-md;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: vars.$spacing-lg;
    opacity: 0.9;
  }
}

.contact-actions {
  display: flex;
  gap: vars.$spacing-md;
  justify-content: center;

  @media (max-width: vars.$mobile) {
    flex-direction: column;
    align-items: center;
  }
}
</style>
