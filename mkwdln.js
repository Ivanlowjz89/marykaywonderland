var BGM = document.getElementById('bgm');
var clickSound = document.getElementById('clickSound');
var avatarPhoto = "";
var avatarImageContainer = "";

initAvatars();

async function initAvatars()
{

var getAvatarPhoto = await checkPhotos();
if(getAvatarPhoto.photos != null)
{
avatarPhoto = getAvatarPhoto.photos;
}
else
{
alert("Error fetching your photo! Please refresh and try again!"); 
}

var getAvatarImage = await checkAvatar();

if(getAvatarImage.avatar != null)
{
$('#avatarImage').attr('src', getAvatarImage.avatar);
avatarImageContainer = getAvatarImage.avatar;
}
else
{
alert("Error fetching your avatar! Please refresh and try again!"); 
}

}

//Apps
var auditoriumIBCsrc = "https://www.marykaymysgcc2021.com/apps/AuditoriumIBC";
var auditoriumPublicsrc = "https://www.marykaymysgcc2021.com/apps/AuditoriumPublic";
var universitysrc = "https://www.marykaymysgcc2021.com/apps/University";
var nsdsrc = "https://www.marykaymysgcc2021.com/apps/NSD";
var ppsrc = "https://www.marykaymysgcc2021.com/apps/ProductPavilion";
var recognitionsrc = "https://www.marykaymysgcc2021.com/apps/Recognition";
var luckydrawsrc = "https://www.marykaymysgcc2021.com/apps/LuckyDraw";
var excitementsrc = "https://www.marykaymysgcc2021.com/apps/Excitement";
var mmsrc = "https://www.marykaymysgcc2021.com/apps/MickMock";

//Auditorium
var auditorium1src = "https://player.vimeo.com/video/528128632";
var auditorium2src = "https://player.vimeo.com/video/528129055";
var auditorium3src = "https://player.vimeo.com/video/528171287";
var auditorium4src = "https://player.vimeo.com/video/528128130";
var auditorium5src = "https://player.vimeo.com/video/528176359";
var auditorium6src = "https://player.vimeo.com/video/528178378";
var auditorium7src = "https://player.vimeo.com/video/528676498";
var auditorium8src = "https://player.vimeo.com/video/528675150";

//NSD
var nsd1src = "https://www.youtube.com/embed/PLK5G6njtO8";
var nsd2src = "https://www.youtube.com/embed/hEx0_O3BooA";
var nsd3src = "https://www.youtube.com/embed/44vaEwj6UWM";
var nsd4src = "https://www.youtube.com/embed/2A3_47BI34w";
var nsd5src = "https://www.youtube.com/embed/CXz8Wx9V-3w";
var nsd6src = "https://www.youtube.com/embed/k6IaeQbLfmc";
var nsd7src = "https://www.youtube.com/embed/_Wyfv6DRabs";

//Recognition
var mynd1src = "https://player.vimeo.com/video/533437671";
var mynd2src = "https://player.vimeo.com/video/533440173";
var mynd3src = "https://player.vimeo.com/video/533440078";
var mysa1src = "https://player.vimeo.com/video/533439922";
var mysa2src = "https://player.vimeo.com/video/533439968";
var mysa3src = "https://player.vimeo.com/video/533439183";
var mysa4src = "https://player.vimeo.com/video/533439654";
var mysa5src = "https://player.vimeo.com/video/533441468";
var mysaot1src = "https://player.vimeo.com/video/533446851";
var mysaot2src = "https://player.vimeo.com/video/533447137";
var mysaot3src = "https://player.vimeo.com/video/533447621";
var mysaot4src = "https://player.vimeo.com/video/533445693";
var mysaot5src = "https://player.vimeo.com/video/533446224";
var mysaot6src = "https://player.vimeo.com/video/533446607";
var mynsdsrc = "https://player.vimeo.com/video/533443805";
var mymoveup1src = "https://player.vimeo.com/video/533444435";
var mymoveup2src = "https://player.vimeo.com/video/533445370";
var mymoveup3src = "https://player.vimeo.com/video/533444194";
var myleadsrc = "https://player.vimeo.com/video/533448900";
var mycar1src = "https://player.vimeo.com/video/533435967";
var mycar2src = "https://player.vimeo.com/video/533436052";
var mycar3src = "https://player.vimeo.com/video/533436112";
var mycar4src = "https://player.vimeo.com/video/533436148";
var sgndsrc = "https://player.vimeo.com/video/533449849";
var sgsa1src = "https://player.vimeo.com/video/533450798";
var sgsa2src = "https://player.vimeo.com/video/533450923";
var sgsa3src = "https://player.vimeo.com/video/533450659";
var sgsa4src = "https://player.vimeo.com/video/533450735";
var sgsaot1src = "https://player.vimeo.com/video/533446851";
var sgsaot2src = "https://player.vimeo.com/video/533447137";
var sgsaot3src = "https://player.vimeo.com/video/533451025";
var sgsaot4src = "https://player.vimeo.com/video/533450403";
var sgsaot5src = "https://player.vimeo.com/video/533450493";
var sgsaot6src = "https://player.vimeo.com/video/533450574";
var sgmoveup1src = "https://player.vimeo.com/video/533450350";
var sgmoveup2src = "https://player.vimeo.com/video/533450273";
var sgleadsrc = "https://player.vimeo.com/video/533449791";

