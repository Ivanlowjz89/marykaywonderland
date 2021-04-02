var BGM = document.getElementById('bgm');
var clickSound = document.getElementById('clickSound');

//initAvatars();

async function initAvatars()
{
  
var avatarPhoto = "";
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
var avatarImageContainer = "";
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
a.href = avatarImage;
a.download = 'myavatar.png';
a.dataset.downloadurl = [MIME_TYPE, a.download, a.href].join(':');
a.click();
});

//Photobooth
$('#buttonPhotobooth').click(function()
{
  clickSound.play();
  startCamera("data:image/gif;base64,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");
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

function playAuditorium(num)
{

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
