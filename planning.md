# DevTinder

A tinder like platform with a twist, here coders can make new programmers friend with releveant skill or different skill. A platform where they can talk about project, share own Tech Stack, work on project

- To start a new project, before writing code first create planning, flow of project, tech stack, service structure and other things which helps very much through the whole project.

# Plannig

1. Create an account
2. Login
3. Update your profile
4. Feed Page - explore
5. Send Connection Request
6. See our matches
7. See the request we've sent or received

# Tech Planning

- Two Microservices

1. Frontend - ReactJS

2. Backend - NodeJS, MongoDB

# LLD - Low Level Design

## Database Connection

- User Connection- firstname, lastname, age, gender, profile, username, gender, etc

- Connection Request - From userId, To userId, status = PENDING

- STATUS = Pending (Accepted, Rejected), Ignored

## API Design

- REST API - GET, POST (PUT, PATCH), DELETE

- POST: /signup
- POST: /login
- GET: /profile
- POST: /profile
- PATCH: /profile
- DELETE: /profile
- POST: /sendRequest - ingore/interset
- POST: /reviewRequest - accept/ignore
- GET: /requests
- GET: /connections
