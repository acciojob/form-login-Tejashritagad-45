function getFormvalue() {
	
  event.preventDefault(); // stop form from refreshing the page

  // get values
  const first = document.querySelector('input[name="fname"]').value.trim();
  const last = document.querySelector('input[name="lname"]').value.trim();

  // show full name
  alert(first + " " + last);

}