//Product Gallery
var luissrc = "https://player.vimeo.com/video/533453979";
var micellarsrc = "https://player.vimeo.com/video/528754713";
var illumineasrc = "https://player.vimeo.com/video/528133337";
var timewisesrc = "https://player.vimeo.com/video/528133400";
var lipglosssrc = "https://player.vimeo.com/video/528133469";
var wmk1src = "https://player.vimeo.com/video/528133535";
var wmk2src = "https://player.vimeo.com/video/528133584";
var wmk3src = "https://player.vimeo.com/video/528133657";

//Lucky Draw
var ld1src = "https://player.vimeo.com/video/533576207";
var ld2src = "https://player.vimeo.com/video/533579623";
var ld3src = "https://player.vimeo.com/video/533579401";
var ld4src = "https://player.vimeo.com/video/533578658";

//Quotes
var quote1 = "images/MKFacts-01.jpg";
var quote2 = "images/MKFacts-02.jpg";
var quote3 = "images/MKFacts-03.jpg";
var quote4 = "images/MKFacts-04.jpg";
var quote5 = "images/MKFacts-05.jpg";
var quote6 = "images/MKFacts-06.jpg";
var quote7 = "images/MKFacts-07.jpg";
var quote8 = "images/MKFacts-08.jpg";
var quote9 = "images/MKFacts-09.jpg";
var quote10 = "images/MKFacts-10.jpg";
var quote11 = "images/MKFacts-11.jpg";
var quote12 = "images/MKFacts-12.jpg";
var quote13 = "images/MKFacts-13.jpg";
var quote14 = "images/MKFacts-14.jpg";
var quote15 = "images/MKFacts-15.jpg";
var quote16 = "images/MKFacts-16.jpg";
var quote17 = "images/MKFacts-17.jpg";
var quote18 = "images/MKFacts-18.jpg";
var quote19 = "images/MKFacts-19.jpg";
var quote20 = "images/MKFacts-20.jpg";

//Avatar
$('#speechBubble').click(function()
{
clickSound.play();
$('#speechBubble').fadeOut(500);
$('#menuFrame').fadeIn(500);
$('#menuBlock').css("width", $('#menuBlock').height() * 1.898);
});

$('#avatarImage').click(function()
{
clickSound.play();
$('#speechBubble').fadeOut(500);
$('#menuFrame').fadeIn(500);
$('#menuBlock').css("width", $('#menuBlock').height() * 1.898);
});

$('#buttonDownloadAvatar').click(function()
{
clickSound.play();
let MIME_TYPE = "image/png";
let a = document.createElement('a');
a.href = avatarPhoto;
a.download = 'myavatar.png';
a.dataset.downloadurl = [MIME_TYPE, a.download, a.href].join(':');
a.click();
});

//Photobooth
$('#buttonPhotobooth').click(function()
{
clickSound.play();
startCamera(avatarImageContainer);
});

