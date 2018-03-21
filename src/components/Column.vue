<template>
  <div class="column">
    <h3
      class="title is-3"
      :style="{
        'background-color': column.backgroundColor,
      }"
    >
      {{ column.name }}
    </h3>
    <card
      v-for="(text, index) in column.cards"
      :key="text"
      :text="text"
      :can-move-left="!firstColumn"
      :can-move-right="!lastColumn"
      @movecard="moveCard(index, $event.columnDelta)"
    />
    <p>
      <button class="button is-text" @click="addCard()">+ Add a card</button>
    </p>
  </div>
</template>

<script>
import Card from '@/components/Card'

export default {
  name: 'Column',
  components: {
    Card,
  },
  props: {
    column: {
      type: Object,
      required: true,
    },
    firstColumn: {
      type: Boolean,
      required: true,
    },
    lastColumn: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    addCard () {
      let text = window.prompt('What task?')
      if (text) {
        this.$store.dispatch('tasks/addCard', {
          columnId: this.column.id,
          text,
        })
      }
    },
    moveCard (index, columnDelta) {
      if ((columnDelta < 0 && this.firstColumn) || (columnDelta > 0 && this.lastColumn)) {
        return
      }
      this.$store.dispatch('tasks/moveCard', {
        columnId: this.column.id,
        cardIndex: index,
        columnDelta,
      })
    },
  },
}
</script>
