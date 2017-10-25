$(document).ready(function(){
    $(".close-offcanvas").click(function(){
        $('.navmenu.offcanvas').offcanvas('hide');
        return false;
    });
    $(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

    $(document).ready(function(){
        $("#ico2").click(function(){
            $(".yar2").toggle();
            $('.yar1').css('display','none');
            $('.yar3').css('display','none');
            $('.yar4').css('display','none');
            $("#ico1").removeClass("icon-active1");
            $("#ico2").toggleClass("icon-active2");
            $("#ico3").removeClass("icon-active3");
            $("#ico4").removeClass("icon-active4");

        });
        $("#ico3").click(function(){
            $(".yar3").toggle();
            $('.yar2').css('display','none');
            $('.yar1').css('display','none');
            $('.yar4').css('display','none');
            $("#ico1").removeClass("icon-active1");
            $("#ico3").toggleClass("icon-active3");
            $("#ico2").removeClass("icon-active2");
            $("#ico4").removeClass("icon-active4");

        });
        $("#ico1").click(function(){
            $(".yar1").toggle();
            $('.yar2').css('display','none');
            $('.yar3').css('display','none');
            $('.yar4').css('display','none');
            $("#ico2").removeClass("icon-active2");
            $("#ico1").toggleClass("icon-active1");
            $("#ico3").removeClass("icon-active3");
            $("#ico4").removeClass("icon-active4");

        });
        $("#ico4").click(function(){
            $(".yar4").toggle();
            $('.yar2').css('display','none');
            $('.yar3').css('display','none');
            $('.yar1').css('display','none');
            $("#ico1").removeClass("icon-active1");
            $("#ico4").toggleClass("icon-active4");
            $("#ico3").removeClass("icon-active3");
            $("#ico2").removeClass("icon-active2");

        });
        $(".close-ico").click(function(){
            $('.yar4').css('display','none');
            $('.yar2').css('display','none');
            $('.yar3').css('display','none');
            $('.yar1').css('display','none');
            $("#ico1").removeClass("icon-active1");
            $("#ico4").removeClass("icon-active4");
            $("#ico3").removeClass("icon-active3");
            $("#ico2").removeClass("icon-active2");
        });
    });

    
    window.addEventListener('scroll', function(e) {
        if (window.pageYOffset >= ($("body").offset().top + 100)) {
            $("header").addClass("sticky");
            $("body").css("padding-top","75px");
        }
        else {
            $("header").removeClass("sticky");
            $("body").css("padding-top","0");
        }
        if (window.pageYOffset >= ($("body").offset().top + 900)) {
            $(".main-avd-pagination").addClass("avd-pagination-fixed");
        }
        else {
            $(".main-avd-pagination").removeClass("avd-pagination-fixed");
        }
         if (window.pageYOffset >= ($("body").offset().top + 100)) {
            $(".base-left-col").addClass("left-fix");
        }
        else {
            $(".base-left-col").removeClass("left-fix");
        }
      if (window.pageYOffset >= ($("footer").offset().top - 640)) {
        $(".base-left-col").addClass("left-fix2");
        }
        else {
            $(".base-left-col").removeClass("left-fix2");

        }
        if (window.pageYOffset >= ($("body").offset().top + 200) && window.pageYOffset < ($("footer").offset().top - 1000)) {
            $(".top").fadeIn();
            $(".article .info-panel").css("position","fixed").css("bottom","20px").fadeIn();
        }
        else if(window.pageYOffset >= ($("footer").offset().top - 1000)){
            $(".article .info-panel").css("position","absolute").css("bottom","65px");        
        }
        else {
            $(".top").fadeOut();
            $(".article .info-panel").fadeOut();
        }
    });
    
    $(".base-service h4, .base-way-point h4").click(function(){
       if($(this).hasClass("active")){
           $(this).removeClass("active");
           $(this).siblings("div:not(.decor)").slideUp();
       } 
       else {
            $(this).addClass("active");
            $(this).siblings("div:not(.decor)").slideDown();
       }
        
        return false;
    });
    
    $('.top').click(function (){
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
    
    $(".catalog-category").click(function(){
        if(!$(this).hasClass("active")){
            $(".catalog-category").removeClass("active");
            $(this).addClass("active");
            var ind = $(".catalog-category").index($(this));
            $(".catalog-category .tr").hide();
            $(".catalog-category-companies").hide();
            $(".catalog-xs-container").hide();

            $(this).find(".tr").show();

            if($(window).width() < 468){
                if ( ind & 1 ) {
                    var ind2 = (ind - 1) / 2;
                } 
                else {
                    var ind2 = ind / 2;
                }
                $(".catalog-xs-container").html("");
                var htmlValue = $(".catalog-category-companies:eq("+ind+")").html();
                $(".catalog-xs-container:eq("+ind2+")").html('<div class="container">' + htmlValue + '</div>');
                $(".catalog-xs-container:eq("+ind2+")").slideDown(); 
            }
            else {
                $(".catalog-category-companies:eq("+ind+")").slideDown();    
            }
        }
        else {
            $(".catalog-category").removeClass("active");
            $(".catalog-category-companies").slideUp("fast",
                function(){
                    $(".catalog-category .tr").hide();
                }
            );
            $(".catalog-xs-container").slideUp("fast",
                function(){
                    $(".catalog-category .tr").hide();
                }
            );
        }
        
        return false;
    });
    
    $(".video-overlay a").click(function(){
        $(this).parent(".video-overlay").hide();
        
        return false;
    });
    
    $(".menu-item-has-children").click(function(){
        if(!$(this).hasClass("active")){
            $(".menu-item-has-children").removeClass("active");
            $(this).addClass("active");
            $(".sub-menu").slideUp();
            $(this).find(".sub-menu").slideDown();
        }
        else {
            $(this).removeClass("active");
            $(".sub-menu").slideUp();
        }
        
        return false;
    });
    
    $('.base-way').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
    
    $('#education-slider').slick({
        dots: false,
        arrows: true,
        prevArrow: '.prev',
        nextArrow: '.next',
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10%',
        responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: false,
            slidesToShow: 1
          }
        }
      ]
    });
    
    $('.article-slider').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    if($(window).width() < 768){
        var direction = 'bottom';
    }
    else {
        var direction = 'right';
    }
    
    $('.popover-a').popover({
        html: true,
        placement: direction,
        trigger: "hover",
        content: $(this).attr("data-content")
    });
    
    $('.selectpicker').selectpicker({
      style: 'btn-info',
      size: 4
    });

});

      (function (){
            // Ссылка на uploader
            var form = document.forms.userpic;

            // Ссылка на инпут, через который юзер будет выбирать файл
            var input = form.photo;

            // Ссылка на DOM-элемент, где будем отображать preview
            var preview = document.getElementById('preview');

            // Параметры предварительного просмотра
            var previewOpts = {
                  width:  112
                , height: 112
            };

            // Параметры загрузки
            var uploadOpts = {
                  url: '/upload' // куда грузить
                , data: {} // дополнительный POST-параметры
                , name: 'userpic' // название POST-параметра загружаемого файла
                , activeClassName: 'upload_active' // класс, который будем добавлять общему контейнеру при загрузке
            };

            // Функция, которая будет срабатывать при выборе файла
            var _onSelectFile = function (evt/**Event*/){
                // Получаем выбранный файл
                var file = FileAPI.getFiles(evt)[0];

                if( file ){
                    // Строим preview для изображений
                    _createPreview(file);

                    // Загружаем файл на сервер
                    _uploadFile(file);
                }
            };

            // Функция создающая preview для изображения
            var _createPreview = function (file/**File*/){
                FileAPI.Image(file)
                    .preview(previewOpts.width, previewOpts.height)
                    .get(function (err, image){
                        // Если не было ошибок, то вставляем изображение
                        if( !err ){
                            // Отчищаем контейнер от текущего изображения
                            preview.innerHTML = '';

                            // Вставляем новое
                            preview.appendChild(image);
                        }
                    })
                ;
            };

            // Функция загрузки файла на сервер
            var _uploadFile = function (file){
                // Подготавливаем опции для загрузки
                var opts = FileAPI.extend(uploadOpts, {
                    files: {},

                    // событие "начало загрузки"
                    upload: function (){
                        form.className += ' '+uploadOpts.activeClassName;
                    },

                    // событие "конец загрузки"
                    complete: function (err, xhr){
                        form.className = (' '+form.className+' ').replace(' '+uploadOpts.activeClassName+' ', ' ');

                        if( err ){
                            document.getElementsByClassName('profile-file')[0].className += ' file-uploaded';
                        } else {
                            // всё успешно загрузилось
                            document.getElementsByClassName('profile-file')[0].className += ' file-uploaded';
                        }
                    }
                });

                // Добавляем файл, который будем загружать
                opts.files[opts.name] = file;

                // Загружаем на сервер
                FileAPI.upload(opts);
            };

            // Подписываемся на событие "change", оно будет срабатывать при выборе файла
            FileAPI.event.on(input, "change", _onSelectFile);
        })();

