# Amazon Service Codes Übersicht

Alexa Skill -> Lampda1 -> Datenbank -> Lampda2 -> Website (Angular Project im Repository curi-LAB)

##Code

###Lampda1

`'use strict';`

`const Alexa = require('alexa-sdk');`
`const AWS = require('aws-sdk');`

`const APP_ID = undefined;`

`var patientName;` 
`var patientAktiv = false;`
`var docClient = new AWS.DynamoDB.DocumentClient();`

`const handlers = {`

​	 `'LaunchRequest': function () {`
        	`this.emit(':ask','Willkommen bei curi Lab. Bei wem bist du gerade?')`
    	`},`
   	 `'choosePatient': function () {`
        	`patientName = this.event.request.intent.slots.patient.value;`

​		 `patientAktiv = true;`
   		 `this.emit(':ask', "Der Aktuelle Betreute ist: " + patientName + " .Was darf ich notieren?" 					 `

​		`);},`
		`'stuhlgangAufzeichnenPos': function () {`
        		`var text = "Peter hatte Stuhlgang.";`
        		`var params;`
                	`params = {`
                    		`TableName: "testTable",`
                    		`Key:{`
                        		`"PatientName": patientName,`
                    		`},`
                    		`UpdateExpression: "set Protocol = :newProtocolText, BowelMovment =`

​				` :newBowelMovment",`
                    		`ExpressionAttributeValues: {`
                       			`":newProtocolText" : text,`
                       			`":newBowelMovment" : true`
                    		`}`
               	 `};`
            	`docClient.update(params, (() => {`
            		`this.emit(':ask', "Du hast folgendes gespeichert. " + text);`
            	`}));`
	`},`

​    `'stuhlgangAufzeichnenNeg': function () {`
       	 `var text = "Peter hatte keinen Stuhlgang.";`
       	 `var params;`
    	`params = {`
   		`TableName: "testTable",`
             	`Key:{`
              		`"PatientName": patientName,`
  		`},`
            	`UpdateExpression: "set Protocol = :newProtocolText, BowelMovment = :newBowelMovment",`
           	`ExpressionAttributeValues: {`
             		`":newProtocolText" : text,`
                  	`":newBowelMovment" : false`
         	`}`
	`};` 
    	`docClient.update(params, (() => {`
    		`this.emit(':ask', "Du hast folgendes gespeichert. " + text);`
  	`}));`
`},`

`'medikamenteGenommenPos': function () {`
	`var text = "Peter hat seine Medikamente bekommen.";`
        `var params;`

​    	`params = {`
     		`TableName: "testTable",`
    		`Key:{`
             		`"PatientName": patientName,`
		`},`
                `UpdateExpression: "set Protocol = :newProtocolText, MedicalIntake = :newMedicalIntake",`
                `ExpressionAttributeValues: {`
             		`":newProtocolText" : text,`
                      	 `":newMedicalIntake" : true`
         	`}`
	`};`
 	`docClient.update(params, (() => {`
     		`this.emit(':ask', "Du hast folgendes gespeichert. " + text);`
	`}));`
`},`

`'medikamenteGenommenNeg': function () {`
	`var text = "Patient hat seine Medikamente nicht genommen.";`
        `var params;`

​     	`params = {`
    		`TableName: "testTable",`
              		`Key:{`
                  		`"PatientName": patientName,`
                    	`},`
                    	`UpdateExpression: "set Protocol = :newProtocolText, MedicalIntake = :newMedicalIntake",`

​               		`ExpressionAttributeValues: {`
                       		`":newProtocolText" : text,`
                       		`":newMedicalIntake" : false`
                   	 `}`
       		`};` 
            	`docClient.update(params, (() => {`
            		`this.emit(':ask', "Du hast folgendes gespeichert. " + text);`
            		`}));`
        	`},`

​		`'AMAZON.HelpIntent': function () {`
           		`this.emit(':tell', 'Hilf dir selbst.' );`

​		`},`
		`'AMAZON.CancelIntent': function () {`
    			`this.emit(':tell', 'Heute ist nicht alle Tage. Ich komme wieder keine Frage!' );`

​		`},`
		`'AMAZON.StopIntent': function () {`
            		`this.emit(':tell', 'Heute ist nicht alle Tage. Ich komme wieder keine Frage!' );`

​		`},`

​	`};`

`exports.handler = function (event, context, callback) {`
	`const alexa = Alexa.handler(event, context, callback);`
    	`alexa.APP_ID = APP_ID;`
    	`alexa.registerHandlers(handlers);`
    	`alexa.execute();`
`};`



### Lampda2

`var AWS = require ("aws-sdk");`

`var dynamodb = new AWS.DynamoDB();`
`var docClient = new AWS.DynamoDB.DocumentClient();`
`var searchedName = "peter";`

`var params = {`
	`TableName: "testTable",`
    	`Key: {`
        	`"PatientName": searchedName`
    	`}`
`};`

``exports.handler = (event, context, callback) => {`

 	`docClient.get(params, function(err, data) {`
       	 	`if (err) {`
            		`return console.error("keine Protokolldaten empfangen. ");`
        	`}`
        	`var payload = JSON.stringify(data, null, 2);`
        	`var obj = JSON.parse(payload);`
     		`callback(null, obj);`

​	`});`

`};`