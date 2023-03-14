# Sports Complex Manager

This project was developed using NestJS, GraphQL, and Mongoose, and it's intention is to serve as a a server for sports program management to help a sports complex manage their sports classes. 

The sports complex offers various sports classes, including baseball, basketball, football, boxing, cycling, fitness, golf, running, swimming, tennis, triathlon, and volleyball. Each sport has classes for children, youth, young adults, and adults, which are held three times a week. Users can enroll in classes, with a maximum of two sports per user.

The project includes the following features:
- User registration with email verification (SendGrid) and login.
- Role-based authorization for sport and user management.
- Ability for users to filter and retrieve all sports classes.
- Ability for users to retrieve details of each sports class (id, name, age level, duration, week schedule, description, enrolled users).
- Ability for users to enroll in a maximum of two sports classes and unenroll.
- Maximum of ten users can be enrolled in a single class time slot.
- Ability for admin users to create and update all sports classes.
- Ability for admin users to manage users.
- Ability for users to rate and leave comments for each sports class anonymously, with only admins having access to it. 
- Ability for admins to retrieve the average rating for each sports class.

## Prerequisites for running the project
Rename **example.env** file into **.env** and replace the following:
```
    SENDGRID_USERNAME=your_sendgrid_email
    SENDGRID_PASSWORD=your_sendgrid_password
    SENDGRID_API_KEY=your_sendgrid_api_key
```

## Running the project
You have 2 options, running the project using Docker, or running the project locally.
### Running with Docker
In VS Code terminal execute the following command
```
docker-compose up
```
### Running locally
1. Start Mongo DB (You need to have Mongo running on **localhost:27017**, and you need to have a **nest** database)
2. Install dependencies
    ```
    npm install
    ```
3. Start
    ```
    npm run start:dev
    ```
## Exploring the project possibilities
Exported postman collection is located in **postman_collection.json**. Feel free to import it in Postman and explore queries and mutations.
GraphQL API documentation can be found by running the project and navigating to http://localhost:3000/graphql where on the right side you can explore the "Docs".

**Be aware that you need acccess token to execute queries except register and login.**
Access token can be obtained by executing the Login mutation, which in result will return the User data, and an access token.

In Postman, token can be added to the request by going to the _Authorization_ tab for the request, choosing _Bearer Token_ and pasting the provided accessToken retrieved by the Login mutation.
In GraphQL Playground, token can be added by expanding the _HTTP Headers_ in lower left corner, and appending the following:
 ```
{
    "Authorization": "Bearer <your-token>"
}
 ```
Where you will replace _<your-token>_ with your actual authentication token.
## Project Flow
First thing you should do after starting the project is creating a new user, which you'll do by executing the Register mutation. After that you may proceed with Login mutation, which will get you your accessToken and then you may continue with other queries and mutations. 

