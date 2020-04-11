Dependencies
npm i express nodemon graphql express-graphql mongoose cors --save

Example with relations (GraphList) colention

query($id: ID) {
  director(id: $id) {
    id
    name
  	movies {
      name
    }
  }
}

query variables
{
    "id": "1"
}

==================================================================
query {
  directors {
    name
    age
  }
}