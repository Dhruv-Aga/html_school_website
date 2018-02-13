var y=0;
function slide() {
    var  arr = document.getElementsByClassName("mySlide");
    for (var i = 0; i < arr.length; i++) {
        arr[i].style.display = "none";
    }
    if (y === 3) {
        y=0;
    }
    arr[y].style.display = "block";
    y++;
}

    setInterval(function(){
        slide()},2000
    );

var menu = 1;
function nav_bar() {

    menu = menu + 1;
    if (menu % 2 === 0) {
        document.getElementById("main_nav").style.display = 'inline';
        document.getElementById("me").style.display = 'inline';
    }
    else {
        document.getElementById("me").style.display = 'none';
        document.getElementById("main_nav").style.display = 'none';
        document.getElementById("home").style.display = 'block';

    }
}

function enter(z) {
    var x = document.getElementsByClassName("slidesKeLiye");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    var slides = document.getElementsByClassName("sub");
    for (var K = 0; K < slides.length; K++) {
        slides[K].style.display = "none";
    }
    switch (z) {
        case 0: {
            document.getElementById("home").style.display = 'none';
            document.getElementById("aboutUs").style.display = 'inline';
            document.getElementById("slide4").style.display = 'inline';

            break;
        }
        case 1: {
            document.getElementById("home").style.display = 'none';
            document.getElementById("facilities").style.display = 'block';
            document.getElementById("slide10").style.display = 'inline';
            break;
        }
        case 2: {
            document.getElementById("home").style.display = 'none';
            document.getElementById("studentLife").style.display = 'block';
            document.getElementById("slide19").style.display = 'inline';
            break;
        }
        case 3: {
            document.getElementById("home").style.display = 'none';
            document.getElementById("ourTeam").style.display = 'block';
            document.getElementById("slide25").style.display = 'inline';
            break;
        }
        case 4: {
            document.getElementById("home").style.display = 'none';
            document.getElementById("academics").style.display = 'block';
            document.getElementById("slide27").style.display = 'inline';
            break;
        }
        case 5: {
            document.getElementById("home").style.display = 'none';
            document.getElementById("coCirriculum").style.display = 'block';
            document.getElementById("slide33").style.display = 'inline';
            break;
        }
        case 6: {
            document.getElementById("home").style.display = 'none';
            document.getElementById("getInTouch").style.display = 'block';
            document.getElementById("slide39").style.display = 'inline';
            break;
        }
    }
}

function show() {
    var slides = document.getElementsByClassName("sub");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    document.getElementById("home").style.display = 'block';
}

function slideShow(slideNo) {
    var x = document.getElementsByClassName("slidesKeLiye");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById("slide" + slideNo).style.display = "inline";

}
function content(slideNo) {
    switch (slideNo) {
        case 4:
            jQuery.get('pages/Director.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 5:
            jQuery.get('pages/Manager.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 6:
            jQuery.get('pages/Principal.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 7:
            jQuery.get('pages/Mission.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 8:
            jQuery.get('pages/FastFacts.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 9:
            jQuery.get('pages/Achievements.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 10:
            jQuery.get('pages/ComputerLab.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 11:
            jQuery.get('pages/DigitalClassrooms.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 12:
            jQuery.get('pages/Infirmary.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case  13:
            jQuery.get('pages/Laboratories.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 14:
            jQuery.get('pages/Library.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 15:
            jQuery.get('pages/MeditationRoom.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 16:
            jQuery.get('pages/Security.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 17:
            jQuery.get('pages/Transportation.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 18:
            jQuery.get('pages/HobbyClubs.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 19:
            jQuery.get('pages/HouseSystem.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 20:
            jQuery.get('pages/SocialCommitment.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 21:
            jQuery.get('pages/StudentCounceling.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 22:
            jQuery.get('pages/Alumni.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 23:
            jQuery.get('pages/WhatSets.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 24:
            jQuery.get('pages/FacultyEnchancement.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 25:
            jQuery.get('pages/Opportunities.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 26:
            jQuery.get('pages/Affliation.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 27:
            jQuery.get('pages/AdmissionRules.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 28:
            jQuery.get('pages/Curriculum.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 29:
            jQuery.get('pages/HowweTeach.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 30:
            jQuery.get('pages/Enhancement.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 31:
            jQuery.get('pages/ExperiementalLearning.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 32:
            jQuery.get('pages/Music-Dance-Drama.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 33:
            jQuery.get('pages/Sports.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 34:
            jQuery.get('pages/Art&Craft.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 35:
            jQuery.get('pages/Trips&Excrusions.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 36:
            jQuery.get('pages/Just for Fun.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 37:
            jQuery.get('pages/SpecialAssemblies.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 38:
            jQuery.get('pages/EventUpdate.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 39:
            jQuery.get('pages/ContactUs.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 40:
            jQuery.get('pages/FacebookPage.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 41:
            jQuery.get('pages/Direction.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
        case 42:
            jQuery.get('pages/GoogleEarthMap.html', function (data) {
                document.getElementById("left_main").innerHTML = data;
            });
            break;
    }
}
