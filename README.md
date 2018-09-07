## Table of Contents

-- [Description of App](#description)
-- [Link to deployed version](#deloyed-version)
-- [Description of tech stack](#tech-stack)
-- [API endpoint usage](#endpoints)


## Description

When you want to adopt a cat or dog, use Petful to browse through the pets that you want to adopt! This project is a quick runthrough review of react and redux before our spaced repetition project.

## Deployed Version

You can find a live version 
https://radiant-cove-40365.herokuapp.com/

## Tech stack

The client side is created using React and redux. The server side uses node.js.

Here is a link to [server-side](https://github.com/thinkful-ei22/richard-petful-server) and [client-side](https://github.com/thinkful-ei22/richard-petful-client)

# Endpoints

Currently, there is only a get and delete endpoint implimented.
Making a GET request to https://richard-petful-app.herokuapp.com/api/cat or 
https://richard-petful-app.herokuapp.com/api/dog will get you the json data for each animal respectively. 
The implimentation of how the data is stored is using a queue with FIFO implimentation.