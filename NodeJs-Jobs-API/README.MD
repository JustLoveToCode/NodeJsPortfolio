#### Setup

```bash
npm install && npm start
```

#### Database Connection

1. Import connect.js
2. Invoke in start()
3. Setup .env in the root
4. Add MONGO_URI with correct value

#### Routers

- auth.js
- jobs.js

#### User Model

Email Validation Regex

```regex
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
```

#### Register User

- Validate - name, email, password - with Mongoose
- Hash Password (with bcryptjs)
- Save User
- Generate Token
- Send Response with Token

#### Login User

- Validate - email, password - in controller
- If email or password is missing, throw BadRequestError
- Find User
- Compare Passwords
- If no user or password does not match, throw UnauthenticatedError
- If correct, generate Token
- Send Response with Token

#### Mongoose Errors

- Validation Errors
- Duplicate (Email)
- Cast Error

#### Security

- helmet
- cors
- xss-clean
- express-rate-limit

Swagger UI

```yaml
/jobs/{id}:
  parameters:
    - in: path
      name: id
      schema:
        type: string
      required: true
      description: the job id
```


#### Additional notes:
This is the Jobs API where it will allowed you to register, login,
create new job, update job and delete the job.

#### Authorization Bearer Token:
There is also additional features of the 
Authorization bearer token:
Type: Bearer Token  {{accessToken}}
This {{accessToken}} is created when you create the new user.

#### Video Demonstration of the Postman:
For example: in the video:
{{URL}} have already been created with the Postman API Dev Environment:
Variable   type          initial value                current value
URL        default       http://localhost:5000/api/v1 http://localhost:5000/api/v1
URL_3000   default       http://localhost:3000/api/v1 http://localhost:3000/api/v1


