;
Array.prototype.shuffle = function () {
    for (var i = this.length - 1; i > 0; i--) {
        var num = Math.floor(Math.random() * (i + 1));
        var d = this[num];
        this[num] = this[i];
        this[i] = d;
    }
    return this;
};

window.addEventListener('load', function (e) {
    $('.content-container').on('click', function () {
        var el = document.documentElement,
            rfs = el.requestFullscreen
                || el.webkitRequestFullScreen
                || el.mozRequestFullScreen
                || el.msRequestFullscreen
        ;

        rfs.call(el);
    });
});


var logos = [
    {
        id: 'team1',
        img: 'img/ITSchool.png',
        align: 'left'
    },
    {
        id: 'team2',
        img: 'img/АДЕКК.png',
        align: 'center'
    },
    {
        id: 'team3',
        img: 'img/ВладПКУ.png',
        align: 'center'
    },
    {
        id: 'team4',
        img: 'img/ЕкСВУ.png',
        align: 'center'
    },
    {
        id: 'team5',
        img: 'img/КМКВК.png',
        align: 'center'
    },
    {
        id: 'team6',
        img: 'img/КПКУ.png',
        align: 'right'
    },
    {
        id: 'team7',
        img: 'img/НВМУ.png',
        align: 'left'
    },
    {
        id: 'team71',
        img: 'img/blank.png',
        align: 'center'
    },
    {
        id: 'team72',
        img: 'img/blank.png',
        align: 'center'
    },
    {
        id: 'team73',
        img: 'img/blank.png',
        align: 'center'
    },
    {
        id: 'team74',
        img: 'img/blank.png',
        align: 'center'
    },
    {
        id: 'team8',
        img: 'img/ОКВК.png',
        align: 'right'
    },
    {
        id: 'team9',
        img: 'img/ОПКУ.png',
        align: 'left'
    },
    {
        id: 'team91',
        img: 'img/blank.png',
        align: 'left'
    },
    {
        id: 'team92',
        img: 'img/blank.png',
        align: 'left'
    },
    {
        id: 'team93',
        img: 'img/blank.png',
        align: 'left'
    },
    {
        id: 'team94',
        img: 'img/blank.png',
        align: 'left'
    },
    {
        id: 'team10',
        img: 'img/ППКУ.png',
        align: 'right'
    },
    {
        id: 'team11',
        img: 'img/ПСВУ.png',
        align: 'left'
    },
    {
        id: 'team12',
        img: 'img/СевКавСВУ.png',
        align: 'center'
    },
    {
        id: 'team13',
        img: 'img/СевПКУ.png',
        align: 'center'
    },
    {
        id: 'team14',
        img: 'img/СПбСВУ.png',
        align: 'center'
    },
    {
        id: 'team15',
        img: 'img/СПКУ.png',
        align: 'center'
    },
    {
        id: 'team16',
        img: 'img/ТвСВУ.png',
        align: 'right'
    }
];

var gallery = new Vue({
    el: '#app',
    data: {
        logos: logos,
        pyro: '<div class="pyro"><div class="before"></div><div class="after"></div></div>',
        text: '<span style="font-size: 10vh;">Первенство</span><br> Вооруженных Сил Российской Федерации <br>по гандболу - 2018'
    },
    watch: {

    },
    computed: {

    },
    methods: {
        galleryClickHandle: function (evt) {
            var el = document.documentElement,
                rfs = el.requestFullscreen
                    || el.webkitRequestFullScreen
                    || el.mozRequestFullScreen
                    || el.msRequestFullscreen
            ;

            rfs.call(el);
        }
    }
});

var HEADER = 'Первенство ВС РФ по гандболу<br> среди воспитанников ДОО МОРФ<br>октябрь 2018г.';

function playAudio(audio, options) {
    options = options || {};
    var a = document.getElementById(audio);
    //a.playbackRate = options.speed || 1;

    // if(a.currentTime)
    //     a.currentTime = 0;
    $(a).off();

    var onEnded = function (e) {

    };

    a.play();
    a.addEventListener('ended', onEnded);
}