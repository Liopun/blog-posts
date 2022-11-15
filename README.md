# blog-posts-assessment

![Description](https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/instructions/b-3/Back-end%20Assessment%20-%20Blog%20Posts-A9EKAPTAF5B6DDJ12W3K.pdf)


## Features

- An/api/posts route that handles the following query parameters:
    - tags (mandatory) : any number of comma-separated strings
    - sortBy (optional) : one of “id”, “reads”, “likes”, “popularity” defaults to "id"
    - direction (optional) : one of “asc”, “desc”, defaults to “asc"
- Error handling:  
    - Return an error message if: 
        - Tags parameter is missing 
        - sortBy or direction has an invalid value
- Tests written in Jest
- API caching

### Running the app and tests
```bash
    npm install
    npm run dev --- for dev env
    npm run start --- for prod env
    npm run test --- for testing
```