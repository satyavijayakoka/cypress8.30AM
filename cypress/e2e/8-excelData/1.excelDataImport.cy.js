



//========================================================================
// 4. fallowing steps are as given in youtube video  and link also refered
//    ( https://www.youtube.com/watch?v=_QIJ9JLBYB4)
//    (https://www.mikefettes.com/blog/parsing-xlsx-files-using-cypress)
    
// 5. npm install node-xlsx --save-dev 


// 7. support/ commands.js 
//     (copy below code at the last of file)
// -----------------------------------------------------------------
//     Cypress.Commands.add('parseXlsx', (inputFile) => {
//          return cy.task('parseXlsx' , { filePath: inputFile})
//     })
// ------------------------------------------------------------------

// 8.cypress.config.js    
//     
// ------------------------------------------------------------------
// const { defineConfig } = require("cypress");
// //const { reject } = require("cypress/types/bluebird");
// const xlsx = require('node-xlsx').default;
// const fs = require('fs');
// const path = require('path');
// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//       on("task", { parseXlsx({ filePath }){
//           return new Promise((resolve, reject) => {
//             try{
//               const jsonData = xlsx.parse(fs.readFileSync(filePath))
//               resolve(jsonData);
//               } catch(e){
//                 reject(e);
//               }
//         });
//       }})
//     }
//   }
// });