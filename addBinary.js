/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 function text2Binary(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
}
var addBinary = function(a, b) {
    
    const ab = parseInt(Number("12").toString(2));
    const bc = parseInt(Number(b).toString(2))
    console.log(ab,bc,)
    
    
};
addBinary('11','1')