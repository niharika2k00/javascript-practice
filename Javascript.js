//  OnChange Event          https://www.w3schools.com/jsref/event_onchange.asp
<input type="text" onchange="myFunction()" />
object.onchange = function(){ ...... };
object.addEventListener("change", () => { ..... });


//  OnKeyPress Event
<input type="text" onkeypress="myFunction()" />
object.onkeypress  = function(){ ...... };
object.addEventListener("keypress", () => { ..... });

/*
  -------------------------
         CASE STYLES
  -------------------------
       * camelCase
       * PascalCase
       * snake_case
       * kebab-case


  ------------------------------
       CURRENT DATE & TIME
  ------------------------------
        let currTime = new Date(Date.now());

        currTime.toDateString();        // 'Fri Jan 28 2022'
        currTime.toLocaleTimeString()   // '12:24:57 PM'
        currTime.toLocaleDateString();  // '1/28/2022'


            -------------------- ||   javascript Tweeks   || --------------------

 const text = '["Ford", "BMW", "Audi", "Fiat"]';    --->   JSON.parse() to convert text/string into a JavaScript Array / Object
 const myArr = JSON.parse(text);

 var params = JSON.parse(JSON.stringify(defaultParams));

 JSON.stringify(arr / obj)       -->   When data is sent to a server it must be sent as a STRING.
                                       JSON.stringify() method converts JavaScript data to a JSON-formatted string.

 data.image?.trim() || defaultBannerImage

  // APPEND FIELDS IN OBJECT
  _____________________________

     var person = { name: 'Curl', age: 23 };

        person.sex = 'Female';
        person['sex'] = 'Female';

   Spread Operator :
             var prop = { sex: 'Female' };
             var newObj = {...person, ...prop};


   const array = [1, 2, 3, 4];

const map = array.map((x, index) => {
  console.log(index);
  return x + index;
});

*/