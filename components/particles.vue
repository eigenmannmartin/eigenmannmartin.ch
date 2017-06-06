<template>
  <div id="particles-js" />
</template>

<script>
  export default {
    mounted () {
      // import particle.js only on client-side
      require('particles.js')
      this.$nextTick(this.initParticleJS)
    },
    methods: {
      initParticleJS () {
        particlesJS('particles-js', {
          "particles": {
            "number": {
              // number of particles
              "value": 80,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": '#dedede'
            },
            "shape": {
              // circle, edge, triangle, polygon, star, image
              "type": 'circle',
              "stroke": {
                "width": 0,
                "color": "#192231"
              },
              "polygon": {
                "nb_sides": 5
              }
            },
            "opacity": {
              // Opacity of particles
              "value": 0.7,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              // Size of particles
              "value": 4,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              // Configuration of connecting lines
              "enable": true,
              "distance": 150,
              "color": '#dedede',
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              // Speed of particles
              "speed": 3,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": 'grab' // "grab", "repulse", "bubble"
              },
              "onclick": {
                "enable": true,
                "mode": 'push' // "push", "remove", "repulse", "bubble"
              },
              "onresize": {

                "enable": true,
                "density_auto": true,
                "density_area": 400

              }
            },
            "modes": {
              "grab": {
                "distance": 140,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        });
      }

    }
  }
</script>
