<template>
  <section class="left-root">
    <div class="inner">
      <h3>Hi. I am <span class="accent">Martin</span>,</h3>
      <p>
        a Swiss
        <span class="accent">full stack developer</span>
        and
        <span class="accent">perfectionist</span>
        <br />
        working at <a class="workplace" href="https://www.kssg.ch">KSSG</a>
      </p>
      <p class="social">
        <a href="https://linkedin.com/in/eigenmannmartin"><span class="icon-linkedin"/></a>
        <a href="https://github.com/eigenmannmartin"><span class="icon-github-circled"/></a>
        <a href="https://twitter.com/eigenmannmartin"><span class="icon-twitter"/></a>
      </p>
    </div>
  </section>
</template>

<style scoped>

.left-root {
  display: flex;
  min-height: 100%;
}

.inner {
  /* Positioning at the bottom */
  align-self: flex-end;
  text-align: center;
  width: 100%;
  margin-bottom: 15vh;

  /* Font coloring */
  color: #E9E9FF;

  /* Spacint for text wrap */
  padding: 0 1rem 0;
}

.accent {
  /* Accent important notes */
  color: #a3f1ff;
  font-weight: 900;
}

.workplace {
  /* Style link */
  text-decoration: underline;
  color: inherit;
  cursor: pointer;
}

.social > a {
  text-decoration: none;
  color: inherit;
  padding: 0.25rem;
  cursor: pointer;
}

</style>
