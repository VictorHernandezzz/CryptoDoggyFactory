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
        case 2:
            normalEyes()
            $('#eyeName').html('Chill')
            return eyesType1()
            break
        case 3:
            normalEyes()
            $('#eyeName').html('Suprised')
            return eyesType2()
            break    
        case 4:
            normalEyes()
            $('#eyeName').html('Tiny')
            return eyesType3()
            break   
        case 5:
            normalEyes()
            $('#eyeName').html('Detective')
            return eyesType4()
            break
        case 6:
            normalEyes()
            $('#eyeName').html('Stoner')
            return eyesType5()
            break
        case 7:
            normalEyes()
            $('#eyeName').html('Cyclopes')
            return eyesType6()
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

function normalEyes() {
    $('.eyes').css('border', 'none')
    $('.eyes').css('height', '16px')
    $('.eyes').css('width', '16px')
    $('.eyes').css('border-radius', '50%')
    $('.eyes').css('left', '140px')
    $('.eyes').css('bottom', '180px')
    $('.eyes').css('box-shadow', '65px 0 inherit')

}
function eyesType1() {
    normalEyes()
    $('.eyes').css('width', '20px')
    $('.eyes').css('height', '10px')
}
function eyesType2() {
    normalEyes()
    $('.eyes').css('width', '20px')
    $('.eyes').css('height', '40px')
}
function eyesType3() {
    normalEyes()
    $('.eyes').css('width', '5px')
    $('.eyes').css('height', '5px')
}
function eyesType4() {
    normalEyes()
    $('.eyes').css('width', '50px')
    $('.eyes').css('height', '30px')
    $('.eyes').css('left', '121px')
    $('.eyes').css('bottom', '170px')
    $('.eyes').css('border-radius', '0 0 50% 50%')
}
function eyesType5() {
    normalEyes()
    $('.eyes').css('width', '50px')
    $('.eyes').css('height', '22px')
    $('.eyes').css('left', '124px')
    $('.eyes').css('bottom', '179px')
    $('.eyes').css('border-radius', '144% 138% 50% 50%')
}
function eyesType6() {
    normalEyes()
    $('.eyes').css('width', '69px')
    $('.eyes').css('height', '50px')
    $('.eyes').css('left', '144px')
    $('.eyes').css('bottom', '184px')
    $('.eyes').css('border-radius', '500%')
    $('.eyes').css('border', '10px solid #ffffff')
    $('.eyes').css('box-shadow', 'none')
}


async function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}