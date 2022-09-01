const { Comment } = require("../models");

const commentsData = [
  {
    text: "TDD is less expensive than the siloed approach. Why? When developers add new code to the base, the code works and doesn’t break the base. The TDD mantra “keep it green” means the test result is always green before submitting code to the base (where it impacts others). If it’s not green, the developer keeps working on the code while it’s top-of-mind until it passes the test. The silo approach, where developers toss code over the wall to QA, means that coders have already moved on to new functionality when QA finds bugs. The delay in finding the bugs can have downstream consequences—anything built later that relies on the problematic code may also need rework. Another benefit: Tests document the code. When you read a test, you understand what the code should be doing, so you can validate that it’s working correctly.  ",
    user_id: 3,
    post_id: 1,
  },
  {
    text: "Requirements.Although .NET 5, ASP.NET Core 5 and EF Core 5 are around the corner (or possibly here, by the time you read this article), I’ll use Visual Studio 2019 and the 3.1 versions of these frameworks.  You will also need Docker Desktop installed and running on your computer, and it should be set to use Linux containers, which is the default.  Your Visual Studio installation should have the Container Development Tools component installed as part of the .NET Core cross-platform development workload. You also need to install the AWS Toolkit for Visual Studio. You can find that in the extensions manager in Visual Studio . With the toolkit installed, if you do not yet have an account on AWS, you can create a free account, then the toolkit will guide you to set up a user role and associate the toolkit with that role. This will give the toolkit permission to perform your developer tasks on AWS. You can find a detailed walkthrough of this in writing in my Code Magazine article, or if you prefer video, in my Pluralsight course “Fundamentals of Building .NET Applications on AWS.”",
    user_id: 1,
    post_id: 2,
  },
  {
    text: "jQuery’s .css method makes getting and setting css properties with javascript convenient and easy. Whether you are looking to get the font size of some text, or set the width and height of an html element, jQuery’s .css method is a great addition to your tool set. One detail to note when getting a css property, is the css values will get returned as a string. However, when setting a css property such as opacity, width, height, etc.. the .css method conveniently accepts strings or numbers. When setting multiple css properties, a good practice is to wrap your javascript’s object keys in single or double quotes.",
    user_id: 2,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentsData);

module.exports = seedComments;
