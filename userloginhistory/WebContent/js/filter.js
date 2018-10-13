/// <reference path="customerController.js"/>		

myapp.filter('gender', function() {
	return function(gender) {
		switch (gender) {
		case 1:
			return 'Male';
			break;
		case '1':
			return 'Male';
			break;
		case 2:
			return 'Female';
			break;
		case '2':
			return 'Female';
			break;
		}
	}
})