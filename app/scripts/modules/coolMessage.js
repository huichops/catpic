Module('CoolMessage')({
  prototype: {
    subject: 'dog',
    words: [
      'cool',
      'awesome',
      'amazing',
      'mighty',
      'rad'
    ],
    getCoolMessage: function getCoolMessage(str) {
      var subject = str || this.subject; 
      var index = (Math.random() * this.words.length) | 0;

      return 'The ' + this.words[index] + ' ' +  subject;
    }
  }
})
