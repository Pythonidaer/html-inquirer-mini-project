const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: "input",
            name: "userName",
            message: "What is your full name?",
        },
        {
            type: "input",
            name: "location",
            message: "Where do you live?"
        },
        {
            type: "input",
            name: "bio",
            message: "Write a short biography about yourself: ",
        },
        {
            type: "input",
            name: "linkedinURL",
            message: "What is your LinkedIn URL?"
        },
        {
            type: "input",
            name: "githubURL",
            message: "What is your GitHub URL?"
        }
    ])
    .then((answers) => {
        const aboutUser = 
`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <title>Bio</title>
    </head>
    <body>
        <section class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 id="name" class="display-4">Name: ${answers.userName}</h1>
                <p id="location" class="lead">Location: ${answers.location}</p>
                <p id="bio" class="lead">Bio: ${answers.bio}</p>
                <ul class="list-group">
                    <li class="list-group-item">GitHub URL: ${answers.githubURL}</li>
                    <li class="list-group-item">Linkedin URL: ${answers.linkedinURL}</li>
                </ul>
            </div>
        </section>
    </body>
</html>
`

        const bioMarkup = 'bio.html';


        fs.writeFile(bioMarkup, aboutUser, (err) =>
            err ? console.log(err) : console.log('Success!')
        );

    });