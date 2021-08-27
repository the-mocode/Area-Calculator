// AREA CALCULATOR

// V1 = Calculates areas of square, rectangle, circle, triangle
// V1.1 = Added functionality to spit out exact or rounded figures.

// First Attempt at building Area calculator with basic Java
// Define variables
// Areas included in this calc are currently Square, rectangle, circle, triangle

//VARIABLES
let length= 5;
let width= 1.5;
let height= 0.25;
let radius= 2;
const shape = 'triangle'.toLowerCase();
const value = 'exact'.toLowerCase() //'round' or 'exact'

// CODE
function areaSquareRect () {
  if (value === 'exact') {
  return (length * width);
  } else if (value === 'round') {
    return (Math.round(length * width));
  } console.log(areaSquareRect)};

function areaCircle () {
if (value === 'exact') {
  return (Math.PI * Math.pow(radius, 2));
  } else if (value === 'round') {
    return (Math.round(Math.PI * Math.pow(radius,2)));
  } console.log(areaCircle)};


function areaTriangle () {
  if (value === 'exact') {
  return (0.5 * width * height);
  } else if (value === 'round') {
    return (Math.round(0.5 * width * height));
  } console.log(areaTriangle) };

switch (shape) {
  case ('square' || 'rectangle') :
  console.log(`Total area of the ${shape} is equal to`)  
  areaSquareRect();
  break ;

  case 'circle' :
  console.log(`Total area of the ${shape} is equal to`);
  areaCircle();
  break ;

  case 'triangle' :
  console.log(`Total area of the ${shape} is equal to`)
  areaTriangle();
  break ; 
  default:
  console.log('Area Calculator V1 currently does not calculate the following shape - Please request the shape to be added by sending us an email.')

}