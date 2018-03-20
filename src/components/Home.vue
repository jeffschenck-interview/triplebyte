<template>
  <div class="home">
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">TripleByte Interview</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <p>Am I hired yet? <strong>{{ isHired ? 'Yes' : 'No' }}</strong></p>
        <p><button class="button is-primary" @click="hire()">Hire Me</button></p>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapState('interviews', ['isHired']),
  },
  methods: {
    hire () {
      this.$store.dispatch('interviews/updateIsHired', true)
    },
  },
}
</script>