//Logout
$('#buttonLogout').click(function()
{
clickSound.play();
window.open("https://www.marykaymysgcc2021.com/users/sign_out", "_self");
});

//Audio
$('#playAudioButton').click(function()
{
$('#audioBlocker').fadeOut(500);
BGM.play();
});

$('#audioBlocker').click(function()
{
$('#audioBlocker').fadeOut(500);
BGM.play();
});

$('#closeButtonVideo').click(function()
{	
clickSound.play();
BGM.play();
$('#videoiframe').attr('src', 'about:blank');
$('#videoFrame').fadeOut(500);
});

$('#closeButtonApp').click(function()
{	
clickSound.play();
$('#appiframe').attr('src', 'about:blank');
$('#appFrame').fadeOut(500);
});

$('#closeButtonImage').click(function()
{	
clickSound.play();
$('#imageFrame').fadeOut(500);
});

$('#closeButtonMenu').click(function()
{	
clickSound.play();
$('#menuFrame').fadeOut(500);
});

//VH
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
$('#menuBlock').css("width", $('#menuBlock').height() * 1.898);
});

window.addEventListener('focus',()=>{
  
  BGM.play();
  
});
                        
window.addEventListener('blur',()=>{
  
  BGM.pause();
  
});

function openMickMock()
{
clickSound.play();
$('#appFrameText').text("MICK MOCK");
$('#appiframe').attr('src', mmsrc);
$('#appFrame').fadeIn(500);

}

function openRecognition()
{
clickSound.play();
$('#appFrameText').text("RECOGNITION");
$('#appiframe').attr('src', recognitionsrc);
$('#appFrame').fadeIn(500);
}

function openProductGallery()
{
clickSound.play();
$('#appFrameText').text("PRODUCT GALLERY");
$('#appiframe').attr('src', ppsrc);
$('#appFrame').fadeIn(500);
}

function openLuckyDraw()
{
clickSound.play();
$('#appFrameText').text("LUCKY DRAW");
$('#appiframe').attr('src', luckydrawsrc);
$('#appFrame').fadeIn(500);
}

function openExcitement()
{
clickSound.play();
$('#appFrameText').text("EXCITEMENT");
$('#appiframe').attr('src', excitementsrc);
$('#appFrame').fadeIn(500); 
}

function openUniversity()
{
clickSound.play();
$('#appFrameText').text("MARY KAY UNIVERSITY");
$('#appiframe').attr('src', universitysrc);
$('#appFrame').fadeIn(500);
}

function openNSD()
{
clickSound.play();
$('#appFrameText').text("NSD BUSINESS SUITES");
$('#appiframe').attr('src', nsdsrc);
$('#appFrame').fadeIn(500);
}

async function openAuditorium()
{
clickSound.play();
var checkUserType = await checkUser();
if(checkUserType.type == "user")
{
openAuditoriumIBC();
}
else
{
openAuditoriumPublic();
}
}

function openAuditoriumIBC()
{
$('#appFrameText').text("AUDITORIUM");
$('#appiframe').attr('src', auditoriumIBCsrc);
$('#appFrame').fadeIn(500);
}

function openAuditoriumPublic()
{
$('#appFrameText').text("AUDITORIUM");
$('#appiframe').attr('src', auditoriumPublicsrc);
$('#appFrame').fadeIn(500);
}

function playLD(num)
{
clickSound.play();
BGM.pause();
switch(num)
{
case 1:
$('#videoFrameText').text("1ST LUCKY DRAW");
$('#videoiframe').attr('src', ld1src);
$('#videoFrame').fadeIn(500);
break;

case 2:
$('#videoFrameText').text("2ND LUCKY DRAW");
$('#videoiframe').attr('src', ld2src);
$('#videoFrame').fadeIn(500);
break;

case 3:
$('#videoFrameText').text("3RD LUCKY DRAW");
$('#videoiframe').attr('src', ld3src);
$('#videoFrame').fadeIn(500);
break;

case 4:
$('#videoFrameText').text("EARLY BIRDS");
$('#videoiframe').attr('src', ld4src);
$('#videoFrame').fadeIn(500);
break;
}
}

