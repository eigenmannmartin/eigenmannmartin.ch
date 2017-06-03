<template>
  <div class="root">
    <section>
      <p>
        <span class="accent">Hey there.</span>
        I'm a full stack developer born and educated in Switzerland and currenlty working for the hospital in my home town.
      </p>
      <p>
        I work mainly with
        <span class="accent">node</span> and <span class="accent">react</span>
        but stronly believe that every project deserves a technology stack based on a proper evaluation of all requirements.
      </p>
      <p>
        Once I am not doing sports or social activity, I love discovering new technologies and frameworks.
        My latest discoveries are:
        <span class="light-accent">vue.js</span> and <span class="light-accent">TensorFlow</span>.
      </p>
    </section>
  </div>
</template>

<style scoped>
.root {
  /* Spacing */
  margin: 2rem 5vw;
  max-width: 28rem;

  font-size: 0.75rem;
}

.accent {
  font-weight: 700;
  text-transform: uppercase;
}

.light-accent,
.accent {
  color: #3F769E;
}

.root > section > p {
  margin-top: 0.25rem;
}

</style>
