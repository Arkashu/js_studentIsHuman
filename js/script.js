'use strict';

class Human {
    _name = null;
    _lastName = null;
    _birthYear = null;

    get name () {
        return this._name;
    }
    get lastName () {
        return this._lastName;
    }
    get birthday () {
        return this._birthYear;
    }

    constructor(name, lastName, birthYear) {
        this._name = name;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }
    age() {
        const today = new Date();
        return today.getFullYear() - this._birthYear;
    }
    static isHuman () {
        alert('Yes! I am a human!')
    }
    #checkAge () {
        if (this.age() > 120 || this.age() <=0) throw new Error('Вы указали неверный возраст')
    }
    get checkAge () {
        return this.#checkAge();
    }
}

class Student extends Human{
    constructor(...args) {
        super(...args);
    }

  attendance = new Array(10).fill(null);
  estimates = new Array(10).fill(null);
  present () {
      if (this.attendance.indexOf(null) === -1) return;
      this.attendance[this.attendance.indexOf(null)] = true;
  }
  absent () {
        if (this.attendance.indexOf(null) === -1) return;
        this.attendance[this.attendance.indexOf(null)] = false;
    };
  mark (evaluation) {
        if (this.estimates.indexOf(null) === -1) return;
        this.estimates[this.estimates.indexOf(null)] = evaluation;
    };
  summary () {
        const averageMark = this.estimates.reduce((a, b) => {
            return (a + b)
        }) / (this.estimates.length - this.estimates.filter(arg => { return arg === null}).length)
        const averagePresent = this.attendance.filter((element) => {
            return element === true
        }).length / (this.attendance.length - this.attendance.filter(arg2 => { return arg2 === null}).length);
        if (averageMark >= 9 && averagePresent >= 0.9) return 'Ути какой молодчинка!';
        if (averageMark < 9 && averagePresent < 0.9) return 'Редиска!';
        return 'Норм, но можно лучше';
    }

}
const student_test = new Student('Vova', 'Cooper', 1990);
student_test.present()
student_test.present()
student_test.absent()
student_test.present()
student_test.present()
student_test.present()
student_test.present()
student_test.present()
student_test.present()
student_test.present()
student_test.mark(10)
student_test.mark(10)
student_test.mark(10)
student_test.mark(10)
student_test.mark(10)
student_test.mark(2)
student_test.mark(2)
student_test.mark(10)
student_test.mark(9)
console.log(student_test.summary());



