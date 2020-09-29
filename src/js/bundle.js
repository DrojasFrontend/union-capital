import fullpage from 'fullpage.js';

$("body").addClass("loading");

const fullPage = new fullpage('#fullpage', {
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 1,
	easing: 'easeInOutCubic',
	scrollingSpeed: 700,
	css3: true,
	easingcss3: 'ease-out',
  loopBottom: false,
  
  navigation: true,
	menu: '#menu',
	anchors: ['section-1', 'section-2', 'section-3', 'footer'],
	navigationTooltips: ['Section-1', 'Section-2', 'Section-3', 'Footer'],
	showActiveTooltip: false,
});



console.log("## Bundle ##")