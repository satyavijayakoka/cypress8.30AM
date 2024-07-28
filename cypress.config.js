const { defineConfig } = require("cypress");

module.exports = defineConfig({

  chromeWebSecurity : false, // for multitab and multi-window
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      // task 1 (file cyTask.cy.js)
      //on('task',taskname(){function def})
      on('task',{
        print(){
          console.log('i am learning cypress')
          return null
        }
      })
      // ------------------ task2 ----------------------
      on('task',{
        myLog(msg){
          console.log(msg)
          return null
        }
      })

      // --------------- task3 ----------------------------
      on('task',{
        addition({a,b}){
          console.log(a+b)
          return a+b
        }
      })
    },
  },
});
