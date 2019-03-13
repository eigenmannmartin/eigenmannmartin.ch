<template>
  <section class="root">
    <div class="inner">
      <div>
        <h3>
          I'm
          <span class="accent">Martin</span>
        </h3>
        <p v-if="showTyper">
          <vue-typer
            :text="['Developer', 'Perfectionist', 'Project Manager', 'Friend', 'Leader']"
            :shuffle="false"
            erase-style="backspace"
            :erase-delay="50"
            initial-action="typing"
            :pre-type-delay="1000"
            caret-animation="smooth"
            initialAction="erasing"
          />
          <br>
          <span class="workplace-pre">working at&nbsp;</span>
          <a class="workplace" href="https://www.imaginecargo.com/">IC</a>
        </p>
        <p class="social">
          <a href="https://linkedin.com/in/eigenmannmartin">
            <span class="icon-linkedin"/>
          </a>
          <a href="https://github.com/eigenmannmartin">
            <span class="icon-github-circled"/>
          </a>
          <a href="https://twitter.com/eigenmannmartin">
            <span class="icon-twitter"/>
          </a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showTyper: false
    };
  },
  mounted() {
    // showTyper will only be set to true on the client. This keeps the DOM-tree in sync.
    this.showTyper = true;
  }
};
</script>

<style scoped>
.root {
  /* Do not stick it all the way to the bottom */
  height: 80%;

  display: flex;
  justify-content: center;
}

.inner {
  z-index: 1010;
  display: flex;
  align-self: flex-end;

  text-align: center;

  /* Spacing for text wrap */
  padding: 0 1rem 0;
}

.accent {
  /* Accent important notes */
  color: #9e3f5a;
  font-weight: 900;
}

.workplace-pre {
  font-size: smaller;
}
.workplace {
  /* Style link */
  text-decoration: underline;
  color: inherit;
  cursor: pointer;
  font-size: smaller;
}

.social > a {
  text-decoration: none;
  color: inherit;
  padding: 0.25rem;
  cursor: pointer;
}
</style>

<style>
.vue-typer .custom.char {
  color: #9e3f5a;
  font-weight: 900;
}

.vue-typer .custom.caret {
  width: 10px;
  background-color: #9e3f5a;
}
</style>
