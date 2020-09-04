import { Calculator } from './calculator.js';
import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(funciton() {
  $('#calculator-age-form').submit(function(event) {
    event.preventDefault();
    const age = $('#age').val();
    const calculator = new Calculator(age);
    const response = calculator.checkType();
    $('#response').append("<p>" + response + "<p>");
  });
});
