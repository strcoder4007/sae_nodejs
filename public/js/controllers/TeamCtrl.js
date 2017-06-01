angular.module('TeamCtrl', []).controller('TeamController', function($scope, $location) {

    var str = $location.path();
    if(str == "/incredibles")
    {
        $scope.teamName = "Incredibles";
        $scope.teamLink = "incredibles";
        $scope.about = "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.";
        $scope.teamColor = "#379023";
    }
    else if(str == "/incredibles2017")
    {
        $scope.teamName = "Incredibles";
        $scope.teamLink = "incredibles";
        $scope.teamData = "Team info for 2017 will be shown here.";
        $scope.teamColor = "#379023";
    }
    else if(str == "/incredibles2016")
    {
        $scope.teamName = "Incredibles";
        $scope.teamLink = "incredibles";
        $scope.teamData = "Team info for 2016 will be shown here.";
        $scope.teamColor = "#379023";
    }



    else if(str == "/immortals")
    {
        $scope.teamName = "Immortals";
        $scope.teamLink = "immortals";
        $scope.about = "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.";
        $scope.teamColor = "#16136c";
    }
    else if(str == "/immortals2017")
    {
        $scope.teamName = "Immortals";
        $scope.teamLink = "immortals";
        $scope.teamData = "Team info for 2017 will be shown here.";
        $scope.teamColor = "#16136c";
    }
    else if(str == "/immortals2016")
    {
        $scope.teamName = "Immortals";
        $scope.teamLink = "immortals";
        $scope.teamData = "Team info for 2016 will be shown here.";
        $scope.teamColor = "#16136c";
    }



    else if(str == "/invincibles")
    {
        $scope.teamName = "Invincibles";
        $scope.teamLink = "invincibles";
        $scope.about = "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.";
        $scope.teamColor = "#a7ef1c";
    }
    else if(str == "/invincibles2017")
    {
        $scope.teamName = "Invincibles";
        $scope.teamLink = "invincibles";
        $scope.teamData = "Team info for 2017 will be shown here.";
        $scope.teamColor = "#a7ef1c";
    }
    else if(str == "/invincibles2016")
    {
        $scope.teamName = "Invincibles";
        $scope.teamLink = "invincibles";
        $scope.teamData = "Team info for 2016 will be shown here.";
        $scope.teamColor = "#a7ef1c";
    }

});
