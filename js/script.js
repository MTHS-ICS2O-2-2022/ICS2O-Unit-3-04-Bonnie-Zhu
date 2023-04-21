// Created by: Bonnie Zhu
// Created on: April. 2023
// This file contains the JS functions for index.html

"use strict"

function calculate() {
  // input
  const fahrenheit = parseInt(document.getElementById("fahrenheit ").value)
  const zeroDegrees = 32
  const standard = 5 / 9

  // process
  const conversion = (fahrenheit - zeroDegrees) * standard

  // output
  document.getElementById("conversion").innerHTML = "converted to celsius is: " + conversion.toFixed(2) + "°C"
}