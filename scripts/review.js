
localStorage.clear();
let totalReview = localStorage.getItem("totalReviews");
let total = document.querySelector('strong');
total.innerHTML = "";

total.innerHTML = totalReview;