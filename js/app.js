angular.module('madApp', [])
    .controller('libCtrl', function ($scope) {
        $scope.shower = false;
        $scope.gender = 'male';
        $scope.hisHer = 'his';
        $scope.heShe = 'he';
        $scope.himHer = 'him';
        $scope.genderMal = function () {
            $scope.hisHer = 'his';
            $scope.heShe = 'he';
            $scope.himHer = 'him';
        }
        $scope.genderFem = function () {
            $scope.hisHer = 'her';
            $scope.heShe = 'she';
            $scope.himHer = 'her';
        }
        $scope.madData = {
            name: 'john',
            jobTitle: 'staple sorter',
            tediousTask: 'straightening staples',
            dirtyTask: 'greasing stapler hinges',
            celebrity: 'denzel',
            uselessSkill: 'blow his nose',
            obnoxiousCelebrity: 'sandler',
            hugeNumber: '4354',
            adjective: 'Hilarious'

        }
        $scope.submit = function () {
            $scope.madData.name = capitalizeName($scope.madData.name);
            $scope.madData.celebrity = capitalizeName($scope.madData.celebrity);
            $scope.madData.obnoxiousCelebrity = capitalizeName($scope.madData.obnoxiousCelebrity);
            $scope.shower = true;
        }
    })

function capitalizeName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}
