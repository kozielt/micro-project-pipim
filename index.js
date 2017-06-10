var hls = new Hls();
var video = document.getElementById('video');

hls.loadSource('https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8');
hls.attachMedia(video);
hls.on(Hls.Events.MANIFEST_PARSED, function() {
    video.play();
});


var setVideoSize = function (value) {
    var el = $('video');
    switch(value) {
        case '240':
            el.width(240);
            break;
        case '480':
            el.width(480);
            break;
        case '720':
            el.width(720);
            break;
        case '1080':
            el.width(1080);
            break;
    }
};