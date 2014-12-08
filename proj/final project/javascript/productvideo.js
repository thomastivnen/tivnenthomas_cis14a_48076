<script>
// script written by Thomas Tivnen for products page of website.
// 14a javascript class
// Load the IFrame Player API code 

// setting the values
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

// writing function setting for the player 
function onYouTubePlayerAPIReady()  {
player = new YT.Player('ytplayer',  {
      height: '150',
      width: '200',
      videoId: JCLNbW_KPM?
      });
  }
</script>
