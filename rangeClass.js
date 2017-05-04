var Range = function(start, end, step) {
  if (end === undefined) {
    end = start;
  }
  if (start === undefined) {
    return null;
  }
  if (step === undefined) {
    step = (start < end) ? 1 : -1;
  }

  this.size = function() {
    return Math.floor(((end - start) / step) + 1);
  };

  this.each = function(callback) {
    if (start < end) {
      for (var i = start; i <= end; i += step) {
        callback(i);
      }
    } else {
      for (var i = start; i >= end; i += step) {
        callback(i);
      }
    }
  };

  this.includes = function(val) {
    console.log('test')
    console.log('val justone', start, end, step, val)

    var result = false;
    if (start < end) {
      for (var i = start; i <= end; i += step) {
        if (i === val) {
          return result = true
        } else {
          result = false
        }
      }
    } else {
      for (var i = start; i > end; i += step) {
        if (i === val) {
          return result = true
        } else {
          result = false

        }
      }
    }
    return result;
  };

};


//allow negative value to count backwards




// var evenNumbers = new Range(2, 8, 2); // A range with the even numbers 2, 4, 6, and 8.
// // console.log(evenNumbers)
// evenNumbers.each(function(val) { console.log(val + '!'); }); //Prints '2! 4! 6! 8!'

// console.log(evenNumbers.size()) //4

// console.log(evenNumbers.includes(2)) //True

// console.log(evenNumbers.includes(3)) //False

var justOne = new Range(1);
// should.exist(justOne.size);
// console.log(justOne);
// console.log('justone' ,justOne.size()) //1);
console.log(justOne.includes(1)) //should.eql(true);
console.log(justOne.includes(50)) //should.eql(false);

// var oneToTen = new Range(1, 10);
// console.log(oneToTen.size()) //10);

// var threes = new Range(3, 100, 3);
// console.log(threes.includes(3))//(true);
// console.log(threes.includes(4))//.should.eql(false);
// console.log(threes.includes(33))//should.eql(true);
// console.log(threes.includes(99))//ould.eql(true);

//     var evenDigits = new Range(2, 8, 2);
//     evenDigits.size().should.eql(4);

//     var threes = new Range(3, 100, 3);
//     threes.size().should.eql(33);
// });
