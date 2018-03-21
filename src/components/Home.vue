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
        <div class="columns">
          <column
            v-for="(column, index) in columns"
            :key="column.id"
            :column="column"
            :first-column="index === 0"
            :last-column="index === columns.length - 1"
            @addcard="addCardToColumn($event)"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Column from '@/components/Column'

export default {
  name: 'Home',
  components: {
    Column,
  },
  computed: {
    ...mapState('tasks', ['columns']),
  },
}
</script>
