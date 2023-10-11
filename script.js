let userPromise = new Promise( (resolve, reject) => {
    setTimeout( () => {
        let userRequest = confirm( `Do you want to get money;` );
        userRequest ? resolve() : reject()
    }, 1000 );
} )


userPromise.then(
    function () {
        let resultAmount = prompt( `Enter amount` );
        while(resultAmount===null||resultAmount===``) {resultAmount=prompt( `Enter amount` )}
        console.log(`resolved`)
        return  resultAmount
    },
    function () {
       let language= prompt( "Choose language for info: Ukrainian, German, English" );
        while(language===null||language===``) {
            language=prompt( "Choose language for info: Ukrainian, German, English");
        }
       console.log(`Rejected`);
       return Promise.reject(language);
    }
)
    .then(
        function (resultAmount) {
            let currency = prompt( "Choose currency: USD, EUR, UAH" );
            while(currency===null||currency===``) {currency=prompt( "Choose currency: USD, EUR, UAH" )}
            console.log( `second resolve`, currency );
            return `${ resultAmount } ${ currency }`;
        },
        function(language){ let emailData=prompt(`Enter email`);
            while(emailData===null||emailData===``) {emailData=prompt( `Enter email` )}
            console.log(`second reject`);
          return Promise.reject(`${emailData}in${language}`);
        }
    )
    .then(
        function (finalValue) {
            console.log( `Take ${ finalValue }  please` );
        },

        function(rejektstring) {
            console.log(`Information about the account was sent to the ${rejektstring}` )
        }

    )
    .then(
        function(){console.log("Goodbye and have a good day!")
        },
    )

console.log( userPromise );