function playLuis()
{
clickSound.play();
BGM.pause();
$('#videoFrameText').text("LUIS CASCO, MARY KAY GLOBAL BRAND AMBASSADOR");
$('#videoiframe').attr('src', luissrc);
$('#videoFrame').fadeIn(500);
}

function playMicellarWater()
{ 
clickSound.play();
BGM.pause();
$('#videoFrameText').text("MICELLAR WATER");
$('#videoiframe').attr('src', micellarsrc);
$('#videoFrame').fadeIn(500); 
}

function playIlluminea()
{ 
clickSound.play();
BGM.pause();
$('#videoFrameText').text("ILLUMINEA EDP");
$('#videoiframe').attr('src', illumineasrc);
$('#videoFrame').fadeIn(500); 
}

function playWMK(num)
{ 
clickSound.play();
BGM.pause();
switch(num)
{
case 1:
$('#videoFrameText').text("INNOVATIVE SKIN CARE");
$('#videoiframe').attr('src', wmk1src);
$('#videoFrame').fadeIn(500); 
break;
case 2:
$('#videoFrameText').text("MARY KAY R3 FACILITIES");
$('#videoiframe').attr('src', wmk2src);
$('#videoFrame').fadeIn(500); 
break;
case 3:
$('#videoFrameText').text("PATENT TECHNOLOGY");
$('#videoiframe').attr('src', wmk3src);
$('#videoFrame').fadeIn(500); 
break;
}
}

function playLipGloss()
{
  clickSound.play();
BGM.pause();
$('#videoFrameText').text("UNLIMITED LIP GLOSS");
$('#videoiframe').attr('src', lipglosssrc);
$('#videoFrame').fadeIn(500); 
}

function playTimeWise()
{
  clickSound.play();
BGM.pause();
$('#videoFrameText').text("TIMEWISE REPLENISHING SERUM C + E");
$('#videoiframe').attr('src', timewisesrc);
$('#videoFrame').fadeIn(500); 
}

function playMYND(num)
{
clickSound.play();
BGM.pause();
switch(num)
{
case 1:
$('#videoFrameText').text("NEW SALES DIRECTOR DEBUT");
$('#videoiframe').attr('src', mynd1src);
$('#videoFrame').fadeIn(500);
break;

case 2:
$('#videoFrameText').text("NEW EXECUTIVE SALES DIRECTOR DEBUT");
$('#videoiframe').attr('src', mynd2src);
$('#videoFrame').fadeIn(500);
break;

case 3:
$('#videoFrameText').text("NEW ELITE EXECUTIVE SALES DIRECTOR DEBUT");
$('#videoiframe').attr('src', mynd3src);
$('#videoFrame').fadeIn(500);
break;
}
}

function playMYSA1(num)
{
clickSound.play();
BGM.pause();
switch(num)
{
case 1:
$('#videoFrameText').text("COPS BC");
$('#videoiframe').attr('src', mysa1src);
$('#videoFrame').fadeIn(500);
break;
case 2:
$('#videoFrameText').text("COPS SD");
$('#videoiframe').attr('src', mysa2src);
$('#videoFrame').fadeIn(500);
break;
case 3:
$('#videoFrameText').text("COA 155K");
$('#videoiframe').attr('src', mysa3src);
$('#videoFrame').fadeIn(500);
break;
case 4:
$('#videoFrameText').text("COA 251K");
$('#videoiframe').attr('src', mysa4src);
$('#videoFrame').fadeIn(500);
break;
case 5:
$('#videoFrameText').text("COE & TDT");
$('#videoiframe').attr('src', mysa5src);
$('#videoFrame').fadeIn(500);
break;
}
}

