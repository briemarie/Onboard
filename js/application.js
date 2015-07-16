$(document).ready(function(){
  var videoCount = 0;
  var nextButton = document.getElementById("next-button");
  var videoTitle = document.getElementById('title');
  var videoPanel = document.getElementById('video-player');
  var videoArray = ['Adding a New User to your Happy Inspector Account', 'Filtering Viewing and Deleting a Report', 'Filter Assets', 'Editing Your Own User Profile', 'Adding Editing and Deleting an Asset', 'Downloading a Report as PDF', 'Running a Data Export'];

  function run(){
    if (videoCount >= (videoArray.length - 1)) {
    videoCount = 0
    } else {
    videoCount++;
    };
    var nextVideo = videoArray[videoCount] + '.mp4';

    videoPanel.innerHTML = "<video id='video' controls><source src='../assets/"+nextVideo+"' type='video/mp4'></video>"

    videoTitle.innerHTML = videoArray[videoCount]
  };

  function checkedOff(){
    var nextVideoTitle = document.body.getElementsByTagName("h4")[0].innerHTML
    var nextVideoIndex = videoArray.indexOf(nextVideoTitle)
    var watchedVideoIndex = nextVideoIndex - 1

    if (nextVideoIndex == 0) {
      var watchedVideoIndex = (videoArray.length - 1)
    };

    $("input[data-id='"+watchedVideoIndex+"']").attr('checked', true);
  };

  $("#video-player").get(0).addEventListener('ended', function(){
    run();
    checkedOff();
  }, true);

  $(nextButton).click(function(){
    if (videoCount >= (videoArray.length - 1)) {
    videoCount = 0
    } else {
    videoCount++;
    };
    var nextVideo = videoArray[videoCount] + '.mp4';

    videoPanel.innerHTML = "<video id='video' controls><source src='../assets/"+nextVideo+"' type='video/mp4'></video>"

    videoTitle.innerHTML = videoArray[videoCount]
  });

  $('a').click(function(){
    var number = $(this).data("id")
    videoCount = number
    var nextVideo = videoArray[number] + '.mp4';

    videoPanel.innerHTML = "<video id='video' controls><source src='../assets/"+nextVideo+"' type='video/mp4'></video>"

    videoTitle.innerHTML = $(this).text();
  });

});
