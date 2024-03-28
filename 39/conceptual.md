### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  JSON Web Token is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims. 

- What is the signature portion of the JWT?  What does it do?
  The main purpose of JWT is to assure the person who sent the request is who they say they are and defines a compact and self-contained way for securely transmitting information between parties as a JSON object.

- If a JWT is intercepted, can the attacker see what's inside the payload?
  Yes, if decoded.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  The client sends the user's credentials to the server, which authenticates the user and generates a JWT containing information about the user

- Compare and contrast unit, integration and end-to-end tests.
  end to end tests helps to identify defects that may not be found in integration.

- What is a mock? What are some things you would mock?
  A mock is a simulated object or function that mimics the behavior of a real object or function. You might mock APIs, Database, etc.

- What is continuous integration?
  continuous integration is the practice of merging all developers' working copies to a shared mainline several times a day.

- What is an environment variable and what are they used for?
  environment variable is a user-definable value that can affect the way running processes will behave on a computer. Used to store app secrets and configuration data

- What is TDD? What are some benefits and drawbacks?
  Test-driven development is a software development process relying on software requirements being converted to test cases before software is fully developed.
  
  Pros                                    Cons
  Quality Code                        Time consuming
  Faster Development                  Limited Scope
  Improved Communication              Test heavy

- What is the value of using JSONSchema for validation?
  provides an easy way of validating JSON objects in an application

- What are some ways to decide which code to test?
    Test the code that affects the behavior of the overall product

- What does `RETURNING` do in SQL? When would you use it?
    Returning is used to unconditionally and immediately end an SQL procedure by returning the flow of control to the caller of the stored procedure. This is used when you dont want to make any additional tables

- What are some differences between Web Sockets and HTTP?
HTTP is best for Restful applications and as it uses TCP, the connection tends to get slow. Websockets is prefferred for development of real-time gaming and as the connection doesn't take a break, data delivery is quick.


- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  Yes, flask was an easier setup and use. Setting up express, you can download a bunch of different things but for someone early in their career its more teadious.
