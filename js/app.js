angular.module('madApp', ['ngMessages'])
    .controller('libCtrl', function () {
        var lib = this;
        lib.shower = false;
        lib.gender = 'male';
        lib.hisHer = 'his';
        lib.heShe = 'he';
        lib.himHer = 'him';
        lib.genderMal = function () {
            lib.hisHer = 'his';
            lib.heShe = 'he';
            lib.himHer = 'him';
        }
        lib.genderFem = function () {
            lib.hisHer = 'her';
            lib.heShe = 'she';
            lib.himHer = 'her';
        }
        lib.madData = {


        }
        lib.submit = function () {
            lib.madData.name = capitalizeName(lib.madData.name);
            lib.madData.celebrity = capitalizeName(lib.madData.celebrity);
            lib.madData.obnoxiousCelebrity = capitalizeName(lib.madData.obnoxiousCelebrity);
            lib.shower = true;
        }
        lib.reset = function () {
            document.getElementById("madForm").reset();
            lib.shower = false;
        }
    })

function capitalizeName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}
