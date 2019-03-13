<template>
  <div class="projects">
    <center>
      <div class="project">
        <div class="duration">
          <div class="text">
            <div class="time-item">2017</div>&#xb7;
            <div class="time-item">2018</div>&#xb7;
            <div class="time-item">2019</div>
          </div>
        </div>
        <h3>Rheumafit.ch</h3>
        <div>
          <div class="stack">
            <span class="icon-menu"/>Vue, Django, Vimeo & Heroku
          </div>
          <div class="location">
            <span class="icon-location"/>Bechterew Schweiz
          </div>
        </div>
        <p>
          This platform provides a large variety of physio therapeutic exercises for
          patients with Bechterew’s disease and aims to improve the health and mobility
          of the affected.
        </p>
        <p>
          During one month of my civil service I assisted in defining requirements and
          appearance and implemented the platform according to the specifications. Since
          then, I am tasked with maintaining and improving the platform.
        </p>
      </div>

      <div class="project">
        <div class="duration">
          <div class="text">
            <div class="time-item">2017</div>&#xb7;
            <div class="time-item">2018</div>&#xb7;
            <div class="time-item">2019</div>
          </div>
        </div>
        <h3>Clean Care Monitor</h3>
        <div>
          <div class="stack">
            <span class="icon-menu"/>React, GraphQL, KnexJS & PostgeSQL
          </div>
          <div class="location">
            <span class="icon-location"/>KSSG
          </div>
        </div>
        <p>
          In Order to find and analyze causes of postoperative infection it was necessary
          to build a web based mobile app to allow standardized auditing of any kind of
          workflow before and during a surgery. Intensive requirement engineering
          beforehand, extensive testing and analyzing user interactions with the app
          where required to verify its applicability.
        </p>
        <p>
          I was able to demonstrate that a rebuild of the application with a streamlined
          architecture and fewer dependencies meets more (future) requirements and is
          easier to maintain while still holding all deadlines.
        </p>
      </div>

      <div class="project">
        <div class="duration">
          <div class="text">
            <div class="time-item">2016</div>&#xb7;
            <div class="time-item">2017</div>
          </div>
        </div>
        <h3>Guidelines.ch</h3>
        <div>
          <div class="stack">
            <span class="icon-menu"/>PHP, Yii, MS SQL, Bootstrap
          </div>
          <div class="location">
            <span class="icon-location"/>KSSG
          </div>
        </div>
        <p>
          Medicine is not less fast living than IT. To prevent mistakes in guidelines
          being used, the platform offers a sophisticated review and approval process
          to ensure all instructions are up-to-date.
          The intelligent search and cross link capabilities as well as the mobile app
          ensure that the most important guidelines can be accessed withing seconds.
        </p>
        <p>
          I maintained and improved legacy code as well as designing and implementing
          a rewrite of the entire platform, whilst changing the tech stack.
        </p>
      </div>

      <div class="project">
        <div class="duration">
          <div class="text">
            <div class="time-item">2011</div>&#xb7;
            <div class="time-item">2012</div>&#xb7;
            <div class="time-item">2013</div>&#xb7;
            <div class="time-item">2014</div>
          </div>
        </div>
        <h3>SAP Go-Live</h3>
        <div>
          <div class="stack">
            <span class="icon-menu"/>SAP, ABAP, SmartForms, LSMW
          </div>
          <div class="location">
            <span class="icon-location"/>Loepfe Brothers
          </div>
        </div>
        <p>Migration from AS400 to SAP is certainly not a small task. With only one year of preparation is very important to make sure that all stake holders are on board and all requirements are double-checked.</p>
        <p>I was tasked to gather requirements for various business processes and to implement them in cooperation with external specialists. This also included data migration, adaptation of forms and programming of custom transactions.</p>
      </div>
    </center>
  </div>
</template>

<script>
import center from "~/components/center";

export default {
  components: {
    center
  },
  transition: {
    name: "page"
  }
};
</script>


<style lang="scss" scoped>
.projects {
  .duration {
    position: absolute;
    margin-top: -20px;
    margin-left: -10px;
    transform: rotate(-90deg);
    transform-origin: bottom left;

    .text {
      transform: translate(-100%, -90%);
      color: #9e3f5a66;
    }

    .time-item {
      display: inline-block;
      padding: 0 0.8rem 0 0.5rem;
    }
  }

  .project {
    border-left: 1px dashed #9e3f5a66;
    padding-left: 1.4rem;
    margin: 1.4rem 1.4rem 4rem;

    .stack,
    .location {
      display: inline-block;
      color: rgba(0, 0, 0, 0.4);
      font-size: 65%;
    }

    .stack {
      width: 65%;
    }
  }
}
</style>
