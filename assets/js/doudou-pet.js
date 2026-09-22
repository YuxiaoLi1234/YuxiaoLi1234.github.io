(function () {
  'use strict';

  var pet = document.querySelector('[data-doudou-pet]');
  if (!pet) return;

  var button = pet.querySelector('.doudou-pet__button');
  var sprite = pet.querySelector('.doudou-pet__sprite');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var idle = { row: 0, frames: 6 };
  var actions = [
    { row: 3, frames: 4 }, // wave
    { row: 4, frames: 5 }  // jump
  ];
  var frame = 0;
  var actionIndex = 0;
  var timer = null;
  var active = idle;

  function paint() {
    var x = active.frames === 1 ? 0 : (frame / (active.frames - 1)) * 100;
    var y = (active.row / 8) * 100;
    sprite.style.backgroundPosition = x + '% ' + y + '%';
  }

  function stop() {
    if (timer) window.clearInterval(timer);
    timer = null;
  }

  function play(animation, once) {
    stop();
    active = animation;
    frame = 0;
    paint();
    if (reducedMotion) return;

    timer = window.setInterval(function () {
      frame += 1;
      if (frame >= active.frames) {
        if (once) {
          play(idle, false);
          return;
        }
        frame = 0;
      }
      paint();
    }, 140);
  }

  button.addEventListener('click', function () {
    var action = actions[actionIndex % actions.length];
    actionIndex += 1;
    play(action, true);
  });

  play(idle, false);
}());
