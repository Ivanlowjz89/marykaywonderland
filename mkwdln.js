$(document).ready(function() {

$('#avatarImage').attr('src', 'https://www.wearegladstone.com/Test/image.png');

//Set unique ID for videos.
var frame1src = "https://www.wearegladstone.com/Test";
  
var auditorium1src = "https://player.vimeo.com/video/528128632";
var auditorium2src = "https://player.vimeo.com/video/528129055";
var auditorium3src = "https://player.vimeo.com/video/528171287";
var auditorium4src = "https://player.vimeo.com/video/528171287";
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
  
$('#openApp1').click(function()
{	

$('#appFrameText').text("TEST APP");
$('#appiframe').attr('src', frame1src);
$('#appFrame').fadeIn(500);

});

$('#buttonAuditoriumVideo1').click(function()
{	

$('#videoFrameText').text("PRISCA SUSELLA TANIS");
$('#videoiframe').attr('src', auditorium1src);
$('#videoFrame').fadeIn(500);

});

$('#buttonAuditoriumVideo2').click(function()
{	

$('#videoFrameText').text("SAYYIDATUL AFFDA BINTI ZAINUDIN");
$('#videoiframe').attr('src', auditorium2src);
$('#videoFrame').fadeIn(500);

});
  
$('#buttonAuditoriumVideo3').click(function()
{	

$('#videoFrameText').text("FARISHA DANIA BT ZAINAL ARIFF");
$('#videoiframe').attr('src', auditorium3src);
$('#videoFrame').fadeIn(500);

});
  
$('#buttonAuditoriumVideo4').click(function()
{	

$('#videoFrameText').text("INTAN FAZLIANA BINTI FAUZI");
$('#videoiframe').attr('src', auditorium4src);
$('#videoFrame').fadeIn(500);

});
  
$('#buttonAuditoriumVideo5').click(function()
{	

$('#videoFrameText').text("JESSICA JANUARIUS");
$('#videoiframe').attr('src', auditorium5src);
$('#videoFrame').fadeIn(500);

});
  
$('#buttonAuditoriumVideo6').click(function()
{	

$('#videoFrameText').text("NURULHARJAH BT HUSSIN");
$('#videoiframe').attr('src', auditorium6src);
$('#videoFrame').fadeIn(500);

});
  
$('#buttonAuditoriumVideo7').click(function()
{	

$('#videoFrameText').text("QISTINA AMIRA BINTI IDRIS");
$('#videoiframe').attr('src', auditorium7src);
$('#videoFrame').fadeIn(500);

});
  
$('#buttonAuditoriumVideo8').click(function()
{	

$('#videoFrameText').text("SUFI SYAZWANI");
$('#videoiframe').attr('src', auditorium8src);
$('#videoFrame').fadeIn(500);

});
  
$('#buttonNSDVideo1').click(function()
{	

$('#videoFrameText').text("NAFISAH OMAR");
$('#videoiframe').attr('src', nsd1src);
$('#videoFrame').fadeIn(500);

});
  
$('#buttonNSDVideo2').click(function()
{	

$('#videoFrameText').text("JANE LEE EAN TIN");
$('#videoiframe').attr('src', nsd2src);
$('#videoFrame').fadeIn(500);

});
  
$('#buttonNSDVideo3').click(function()
{	

$('#videoFrameText').text("ROBIAH HURI");
$('#videoiframe').attr('src', nsd3src);
$('#videoFrame').fadeIn(500);

});
  
$('#buttonNSDVideo4').click(function()
{	

$('#videoFrameText').text("NURUL SHAKIRIN LEWIS");
$('#videoiframe').attr('src', nsd4src);
$('#videoFrame').fadeIn(500);

});
  
$('#buttonNSDVideo5').click(function()
{	

$('#videoFrameText').text("SUHAIDAH SHEILA");
$('#videoiframe').attr('src', nsd5src);
$('#videoFrame').fadeIn(500);

}); 

$('#buttonNSDVideo6').click(function()
{	

$('#videoFrameText').text("NORRAZEAN ABDUL RAHMAN");
$('#videoiframe').attr('src', nsd6src);
$('#videoFrame').fadeIn(500);

}); 

$('#buttonNSDVideo7').click(function()
{	

$('#videoFrameText').text("KAHIRUNNISA BINTI MAHFAR ADIB");
$('#videoiframe').attr('src', nsd7src);
$('#videoFrame').fadeIn(500);

}); 
  
$('#closeButtonVideo').click(function()
{	

$('#videoiframe').attr('src', 'about:blank');
$('#videoFrame').fadeOut(500);

});

$('#closeButtonApp').click(function()
{	

$('#appiframe').attr('src', 'about:blank');
$('#appFrame').fadeOut(500);

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

if (event.origin !== "https://www.wearegladstone.com")
{

return;
}

var data = event.data;  

if (typeof(window[data.func]) == "function") {
console.log("work1");
window[data.func].call();

}

}

});

//VH
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
});

function openVideo()
{

$('#closeButtonApp').click();

}
