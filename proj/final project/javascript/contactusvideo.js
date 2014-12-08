<script. 
// script written by Thomas Tivnen for the contact us webpage
//  cis 14a  javascript class
// Load the IFrame Player API code

// Setting the values
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

// Writing the function setting for player
function onYouTubePlayerAPIReady()  {
      player = new YT.Player('ytplayer',  {
      height: '177',
      width: '255',
      videoId: JCLNbW_KPM?
   });
}
</script>