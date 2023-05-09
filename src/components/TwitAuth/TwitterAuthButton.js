
const needle = require('needle');
const token = process.env.BEARER_TOKEN;
const endpointURL = "https://api.twitter.com/2/tweets/search/recent";

async function getTweets(taskMessage) {
  const params = {
    "query": `${taskMessage} lang:en from:twitterdev`, // Edit query to match task message
    "tweet.fields": "created_at", // Edit optional query parameters here
    "user.fields": "username", // Edit optional query parameters here
    "max_results": 100 // Edit max number of results to retrieve
  }

  const res = await needle('get', endpointURL, params, {
    headers: {
      "User-Agent": "v2RecentSearchJS",
      "authorization": `Bearer ${token}`
    }
  })

  if (res.body) {
    return res.body.data;
  } else {
    throw new Error('Unsuccessful request');
  }
}

(async () => {
  try {
    const taskMessage = "Insert task message from MongoDB schema here"; // Replace with task message from MongoDB schema
    const tweets = await getTweets(taskMessage);

    if (tweets.length > 0) {
      console.log(`User has tweeted "${taskMessage}"`);
      // Add code here to mark the user as eligible for the competition
    } else {
      console.log(`User has not tweeted "${taskMessage}"`);
      // Add code here to handle the case where the user has not tweeted the task message
    }

  } catch (e) {
    console.log(e);
    process.exit(-1);
  }

  process.exit();
})();

export default TwitterAuthButton;