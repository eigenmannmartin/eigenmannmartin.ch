<template>
  <div class="skills">
    <center>
      <div>
        <ul class="list">
          <li class="list-item" v-for="skill in skills" v-bind:key="skill[0]">
            <div class="skill">{{ skill[0] }}</div>
            <div class="slider">
              <span class="icon-circle-empty" :style="{paddingLeft: skill[1] -15 + '%'}"/>
            </div>
          </li>
        </ul>
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
  data() {
    return {
      skills: [
        ["JavaScript ES6", 100],
        ["NodeJS", 80],
        ["React & Redux", 90],
        ["Vue & Vuex", 100],
        //["Python", 70],
        ["Django & DRF", 90],
        ["MongoDB", 60],
        ["PostgeSQL", 80],
        //["HTML & CSS", 50],
        //["PHP", 50],
        //["Yii", 40],
        ["Docker", 70],
        ["Kubernetes", 60]
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
.list {
  padding: 0;
  width: 20rem;
}
.list-item {
  display: flex;
  padding: 0.8rem 0.8rem 0.7rem 0.8rem;
  margin: 0.2rem 0;
  list-style: none;
  border-radius: 5px;
  transition: all 0.25s;

  &:hover {
    background-color: #9e3f5a16;
  }
}
.skill {
  flex: 1;
}
.slider {
  width: 8rem;
  height: 11px;
  border-bottom: 1px dashed #9e3f5a66;
}
</style>
