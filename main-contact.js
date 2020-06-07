// Declare variables
var myForm, selectEbook, ebooksHint, termsCond, termsCondHint;
// Store elements
myForm          = document.getElementById('our-form');
selectEbook = document.getElementById('ebook');
ebooksHint   = document.getElementById('ebookHint');
termsCond         = document.getElementById('termsAndCond');
termsCondHint     = document.getElementById('termsAndCondHint');

// Declare function
function ebookHint() {
  var yourOption = this.options[this.selectedIndex].value;
  // Get selected option
  if (yourOption == 'tips') {
    ebooksHint.innerHTML = 'Buna alegere!';
  } else {
    ebooksHint.innerHTML = 'Vei invata multe lucruri noi!';
  }
}

// Declare function
function verifyTerms(e) {
	// If checkbox ticked
  if (!termsCond.checked) {
	// Show message
    termsCondHint.innerHTML = '!Bifeaza casuta Termeni si Conditii!';
	// Don't submit form
    e.preventDefault();
  }
}

//Create event listeners: submit calls verifyTerms(), change calls ebookHint()
myForm.addEventListener('submit', verifyTerms, false);
selectEbook.addEventListener('change', ebookHint, false);