const axios = require("axios");
const { URL, URLSearchParams } = require('url');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const url = new URL("https://api.hatchways.io/assessment/solution/posts");
// const newQuery = new URLSearchParams(data);

module.exports = {
    remoteApiTag: async (data) => {
        try {
            url.search = new URLSearchParams(data);
            const retData = await axios.get(url.toString());
            return retData;
        } catch (err) {
            throw new Error(err);
        }
    },
    remoteApiTags: async (data) => {
        try {
            const { tags, sortBy, direction } = data;
            let tagPosts = tags.map((tag, i) => {
                url.search = new URLSearchParams({
                    tags: tag,
                    sortBy: sortBy,
                    direction: direction
                });
                return axios.get(url.toString());
            });
            const [...results] = await axios.all([ ...tagPosts ]);
            let postTable = {};
            let returnPosts = [];

            for (let x=0; x < results.length; x++) {
                let postByTag = results[x].data.posts;
                for (let y=0; y < postByTag.length; y++) {
                    postTable[postByTag[y].id] = postByTag[y];
                }
            }

            for (let val in postTable) {
                returnPosts.push(postTable[val]);
            }

            if (direction === "asc") {
                returnPosts = returnPosts.sort((x, y) => (y[sortBy] < x[sortBy]) ? 1 : -1);
            } else {
                returnPosts = returnPosts.sort((x, y) => (y[sortBy] > x[sortBy]) ? 1 : -1);
            }

            return {
                data: {
                    posts: returnPosts
                }
            };
        } catch (err) {
            throw new Error(err);
        }
    }
}