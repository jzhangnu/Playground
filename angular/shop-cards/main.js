//Wrapping your javascript in a closure is a good habit.
//(function(){
//('application name', [Dependencies])
var app = angular.module('store', []);

var gem = [
  { name: 'ruby',
    price: 7.18,
    description: 'good',
    canPurchase: false,
    soldout: false,
    image:[
      {
        full:'1.jpg',
        thumb:'1.jpg'
      }
    ],
    reviews:[
      {
        stars: 1,
        body: 'This is a shit!',
        author: 'Kim'
      },
      {
        stars: 5,
        body: 'Like this shit!',
        author: 'Kung'
      }
    ]
  },

  {name: 'shit',
    price: 7.18,
    description: 'good',
    canPurchase: false,
    soldout: false,
    reviews:[
      {
        stars: 5,
        body: 'Like this shit!',
        author: 'Kung'
      }
    ]
  },
  {name: 'ruby',
    price: 7.18,
    description: 'good',
    canPurchase: false,
    soldout: false
  }
];

app.controller('StoreController', function(){
  this.products = gem;
});

//move the controller inside the product-panel directive below
/*
app.controller('panelController',function(){
  this.tab = 1;
  this.selectTab = function(setTab){
    this.tab = setTab;
  };
  this.isSelected = function(is){
    return this.tab === is;
  }
});
*/

app.controller('reviewController', function(){
  this.review = {};
  this.addReview = function(product){
    product.reviews.push(this.review);
      this.review = {};
  };
})

app.directive('productTitle', function(){
  return{
    restrict: 'E',
    templateUrl:'product-title.html'
  };
});

app.directive('productPanel', function(){
  return{
    restrict: 'E',
    templateUrl:'product-panel.html',
    controller: function(){
      this.tab = 1;
      this.selectTab = function(setTab){
        this.tab = setTab;
      };
      this.isSelected = function(is){
        return this.tab === is;
      }

    },
    controllerAs: 'panel'
  };
});

//})()===============================
