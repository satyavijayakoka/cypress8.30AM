const { defineConfig } = require("cypress");

module.exports = defineConfig({

    e2e: {
        baseUrl:'https://practice.automationtesting.in/my-account/'

    },
    env:{
        uid:'prodTesting@gmail.com',
        pw:'Satya@123'

    }
})