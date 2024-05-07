const aiService = require('../services/aiService');
const _ = require('lodash');
exports.demo = (req, res, next) => {
  res.send('API Working...');
};

exports.checkAssignment = async (req, res, next) => {
  try {
    const { userName, assignmentName, assignmentInstructions,sampleAssignment,submittedAssignment} = req.body;
    //const { sampleCode, studentCode } = req.files;
    //console.log(studentId," ",assignmentName," ",jiraId," ",assignmentInstructions," ",submittedAssignment," ",studentAssignment);
    //Prompt 
    console.log("function called")
    const prompt=`Act as an assignment checker and evaluate the assignment of students. 
                Compare the student's assignment with the provided sample and assess if 
                it fulfills all requirements given in the instructions. Your output should 
                be in the given JSON format and simple text format .
                Inputs:
                  1. Student Name: ${userName}
                  2. Assignment Name: ${assignmentName}
                  3. Instructions: ${assignmentInstructions}
                  4. Sample Assignment: ${sampleAssignment}
                  5. Submitted Assignment: ${submittedAssignment}
                
                Outputs:
                  Please generate an assignment report including the following:
                    1. Feedback: Instructions for improving the assignment.
                    2. Structure and Clarity (if applicable): Evaluation of the structure and clarity of the submitted document.
                    3. Content Relevance (if applicable): Assessment of the relevance of the content to the assignment topic.
                    4. Grammar and Language (if applicable): Evaluation of grammar and language use.
                    5. Best Practices (if applicable): Identification of any best practices adhered to or areas for improvement.
                    6. Bug/Error: Mention any errors/bugs with a brief explanation (2-3 lines).
                    7. Correctness: Percentage of correctness of the assignment.
                    8. Requirements Fulfillment: Comparison between the instructions, student-submitted code, and sample code to check if all requirements are fulfilled.
                    9. Final Remarks:End the report with encouraging remarks, motivating the student to keep up the good work and continue striving for excellence.
                Output Sample:
                {
                  json:{
                    "Feedback":"",
                    "Correctness":"80%"
                  },
                  text:"Feedback: \nRequirements Fulfillment:\n"
                }`
    // Call AI service to check assignment
  const assessmentReport = await aiService.checkAssignment(prompt);
   //console.log(assessmentReport.choices[0].message.content)
   const cleanStr = _.replace(assessmentReport.choices[0].message.content, /```json|```/g, '');
   const jsonResponse = JSON.parse(cleanStr);
   console.log(jsonResponse)
  res.json(jsonResponse);
   
  } catch (error) {
    next(error);
  }
};


async function demo  () {
  try {
    //Prompt 
    const prompt=`say hello`
  const assessmentReport = await aiService.checkAssignment(prompt);
   console.log(assessmentReport.choices[0].message.content)
   
  } catch (error) {
    console.log(error)
  }
};
demo()

