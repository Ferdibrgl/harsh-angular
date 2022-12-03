// Angularjs config
var uemailapp = angular.module('emapp', []).config(function($sceProvider) {
    $sceProvider.enabled(false);
  });
  
  uemailapp.controller('userMainCtrlemail', function($scope, $http) {
    $scope.userformData = {
      'username': '',
      'useremail': '',
      'usermessage': ''
    };
    $scope.userpostDatadtl = function () {
      $http.post('http://ng4free.com/admin/api/v1/form.php', $scope.userformData)
      .success(
        function(result_data){
          $scope.data_response_display = result_data.replace(/\ /g, '  ').replace(/\n/g, '<br/>') // display html web page format response here
        })
      .error(
        function(result_data){
          $scope.data_response_display = result_data
        })
    }
  });