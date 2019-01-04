<template>
  <div>
    <particles class="particles" />
    <center>
      <div class="inner">
        <p>
          <span class="accent">Hey there.</span>
          I love translating ideas and visions into prototypes and products using my skills as a manager, developer and a human being.
        </p>
        <p>
          I mainly work with
          <span class="light-accent">node</span>, <span class="light-accent">django</span>, <span class="light-accent">react</span> and <span class="light-accent">vue</span>
          but strongly believe that every project deserves a technology stack based on a proper evaluation of all its requirements.
        </p>
        <p>
          When I am not jogging, socializing or cooking, I love to discover new technologies and products.
          My latest discoveries are <span class="light-accent">zeit.co</span> and <span class="light-accent">TensorFlow</span>.
        </p>
        <p>
          My latest projects I worked for are <a href="https://rheumafit.ch">rheumafit.ch</a>,
          an application for people with Morbus Bechterews disease,
          and <a href="https://www.swissnoso.ch/fileadmin/swissnoso/Dokumente/5_Forschung_und_Entwicklung/4_Bedarfsabklaerung_18/180305_Factsheet_Modul_Clean_Care_Monitor.pdf">Clean Care Monitor</a>,
          a process audit and validation application for health care.
        </p>
        <p>
          You can find my <a href="https://cv.eigenmannmartin.ch">CV</a> on <a href="https://github.com/eigenmannmartin/CV">github</a>.
        </p>
      </div>
    </center>
  </div>
</template>

<script>
  import particles from '~/components/particles'
  import center from '~/components/center'

  export default {
    components: {
      center,
      particles
    }
  }
</script>

<style scoped>
  .inner {
    /* Force div to be in foreground */
    position: relative;
  }

  .particles {
    /* fill entire background with particles */
    width: 100%;
    height: 99vh;
    margin-bottom: -99vh;
  }

  /* Elements */
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
    margin-top: 0.5rem;
  }
</style>
