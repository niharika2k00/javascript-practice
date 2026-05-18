/*
A promise is an object that represents a value that will be available in the future — not right now.

fetch() inbuilt function return Promises

⭐️📌 Promise can be created → `new Promise((resolve, reject) => {...})`
⭐️📌 Promise can be resolved/handled in 2 ways → `.then().catch()  OR  async/await`

Refer notes → https://www.notion.so/Javascript-346ba2885ff28022b9bbd87d408f717f?source=copy_link#354ba2885ff2806d9e89d6b016994f6f

Promise.resolve() is a shortcut to create an already-resolved Promise instantly
*/

// ✅ Shortcut way
// Promise.resolve(value);
function fetchUser(userId) {
  return Promise.resolve({ id: userId, name: "GFG" });
}

// 📝 Long way (same thing)
// new Promise((resolve) => resolve(value));
function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    resolve({ id: userId, name: "GFG" });
  });
}

// ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
// Create promise
var sendBirthdayGift = () => {
  var giftPromise = new Promise((resolve, reject) => {
    const shouldSendGift = true;
    var giftDetails = { name: "Niharika", wish: "Happy Birthday!", gift: "dress" };

    if (shouldSendGift) resolve(giftDetails); // passing obj
    else reject("Oops! Forgot to wish.");
  });

  return giftPromise;
};

// Handle promise
sendBirthdayGift()
  .then((gift) => {
    console.log("Gift received! Thanks", gift);
  })
  .catch((err) => {
    console.log(err);
  });
// ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

// Promise Chaining
fetch("https://potterapi-fedeperin.vercel.app/en/houses")
  .then((res) => {
    console.log("Step 1 - Got response!");
    return res.json(); // passes parsed data to next
  })
  .then((data) => {
    console.log("Step 2 - Got data!", data);
    return data[0]; // passes first house to next
  })
  .then((firstHouse) => {
    console.log("Step 3 - First house:", firstHouse.house);
    return firstHouse.founder; // passes founder to next
  })
  .then((founder) => {
    console.log("Step 4 - Founder:", founder);
  })
  .catch((err) => {
    console.log("Error caught:", err); // catches error from above
  });
// ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

// fetch creates the promise
// async/await handles it
async function getHouses() {
  try {
    const response = await fetch("https://potterapi-fedeperin.vercel.app/en/houses");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const houses = await response.json();
    console.log(houses);
  } catch (err) {
    console.error("Failed:", err.message);
  }
}

getHouses();

// ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
// GET — fetch data
fetch(url);

// POST — send data (object)
fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });

// PUT — replace data
fetch(url, { method: "PUT", body: JSON.stringify(data) });

// DELETE — remove data
fetch(url, { method: "DELETE" });

// ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
// Encounter an issue, suggest various ways to solve this
// ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
function placeOrder() {
  setTimeout(() => {
    return Math.random() * 10 <= 5 ? "Bag" : "Shoe";
  }, 2000);
}

let order = placeOrder();
console.log("Order is for: " + order); // undefined ⁉️ ISSUE

// To solve issue - we need to create Promise and handle this asynchronously .then() | async/await
// Method 1:
function placeOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let item = Math.random() * 10 <= 5 ? "Bag" : "Shoe";
      resolve(item);
    }, 2000);
  });
}

placeOrder()
  .then((res) => console.log(`Order is for ${res}`))
  .catch((err) => console.log(err));

var getOrder = async () => {
  const order = await placeOrder();
  console.log("Order is for " + order); // ✅ Bag or Shoe
};
getOrder();

// https://github.com/fedeperin/potterapi
// https://potterapi-fedeperin.vercel.app/en/houses
// https://potterhead-api.vercel.app/
