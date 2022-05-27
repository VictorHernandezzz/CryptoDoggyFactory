var colors = Object.values(allColors())

var defaultDNA = {
    "headcolor" : 33,
    "mouthColor" : 20,
    "eyesColor" : 74,
    "earsColor" : 23,
    "skyColor": 88,
    "bubbleColor": 73,
    //Cattributes
    "eyesShape" : 1,
    "decorationPattern" : 1,
    "decorationMidcolor" : 13,
    "decorationSidescolor" : 13,
    "animation" :  1,
    "lastNum" :  1
    }

// when page load
$( document ).ready(function() {
  $('#dnabody').html(defaultDNA.headColor);
  $('#dnaeyes').html(defaultDNA.eyesColor);
  $('#dnaears').html(defaultDNA.earsColor);
  $('#dnamouth').html(defaultDNA.mouthColor);
  $('#dnasky').html(defaultDNA.skyColor);
  $('#dnabubble').html(defaultDNA.bubbleColor);
    
  $('#dnashape').html(defaultDNA.eyesShape)
//   $('#dnadecoration').html(defaultDNA.decorationPattern)
//   $('#dnadecorationMid').html(defaultDNA.decorationMidcolor)
//   $('#dnadecorationSides').html(defaultDNA.decorationSidescolor)
//   $('#dnaanimation').html(defaultDNA.animation)
//   $('#dnaspecial').html(defaultDNA.lastNum)

  renderCat(defaultDNA)
});

function getDna(){
    var dna = ''
    dna += $('#dnasky').html()
    dna += $('#dnabubble').html()
    dna += $('#dnabody').html()
    dna += $('#dnamouth').html()
    dna += $('#dnaeyes').html()
    dna += $('#dnaears').html()
    dna += $('#dnashape').html()
    dna += $('#dnadecoration').html()
    dna += $('#dnadecorationMid').html()
    dna += $('#dnadecorationSides').html()
    dna += $('#dnaanimation').html()
    dna += $('#dnaspecial').html()

    return parseInt(dna)
}

function renderCat(dna){
    headColor(colors[dna.headcolor],dna.headcolor)
    $('#bodycolor').val(dna.headcolor)
    eyesColor(colors[dna.eyesColor],dna.eyesColor)
    $('#eyesColor').val(dna.eyesColor)
    earsColor(colors[dna.earsColor],dna.earsColor)
    $('#earsColor').val(dna.earsColor)
    mouthColor(colors[dna.mouthColor],dna.mouthColor)
    $('#mouthColor').val(dna.mouthColor)
    skyColor(colors[dna.skyColor],dna.skyColor)
    $('#skyColor').val(dna.skyColor)
    bubbleColor(colors[dna.bubbleColor],dna.bubbleColor)
    $('#bubbleColor').val(dna.bubbleColor)
   
}

// Changing cat colors
$('#bodycolor').change(()=>{
    var colorVal = $('#bodycolor').val()
    headColor(colors[colorVal],colorVal)
})

$('#eyesColor').change(()=>{
  var colorVal = $('#eyesColor').val()
  eyesColor(colors[colorVal],colorVal)
})

$('#earsColor').change(()=>{
  var colorVal = $('#earsColor').val()
  earsColor(colors[colorVal],colorVal)
})

$('#mouthColor').change(()=>{
  var colorVal = $('#mouthColor').val()
  mouthColor(colors[colorVal],colorVal)
})

$('#skyColor').change(()=>{
  var colorVal = $('#skyColor').val()
  skyColor(colors[colorVal],colorVal)
})

$('#bubbleColor').change(()=>{
  var colorVal = $('#bubbleColor').val()
  bubbleColor(colors[colorVal],colorVal)
})

$('#eyeshape').change(()=>{
  var shape = parseInt($('#eyeshape').val())
  eyeVariation(shape)
})
