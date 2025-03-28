// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}


const mondayWork = function (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
      return 'This Monday, I will work from home.';     
}

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

const encouragingPromptFunction = wrapAdjective("!!!")
wrapAdjective("%")("a dedicated programmer"); //=> "You are %a dedicated programmer%!"
