<template>
  <div>
    <particles class="particles" />
    <div class="wrapper">
      <section class="inner">
        <p>
          <span class="accent">Hey there.</span>
          I'm a full stack developer born and educated in Switzerland; currently working for the hospital in my hometown.
        </p>
        <p>
          I mainly work with
          <span class="light-accent">node</span> and <span class="light-accent">react</span>
          but strongly believe that every project deserves a technology stack based on a proper evaluation of all its requirements.
        </p>
        <p>
          When I am not jogging or socializing, I love to discover new technologies.
          My latest discoveries are
          <a href="https://github.com/eigenmannmartin/eigenmannmartin.ch">vue</a> and <span class="light-accent">TensorFlow</span>.
        </p>
        <p>
          You can find my <a href="/cv.pdf">CV</a> on <a href="https://github.com/eigenmannmartin/CV">github</a>.
        </p>
      </section>
    </div>
  </div>
</template>

<script>
import Particles from '~components/particles'

export default {
  components: {
    Particles
  }
}
</script>

<style scoped>
/* CONTAINERS */
.wrapper {
  min-height: 100vh;
  max-width: 26rem;
  height: 100%;
  padding: 0 1rem;

  /* Cross-browser display: flex; justify-content: center; */
  display: table;
  margin: 0 auto;
}

.inner {
  /* Cross-browser display: flex; align-items: center; */
  display: table-cell;
  vertical-align: middle;

  /* Force text on top of particles*/
  z-index: 200;
}

.particles {
  /* fill entire background with particles */
  width: 100%;
  height: 99vh;
  margin-bottom: -99vh;
}

/* ELEMENTS */
.accent {
  font-weight: 700;
  text-transform: uppercase;
}

.light-accent,
.accent,
a {
  color: #3F769E;
}

p {
  /* Text styling */
  margin-top: 0.5rem;
  color: rgba(51,51,51,.6);
  font-size: 0.75rem;
}
</style>
