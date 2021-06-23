module.exports = function(api) {
  api.session = api.createReactiveObject({    
    reactive: {
      session: ['session', 'currentSession']
    },
    computed: {
      loggedIn() {
        return this.session && !!this.session.user
      },
      roles() {
        return (this.session && this.session.roles) || []
      }
    },
    watch: {
      session(s) {
        console.log("API SESSION CHANGE", s)
      }
    },
    reactivePreFetch() {
      return [
        { what: ['session', 'currentSession'] }
      ]
    },
    beforeCreate() {
      console.log("SESS V BEFORE CREATE")
    },
    created() {
      console.log("SESS V CREATED")
    }
  })
  api.preFetchComponents.push(api.session)
  api.globals.$session = api.session
}
