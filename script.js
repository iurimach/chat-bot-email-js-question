document.addEventListener("DOMContentLoaded", () => {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.scrollTop = chatWindow.scrollHeight;
});

function handlePredefinedQuestion(questionType) {
    let response = '';
    switch (questionType) {
        case 'workTime':
            response = ' ჩვენ ვმუშაობთ 21:00 -მდე';
            break;
        case 'location':
            response = 'ჩვენი ლოკაცია თბილისი :';
            break;
        case 'identity':
            response = 'ჩვენ ვართ ......';
            break;
        default:
            response = "ვერ გავიგე ეს კითხვა მიწერე მეილზე ოპერატორს.";
    }
    addBotMessage(response);
}

function addBotMessage(message) {
    const chatWindow = document.getElementById('chat-window');
    const botMessage = document.createElement('div');
    botMessage.classList.add('bot-message');
    botMessage.textContent = message;
    botMessage.style.color="red"
    chatWindow.appendChild(botMessage);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput) {
        addUserMessage(userInput);
        handleUserQuestion(userInput);
        document.getElementById('user-input').value = '';
    }
}

function addUserMessage(message) {
    const chatWindow = document.getElementById('chat-window');
    const userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.textContent = message;
    chatWindow.appendChild(userMessage);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function handleUserQuestion(question) {
    const predefinedQuestions = {
        "Until what time do you work": '10',
        "Where are you": 'everywhere',
        "Sheshn Sesakheb": 'I am a bot'
    };

    const response = predefinedQuestions[question] || "კითხვა ვერ გავიგე გთხოვ გამოგზავნე კითხა მეილზე.";
    addBotMessage(response);
}

function showSurveyForm() {
    const surveyFormContainer = document.getElementById('survey-form-container');
    surveyFormContainer.style.display = 'block';
}

function submitSurveyForm() {
    const question = document.getElementById('survey-question').value.trim();
    const number = document.getElementById('survey-number').value.trim();
    const email = document.getElementById('survey-email').value.trim();

    if (question && number && email) {
        

      

        // აქ ვიღებ მომხრბლის კითვას  ცვლადში data gadvcem უნქციას არგუმენტად და ის ფუნქციია იღებს
        SendMail(question,number,email)

        alert('კითხვა გაიგზავნა!');

        // --  Hide the form after submission -- 
        document.getElementById('survey-form-container').style.display = 'none';

        // Clear form fields - 
        document.getElementById('survey-question').value = '';
        document.getElementById('survey-number').value = '';
        document.getElementById('survey-email').value = '';
    } else {
        alert('Please fill in all fields.');
    }
}


//აქ გადმოვცემ მონცმებს "data" და აქ ჩავაშენბ ემილ ჯს , და გაგზვნის დატას დატა არის მომხრებლის კითხვა
function sendemailjs(data) {

    console.log(data,"es mesijidan")
}



function SendMail(question,number,email){ // პარმეტრებს ვაწოდებ summ ფუნქციიდან

    console.log(question+ number+email,"esaa forech functiidan gasatani shedegi2")

    var params={
            
        message: "კითხვა :" + question + " ;   "+
         " ნომერი :" + number  + " ;  "+ 
         "email : " + " " + email
    }
    // აქ ემილის პარმეტრბი წერია , email.js მა რაც მომანიჭა იდ 
    emailjs.send("service-matchara_18", "template_0843m4r",params).then(function(res){
        
   
    
})
        
    
}