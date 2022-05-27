//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}

//This function code needs to modified so that it works with the dog code.
function headColor(color,code) {
    $('.head, .dog').css('background', '#' + color)  //This changes the color of the dog
    $('#headcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnabody').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

//This function is for the color of the eyes
function eyesColor(color,code) {
    $('.eyes').css('background', '#' + color)  //This changes the color of the eyes
    $('.eyes').css('box-shadow', '65px' + ' 0' + ' #' + color)
    $('#eyecode').html('code: ' + code) //This updates text of the badge next to the slider
    $('#dnaeyes').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

//This function is for the color of the ears
function earsColor(color,code) {
    $('.ear').css('background', '#' + color)  //This changes the color of the eyes
    $('#earscode').html('code: ' + code) //This updates text of the badge next to the slider
    $('#dnaears').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

//This function is for the color of the patch and mustache
function mouthColor(color,code) {
    $('.mouth').css('background', '#' + color)  //This changes the color of the eyes
    $('.mouth').css('border', '5px ' + 'solid ' + '#' + color)
    $('#mouthcode').html('code: ' + code) //This updates text of the badge next to the slider
    $('#dnamouth').html(code) //This updates the body color part of the DNA that is displayed below the cat
}
//This function is for the color of the sky
function skyColor(color,code) {
    $('.doggy-container').css('background', '#' + color)  //This changes the color of the eyes
    $('#skycode').html('code: ' + code) //This updates text of the badge next to the slider
    $('#dnasky').html(code) //This updates the body color part of the DNA that is displayed below the cat
}
//This function is for the color of the bubble
function bubbleColor(color,code) {
    $('.bubble').css('background', '#' + color)  //This changes the color of the eyes
    $('#bubblecode').html('code: ' + code) //This updates text of the badge next to the slider
    $('#dnabubble').html(code) //This updates the body color part of the DNA that is displayed below the cat
}


//###################################################
//Functions below will be used later on in the project
//###################################################
function eyeVariation(num) {

    $('#dnashape').html(num)
    switch (num) {
        case 1:
            normalEyes()
            $('#eyeName').html('Basic')
            break
    }
}

function decorationVariation(num) {
    $('#dnadecoration').html(num)
    switch (num) {
        case 1:
            $('#decorationName').html('Basic')
            normaldecoration()
            break
    }
}

async function normalEyes() {
    await $('.cat__eye').find('span').css('border', 'none')
}

async function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}