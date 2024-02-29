import { defineStore } from 'pinia'

export let useTeamStore = defineStore('team', {
  // data
  state: () => ({
    name: '',
    spots: 0,
    members: []
  }),

  actions: {
    // can also be asynchronously action
    fill() {
      import('@/team.json').then((result) => {
        // let data = result.default

        // // fill field by field
        // this.name = data.name
        // this.spots = data.spots
        // this.members = data.members

        // // slightly different way
        // this.$patch({
        //   name: data.name,
        //   spots: data.spots,
        //   members: data.members
        // })

        // replace the entire state object
        this.$state = result.default
      })
    },

    grow(newSpots) {
      this.spots = newSpots
    }
  },

  getters: {
    spotsRemaining() {
      return this.spots - this.members.length
    }
  }
})
