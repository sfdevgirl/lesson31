$( document ).ready(function() {
	for (var i=1; i <= 100; i++) {

		if (i % 15 == 0) {
			$(body).append("fizzbuzz");
		} else if (i % 3 == 0) {
			$(body).append("fizz");
		} else if (i % 5 == 0) {
			$(body).append("buzz");
		} else {
			$(body).append(i);
		}
		$(body).append("<br>");
  	}
});