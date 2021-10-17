/* CUSTOM CURSOR */
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

function customCursor(e) {
  TweenMax.to(cursor, 0, {
    css: { left: e.clientX, top: e.clientY }
  });

  TweenMax.to(cursorFollower, 1.2, {
    css: { left: e.clientX - 13, top: e.clientY - 13 },
    ease: Elastic.easeOut
  });
};

window.addEventListener('mousemove', customCursor);


/* TRANSFORM ON HOVER */
const anchorTag = document.querySelectorAll('a');

function changeCursorOnHover(element) {
  element.addEventListener('mouseover', function () {
    cursorFollower.classList.add('cursor-follow-transform');
    TweenMax.to(cursorFollower, 1.5, {
      css: { scale: 1.5 },
      ease: Elastic.easeOut,
    });
    cursor.classList.add('cursor-transform');
  });
  element.addEventListener('mouseout', function () {
    cursorFollower.classList.remove('cursor-follow-transform');
    TweenMax.to(cursorFollower, 0.5, {
      css: { scale: 1 },
      ease: Elastic.linear
    });
    cursor.classList.remove('cursor-transform');
  });
}

anchorTag.forEach(a => changeCursorOnHover(a));


/* CHANGE CURSOR TO WHITE IF BACKGROUND COLOR IS BLACK */
const bg = document.querySelectorAll('.bg');

bg.forEach(element => {
  if (element.classList.contains('bg-black')) {
    element.addEventListener('mouseover', function () {
      cursor.classList.add('cursor-white');
      cursorFollower.classList.add('cursor-follow-white');
    });
    element.addEventListener('mouseout', function () {
      cursor.classList.remove('cursor-white');
      cursorFollower.classList.remove('cursor-follow-white');
    });
  }
})