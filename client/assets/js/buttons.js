//buttons for NFT navigation

const dogColorsBtn = document.getElementById("colorsMenuBtn");
dogColorsBtn.addEventListener("click", showColorsMenu);

const dogAttributesBtn = document.getElementById("attributesMenuBtn");
dogAttributesBtn.addEventListener("click", showAttributesMenu);

async function showColorsMenu() {
    $('.dogColorsClass').css('display', 'block')
    $('.dogAttributesClass').css('display', 'none')
}

async function showAttributesMenu() {
    $('.dogAttributesClass').css('display', 'block')
    $('.dogColorsClass').css('display', 'none')
}

//button for default NFT
$('#reset').click(()=>{ 

    headColor(colors[defaultDNA.headColor],defaultDNA.headColor)
    $("#bodycolor").val(defaultDNA.headColor)
   
    mouthColor(colors[defaultDNA.mouthColor],defaultDNA.mouthColor)
    $("#mouthColor").val(defaultDNA.mouthColor)
   
    eyesColor(colors[defaultDNA.eyesColor],defaultDNA.eyesColor)
    $("#eyesColor").val(defaultDNA.eyesColor)
    
    earsColor(colors[defaultDNA.earsColor],defaultDNA.earsColor)
    $("#earsColor").val(defaultDNA.earsColor)
  
    skyColor(colors[defaultDNA.skyColor],defaultDNA.skyColor)
    $('#skyColor').val(defaultDNA.skyColor)
  
    bubbleColor(colors[defaultDNA.bubbleColor],defaultDNA.bubbleColor)
    $('#bubbleColor').val(defaultDNA.bubbleColor)
  
    eyeVariation(defaultDNA.eyesShape)
    $("#eyeshape").val(defaultDNA.eyesShape)
    
    decorationVariation(defaultDNA.decorationPattern)
    $("#decorationstyle").val(defaultDNA.decorationPattern)
  
    decorationMidColorVar(colors[defaultDNA.decorationMidcolor],defaultDNA.decorationMidcolor)
    $("#decMidColor").val(defaultDNA.decorationMidcolor)
    
    decorationSidesColorVar(colors[defaultDNA.decorationSidescolor],defaultDNA.decorationSidescolor)
    $("#decSideColor").val(defaultDNA.decorationSidescolor)
  
    animationsPlayer(defaultDNA.animation)
    $("#animation").val(defaultDNA.animation)
  })