function playMYSA2(num)
{
clickSound.play();
BGM.pause();
switch(num)
{
case 1:
$('#videoFrameText').text("COPS BC");
$('#videoiframe').attr('src', mysaot1src);
$('#videoFrame').fadeIn(500);
break;
case 2:
$('#videoFrameText').text("COPS SD");
$('#videoiframe').attr('src', mysaot2src);
$('#videoFrame').fadeIn(500);
break;
case 3:
$('#videoFrameText').text("COA 155K");
$('#videoiframe').attr('src', mysaot4src);
$('#videoFrame').fadeIn(500);
break;
case 4:
$('#videoFrameText').text("COA 251K");
$('#videoiframe').attr('src', mysaot5src);
$('#videoFrame').fadeIn(500);
break;
case 5:
$('#videoFrameText').text("COS");
$('#videoiframe').attr('src', mysaot3src);
$('#videoFrame').fadeIn(500);
break;
case 6:
$('#videoFrameText').text("COE & TDT");
$('#videoiframe').attr('src', mysaot6src);
$('#videoFrame').fadeIn(500);
break;
}
}

function playMYNSD()
{ 
clickSound.play();
BGM.pause();
$('#videoFrameText').text("NSD IN MAKING");
$('#videoiframe').attr('src', mynsdsrc);
$('#videoFrame').fadeIn(500); 
}

function playMYLead()
{
clickSound.play();
BGM.pause();
$('#videoFrameText').text("LEAD PROGRAMS");
$('#videoiframe').attr('src', myleadsrc);
$('#videoFrame').fadeIn(500);
}

function playMYMoveUp(num)
{
clickSound.play();
BGM.pause();
switch(num)
{
case 1:
$('#videoFrameText').text("TEAM LEADER");
$('#videoiframe').attr('src', mymoveup1src);
$('#videoFrame').fadeIn(500);
break;

case 2:
$('#videoFrameText').text("FUTURE INDEPENDENT SALES DIRECTOR");
$('#videoiframe').attr('src', mymoveup2src);
$('#videoFrame').fadeIn(500);
break;

case 3:
$('#videoFrameText').text("DIRECTOR IN QUALIFICATION");
$('#videoiframe').attr('src', mymoveup3src);
$('#videoFrame').fadeIn(500);
break;
}
}

function playMYCar(num)
{
clickSound.play();
BGM.pause();
switch(num)
{
case 1:
$('#videoFrameText').text("TOYOTA ALTIS");
$('#videoiframe').attr('src', mycar1src);
$('#videoFrame').fadeIn(500);
break;

case 2:
$('#videoFrameText').text("HONDA JAZZ");
$('#videoiframe').attr('src', mycar3src);
$('#videoFrame').fadeIn(500);
break;

case 3:
$('#videoFrameText').text("TOYOTA AVANZA");
$('#videoiframe').attr('src', mycar2src);
$('#videoFrame').fadeIn(500);
break;

case 4:
$('#videoFrameText').text("TOYOTA YARIS");
$('#videoiframe').attr('src', mycar4src);
$('#videoFrame').fadeIn(500);
break;
}
}

function playSGLead()
{
clickSound.play();
BGM.pause();
$('#videoFrameText').text("LEAD PROGRAM");
$('#videoiframe').attr('src', sgleadsrc);
$('#videoFrame').fadeIn(500);
}

function playSGND()
{
clickSound.play();
BGM.pause();
$('#videoFrameText').text("NEW SALES DIRECTOR DEBUT");
$('#videoiframe').attr('src', sgleadsrc);
$('#videoFrame').fadeIn(500);
}

function playSGMoveUp(num)
{
clickSound.play();
BGM.pause();
switch(num)
{
case 1:
$('#videoFrameText').text("TEAM LEADER");
$('#videoiframe').attr('src', sgmoveup1src);
$('#videoFrame').fadeIn(500);
break;

case 2:
$('#videoFrameText').text("DIRECTOR IN QUALIFICATION");
$('#videoiframe').attr('src', sgmoveup2src);
$('#videoFrame').fadeIn(500);
break; 
}
}

function playSGSA1(num)
{ 
clickSound.play();
BGM.pause();
switch(num)
{
case 1:
$('#videoFrameText').text("COPS BC");
$('#videoiframe').attr('src', sgsa1src);
$('#videoFrame').fadeIn(500);
break;
case 2:
$('#videoFrameText').text("COPS SD");
$('#videoiframe').attr('src', sgsa2src);
$('#videoFrame').fadeIn(500);
break;
case 3:
$('#videoFrameText').text("COA 155K");
$('#videoiframe').attr('src', sgsa3src);
$('#videoFrame').fadeIn(500);
break;
case 4:
$('#videoFrameText').text("COA 251K");
$('#videoiframe').attr('src', sgsa4src);
$('#videoFrame').fadeIn(500);
break;
}
}

