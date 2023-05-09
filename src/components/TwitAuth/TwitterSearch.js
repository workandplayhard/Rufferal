import React, { useState } from "react";
import needle from "needle";

const TwitterSearch = () => {
  const [taskMessage, setTaskMessage] = useState("");
  const [tweets, setTweets] = useState([]);

  const handleSearch = async () => {
    const params = {
      "query": `${taskMessage} lang:en from:twitterdev`,
      "tweet.fields": "created_at",
      "user.fields": "username",
      "max_results": 100,
    };

    const res = await needle(
      "get",
      "https://api.twitter.com/2/tweets/search/recent",
      params,
      {
        headers: {
          "User-Agent": "v2RecentSearchJS",
          "authorization": `Bearer ${process.env.BEARER_TOKEN}`,
        },
      }
    );

    if (res.body) {
      setTweets(res.body.data);
    } else {
      throw new Error("Unsuccessful request");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskMessage}
        onChange={(e) => setTaskMessage(e.target.value)}
      />
      <button onClick={handleSearch}>Search Twitter</button>

      {tweets.length > 0 ? (
        <ul>
          {tweets.map((tweet) => (
            <li key={tweet.id}>
              <p>{tweet.text}</p>
              <p>
                By {tweet.author_id} on {tweet.created_at}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tweets found.</p>
      )}
    </div>
  );
};

export default TwitterSearch;
