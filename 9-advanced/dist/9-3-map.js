{
    var animal = {
        name: 'dog'
    };
    animal.name = 'ellie';
    var video = {
        title: 'hi',
        author: 'ellie'
    };
    var obj2 = {
        title: 'hi',
        author: null
    };
    var person = {
        name: {
            get: function () {
                return this.name;
            },
            set: function (value) {
                this.name = value;
            }
        },
        age: {
            get: function () {
                return this.age;
            },
            set: function (value) {
                this.age = value;
            }
        }
    };
}
