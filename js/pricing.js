let faqBtn = document.querySelectorAll('.faq [data-bs-toggle="collapse"]');

faqBtn.forEach(e => {
  e.onclick = () => {
    if (e.classList.contains('active')) {
      e.classList.remove('active');
    } else {
      e.classList.add('active');
    }
  }
})
