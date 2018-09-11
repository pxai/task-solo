 class UUID {
  static generate () {
    let chars = 'abcdefghijklnmopqrstuvwxyz0123456789';
    return 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[x]/g, function(c) {
      return chars.charAt(Math.round(Math.random() * 35));
    });
  } 
 }

 module.exports = UUID;