function playSGSA2(num)
{
clickSound.play();
BGM.pause();
switch(num)
{
case 1:
$('#videoFrameText').text("COPS BC");
$('#videoiframe').attr('src', sgsaot1src);
$('#videoFrame').fadeIn(500);
break;
case 2:
$('#videoFrameText').text("COPS SD");
$('#videoiframe').attr('src', sgsaot2src);
$('#videoFrame').fadeIn(500);
break;
case 3:
$('#videoFrameText').text("COA 155K");
$('#videoiframe').attr('src', sgsaot4src);
$('#videoFrame').fadeIn(500);
break;
case 4:
$('#videoFrameText').text("COA 251K");
$('#videoiframe').attr('src', sgsaot5src);
$('#videoFrame').fadeIn(500);
break;
case 5:
$('#videoFrameText').text("COS");
$('#videoiframe').attr('src', sgsaot3src);
$('#videoFrame').fadeIn(500);
break;
case 6:
$('#videoFrameText').text("COE & TDT");
$('#videoiframe').attr('src', sgsaot6src);
$('#videoFrame').fadeIn(500);
break;
}
}

function playAuditorium(num)
{
clickSound.play();
BGM.pause();
switch(num)
{
case 1 :
$('#videoFrameText').text("FOUND MY HAPPINESS THROUGH BEAUTY");
$('#videoiframe').attr('src', auditorium1src);
$('#videoFrame').fadeIn(500);
break;
case 2 :
$('#videoFrameText').text("MAKING MY BUSINESS A REAL BUSINESS");
$('#videoiframe').attr('src', auditorium2src);
$('#videoFrame').fadeIn(500);
break;
case 3 :
$('#videoFrameText').text("DARE TO DREAM AND CHANGE MY LIFE");
$('#videoiframe').attr('src', auditorium3src);
$('#videoFrame').fadeIn(500);
break;
case 4:
$('#videoFrameText').text("DRIVING MY PINK WHEELS TO SUCCESS");
$('#videoiframe').attr('src', auditorium4src);
$('#videoFrame').fadeIn(500);
break;
case 5 :
$('#videoFrameText').text("STRETCHING BEYOND MY LIMITS");
$('#videoiframe').attr('src', auditorium5src);
$('#videoFrame').fadeIn(500);
break;
case 6 :
$('#videoFrameText').text("GROWING MY UNIT DURING PANDEMIC");
$('#videoiframe').attr('src', auditorium6src);
$('#videoFrame').fadeIn(500);
break;
case 7 :
$('#videoFrameText').text("START SOMETHING BEAUTIFUL");
$('#videoiframe').attr('src', auditorium7src);
$('#videoFrame').fadeIn(500);
break;
case 8 :
$('#videoFrameText').text("START SOMETHING BEAUTIFUL");
$('#videoiframe').attr('src', auditorium8src);
$('#videoFrame').fadeIn(500);
break;

}
}

function playNSD(num)
{
clickSound.play();
BGM.pause();
switch(num)
{
case 1 :
$('#videoFrameText').text("NAFISAH OMAR");
$('#videoiframe').attr('src', nsd1src);
$('#videoFrame').fadeIn(500);
break;
case 2 :   
$('#videoFrameText').text("JANE LEE EAN TIN");
$('#videoiframe').attr('src', nsd2src);
$('#videoFrame').fadeIn(500);
break;
case 3 :
$('#videoFrameText').text("ROBIAH HURI");
$('#videoiframe').attr('src', nsd3src);
$('#videoFrame').fadeIn(500);
break;
case 4:
$('#videoFrameText').text("NURUL SHAKIRIN LEWIS");
$('#videoiframe').attr('src', nsd4src);
$('#videoFrame').fadeIn(500);
break;
case 5 :
$('#videoFrameText').text("SUHAIDAH SHEILA");
$('#videoiframe').attr('src', nsd5src);
$('#videoFrame').fadeIn(500);
break;
case 6 :  
$('#videoFrameText').text("NORRAZEAN ABDUL RAHMAN");
$('#videoiframe').attr('src', nsd6src);
$('#videoFrame').fadeIn(500);
break;
case 7 :
$('#videoFrameText').text("KAHIRUNNISA BINTI MAHFAR ADIB");
$('#videoiframe').attr('src', nsd7src);
$('#videoFrame').fadeIn(500);
break;
}
}

