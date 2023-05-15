// this is a mesage to the readers: 
console.log('%cthis is a scary story!','color: hotpink');



// the followings are testing logs

// console.log('%cthis is the length of the stories: '+stories.length,'color:blue;');
// console.log(stories);
// $('h1').text('testing jquery')



// this is a function that generate a random number from 0 to the last index of the stories array.
function randomNum(){
    return Math.floor(Math.random()*stories.length)
}
// console.log(randomNum());


const numArr = []


// this is getting a random number that has not been randomly selected and display the text if true
function getNewNum(){
    // console.log('clicked ');
    const num = randomNum()
    if (numArr.every(usednum => num != usednum)){
        numArr.push(num)
        // console.log(numArr);
        // console.log(num);
        const logNum = Number(num) + 1
        // alert('this is a even scarier story!!! enter at your own risk! read stroy number ' + logNum)
        $('#alert1').css('display','inline-block')
        $('#dim').css('display','flex')
        $('#title').text(stories[num].title)
        $('#content').text(stories[num].content)
        return num
    } else if (numArr.length == stories.length){
        $('#dim').css('display','flex')
        $('#alert2').css('display','inline-block')
        return 
    }

    getNewNum()
}



function close(){
    $('#alert1').css('display','none')
    $('#alert2').css('display','none')
    $('#dim').css('display', 'none')
}
document.addEventListener('click', close)


// this is testing the function in laptop browser
document.addEventListener('keypress', getNewNum)



// this is triggering the change with shake 
window.onload = function() {

    //create a new instance of shake.js.
    const myShakeEvent = new Shake({
        threshold: 5
    });

    // start listening to device motion
    myShakeEvent.start();

    // register a shake event
    window.addEventListener('shake', shakeEventDidOccur, false);

    //shake event callback
    function shakeEventDidOccur () {

        $('#intro').css('display', 'none')
        $('#city').css('display','none')
        //put your own code here etc.
        getNewNum()

    }
};