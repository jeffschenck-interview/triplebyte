import _ from 'lodash'

export default {
  namespaced: true,
  state: {
    columns: [
      {
        id: 1,
        name: 'One',
        backgroundColor: '#8e6e95',
        cards: [
          'text 1-A',
          'text 1-B',
          'text 1-C',
        ],
      },
      {
        id: 2,
        name: 'Two',
        backgroundColor: '#39a59c',
        cards: [
          'text 2-A',
          'text 2-B',
          'text 2-C',
        ],
      },
      {
        id: 3,
        name: 'Three',
        backgroundColor: '#344759',
        cards: [
          'text 3-A',
          'text 3-B',
          'text 3-C',
        ],
      },
      {
        id: 4,
        name: 'Four',
        backgroundColor: '#e8741e',
        cards: [
          'text 4-A',
          'text 4-B',
          'text 4-C',
        ],
      },
    ],
  },
  actions: {
    addCard ({commit}, {columnId, text}) {
      commit('addCard', {columnId, text})
    },
    moveCard ({commit}, {columnId, cardIndex, columnDelta}) {
      commit('moveCard', {columnId, cardIndex, columnDelta})
    },
  },
  mutations: {
    addCard (state, {columnId, text}) {
      const column = _.find(state.columns, {id: columnId})
      column.cards.push(text)
    },
    moveCard (state, {columnId, cardIndex, columnDelta}) {
      const initialColumnIndex = _.findIndex(state.columns, {id: columnId})
      const initialColumnCards = state.columns[initialColumnIndex].cards
      const newColumnIndex = initialColumnIndex + columnDelta
      const newColumnCards = state.columns[newColumnIndex].cards
      const card = initialColumnCards[cardIndex]
      state.columns[initialColumnIndex].cards = [
        ...initialColumnCards.slice(0, cardIndex),
        ...initialColumnCards.slice(cardIndex + 1),
      ]
      newColumnCards.push(card)
    },
  },
}
