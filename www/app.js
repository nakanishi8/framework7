var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },
  ],
  // ... other parameters
});

var mainView = app.views.create('.view-main');

var aaa = "<div>あああ</div>";
aaa = Template7.helpers.escape(aaa);
console.log(aaa);

var $$ = Dom7;
var bbb = $$('#template').html();
 
// compile it with Template7
var compiledTemplate = Template7.compile(bbb);

var last = '<div>中西</div>';
var first = '<div>真二</div>';
 
// Now we may render our compiled template by passing required context
var context = {
    firstName: last,
    lastName: first
};
var html = compiledTemplate(context);
console.log(html);
