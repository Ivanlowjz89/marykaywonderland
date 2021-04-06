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

//Set unique ID for videos.
var auditoriumIBCsrc = "https://staging.marykaymysgcc2021.com/apps/AuditoriumIBC";
var auditoriumPublicsrc = "https://staging.marykaymysgcc2021.com/apps/AuditoriumPublic";
var universitysrc = "https://staging.marykaymysgcc2021.com/apps/University";
var nsdsrc = "https://staging.marykaymysgcc2021.com/apps/NSD";

var auditorium1src = "https://player.vimeo.com/video/528128632";
var auditorium2src = "https://player.vimeo.com/video/528129055";
var auditorium3src = "https://player.vimeo.com/video/528171287";
var auditorium4src = "https://player.vimeo.com/video/528128130";
var auditorium5src = "https://player.vimeo.com/video/528176359";
var auditorium6src = "https://player.vimeo.com/video/528178378";
var auditorium7src = "https://player.vimeo.com/video/528676498";
var auditorium8src = "https://player.vimeo.com/video/528675150";

var nsd1src = "https://www.youtube.com/embed/PLK5G6njtO8";
var nsd2src = "https://www.youtube.com/embed/hEx0_O3BooA";
var nsd3src = "https://www.youtube.com/embed/44vaEwj6UWM";
var nsd4src = "https://www.youtube.com/embed/2A3_47BI34w";
var nsd5src = "https://www.youtube.com/embed/CXz8Wx9V-3w";
var nsd6src = "https://www.youtube.com/embed/k6IaeQbLfmc";
var nsd7src = "https://www.youtube.com/embed/_Wyfv6DRabs";

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

var sgsa1src = "https://player.vimeo.com/video/533450659";
var sgsa2src = "https://player.vimeo.com/video/533450735";

var sgsaot1src = "https://player.vimeo.com/video/533450798";
var sgsaot2src = "https://player.vimeo.com/video/533450923";
var sgsaot3src = "https://player.vimeo.com/video/533451025";
var sgsaot4src = "https://player.vimeo.com/video/533450403";
var sgsaot5src = "https://player.vimeo.com/video/533450493";
var sgsaot6src = "https://player.vimeo.com/video/533450574";

var sgmoveup1src = "https://player.vimeo.com/video/533450350";
var sgmoveup2src = "https://player.vimeo.com/video/533450273";

var sgleadsrc = "https://player.vimeo.com/video/533449791";

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
  window.open("https://staging.marykaymysgcc2021.com/users/sign_out", "_self");
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

if (window.addEventListener) 
{
window.addEventListener("message", onMessage, false);        
} 
else if (window.attachEvent) 
{
window.attachEvent("onmessage", onMessage, false);
}

function onMessage(event) {
if (event.origin !== "https://www.wearegladstone.com") return;
var data = event.data;  
if (typeof(window[data.func]) == "function") {
window[data.func].call(null, data.message);
}

}

//VH
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
$('#menuBlock').css("width", $('#menuBlock').height() * 1.898);
});

function openMickMock()
{
  clickSound.play();
  console.log("Open Mick Mock");
  
}

function openRecognition()
{
  clickSound.play();
  console.log("Open Recognition");  
  
}

function openProductGallery()
{
  clickSound.play();
  console.log("Open Product Gallery");  
  
}

function openLuckyDraw()
{
  clickSound.play();
  console.log("Open Lucky Draw");  
  
}

function openExcitement()
{
  clickSound.play();
  console.log("Open Excitement");  
  
}

