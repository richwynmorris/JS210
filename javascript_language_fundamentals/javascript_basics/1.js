//The intention of the program below is to output a paragraph. Copy and paste the program into a JavaScript console 
// (e.g., from the Chrome Developer Tools), then run it. Is the output what you expected? Are there any bugs/errors?

```
const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
                ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim \
                dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum \
                ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar \
                diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum \   
                hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';

console.log(paragraph);
``` 

// Answer:
// I predict that between line 5 and line 6 we will see 3 additional spaces and a new line between the lines as the 
// when the `/`/escape key is used, if there are any spaces or characters included after its inclusion, the escape character
// becomes void and is not executed. Therefore, the the new line character will not be escaped and the additional spaces
// will be included. 

// Correct answer:
// This raises a syntax error as the additional spaces used after the escape character prevent the new line from being escaped and,
// as a result, raises an syntatical error. 


