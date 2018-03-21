<template>
  <p>
    <button v-if="canMoveLeft" class="button is-text" @click="moveCard(-1)">&lt;</button>
    <span>{{ text }}</span>
    <button v-if="canMoveRight" class="button is-text" @click="moveCard(1)">&gt;</button>
  </p>
</template>

<script>
export default {
  name: 'Card',
  props: {
    text: {
      type: String,
      required: true,
    },
    canMoveLeft: {
      type: Boolean,
      required: true,
    },
    canMoveRight: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    moveCard (columnDelta) {
      this.$emit('movecard', {
        columnDelta,
      })
    },
  },
}
</script>
