
var app = new Vue({
  el: '#root',
  mounted(){
    this.sortByRealRank()
  },
  methods:{
         compareValues(key, order) {
          return function innerSort(a, b) {
            //check for key in the object
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
              return 0;
            }
            //if the elements are strings transform the text to uppercase
            const varA = (typeof a[key] === 'string')
              ? a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === 'string')
              ? b[key].toUpperCase() : b[key];

            let comparison = 0;
            comparison = (varA > varB)?1:-1; //this is where the magic happens
           
            return (
              (order === 'desc') ? (comparison * -1) : comparison
            );
          };
        },
        sortBy: function (event) {
          let field = (typeof event === 'undefined')?'rank':event.currentTarget.name;
          this.users = this.users.sort(this.compareValues(field, this.filterOrder[field]));
          //set the order for the next time
          this.current = field +':'+ this.filterOrder[field]
          this.filterOrder[field] = (this.filterOrder[field] == 'asc')?'desc':'asc';
        },

        sortByRealRank: function () {
          //sorts the array by number of points
          this.users = this.users.sort(this.compareValues('points', this.filterOrder['points']));
          let total =  this.users.length;
          //populate the array with the newly calculated rank
          this.users.forEach(function(user,index){
            user.realRank =  index + 1;
          });
          //set the order for the next time
          this.filterOrder['points'] = (this.filterOrder['points'] == 'asc')?'desc':'asc';

        },

    },
  
  data: {
    current: 'Points:desc',
    filterOrder: {
      'name' : 'asc',
      'rank' : 'asc',
      'realRank' : 'asc',
      'points' : 'desc',
      'age' : 'asc',
    },
    users: [
    {
      "rank": 3,
      "points": 3123,
      "name": "Marlana J. Huff",
      "age": 41
    },
    {
      "rank": 10,
      "points": 45345,
      "name": "Susan D. Jimenez",
      "age": 42
    },
    {
      "rank": 14,
      "points": 312,
      "name": "Richard M. Mass",
      "age": 11
    },
    {
      "rank": 13,
      "points": 3124,
      "name": "Joan T. Covert",
      "age": 13
    },
    {
      "rank": 20,
      "points": 31,
      "name": "Joseph S. Perez",
      "age": 23
    },
    {
      "rank": 19,
      "points": 6546,
      "name": "John R. Green",
      "age": 24
    },
    {
      "rank": 9,
      "points": 452,
      "name": "Elizabeth R. Olsen",
      "age": 15
    },
    {
      "rank": 1,
      "points": 134,
      "name": "Sharon R. Ryan",
      "age": 25
    },
    {
      "rank": 24,
      "points": 64563,
      "name": "Stacey D. Ward",
      "age": 30
    },
    {
      "rank": 2,
      "points": 755463,
      "name": "George K. Pancoast",
      "age": 35
    },
    {
      "rank": 18,
      "points": 42342,
      "name": "Dorothy J. Carroll",
      "age": 33
    },
    {
      "rank": 23,
      "points": 1241,
      "name": "Louis E. McCrae",
      "age": 65
    },
    {
      "rank": 15,
      "points": 654645,
      "name": "Camille B. Burton",
      "age": 17
    },
    {
      "rank": 4,
      "points": 5345345,
      "name": "Tommye R. Robinson",
      "age": 18
    },
    {
      "rank": 17,
      "points": 342,
      "name": "Grace C. Smith",
      "age": 19
    },
    {
      "rank": 22,
      "points": 213,
      "name": "Jennifer C. West",
      "age": 20
    },
    {
      "rank": 25,
      "points": 34242,
      "name": "John L. Sandlin",
      "age": 21
    },
    {
      "rank": 21,
      "points": 52342,
      "name": "Margarita D. Lambert",
      "age": 43
    },
    {
      "rank": 5,
      "points": 42342,
      "name": "Thomas M. Hawkins",
      "age": 32
    },
    {
      "rank": 8,
      "points": 354,
      "name": "Joseph J. Freeman",
      "age": 22
    },
    {
      "rank": 6,
      "points": 7675,
      "name": "Arlene R. Grimes",
      "age": 29
    },
    {
      "rank": 7,
      "points": 274,
      "name": "Michael E. Rogers",
      "age": 10
    },
    {
      "rank": 12,
      "points": 105,
      "name": "Alice J. Goldsmith",
      "age": 37
    },
    {
      "rank": 16,
      "points": 18978,
      "name": "Robert O. Lambert",
      "age": 40
    },
    {
      "rank": 11,
      "points": 103596,
      "name": "Felix M. Seeber",
      "age": 39
    }
  ]
  }
})