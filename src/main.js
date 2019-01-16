import { Bear } from './bear';
import { Hiker } from './hiker';

import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function() {

  let bear = new Bear('Gary');
  let hiker = new Hiker('Tasty Hiker');
  bear.updateBearStats(hiker);
  hiker.updateHikerStats(bear);
  hiker.hikerStatCheck();

  $("#hiker-name").text(hiker.name);

  const updateUI = setInterval(() => {
    //View bear capture odds
    $("#bear-capture-odds").text(`Capture Odds: ${bear.captureOdds}%`)

    //Populates hiker message
    $("#hiker-message").text(`${hiker.hikerMessage}`)

    //Populates bear message
    $("#bear-message").text(`${bear.bearMessage}`)

    //Bear food level refresh
    $("#bear-food-bar").attr("style", `width: ${bear.foodLevel * 10}%`)
    $("#bear-food-bar").attr("aria-valuenow", `${bear.foodLevel * 10}`)
    $("#bear-food-bar").text(`${bear.foodLevel * 10}%`)

    //Bear sleepiness level refresh
    $("#bear-sleep-bar").attr("style", `width: ${bear.sleepyLevel * 10}%`)
    $("#bear-sleep-bar").attr("aria-valuenow", `${bear.sleepyLevel * 10}`)
    $("#bear-sleep-bar").text(`${bear.sleepyLevel * 10}%`)

    //Bear anger level refresh
    $("#bear-rage-bar").attr("style", `width: ${bear.angerLevel * 10}%`)
    $("#bear-rage-bar").attr("aria-valuenow", `${bear.angerLevel * 10}`)
    $("#bear-rage-bar").text(`${bear.angerLevel * 10}%`)

    //Hiker health bar refresh
    $("#hiker-health-bar").attr("style", `width: ${hiker.health * 10}%`)
    $("#hiker-health-bar").attr("aria-valuenow", `${hiker.health * 10}`)
    $("#hiker-health-bar").text(`${hiker.health * 10}%`)

    //Hiker stamina bar refresh
    $("#hiker-stamina-bar").attr("style", `width: ${hiker.stamina * 10}%`)
    $("#hiker-stamina-bar").attr("aria-valuenow", `${hiker.stamina * 10}`)
    $("#hiker-stamina-bar").text(`${hiker.stamina * 10}%`)

    //Hiker berry refresh
    $("#number-of-berries").text(`${hiker.berries}`)
    //Hiker capture refresh
    $("#number-of-captures").text(`${hiker.captureAttempts}`)

  }, 10);

  $('#feed-button').click(function() {
    event.preventDefault();
    hiker.feedBear(bear);
    console.log('you fed bear');
  });

  $('#capture-button').click(function() {
    event.preventDefault();
    hiker.captureAttempt(bear);
    console.log('you press capture');
  });

  $('#forage-button').click(function() {
    event.preventDefault();
    hiker.forage();
    console.log('you press forage');
  });

  setInterval(function() {
    $("#hiker-health").text(`Health: ${hiker.health}`);
    $("#hiker-stamina").text(`Stamina: ${hiker.stamina}`);
    $("#hiker-berries").text(`Berries: ${hiker.berries}`);
    $("#hiker-captures").text(`Captures: ${hiker.captureAttempts}`);

    $("#bear-food").text(`Food: ${bear.foodLevel}`);
    $("#bear-sleepiness").text(`Sleepiness: ${bear.sleepyLevel}`);
    $("#bear-anger").text(`Anger: ${bear.angerLevel}`);
    $("#bear-asleep").text(`Asleep?: ${bear.asleep}`);
    $("#bear-captured").text(`Captured?: ${bear.captureStatus}`);

  }, 10);

});
