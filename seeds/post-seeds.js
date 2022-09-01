const { Post } = require("../models");

const postsData = [
  {
    title:
      "Test-driven development: Avoiding implementation mistakes",
    text: "Many software teams have implemented test-driven development (TDD) to reduce rework and its associated costs. The rationale: The earlier you catch a problem in the software development lifecycle (SDLC), the less expensive it is to fix.Here’s a rundown of the benefits, drawbacks, barriers to TDD adoption and common implementation mistakes. The premise of TDD: You write the test before you write the code With TDD, testing is at the forefront of people’s minds during product architecture, design and development. Software developers define up front what and how to test. What does the feature (code) need to do successfully to be considered complete? What tests does it need to pass to be called good?Developers write these tests one at a time, starting with an easy case and building complexity from there, before coding the feature. This enables developers to make sure every possible scenario is covered. The feature must pass the old and new tests before a developer commits it to the code base. What are the benefits of adopting TDD?",
    user_id: 1,
  },
  {
    title: "Deploying .NET apps to containers on AWS",
    text: "As a .NET developer, you may not be aware of the commitment that AWS has made to .NET, including developer advocates, specialized APIs for your .NET apps to easily work with AWS services, and even some great tooling for our IDEs. The AWS Toolkit for Visual Studio provides interaction with a slew of AWS services, while the AWS toolkits for Visual Studio Code and JetBrains Rider focus their tooling on serverless features. With this toolkit, you can easily deploy .NET apps to fully managed containers on AWS without leaving Visual Studio.  AWS has a number of ways to run and manage containers, including Elastic Container Repository (or ECR, a service for storing Docker images) and containers orchestrators Elastic Kubernetes Service (EKS) and the proprietary Elastic Container Service (ECS), both of which integrate with ECR. But if you don’t want to have to think about how those orchestrators work, then AWS Fargate is the service for you. You provide some configuration info and it takes care of pushing images, spinning up containers, creating load balancers and managing container instances for your apps. It’s a really simple way to get your workload up and running.   In this article, you’ll learn how to use the AWS Toolkit for Visual Studio to publish a simple ASP.NET Core application to Fargate. I’ll start with an ASP.NET Core Web application from a template and add a little bit of text output to the default page. Then we’ll deploy it to Fargate using the toolkit and take a look at the application running in a pair of containers on AWS.  ",
    user_id: 2,
  },
  {
    title: "How to change CSS using jQuery?",
    text: "The jQuery .css method is used to GET or SET DOM element CSS properties.The following tutorial will demonstrate 4 core concepts of jQuery’s .css method: GET a CSS property from a DOM element GET multiple CSS properties from a DOM elementSET a CSS property on DOM elementsSET multiple CSS properties on DOM elementsWhen looking to GET a CSS property with jQuery’s .css method, jQuery will return the first matched element’s CSS properties. So, you will want to pay close attention to the jQuery selector used when requesting a CSS property. If you pass a class into the selector and a group of elements gets returned, jQuery’s .css method will only show CSS properties for the first matched element in the group of matched elements.",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postsData);

module.exports = seedPosts;
