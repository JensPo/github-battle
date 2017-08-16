//includes all api requests

var axios = require("axios");

//export api call methods
module.exports = {

  fetchPopularRepos: function(language) {
    var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');

    //returns a promise
    return axios.get(encodedURI)
      .then(function (response) {
        return response.data.items;
      });
  }
};
