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
        <title>Bio</title>
    </head>
    <body>
        <section>
            <h1>Mini Project</h1>
            <p id="name">Name: ${answers.userName}</p>
            <p id="location">Location: ${answers.location}</p>
            <p id="bio">Bio: ${answers.bio}</p>
            <p id="linkedin">Linkedin URL: ${answers.linkedinURL}</p>
            <p id="github">GitHub URL: ${answers.githubURL}</p>
        </section>
    </body>
</html>
`

        const bioMarkup = 'bio.html';


        fs.writeFile(bioMarkup, aboutUser, (err) =>
            err ? console.log(err) : console.log('Success!')
        );

    });