async function openQuote1()
{
let checkIn = await checkInPoint(1);
clickSound.play();
$('#quoteImage').attr('src', quote1);
$('#imageFrame').fadeIn(500);
}

async function openQuote2()
{
let checkIn = await checkInPoint(2);
clickSound.play();
$('#quoteImage').attr('src', quote2);
$('#imageFrame').fadeIn(500);
}

async function openQuote3()
{
let checkIn = await checkInPoint(3);
clickSound.play();
$('#quoteImage').attr('src', quote3);
$('#imageFrame').fadeIn(500);
}

async function openQuote4()
{
let checkIn = await checkInPoint(4);
clickSound.play();
$('#quoteImage').attr('src', quote4);
$('#imageFrame').fadeIn(500);
}

async function openQuote5()
{
let checkIn = await checkInPoint(5);
clickSound.play();
$('#quoteImage').attr('src', quote5);
$('#imageFrame').fadeIn(500);
}

async function openQuote6()
{
let checkIn = await checkInPoint(6);
clickSound.play();
$('#quoteImage').attr('src', quote6);
$('#imageFrame').fadeIn(500);
}

async function openQuote7()
{
let checkIn = await checkInPoint(7);
clickSound.play();
$('#quoteImage').attr('src', quote7);
$('#imageFrame').fadeIn(500);
}

async function openQuote8()
{
let checkIn = await checkInPoint(8);
clickSound.play();
$('#quoteImage').attr('src', quote8);
$('#imageFrame').fadeIn(500);
}

async function openQuote9()
{
let checkIn = await checkInPoint(9);
clickSound.play();
$('#quoteImage').attr('src', quote9);
$('#imageFrame').fadeIn(500);
}

async function openQuote10()
{
let checkIn = await checkInPoint(10);
clickSound.play();
$('#quoteImage').attr('src', quote10);
$('#imageFrame').fadeIn(500);
}

async function openQuote11()
{
let checkIn = await checkInPoint(11);
clickSound.play();
$('#quoteImage').attr('src', quote11);
$('#imageFrame').fadeIn(500);
}

async function openQuote12()
{
let checkIn = await checkInPoint(12);
clickSound.play();
$('#quoteImage').attr('src', quote12);
$('#imageFrame').fadeIn(500);
}

async function openQuote13()
{
let checkIn = await checkInPoint(13);
clickSound.play();
$('#quoteImage').attr('src', quote13);
$('#imageFrame').fadeIn(500);
}

async function openQuote14()
{
let checkIn = await checkInPoint(14);
clickSound.play();
$('#quoteImage').attr('src', quote14);
$('#imageFrame').fadeIn(500);
}

async function openQuote15()
{
let checkIn = await checkInPoint(15);
clickSound.play();
$('#quoteImage').attr('src', quote15);
$('#imageFrame').fadeIn(500);
}

async function openQuote16()
{
let checkIn = await checkInPoint(16);
clickSound.play();
$('#quoteImage').attr('src', quote16);
$('#imageFrame').fadeIn(500);
}

async function openQuote17()
{
let checkIn = await checkInPoint(17);
clickSound.play();
$('#quoteImage').attr('src', quote17);
$('#imageFrame').fadeIn(500);
}

async function openQuote18()
{
let checkIn = await checkInPoint(18);
clickSound.play();
$('#quoteImage').attr('src', quote18);
$('#imageFrame').fadeIn(500);
}

async function openQuote19()
{
let checkIn = await checkInPoint(19);
clickSound.play();
$('#quoteImage').attr('src', quote19);
$('#imageFrame').fadeIn(500);
}

async function openQuote20()
{
let checkIn = await checkInPoint(20);
clickSound.play();
$('#quoteImage').attr('src', quote20);
$('#imageFrame').fadeIn(500);
}
