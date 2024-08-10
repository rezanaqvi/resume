AOS.init({
	duration: 800,
	easing: 'slide'
  });
  
  (function($) {
	"use strict";
  
	$(window).stellar({
	  responsive: true,
	  parallaxBackgrounds: true,
	  parallaxElements: true,
	  horizontalScrolling: false,
	  hideDistantElements: false,
	  scrollProperty: 'scroll'
	});
  
	var fullHeight = function() {
	  $('.js-fullheight').css('height', $(window).height());
	  $(window).resize(function(){
		$('.js-fullheight').css('height', $(window).height());
	  });
	};
	fullHeight();
  
	// loader
	var loader = function() {
	  setTimeout(function() { 
		if($('#ftco-loader').length > 0) {
		  $('#ftco-loader').removeClass('show');
		}
	  }, 1);
	};
	loader();
  
	// Scrollax
	$.Scrollax();
  
	// Burger Menu
	var burgerMenu = function() {
	  $('body').on('click', '.js-fh5co-nav-toggle', function(event){
		event.preventDefault();
  
		if ( $('#ftco-nav').is(':visible') ) {
		  $(this).removeClass('active');
		} else {
		  $(this).addClass('active');	
		}
	  });
	};
	burgerMenu();
  
	var onePageClick = function() {
	  $(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
		event.preventDefault();
  
		var href = $.attr(this, 'href');
  
		$('html, body').animate({
		  scrollTop: $($.attr(this, 'href')).offset().top - 70
		}, 500, function() {
		});
	  });
	};
  
	onePageClick();
	
	var carousel = function() {
	  $('.home-slider').owlCarousel({
		loop:true,
		autoplay: true,
		margin:0,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		nav:false,
		autoplayHoverPause: false,
		items: 1,
		navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
		responsive:{
		  0:{
			items:1
		  },
		  600:{
			items:1
		  },
		  1000:{
			items:1
		  }
		}
	  });
	};
	carousel();
  
	$('nav .dropdown').hover(function(){
	  var $this = $(this);
	  $this.addClass('show');
	  $this.find('> a').attr('aria-expanded', true);
	  $this.find('.dropdown-menu').addClass('show');
	}, function(){
	  var $this = $(this);
	  $this.removeClass('show');
	  $this.find('> a').attr('aria-expanded', false);
	  $this.find('.dropdown-menu').removeClass('show');
	});
  
	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});
  
	// scroll
	var scrollWindow = function() {
	  $(window).scroll(function(){
		var $w = $(this),
		  st = $w.scrollTop(),
		  navbar = $('.ftco_navbar'),
		  sd = $('.js-scroll-wrap');
  
		if (st > 150) {
		  if ( !navbar.hasClass('scrolled') ) {
			navbar.addClass('scrolled');	
		  }
		} 
		if (st < 150) {
		  if ( navbar.hasClass('scrolled') ) {
			navbar.removeClass('scrolled sleep');
		  }
		} 
		if ( st > 350 ) {
		  if ( !navbar.hasClass('awake') ) {
			navbar.addClass('awake');	
		  }
		  
		  if(sd.length > 0) {
			sd.addClass('sleep');
		  }
		}
		if ( st < 350 ) {
		  if ( navbar.hasClass('awake') ) {
			navbar.removeClass('awake');
			navbar.addClass('sleep');
		  }
		  if(sd.length > 0) {
			sd.removeClass('sleep');
		  }
		}
	  });
	};
	scrollWindow();
	
	var counter = function() {
	  $('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {
		if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
		  var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
		  $('.number').each(function(){
			var $this = $(this),
			  num = $this.data('number');
			  console.log(num);
			$this.animateNumber(
			  {
				number: num,
				numberStep: comma_separator_number_step
			  }, 7000
			);
		  });
		}
	  } , { offset: '95%' } );
	}
	counter();
  
	var contentWayPoint = function() {
	  var i = 0;
	  $('.ftco-animate').waypoint( function( direction ) {
		if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
		  i++;
		  $(this.element).addClass('item-animate');
		  setTimeout(function(){
			$('body .ftco-animate.item-animate').each(function(k){
			  var el = $(this);
			  setTimeout( function () {
				var effect = el.data('animate-effect');
				if ( effect === 'fadeIn') {
				  el.addClass('fadeIn ftco-animated');
				} else if ( effect === 'fadeInLeft') {
				  el.addClass('fadeInLeft ftco-animated');
				} else if ( effect === 'fadeInRight') {
				  el.addClass('fadeInRight ftco-animated');
				} else {
				  el.addClass('fadeInUp ftco-animated');
				}
				el.removeClass('item-animate');
			  },  k * 50, 'easeInOutExpo' );
			});
		  }, 100);
		}
	  } , { offset: '95%' } );
	};
	contentWayPoint();
  
	// magnific popup
	$('.image-popup').magnificPopup({
	  type: 'image',
	  closeOnContentClick: true,
	  closeBtnInside: false,
	  fixedContentPos: true,
	  mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
	  gallery: {
		enabled: true,
		navigateByImgClick: true,
		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	  },
	  image: {
		verticalFit: true
	  },
	  zoom: {
		enabled: true,
		duration: 300 // don't foget to change the duration also in CSS
	  }
	});
  
	// Chatbot implementation
	const resume = {
	  name: "Faizan Raza",
	  email: "syedfai97@gmail.com",
	  phone: "+923062809182",
	  linkedin: "https://www.linkedin.com/in/syed-faizan-raza-naqvi-a09416145/",
	  about: "Master’s in data engineering and information management, coupled with a Finance Bachelor's. As a Business Intelligence Analyst at Foodpanda Delivery Hero, I've honed skills in implementation, support engineering, and BI tools. Blend analytical acumen from finance with technical expertise in data engineering. Seeking roles in Data Analytics/Business Intelligence to leverage this fusion, driving strategic insights and optimizing data-centric strategies.",
	  skills: {
		expert: ["SQL", "Data Visualization", "Communication and Teamwork", "Tableau", "Power BI", "AB Testing"],
		intermediate: ["Programming Language", "Analytical and Problem Solving", "Google Analytics"]
	  },
	  education: [
		{
		  degree: "MS Data Engineering",
		  university: "NED University",
		  location: "Karachi, Pakistan",
		  dates: "Nov 2021 - Mar 2024 (Expected)",
		  description: "The MS Data Engineering and Information Management program provides advanced training in managing and optimizing data systems, focusing on data modeling, analysis, and warehousing techniques. Students gain expertise in designing efficient data models, conducting in-depth analysis, and implementing robust data warehousing strategies to meet modern industry demands."
		},
		{
		  degree: "Bachelor of Science in Economics & Finance",
		  university: "NED University",
		  location: "Karachi, Pakistan",
		  dates: "Dec 2016 - Jan 2021",
		  description: "This program blends economic principles with crucial data analysis skills. It covers micro and macroeconomics while focusing on data analysis, statistical modeling, and financial forecasting. It also instills expertise in corporate finance and risk management, vital for interpreting data trends. Through projects, it hones analytical thinking, preparing candidates to leverage data effectively in practical settings as a data analyst."
		}
	  ],
	  experience: [
		{
		  title: "Business Intelligence Analyst",
		  company: "Delivery Hero - Foodpanda",
		  location: "Karachi, Pakistan",
		  dates: "Aug 2023 - Present",
		  responsibilities: [
			"Drive the evolution of data modeling, visualization, and reporting to pinpoint areas ripe for process improvement.",
			"Developed and implemented Tableau dashboards, leveraging SQL queries to extract actionable insights",
			"Optimized cashloss strategy, resulting in a 5% increase in customer acquisition and 500k in additional revenue.",
			"Translate intricate datasets into concise presentations and reports tailored for senior leadership evaluation.",
			"Contribute to special initiatives, such as price strategies and loyalty programs."
		  ]
		},
		{
		  title: "Intern",
		  company: "Mezan Bank Limited",
		  location: "Karachi, Pakistan",
		  dates: "Jan 2021 - Feb 2021",
		  responsibilities: [
			"Tracked and reviewed credits, liaising with external auditors on credit-related matters.",
			"Helped shape credit management protocols, ensuring regulatory compliance.",
			"Provided administrative support, including meticulous database upkeep and documentation."
		  ]
		}
	  ]
	};
  
	function startChatbot() {
	  const jobTitle = prompt("Enter the job title:");
	  const requiredExperience = prompt("Enter the required experience (e.g., '2 years of BI Analyst experience'):");
	  const requiredEducation = prompt("Enter the required education (e.g., 'Bachelor's in Computer Science'):");
	  const requiredSkills = prompt("Enter the required skills (comma-separated):").split(',').map(skill => skill.trim());
  
	  let matchCount = 0;
  
	  // Checking experience match
	  resume.experience.forEach(exp => {
		if (exp.title.toLowerCase().includes(jobTitle.toLowerCase()) && exp.dates) {
		  matchCount++;
		}
	  });
  
	  // Checking education match
	  resume.education.forEach(edu => {
		if (edu.degree.toLowerCase().includes(requiredEducation.toLowerCase())) {
		  matchCount++;
		}
	  });
  
	  // Checking skills match
	  requiredSkills.forEach(skill => {
		if (resume.skills.expert.includes(skill) || resume.skills.intermediate.includes(skill)) {
		  matchCount++;
		}
	  });
  
	  if (matchCount >= requiredSkills.length) {
		alert("The candidate is a good fit for the job role.");
	  } else {
		alert("The candidate may not be the best fit for the job role based on the provided requirements.");
	  }
	}
  
	document.getElementById("start-chatbot").addEventListener("click", startChatbot);
  
  })(jQuery);
  