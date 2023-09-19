// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'auto',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'AppBase',
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/clothing/',
    	url: 'clothing.html',
    	name: 'clothing',
  		},
		{
		path: '/product/',
		url: 'product.html',
		name: 'product',
		},
		{
		path: '/user/',
		url: 'user.html',
		name: 'user',
		},
		{
		path: '/about/',
		url: 'about.html',
		name: 'about',
		},
		{
		path: '/accesories/',
		url: 'accesories.html',
		name: 'accesories',
		},
		{
		path: '/notifications/',
		url: 'notifications.html',
		name: 'notifications',
		},
		{
		path: '/rewards/',
		url: 'rewards.html',
		name: 'rewards',
		},
		{
		path: '/others/',
		url: 'others.html',
		name: 'others',
		},
		{
		path: '/beauty/',
		url: 'beauty.html',
		name: 'beauty',
		},
		{
		path: '/health/',
		url: 'health.html',
		name: 'health',
		},
		{
		path: '/selections/',
		url: 'selections.html',
		name: 'selections',
		},
		{
		path: '/shoes/',
		url: 'shoes.html',
		name: 'shoes',
		},
		{
		path: '/contenido/',
    	url: 'contenido.html',
    	name: 'contenido',
  		},
	],
	dialog: {
		title: 'AppBase',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#login');
		
		app.dialog.alert('!Welcome to AppBase !');
    }
	
});



$$(document).on('click', '#btnAddCart', function (e) {
	e.preventDefault();

	
	var notification = app.notification.create({
      icon: '<i class="material-icons">check</i>',
      title: 'Order',
      titleRightText: '',
      subtitle: '',
      text: "Your order has been received.",
      closeTimeout: 3000,
    });
    notification.open();
	
});





