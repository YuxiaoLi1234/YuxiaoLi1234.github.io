(function () {
  'use strict';

  var pet = document.querySelector('[data-doudou-pet]');
  if (!pet) return;

  var button = pet.querySelector('.doudou-pet__button');
  var sprite = pet.querySelector('.doudou-pet__sprite');
  var poses = [
    { row: 0, frame: 0 }, // standing still
    { row: 3, frame: 2 }, // waving
    { row: 4, frame: 2 }, // little jump
    { row: 6, frame: 1 }  // waiting
  ];
  var poseIndex = 0;

  function showPose(pose) {
    // The atlas has 8 columns and 9 rows; percentages map across the full atlas.
    sprite.style.backgroundPosition = (pose.frame / 7) * 100 + '% ' + (pose.row / 8) * 100 + '%';
  }

  button.addEventListener('click', function () {
    poseIndex = (poseIndex + 1) % poses.length;
    showPose(poses[poseIndex]);
  });

  showPose(poses[poseIndex]);
}());