function openUniversity()
{
clickSound.play();
$('#appFrameText').text("UNIVERSITY");
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

function openAuditorium()
{
  clickSound.play();
$('#appFrameText').text("AUDITORIUM");
$('#appiframe').attr('src', auditoriumIBCsrc);
$('#appFrame').fadeIn(500);
  
}

function openAuditoriumIBC()
{
clickSound.play();
$('#appFrameText').text("AUDITORIUM");
$('#appiframe').attr('src', auditoriumIBCsrc);
$('#appFrame').fadeIn(500);

}

function openAuditoriumPublic()
{
clickSound.play();
$('#appFrameText').text("AUDITORIUM");
$('#appiframe').attr('src', auditoriumPublicsrc);
$('#appFrame').fadeIn(500);

}

function playMYND(num)
{
  
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
  BGM.pause();
  $('#videoFrameText').text("NSD IN MAKING");
  $('#videoiframe').attr('src', mynsdsrc);
  $('#videoFrame').fadeIn(500); 
}

function playMYLead()
{
  BGM.pause();
  $('#videoFrameText').text("LEAD PROGRAMS");
  $('#videoiframe').attr('src', myleadsrc);
  $('#videoFrame').fadeIn(500);
}

function playMYMoveUp(num)
{
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
  BGM.pause();
  $('#videoFrameText').text("LEAD PROGRAM");
  $('#videoiframe').attr('src', sgleadsrc);
  $('#videoFrame').fadeIn(500);
  
}

function playSGND()
{
  BGM.pause();
  $('#videoFrameText').text("NEW SALES DIRECTOR DEBUT");
  $('#videoiframe').attr('src', sgleadsrc);
  $('#videoFrame').fadeIn(500);
}

function playSGMoveUp(num)
{
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
  BGM.pause();
  switch(num)
  {
   
    case 1:
      $('#videoFrameText').text("TEAM LEADER");
      $('#videoiframe').attr('src', sgmoveup1src);
      $('#videoFrame').fadeIn(500);
      break;
      
  }
  
}
function playAuditorium(num)
{
  BGM.pause();
  switch(num)
  {
    
    case 1 :
      $('#videoFrameText').text("PRISCA SUSELLA TANIS");
      $('#videoiframe').attr('src', auditorium1src);
      $('#videoFrame').fadeIn(500);
    break;
    case 2 :
      $('#videoFrameText').text("SAYYIDATUL AFFDA BINTI ZAINUDIN");
      $('#videoiframe').attr('src', auditorium2src);
      $('#videoFrame').fadeIn(500);
    break;
    case 3 :
      $('#videoFrameText').text("FARISHA DANIA BT ZAINAL ARIFF");
      $('#videoiframe').attr('src', auditorium3src);
      $('#videoFrame').fadeIn(500);
    break;
    case 4:
      $('#videoFrameText').text("INTAN FAZLIANA BINTI FAUZI");
      $('#videoiframe').attr('src', auditorium4src);
      $('#videoFrame').fadeIn(500);
    break;
    case 5 :
      $('#videoFrameText').text("JESSICA JANUARIUS");
      $('#videoiframe').attr('src', auditorium5src);
      $('#videoFrame').fadeIn(500);
    break;
    case 6 :
      $('#videoFrameText').text("NURULHARJAH BT HUSSIN");
      $('#videoiframe').attr('src', auditorium6src);
      $('#videoFrame').fadeIn(500);
    break;
    case 7 :
      $('#videoFrameText').text("QISTINA AMIRA BINTI IDRIS");
      $('#videoiframe').attr('src', auditorium7src);
      $('#videoFrame').fadeIn(500);
    break;
    case 8 :
      $('#videoFrameText').text("SUFI SYAZWANI");
      $('#videoiframe').attr('src', auditorium8src);
      $('#videoFrame').fadeIn(500);
    break;
    
  }
}

function playNSD(num)
{
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

function openQuote1()
{
clickSound.play();
$('#quoteImage').attr('src', quote1);
$('#imageFrame').fadeIn(500);

}

function openQuote2()
{
clickSound.play();
$('#quoteImage').attr('src', quote2);
$('#imageFrame').fadeIn(500);

}

function openQuote3()
{
clickSound.play();
$('#quoteImage').attr('src', quote3);
$('#imageFrame').fadeIn(500);

}

function openQuote4()
{
clickSound.play();
$('#quoteImage').attr('src', quote4);
$('#imageFrame').fadeIn(500);

}

function openQuote5()
{
clickSound.play();
$('#quoteImage').attr('src', quote5);
$('#imageFrame').fadeIn(500);

}

function openQuote6()
{
clickSound.play();
$('#quoteImage').attr('src', quote6);
$('#imageFrame').fadeIn(500);

}

function openQuote7()
{
clickSound.play();
$('#quoteImage').attr('src', quote7);
$('#imageFrame').fadeIn(500);

}

function openQuote8()
{
clickSound.play();
$('#quoteImage').attr('src', quote8);
$('#imageFrame').fadeIn(500);

}

function openQuote9()
{
clickSound.play();
$('#quoteImage').attr('src', quote9);
$('#imageFrame').fadeIn(500);

}

function openQuote10()
{
clickSound.play();
$('#quoteImage').attr('src', quote10);
$('#imageFrame').fadeIn(500);

}

function openQuote11()
{
clickSound.play();
$('#quoteImage').attr('src', quote11);
$('#imageFrame').fadeIn(500);

}

function openQuote12()
{
clickSound.play();
$('#quoteImage').attr('src', quote12);
$('#imageFrame').fadeIn(500);

}

function openQuote13()
{
clickSound.play();
$('#quoteImage').attr('src', quote13);
$('#imageFrame').fadeIn(500);

}

function openQuote14()
{
clickSound.play();
$('#quoteImage').attr('src', quote14);
$('#imageFrame').fadeIn(500);

}

function openQuote15()
{
clickSound.play();
$('#quoteImage').attr('src', quote15);
$('#imageFrame').fadeIn(500);

}

function openQuote16()
{
clickSound.play();
$('#quoteImage').attr('src', quote16);
$('#imageFrame').fadeIn(500);

}

function openQuote17()
{
clickSound.play();
$('#quoteImage').attr('src', quote17);
$('#imageFrame').fadeIn(500);

}

function openQuote18()
{
clickSound.play();
$('#quoteImage').attr('src', quote18);
$('#imageFrame').fadeIn(500);

}

function openQuote19()
{
clickSound.play();
$('#quoteImage').attr('src', quote19);
$('#imageFrame').fadeIn(500);

}

function openQuote20()
{
clickSound.play();
$('#quoteImage').attr('src', quote20);
$('#imageFrame').fadeIn(500);

}
