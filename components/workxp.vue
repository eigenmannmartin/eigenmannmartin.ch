<template>
  <div class="works">
    <center>
      <div class="work">
        <h3>Tech Lead</h3>
        <div>
          <div class="duration">
            <span class="icon-calendar"/>Feb 2018 &mdash; Ongoing
          </div>
          <div class="location">
            <span class="icon-location"/>Imagine Cargo
          </div>
        </div>
        <p>
          <ul>
            <li>Tech lead for Panda, an extremely versatile order management and delivery
          planning/optimizing platform for the logistics industry
        </li><li>Making high-level design choices and defining technical standards, including
          coding standards, tools and platforms.
          </li><li>Supervision and coordination of external software developers
          </li><li>Lead full stack developer for Samba, a highly flexible website plugin for
          settling and managing deliveries or pickup
          </li></ul>
        </p>
      </div>

      <div class="work">
        <h3>Full stack developer</h3>
        <div>
          <div class="duration">
            <span class="icon-calendar"/>Jan 2016 &mdash; Jan 2018
          </div>
          <div class="location">
            <span class="icon-location"/>Kantonsspital St.Gallen
          </div>
        </div>
        <p>
          <ul>
            <li>Design, architecture and project planning
              </li>
              <li>Lead full stack developer for Clean Care Monitor, a process audit and
validation application for health care
</li>
<li>Contributor to guidelines.ch, responsible for rewriting the stack including
design, architecture and UX</li></ul>
        </p>
      </div>

      <div class="work">
        <h3>SAP Consultant / IT Consultant</h3>
        <div>
          <div class="duration">
            <span class="icon-calendar"/>Apr 2011 &mdash; Oct 2015
          </div>
          <div class="location">
            <span class="icon-location"/>Loepfe Brothers Ltd.
          </div>
        </div>
        <p>
          <ul>
            <li>Project stream lead during SAP implementation and rollout</li>
              <li>Supervised and enhanced network security and data protection
</li></ul>
        </p>
      </div>

    </center>
  </div>
</template>

<script>
import center from "~/components/center";

export default {
  components: {
    center
  }
};
</script>


<style lang="scss" scoped>
.works {

  .work {
    margin: 1.4rem 1.4rem 4rem;

    .duration,
    .location {
      display: inline-block;
      color: rgba(0, 0, 0, 0.4);
      font-size: 65%;
    }

    .duration {
      width: 55%;
    }

    ul {
      list-style: none;
      padding: 0;
    }

  }
}
</style>
