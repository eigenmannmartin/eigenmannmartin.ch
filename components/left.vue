<template>
  <section class="root">
    <div class="inner">
      <h3>Hi. I'm <span class="accent">Martin</span></h3>
      <p v-if="showTyper">
        <vue-typer
          :text='["Developer", "Perfectionist", "Entrepreneur", "Friend"]'
          :shuffle='false'
          erase-style='backspace'
          :erase-delay='50'
          initial-action='typing'
          :pre-type-delay='1000'
          caret-animation='smooth'
          initialAction='erasing'
        />
        <br />
        working at <a class="workplace" href="https://www.imaginecargo.com/">ImagineCargo</a>
      </p>
      <p class="social">
        <a href="https://linkedin.com/in/eigenmannmartin"><span class="icon-linkedin"/></a>
        <a href="https://github.com/eigenmannmartin"><span class="icon-github-circled"/></a>
        <a href="https://twitter.com/eigenmannmartin"><span class="icon-twitter"/></a>
        <a href="https://blog.eigenmannmartin.ch" class="blogLink">Blog</a>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      showTyper: false
    }
  },
  mounted () {
    // showTyper will only be set to true on the client. This keeps the DOM-tree in sync.
    this.showTyper = true
  }
}
</script>

<style scoped>
.root {
  /* Do not stick it all the way to the bottom */
  height: 90%;

  /* Cross-browser display: flex; justify-content: center; */
  display: table;
  margin: 0 auto;
}

.inner {
  /* Cross-browser display: flex; self-align: flex-end; */
  display: table-cell;
  vertical-align: bottom;

  text-align: center;

  /* Font coloring */
  color: #E9E9FF;

  /* Spacing for text wrap */
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
  color: #a3f1ff;
  font-weight: 900;
}

.vue-typer .custom.caret {
  width: 10px;
  background-color: #a3f1ff;
}

.blogLink {
  font-weight: bold;
  padding-left: 3px;
}
</style>
