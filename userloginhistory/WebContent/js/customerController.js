var myapp = angular
	.module('myapp', [ 'angularUtils.directives.dirPagination' ]);

myapp.controller('customerController', function($scope, $http) {

	var encodingstring = window.btoa("numery" + ":" + "password");

	console.log("numery" + ":" + "password");
	console.log(encodingstring);

	$http({
		headers : {
			'Authorization' : 'Basic ' + encodingstring
		},
		method : "get",
		url : "http://192.168.1.7:8081/userloginhistoryapi/rest/secured/userloginhistory/getall"
	}).then(function(response) {
		$scope.lstUser = response.data;
		$scope.rowLimit=200;
		//$log.info(response);		
		$scope.usertable="userviewtable.html";
		$scope.userlist="userviewlist.html";
		console.log(response.data);
		console.log($scope.lstUser);
	})

	$scope.sortColumn = "name";
	$scope.reverseSort = false;

	$scope.sortData = function(column) {
		$scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
		$scope.sortColumn = column;
	};

	$scope.getSortColumn = function(column) {

		if ($scope.sortColumn == column) {
			return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
		}
		return '';
	};

	function getSelectedIndex(id) {
		for (var i = 0; i < $scope.listCustomers.length; i++)
			if ($scope.listCustomers[i].id == id)
				return i
		return -1;
	}
	;
});