//
// $(document).on('scroll', function() {
//
//   var pixels = $(document).scrollTop()
//   var documentHeight = $(document).height()
//   var windowHeight = $(window).height()
//
//   var difference = documentHeight - windowHeight
//   var percentage = 100 * pixels / difference
//
//
//   $('.cat').css('background-position', pixels + 'vh')
// })

  $(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();
    var maxScroll = $(document).height() - $(window).height();

var catheight = $(document).height() - 285;

    var totalFrames = 16; // total number of frames in sprite
    var frameWidth = 330; // width of one frame in px

    var scrollFraction = scrollTop / maxScroll;
    var currentFrame = Math.floor(scrollFraction * totalFrames);

    // Clamp to max frame
    currentFrame = Math.min(currentFrame, totalFrames - 1);

    var newX = -frameWidth * currentFrame;

$('.box').css('height', catheight );

    $('.cat').css('background-position', `${newX}px 0`);


  });
