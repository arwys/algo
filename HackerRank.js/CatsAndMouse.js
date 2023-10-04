// Function Description
// Complete the catAndMouse function in the editor below.
// catAndMouse has the following parameter(s):
// int x: Cat 's position
// int y: Cat 's position
// int z: Mouse 's position
// Returns
// string: Either 'Cat A', 'Cat B', or 'Mouse C'
// Input Format

function catAndMouse(x, y, z) {
  //  console.log(x,y,z)
  const catsA = Math.abs(z - x);
  const catsB = Math.abs(z - y);
  if (mouseA == mouseB) {
    return "Mouse C";
  } else if (catsA > catsB) {
    return "Cat B";
  } else {
    return "Cat A";
  }
}

catAndMouse(1, 2, 3);
catAndMouse(1, 3, 2);
