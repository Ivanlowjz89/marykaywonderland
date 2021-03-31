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
 
var quote1 = "images/MK Facts-01.jpg";
var quote2 = "images/MK Facts-02.jpg";
var quote3 = "images/MK Facts-03.jpg";
var quote4 = "images/MK Facts-04.jpg";
var quote5 = "images/MK Facts-05.jpg";
var quote6 = "images/MK Facts-06.jpg";
var quote7 = "images/MK Facts-07.jpg";
var quote8 = "images/MK Facts-08.jpg";
var quote9 = "images/MK Facts-09.jpg";
var quote10 = "images/MK Facts-10.jpg";
var quote11 = "images/MK Facts-11.jpg";
var quote12 = "images/MK Facts-12.jpg";
var quote13 = "images/MK Facts-13.jpg";
var quote14 = "images/MK Facts-14.jpg";
var quote15 = "images/MK Facts-15.jpg";
var quote16 = "images/MK Facts-16.jpg";
var quote17 = "images/MK Facts-17.jpg";
var quote18 = "images/MK Facts-18.jpg";
var quote19 = "images/MK Facts-19.jpg";
var quote20 = "images/MK Facts-20.jpg";
  
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
  
$('#closeButtonImage').click(function()
{	
  
$('#imageFrame').fadeOut(500);

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

function openQuote1()
{
  
$('#quoteImage').attr('src', quote1);
$('#imageFrame').fadeIn(500);
  
}

function openQuote2()
{
  
$('#quoteImage').attr('src', quote2);
$('#imageFrame').fadeIn(500);
  
}

function openQuote3()
{
  
$('#quoteImage').attr('src', quote3);
$('#imageFrame').fadeIn(500);
  
}

function openQuote4()
{
  
$('#quoteImage').attr('src', quote4);
$('#imageFrame').fadeIn(500);
  
}

function openQuote5()
{
  
$('#quoteImage').attr('src', quote5);
$('#imageFrame').fadeIn(500);
  
}

function openQuote6()
{
  
$('#quoteImage').attr('src', quote6);
$('#imageFrame').fadeIn(500);
  
}

function openQuote7()
{
  
$('#quoteImage').attr('src', quote7);
$('#imageFrame').fadeIn(500);
  
}

function openQuote8()
{
  
$('#quoteImage').attr('src', quote8);
$('#imageFrame').fadeIn(500);
  
}

function openQuote9()
{
  
$('#quoteImage').attr('src', quote9);
$('#imageFrame').fadeIn(500);
  
}

function openQuote10()
{
  
$('#quoteImage').attr('src', quote10);
$('#imageFrame').fadeIn(500);
  
}

function openQuote11()
{
  
$('#quoteImage').attr('src', quote11);
$('#imageFrame').fadeIn(500);
  
}

function openQuote12()
{
  
$('#quoteImage').attr('src', quote12);
$('#imageFrame').fadeIn(500);
  
}

function openQuote13()
{
  
$('#quoteImage').attr('src', quote13);
$('#imageFrame').fadeIn(500);
  
}

function openQuote14()
{
  
$('#quoteImage').attr('src', quote14);
$('#imageFrame').fadeIn(500);
  
}

function openQuote15()
{
  
$('#quoteImage').attr('src', quote15);
$('#imageFrame').fadeIn(500);
  
}

function openQuote16()
{
  
$('#quoteImage').attr('src', quote16);
$('#imageFrame').fadeIn(500);
  
}

function openQuote17()
{
  
$('#quoteImage').attr('src', quote17);
$('#imageFrame').fadeIn(500);
  
}

function openQuote18()
{
  
$('#quoteImage').attr('src', quote18);
$('#imageFrame').fadeIn(500);
  
}

function openQuote19()
{
  
$('#quoteImage').attr('src', quote19);
$('#imageFrame').fadeIn(500);
  
}

function openQuote20()
{
  
$('#quoteImage').attr('src', quote20);
$('#imageFrame').fadeIn(500);
  
}
