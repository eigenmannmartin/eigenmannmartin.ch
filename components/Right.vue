<template>
  <div class="root">
    <section>
      <p>
        <span class="accent">Hey there.</span>
        I'm a full stack developer born and educated in Switzerland; currenlty working for the hospital in my home town.
      </p>
      <p>
        I mainly work with
        <span class="accent">node</span> and <span class="accent">react</span>
        but stronly believe that every project deserves a technology stack based on a proper evaluation of all requirements.
      </p>
      <p>
        When I am not jogging or socializing, I love to discover new technologies.
        My latest discoveries are:
        <span class="light-accent">vue.js</span> and <span class="light-accent">TensorFlow</span>.
      </p>
      <p>
        You can find my <a href="/cv.pdf">CV</a> on <a href="https://github.com/eigenmannmartin/CV">github</a>.
      </p>
    </section>
  </div>
</template>

<style scoped>
.root {
  /* Spacing */
  margin: 2rem 5vw;
  max-width: 28rem;

  /* Font size scaling */
  font-size: 0.75rem;
}

.accent {
  font-weight: 700;
  text-transform: uppercase;
}

.root a {
  color: inherit;
}

.light-accent,
.accent {
  color: #3F769E;
}

.root > section > p {
  margin-top: 0.25rem;
}

</style>
