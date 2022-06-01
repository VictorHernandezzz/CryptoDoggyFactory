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

//Randomize Function
$('#random').click(()=>{
    var skycolor = Math.floor(Math.random() * 89) + 10;
    skyColor(colors[skycolor],skycolor)
    $('#skyColor').val(skycolor)
    var bubblecolor = Math.floor(Math.random() * 89) + 10;
    bubbleColor(colors[bubblecolor],bubblecolor)
    $('#bubbleColor').val(bubblecolor)
    var bodycolor = Math.floor(Math.random() * 89) + 10;
    headColor(colors[bodycolor],bodycolor)
    $("#bodycolor").val(bodycolor)
    var mouthcolor = Math.floor(Math.random() * 89) + 10;
    mouthColor(colors[mouthcolor],mouthcolor)
    $("#mouthColor").val(mouthcolor)
    var eyescolor = Math.floor(Math.random() * 89) + 10;
    eyesColor(colors[eyescolor],eyescolor)
    $("#eyesColor").val(eyescolor)
    var earscolor = Math.floor(Math.random() * 89) + 10;
    earsColor(colors[earscolor],earscolor)
    $("#earsColor").val(earscolor)
    var eyevar = Math.floor(Math.random() * (7 - 1 + 1) + 1);
    eyeVariation(eyevar)
    $("#eyeshape").val(eyevar)
    var decovar = Math.floor(Math.random() * (5 - 1 + 1) + 1);
    decorationVariation(decovar)
    $("#decorationstyle").val(decovar)
    var decMidVar = Math.floor(Math.random() * 89) + 10;
    decorationMidColorVar(colors[decMidVar],decMidVar)
    $("#decMidColor").val(decMidVar)
    var decSideVar = Math.floor(Math.random() * 89) + 10;
    decorationSidesColorVar(colors[decSideVar],decSideVar)
    $("#decSideColor").val(decSideVar)
    var anim = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    animationsPlayer(anim)
    $("#animation").val(anim)
  })

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