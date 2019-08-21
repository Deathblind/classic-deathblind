const fs = require("fs");
import { fetchPosts } from "./src/wordpress/posts/posts.http";
import { fetchAuthors } from "./src/wordpress/authors/authors.http";

const writeFiles = async () => {
  const postData = JSON.stringify(await fetchPosts().toPromise());
  const authorData = JSON.stringify(await fetchAuthors().toPromise());

  fs.writeFile(
    "./src/wordpress/posts/posts.initial-state.json",
    postData,
    "utf8",
    function(err) {
      if (err) {
        throw err;
      }
    }
  );

  fs.writeFile(
    "./src/wordpress/authors/authors.initial-state.json",
    authorData,
    "utf8",
    function(err) {
      if (err) {
        throw err;
      }
    }
  );
};

writeFiles();
