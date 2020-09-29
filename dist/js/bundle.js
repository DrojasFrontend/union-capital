/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/fullpage.js/dist/fullpage.js":
/*!***************************************************!*\
  !*** ./node_modules/fullpage.js/dist/fullpage.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * fullPage 3.0.9
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
 */
(function (root, window, document, factory, undefined) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      root.fullpage = factory(window, document);
      return root.fullpage;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, window, document, function (window, document) {
  'use strict'; // keeping central set of classnames and selectors

  var WRAPPER = 'fullpage-wrapper';
  var WRAPPER_SEL = '.' + WRAPPER; // slimscroll

  var SCROLLABLE = 'fp-scrollable';
  var SCROLLABLE_SEL = '.' + SCROLLABLE; // util

  var RESPONSIVE = 'fp-responsive';
  var NO_TRANSITION = 'fp-notransition';
  var DESTROYED = 'fp-destroyed';
  var ENABLED = 'fp-enabled';
  var VIEWING_PREFIX = 'fp-viewing';
  var ACTIVE = 'active';
  var ACTIVE_SEL = '.' + ACTIVE;
  var COMPLETELY = 'fp-completely';
  var COMPLETELY_SEL = '.' + COMPLETELY; // section

  var SECTION_DEFAULT_SEL = '.section';
  var SECTION = 'fp-section';
  var SECTION_SEL = '.' + SECTION;
  var SECTION_ACTIVE_SEL = SECTION_SEL + ACTIVE_SEL;
  var TABLE_CELL = 'fp-tableCell';
  var TABLE_CELL_SEL = '.' + TABLE_CELL;
  var AUTO_HEIGHT = 'fp-auto-height';
  var AUTO_HEIGHT_SEL = '.' + AUTO_HEIGHT;
  var AUTO_HEIGHT_RESPONSIVE = 'fp-auto-height-responsive';
  var AUTO_HEIGHT_RESPONSIVE_SEL = '.' + AUTO_HEIGHT_RESPONSIVE;
  var NORMAL_SCROLL = 'fp-normal-scroll';
  var NORMAL_SCROLL_SEL = '.' + NORMAL_SCROLL; // section nav

  var SECTION_NAV = 'fp-nav';
  var SECTION_NAV_SEL = '#' + SECTION_NAV;
  var SECTION_NAV_TOOLTIP = 'fp-tooltip';
  var SECTION_NAV_TOOLTIP_SEL = '.' + SECTION_NAV_TOOLTIP;
  var SHOW_ACTIVE_TOOLTIP = 'fp-show-active'; // slide

  var SLIDE_DEFAULT_SEL = '.slide';
  var SLIDE = 'fp-slide';
  var SLIDE_SEL = '.' + SLIDE;
  var SLIDE_ACTIVE_SEL = SLIDE_SEL + ACTIVE_SEL;
  var SLIDES_WRAPPER = 'fp-slides';
  var SLIDES_WRAPPER_SEL = '.' + SLIDES_WRAPPER;
  var SLIDES_CONTAINER = 'fp-slidesContainer';
  var SLIDES_CONTAINER_SEL = '.' + SLIDES_CONTAINER;
  var TABLE = 'fp-table'; // slide nav

  var SLIDES_NAV = 'fp-slidesNav';
  var SLIDES_NAV_SEL = '.' + SLIDES_NAV;
  var SLIDES_NAV_LINK_SEL = SLIDES_NAV_SEL + ' a';
  var SLIDES_ARROW = 'fp-controlArrow';
  var SLIDES_ARROW_SEL = '.' + SLIDES_ARROW;
  var SLIDES_PREV = 'fp-prev';
  var SLIDES_PREV_SEL = '.' + SLIDES_PREV;
  var SLIDES_ARROW_PREV = SLIDES_ARROW + ' ' + SLIDES_PREV;
  var SLIDES_ARROW_PREV_SEL = SLIDES_ARROW_SEL + SLIDES_PREV_SEL;
  var SLIDES_NEXT = 'fp-next';
  var SLIDES_NEXT_SEL = '.' + SLIDES_NEXT;
  var SLIDES_ARROW_NEXT = SLIDES_ARROW + ' ' + SLIDES_NEXT;
  var SLIDES_ARROW_NEXT_SEL = SLIDES_ARROW_SEL + SLIDES_NEXT_SEL;

  function initialise(containerSelector, options) {
    var isOK = options && new RegExp('([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$').test(options['li' + 'cen' + 'seK' + 'e' + 'y']) || document.domain.indexOf('al' + 'varotri' + 'go' + '.' + 'com') > -1; // cache common elements

    var $htmlBody = $('html, body');
    var $html = $('html')[0];
    var $body = $('body')[0]; //only once my friend!

    if (hasClass($html, ENABLED)) {
      displayWarnings();
      return;
    }

    var FP = {}; // Creating some defaults, extending them with any options that were provided

    options = deepExtend({
      //navigation
      menu: false,
      anchors: [],
      lockAnchors: false,
      navigation: false,
      navigationPosition: 'right',
      navigationTooltips: [],
      showActiveTooltip: false,
      slidesNavigation: false,
      slidesNavPosition: 'bottom',
      scrollBar: false,
      hybrid: false,
      //scrolling
      css3: true,
      scrollingSpeed: 700,
      autoScrolling: true,
      fitToSection: true,
      fitToSectionDelay: 1000,
      easing: 'easeInOutCubic',
      easingcss3: 'ease',
      loopBottom: false,
      loopTop: false,
      loopHorizontal: true,
      continuousVertical: false,
      continuousHorizontal: false,
      scrollHorizontally: false,
      interlockedSlides: false,
      dragAndMove: false,
      offsetSections: false,
      resetSliders: false,
      fadingEffect: false,
      normalScrollElements: null,
      scrollOverflow: false,
      scrollOverflowReset: false,
      scrollOverflowHandler: window.fp_scrolloverflow ? window.fp_scrolloverflow.iscrollHandler : null,
      scrollOverflowOptions: null,
      touchSensitivity: 5,
      touchWrapper: typeof containerSelector === 'string' ? $(containerSelector)[0] : containerSelector,
      bigSectionsDestination: null,
      //Accessibility
      keyboardScrolling: true,
      animateAnchor: true,
      recordHistory: true,
      //design
      controlArrows: true,
      controlArrowColor: '#fff',
      verticalCentered: true,
      sectionsColor: [],
      paddingTop: 0,
      paddingBottom: 0,
      fixedElements: null,
      responsive: 0,
      //backwards compabitility with responsiveWiddth
      responsiveWidth: 0,
      responsiveHeight: 0,
      responsiveSlides: false,
      parallax: false,
      parallaxOptions: {
        type: 'reveal',
        percentage: 62,
        property: 'translate'
      },
      cards: false,
      cardsOptions: {
        perspective: 100,
        fadeContent: true,
        fadeBackground: true
      },
      //Custom selectors
      sectionSelector: SECTION_DEFAULT_SEL,
      slideSelector: SLIDE_DEFAULT_SEL,
      //events
      v2compatible: false,
      afterLoad: null,
      onLeave: null,
      afterRender: null,
      afterResize: null,
      afterReBuild: null,
      afterSlideLoad: null,
      onSlideLeave: null,
      afterResponsive: null,
      lazyLoading: true
    }, options); //flag to avoid very fast sliding for landscape sliders

    var slideMoving = false;
    var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
    var isTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints;
    var container = typeof containerSelector === 'string' ? $(containerSelector)[0] : containerSelector;
    var windowsHeight = getWindowHeight();
    var windowsWidth = getWindowWidth();
    var isResizing = false;
    var isWindowFocused = true;
    var lastScrolledDestiny;
    var lastScrolledSlide;
    var canScroll = true;
    var scrollings = [];
    var controlPressed;
    var startingSection;
    var isScrollAllowed = {};
    isScrollAllowed.m = {
      'up': true,
      'down': true,
      'left': true,
      'right': true
    };
    isScrollAllowed.k = deepExtend({}, isScrollAllowed.m);
    var MSPointer = getMSPointer();
    var events = {
      touchmove: 'ontouchmove' in window ? 'touchmove' : MSPointer.move,
      touchstart: 'ontouchstart' in window ? 'touchstart' : MSPointer.down
    };
    var scrollBarHandler; // taken from https://github.com/udacity/ud891/blob/gh-pages/lesson2-focus/07-modals-and-keyboard-traps/solution/modal.js

    var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]'; //cheks for passive event support

    var g_supportsPassive = false;

    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function () {
          g_supportsPassive = true;
        }
      });
      window.addEventListener("testPassive", null, opts);
      window.removeEventListener("testPassive", null, opts);
    } catch (e) {} //timeouts


    var resizeId;
    var resizeHandlerId;
    var afterSectionLoadsId;
    var afterSlideLoadsId;
    var scrollId;
    var scrollId2;
    var keydownId;
    var g_doubleCheckHeightId;
    var originals = deepExtend({}, options); //deep copy

    var activeAnimation;
    var g_initialAnchorsInDom = false;
    var g_canFireMouseEnterNormalScroll = true;
    var g_mediaLoadedId;
    var g_transitionLapseId;
    var extensions = ['parallax', 'scrollOverflowReset', 'dragAndMove', 'offsetSections', 'fadingEffect', 'responsiveSlides', 'continuousHorizontal', 'interlockedSlides', 'scrollHorizontally', 'resetSliders', 'cards'];
    displayWarnings(); //easeInOutCubic animation included in the plugin

    window.fp_easings = deepExtend(window.fp_easings, {
      easeInOutCubic: function (t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
      }
    });
    /**
    * Sets the autoScroll option.
    * It changes the scroll bar visibility and the history of the site as a result.
    */

    function setAutoScrolling(value, type) {
      //removing the transformation
      if (!value) {
        silentScroll(0);
      }

      setVariableState('autoScrolling', value, type);
      var element = $(SECTION_ACTIVE_SEL)[0];

      if (options.autoScrolling && !options.scrollBar) {
        css($htmlBody, {
          'overflow': 'hidden',
          'height': '100%'
        });
        setRecordHistory(originals.recordHistory, 'internal'); //for IE touch devices

        css(container, {
          '-ms-touch-action': 'none',
          'touch-action': 'none'
        });

        if (element != null) {
          //moving the container up
          silentScroll(element.offsetTop);
        }
      } else {
        css($htmlBody, {
          'overflow': 'visible',
          'height': 'initial'
        });
        var recordHistory = !options.autoScrolling ? false : originals.recordHistory;
        setRecordHistory(recordHistory, 'internal'); //for IE touch devices

        css(container, {
          '-ms-touch-action': '',
          'touch-action': ''
        }); //scrolling the page to the section with no animation

        if (element != null) {
          var scrollSettings = getScrollSettings(element.offsetTop);
          scrollSettings.element.scrollTo(0, scrollSettings.options);
        }
      }
    }
    /**
    * Defines wheter to record the history for each hash change in the URL.
    */


    function setRecordHistory(value, type) {
      setVariableState('recordHistory', value, type);
    }
    /**
    * Defines the scrolling speed
    */


    function setScrollingSpeed(value, type) {
      setVariableState('scrollingSpeed', value, type);
    }
    /**
    * Sets fitToSection
    */


    function setFitToSection(value, type) {
      setVariableState('fitToSection', value, type);
    }
    /**
    * Sets lockAnchors
    */


    function setLockAnchors(value) {
      options.lockAnchors = value;
    }
    /**
    * Adds or remove the possibility of scrolling through sections by using the mouse wheel or the trackpad.
    */


    function setMouseWheelScrolling(value) {
      if (value) {
        addMouseWheelHandler();
        addMiddleWheelHandler();
      } else {
        removeMouseWheelHandler();
        removeMiddleWheelHandler();
      }
    }
    /**
    * Adds or remove the possibility of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
    * Optionally a second parameter can be used to specify the direction for which the action will be applied.
    *
    * @param directions string containing the direction or directions separated by comma.
    */


    function setAllowScrolling(value, directions) {
      if (typeof directions !== 'undefined') {
        directions = directions.replace(/ /g, '').split(',');
        directions.forEach(function (direction) {
          setIsScrollAllowed(value, direction, 'm');
        });
      } else {
        setIsScrollAllowed(value, 'all', 'm');
      }
    }
    /**
    * Adds or remove the mouse wheel hijacking
    */


    function setMouseHijack(value) {
      if (value) {
        setMouseWheelScrolling(true);
        addTouchHandler();
      } else {
        setMouseWheelScrolling(false);
        removeTouchHandler();
      }
    }
    /**
    * Adds or remove the possibility of scrolling through sections by using the keyboard arrow keys
    */


    function setKeyboardScrolling(value, directions) {
      if (typeof directions !== 'undefined') {
        directions = directions.replace(/ /g, '').split(',');
        directions.forEach(function (direction) {
          setIsScrollAllowed(value, direction, 'k');
        });
      } else {
        setIsScrollAllowed(value, 'all', 'k');
        options.keyboardScrolling = value;
      }
    }
    /**
    * Moves the page up one section.
    */


    function moveSectionUp() {
      var prev = prevUntil($(SECTION_ACTIVE_SEL)[0], SECTION_SEL); //looping to the bottom if there's no more sections above

      if (!prev && (options.loopTop || options.continuousVertical)) {
        prev = last($(SECTION_SEL));
      }

      if (prev != null) {
        scrollPage(prev, null, true);
      }
    }
    /**
    * Moves the page down one section.
    */


    function moveSectionDown() {
      var next = nextUntil($(SECTION_ACTIVE_SEL)[0], SECTION_SEL); //looping to the top if there's no more sections below

      if (!next && (options.loopBottom || options.continuousVertical)) {
        next = $(SECTION_SEL)[0];
      }

      if (next != null) {
        scrollPage(next, null, false);
      }
    }
    /**
    * Moves the page to the given section and slide with no animation.
    * Anchors or index positions can be used as params.
    */


    function silentMoveTo(sectionAnchor, slideAnchor) {
      setScrollingSpeed(0, 'internal');
      moveTo(sectionAnchor, slideAnchor);
      setScrollingSpeed(originals.scrollingSpeed, 'internal');
    }
    /**
    * Moves the page to the given section and slide.
    * Anchors or index positions can be used as params.
    */


    function moveTo(sectionAnchor, slideAnchor) {
      var destiny = getSectionByAnchor(sectionAnchor);

      if (typeof slideAnchor !== 'undefined') {
        scrollPageAndSlide(sectionAnchor, slideAnchor);
      } else if (destiny != null) {
        scrollPage(destiny);
      }
    }
    /**
    * Slides right the slider of the active section.
    * Optional `section` param.
    */


    function moveSlideRight(section) {
      moveSlide('right', section);
    }
    /**
    * Slides left the slider of the active section.
    * Optional `section` param.
    */


    function moveSlideLeft(section) {
      moveSlide('left', section);
    }
    /**
     * When resizing is finished, we adjust the slides sizes and positions
     */


    function reBuild(resizing) {
      if (hasClass(container, DESTROYED)) {
        return;
      } //nothing to do if the plugin was destroyed


      isResizing = true; //updating global vars

      windowsHeight = getWindowHeight();
      windowsWidth = getWindowWidth();
      var sections = $(SECTION_SEL);

      for (var i = 0; i < sections.length; ++i) {
        var section = sections[i];
        var slidesWrap = $(SLIDES_WRAPPER_SEL, section)[0];
        var slides = $(SLIDE_SEL, section); //adjusting the height of the table-cell for IE and Firefox

        if (options.verticalCentered) {
          css($(TABLE_CELL_SEL, section), {
            'height': getTableHeight(section) + 'px'
          });
        }

        css(section, {
          'height': windowsHeight + 'px'
        }); //adjusting the position fo the FULL WIDTH slides...

        if (slides.length > 1) {
          landscapeScroll(slidesWrap, $(SLIDE_ACTIVE_SEL, slidesWrap)[0]);
        }
      }

      if (options.scrollOverflow) {
        scrollBarHandler.createScrollBarForAll();
      }

      var activeSection = $(SECTION_ACTIVE_SEL)[0];
      var sectionIndex = index(activeSection, SECTION_SEL); //isn't it the first section?

      if (sectionIndex) {
        //adjusting the position for the current section
        silentMoveTo(sectionIndex + 1);
      }

      isResizing = false;

      if (isFunction(options.afterResize) && resizing) {
        options.afterResize.call(container, window.innerWidth, window.innerHeight);
      }

      if (isFunction(options.afterReBuild) && !resizing) {
        options.afterReBuild.call(container);
      }
    }
    /**
    * Determines whether fullpage.js is in responsive mode or not.
    */


    function isResponsiveMode() {
      return hasClass($body, RESPONSIVE);
    }
    /**
    * Turns fullPage.js to normal scrolling mode when the viewport `width` or `height`
    * are smaller than the set limit values.
    */


    function setResponsive(active) {
      var isResponsive = isResponsiveMode();

      if (active) {
        if (!isResponsive) {
          setAutoScrolling(false, 'internal');
          setFitToSection(false, 'internal');
          hide($(SECTION_NAV_SEL));
          addClass($body, RESPONSIVE);

          if (isFunction(options.afterResponsive)) {
            options.afterResponsive.call(container, active);
          } //when on page load, we will remove scrolloverflow if necessary


          if (options.scrollOverflow) {
            scrollBarHandler.createScrollBarForAll();
          }
        }
      } else if (isResponsive) {
        setAutoScrolling(originals.autoScrolling, 'internal');
        setFitToSection(originals.autoScrolling, 'internal');
        show($(SECTION_NAV_SEL));
        removeClass($body, RESPONSIVE);

        if (isFunction(options.afterResponsive)) {
          options.afterResponsive.call(container, active);
        }
      }
    }

    if (container) {
      //public functions
      FP.version = '3.0.8';
      FP.setAutoScrolling = setAutoScrolling;
      FP.setRecordHistory = setRecordHistory;
      FP.setScrollingSpeed = setScrollingSpeed;
      FP.setFitToSection = setFitToSection;
      FP.setLockAnchors = setLockAnchors;
      FP.setMouseWheelScrolling = setMouseWheelScrolling;
      FP.setAllowScrolling = setAllowScrolling;
      FP.setKeyboardScrolling = setKeyboardScrolling;
      FP.moveSectionUp = moveSectionUp;
      FP.moveSectionDown = moveSectionDown;
      FP.silentMoveTo = silentMoveTo;
      FP.moveTo = moveTo;
      FP.moveSlideRight = moveSlideRight;
      FP.moveSlideLeft = moveSlideLeft;
      FP.fitToSection = fitToSection;
      FP.reBuild = reBuild;
      FP.setResponsive = setResponsive;

      FP.getFullpageData = function () {
        return options;
      };

      FP.destroy = destroy;
      FP.getActiveSection = getActiveSection;
      FP.getActiveSlide = getActiveSlide;
      FP.test = {
        top: '0px',
        translate3d: 'translate3d(0px, 0px, 0px)',
        translate3dH: function () {
          var a = [];

          for (var i = 0; i < $(options.sectionSelector, container).length; i++) {
            a.push('translate3d(0px, 0px, 0px)');
          }

          return a;
        }(),
        left: function () {
          var a = [];

          for (var i = 0; i < $(options.sectionSelector, container).length; i++) {
            a.push(0);
          }

          return a;
        }(),
        options: options,
        setAutoScrolling: setAutoScrolling
      }; //functions we want to share across files but which are not
      //mean to be used on their own by developers

      FP.shared = {
        afterRenderActions: afterRenderActions,
        isNormalScrollElement: false
      };
      window.fullpage_api = FP; //using jQuery initialization? Creating the $.fn.fullpage object

      if (options.$) {
        Object.keys(FP).forEach(function (key) {
          options.$.fn.fullpage[key] = FP[key];
        });
      }

      init();
      bindEvents();
    }

    function init() {
      //if css3 is not supported, it will use jQuery animations
      if (options.css3) {
        options.css3 = support3d();
      }

      options.scrollBar = options.scrollBar || options.hybrid;
      setOptionsFromDOM();
      prepareDom();
      setAllowScrolling(true);
      setMouseHijack(true);
      setAutoScrolling(options.autoScrolling, 'internal');
      responsive(); //setting the class for the body element

      setBodyClass();

      if (document.readyState === 'complete') {
        scrollToAnchor();
      }

      window.addEventListener('load', scrollToAnchor); //if we use scrollOverflow we'll fire afterRender in the scrolloverflow file

      if (!options.scrollOverflow) {
        afterRenderActions();
      }

      doubleCheckHeight();
    }

    function bindEvents() {
      //when scrolling...
      window.addEventListener('scroll', scrollHandler); //detecting any change on the URL to scroll to the given anchor link
      //(a way to detect back history button as we play with the hashes on the URL)

      window.addEventListener('hashchange', hashChangeHandler); // on window focus

      window.addEventListener('focus', focusHandler); //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.

      window.addEventListener('blur', blurHandler); //when resizing the site, we adjust the heights of the sections, slimScroll...

      window.addEventListener('resize', resizeHandler); //Sliding with arrow keys, both, vertical and horizontal

      document.addEventListener('keydown', keydownHandler); //to prevent scrolling while zooming

      document.addEventListener('keyup', keyUpHandler); //Scrolls to the section when clicking the navigation bullet
      //simulating the jQuery .on('click') event using delegation

      ['click', 'touchstart'].forEach(function (eventName) {
        document.addEventListener(eventName, delegatedEvents);
      });
      /**
      * Applying normalScroll elements.
      * Ignoring the scrolls over the specified selectors.
      */

      if (options.normalScrollElements) {
        ['mouseenter', 'touchstart'].forEach(function (eventName) {
          forMouseLeaveOrTouch(eventName, false);
        });
        ['mouseleave', 'touchend'].forEach(function (eventName) {
          forMouseLeaveOrTouch(eventName, true);
        });
      }
    }

    function delegatedEvents(e) {
      var target = e.target;

      if (target && closest(target, SECTION_NAV_SEL + ' a')) {
        sectionBulletHandler.call(target, e);
      } else if (matches(target, SECTION_NAV_TOOLTIP_SEL)) {
        tooltipTextHandler.call(target);
      } else if (matches(target, SLIDES_ARROW_SEL)) {
        slideArrowHandler.call(target, e);
      } else if (matches(target, SLIDES_NAV_LINK_SEL) || closest(target, SLIDES_NAV_LINK_SEL) != null) {
        slideBulletHandler.call(target, e);
      } else if (closest(target, options.menu + ' [data-menuanchor]')) {
        menuItemsHandler.call(target, e);
      }
    }

    function forMouseLeaveOrTouch(eventName, allowScrolling) {
      //a way to pass arguments to the onMouseEnterOrLeave function
      document['fp_' + eventName] = allowScrolling;
      document.addEventListener(eventName, onMouseEnterOrLeave, true); //capturing phase
    }

    function onMouseEnterOrLeave(e) {
      var type = e.type;
      var isInsideOneNormalScroll = false;
      var isUsingScrollOverflow = options.scrollOverflow; //onMouseLeave will use the destination target, not the one we are moving away from

      var target = type === 'mouseleave' ? e.toElement || e.relatedTarget : e.target; //coming from closing a normalScrollElements modal or moving outside viewport?

      if (target == document || !target) {
        setMouseHijack(true);

        if (isUsingScrollOverflow) {
          options.scrollOverflowHandler.setIscroll(target, true);
        }

        return;
      }

      if (type === 'touchend') {
        g_canFireMouseEnterNormalScroll = false;
        setTimeout(function () {
          g_canFireMouseEnterNormalScroll = true;
        }, 800);
      } //preventing mouseenter event to do anything when coming from a touchEnd event
      //fixing issue #3576


      if (type === 'mouseenter' && !g_canFireMouseEnterNormalScroll) {
        return;
      }

      var normalSelectors = options.normalScrollElements.split(',');
      normalSelectors.forEach(function (normalSelector) {
        if (!isInsideOneNormalScroll) {
          var isNormalScrollTarget = matches(target, normalSelector); //leaving a child inside the normalScoll element is not leaving the normalScroll #3661

          var isNormalScrollChildFocused = closest(target, normalSelector);

          if (isNormalScrollTarget || isNormalScrollChildFocused) {
            if (!FP.shared.isNormalScrollElement) {
              setMouseHijack(false);

              if (isUsingScrollOverflow) {
                options.scrollOverflowHandler.setIscroll(target, false);
              }
            }

            FP.shared.isNormalScrollElement = true;
            isInsideOneNormalScroll = true;
          }
        }
      }); //not inside a single normal scroll element anymore?

      if (!isInsideOneNormalScroll && FP.shared.isNormalScrollElement) {
        setMouseHijack(true);

        if (isUsingScrollOverflow) {
          options.scrollOverflowHandler.setIscroll(target, true);
        }

        FP.shared.isNormalScrollElement = false;
      }
    }
    /**
    * Checks the viewport a few times on a define interval of time to 
    * see if it has changed in any of those. If that's the case, it resizes.
    */


    function doubleCheckHeight() {
      for (var i = 1; i < 4; i++) {
        g_doubleCheckHeightId = setTimeout(adjustToNewViewport, 350 * i);
      }
    }
    /**
    * Adjusts a section to the viewport if it has changed.
    */


    function adjustToNewViewport() {
      var newWindowHeight = getWindowHeight();
      var newWindowWidth = getWindowWidth();

      if (windowsHeight !== newWindowHeight || windowsWidth !== newWindowWidth) {
        windowsHeight = newWindowHeight;
        windowsWidth = newWindowWidth;
        reBuild(true);
      }
    }
    /**
    * Setting options from DOM elements if they are not provided.
    */


    function setOptionsFromDOM() {
      //no anchors option? Checking for them in the DOM attributes
      if (!options.anchors.length) {
        var anchorsAttribute = '[data-anchor]';
        var anchors = $(options.sectionSelector.split(',').join(anchorsAttribute + ',') + anchorsAttribute, container);

        if (anchors.length && anchors.length === $(SECTION_SEL).length) {
          g_initialAnchorsInDom = true;
          anchors.forEach(function (item) {
            options.anchors.push(item.getAttribute('data-anchor').toString());
          });
        }
      } //no tooltips option? Checking for them in the DOM attributes


      if (!options.navigationTooltips.length) {
        var tooltipsAttribute = '[data-tooltip]';
        var tooltips = $(options.sectionSelector.split(',').join(tooltipsAttribute + ',') + tooltipsAttribute, container);

        if (tooltips.length) {
          tooltips.forEach(function (item) {
            options.navigationTooltips.push(item.getAttribute('data-tooltip').toString());
          });
        }
      }
    }
    /**
    * Works over the DOM structure to set it up for the current fullpage options.
    */


    function prepareDom() {
      css(container, {
        'height': '100%',
        'position': 'relative'
      }); //adding a class to recognize the container internally in the code

      addClass(container, WRAPPER);
      addClass($html, ENABLED); //due to https://github.com/alvarotrigo/fullPage.js/issues/1502

      windowsHeight = getWindowHeight();
      removeClass(container, DESTROYED); //in case it was destroyed before initializing it again

      addInternalSelectors();
      var sections = $(SECTION_SEL); //styling the sections / slides / menu

      for (var i = 0; i < sections.length; i++) {
        var sectionIndex = i;
        var section = sections[i];
        var slides = $(SLIDE_SEL, section);
        var numSlides = slides.length; //caching the original styles to add them back on destroy('all')

        section.setAttribute('data-fp-styles', section.getAttribute('style'));
        styleSection(section, sectionIndex);
        styleMenu(section, sectionIndex); // if there's any slide

        if (numSlides > 0) {
          styleSlides(section, slides, numSlides);
        } else {
          if (options.verticalCentered) {
            addTableClass(section);
          }
        }
      } //fixed elements need to be moved out of the plugin container due to problems with CSS3.


      if (options.fixedElements && options.css3) {
        $(options.fixedElements).forEach(function (item) {
          $body.appendChild(item);
        });
      } //vertical centered of the navigation + active bullet


      if (options.navigation) {
        addVerticalNavigation();
      }

      enableYoutubeAPI();

      if (options.scrollOverflow) {
        scrollBarHandler = options.scrollOverflowHandler.init(options);
      }
    }
    /**
    * Styles the horizontal slides for a section.
    */


    function styleSlides(section, slides, numSlides) {
      var sliderWidth = numSlides * 100;
      var slideWidth = 100 / numSlides;
      var slidesWrapper = document.createElement('div');
      slidesWrapper.className = SLIDES_WRAPPER; //fp-slides

      wrapAll(slides, slidesWrapper);
      var slidesContainer = document.createElement('div');
      slidesContainer.className = SLIDES_CONTAINER; //fp-slidesContainer

      wrapAll(slides, slidesContainer);
      css($(SLIDES_CONTAINER_SEL, section), {
        'width': sliderWidth + '%'
      });

      if (numSlides > 1) {
        if (options.controlArrows) {
          createSlideArrows(section);
        }

        if (options.slidesNavigation) {
          addSlidesNavigation(section, numSlides);
        }
      }

      slides.forEach(function (slide) {
        css(slide, {
          'width': slideWidth + '%'
        });

        if (options.verticalCentered) {
          addTableClass(slide);
        }
      });
      var startingSlide = $(SLIDE_ACTIVE_SEL, section)[0]; //if the slide won't be an starting point, the default will be the first one
      //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.

      if (startingSlide != null && (index($(SECTION_ACTIVE_SEL), SECTION_SEL) !== 0 || index($(SECTION_ACTIVE_SEL), SECTION_SEL) === 0 && index(startingSlide) !== 0)) {
        silentLandscapeScroll(startingSlide, 'internal');
      } else {
        addClass(slides[0], ACTIVE);
      }
    }
    /**
    * Styling vertical sections
    */


    function styleSection(section, index) {
      //if no active section is defined, the 1st one will be the default one
      if (!index && $(SECTION_ACTIVE_SEL)[0] == null) {
        addClass(section, ACTIVE);
      }

      startingSection = $(SECTION_ACTIVE_SEL)[0];
      css(section, {
        'height': windowsHeight + 'px'
      });

      if (options.paddingTop) {
        css(section, {
          'padding-top': options.paddingTop
        });
      }

      if (options.paddingBottom) {
        css(section, {
          'padding-bottom': options.paddingBottom
        });
      }

      if (typeof options.sectionsColor[index] !== 'undefined') {
        css(section, {
          'background-color': options.sectionsColor[index]
        });
      }

      if (typeof options.anchors[index] !== 'undefined') {
        section.setAttribute('data-anchor', options.anchors[index]);
      }
    }
    /**
    * Sets the data-anchor attributes to the menu elements and activates the current one.
    */


    function styleMenu(section, index) {
      if (typeof options.anchors[index] !== 'undefined') {
        //activating the menu / nav element on load
        if (hasClass(section, ACTIVE)) {
          activateMenuAndNav(options.anchors[index], index);
        }
      } //moving the menu outside the main container if it is inside (avoid problems with fixed positions when using CSS3 tranforms)


      if (options.menu && options.css3 && closest($(options.menu)[0], WRAPPER_SEL) != null) {
        $(options.menu).forEach(function (menu) {
          $body.appendChild(menu);
        });
      }
    }
    /**
    * Adds internal classes to be able to provide customizable selectors
    * keeping the link with the style sheet.
    */


    function addInternalSelectors() {
      addClass($(options.sectionSelector, container), SECTION);
      addClass($(options.slideSelector, container), SLIDE);
    }
    /**
    * Creates the control arrows for the given section
    */


    function createSlideArrows(section) {
      var arrows = [createElementFromHTML('<div class="' + SLIDES_ARROW_PREV + '"></div>'), createElementFromHTML('<div class="' + SLIDES_ARROW_NEXT + '"></div>')];
      after($(SLIDES_WRAPPER_SEL, section)[0], arrows);

      if (options.controlArrowColor !== '#fff') {
        css($(SLIDES_ARROW_NEXT_SEL, section), {
          'border-color': 'transparent transparent transparent ' + options.controlArrowColor
        });
        css($(SLIDES_ARROW_PREV_SEL, section), {
          'border-color': 'transparent ' + options.controlArrowColor + ' transparent transparent'
        });
      }

      if (!options.loopHorizontal) {
        hide($(SLIDES_ARROW_PREV_SEL, section));
      }
    }
    /**
    * Creates a vertical navigation bar.
    */


    function addVerticalNavigation() {
      var navigation = document.createElement('div');
      navigation.setAttribute('id', SECTION_NAV);
      var divUl = document.createElement('ul');
      navigation.appendChild(divUl);
      appendTo(navigation, $body);
      var nav = $(SECTION_NAV_SEL)[0];
      addClass(nav, 'fp-' + options.navigationPosition);

      if (options.showActiveTooltip) {
        addClass(nav, SHOW_ACTIVE_TOOLTIP);
      }

      var li = '';

      for (var i = 0; i < $(SECTION_SEL).length; i++) {
        var link = '';

        if (options.anchors.length) {
          link = options.anchors[i];
        }

        li += '<li><a href="#' + link + '"><span class="fp-sr-only">' + getBulletLinkName(i, 'Section') + '</span><span></span></a>'; // Only add tooltip if needed (defined by user)

        var tooltip = options.navigationTooltips[i];

        if (typeof tooltip !== 'undefined' && tooltip !== '') {
          li += '<div class="' + SECTION_NAV_TOOLTIP + ' fp-' + options.navigationPosition + '">' + tooltip + '</div>';
        }

        li += '</li>';
      }

      $('ul', nav)[0].innerHTML = li; //activating the current active section

      var bullet = $('li', $(SECTION_NAV_SEL)[0])[index($(SECTION_ACTIVE_SEL)[0], SECTION_SEL)];
      addClass($('a', bullet), ACTIVE);
    }
    /**
    * Gets the name for screen readers for a section/slide navigation bullet.
    */


    function getBulletLinkName(i, defaultName, item) {
      var anchor = defaultName === 'Section' ? options.anchors[i] : item.getAttribute('data-anchor');
      return options.navigationTooltips[i] || anchor || defaultName + ' ' + (i + 1);
    }
    /*
    * Enables the Youtube videos API so we can control their flow if necessary.
    */


    function enableYoutubeAPI() {
      $('iframe[src*="youtube.com/embed/"]', container).forEach(function (item) {
        addURLParam(item, 'enablejsapi=1');
      });
    }
    /**
    * Adds a new parameter and its value to the `src` of a given element
    */


    function addURLParam(element, newParam) {
      var originalSrc = element.getAttribute('src');
      element.setAttribute('src', originalSrc + getUrlParamSign(originalSrc) + newParam);
    }
    /*
    * Returns the prefix sign to use for a new parameter in an existen URL.
    *
    * @return {String}  ? | &
    */


    function getUrlParamSign(url) {
      return !/\?/.test(url) ? '?' : '&';
    }
    /**
    * Actions and callbacks to fire afterRender
    */


    function afterRenderActions() {
      var section = $(SECTION_ACTIVE_SEL)[0];
      addClass(section, COMPLETELY);
      lazyLoad(section);
      lazyLoadOthers();
      playMedia(section);

      if (options.scrollOverflow) {
        options.scrollOverflowHandler.afterLoad();
      }

      if (isDestinyTheStartingSection() && isFunction(options.afterLoad)) {
        fireCallback('afterLoad', {
          activeSection: section,
          element: section,
          direction: null,
          //for backwards compatibility callback (to be removed in a future!)
          anchorLink: section.getAttribute('data-anchor'),
          sectionIndex: index(section, SECTION_SEL)
        });
      }

      if (isFunction(options.afterRender)) {
        fireCallback('afterRender');
      }
    }
    /**
    * Determines if the URL anchor destiny is the starting section (the one using 'active' class before initialization)
    */


    function isDestinyTheStartingSection() {
      var anchor = getAnchorsURL();
      var destinationSection = getSectionByAnchor(anchor.section);
      return !anchor.section || !destinationSection || typeof destinationSection !== 'undefined' && index(destinationSection) === index(startingSection);
    }

    var isScrolling = false;
    var lastScroll = 0; //when scrolling...

    function scrollHandler() {
      var currentSection;

      if (isResizing) {
        return;
      }

      if (!options.autoScrolling || options.scrollBar) {
        var currentScroll = getScrollTop();
        var scrollDirection = getScrollDirection(currentScroll);
        var visibleSectionIndex = 0;
        var screen_mid = currentScroll + getWindowHeight() / 2.0;
        var isAtBottom = $body.offsetHeight - getWindowHeight() === currentScroll;
        var sections = $(SECTION_SEL); //when using `auto-height` for a small last section it won't be centered in the viewport

        if (isAtBottom) {
          visibleSectionIndex = sections.length - 1;
        } //is at top? when using `auto-height` for a small first section it won't be centered in the viewport
        else if (!currentScroll) {
            visibleSectionIndex = 0;
          } //taking the section which is showing more content in the viewport
          else {
              for (var i = 0; i < sections.length; ++i) {
                var section = sections[i]; // Pick the the last section which passes the middle line of the screen.

                if (section.offsetTop <= screen_mid) {
                  visibleSectionIndex = i;
                }
              }
            }

        if (isCompletelyInViewPort(scrollDirection)) {
          if (!hasClass($(SECTION_ACTIVE_SEL)[0], COMPLETELY)) {
            addClass($(SECTION_ACTIVE_SEL)[0], COMPLETELY);
            removeClass(siblings($(SECTION_ACTIVE_SEL)[0]), COMPLETELY);
          }
        } //geting the last one, the current one on the screen


        currentSection = sections[visibleSectionIndex]; //setting the visible section as active when manually scrolling
        //executing only once the first time we reach the section

        if (!hasClass(currentSection, ACTIVE)) {
          isScrolling = true;
          var leavingSection = $(SECTION_ACTIVE_SEL)[0];
          var leavingSectionIndex = index(leavingSection, SECTION_SEL) + 1;
          var yMovement = getYmovement(currentSection);
          var anchorLink = currentSection.getAttribute('data-anchor');
          var sectionIndex = index(currentSection, SECTION_SEL) + 1;
          var activeSlide = $(SLIDE_ACTIVE_SEL, currentSection)[0];
          var slideIndex;
          var slideAnchorLink;
          var callbacksParams = {
            activeSection: leavingSection,
            sectionIndex: sectionIndex - 1,
            anchorLink: anchorLink,
            element: currentSection,
            leavingSection: leavingSectionIndex,
            direction: yMovement
          };

          if (activeSlide) {
            slideAnchorLink = activeSlide.getAttribute('data-anchor');
            slideIndex = index(activeSlide);
          }

          if (canScroll) {
            addClass(currentSection, ACTIVE);
            removeClass(siblings(currentSection), ACTIVE);

            if (isFunction(options.onLeave)) {
              fireCallback('onLeave', callbacksParams);
            }

            if (isFunction(options.afterLoad)) {
              fireCallback('afterLoad', callbacksParams);
            }

            stopMedia(leavingSection);
            lazyLoad(currentSection);
            playMedia(currentSection);
            activateMenuAndNav(anchorLink, sectionIndex - 1);

            if (options.anchors.length) {
              //needed to enter in hashChange event when using the menu with anchor links
              lastScrolledDestiny = anchorLink;
            }

            setState(slideIndex, slideAnchorLink, anchorLink, sectionIndex);
          } //small timeout in order to avoid entering in hashChange event when scrolling is not finished yet


          clearTimeout(scrollId);
          scrollId = setTimeout(function () {
            isScrolling = false;
          }, 100);
        }

        if (options.fitToSection) {
          //for the auto adjust of the viewport to fit a whole section
          clearTimeout(scrollId2);
          scrollId2 = setTimeout(function () {
            //checking it again in case it changed during the delay
            if (options.fitToSection && //is the destination element bigger than the viewport?
            $(SECTION_ACTIVE_SEL)[0].offsetHeight <= windowsHeight) {
              fitToSection();
            }
          }, options.fitToSectionDelay);
        }
      }
    }
    /**
    * Fits the site to the nearest active section
    */


    function fitToSection() {
      //checking fitToSection again in case it was set to false before the timeout delay
      if (canScroll) {
        //allows to scroll to an active section and
        //if the section is already active, we prevent firing callbacks
        isResizing = true;
        scrollPage($(SECTION_ACTIVE_SEL)[0]);
        isResizing = false;
      }
    }
    /**
    * Determines whether the active section has seen in its whole or not.
    */


    function isCompletelyInViewPort(movement) {
      var top = $(SECTION_ACTIVE_SEL)[0].offsetTop;
      var bottom = top + getWindowHeight();

      if (movement == 'up') {
        return bottom >= getScrollTop() + getWindowHeight();
      }

      return top <= getScrollTop();
    }
    /**
    * Determines whether a section is in the viewport or not.
    */


    function isSectionInViewport(el) {
      var rect = el.getBoundingClientRect();
      var top = rect.top;
      var bottom = rect.bottom; //sometimes there's a 1px offset on the bottom of the screen even when the 
      //section's height is the window.innerHeight one. I guess because pixels won't allow decimals.
      //using this prevents from lazyLoading the section that is not yet visible 
      //(only 1 pixel offset is)

      var pixelOffset = 2;
      var isTopInView = top + pixelOffset < windowsHeight && top > 0;
      var isBottomInView = bottom > pixelOffset && bottom < windowsHeight;
      return isTopInView || isBottomInView;
    }
    /**
    * Gets the directon of the the scrolling fired by the scroll event.
    */


    function getScrollDirection(currentScroll) {
      var direction = currentScroll > lastScroll ? 'down' : 'up';
      lastScroll = currentScroll; //needed for auto-height sections to determine if we want to scroll to the top or bottom of the destination

      previousDestTop = currentScroll;
      return direction;
    }
    /**
    * Determines the way of scrolling up or down:
    * by 'automatically' scrolling a section or by using the default and normal scrolling.
    */


    function scrolling(type) {
      if (!isScrollAllowed.m[type]) {
        return;
      }

      var scrollSection = type === 'down' ? moveSectionDown : moveSectionUp;

      if (options.scrollOverflow) {
        var scrollable = options.scrollOverflowHandler.scrollable($(SECTION_ACTIVE_SEL)[0]);
        var check = type === 'down' ? 'bottom' : 'top';

        if (scrollable != null) {
          //is the scrollbar at the start/end of the scroll?
          if (options.scrollOverflowHandler.isScrolled(check, scrollable)) {
            scrollSection();
          } else {
            return true;
          }
        } else {
          // moved up/down
          scrollSection();
        }
      } else {
        // moved up/down
        scrollSection();
      }
    }
    /*
    * Preventing bouncing in iOS #2285
    */


    function preventBouncing(e) {
      if (options.autoScrolling && isReallyTouch(e) && isScrollAllowed.m.up) {
        //preventing the easing on iOS devices
        preventDefault(e);
      }
    }

    var touchStartY = 0;
    var touchStartX = 0;
    var touchEndY = 0;
    var touchEndX = 0;
    /* Detecting touch events
      * As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
    * This way, the touchstart and the touch moves shows an small difference between them which is the
    * used one to determine the direction.
    */

    function touchMoveHandler(e) {
      var activeSection = closest(e.target, SECTION_SEL) || $(SECTION_ACTIVE_SEL)[0];

      if (isReallyTouch(e)) {
        if (options.autoScrolling) {
          //preventing the easing on iOS devices
          preventDefault(e);
        }

        var touchEvents = getEventsPage(e);
        touchEndY = touchEvents.y;
        touchEndX = touchEvents.x; //if movement in the X axys is greater than in the Y and the currect section has slides...

        if ($(SLIDES_WRAPPER_SEL, activeSection).length && Math.abs(touchStartX - touchEndX) > Math.abs(touchStartY - touchEndY)) {
          //is the movement greater than the minimum resistance to scroll?
          if (!slideMoving && Math.abs(touchStartX - touchEndX) > getWindowWidth() / 100 * options.touchSensitivity) {
            if (touchStartX > touchEndX) {
              if (isScrollAllowed.m.right) {
                moveSlideRight(activeSection); //next
              }
            } else {
              if (isScrollAllowed.m.left) {
                moveSlideLeft(activeSection); //prev
              }
            }
          }
        } //vertical scrolling (only when autoScrolling is enabled)
        else if (options.autoScrolling && canScroll) {
            //is the movement greater than the minimum resistance to scroll?
            if (Math.abs(touchStartY - touchEndY) > window.innerHeight / 100 * options.touchSensitivity) {
              if (touchStartY > touchEndY) {
                scrolling('down');
              } else if (touchEndY > touchStartY) {
                scrolling('up');
              }
            }
          }
      }
    }
    /**
    * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
    * this way we make sure that is really a touch event what IE is detecting.
    */


    function isReallyTouch(e) {
      //if is not IE   ||  IE is detecting `touch` or `pen`
      return typeof e.pointerType === 'undefined' || e.pointerType != 'mouse';
    }
    /**
    * Handler for the touch start event.
    */


    function touchStartHandler(e) {
      //stopping the auto scroll to adjust to a section
      if (options.fitToSection) {
        activeAnimation = false;
      }

      if (isReallyTouch(e)) {
        var touchEvents = getEventsPage(e);
        touchStartY = touchEvents.y;
        touchStartX = touchEvents.x;
      }
    }
    /**
    * Gets the average of the last `number` elements of the given array.
    */


    function getAverage(elements, number) {
      var sum = 0; //taking `number` elements from the end to make the average, if there are not enought, 1

      var lastElements = elements.slice(Math.max(elements.length - number, 1));

      for (var i = 0; i < lastElements.length; i++) {
        sum = sum + lastElements[i];
      }

      return Math.ceil(sum / number);
    }
    /**
     * Detecting mousewheel scrolling
     *
     * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
     * http://www.sitepoint.com/html5-javascript-mouse-wheel/
     */


    var prevTime = new Date().getTime();

    function MouseWheelHandler(e) {
      var curTime = new Date().getTime();
      var isNormalScroll = hasClass($(COMPLETELY_SEL)[0], NORMAL_SCROLL); //is scroll allowed?

      if (!isScrollAllowed.m.down && !isScrollAllowed.m.up) {
        preventDefault(e);
        return false;
      } //autoscrolling and not zooming?


      if (options.autoScrolling && !controlPressed && !isNormalScroll) {
        // cross-browser wheel delta
        e = e || window.event;
        var value = e.wheelDelta || -e.deltaY || -e.detail;
        var delta = Math.max(-1, Math.min(1, value));
        var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
        var isScrollingVertically = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !horizontalDetection; //Limiting the array to 150 (lets not waste memory!)

        if (scrollings.length > 149) {
          scrollings.shift();
        } //keeping record of the previous scrollings


        scrollings.push(Math.abs(value)); //preventing to scroll the site on mouse wheel when scrollbar is present

        if (options.scrollBar) {
          preventDefault(e);
        } //time difference between the last scroll and the current one


        var timeDiff = curTime - prevTime;
        prevTime = curTime; //haven't they scrolled in a while?
        //(enough to be consider a different scrolling action to scroll another section)

        if (timeDiff > 200) {
          //emptying the array, we dont care about old scrollings for our averages
          scrollings = [];
        }

        if (canScroll) {
          var averageEnd = getAverage(scrollings, 10);
          var averageMiddle = getAverage(scrollings, 70);
          var isAccelerating = averageEnd >= averageMiddle; //to avoid double swipes...

          if (isAccelerating && isScrollingVertically) {
            //scrolling down?
            if (delta < 0) {
              scrolling('down'); //scrolling up?
            } else {
              scrolling('up');
            }
          }
        }

        return false;
      }

      if (options.fitToSection) {
        //stopping the auto scroll to adjust to a section
        activeAnimation = false;
      }
    }
    /**
    * Slides a slider to the given direction.
    * Optional `section` param.
    */


    function moveSlide(direction, section) {
      var activeSection = section == null ? $(SECTION_ACTIVE_SEL)[0] : section;
      var slides = $(SLIDES_WRAPPER_SEL, activeSection)[0]; // more than one slide needed and nothing should be sliding

      if (slides == null || slideMoving || $(SLIDE_SEL, slides).length < 2) {
        return;
      }

      var currentSlide = $(SLIDE_ACTIVE_SEL, slides)[0];
      var destiny = null;

      if (direction === 'left') {
        destiny = prevUntil(currentSlide, SLIDE_SEL);
      } else {
        destiny = nextUntil(currentSlide, SLIDE_SEL);
      } //isn't there a next slide in the secuence?


      if (destiny == null) {
        //respect loopHorizontal settin
        if (!options.loopHorizontal) return;
        var slideSiblings = siblings(currentSlide);

        if (direction === 'left') {
          destiny = slideSiblings[slideSiblings.length - 1]; //last
        } else {
          destiny = slideSiblings[0]; //first
        }
      }

      slideMoving =  true && !FP.test.isTesting;
      landscapeScroll(slides, destiny, direction);
    }
    /**
    * Maintains the active slides in the viewport
    * (Because the `scroll` animation might get lost with some actions, such as when using continuousVertical)
    */


    function keepSlidesPosition() {
      var activeSlides = $(SLIDE_ACTIVE_SEL);

      for (var i = 0; i < activeSlides.length; i++) {
        silentLandscapeScroll(activeSlides[i], 'internal');
      }
    }

    var previousDestTop = 0;
    /**
    * Returns the destination Y position based on the scrolling direction and
    * the height of the section.
    */

    function getDestinationPosition(element) {
      var elementHeight = element.offsetHeight;
      var elementTop = element.offsetTop; //top of the desination will be at the top of the viewport

      var position = elementTop;
      var isScrollingDown = elementTop > previousDestTop;
      var sectionBottom = position - windowsHeight + elementHeight;
      var bigSectionsDestination = options.bigSectionsDestination; //is the destination element bigger than the viewport?

      if (elementHeight > windowsHeight) {
        //scrolling up?
        if (!isScrollingDown && !bigSectionsDestination || bigSectionsDestination === 'bottom') {
          position = sectionBottom;
        }
      } //sections equal or smaller than the viewport height && scrolling down? ||  is resizing and its in the last section
      else if (isScrollingDown || isResizing && next(element) == null) {
          //The bottom of the destination will be at the bottom of the viewport
          position = sectionBottom;
        }
      /*
      Keeping record of the last scrolled position to determine the scrolling direction.
      No conventional methods can be used as the scroll bar might not be present
      AND the section might not be active if it is auto-height and didnt reach the middle
      of the viewport.
      */


      previousDestTop = position;
      return position;
    }
    /**
    * Scrolls the site to the given element and scrolls to the slide if a callback is given.
    */


    function scrollPage(element, callback, isMovementUp) {
      if (element == null) {
        return;
      } //there's no element to scroll, leaving the function


      var dtop = getDestinationPosition(element);
      var slideAnchorLink;
      var slideIndex; //local variables

      var v = {
        element: element,
        callback: callback,
        isMovementUp: isMovementUp,
        dtop: dtop,
        yMovement: getYmovement(element),
        anchorLink: element.getAttribute('data-anchor'),
        sectionIndex: index(element, SECTION_SEL),
        activeSlide: $(SLIDE_ACTIVE_SEL, element)[0],
        activeSection: $(SECTION_ACTIVE_SEL)[0],
        leavingSection: index($(SECTION_ACTIVE_SEL), SECTION_SEL) + 1,
        //caching the value of isResizing at the momment the function is called
        //because it will be checked later inside a setTimeout and the value might change
        localIsResizing: isResizing
      }; //quiting when destination scroll is the same as the current one

      if (v.activeSection == element && !isResizing || options.scrollBar && getScrollTop() === v.dtop && !hasClass(element, AUTO_HEIGHT)) {
        return;
      }

      if (v.activeSlide != null) {
        slideAnchorLink = v.activeSlide.getAttribute('data-anchor');
        slideIndex = index(v.activeSlide);
      } //callback (onLeave) if the site is not just resizing and readjusting the slides


      if (!v.localIsResizing) {
        var direction = v.yMovement; //required for continousVertical

        if (typeof isMovementUp !== 'undefined') {
          direction = isMovementUp ? 'up' : 'down';
        } //for the callback


        v.direction = direction;

        if (isFunction(options.onLeave)) {
          if (fireCallback('onLeave', v) === false) {
            return;
          }
        }
      } // If continuousVertical && we need to wrap around


      if (options.autoScrolling && options.continuousVertical && typeof v.isMovementUp !== "undefined" && (!v.isMovementUp && v.yMovement == 'up' || // Intending to scroll down but about to go up or
      v.isMovementUp && v.yMovement == 'down')) {
        // intending to scroll up but about to go down
        v = createInfiniteSections(v);
      } //pausing media of the leaving section (if we are not just resizing, as destinatino will be the same one)


      if (!v.localIsResizing) {
        stopMedia(v.activeSection);
      }

      if (options.scrollOverflow) {
        options.scrollOverflowHandler.beforeLeave();
      }

      addClass(element, ACTIVE);
      removeClass(siblings(element), ACTIVE);
      lazyLoad(element);

      if (options.scrollOverflow) {
        options.scrollOverflowHandler.onLeave();
      } //preventing from activating the MouseWheelHandler event
      //more than once if the page is scrolling


      canScroll =  false || FP.test.isTesting;
      setState(slideIndex, slideAnchorLink, v.anchorLink, v.sectionIndex);
      performMovement(v); //flag to avoid callingn `scrollPage()` twice in case of using anchor links

      lastScrolledDestiny = v.anchorLink; //avoid firing it twice (as it does also on scroll)

      activateMenuAndNav(v.anchorLink, v.sectionIndex);
    }
    /**
    * Dispatch events & callbacks making sure it does it on the right format, depending on
    * whether v2compatible is being used or not.
    */


    function fireCallback(eventName, v) {
      var eventData = getEventData(eventName, v);

      if (!options.v2compatible) {
        trigger(container, eventName, eventData);

        if (options[eventName].apply(eventData[Object.keys(eventData)[0]], toArray(eventData)) === false) {
          return false;
        }
      } else {
        if (options[eventName].apply(eventData[0], eventData.slice(1)) === false) {
          return false;
        }
      }

      return true;
    }
    /**
    * Makes sure to only create a Panel object if the element exist
    */


    function nullOrSection(el) {
      return el ? new Section(el) : null;
    }

    function nullOrSlide(el) {
      return el ? new Slide(el) : null;
    }
    /**
    * Gets the event's data for the given event on the right format. Depending on whether
    * v2compatible is being used or not.
    */


    function getEventData(eventName, v) {
      var paramsPerEvent;

      if (!options.v2compatible) {
        //using functions to run only the necessary bits within the object
        paramsPerEvent = {
          afterRender: function () {
            return {
              section: nullOrSection($(SECTION_ACTIVE_SEL)[0]),
              slide: nullOrSlide($(SLIDE_ACTIVE_SEL, $(SECTION_ACTIVE_SEL)[0])[0])
            };
          },
          onLeave: function () {
            return {
              origin: nullOrSection(v.activeSection),
              destination: nullOrSection(v.element),
              direction: v.direction
            };
          },
          afterLoad: function () {
            return paramsPerEvent.onLeave();
          },
          afterSlideLoad: function () {
            return {
              section: nullOrSection(v.section),
              origin: nullOrSlide(v.prevSlide),
              destination: nullOrSlide(v.destiny),
              direction: v.direction
            };
          },
          onSlideLeave: function () {
            return paramsPerEvent.afterSlideLoad();
          }
        };
      } else {
        paramsPerEvent = {
          afterRender: function () {
            return [container];
          },
          onLeave: function () {
            return [v.activeSection, v.leavingSection, v.sectionIndex + 1, v.direction];
          },
          afterLoad: function () {
            return [v.element, v.anchorLink, v.sectionIndex + 1];
          },
          afterSlideLoad: function () {
            return [v.destiny, v.anchorLink, v.sectionIndex + 1, v.slideAnchor, v.slideIndex];
          },
          onSlideLeave: function () {
            return [v.prevSlide, v.anchorLink, v.sectionIndex + 1, v.prevSlideIndex, v.direction, v.slideIndex];
          }
        };
      }

      return paramsPerEvent[eventName]();
    }
    /**
    * Performs the vertical movement (by CSS3 or by jQuery)
    */


    function performMovement(v) {
      var isFastSpeed = options.scrollingSpeed < 700;
      var transitionLapse = isFastSpeed ? 700 : options.scrollingSpeed; // using CSS3 translate functionality

      if (options.css3 && options.autoScrolling && !options.scrollBar) {
        // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
        // that's why we round it to 0.
        var translate3d = 'translate3d(0px, -' + Math.round(v.dtop) + 'px, 0px)';
        transformContainer(translate3d, true); //even when the scrollingSpeed is 0 there's a little delay, which might cause the
        //scrollingSpeed to change in case of using silentMoveTo();

        if (options.scrollingSpeed) {
          clearTimeout(afterSectionLoadsId);
          afterSectionLoadsId = setTimeout(function () {
            afterSectionLoads(v); //disabling canScroll when using fastSpeed

            canScroll = !isFastSpeed;
          }, options.scrollingSpeed);
        } else {
          afterSectionLoads(v);
        }
      } // using JS to animate
      else {
          var scrollSettings = getScrollSettings(v.dtop);
          FP.test.top = -v.dtop + 'px';
          scrollTo(scrollSettings.element, scrollSettings.options, options.scrollingSpeed, function () {
            if (options.scrollBar) {
              /* Hack!
              The timeout prevents setting the most dominant section in the viewport as "active" when the user
              scrolled to a smaller section by using the mousewheel (auto scrolling) rather than draging the scroll bar.
                When using scrollBar:true It seems like the scroll events still getting propagated even after the scrolling animation has finished.
              */
              setTimeout(function () {
                afterSectionLoads(v);
              }, 30);
            } else {
              afterSectionLoads(v); //disabling canScroll when using fastSpeed

              canScroll = !isFastSpeed;
            }
          });
        } // enabling canScroll after the minimum transition laps


      if (isFastSpeed) {
        clearTimeout(g_transitionLapseId);
        g_transitionLapseId = setTimeout(function () {
          canScroll = true;
        }, transitionLapse);
      }
    }
    /**
    * Gets the scrolling settings depending on the plugin autoScrolling option
    */


    function getScrollSettings(top) {
      var scroll = {}; //top property animation

      if (options.autoScrolling && !options.scrollBar) {
        scroll.options = -top;
        scroll.element = $(WRAPPER_SEL)[0];
      } //window real scrolling
      else {
          scroll.options = top;
          scroll.element = window;
        }

      return scroll;
    }
    /**
    * Adds sections before or after the current one to create the infinite effect.
    */


    function createInfiniteSections(v) {
      // Scrolling down
      if (!v.isMovementUp) {
        // Move all previous sections to after the active section
        after($(SECTION_ACTIVE_SEL)[0], prevAll(v.activeSection, SECTION_SEL).reverse());
      } else {
        // Scrolling up
        // Move all next sections to before the active section
        before($(SECTION_ACTIVE_SEL)[0], nextAll(v.activeSection, SECTION_SEL));
      } // Maintain the displayed position (now that we changed the element order)


      silentScroll($(SECTION_ACTIVE_SEL)[0].offsetTop); // Maintain the active slides visible in the viewport

      keepSlidesPosition(); // save for later the elements that still need to be reordered

      v.wrapAroundElements = v.activeSection; // Recalculate animation variables

      v.dtop = v.element.offsetTop;
      v.yMovement = getYmovement(v.element);
      return v;
    }
    /**
    * Fix section order after continuousVertical changes have been animated
    */


    function continuousVerticalFixSectionOrder(v) {
      // If continuousVertical is in effect (and autoScrolling would also be in effect then),
      // finish moving the elements around so the direct navigation will function more simply
      if (v.wrapAroundElements == null) {
        return;
      }

      if (v.isMovementUp) {
        before($(SECTION_SEL)[0], v.wrapAroundElements);
      } else {
        after($(SECTION_SEL)[$(SECTION_SEL).length - 1], v.wrapAroundElements);
      }

      silentScroll($(SECTION_ACTIVE_SEL)[0].offsetTop); // Maintain the active slides visible in the viewport

      keepSlidesPosition();
    }
    /**
    * Actions to do once the section is loaded.
    */


    function afterSectionLoads(v) {
      continuousVerticalFixSectionOrder(v); //callback (afterLoad) if the site is not just resizing and readjusting the slides

      if (isFunction(options.afterLoad) && !v.localIsResizing) {
        fireCallback('afterLoad', v);
      }

      if (options.scrollOverflow) {
        options.scrollOverflowHandler.afterLoad();
      }

      if (!v.localIsResizing) {
        playMedia(v.element);
      }

      addClass(v.element, COMPLETELY);
      removeClass(siblings(v.element), COMPLETELY);
      lazyLoadOthers();
      canScroll = true;

      if (isFunction(v.callback)) {
        v.callback();
      }
    }
    /**
    * Sets the value for the given attribute from the `data-` attribute with the same suffix
    * ie: data-srcset ==> srcset  |  data-src ==> src
    */


    function setSrc(element, attribute) {
      element.setAttribute(attribute, element.getAttribute('data-' + attribute));
      element.removeAttribute('data-' + attribute);
    }
    /**
    * Makes sure lazyload is done for other sections in the viewport that are not the
    * active one. 
    */


    function lazyLoadOthers() {
      var hasAutoHeightSections = $(AUTO_HEIGHT_SEL)[0] || isResponsiveMode() && $(AUTO_HEIGHT_RESPONSIVE_SEL)[0]; //quitting when it doesn't apply

      if (!options.lazyLoading || !hasAutoHeightSections) {
        return;
      } //making sure to lazy load auto-height sections that are in the viewport


      $(SECTION_SEL + ':not(' + ACTIVE_SEL + ')').forEach(function (section) {
        if (isSectionInViewport(section)) {
          lazyLoad(section);
        }
      });
    }
    /**
    * Lazy loads image, video and audio elements.
    */


    function lazyLoad(destiny) {
      if (!options.lazyLoading) {
        return;
      }

      var panel = getSlideOrSection(destiny);
      $('img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]', panel).forEach(function (element) {
        ['src', 'srcset'].forEach(function (type) {
          var attribute = element.getAttribute('data-' + type);

          if (attribute != null && attribute) {
            setSrc(element, type);
            element.addEventListener('load', function () {
              onMediaLoad(destiny);
            });
          }
        });

        if (matches(element, 'source')) {
          var elementToPlay = closest(element, 'video, audio');

          if (elementToPlay) {
            elementToPlay.load();

            elementToPlay.onloadeddata = function () {
              onMediaLoad(destiny);
            };
          }
        }
      });
    }
    /**
    * Callback firing when a lazy load media element has loaded.
    * Making sure it only fires one per section in normal conditions (if load time is not huge)
    */


    function onMediaLoad(section) {
      if (options.scrollOverflow) {
        clearTimeout(g_mediaLoadedId);
        g_mediaLoadedId = setTimeout(function () {
          if (!hasClass($body, RESPONSIVE)) {
            scrollBarHandler.createScrollBar(section);
          }
        }, 200);
      }
    }
    /**
    * Plays video and audio elements.
    */


    function playMedia(destiny) {
      var panel = getSlideOrSection(destiny); //playing HTML5 media elements

      $('video, audio', panel).forEach(function (element) {
        if (element.hasAttribute('data-autoplay') && typeof element.play === 'function') {
          element.play();
        }
      }); //youtube videos

      $('iframe[src*="youtube.com/embed/"]', panel).forEach(function (element) {
        if (element.hasAttribute('data-autoplay')) {
          playYoutube(element);
        } //in case the URL was not loaded yet. On page load we need time for the new URL (with the API string) to load.


        element.onload = function () {
          if (element.hasAttribute('data-autoplay')) {
            playYoutube(element);
          }
        };
      });
    }
    /**
    * Plays a youtube video
    */


    function playYoutube(element) {
      element.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }
    /**
    * Stops video and audio elements.
    */


    function stopMedia(destiny) {
      var panel = getSlideOrSection(destiny); //stopping HTML5 media elements

      $('video, audio', panel).forEach(function (element) {
        if (!element.hasAttribute('data-keepplaying') && typeof element.pause === 'function') {
          element.pause();
        }
      }); //youtube videos

      $('iframe[src*="youtube.com/embed/"]', panel).forEach(function (element) {
        if (/youtube\.com\/embed\//.test(element.getAttribute('src')) && !element.hasAttribute('data-keepplaying')) {
          element.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
      });
    }
    /**
    * Gets the active slide (or section) for the given section
    */


    function getSlideOrSection(destiny) {
      var slide = $(SLIDE_ACTIVE_SEL, destiny);

      if (slide.length) {
        destiny = slide[0];
      }

      return destiny;
    }
    /**
    * Scrolls to the anchor in the URL when loading the site
    */


    function scrollToAnchor() {
      var anchors = getAnchorsURL();
      var sectionAnchor = anchors.section;
      var slideAnchor = anchors.slide;

      if (sectionAnchor) {
        //if theres any #
        if (options.animateAnchor) {
          scrollPageAndSlide(sectionAnchor, slideAnchor);
        } else {
          silentMoveTo(sectionAnchor, slideAnchor);
        }
      }
    }
    /**
    * Detecting any change on the URL to scroll to the given anchor link
    * (a way to detect back history button as we play with the hashes on the URL)
    */


    function hashChangeHandler() {
      if (!isScrolling && !options.lockAnchors) {
        var anchors = getAnchorsURL();
        var sectionAnchor = anchors.section;
        var slideAnchor = anchors.slide; //when moving to a slide in the first section for the first time (first time to add an anchor to the URL)

        var isFirstSlideMove = typeof lastScrolledDestiny === 'undefined';
        var isFirstScrollMove = typeof lastScrolledDestiny === 'undefined' && typeof slideAnchor === 'undefined' && !slideMoving;

        if (sectionAnchor && sectionAnchor.length) {
          /*in order to call scrollpage() only once for each destination at a time
          It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange`
          event is fired on every scroll too.*/
          if (sectionAnchor && sectionAnchor !== lastScrolledDestiny && !isFirstSlideMove || isFirstScrollMove || !slideMoving && lastScrolledSlide != slideAnchor) {
            scrollPageAndSlide(sectionAnchor, slideAnchor);
          }
        }
      }
    } //gets the URL anchors (section and slide)


    function getAnchorsURL() {
      var section;
      var slide;
      var hash = window.location.hash;

      if (hash.length) {
        //getting the anchor link in the URL and deleting the `#`
        var anchorsParts = hash.replace('#', '').split('/'); //using / for visual reasons and not as a section/slide separator #2803

        var isFunkyAnchor = hash.indexOf('#/') > -1;
        section = isFunkyAnchor ? '/' + anchorsParts[1] : decodeURIComponent(anchorsParts[0]);
        var slideAnchor = isFunkyAnchor ? anchorsParts[2] : anchorsParts[1];

        if (slideAnchor && slideAnchor.length) {
          slide = decodeURIComponent(slideAnchor);
        }
      }

      return {
        section: section,
        slide: slide
      };
    } //Sliding with arrow keys, both, vertical and horizontal


    function keydownHandler(e) {
      clearTimeout(keydownId);
      var activeElement = document.activeElement;
      var keyCode = e.keyCode; //tab?

      if (keyCode === 9) {
        onTab(e);
      } else if (!matches(activeElement, 'textarea') && !matches(activeElement, 'input') && !matches(activeElement, 'select') && activeElement.getAttribute('contentEditable') !== "true" && activeElement.getAttribute('contentEditable') !== '' && options.keyboardScrolling && options.autoScrolling) {
        //preventing the scroll with arrow keys & spacebar & Page Up & Down keys
        var keyControls = [40, 38, 32, 33, 34];

        if (keyControls.indexOf(keyCode) > -1) {
          preventDefault(e);
        }

        controlPressed = e.ctrlKey;
        keydownId = setTimeout(function () {
          onkeydown(e);
        }, 150);
      }
    }

    function tooltipTextHandler() {
      /*jshint validthis:true */
      trigger(prev(this), 'click');
    } //to prevent scrolling while zooming


    function keyUpHandler(e) {
      if (isWindowFocused) {
        //the keyup gets fired on new tab ctrl + t in Firefox
        controlPressed = e.ctrlKey;
      }
    } //binding the mousemove when the mouse's middle button is released


    function mouseDownHandler(e) {
      //middle button
      if (e.which == 2) {
        oldPageY = e.pageY;
        container.addEventListener('mousemove', mouseMoveHandler);
      }
    } //unbinding the mousemove when the mouse's middle button is released


    function mouseUpHandler(e) {
      //middle button
      if (e.which == 2) {
        container.removeEventListener('mousemove', mouseMoveHandler);
      }
    }
    /**
    * Makes sure the tab key will only focus elements within the current section/slide
    * preventing this way from breaking the page.
    * Based on "Modals and keyboard traps"
    * from https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex
    */


    function onTab(e) {
      var isShiftPressed = e.shiftKey;
      var activeElement = document.activeElement;
      var focusableElements = getFocusables(getSlideOrSection($(SECTION_ACTIVE_SEL)[0]));

      function preventAndFocusFirst(e) {
        preventDefault(e);
        return focusableElements[0] ? focusableElements[0].focus() : null;
      } //outside any section or slide? Let's not hijack the tab!


      if (isFocusOutside(e)) {
        return;
      } //is there an element with focus?


      if (activeElement) {
        if (closest(activeElement, SECTION_ACTIVE_SEL + ',' + SECTION_ACTIVE_SEL + ' ' + SLIDE_ACTIVE_SEL) == null) {
          activeElement = preventAndFocusFirst(e);
        }
      } //no element if focused? Let's focus the first one of the section/slide
      else {
          preventAndFocusFirst(e);
        } //when reached the first or last focusable element of the section/slide
      //we prevent the tab action to keep it in the last focusable element


      if (!isShiftPressed && activeElement == focusableElements[focusableElements.length - 1] || isShiftPressed && activeElement == focusableElements[0]) {
        preventDefault(e);
      }
    }
    /**
    * Gets all the focusable elements inside the passed element.
    */


    function getFocusables(el) {
      return [].slice.call($(focusableElementsString, el)).filter(function (item) {
        return item.getAttribute('tabindex') !== '-1' //are also not hidden elements (or with hidden parents)
        && item.offsetParent !== null;
      });
    }
    /**
    * Determines whether the focus is outside fullpage.js sections/slides or not.
    */


    function isFocusOutside(e) {
      var allFocusables = getFocusables(document);
      var currentFocusIndex = allFocusables.indexOf(document.activeElement);
      var focusDestinationIndex = e.shiftKey ? currentFocusIndex - 1 : currentFocusIndex + 1;
      var focusDestination = allFocusables[focusDestinationIndex];
      var destinationItemSlide = nullOrSlide(closest(focusDestination, SLIDE_SEL));
      var destinationItemSection = nullOrSection(closest(focusDestination, SECTION_SEL));
      return !destinationItemSlide && !destinationItemSection;
    } //Scrolling horizontally when clicking on the slider controls.


    function slideArrowHandler() {
      /*jshint validthis:true */
      var section = closest(this, SECTION_SEL);
      /*jshint validthis:true */

      if (hasClass(this, SLIDES_PREV)) {
        if (isScrollAllowed.m.left) {
          moveSlideLeft(section);
        }
      } else {
        if (isScrollAllowed.m.right) {
          moveSlideRight(section);
        }
      }
    } // changing isWindowFocused to true on focus event


    function focusHandler() {
      isWindowFocused = true;
    } //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.


    function blurHandler() {
      isWindowFocused = false;
      controlPressed = false;
    } //Scrolls to the section when clicking the navigation bullet


    function sectionBulletHandler(e) {
      preventDefault(e);
      /*jshint validthis:true */

      var indexBullet = index(closest(this, SECTION_NAV_SEL + ' li'));
      scrollPage($(SECTION_SEL)[indexBullet]);
    } //Scrolls the slider to the given slide destination for the given section


    function slideBulletHandler(e) {
      preventDefault(e);
      /*jshint validthis:true */

      var slides = $(SLIDES_WRAPPER_SEL, closest(this, SECTION_SEL))[0];
      var destiny = $(SLIDE_SEL, slides)[index(closest(this, 'li'))];
      landscapeScroll(slides, destiny);
    } //Menu item handler when not using anchors or using lockAnchors:true


    function menuItemsHandler(e) {
      if ($(options.menu)[0] && (options.lockAnchors || !options.anchors.length)) {
        preventDefault(e);
        /*jshint validthis:true */

        moveTo(this.getAttribute('data-menuanchor'));
      }
    }
    /**
    * Keydown event
    */


    function onkeydown(e) {
      var shiftPressed = e.shiftKey;
      var activeElement = document.activeElement;
      var isMediaFocused = matches(activeElement, 'video') || matches(activeElement, 'audio'); //do nothing if we can not scroll or we are not using horizotnal key arrows.

      if (!canScroll && [37, 39].indexOf(e.keyCode) < 0) {
        return;
      }

      switch (e.keyCode) {
        //up
        case 38:
        case 33:
          if (isScrollAllowed.k.up) {
            moveSectionUp();
          }

          break;
        //down

        case 32:
          //spacebar
          if (shiftPressed && isScrollAllowed.k.up && !isMediaFocused) {
            moveSectionUp();
            break;
          }

        /* falls through */

        case 40:
        case 34:
          if (isScrollAllowed.k.down) {
            // space bar?
            if (e.keyCode !== 32 || !isMediaFocused) {
              moveSectionDown();
            }
          }

          break;
        //Home

        case 36:
          if (isScrollAllowed.k.up) {
            moveTo(1);
          }

          break;
        //End

        case 35:
          if (isScrollAllowed.k.down) {
            moveTo($(SECTION_SEL).length);
          }

          break;
        //left

        case 37:
          if (isScrollAllowed.k.left) {
            moveSlideLeft();
          }

          break;
        //right

        case 39:
          if (isScrollAllowed.k.right) {
            moveSlideRight();
          }

          break;

        default:
          return;
        // exit this handler for other keys
      }
    }
    /**
    * Detecting the direction of the mouse movement.
    * Used only for the middle button of the mouse.
    */


    var oldPageY = 0;

    function mouseMoveHandler(e) {
      if (!options.autoScrolling) {
        return;
      }

      if (canScroll) {
        // moving up
        if (e.pageY < oldPageY && isScrollAllowed.m.up) {
          moveSectionUp();
        } // moving down
        else if (e.pageY > oldPageY && isScrollAllowed.m.down) {
            moveSectionDown();
          }
      }

      oldPageY = e.pageY;
    }
    /**
    * Scrolls horizontal sliders.
    */


    function landscapeScroll(slides, destiny, direction) {
      var section = closest(slides, SECTION_SEL);
      var v = {
        slides: slides,
        destiny: destiny,
        direction: direction,
        destinyPos: {
          left: destiny.offsetLeft
        },
        slideIndex: index(destiny),
        section: section,
        sectionIndex: index(section, SECTION_SEL),
        anchorLink: section.getAttribute('data-anchor'),
        slidesNav: $(SLIDES_NAV_SEL, section)[0],
        slideAnchor: getAnchor(destiny),
        prevSlide: $(SLIDE_ACTIVE_SEL, section)[0],
        prevSlideIndex: index($(SLIDE_ACTIVE_SEL, section)[0]),
        //caching the value of isResizing at the momment the function is called
        //because it will be checked later inside a setTimeout and the value might change
        localIsResizing: isResizing
      };
      v.xMovement = getXmovement(v.prevSlideIndex, v.slideIndex);
      v.direction = v.direction ? v.direction : v.xMovement; //important!! Only do it when not resizing

      if (!v.localIsResizing) {
        //preventing from scrolling to the next/prev section when using scrollHorizontally
        canScroll = false;
      }

      if (options.onSlideLeave) {
        //if the site is not just resizing and readjusting the slides
        if (!v.localIsResizing && v.xMovement !== 'none') {
          if (isFunction(options.onSlideLeave)) {
            if (fireCallback('onSlideLeave', v) === false) {
              slideMoving = false;
              return;
            }
          }
        }
      }

      addClass(destiny, ACTIVE);
      removeClass(siblings(destiny), ACTIVE);

      if (!v.localIsResizing) {
        stopMedia(v.prevSlide);
        lazyLoad(destiny);
      }

      if (!options.loopHorizontal && options.controlArrows) {
        //hidding it for the fist slide, showing for the rest
        toggle($(SLIDES_ARROW_PREV_SEL, section), v.slideIndex !== 0); //hidding it for the last slide, showing for the rest

        toggle($(SLIDES_ARROW_NEXT_SEL, section), next(destiny) != null);
      } //only changing the URL if the slides are in the current section (not for resize re-adjusting)


      if (hasClass(section, ACTIVE) && !v.localIsResizing) {
        setState(v.slideIndex, v.slideAnchor, v.anchorLink, v.sectionIndex);
      }

      performHorizontalMove(slides, v, true);
    }

    function afterSlideLoads(v) {
      activeSlidesNavigation(v.slidesNav, v.slideIndex); //if the site is not just resizing and readjusting the slides

      if (!v.localIsResizing) {
        if (isFunction(options.afterSlideLoad)) {
          fireCallback('afterSlideLoad', v);
        } //needs to be inside the condition to prevent problems with continuousVertical and scrollHorizontally
        //and to prevent double scroll right after a windows resize


        canScroll = true;
        playMedia(v.destiny);
      } //letting them slide again


      slideMoving = false;
    }
    /**
    * Performs the horizontal movement. (CSS3 or jQuery)
    *
    * @param fireCallback {Bool} - determines whether or not to fire the callback
    */


    function performHorizontalMove(slides, v, fireCallback) {
      var destinyPos = v.destinyPos;

      if (options.css3) {
        var translate3d = 'translate3d(-' + Math.round(destinyPos.left) + 'px, 0px, 0px)';
        FP.test.translate3dH[v.sectionIndex] = translate3d;
        css(addAnimation($(SLIDES_CONTAINER_SEL, slides)), getTransforms(translate3d));
        afterSlideLoadsId = setTimeout(function () {
          if (fireCallback) {
            afterSlideLoads(v);
          }
        }, options.scrollingSpeed);
      } else {
        FP.test.left[v.sectionIndex] = Math.round(destinyPos.left);
        scrollTo(slides, Math.round(destinyPos.left), options.scrollingSpeed, function () {
          if (fireCallback) {
            afterSlideLoads(v);
          }
        });
      }
    }
    /**
    * Sets the state for the horizontal bullet navigations.
    */


    function activeSlidesNavigation(slidesNav, slideIndex) {
      if (options.slidesNavigation && slidesNav != null) {
        removeClass($(ACTIVE_SEL, slidesNav), ACTIVE);
        addClass($('a', $('li', slidesNav)[slideIndex]), ACTIVE);
      }
    }

    var previousHeight = windowsHeight;
    /*
    * Resize event handler.
    */

    function resizeHandler() {
      isResizing = true;
      clearTimeout(resizeId); //in order to call the functions only when the resize is finished
      //http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing    

      resizeId = setTimeout(function () {
        //issue #3336 
        //(some apps or browsers, like Chrome/Firefox for Mobile take time to report the real height)
        //so we check it 3 times with intervals in that case
        for (var i = 0; i < 4; i++) {
          resizeHandlerId = setTimeout(resizeActions, 200 * i);
        }
      }, 200);
    }
    /**
    * When resizing the site, we adjust the heights of the sections, slimScroll...
    */


    function resizeActions() {
      //checking if it needs to get responsive
      responsive(); // rebuild immediately on touch devices

      if (isTouchDevice) {
        var activeElement = document.activeElement; //if the keyboard is NOT visible

        if (!matches(activeElement, 'textarea') && !matches(activeElement, 'input') && !matches(activeElement, 'select')) {
          var currentHeight = getWindowHeight(); //making sure the change in the viewport size is enough to force a rebuild. (20 % of the window to avoid problems when hidding scroll bars)

          if (Math.abs(currentHeight - previousHeight) > 20 * Math.max(previousHeight, currentHeight) / 100) {
            reBuild(true);
            previousHeight = currentHeight;
          }
        }
      } else {
        adjustToNewViewport();
      }
    }
    /**
    * Checks if the site needs to get responsive and disables autoScrolling if so.
    * A class `fp-responsive` is added to the plugin's container in case the user wants to use it for his own responsive CSS.
    */


    function responsive() {
      var widthLimit = options.responsive || options.responsiveWidth; //backwards compatiblity

      var heightLimit = options.responsiveHeight; //only calculating what we need. Remember its called on the resize event.

      var isBreakingPointWidth = widthLimit && window.innerWidth < widthLimit;
      var isBreakingPointHeight = heightLimit && window.innerHeight < heightLimit;

      if (widthLimit && heightLimit) {
        setResponsive(isBreakingPointWidth || isBreakingPointHeight);
      } else if (widthLimit) {
        setResponsive(isBreakingPointWidth);
      } else if (heightLimit) {
        setResponsive(isBreakingPointHeight);
      }
    }
    /**
    * Adds transition animations for the given element
    */


    function addAnimation(element) {
      var transition = 'all ' + options.scrollingSpeed + 'ms ' + options.easingcss3;
      removeClass(element, NO_TRANSITION);
      return css(element, {
        '-webkit-transition': transition,
        'transition': transition
      });
    }
    /**
    * Remove transition animations for the given element
    */


    function removeAnimation(element) {
      return addClass(element, NO_TRANSITION);
    }
    /**
    * Activating the vertical navigation bullets according to the given slide name.
    */


    function activateNavDots(name, sectionIndex) {
      if (options.navigation && $(SECTION_NAV_SEL)[0] != null) {
        removeClass($(ACTIVE_SEL, $(SECTION_NAV_SEL)[0]), ACTIVE);

        if (name) {
          addClass($('a[href="#' + name + '"]', $(SECTION_NAV_SEL)[0]), ACTIVE);
        } else {
          addClass($('a', $('li', $(SECTION_NAV_SEL)[0])[sectionIndex]), ACTIVE);
        }
      }
    }
    /**
    * Activating the website main menu elements according to the given slide name.
    */


    function activateMenuElement(name) {
      $(options.menu).forEach(function (menu) {
        if (options.menu && menu != null) {
          removeClass($(ACTIVE_SEL, menu), ACTIVE);
          addClass($('[data-menuanchor="' + name + '"]', menu), ACTIVE);
        }
      });
    }
    /**
    * Sets to active the current menu and vertical nav items.
    */


    function activateMenuAndNav(anchor, index) {
      activateMenuElement(anchor);
      activateNavDots(anchor, index);
    }
    /**
    * Retuns `up` or `down` depending on the scrolling movement to reach its destination
    * from the current section.
    */


    function getYmovement(destiny) {
      var fromIndex = index($(SECTION_ACTIVE_SEL)[0], SECTION_SEL);
      var toIndex = index(destiny, SECTION_SEL);

      if (fromIndex == toIndex) {
        return 'none';
      }

      if (fromIndex > toIndex) {
        return 'up';
      }

      return 'down';
    }
    /**
    * Retuns `right` or `left` depending on the scrolling movement to reach its destination
    * from the current slide.
    */


    function getXmovement(fromIndex, toIndex) {
      if (fromIndex == toIndex) {
        return 'none';
      }

      if (fromIndex > toIndex) {
        return 'left';
      }

      return 'right';
    }

    function addTableClass(element) {
      //In case we are styling for the 2nd time as in with reponsiveSlides
      if (!hasClass(element, TABLE)) {
        var wrapper = document.createElement('div');
        wrapper.className = TABLE_CELL;
        wrapper.style.height = getTableHeight(element) + 'px';
        addClass(element, TABLE);
        wrapInner(element, wrapper);
      }
    }

    function getTableHeight(element) {
      var sectionHeight = windowsHeight;

      if (options.paddingTop || options.paddingBottom) {
        var section = element;

        if (!hasClass(section, SECTION)) {
          section = closest(element, SECTION_SEL);
        }

        var paddings = parseInt(getComputedStyle(section)['padding-top']) + parseInt(getComputedStyle(section)['padding-bottom']);
        sectionHeight = windowsHeight - paddings;
      }

      return sectionHeight;
    }
    /**
    * Adds a css3 transform property to the container class with or without animation depending on the animated param.
    */


    function transformContainer(translate3d, animated) {
      if (animated) {
        addAnimation(container);
      } else {
        removeAnimation(container);
      }

      css(container, getTransforms(translate3d));
      FP.test.translate3d = translate3d; //syncronously removing the class after the animation has been applied.

      setTimeout(function () {
        removeClass(container, NO_TRANSITION);
      }, 10);
    }
    /**
    * Gets a section by its anchor / index
    */


    function getSectionByAnchor(sectionAnchor) {
      var section = $(SECTION_SEL + '[data-anchor="' + sectionAnchor + '"]', container)[0];

      if (!section) {
        var sectionIndex = typeof sectionAnchor !== 'undefined' ? sectionAnchor - 1 : 0;
        section = $(SECTION_SEL)[sectionIndex];
      }

      return section;
    }
    /**
    * Gets a slide inside a given section by its anchor / index
    */


    function getSlideByAnchor(slideAnchor, section) {
      var slide = $(SLIDE_SEL + '[data-anchor="' + slideAnchor + '"]', section)[0];

      if (slide == null) {
        slideAnchor = typeof slideAnchor !== 'undefined' ? slideAnchor : 0;
        slide = $(SLIDE_SEL, section)[slideAnchor];
      }

      return slide;
    }
    /**
    * Scrolls to the given section and slide anchors
    */


    function scrollPageAndSlide(sectionAnchor, slideAnchor) {
      var section = getSectionByAnchor(sectionAnchor); //do nothing if there's no section with the given anchor name

      if (section == null) return;
      var slide = getSlideByAnchor(slideAnchor, section); //we need to scroll to the section and then to the slide

      if (getAnchor(section) !== lastScrolledDestiny && !hasClass(section, ACTIVE)) {
        scrollPage(section, function () {
          scrollSlider(slide);
        });
      } //if we were already in the section
      else {
          scrollSlider(slide);
        }
    }
    /**
    * Scrolls the slider to the given slide destination for the given section
    */


    function scrollSlider(slide) {
      if (slide != null) {
        landscapeScroll(closest(slide, SLIDES_WRAPPER_SEL), slide);
      }
    }
    /**
    * Creates a landscape navigation bar with dots for horizontal sliders.
    */


    function addSlidesNavigation(section, numSlides) {
      appendTo(createElementFromHTML('<div class="' + SLIDES_NAV + '"><ul></ul></div>'), section);
      var nav = $(SLIDES_NAV_SEL, section)[0]; //top or bottom

      addClass(nav, 'fp-' + options.slidesNavPosition);

      for (var i = 0; i < numSlides; i++) {
        var slide = $(SLIDE_SEL, section)[i];
        appendTo(createElementFromHTML('<li><a href="#"><span class="fp-sr-only">' + getBulletLinkName(i, 'Slide', slide) + '</span><span></span></a></li>'), $('ul', nav)[0]);
      } //centering it


      css(nav, {
        'margin-left': '-' + nav.innerWidth / 2 + 'px'
      });
      addClass($('a', $('li', nav)[0]), ACTIVE);
    }
    /**
    * Sets the state of the website depending on the active section/slide.
    * It changes the URL hash when needed and updates the body class.
    */


    function setState(slideIndex, slideAnchor, anchorLink, sectionIndex) {
      var sectionHash = '';

      if (options.anchors.length && !options.lockAnchors) {
        //isn't it the first slide?
        if (slideIndex) {
          if (anchorLink != null) {
            sectionHash = anchorLink;
          } //slide without anchor link? We take the index instead.


          if (slideAnchor == null) {
            slideAnchor = slideIndex;
          }

          lastScrolledSlide = slideAnchor;
          setUrlHash(sectionHash + '/' + slideAnchor); //first slide won't have slide anchor, just the section one
        } else if (slideIndex != null) {
          lastScrolledSlide = slideAnchor;
          setUrlHash(anchorLink);
        } //section without slides
        else {
            setUrlHash(anchorLink);
          }
      }

      setBodyClass();
    }
    /**
    * Sets the URL hash.
    */


    function setUrlHash(url) {
      if (options.recordHistory) {
        location.hash = url;
      } else {
        //Mobile Chrome doesn't work the normal way, so... lets use HTML5 for phones :)
        if (isTouchDevice || isTouch) {
          window.history.replaceState(undefined, undefined, '#' + url);
        } else {
          var baseUrl = window.location.href.split('#')[0];
          window.location.replace(baseUrl + '#' + url);
        }
      }
    }
    /**
    * Gets the anchor for the given slide / section. Its index will be used if there's none.
    */


    function getAnchor(element) {
      if (!element) {
        return null;
      }

      var anchor = element.getAttribute('data-anchor');
      var elementIndex = index(element); //Slide without anchor link? We take the index instead.

      if (anchor == null) {
        anchor = elementIndex;
      }

      return anchor;
    }
    /**
    * Sets a class for the body of the page depending on the active section / slide
    */


    function setBodyClass() {
      var section = $(SECTION_ACTIVE_SEL)[0];
      var slide = $(SLIDE_ACTIVE_SEL, section)[0];
      var sectionAnchor = getAnchor(section);
      var slideAnchor = getAnchor(slide);
      var text = String(sectionAnchor);

      if (slide) {
        text = text + '-' + slideAnchor;
      } //changing slash for dash to make it a valid CSS style


      text = text.replace('/', '-').replace('#', ''); //removing previous anchor classes

      var classRe = new RegExp('\\b\\s?' + VIEWING_PREFIX + '-[^\\s]+\\b', "g");
      $body.className = $body.className.replace(classRe, ''); //adding the current anchor

      addClass($body, VIEWING_PREFIX + '-' + text);
    }
    /**
    * Checks for translate3d support
    * @return boolean
    * http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support
    */


    function support3d() {
      var el = document.createElement('p'),
          has3d,
          transforms = {
        'webkitTransform': '-webkit-transform',
        'OTransform': '-o-transform',
        'msTransform': '-ms-transform',
        'MozTransform': '-moz-transform',
        'transform': 'transform'
      }; //preventing the style p:empty{display: none;} from returning the wrong result

      el.style.display = 'block'; // Add it to the body to get the computed style.

      document.body.insertBefore(el, null);

      for (var t in transforms) {
        if (el.style[t] !== undefined) {
          el.style[t] = 'translate3d(1px,1px,1px)';
          has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
        }
      }

      document.body.removeChild(el);
      return has3d !== undefined && has3d.length > 0 && has3d !== 'none';
    }
    /**
    * Removes the auto scrolling action fired by the mouse wheel and trackpad.
    * After this function is called, the mousewheel and trackpad movements won't scroll through sections.
    */


    function removeMouseWheelHandler() {
      if (document.addEventListener) {
        document.removeEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper

        document.removeEventListener('wheel', MouseWheelHandler, false); //Firefox

        document.removeEventListener('MozMousePixelScroll', MouseWheelHandler, false); //old Firefox
      } else {
        document.detachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
      }
    }
    /**
    * Adds the auto scrolling action for the mouse wheel and trackpad.
    * After this function is called, the mousewheel and trackpad movements will scroll through sections
    * https://developer.mozilla.org/en-US/docs/Web/Events/wheel
    */


    function addMouseWheelHandler() {
      var prefix = '';

      var _addEventListener;

      if (window.addEventListener) {
        _addEventListener = "addEventListener";
      } else {
        _addEventListener = "attachEvent";
        prefix = 'on';
      } // detect available wheel event


      var support = 'onwheel' in document.createElement('div') ? 'wheel' : // Modern browsers support "wheel"
      document.onmousewheel !== undefined ? 'mousewheel' : // Webkit and IE support at least "mousewheel"
      'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox

      var passiveEvent = g_supportsPassive ? {
        passive: false
      } : false;

      if (support == 'DOMMouseScroll') {
        document[_addEventListener](prefix + 'MozMousePixelScroll', MouseWheelHandler, passiveEvent);
      } //handle MozMousePixelScroll in older Firefox
      else {
          document[_addEventListener](prefix + support, MouseWheelHandler, passiveEvent);
        }
    }
    /**
    * Binding the mousemove when the mouse's middle button is pressed
    */


    function addMiddleWheelHandler() {
      container.addEventListener('mousedown', mouseDownHandler);
      container.addEventListener('mouseup', mouseUpHandler);
    }
    /**
    * Unbinding the mousemove when the mouse's middle button is released
    */


    function removeMiddleWheelHandler() {
      container.removeEventListener('mousedown', mouseDownHandler);
      container.removeEventListener('mouseup', mouseUpHandler);
    }
    /**
    * Adds the possibility to auto scroll through sections on touch devices.
    */


    function addTouchHandler() {
      if (isTouchDevice || isTouch) {
        if (options.autoScrolling) {
          $body.removeEventListener(events.touchmove, preventBouncing, {
            passive: false
          });
          $body.addEventListener(events.touchmove, preventBouncing, {
            passive: false
          });
        }

        var touchWrapper = options.touchWrapper;
        touchWrapper.removeEventListener(events.touchstart, touchStartHandler);
        touchWrapper.removeEventListener(events.touchmove, touchMoveHandler, {
          passive: false
        });
        touchWrapper.addEventListener(events.touchstart, touchStartHandler);
        touchWrapper.addEventListener(events.touchmove, touchMoveHandler, {
          passive: false
        });
      }
    }
    /**
    * Removes the auto scrolling for touch devices.
    */


    function removeTouchHandler() {
      if (isTouchDevice || isTouch) {
        // normalScrollElements requires it off #2691
        if (options.autoScrolling) {
          $body.removeEventListener(events.touchmove, touchMoveHandler, {
            passive: false
          });
          $body.removeEventListener(events.touchmove, preventBouncing, {
            passive: false
          });
        }

        var touchWrapper = options.touchWrapper;
        touchWrapper.removeEventListener(events.touchstart, touchStartHandler);
        touchWrapper.removeEventListener(events.touchmove, touchMoveHandler, {
          passive: false
        });
      }
    }
    /*
    * Returns and object with Microsoft pointers (for IE<11 and for IE >= 11)
    * http://msdn.microsoft.com/en-us/library/ie/dn304886(v=vs.85).aspx
    */


    function getMSPointer() {
      var pointer; //IE >= 11 & rest of browsers

      if (window.PointerEvent) {
        pointer = {
          down: 'pointerdown',
          move: 'pointermove'
        };
      } //IE < 11
      else {
          pointer = {
            down: 'MSPointerDown',
            move: 'MSPointerMove'
          };
        }

      return pointer;
    }
    /**
    * Gets the pageX and pageY properties depending on the browser.
    * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
    */


    function getEventsPage(e) {
      var events = [];
      events.y = typeof e.pageY !== 'undefined' && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY;
      events.x = typeof e.pageX !== 'undefined' && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX; //in touch devices with scrollBar:true, e.pageY is detected, but we have to deal with touch events. #1008

      if (isTouch && isReallyTouch(e) && options.scrollBar && typeof e.touches !== 'undefined') {
        events.y = e.touches[0].pageY;
        events.x = e.touches[0].pageX;
      }

      return events;
    }
    /**
    * Slides silently (with no animation) the active slider to the given slide.
    * @param noCallback {bool} true or defined -> no callbacks
    */


    function silentLandscapeScroll(activeSlide, noCallbacks) {
      setScrollingSpeed(0, 'internal');

      if (typeof noCallbacks !== 'undefined') {
        //preventing firing callbacks afterSlideLoad etc.
        isResizing = true;
      }

      landscapeScroll(closest(activeSlide, SLIDES_WRAPPER_SEL), activeSlide);

      if (typeof noCallbacks !== 'undefined') {
        isResizing = false;
      }

      setScrollingSpeed(originals.scrollingSpeed, 'internal');
    }
    /**
    * Scrolls silently (with no animation) the page to the given Y position.
    */


    function silentScroll(top) {
      // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
      // that's why we round it to 0.
      var roundedTop = Math.round(top);

      if (options.css3 && options.autoScrolling && !options.scrollBar) {
        var translate3d = 'translate3d(0px, -' + roundedTop + 'px, 0px)';
        transformContainer(translate3d, false);
      } else if (options.autoScrolling && !options.scrollBar) {
        css(container, {
          'top': -roundedTop + 'px'
        });
        FP.test.top = -roundedTop + 'px';
      } else {
        var scrollSettings = getScrollSettings(roundedTop);
        setScrolling(scrollSettings.element, scrollSettings.options);
      }
    }
    /**
    * Returns the cross-browser transform string.
    */


    function getTransforms(translate3d) {
      return {
        '-webkit-transform': translate3d,
        '-moz-transform': translate3d,
        '-ms-transform': translate3d,
        'transform': translate3d
      };
    }
    /**
    * Allowing or disallowing the mouse/swipe scroll in a given direction. (not for keyboard)
    * @type  m (mouse) or k (keyboard)
    */


    function setIsScrollAllowed(value, direction, type) {
      //up, down, left, right
      if (direction !== 'all') {
        isScrollAllowed[type][direction] = value;
      } //all directions?
      else {
          Object.keys(isScrollAllowed[type]).forEach(function (key) {
            isScrollAllowed[type][key] = value;
          });
        }
    }
    /*
    * Destroys fullpage.js plugin events and optinally its html markup and styles
    */


    function destroy(all) {
      setAutoScrolling(false, 'internal');
      setAllowScrolling(true);
      setMouseHijack(false);
      setKeyboardScrolling(false);
      addClass(container, DESTROYED);
      [afterSlideLoadsId, afterSectionLoadsId, resizeId, scrollId, scrollId2, g_doubleCheckHeightId, resizeHandlerId, g_transitionLapseId].forEach(function (timeoutId) {
        clearTimeout(timeoutId);
      });
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('hashchange', hashChangeHandler);
      window.removeEventListener('resize', resizeHandler);
      document.removeEventListener('keydown', keydownHandler);
      document.removeEventListener('keyup', keyUpHandler);
      ['click', 'touchstart'].forEach(function (eventName) {
        document.removeEventListener(eventName, delegatedEvents);
      });
      ['mouseenter', 'touchstart', 'mouseleave', 'touchend'].forEach(function (eventName) {
        document.removeEventListener(eventName, onMouseEnterOrLeave, true); //true is required!
      }); //lets make a mess!

      if (all) {
        destroyStructure();
      }
    }
    /*
    * Removes inline styles added by fullpage.js
    */


    function destroyStructure() {
      //reseting the `top` or `translate` properties to 0
      silentScroll(0); //loading all the lazy load content

      $('img[data-src], source[data-src], audio[data-src], iframe[data-src]', container).forEach(function (item) {
        setSrc(item, 'src');
      });
      $('img[data-srcset]').forEach(function (item) {
        setSrc(item, 'srcset');
      });
      remove($(SECTION_NAV_SEL + ', ' + SLIDES_NAV_SEL + ', ' + SLIDES_ARROW_SEL)); //removing inline styles

      css($(SECTION_SEL), {
        'height': '',
        'background-color': '',
        'padding': ''
      });
      css($(SLIDE_SEL), {
        'width': ''
      });
      css(container, {
        'height': '',
        'position': '',
        '-ms-touch-action': '',
        'touch-action': ''
      });
      css($htmlBody, {
        'overflow': '',
        'height': ''
      }); // remove .fp-enabled class

      removeClass($html, ENABLED); // remove .fp-responsive class

      removeClass($body, RESPONSIVE); // remove all of the .fp-viewing- classes

      $body.className.split(/\s+/).forEach(function (className) {
        if (className.indexOf(VIEWING_PREFIX) === 0) {
          removeClass($body, className);
        }
      }); //removing added classes

      $(SECTION_SEL + ', ' + SLIDE_SEL).forEach(function (item) {
        if (options.scrollOverflowHandler && options.scrollOverflow) {
          options.scrollOverflowHandler.remove(item);
        }

        removeClass(item, TABLE + ' ' + ACTIVE + ' ' + COMPLETELY);
        var previousStyles = item.getAttribute('data-fp-styles');

        if (previousStyles) {
          item.setAttribute('style', item.getAttribute('data-fp-styles'));
        } //removing anchors if they were not set using the HTML markup


        if (hasClass(item, SECTION) && !g_initialAnchorsInDom) {
          item.removeAttribute('data-anchor');
        }
      }); //removing the applied transition from the fullpage wrapper

      removeAnimation(container); //Unwrapping content

      [TABLE_CELL_SEL, SLIDES_CONTAINER_SEL, SLIDES_WRAPPER_SEL].forEach(function (selector) {
        $(selector, container).forEach(function (item) {
          //unwrap not being use in case there's no child element inside and its just text
          unwrap(item);
        });
      }); //removing the applied transition from the fullpage wrapper

      css(container, {
        '-webkit-transition': 'none',
        'transition': 'none'
      }); //scrolling the page to the top with no animation

      window.scrollTo(0, 0); //removing selectors

      var usedSelectors = [SECTION, SLIDE, SLIDES_CONTAINER];
      usedSelectors.forEach(function (item) {
        removeClass($('.' + item), item);
      });
    }
    /*
    * Sets the state for a variable with multiple states (original, and temporal)
    * Some variables such as `autoScrolling` or `recordHistory` might change automatically its state when using `responsive` or `autoScrolling:false`.
    * This function is used to keep track of both states, the original and the temporal one.
    * If type is not 'internal', then we assume the user is globally changing the variable.
    */


    function setVariableState(variable, value, type) {
      options[variable] = value;

      if (type !== 'internal') {
        originals[variable] = value;
      }
    }
    /**
    * Displays warnings
    */


    function displayWarnings() {
      var l = options['li' + 'c' + 'enseK' + 'e' + 'y'];
      var msgStyle = 'font-size: 15px;background:yellow;';

      if (!isOK) {
        showError('error', 'Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:');
        showError('error', 'https://github.com/alvarotrigo/fullPage.js#options.');
      } else if (l && l.length < 20) {
        console.warn('%c This website was made using fullPage.js slider. More info on the following website:', msgStyle);
        console.warn('%c https://alvarotrigo.com/fullPage/', msgStyle);
      }

      if (hasClass($html, ENABLED)) {
        showError('error', 'Fullpage.js can only be initialized once and you are doing it multiple times!');
        return;
      } // Disable mutually exclusive settings


      if (options.continuousVertical && (options.loopTop || options.loopBottom)) {
        options.continuousVertical = false;
        showError('warn', 'Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
      }

      if (options.scrollOverflow && (options.scrollBar || !options.autoScrolling)) {
        showError('warn', 'Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox');
      }

      if (options.continuousVertical && (options.scrollBar || !options.autoScrolling)) {
        options.continuousVertical = false;
        showError('warn', 'Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
      }

      if (options.scrollOverflow && options.scrollOverflowHandler == null) {
        options.scrollOverflow = false;
        showError('error', 'The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.');
      } //using extensions? Wrong file!


      extensions.forEach(function (extension) {
        //is the option set to true?
        if (options[extension]) {
          showError('warn', 'fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: ' + extension);
        }
      }); //anchors can not have the same value as any element ID or NAME

      options.anchors.forEach(function (name) {
        //case insensitive selectors (http://stackoverflow.com/a/19465187/1081396)
        var nameAttr = [].slice.call($('[name]')).filter(function (item) {
          return item.getAttribute('name') && item.getAttribute('name').toLowerCase() == name.toLowerCase();
        });
        var idAttr = [].slice.call($('[id]')).filter(function (item) {
          return item.getAttribute('id') && item.getAttribute('id').toLowerCase() == name.toLowerCase();
        });

        if (idAttr.length || nameAttr.length) {
          showError('error', 'data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).');
          var propertyName = idAttr.length ? 'id' : 'name';

          if (idAttr.length || nameAttr.length) {
            showError('error', '"' + name + '" is is being used by another element `' + propertyName + '` property');
          }
        }
      });
    }
    /**
    * Getting the position of the element to scroll when using jQuery animations
    */


    function getScrolledPosition(element) {
      var position; //is not the window element and is a slide?

      if (element.self != window && hasClass(element, SLIDES_WRAPPER)) {
        position = element.scrollLeft;
      } else if (!options.autoScrolling || options.scrollBar) {
        position = getScrollTop();
      } else {
        position = element.offsetTop;
      } //gets the top property of the wrapper


      return position;
    }
    /**
    * Simulates the animated scrollTop of jQuery. Used when css3:false or scrollBar:true or autoScrolling:false
    * http://stackoverflow.com/a/16136789/1081396
    */


    function scrollTo(element, to, duration, callback) {
      var start = getScrolledPosition(element);
      var change = to - start;
      var currentTime = 0;
      var increment = 20;
      activeAnimation = true;

      var animateScroll = function () {
        if (activeAnimation) {
          //in order to stope it from other function whenever we want
          var val = to;
          currentTime += increment;

          if (duration) {
            val = window.fp_easings[options.easing](currentTime, start, change, duration);
          }

          setScrolling(element, val);

          if (currentTime < duration) {
            setTimeout(animateScroll, increment);
          } else if (typeof callback !== 'undefined') {
            callback();
          }
        } else if (currentTime < duration) {
          callback();
        }
      };

      animateScroll();
    }
    /**
    * Scrolls the page / slider the given number of pixels.
    * It will do it one or another way dependiong on the library's config.
    */


    function setScrolling(element, val) {
      if (!options.autoScrolling || options.scrollBar || element.self != window && hasClass(element, SLIDES_WRAPPER)) {
        //scrolling horizontally through the slides?
        if (element.self != window && hasClass(element, SLIDES_WRAPPER)) {
          element.scrollLeft = val;
        } //vertical scroll
        else {
            element.scrollTo(0, val);
          }
      } else {
        element.style.top = val + 'px';
      }
    }
    /**
    * Gets the active slide.
    */


    function getActiveSlide() {
      var activeSlide = $(SLIDE_ACTIVE_SEL, $(SECTION_ACTIVE_SEL)[0])[0];
      return nullOrSlide(activeSlide);
    }
    /**
    * Gets the active section.
    */


    function getActiveSection() {
      return new Section($(SECTION_ACTIVE_SEL)[0]);
    }
    /**
    * Item. Slide or Section objects share the same properties.
    */


    function Item(el, selector) {
      this.anchor = el.getAttribute('data-anchor');
      this.item = el;
      this.index = index(el, selector);
      this.isLast = this.index === el.parentElement.querySelectorAll(selector).length - 1;
      this.isFirst = !this.index;
    }
    /**
    * Section object
    */


    function Section(el) {
      Item.call(this, el, SECTION_SEL);
    }
    /**
    * Slide object
    */


    function Slide(el) {
      Item.call(this, el, SLIDE_SEL);
    }

    return FP;
  } //end of $.fn.fullpage
  //utils

  /**
  * Shows a message in the console of the given type.
  */


  function showError(type, text) {
    window.console && window.console[type] && window.console[type]('fullPage: ' + text);
  }
  /**
  * Equivalent of jQuery function $().
  */


  function $(selector, context) {
    context = arguments.length > 1 ? context : document;
    return context ? context.querySelectorAll(selector) : null;
  }
  /**
  * Extends a given Object properties and its childs.
  */


  function deepExtend(out) {
    out = out || {};

    for (var i = 1, len = arguments.length; i < len; ++i) {
      var obj = arguments[i];

      if (!obj) {
        continue;
      }

      for (var key in obj) {
        if (!obj.hasOwnProperty(key)) {
          continue;
        } // based on https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/


        if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
          out[key] = deepExtend(out[key], obj[key]);
          continue;
        }

        out[key] = obj[key];
      }
    }

    return out;
  }
  /**
  * Checks if the passed element contains the passed class.
  */


  function hasClass(el, className) {
    if (el == null) {
      return false;
    }

    if (el.classList) {
      return el.classList.contains(className);
    }

    return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
  }
  /**
  * Gets the window height. Crossbrowser.
  */


  function getWindowHeight() {
    return 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
  }
  /**
  * Gets the window width.
  */


  function getWindowWidth() {
    return window.innerWidth;
  }
  /**
  * Set's the CSS properties for the passed item/s.
  * @param {NodeList|HTMLElement} items
  * @param {Object} props css properties and values.
  */


  function css(items, props) {
    items = getList(items);
    var key;

    for (key in props) {
      if (props.hasOwnProperty(key)) {
        if (key !== null) {
          for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.style[key] = props[key];
          }
        }
      }
    }

    return items;
  }
  /**
  * Generic function to get the previous or next element.
  */


  function until(item, selector, fn) {
    var sibling = item[fn];

    while (sibling && !matches(sibling, selector)) {
      sibling = sibling[fn];
    }

    return sibling;
  }
  /**
  * Gets the previous element to the passed element that matches the passed selector.
  */


  function prevUntil(item, selector) {
    return until(item, selector, 'previousElementSibling');
  }
  /**
  * Gets the next element to the passed element that matches the passed selector.
  */


  function nextUntil(item, selector) {
    return until(item, selector, 'nextElementSibling');
  }
  /**
  * Gets the previous element to the passed element.
  */


  function prev(item) {
    return item.previousElementSibling;
  }
  /**
  * Gets the next element to the passed element.
  */


  function next(item) {
    return item.nextElementSibling;
  }
  /**
  * Gets the last element from the passed list of elements.
  */


  function last(item) {
    return item[item.length - 1];
  }
  /**
  * Gets index from the passed element.
  * @param {String} selector is optional.
  */


  function index(item, selector) {
    item = isArrayOrList(item) ? item[0] : item;
    var children = selector != null ? $(selector, item.parentNode) : item.parentNode.childNodes;
    var num = 0;

    for (var i = 0; i < children.length; i++) {
      if (children[i] == item) return num;
      if (children[i].nodeType == 1) num++;
    }

    return -1;
  }
  /**
  * Gets an iterable element for the passed element/s
  */


  function getList(item) {
    return !isArrayOrList(item) ? [item] : item;
  }
  /**
  * Adds the display=none property for the passed element/s
  */


  function hide(el) {
    el = getList(el);

    for (var i = 0; i < el.length; i++) {
      el[i].style.display = 'none';
    }

    return el;
  }
  /**
  * Adds the display=block property for the passed element/s
  */


  function show(el) {
    el = getList(el);

    for (var i = 0; i < el.length; i++) {
      el[i].style.display = 'block';
    }

    return el;
  }
  /**
  * Checks if the passed element is an iterable element or not
  */


  function isArrayOrList(el) {
    return Object.prototype.toString.call(el) === '[object Array]' || Object.prototype.toString.call(el) === '[object NodeList]';
  }
  /**
  * Adds the passed class to the passed element/s
  */


  function addClass(el, className) {
    el = getList(el);

    for (var i = 0; i < el.length; i++) {
      var item = el[i];

      if (item.classList) {
        item.classList.add(className);
      } else {
        item.className += ' ' + className;
      }
    }

    return el;
  }
  /**
  * Removes the passed class to the passed element/s
  * @param {String} `className` can be multiple classnames separated by whitespace
  */


  function removeClass(el, className) {
    el = getList(el);
    var classNames = className.split(' ');

    for (var a = 0; a < classNames.length; a++) {
      className = classNames[a];

      for (var i = 0; i < el.length; i++) {
        var item = el[i];

        if (item.classList) {
          item.classList.remove(className);
        } else {
          item.className = item.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
      }
    }

    return el;
  }
  /**
  * Appends the given element ot the given parent.
  */


  function appendTo(el, parent) {
    parent.appendChild(el);
  }
  /**
  Usage:
    var wrapper = document.createElement('div');
  wrapper.className = 'fp-slides';
  wrap($('.slide'), wrapper);
    https://jsfiddle.net/qwzc7oy3/15/ (vanilla)
  https://jsfiddle.net/oya6ndka/1/ (jquery equivalent)
  */


  function wrap(toWrap, wrapper, isWrapAll) {
    var newParent;
    wrapper = wrapper || document.createElement('div');

    for (var i = 0; i < toWrap.length; i++) {
      var item = toWrap[i];

      if (isWrapAll && !i || !isWrapAll) {
        newParent = wrapper.cloneNode(true);
        item.parentNode.insertBefore(newParent, item);
      }

      newParent.appendChild(item);
    }

    return toWrap;
  }
  /**
  Usage:
  var wrapper = document.createElement('div');
  wrapper.className = 'fp-slides';
  wrap($('.slide'), wrapper);
    https://jsfiddle.net/qwzc7oy3/27/ (vanilla)
  https://jsfiddle.net/oya6ndka/4/ (jquery equivalent)
  */


  function wrapAll(toWrap, wrapper) {
    wrap(toWrap, wrapper, true);
  }
  /**
  * Usage:
  * wrapInner(document.querySelector('#pepe'), '<div class="test">afdas</div>');
  * wrapInner(document.querySelector('#pepe'), element);
  *
  * https://jsfiddle.net/zexxz0tw/6/
  *
  * https://stackoverflow.com/a/21817590/1081396
  */


  function wrapInner(parent, wrapper) {
    if (typeof wrapper === "string") {
      wrapper = createElementFromHTML(wrapper);
    }

    parent.appendChild(wrapper);

    while (parent.firstChild !== wrapper) {
      wrapper.appendChild(parent.firstChild);
    }
  }
  /**
  * Usage:
  * unwrap(document.querySelector('#pepe'));
  * unwrap(element);
  *
  * https://jsfiddle.net/szjt0hxq/1/
  *
  */


  function unwrap(wrapper) {
    var wrapperContent = document.createDocumentFragment();

    while (wrapper.firstChild) {
      wrapperContent.appendChild(wrapper.firstChild);
    }

    wrapper.parentNode.replaceChild(wrapperContent, wrapper);
  }
  /**
  * http://stackoverflow.com/questions/22100853/dom-pure-javascript-solution-to-jquery-closest-implementation
  * Returns the element or `false` if there's none
  */


  function closest(el, selector) {
    if (el && el.nodeType === 1) {
      if (matches(el, selector)) {
        return el;
      }

      return closest(el.parentNode, selector);
    }

    return null;
  }
  /**
  * Places one element (rel) after another one or group of them (reference).
  * @param {HTMLElement} reference
  * @param {HTMLElement|NodeList|String} el
  * https://jsfiddle.net/9s97hhzv/1/
  */


  function after(reference, el) {
    insertBefore(reference, reference.nextSibling, el);
  }
  /**
  * Places one element (rel) before another one or group of them (reference).
  * @param {HTMLElement} reference
  * @param {HTMLElement|NodeList|String} el
  * https://jsfiddle.net/9s97hhzv/1/
  */


  function before(reference, el) {
    insertBefore(reference, reference, el);
  }
  /**
  * Based in https://stackoverflow.com/a/19316024/1081396
  * and https://stackoverflow.com/a/4793630/1081396
  */


  function insertBefore(reference, beforeElement, el) {
    if (!isArrayOrList(el)) {
      if (typeof el == 'string') {
        el = createElementFromHTML(el);
      }

      el = [el];
    }

    for (var i = 0; i < el.length; i++) {
      reference.parentNode.insertBefore(el[i], beforeElement);
    }
  } //http://stackoverflow.com/questions/3464876/javascript-get-window-x-y-position-for-scroll


  function getScrollTop() {
    var doc = document.documentElement;
    return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  }
  /**
  * Gets the siblings of the passed element
  */


  function siblings(el) {
    return Array.prototype.filter.call(el.parentNode.children, function (child) {
      return child !== el;
    });
  } //for IE 9 ?


  function preventDefault(event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  }
  /**
  * Determines whether the passed item is of function type.
  */


  function isFunction(item) {
    if (typeof item === 'function') {
      return true;
    }

    var type = Object.prototype.toString(item);
    return type === '[object Function]' || type === '[object GeneratorFunction]';
  }
  /**
  * Trigger custom events
  */


  function trigger(el, eventName, data) {
    var event;
    data = typeof data === 'undefined' ? {} : data; // Native

    if (typeof window.CustomEvent === "function") {
      event = new CustomEvent(eventName, {
        detail: data
      });
    } else {
      event = document.createEvent('CustomEvent');
      event.initCustomEvent(eventName, true, true, data);
    }

    el.dispatchEvent(event);
  }
  /**
  * Polyfill of .matches()
  */


  function matches(el, selector) {
    return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
  }
  /**
  * Toggles the visibility of the passed element el.
  */


  function toggle(el, value) {
    if (typeof value === "boolean") {
      for (var i = 0; i < el.length; i++) {
        el[i].style.display = value ? 'block' : 'none';
      }
    } //we don't use it in other way, so no else :)


    return el;
  }
  /**
  * Creates a HTMLElement from the passed HTML string.
  * https://stackoverflow.com/a/494348/1081396
  */


  function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim(); // Change this to div.childNodes to support multiple top-level nodes

    return div.firstChild;
  }
  /**
  * Removes the passed item/s from the DOM.
  */


  function remove(items) {
    items = getList(items);

    for (var i = 0; i < items.length; i++) {
      var item = items[i];

      if (item && item.parentElement) {
        item.parentNode.removeChild(item);
      }
    }
  }
  /**
  * Filters an array by the passed filter funtion.
  */


  function filter(el, filterFn) {
    Array.prototype.filter.call(el, filterFn);
  } //https://jsfiddle.net/w1rktecz/


  function untilAll(item, selector, fn) {
    var sibling = item[fn];
    var siblings = [];

    while (sibling) {
      if (matches(sibling, selector) || selector == null) {
        siblings.push(sibling);
      }

      sibling = sibling[fn];
    }

    return siblings;
  }
  /**
  * Gets all next elements matching the passed selector.
  */


  function nextAll(item, selector) {
    return untilAll(item, selector, 'nextElementSibling');
  }
  /**
  * Gets all previous elements matching the passed selector.
  */


  function prevAll(item, selector) {
    return untilAll(item, selector, 'previousElementSibling');
  }
  /**
  * Converts an object to an array.
  */


  function toArray(objectData) {
    return Object.keys(objectData).map(function (key) {
      return objectData[key];
    });
  }
  /**
  * forEach polyfill for IE
  * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Browser_Compatibility
  */


  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;

      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  } //utils are public, so we can use it wherever we want


  window.fp_utils = {
    $: $,
    deepExtend: deepExtend,
    hasClass: hasClass,
    getWindowHeight: getWindowHeight,
    css: css,
    until: until,
    prevUntil: prevUntil,
    nextUntil: nextUntil,
    prev: prev,
    next: next,
    last: last,
    index: index,
    getList: getList,
    hide: hide,
    show: show,
    isArrayOrList: isArrayOrList,
    addClass: addClass,
    removeClass: removeClass,
    appendTo: appendTo,
    wrap: wrap,
    wrapAll: wrapAll,
    wrapInner: wrapInner,
    unwrap: unwrap,
    closest: closest,
    after: after,
    before: before,
    insertBefore: insertBefore,
    getScrollTop: getScrollTop,
    siblings: siblings,
    preventDefault: preventDefault,
    isFunction: isFunction,
    trigger: trigger,
    matches: matches,
    toggle: toggle,
    createElementFromHTML: createElementFromHTML,
    remove: remove,
    filter: filter,
    untilAll: untilAll,
    nextAll: nextAll,
    prevAll: prevAll,
    showError: showError
  };
  return initialise;
});
/**
 * jQuery adapter for fullPage.js 3.0.0
 */


if (window.jQuery && window.fullpage) {
  (function ($, fullpage) {
    'use strict'; // No jQuery No Go

    if (!$ || !fullpage) {
      window.fp_utils.showError('error', 'jQuery is required to use the jQuery fullpage adapter!');
      return;
    }

    $.fn.fullpage = function (options) {
      options = $.extend({}, options, {
        '$': $
      });
      var instance = new fullpage(this[0], options);
    };
  })(window.jQuery, window.fullpage);
}

/***/ }),

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fullpage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fullpage.js */ "./node_modules/fullpage.js/dist/fullpage.js");
/* harmony import */ var fullpage_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fullpage_js__WEBPACK_IMPORTED_MODULE_0__);

$("body").addClass("loading");
var fullPage = new fullpage_js__WEBPACK_IMPORTED_MODULE_0___default.a('#fullpage', {
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
  showActiveTooltip: false
});
console.log("## Bundle ##");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/js/bundle.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/daniel/Desktop/Daniel/Camilo/unioncapital/src/js/bundle.js */"./src/js/bundle.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Z1bGxwYWdlLmpzL2Rpc3QvZnVsbHBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyJdLCJuYW1lcyI6WyJyb290Iiwid2luZG93IiwiZG9jdW1lbnQiLCJmYWN0b3J5IiwidW5kZWZpbmVkIiwiZGVmaW5lIiwiZnVsbHBhZ2UiLCJXUkFQUEVSIiwiV1JBUFBFUl9TRUwiLCJTQ1JPTExBQkxFIiwiU0NST0xMQUJMRV9TRUwiLCJSRVNQT05TSVZFIiwiTk9fVFJBTlNJVElPTiIsIkRFU1RST1lFRCIsIkVOQUJMRUQiLCJWSUVXSU5HX1BSRUZJWCIsIkFDVElWRSIsIkFDVElWRV9TRUwiLCJDT01QTEVURUxZIiwiQ09NUExFVEVMWV9TRUwiLCJTRUNUSU9OX0RFRkFVTFRfU0VMIiwiU0VDVElPTiIsIlNFQ1RJT05fU0VMIiwiU0VDVElPTl9BQ1RJVkVfU0VMIiwiVEFCTEVfQ0VMTCIsIlRBQkxFX0NFTExfU0VMIiwiQVVUT19IRUlHSFQiLCJBVVRPX0hFSUdIVF9TRUwiLCJBVVRPX0hFSUdIVF9SRVNQT05TSVZFIiwiQVVUT19IRUlHSFRfUkVTUE9OU0lWRV9TRUwiLCJOT1JNQUxfU0NST0xMIiwiTk9STUFMX1NDUk9MTF9TRUwiLCJTRUNUSU9OX05BViIsIlNFQ1RJT05fTkFWX1NFTCIsIlNFQ1RJT05fTkFWX1RPT0xUSVAiLCJTRUNUSU9OX05BVl9UT09MVElQX1NFTCIsIlNIT1dfQUNUSVZFX1RPT0xUSVAiLCJTTElERV9ERUZBVUxUX1NFTCIsIlNMSURFIiwiU0xJREVfU0VMIiwiU0xJREVfQUNUSVZFX1NFTCIsIlNMSURFU19XUkFQUEVSIiwiU0xJREVTX1dSQVBQRVJfU0VMIiwiU0xJREVTX0NPTlRBSU5FUiIsIlNMSURFU19DT05UQUlORVJfU0VMIiwiVEFCTEUiLCJTTElERVNfTkFWIiwiU0xJREVTX05BVl9TRUwiLCJTTElERVNfTkFWX0xJTktfU0VMIiwiU0xJREVTX0FSUk9XIiwiU0xJREVTX0FSUk9XX1NFTCIsIlNMSURFU19QUkVWIiwiU0xJREVTX1BSRVZfU0VMIiwiU0xJREVTX0FSUk9XX1BSRVYiLCJTTElERVNfQVJST1dfUFJFVl9TRUwiLCJTTElERVNfTkVYVCIsIlNMSURFU19ORVhUX1NFTCIsIlNMSURFU19BUlJPV19ORVhUIiwiU0xJREVTX0FSUk9XX05FWFRfU0VMIiwiaW5pdGlhbGlzZSIsImNvbnRhaW5lclNlbGVjdG9yIiwib3B0aW9ucyIsImlzT0siLCJSZWdFeHAiLCJ0ZXN0IiwiZG9tYWluIiwiaW5kZXhPZiIsIiRodG1sQm9keSIsIiQiLCIkaHRtbCIsIiRib2R5IiwiaGFzQ2xhc3MiLCJkaXNwbGF5V2FybmluZ3MiLCJGUCIsImRlZXBFeHRlbmQiLCJtZW51IiwiYW5jaG9ycyIsImxvY2tBbmNob3JzIiwibmF2aWdhdGlvbiIsIm5hdmlnYXRpb25Qb3NpdGlvbiIsIm5hdmlnYXRpb25Ub29sdGlwcyIsInNob3dBY3RpdmVUb29sdGlwIiwic2xpZGVzTmF2aWdhdGlvbiIsInNsaWRlc05hdlBvc2l0aW9uIiwic2Nyb2xsQmFyIiwiaHlicmlkIiwiY3NzMyIsInNjcm9sbGluZ1NwZWVkIiwiYXV0b1Njcm9sbGluZyIsImZpdFRvU2VjdGlvbiIsImZpdFRvU2VjdGlvbkRlbGF5IiwiZWFzaW5nIiwiZWFzaW5nY3NzMyIsImxvb3BCb3R0b20iLCJsb29wVG9wIiwibG9vcEhvcml6b250YWwiLCJjb250aW51b3VzVmVydGljYWwiLCJjb250aW51b3VzSG9yaXpvbnRhbCIsInNjcm9sbEhvcml6b250YWxseSIsImludGVybG9ja2VkU2xpZGVzIiwiZHJhZ0FuZE1vdmUiLCJvZmZzZXRTZWN0aW9ucyIsInJlc2V0U2xpZGVycyIsImZhZGluZ0VmZmVjdCIsIm5vcm1hbFNjcm9sbEVsZW1lbnRzIiwic2Nyb2xsT3ZlcmZsb3ciLCJzY3JvbGxPdmVyZmxvd1Jlc2V0Iiwic2Nyb2xsT3ZlcmZsb3dIYW5kbGVyIiwiZnBfc2Nyb2xsb3ZlcmZsb3ciLCJpc2Nyb2xsSGFuZGxlciIsInNjcm9sbE92ZXJmbG93T3B0aW9ucyIsInRvdWNoU2Vuc2l0aXZpdHkiLCJ0b3VjaFdyYXBwZXIiLCJiaWdTZWN0aW9uc0Rlc3RpbmF0aW9uIiwia2V5Ym9hcmRTY3JvbGxpbmciLCJhbmltYXRlQW5jaG9yIiwicmVjb3JkSGlzdG9yeSIsImNvbnRyb2xBcnJvd3MiLCJjb250cm9sQXJyb3dDb2xvciIsInZlcnRpY2FsQ2VudGVyZWQiLCJzZWN0aW9uc0NvbG9yIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJmaXhlZEVsZW1lbnRzIiwicmVzcG9uc2l2ZSIsInJlc3BvbnNpdmVXaWR0aCIsInJlc3BvbnNpdmVIZWlnaHQiLCJyZXNwb25zaXZlU2xpZGVzIiwicGFyYWxsYXgiLCJwYXJhbGxheE9wdGlvbnMiLCJ0eXBlIiwicGVyY2VudGFnZSIsInByb3BlcnR5IiwiY2FyZHMiLCJjYXJkc09wdGlvbnMiLCJwZXJzcGVjdGl2ZSIsImZhZGVDb250ZW50IiwiZmFkZUJhY2tncm91bmQiLCJzZWN0aW9uU2VsZWN0b3IiLCJzbGlkZVNlbGVjdG9yIiwidjJjb21wYXRpYmxlIiwiYWZ0ZXJMb2FkIiwib25MZWF2ZSIsImFmdGVyUmVuZGVyIiwiYWZ0ZXJSZXNpemUiLCJhZnRlclJlQnVpbGQiLCJhZnRlclNsaWRlTG9hZCIsIm9uU2xpZGVMZWF2ZSIsImFmdGVyUmVzcG9uc2l2ZSIsImxhenlMb2FkaW5nIiwic2xpZGVNb3ZpbmciLCJpc1RvdWNoRGV2aWNlIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibWF0Y2giLCJpc1RvdWNoIiwibXNNYXhUb3VjaFBvaW50cyIsIm1heFRvdWNoUG9pbnRzIiwiY29udGFpbmVyIiwid2luZG93c0hlaWdodCIsImdldFdpbmRvd0hlaWdodCIsIndpbmRvd3NXaWR0aCIsImdldFdpbmRvd1dpZHRoIiwiaXNSZXNpemluZyIsImlzV2luZG93Rm9jdXNlZCIsImxhc3RTY3JvbGxlZERlc3RpbnkiLCJsYXN0U2Nyb2xsZWRTbGlkZSIsImNhblNjcm9sbCIsInNjcm9sbGluZ3MiLCJjb250cm9sUHJlc3NlZCIsInN0YXJ0aW5nU2VjdGlvbiIsImlzU2Nyb2xsQWxsb3dlZCIsIm0iLCJrIiwiTVNQb2ludGVyIiwiZ2V0TVNQb2ludGVyIiwiZXZlbnRzIiwidG91Y2htb3ZlIiwibW92ZSIsInRvdWNoc3RhcnQiLCJkb3duIiwic2Nyb2xsQmFySGFuZGxlciIsImZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nIiwiZ19zdXBwb3J0c1Bhc3NpdmUiLCJvcHRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImUiLCJyZXNpemVJZCIsInJlc2l6ZUhhbmRsZXJJZCIsImFmdGVyU2VjdGlvbkxvYWRzSWQiLCJhZnRlclNsaWRlTG9hZHNJZCIsInNjcm9sbElkIiwic2Nyb2xsSWQyIiwia2V5ZG93bklkIiwiZ19kb3VibGVDaGVja0hlaWdodElkIiwib3JpZ2luYWxzIiwiYWN0aXZlQW5pbWF0aW9uIiwiZ19pbml0aWFsQW5jaG9yc0luRG9tIiwiZ19jYW5GaXJlTW91c2VFbnRlck5vcm1hbFNjcm9sbCIsImdfbWVkaWFMb2FkZWRJZCIsImdfdHJhbnNpdGlvbkxhcHNlSWQiLCJleHRlbnNpb25zIiwiZnBfZWFzaW5ncyIsImVhc2VJbk91dEN1YmljIiwidCIsImIiLCJjIiwiZCIsInNldEF1dG9TY3JvbGxpbmciLCJ2YWx1ZSIsInNpbGVudFNjcm9sbCIsInNldFZhcmlhYmxlU3RhdGUiLCJlbGVtZW50IiwiY3NzIiwic2V0UmVjb3JkSGlzdG9yeSIsIm9mZnNldFRvcCIsInNjcm9sbFNldHRpbmdzIiwiZ2V0U2Nyb2xsU2V0dGluZ3MiLCJzY3JvbGxUbyIsInNldFNjcm9sbGluZ1NwZWVkIiwic2V0Rml0VG9TZWN0aW9uIiwic2V0TG9ja0FuY2hvcnMiLCJzZXRNb3VzZVdoZWVsU2Nyb2xsaW5nIiwiYWRkTW91c2VXaGVlbEhhbmRsZXIiLCJhZGRNaWRkbGVXaGVlbEhhbmRsZXIiLCJyZW1vdmVNb3VzZVdoZWVsSGFuZGxlciIsInJlbW92ZU1pZGRsZVdoZWVsSGFuZGxlciIsInNldEFsbG93U2Nyb2xsaW5nIiwiZGlyZWN0aW9ucyIsInJlcGxhY2UiLCJzcGxpdCIsImZvckVhY2giLCJkaXJlY3Rpb24iLCJzZXRJc1Njcm9sbEFsbG93ZWQiLCJzZXRNb3VzZUhpamFjayIsImFkZFRvdWNoSGFuZGxlciIsInJlbW92ZVRvdWNoSGFuZGxlciIsInNldEtleWJvYXJkU2Nyb2xsaW5nIiwibW92ZVNlY3Rpb25VcCIsInByZXYiLCJwcmV2VW50aWwiLCJsYXN0Iiwic2Nyb2xsUGFnZSIsIm1vdmVTZWN0aW9uRG93biIsIm5leHQiLCJuZXh0VW50aWwiLCJzaWxlbnRNb3ZlVG8iLCJzZWN0aW9uQW5jaG9yIiwic2xpZGVBbmNob3IiLCJtb3ZlVG8iLCJkZXN0aW55IiwiZ2V0U2VjdGlvbkJ5QW5jaG9yIiwic2Nyb2xsUGFnZUFuZFNsaWRlIiwibW92ZVNsaWRlUmlnaHQiLCJzZWN0aW9uIiwibW92ZVNsaWRlIiwibW92ZVNsaWRlTGVmdCIsInJlQnVpbGQiLCJyZXNpemluZyIsInNlY3Rpb25zIiwiaSIsImxlbmd0aCIsInNsaWRlc1dyYXAiLCJzbGlkZXMiLCJnZXRUYWJsZUhlaWdodCIsImxhbmRzY2FwZVNjcm9sbCIsImNyZWF0ZVNjcm9sbEJhckZvckFsbCIsImFjdGl2ZVNlY3Rpb24iLCJzZWN0aW9uSW5kZXgiLCJpbmRleCIsImlzRnVuY3Rpb24iLCJjYWxsIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiaXNSZXNwb25zaXZlTW9kZSIsInNldFJlc3BvbnNpdmUiLCJhY3RpdmUiLCJpc1Jlc3BvbnNpdmUiLCJoaWRlIiwiYWRkQ2xhc3MiLCJzaG93IiwicmVtb3ZlQ2xhc3MiLCJ2ZXJzaW9uIiwiZ2V0RnVsbHBhZ2VEYXRhIiwiZGVzdHJveSIsImdldEFjdGl2ZVNlY3Rpb24iLCJnZXRBY3RpdmVTbGlkZSIsInRvcCIsInRyYW5zbGF0ZTNkIiwidHJhbnNsYXRlM2RIIiwiYSIsInB1c2giLCJsZWZ0Iiwic2hhcmVkIiwiYWZ0ZXJSZW5kZXJBY3Rpb25zIiwiaXNOb3JtYWxTY3JvbGxFbGVtZW50IiwiZnVsbHBhZ2VfYXBpIiwia2V5cyIsImtleSIsImZuIiwiaW5pdCIsImJpbmRFdmVudHMiLCJzdXBwb3J0M2QiLCJzZXRPcHRpb25zRnJvbURPTSIsInByZXBhcmVEb20iLCJzZXRCb2R5Q2xhc3MiLCJyZWFkeVN0YXRlIiwic2Nyb2xsVG9BbmNob3IiLCJkb3VibGVDaGVja0hlaWdodCIsInNjcm9sbEhhbmRsZXIiLCJoYXNoQ2hhbmdlSGFuZGxlciIsImZvY3VzSGFuZGxlciIsImJsdXJIYW5kbGVyIiwicmVzaXplSGFuZGxlciIsImtleWRvd25IYW5kbGVyIiwia2V5VXBIYW5kbGVyIiwiZXZlbnROYW1lIiwiZGVsZWdhdGVkRXZlbnRzIiwiZm9yTW91c2VMZWF2ZU9yVG91Y2giLCJ0YXJnZXQiLCJjbG9zZXN0Iiwic2VjdGlvbkJ1bGxldEhhbmRsZXIiLCJtYXRjaGVzIiwidG9vbHRpcFRleHRIYW5kbGVyIiwic2xpZGVBcnJvd0hhbmRsZXIiLCJzbGlkZUJ1bGxldEhhbmRsZXIiLCJtZW51SXRlbXNIYW5kbGVyIiwiYWxsb3dTY3JvbGxpbmciLCJvbk1vdXNlRW50ZXJPckxlYXZlIiwiaXNJbnNpZGVPbmVOb3JtYWxTY3JvbGwiLCJpc1VzaW5nU2Nyb2xsT3ZlcmZsb3ciLCJ0b0VsZW1lbnQiLCJyZWxhdGVkVGFyZ2V0Iiwic2V0SXNjcm9sbCIsInNldFRpbWVvdXQiLCJub3JtYWxTZWxlY3RvcnMiLCJub3JtYWxTZWxlY3RvciIsImlzTm9ybWFsU2Nyb2xsVGFyZ2V0IiwiaXNOb3JtYWxTY3JvbGxDaGlsZEZvY3VzZWQiLCJhZGp1c3RUb05ld1ZpZXdwb3J0IiwibmV3V2luZG93SGVpZ2h0IiwibmV3V2luZG93V2lkdGgiLCJhbmNob3JzQXR0cmlidXRlIiwiam9pbiIsIml0ZW0iLCJnZXRBdHRyaWJ1dGUiLCJ0b1N0cmluZyIsInRvb2x0aXBzQXR0cmlidXRlIiwidG9vbHRpcHMiLCJhZGRJbnRlcm5hbFNlbGVjdG9ycyIsIm51bVNsaWRlcyIsInNldEF0dHJpYnV0ZSIsInN0eWxlU2VjdGlvbiIsInN0eWxlTWVudSIsInN0eWxlU2xpZGVzIiwiYWRkVGFibGVDbGFzcyIsImFwcGVuZENoaWxkIiwiYWRkVmVydGljYWxOYXZpZ2F0aW9uIiwiZW5hYmxlWW91dHViZUFQSSIsInNsaWRlcldpZHRoIiwic2xpZGVXaWR0aCIsInNsaWRlc1dyYXBwZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwid3JhcEFsbCIsInNsaWRlc0NvbnRhaW5lciIsImNyZWF0ZVNsaWRlQXJyb3dzIiwiYWRkU2xpZGVzTmF2aWdhdGlvbiIsInNsaWRlIiwic3RhcnRpbmdTbGlkZSIsInNpbGVudExhbmRzY2FwZVNjcm9sbCIsImFjdGl2YXRlTWVudUFuZE5hdiIsImFycm93cyIsImNyZWF0ZUVsZW1lbnRGcm9tSFRNTCIsImFmdGVyIiwiZGl2VWwiLCJhcHBlbmRUbyIsIm5hdiIsImxpIiwibGluayIsImdldEJ1bGxldExpbmtOYW1lIiwidG9vbHRpcCIsImlubmVySFRNTCIsImJ1bGxldCIsImRlZmF1bHROYW1lIiwiYW5jaG9yIiwiYWRkVVJMUGFyYW0iLCJuZXdQYXJhbSIsIm9yaWdpbmFsU3JjIiwiZ2V0VXJsUGFyYW1TaWduIiwidXJsIiwibGF6eUxvYWQiLCJsYXp5TG9hZE90aGVycyIsInBsYXlNZWRpYSIsImlzRGVzdGlueVRoZVN0YXJ0aW5nU2VjdGlvbiIsImZpcmVDYWxsYmFjayIsImFuY2hvckxpbmsiLCJnZXRBbmNob3JzVVJMIiwiZGVzdGluYXRpb25TZWN0aW9uIiwiaXNTY3JvbGxpbmciLCJsYXN0U2Nyb2xsIiwiY3VycmVudFNlY3Rpb24iLCJjdXJyZW50U2Nyb2xsIiwiZ2V0U2Nyb2xsVG9wIiwic2Nyb2xsRGlyZWN0aW9uIiwiZ2V0U2Nyb2xsRGlyZWN0aW9uIiwidmlzaWJsZVNlY3Rpb25JbmRleCIsInNjcmVlbl9taWQiLCJpc0F0Qm90dG9tIiwib2Zmc2V0SGVpZ2h0IiwiaXNDb21wbGV0ZWx5SW5WaWV3UG9ydCIsInNpYmxpbmdzIiwibGVhdmluZ1NlY3Rpb24iLCJsZWF2aW5nU2VjdGlvbkluZGV4IiwieU1vdmVtZW50IiwiZ2V0WW1vdmVtZW50IiwiYWN0aXZlU2xpZGUiLCJzbGlkZUluZGV4Iiwic2xpZGVBbmNob3JMaW5rIiwiY2FsbGJhY2tzUGFyYW1zIiwic3RvcE1lZGlhIiwic2V0U3RhdGUiLCJjbGVhclRpbWVvdXQiLCJtb3ZlbWVudCIsImJvdHRvbSIsImlzU2VjdGlvbkluVmlld3BvcnQiLCJlbCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwaXhlbE9mZnNldCIsImlzVG9wSW5WaWV3IiwiaXNCb3R0b21JblZpZXciLCJwcmV2aW91c0Rlc3RUb3AiLCJzY3JvbGxpbmciLCJzY3JvbGxTZWN0aW9uIiwic2Nyb2xsYWJsZSIsImNoZWNrIiwiaXNTY3JvbGxlZCIsInByZXZlbnRCb3VuY2luZyIsImlzUmVhbGx5VG91Y2giLCJ1cCIsInByZXZlbnREZWZhdWx0IiwidG91Y2hTdGFydFkiLCJ0b3VjaFN0YXJ0WCIsInRvdWNoRW5kWSIsInRvdWNoRW5kWCIsInRvdWNoTW92ZUhhbmRsZXIiLCJ0b3VjaEV2ZW50cyIsImdldEV2ZW50c1BhZ2UiLCJ5IiwieCIsIk1hdGgiLCJhYnMiLCJyaWdodCIsInBvaW50ZXJUeXBlIiwidG91Y2hTdGFydEhhbmRsZXIiLCJnZXRBdmVyYWdlIiwiZWxlbWVudHMiLCJudW1iZXIiLCJzdW0iLCJsYXN0RWxlbWVudHMiLCJzbGljZSIsIm1heCIsImNlaWwiLCJwcmV2VGltZSIsIkRhdGUiLCJnZXRUaW1lIiwiTW91c2VXaGVlbEhhbmRsZXIiLCJjdXJUaW1lIiwiaXNOb3JtYWxTY3JvbGwiLCJldmVudCIsIndoZWVsRGVsdGEiLCJkZWx0YVkiLCJkZXRhaWwiLCJkZWx0YSIsIm1pbiIsImhvcml6b250YWxEZXRlY3Rpb24iLCJ3aGVlbERlbHRhWCIsImRlbHRhWCIsImlzU2Nyb2xsaW5nVmVydGljYWxseSIsInNoaWZ0IiwidGltZURpZmYiLCJhdmVyYWdlRW5kIiwiYXZlcmFnZU1pZGRsZSIsImlzQWNjZWxlcmF0aW5nIiwiY3VycmVudFNsaWRlIiwic2xpZGVTaWJsaW5ncyIsImlzVGVzdGluZyIsImtlZXBTbGlkZXNQb3NpdGlvbiIsImFjdGl2ZVNsaWRlcyIsImdldERlc3RpbmF0aW9uUG9zaXRpb24iLCJlbGVtZW50SGVpZ2h0IiwiZWxlbWVudFRvcCIsInBvc2l0aW9uIiwiaXNTY3JvbGxpbmdEb3duIiwic2VjdGlvbkJvdHRvbSIsImNhbGxiYWNrIiwiaXNNb3ZlbWVudFVwIiwiZHRvcCIsInYiLCJsb2NhbElzUmVzaXppbmciLCJjcmVhdGVJbmZpbml0ZVNlY3Rpb25zIiwiYmVmb3JlTGVhdmUiLCJwZXJmb3JtTW92ZW1lbnQiLCJldmVudERhdGEiLCJnZXRFdmVudERhdGEiLCJ0cmlnZ2VyIiwiYXBwbHkiLCJ0b0FycmF5IiwibnVsbE9yU2VjdGlvbiIsIlNlY3Rpb24iLCJudWxsT3JTbGlkZSIsIlNsaWRlIiwicGFyYW1zUGVyRXZlbnQiLCJvcmlnaW4iLCJkZXN0aW5hdGlvbiIsInByZXZTbGlkZSIsInByZXZTbGlkZUluZGV4IiwiaXNGYXN0U3BlZWQiLCJ0cmFuc2l0aW9uTGFwc2UiLCJyb3VuZCIsInRyYW5zZm9ybUNvbnRhaW5lciIsImFmdGVyU2VjdGlvbkxvYWRzIiwic2Nyb2xsIiwicHJldkFsbCIsInJldmVyc2UiLCJiZWZvcmUiLCJuZXh0QWxsIiwid3JhcEFyb3VuZEVsZW1lbnRzIiwiY29udGludW91c1ZlcnRpY2FsRml4U2VjdGlvbk9yZGVyIiwic2V0U3JjIiwiYXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiaGFzQXV0b0hlaWdodFNlY3Rpb25zIiwicGFuZWwiLCJnZXRTbGlkZU9yU2VjdGlvbiIsIm9uTWVkaWFMb2FkIiwiZWxlbWVudFRvUGxheSIsImxvYWQiLCJvbmxvYWRlZGRhdGEiLCJjcmVhdGVTY3JvbGxCYXIiLCJoYXNBdHRyaWJ1dGUiLCJwbGF5IiwicGxheVlvdXR1YmUiLCJvbmxvYWQiLCJjb250ZW50V2luZG93IiwicG9zdE1lc3NhZ2UiLCJwYXVzZSIsImlzRmlyc3RTbGlkZU1vdmUiLCJpc0ZpcnN0U2Nyb2xsTW92ZSIsImhhc2giLCJsb2NhdGlvbiIsImFuY2hvcnNQYXJ0cyIsImlzRnVua3lBbmNob3IiLCJkZWNvZGVVUklDb21wb25lbnQiLCJhY3RpdmVFbGVtZW50Iiwia2V5Q29kZSIsIm9uVGFiIiwia2V5Q29udHJvbHMiLCJjdHJsS2V5Iiwib25rZXlkb3duIiwibW91c2VEb3duSGFuZGxlciIsIndoaWNoIiwib2xkUGFnZVkiLCJwYWdlWSIsIm1vdXNlTW92ZUhhbmRsZXIiLCJtb3VzZVVwSGFuZGxlciIsImlzU2hpZnRQcmVzc2VkIiwic2hpZnRLZXkiLCJmb2N1c2FibGVFbGVtZW50cyIsImdldEZvY3VzYWJsZXMiLCJwcmV2ZW50QW5kRm9jdXNGaXJzdCIsImZvY3VzIiwiaXNGb2N1c091dHNpZGUiLCJmaWx0ZXIiLCJvZmZzZXRQYXJlbnQiLCJhbGxGb2N1c2FibGVzIiwiY3VycmVudEZvY3VzSW5kZXgiLCJmb2N1c0Rlc3RpbmF0aW9uSW5kZXgiLCJmb2N1c0Rlc3RpbmF0aW9uIiwiZGVzdGluYXRpb25JdGVtU2xpZGUiLCJkZXN0aW5hdGlvbkl0ZW1TZWN0aW9uIiwiaW5kZXhCdWxsZXQiLCJzaGlmdFByZXNzZWQiLCJpc01lZGlhRm9jdXNlZCIsImRlc3RpbnlQb3MiLCJvZmZzZXRMZWZ0Iiwic2xpZGVzTmF2IiwiZ2V0QW5jaG9yIiwieE1vdmVtZW50IiwiZ2V0WG1vdmVtZW50IiwidG9nZ2xlIiwicGVyZm9ybUhvcml6b250YWxNb3ZlIiwiYWZ0ZXJTbGlkZUxvYWRzIiwiYWN0aXZlU2xpZGVzTmF2aWdhdGlvbiIsImFkZEFuaW1hdGlvbiIsImdldFRyYW5zZm9ybXMiLCJwcmV2aW91c0hlaWdodCIsInJlc2l6ZUFjdGlvbnMiLCJjdXJyZW50SGVpZ2h0Iiwid2lkdGhMaW1pdCIsImhlaWdodExpbWl0IiwiaXNCcmVha2luZ1BvaW50V2lkdGgiLCJpc0JyZWFraW5nUG9pbnRIZWlnaHQiLCJ0cmFuc2l0aW9uIiwicmVtb3ZlQW5pbWF0aW9uIiwiYWN0aXZhdGVOYXZEb3RzIiwibmFtZSIsImFjdGl2YXRlTWVudUVsZW1lbnQiLCJmcm9tSW5kZXgiLCJ0b0luZGV4Iiwid3JhcHBlciIsInN0eWxlIiwiaGVpZ2h0Iiwid3JhcElubmVyIiwic2VjdGlvbkhlaWdodCIsInBhZGRpbmdzIiwicGFyc2VJbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiYW5pbWF0ZWQiLCJnZXRTbGlkZUJ5QW5jaG9yIiwic2Nyb2xsU2xpZGVyIiwic2VjdGlvbkhhc2giLCJzZXRVcmxIYXNoIiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsImJhc2VVcmwiLCJocmVmIiwiZWxlbWVudEluZGV4IiwidGV4dCIsIlN0cmluZyIsImNsYXNzUmUiLCJoYXMzZCIsInRyYW5zZm9ybXMiLCJkaXNwbGF5IiwiYm9keSIsImluc2VydEJlZm9yZSIsImdldFByb3BlcnR5VmFsdWUiLCJyZW1vdmVDaGlsZCIsImRldGFjaEV2ZW50IiwicHJlZml4IiwiX2FkZEV2ZW50TGlzdGVuZXIiLCJzdXBwb3J0Iiwib25tb3VzZXdoZWVsIiwicGFzc2l2ZUV2ZW50IiwicGFzc2l2ZSIsInBvaW50ZXIiLCJQb2ludGVyRXZlbnQiLCJwYWdlWCIsInRvdWNoZXMiLCJub0NhbGxiYWNrcyIsInJvdW5kZWRUb3AiLCJzZXRTY3JvbGxpbmciLCJhbGwiLCJ0aW1lb3V0SWQiLCJkZXN0cm95U3RydWN0dXJlIiwicmVtb3ZlIiwicHJldmlvdXNTdHlsZXMiLCJzZWxlY3RvciIsInVud3JhcCIsInVzZWRTZWxlY3RvcnMiLCJ2YXJpYWJsZSIsImwiLCJtc2dTdHlsZSIsInNob3dFcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwiZXh0ZW5zaW9uIiwibmFtZUF0dHIiLCJ0b0xvd2VyQ2FzZSIsImlkQXR0ciIsInByb3BlcnR5TmFtZSIsImdldFNjcm9sbGVkUG9zaXRpb24iLCJzZWxmIiwic2Nyb2xsTGVmdCIsInRvIiwiZHVyYXRpb24iLCJzdGFydCIsImNoYW5nZSIsImN1cnJlbnRUaW1lIiwiaW5jcmVtZW50IiwiYW5pbWF0ZVNjcm9sbCIsInZhbCIsIkl0ZW0iLCJpc0xhc3QiLCJwYXJlbnRFbGVtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImlzRmlyc3QiLCJjb250ZXh0IiwiYXJndW1lbnRzIiwib3V0IiwibGVuIiwib2JqIiwiaGFzT3duUHJvcGVydHkiLCJwcm90b3R5cGUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImRvY3VtZW50RWxlbWVudCIsIml0ZW1zIiwicHJvcHMiLCJnZXRMaXN0IiwidW50aWwiLCJzaWJsaW5nIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm5leHRFbGVtZW50U2libGluZyIsImlzQXJyYXlPckxpc3QiLCJjaGlsZHJlbiIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwibnVtIiwibm9kZVR5cGUiLCJhZGQiLCJjbGFzc05hbWVzIiwicGFyZW50Iiwid3JhcCIsInRvV3JhcCIsImlzV3JhcEFsbCIsIm5ld1BhcmVudCIsImNsb25lTm9kZSIsImZpcnN0Q2hpbGQiLCJ3cmFwcGVyQ29udGVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJyZXBsYWNlQ2hpbGQiLCJyZWZlcmVuY2UiLCJuZXh0U2libGluZyIsImJlZm9yZUVsZW1lbnQiLCJkb2MiLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvcCIsImNsaWVudFRvcCIsIkFycmF5IiwiY2hpbGQiLCJyZXR1cm5WYWx1ZSIsImRhdGEiLCJDdXN0b21FdmVudCIsImNyZWF0ZUV2ZW50IiwiaW5pdEN1c3RvbUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsIm1hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwibW96TWF0Y2hlc1NlbGVjdG9yIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwib01hdGNoZXNTZWxlY3RvciIsImh0bWxTdHJpbmciLCJkaXYiLCJ0cmltIiwiZmlsdGVyRm4iLCJ1bnRpbEFsbCIsIm9iamVjdERhdGEiLCJtYXAiLCJOb2RlTGlzdCIsInRoaXNBcmciLCJmcF91dGlscyIsImpRdWVyeSIsImV4dGVuZCIsImluc3RhbmNlIiwiZnVsbFBhZ2UiLCJsb2ciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTs7Ozs7Ozs7OztBQVVDLFdBQVVBLElBQVYsRUFBZ0JDLE1BQWhCLEVBQXdCQyxRQUF4QixFQUFrQ0MsT0FBbEMsRUFBMkNDLFNBQTNDLEVBQXNEO0FBQ25ELE1BQUksSUFBSixFQUFpRDtBQUM3QztBQUNBQyx1Q0FBUSxZQUFXO0FBQ2ZMLFVBQUksQ0FBQ00sUUFBTCxHQUFnQkgsT0FBTyxDQUFDRixNQUFELEVBQVNDLFFBQVQsQ0FBdkI7QUFDQSxhQUFPRixJQUFJLENBQUNNLFFBQVo7QUFDSCxLQUhLO0FBQUEsb0dBQU47QUFJSCxHQU5ELE1B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Q0MsUUFBTSxFQUFFLGdCQUprQztBQUsxQ0osZ0JBQWMsRUFBRSxHQUwwQjtBQU0xQ0QsTUFBSSxFQUFFLElBTm9DO0FBTzFDTSxZQUFVLEVBQUUsVUFQOEI7QUFRekNDLFlBQVUsRUFBRSxLQVI2QjtBQVV6Q2YsWUFBVSxFQUFFLElBVjZCO0FBVzFDSCxNQUFJLEVBQUUsT0FYb0M7QUFZMUNDLFNBQU8sRUFBRSxDQUFDLFdBQUQsRUFBYyxXQUFkLEVBQTJCLFdBQTNCLEVBQXdDLFFBQXhDLENBWmlDO0FBYTFDSSxvQkFBa0IsRUFBRSxDQUFDLFdBQUQsRUFBYyxXQUFkLEVBQTJCLFdBQTNCLEVBQXdDLFFBQXhDLENBYnNCO0FBYzFDQyxtQkFBaUIsRUFBRTtBQWR1QixDQUExQixDQUFqQjtBQW1CQTRrQixPQUFPLENBQUM0RixHQUFSLENBQVksY0FBWixFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qIVxyXG4gKiBmdWxsUGFnZSAzLjAuOVxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYWx2YXJvdHJpZ28vZnVsbFBhZ2UuanNcclxuICpcclxuICogQGxpY2Vuc2UgR1BMdjMgZm9yIG9wZW4gc291cmNlIHVzZSBvbmx5XHJcbiAqIG9yIEZ1bGxwYWdlIENvbW1lcmNpYWwgTGljZW5zZSBmb3IgY29tbWVyY2lhbCB1c2VcclxuICogaHR0cDovL2FsdmFyb3RyaWdvLmNvbS9mdWxsUGFnZS9wcmljaW5nL1xyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggaHR0cDovL2FsdmFyb3RyaWdvLmNvbS9mdWxsUGFnZSAtIEEgcHJvamVjdCBieSBBbHZhcm8gVHJpZ29cclxuICovXHJcbihmdW5jdGlvbiggcm9vdCwgd2luZG93LCBkb2N1bWVudCwgZmFjdG9yeSwgdW5kZWZpbmVkKSB7XHJcbiAgICBpZiggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xyXG4gICAgICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cclxuICAgICAgICBkZWZpbmUoIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByb290LmZ1bGxwYWdlID0gZmFjdG9yeSh3aW5kb3csIGRvY3VtZW50KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJvb3QuZnVsbHBhZ2U7XHJcbiAgICAgICAgfSApO1xyXG4gICAgfSBlbHNlIGlmKCB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgKSB7XHJcbiAgICAgICAgLy8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUy5cclxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3Rvcnkod2luZG93LCBkb2N1bWVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEJyb3dzZXIgZ2xvYmFscy5cclxuICAgICAgICB3aW5kb3cuZnVsbHBhZ2UgPSBmYWN0b3J5KHdpbmRvdywgZG9jdW1lbnQpO1xyXG4gICAgfVxyXG59KHRoaXMsIHdpbmRvdywgZG9jdW1lbnQsIGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQpe1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIC8vIGtlZXBpbmcgY2VudHJhbCBzZXQgb2YgY2xhc3NuYW1lcyBhbmQgc2VsZWN0b3JzXHJcbiAgICB2YXIgV1JBUFBFUiA9ICAgICAgICAgICAgICAgJ2Z1bGxwYWdlLXdyYXBwZXInO1xyXG4gICAgdmFyIFdSQVBQRVJfU0VMID0gICAgICAgICAgICcuJyArIFdSQVBQRVI7XHJcblxyXG4gICAgLy8gc2xpbXNjcm9sbFxyXG4gICAgdmFyIFNDUk9MTEFCTEUgPSAgICAgICAgICAgICdmcC1zY3JvbGxhYmxlJztcclxuICAgIHZhciBTQ1JPTExBQkxFX1NFTCA9ICAgICAgICAnLicgKyBTQ1JPTExBQkxFO1xyXG5cclxuICAgIC8vIHV0aWxcclxuICAgIHZhciBSRVNQT05TSVZFID0gICAgICAgICAgICAnZnAtcmVzcG9uc2l2ZSc7XHJcbiAgICB2YXIgTk9fVFJBTlNJVElPTiA9ICAgICAgICAgJ2ZwLW5vdHJhbnNpdGlvbic7XHJcbiAgICB2YXIgREVTVFJPWUVEID0gICAgICAgICAgICAgJ2ZwLWRlc3Ryb3llZCc7XHJcbiAgICB2YXIgRU5BQkxFRCA9ICAgICAgICAgICAgICAgJ2ZwLWVuYWJsZWQnO1xyXG4gICAgdmFyIFZJRVdJTkdfUFJFRklYID0gICAgICAgICdmcC12aWV3aW5nJztcclxuICAgIHZhciBBQ1RJVkUgPSAgICAgICAgICAgICAgICAnYWN0aXZlJztcclxuICAgIHZhciBBQ1RJVkVfU0VMID0gICAgICAgICAgICAnLicgKyBBQ1RJVkU7XHJcbiAgICB2YXIgQ09NUExFVEVMWSA9ICAgICAgICAgICAgJ2ZwLWNvbXBsZXRlbHknO1xyXG4gICAgdmFyIENPTVBMRVRFTFlfU0VMID0gICAgICAgICcuJyArIENPTVBMRVRFTFk7XHJcblxyXG4gICAgLy8gc2VjdGlvblxyXG4gICAgdmFyIFNFQ1RJT05fREVGQVVMVF9TRUwgPSAgICcuc2VjdGlvbic7XHJcbiAgICB2YXIgU0VDVElPTiA9ICAgICAgICAgICAgICAgJ2ZwLXNlY3Rpb24nO1xyXG4gICAgdmFyIFNFQ1RJT05fU0VMID0gICAgICAgICAgICcuJyArIFNFQ1RJT047XHJcbiAgICB2YXIgU0VDVElPTl9BQ1RJVkVfU0VMID0gICAgU0VDVElPTl9TRUwgKyBBQ1RJVkVfU0VMO1xyXG4gICAgdmFyIFRBQkxFX0NFTEwgPSAgICAgICAgICAgICdmcC10YWJsZUNlbGwnO1xyXG4gICAgdmFyIFRBQkxFX0NFTExfU0VMID0gICAgICAgICcuJyArIFRBQkxFX0NFTEw7XHJcbiAgICB2YXIgQVVUT19IRUlHSFQgPSAgICAgICAgICAgJ2ZwLWF1dG8taGVpZ2h0JztcclxuICAgIHZhciBBVVRPX0hFSUdIVF9TRUwgPSAgICAgICAnLicgKyBBVVRPX0hFSUdIVDtcclxuICAgIHZhciBBVVRPX0hFSUdIVF9SRVNQT05TSVZFID0gJ2ZwLWF1dG8taGVpZ2h0LXJlc3BvbnNpdmUnO1xyXG4gICAgdmFyIEFVVE9fSEVJR0hUX1JFU1BPTlNJVkVfU0VMID0gJy4nICsgQVVUT19IRUlHSFRfUkVTUE9OU0lWRTtcclxuICAgIHZhciBOT1JNQUxfU0NST0xMID0gICAgICAgICAnZnAtbm9ybWFsLXNjcm9sbCc7XHJcbiAgICB2YXIgTk9STUFMX1NDUk9MTF9TRUwgPSAgICAgJy4nICsgTk9STUFMX1NDUk9MTDtcclxuXHJcbiAgICAvLyBzZWN0aW9uIG5hdlxyXG4gICAgdmFyIFNFQ1RJT05fTkFWID0gICAgICAgICAgICdmcC1uYXYnO1xyXG4gICAgdmFyIFNFQ1RJT05fTkFWX1NFTCA9ICAgICAgICcjJyArIFNFQ1RJT05fTkFWO1xyXG4gICAgdmFyIFNFQ1RJT05fTkFWX1RPT0xUSVAgPSAgICdmcC10b29sdGlwJztcclxuICAgIHZhciBTRUNUSU9OX05BVl9UT09MVElQX1NFTD0nLicrU0VDVElPTl9OQVZfVE9PTFRJUDtcclxuICAgIHZhciBTSE9XX0FDVElWRV9UT09MVElQID0gICAnZnAtc2hvdy1hY3RpdmUnO1xyXG5cclxuICAgIC8vIHNsaWRlXHJcbiAgICB2YXIgU0xJREVfREVGQVVMVF9TRUwgPSAgICAgJy5zbGlkZSc7XHJcbiAgICB2YXIgU0xJREUgPSAgICAgICAgICAgICAgICAgJ2ZwLXNsaWRlJztcclxuICAgIHZhciBTTElERV9TRUwgPSAgICAgICAgICAgICAnLicgKyBTTElERTtcclxuICAgIHZhciBTTElERV9BQ1RJVkVfU0VMID0gICAgICBTTElERV9TRUwgKyBBQ1RJVkVfU0VMO1xyXG4gICAgdmFyIFNMSURFU19XUkFQUEVSID0gICAgICAgICdmcC1zbGlkZXMnO1xyXG4gICAgdmFyIFNMSURFU19XUkFQUEVSX1NFTCA9ICAgICcuJyArIFNMSURFU19XUkFQUEVSO1xyXG4gICAgdmFyIFNMSURFU19DT05UQUlORVIgPSAgICAgICdmcC1zbGlkZXNDb250YWluZXInO1xyXG4gICAgdmFyIFNMSURFU19DT05UQUlORVJfU0VMID0gICcuJyArIFNMSURFU19DT05UQUlORVI7XHJcbiAgICB2YXIgVEFCTEUgPSAgICAgICAgICAgICAgICAgJ2ZwLXRhYmxlJztcclxuXHJcbiAgICAvLyBzbGlkZSBuYXZcclxuICAgIHZhciBTTElERVNfTkFWID0gICAgICAgICAgICAnZnAtc2xpZGVzTmF2JztcclxuICAgIHZhciBTTElERVNfTkFWX1NFTCA9ICAgICAgICAnLicgKyBTTElERVNfTkFWO1xyXG4gICAgdmFyIFNMSURFU19OQVZfTElOS19TRUwgPSAgIFNMSURFU19OQVZfU0VMICsgJyBhJztcclxuICAgIHZhciBTTElERVNfQVJST1cgPSAgICAgICAgICAnZnAtY29udHJvbEFycm93JztcclxuICAgIHZhciBTTElERVNfQVJST1dfU0VMID0gICAgICAnLicgKyBTTElERVNfQVJST1c7XHJcbiAgICB2YXIgU0xJREVTX1BSRVYgPSAgICAgICAgICAgJ2ZwLXByZXYnO1xyXG4gICAgdmFyIFNMSURFU19QUkVWX1NFTCA9ICAgICAgICcuJyArIFNMSURFU19QUkVWO1xyXG4gICAgdmFyIFNMSURFU19BUlJPV19QUkVWID0gICAgIFNMSURFU19BUlJPVyArICcgJyArIFNMSURFU19QUkVWO1xyXG4gICAgdmFyIFNMSURFU19BUlJPV19QUkVWX1NFTCA9IFNMSURFU19BUlJPV19TRUwgKyBTTElERVNfUFJFVl9TRUw7XHJcbiAgICB2YXIgU0xJREVTX05FWFQgPSAgICAgICAgICAgJ2ZwLW5leHQnO1xyXG4gICAgdmFyIFNMSURFU19ORVhUX1NFTCA9ICAgICAgICcuJyArIFNMSURFU19ORVhUO1xyXG4gICAgdmFyIFNMSURFU19BUlJPV19ORVhUID0gICAgIFNMSURFU19BUlJPVyArICcgJyArIFNMSURFU19ORVhUO1xyXG4gICAgdmFyIFNMSURFU19BUlJPV19ORVhUX1NFTCA9IFNMSURFU19BUlJPV19TRUwgKyBTTElERVNfTkVYVF9TRUw7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdGlhbGlzZShjb250YWluZXJTZWxlY3Rvciwgb3B0aW9ucykge1xyXG4gICAgICAgIHZhciBpc09LID0gb3B0aW9ucyAmJiBuZXcgUmVnRXhwKCcoW1xcXFxkXFxcXHddezh9LSl7M31bXFxcXGRcXFxcd117OH18Xig/PS4qP1tBLVldKSg/PS4qP1thLXldKSg/PS4qP1swLThdKSg/PS4qP1sjPyFAJCVeJiotXSkuezgsfSQnKS50ZXN0KG9wdGlvbnNbJ2xpJysnY2VuJysnc2VLJyArICdlJyArICd5J10pIHx8IGRvY3VtZW50LmRvbWFpbi5pbmRleE9mKCdhbCcrJ3Zhcm90cmknICsnZ28nICsgJy4nICsgJ2NvbScpID4gLTE7XHJcblxyXG4gICAgICAgIC8vIGNhY2hlIGNvbW1vbiBlbGVtZW50c1xyXG4gICAgICAgIHZhciAkaHRtbEJvZHkgPSAkKCdodG1sLCBib2R5Jyk7XHJcbiAgICAgICAgdmFyICRodG1sID0gJCgnaHRtbCcpWzBdO1xyXG4gICAgICAgIHZhciAkYm9keSA9ICQoJ2JvZHknKVswXTtcclxuXHJcbiAgICAgICAgLy9vbmx5IG9uY2UgbXkgZnJpZW5kIVxyXG4gICAgICAgIGlmKGhhc0NsYXNzKCRodG1sLCBFTkFCTEVEKSl7IGRpc3BsYXlXYXJuaW5ncygpOyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgdmFyIEZQID0ge307XHJcblxyXG4gICAgICAgIC8vIENyZWF0aW5nIHNvbWUgZGVmYXVsdHMsIGV4dGVuZGluZyB0aGVtIHdpdGggYW55IG9wdGlvbnMgdGhhdCB3ZXJlIHByb3ZpZGVkXHJcbiAgICAgICAgb3B0aW9ucyA9IGRlZXBFeHRlbmQoe1xyXG4gICAgICAgICAgICAvL25hdmlnYXRpb25cclxuICAgICAgICAgICAgbWVudTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFuY2hvcnM6W10sXHJcbiAgICAgICAgICAgIGxvY2tBbmNob3JzOiBmYWxzZSxcclxuICAgICAgICAgICAgbmF2aWdhdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25Qb3NpdGlvbjogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgbmF2aWdhdGlvblRvb2x0aXBzOiBbXSxcclxuICAgICAgICAgICAgc2hvd0FjdGl2ZVRvb2x0aXA6IGZhbHNlLFxyXG4gICAgICAgICAgICBzbGlkZXNOYXZpZ2F0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgc2xpZGVzTmF2UG9zaXRpb246ICdib3R0b20nLFxyXG4gICAgICAgICAgICBzY3JvbGxCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBoeWJyaWQ6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgLy9zY3JvbGxpbmdcclxuICAgICAgICAgICAgY3NzMzogdHJ1ZSxcclxuICAgICAgICAgICAgc2Nyb2xsaW5nU3BlZWQ6IDcwMCxcclxuICAgICAgICAgICAgYXV0b1Njcm9sbGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgZml0VG9TZWN0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICBmaXRUb1NlY3Rpb25EZWxheTogMTAwMCxcclxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0Q3ViaWMnLFxyXG4gICAgICAgICAgICBlYXNpbmdjc3MzOiAnZWFzZScsXHJcbiAgICAgICAgICAgIGxvb3BCb3R0b206IGZhbHNlLFxyXG4gICAgICAgICAgICBsb29wVG9wOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9vcEhvcml6b250YWw6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbnRpbnVvdXNWZXJ0aWNhbDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbnRpbnVvdXNIb3Jpem9udGFsOiBmYWxzZSxcclxuICAgICAgICAgICAgc2Nyb2xsSG9yaXpvbnRhbGx5OiBmYWxzZSxcclxuICAgICAgICAgICAgaW50ZXJsb2NrZWRTbGlkZXM6IGZhbHNlLFxyXG4gICAgICAgICAgICBkcmFnQW5kTW92ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIG9mZnNldFNlY3Rpb25zOiBmYWxzZSxcclxuICAgICAgICAgICAgcmVzZXRTbGlkZXJzOiBmYWxzZSxcclxuICAgICAgICAgICAgZmFkaW5nRWZmZWN0OiBmYWxzZSxcclxuICAgICAgICAgICAgbm9ybWFsU2Nyb2xsRWxlbWVudHM6IG51bGwsXHJcbiAgICAgICAgICAgIHNjcm9sbE92ZXJmbG93OiBmYWxzZSxcclxuICAgICAgICAgICAgc2Nyb2xsT3ZlcmZsb3dSZXNldDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNjcm9sbE92ZXJmbG93SGFuZGxlcjogd2luZG93LmZwX3Njcm9sbG92ZXJmbG93ID8gd2luZG93LmZwX3Njcm9sbG92ZXJmbG93LmlzY3JvbGxIYW5kbGVyIDogbnVsbCxcclxuICAgICAgICAgICAgc2Nyb2xsT3ZlcmZsb3dPcHRpb25zOiBudWxsLFxyXG4gICAgICAgICAgICB0b3VjaFNlbnNpdGl2aXR5OiA1LFxyXG4gICAgICAgICAgICB0b3VjaFdyYXBwZXI6IHR5cGVvZiBjb250YWluZXJTZWxlY3RvciA9PT0gJ3N0cmluZycgPyAkKGNvbnRhaW5lclNlbGVjdG9yKVswXSA6IGNvbnRhaW5lclNlbGVjdG9yLFxyXG4gICAgICAgICAgICBiaWdTZWN0aW9uc0Rlc3RpbmF0aW9uOiBudWxsLFxyXG5cclxuICAgICAgICAgICAgLy9BY2Nlc3NpYmlsaXR5XHJcbiAgICAgICAgICAgIGtleWJvYXJkU2Nyb2xsaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBhbmltYXRlQW5jaG9yOiB0cnVlLFxyXG4gICAgICAgICAgICByZWNvcmRIaXN0b3J5OiB0cnVlLFxyXG5cclxuICAgICAgICAgICAgLy9kZXNpZ25cclxuICAgICAgICAgICAgY29udHJvbEFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgY29udHJvbEFycm93Q29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgdmVydGljYWxDZW50ZXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgc2VjdGlvbnNDb2xvciA6IFtdLFxyXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiAwLFxyXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAwLFxyXG4gICAgICAgICAgICBmaXhlZEVsZW1lbnRzOiBudWxsLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlOiAwLCAvL2JhY2t3YXJkcyBjb21wYWJpdGlsaXR5IHdpdGggcmVzcG9uc2l2ZVdpZGR0aFxyXG4gICAgICAgICAgICByZXNwb25zaXZlV2lkdGg6IDAsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmVIZWlnaHQ6IDAsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmVTbGlkZXM6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYXJhbGxheDogZmFsc2UsXHJcbiAgICAgICAgICAgIHBhcmFsbGF4T3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3JldmVhbCcsXHJcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlOiA2MixcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5OiAndHJhbnNsYXRlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYXJkczogZmFsc2UsXHJcbiAgICAgICAgICAgIGNhcmRzT3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgcGVyc3BlY3RpdmU6IDEwMCxcclxuICAgICAgICAgICAgICAgIGZhZGVDb250ZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZmFkZUJhY2tncm91bmQ6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8vQ3VzdG9tIHNlbGVjdG9yc1xyXG4gICAgICAgICAgICBzZWN0aW9uU2VsZWN0b3I6IFNFQ1RJT05fREVGQVVMVF9TRUwsXHJcbiAgICAgICAgICAgIHNsaWRlU2VsZWN0b3I6IFNMSURFX0RFRkFVTFRfU0VMLFxyXG5cclxuICAgICAgICAgICAgLy9ldmVudHNcclxuICAgICAgICAgICAgdjJjb21wYXRpYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgYWZ0ZXJMb2FkOiBudWxsLFxyXG4gICAgICAgICAgICBvbkxlYXZlOiBudWxsLFxyXG4gICAgICAgICAgICBhZnRlclJlbmRlcjogbnVsbCxcclxuICAgICAgICAgICAgYWZ0ZXJSZXNpemU6IG51bGwsXHJcbiAgICAgICAgICAgIGFmdGVyUmVCdWlsZDogbnVsbCxcclxuICAgICAgICAgICAgYWZ0ZXJTbGlkZUxvYWQ6IG51bGwsXHJcbiAgICAgICAgICAgIG9uU2xpZGVMZWF2ZTogbnVsbCxcclxuICAgICAgICAgICAgYWZ0ZXJSZXNwb25zaXZlOiBudWxsLFxyXG5cclxuICAgICAgICAgICAgbGF6eUxvYWRpbmc6IHRydWVcclxuICAgICAgICB9LCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgLy9mbGFnIHRvIGF2b2lkIHZlcnkgZmFzdCBzbGlkaW5nIGZvciBsYW5kc2NhcGUgc2xpZGVyc1xyXG4gICAgICAgIHZhciBzbGlkZU1vdmluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICB2YXIgaXNUb3VjaERldmljZSA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhpUGhvbmV8aVBvZHxpUGFkfEFuZHJvaWR8cGxheWJvb2t8c2lsa3xCbGFja0JlcnJ5fEJCMTB8V2luZG93cyBQaG9uZXxUaXplbnxCYWRhfHdlYk9TfElFTW9iaWxlfE9wZXJhIE1pbmkpLyk7XHJcbiAgICAgICAgdmFyIGlzVG91Y2ggPSAoKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykgfHwgKG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzID4gMCkgfHwgKG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cykpO1xyXG4gICAgICAgIHZhciBjb250YWluZXIgPSB0eXBlb2YgY29udGFpbmVyU2VsZWN0b3IgPT09ICdzdHJpbmcnID8gJChjb250YWluZXJTZWxlY3RvcilbMF0gOiBjb250YWluZXJTZWxlY3RvcjtcclxuICAgICAgICB2YXIgd2luZG93c0hlaWdodCA9IGdldFdpbmRvd0hlaWdodCgpO1xyXG4gICAgICAgIHZhciB3aW5kb3dzV2lkdGggPSBnZXRXaW5kb3dXaWR0aCgpO1xyXG4gICAgICAgIHZhciBpc1Jlc2l6aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGlzV2luZG93Rm9jdXNlZCA9IHRydWU7XHJcbiAgICAgICAgdmFyIGxhc3RTY3JvbGxlZERlc3Rpbnk7XHJcbiAgICAgICAgdmFyIGxhc3RTY3JvbGxlZFNsaWRlO1xyXG4gICAgICAgIHZhciBjYW5TY3JvbGwgPSB0cnVlO1xyXG4gICAgICAgIHZhciBzY3JvbGxpbmdzID0gW107XHJcbiAgICAgICAgdmFyIGNvbnRyb2xQcmVzc2VkO1xyXG4gICAgICAgIHZhciBzdGFydGluZ1NlY3Rpb247XHJcbiAgICAgICAgdmFyIGlzU2Nyb2xsQWxsb3dlZCA9IHt9O1xyXG4gICAgICAgIGlzU2Nyb2xsQWxsb3dlZC5tID0geyAgJ3VwJzp0cnVlLCAnZG93bic6dHJ1ZSwgJ2xlZnQnOnRydWUsICdyaWdodCc6dHJ1ZSB9O1xyXG4gICAgICAgIGlzU2Nyb2xsQWxsb3dlZC5rID0gZGVlcEV4dGVuZCh7fSwgaXNTY3JvbGxBbGxvd2VkLm0pO1xyXG4gICAgICAgIHZhciBNU1BvaW50ZXIgPSBnZXRNU1BvaW50ZXIoKTtcclxuICAgICAgICB2YXIgZXZlbnRzID0ge1xyXG4gICAgICAgICAgICB0b3VjaG1vdmU6ICdvbnRvdWNobW92ZScgaW4gd2luZG93ID8gJ3RvdWNobW92ZScgOiAgTVNQb2ludGVyLm1vdmUsXHJcbiAgICAgICAgICAgIHRvdWNoc3RhcnQ6ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyA/ICd0b3VjaHN0YXJ0JyA6ICBNU1BvaW50ZXIuZG93blxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHNjcm9sbEJhckhhbmRsZXI7XHJcblxyXG4gICAgICAgIC8vIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3VkYWNpdHkvdWQ4OTEvYmxvYi9naC1wYWdlcy9sZXNzb24yLWZvY3VzLzA3LW1vZGFscy1hbmQta2V5Ym9hcmQtdHJhcHMvc29sdXRpb24vbW9kYWwuanNcclxuICAgICAgICB2YXIgZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcgPSAnYVtocmVmXSwgYXJlYVtocmVmXSwgaW5wdXQ6bm90KFtkaXNhYmxlZF0pLCBzZWxlY3Q6bm90KFtkaXNhYmxlZF0pLCB0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSksIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSksIGlmcmFtZSwgb2JqZWN0LCBlbWJlZCwgW3RhYmluZGV4PVwiMFwiXSwgW2NvbnRlbnRlZGl0YWJsZV0nO1xyXG5cclxuICAgICAgICAvL2NoZWtzIGZvciBwYXNzaXZlIGV2ZW50IHN1cHBvcnRcclxuICAgICAgICB2YXIgZ19zdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgdmFyIG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgIGdfc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRlc3RQYXNzaXZlXCIsIG51bGwsIG9wdHMpO1xyXG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0ZXN0UGFzc2l2ZVwiLCBudWxsLCBvcHRzKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7fVxyXG5cclxuICAgICAgICAvL3RpbWVvdXRzXHJcbiAgICAgICAgdmFyIHJlc2l6ZUlkO1xyXG4gICAgICAgIHZhciByZXNpemVIYW5kbGVySWQ7XHJcbiAgICAgICAgdmFyIGFmdGVyU2VjdGlvbkxvYWRzSWQ7XHJcbiAgICAgICAgdmFyIGFmdGVyU2xpZGVMb2Fkc0lkO1xyXG4gICAgICAgIHZhciBzY3JvbGxJZDtcclxuICAgICAgICB2YXIgc2Nyb2xsSWQyO1xyXG4gICAgICAgIHZhciBrZXlkb3duSWQ7XHJcbiAgICAgICAgdmFyIGdfZG91YmxlQ2hlY2tIZWlnaHRJZDtcclxuICAgICAgICB2YXIgb3JpZ2luYWxzID0gZGVlcEV4dGVuZCh7fSwgb3B0aW9ucyk7IC8vZGVlcCBjb3B5XHJcbiAgICAgICAgdmFyIGFjdGl2ZUFuaW1hdGlvbjtcclxuICAgICAgICB2YXIgZ19pbml0aWFsQW5jaG9yc0luRG9tID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGdfY2FuRmlyZU1vdXNlRW50ZXJOb3JtYWxTY3JvbGwgPSB0cnVlO1xyXG4gICAgICAgIHZhciBnX21lZGlhTG9hZGVkSWQ7XHJcbiAgICAgICAgdmFyIGdfdHJhbnNpdGlvbkxhcHNlSWQ7XHJcbiAgICAgICAgdmFyIGV4dGVuc2lvbnMgPSBbXHJcbiAgICAgICAgICAgICdwYXJhbGxheCcsXHJcbiAgICAgICAgICAgICdzY3JvbGxPdmVyZmxvd1Jlc2V0JyxcclxuICAgICAgICAgICAgJ2RyYWdBbmRNb3ZlJyxcclxuICAgICAgICAgICAgJ29mZnNldFNlY3Rpb25zJyxcclxuICAgICAgICAgICAgJ2ZhZGluZ0VmZmVjdCcsXHJcbiAgICAgICAgICAgICdyZXNwb25zaXZlU2xpZGVzJyxcclxuICAgICAgICAgICAgJ2NvbnRpbnVvdXNIb3Jpem9udGFsJyxcclxuICAgICAgICAgICAgJ2ludGVybG9ja2VkU2xpZGVzJyxcclxuICAgICAgICAgICAgJ3Njcm9sbEhvcml6b250YWxseScsXHJcbiAgICAgICAgICAgICdyZXNldFNsaWRlcnMnLFxyXG4gICAgICAgICAgICAnY2FyZHMnXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgZGlzcGxheVdhcm5pbmdzKCk7XHJcblxyXG4gICAgICAgIC8vZWFzZUluT3V0Q3ViaWMgYW5pbWF0aW9uIGluY2x1ZGVkIGluIHRoZSBwbHVnaW5cclxuICAgICAgICB3aW5kb3cuZnBfZWFzaW5ncyA9IGRlZXBFeHRlbmQod2luZG93LmZwX2Vhc2luZ3MsIHtcclxuICAgICAgICAgICAgZWFzZUluT3V0Q3ViaWM6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHQvPWQvMikgPCAxKSByZXR1cm4gYy8yKnQqdCp0ICsgYjtyZXR1cm4gYy8yKigodC09MikqdCp0ICsgMikgKyBiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2V0cyB0aGUgYXV0b1Njcm9sbCBvcHRpb24uXHJcbiAgICAgICAgKiBJdCBjaGFuZ2VzIHRoZSBzY3JvbGwgYmFyIHZpc2liaWxpdHkgYW5kIHRoZSBoaXN0b3J5IG9mIHRoZSBzaXRlIGFzIGEgcmVzdWx0LlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0QXV0b1Njcm9sbGluZyh2YWx1ZSwgdHlwZSl7XHJcbiAgICAgICAgICAgIC8vcmVtb3ZpbmcgdGhlIHRyYW5zZm9ybWF0aW9uXHJcbiAgICAgICAgICAgIGlmKCF2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICBzaWxlbnRTY3JvbGwoMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldFZhcmlhYmxlU3RhdGUoJ2F1dG9TY3JvbGxpbmcnLCB2YWx1ZSwgdHlwZSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9ICQoU0VDVElPTl9BQ1RJVkVfU0VMKVswXTtcclxuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuYXV0b1Njcm9sbGluZyAmJiAhb3B0aW9ucy5zY3JvbGxCYXIpe1xyXG4gICAgICAgICAgICAgICAgY3NzKCRodG1sQm9keSwge1xyXG4gICAgICAgICAgICAgICAgICAgICdvdmVyZmxvdyc6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICdoZWlnaHQnOiAnMTAwJSdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFJlY29yZEhpc3Rvcnkob3JpZ2luYWxzLnJlY29yZEhpc3RvcnksICdpbnRlcm5hbCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vZm9yIElFIHRvdWNoIGRldmljZXNcclxuICAgICAgICAgICAgICAgIGNzcyhjb250YWluZXIsIHtcclxuICAgICAgICAgICAgICAgICAgICAnLW1zLXRvdWNoLWFjdGlvbic6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAndG91Y2gtYWN0aW9uJzogJ25vbmUnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50ICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vbW92aW5nIHRoZSBjb250YWluZXIgdXBcclxuICAgICAgICAgICAgICAgICAgICBzaWxlbnRTY3JvbGwoZWxlbWVudC5vZmZzZXRUb3ApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGNzcygkaHRtbEJvZHksIHtcclxuICAgICAgICAgICAgICAgICAgICAnb3ZlcmZsb3cnIDogJ3Zpc2libGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdoZWlnaHQnIDogJ2luaXRpYWwnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVjb3JkSGlzdG9yeSA9ICFvcHRpb25zLmF1dG9TY3JvbGxpbmcgPyBmYWxzZSA6IG9yaWdpbmFscy5yZWNvcmRIaXN0b3J5O1xyXG4gICAgICAgICAgICAgICAgc2V0UmVjb3JkSGlzdG9yeShyZWNvcmRIaXN0b3J5LCAnaW50ZXJuYWwnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2ZvciBJRSB0b3VjaCBkZXZpY2VzXHJcbiAgICAgICAgICAgICAgICBjc3MoY29udGFpbmVyLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJy1tcy10b3VjaC1hY3Rpb24nOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAndG91Y2gtYWN0aW9uJzogJydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vc2Nyb2xsaW5nIHRoZSBwYWdlIHRvIHRoZSBzZWN0aW9uIHdpdGggbm8gYW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjcm9sbFNldHRpbmdzID0gZ2V0U2Nyb2xsU2V0dGluZ3MoZWxlbWVudC5vZmZzZXRUb3ApO1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFNldHRpbmdzLmVsZW1lbnQuc2Nyb2xsVG8oMCwgc2Nyb2xsU2V0dGluZ3Mub3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogRGVmaW5lcyB3aGV0ZXIgdG8gcmVjb3JkIHRoZSBoaXN0b3J5IGZvciBlYWNoIGhhc2ggY2hhbmdlIGluIHRoZSBVUkwuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzZXRSZWNvcmRIaXN0b3J5KHZhbHVlLCB0eXBlKXtcclxuICAgICAgICAgICAgc2V0VmFyaWFibGVTdGF0ZSgncmVjb3JkSGlzdG9yeScsIHZhbHVlLCB0eXBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogRGVmaW5lcyB0aGUgc2Nyb2xsaW5nIHNwZWVkXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzZXRTY3JvbGxpbmdTcGVlZCh2YWx1ZSwgdHlwZSl7XHJcbiAgICAgICAgICAgIHNldFZhcmlhYmxlU3RhdGUoJ3Njcm9sbGluZ1NwZWVkJywgdmFsdWUsIHR5cGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTZXRzIGZpdFRvU2VjdGlvblxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0Rml0VG9TZWN0aW9uKHZhbHVlLCB0eXBlKXtcclxuICAgICAgICAgICAgc2V0VmFyaWFibGVTdGF0ZSgnZml0VG9TZWN0aW9uJywgdmFsdWUsIHR5cGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTZXRzIGxvY2tBbmNob3JzXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzZXRMb2NrQW5jaG9ycyh2YWx1ZSl7XHJcbiAgICAgICAgICAgIG9wdGlvbnMubG9ja0FuY2hvcnMgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQWRkcyBvciByZW1vdmUgdGhlIHBvc3NpYmlsaXR5IG9mIHNjcm9sbGluZyB0aHJvdWdoIHNlY3Rpb25zIGJ5IHVzaW5nIHRoZSBtb3VzZSB3aGVlbCBvciB0aGUgdHJhY2twYWQuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzZXRNb3VzZVdoZWVsU2Nyb2xsaW5nKHZhbHVlKXtcclxuICAgICAgICAgICAgaWYodmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgYWRkTW91c2VXaGVlbEhhbmRsZXIoKTtcclxuICAgICAgICAgICAgICAgIGFkZE1pZGRsZVdoZWVsSGFuZGxlcigpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJlbW92ZU1vdXNlV2hlZWxIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVNaWRkbGVXaGVlbEhhbmRsZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBBZGRzIG9yIHJlbW92ZSB0aGUgcG9zc2liaWxpdHkgb2Ygc2Nyb2xsaW5nIHRocm91Z2ggc2VjdGlvbnMgYnkgdXNpbmcgdGhlIG1vdXNlIHdoZWVsL3RyYWNrcGFkIG9yIHRvdWNoIGdlc3R1cmVzLlxyXG4gICAgICAgICogT3B0aW9uYWxseSBhIHNlY29uZCBwYXJhbWV0ZXIgY2FuIGJlIHVzZWQgdG8gc3BlY2lmeSB0aGUgZGlyZWN0aW9uIGZvciB3aGljaCB0aGUgYWN0aW9uIHdpbGwgYmUgYXBwbGllZC5cclxuICAgICAgICAqXHJcbiAgICAgICAgKiBAcGFyYW0gZGlyZWN0aW9ucyBzdHJpbmcgY29udGFpbmluZyB0aGUgZGlyZWN0aW9uIG9yIGRpcmVjdGlvbnMgc2VwYXJhdGVkIGJ5IGNvbW1hLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0QWxsb3dTY3JvbGxpbmcodmFsdWUsIGRpcmVjdGlvbnMpe1xyXG4gICAgICAgICAgICBpZih0eXBlb2YgZGlyZWN0aW9ucyAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9ucyA9IGRpcmVjdGlvbnMucmVwbGFjZSgvIC9nLCcnKS5zcGxpdCgnLCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoZGlyZWN0aW9uKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJc1Njcm9sbEFsbG93ZWQodmFsdWUsIGRpcmVjdGlvbiwgJ20nKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBzZXRJc1Njcm9sbEFsbG93ZWQodmFsdWUsICdhbGwnLCAnbScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEFkZHMgb3IgcmVtb3ZlIHRoZSBtb3VzZSB3aGVlbCBoaWphY2tpbmdcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNldE1vdXNlSGlqYWNrKHZhbHVlKXtcclxuICAgICAgICAgICAgaWYodmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgc2V0TW91c2VXaGVlbFNjcm9sbGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIGFkZFRvdWNoSGFuZGxlcigpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNldE1vdXNlV2hlZWxTY3JvbGxpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlVG91Y2hIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQWRkcyBvciByZW1vdmUgdGhlIHBvc3NpYmlsaXR5IG9mIHNjcm9sbGluZyB0aHJvdWdoIHNlY3Rpb25zIGJ5IHVzaW5nIHRoZSBrZXlib2FyZCBhcnJvdyBrZXlzXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzZXRLZXlib2FyZFNjcm9sbGluZyh2YWx1ZSwgZGlyZWN0aW9ucyl7XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBkaXJlY3Rpb25zICE9PSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb25zID0gZGlyZWN0aW9ucy5yZXBsYWNlKC8gL2csJycpLnNwbGl0KCcsJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGRpcmVjdGlvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNTY3JvbGxBbGxvd2VkKHZhbHVlLCBkaXJlY3Rpb24sICdrJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzZXRJc1Njcm9sbEFsbG93ZWQodmFsdWUsICdhbGwnLCAnaycpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5rZXlib2FyZFNjcm9sbGluZyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIE1vdmVzIHRoZSBwYWdlIHVwIG9uZSBzZWN0aW9uLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gbW92ZVNlY3Rpb25VcCgpe1xyXG4gICAgICAgICAgICB2YXIgcHJldiA9IHByZXZVbnRpbCgkKFNFQ1RJT05fQUNUSVZFX1NFTClbMF0sIFNFQ1RJT05fU0VMKTtcclxuXHJcbiAgICAgICAgICAgIC8vbG9vcGluZyB0byB0aGUgYm90dG9tIGlmIHRoZXJlJ3Mgbm8gbW9yZSBzZWN0aW9ucyBhYm92ZVxyXG4gICAgICAgICAgICBpZiAoIXByZXYgJiYgKG9wdGlvbnMubG9vcFRvcCB8fCBvcHRpb25zLmNvbnRpbnVvdXNWZXJ0aWNhbCkpIHtcclxuICAgICAgICAgICAgICAgIHByZXYgPSBsYXN0KCQoU0VDVElPTl9TRUwpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHByZXYgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsUGFnZShwcmV2LCBudWxsLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBNb3ZlcyB0aGUgcGFnZSBkb3duIG9uZSBzZWN0aW9uLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gbW92ZVNlY3Rpb25Eb3duKCl7XHJcbiAgICAgICAgICAgIHZhciBuZXh0ID0gbmV4dFVudGlsKCQoU0VDVElPTl9BQ1RJVkVfU0VMKVswXSwgU0VDVElPTl9TRUwpO1xyXG5cclxuICAgICAgICAgICAgLy9sb29waW5nIHRvIHRoZSB0b3AgaWYgdGhlcmUncyBubyBtb3JlIHNlY3Rpb25zIGJlbG93XHJcbiAgICAgICAgICAgIGlmKCFuZXh0ICYmXHJcbiAgICAgICAgICAgICAgICAob3B0aW9ucy5sb29wQm90dG9tIHx8IG9wdGlvbnMuY29udGludW91c1ZlcnRpY2FsKSl7XHJcbiAgICAgICAgICAgICAgICBuZXh0ID0gJChTRUNUSU9OX1NFTClbMF07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKG5leHQgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxQYWdlKG5leHQsIG51bGwsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBNb3ZlcyB0aGUgcGFnZSB0byB0aGUgZ2l2ZW4gc2VjdGlvbiBhbmQgc2xpZGUgd2l0aCBubyBhbmltYXRpb24uXHJcbiAgICAgICAgKiBBbmNob3JzIG9yIGluZGV4IHBvc2l0aW9ucyBjYW4gYmUgdXNlZCBhcyBwYXJhbXMuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzaWxlbnRNb3ZlVG8oc2VjdGlvbkFuY2hvciwgc2xpZGVBbmNob3Ipe1xyXG4gICAgICAgICAgICBzZXRTY3JvbGxpbmdTcGVlZCAoMCwgJ2ludGVybmFsJyk7XHJcbiAgICAgICAgICAgIG1vdmVUbyhzZWN0aW9uQW5jaG9yLCBzbGlkZUFuY2hvcik7XHJcbiAgICAgICAgICAgIHNldFNjcm9sbGluZ1NwZWVkIChvcmlnaW5hbHMuc2Nyb2xsaW5nU3BlZWQsICdpbnRlcm5hbCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBNb3ZlcyB0aGUgcGFnZSB0byB0aGUgZ2l2ZW4gc2VjdGlvbiBhbmQgc2xpZGUuXHJcbiAgICAgICAgKiBBbmNob3JzIG9yIGluZGV4IHBvc2l0aW9ucyBjYW4gYmUgdXNlZCBhcyBwYXJhbXMuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBtb3ZlVG8oc2VjdGlvbkFuY2hvciwgc2xpZGVBbmNob3Ipe1xyXG4gICAgICAgICAgICB2YXIgZGVzdGlueSA9IGdldFNlY3Rpb25CeUFuY2hvcihzZWN0aW9uQW5jaG9yKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2xpZGVBbmNob3IgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFBhZ2VBbmRTbGlkZShzZWN0aW9uQW5jaG9yLCBzbGlkZUFuY2hvcik7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGRlc3RpbnkgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxQYWdlKGRlc3RpbnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNsaWRlcyByaWdodCB0aGUgc2xpZGVyIG9mIHRoZSBhY3RpdmUgc2VjdGlvbi5cclxuICAgICAgICAqIE9wdGlvbmFsIGBzZWN0aW9uYCBwYXJhbS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIG1vdmVTbGlkZVJpZ2h0KHNlY3Rpb24pe1xyXG4gICAgICAgICAgICBtb3ZlU2xpZGUoJ3JpZ2h0Jywgc2VjdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNsaWRlcyBsZWZ0IHRoZSBzbGlkZXIgb2YgdGhlIGFjdGl2ZSBzZWN0aW9uLlxyXG4gICAgICAgICogT3B0aW9uYWwgYHNlY3Rpb25gIHBhcmFtLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gbW92ZVNsaWRlTGVmdChzZWN0aW9uKXtcclxuICAgICAgICAgICAgbW92ZVNsaWRlKCdsZWZ0Jywgc2VjdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBXaGVuIHJlc2l6aW5nIGlzIGZpbmlzaGVkLCB3ZSBhZGp1c3QgdGhlIHNsaWRlcyBzaXplcyBhbmQgcG9zaXRpb25zXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gcmVCdWlsZChyZXNpemluZyl7XHJcbiAgICAgICAgICAgIGlmKGhhc0NsYXNzKGNvbnRhaW5lciwgREVTVFJPWUVEKSl7IHJldHVybjsgfSAgLy9ub3RoaW5nIHRvIGRvIGlmIHRoZSBwbHVnaW4gd2FzIGRlc3Ryb3llZFxyXG5cclxuICAgICAgICAgICAgaXNSZXNpemluZyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAvL3VwZGF0aW5nIGdsb2JhbCB2YXJzXHJcbiAgICAgICAgICAgIHdpbmRvd3NIZWlnaHQgPSBnZXRXaW5kb3dIZWlnaHQoKTtcclxuICAgICAgICAgICAgd2luZG93c1dpZHRoID0gZ2V0V2luZG93V2lkdGgoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzZWN0aW9ucyA9ICQoU0VDVElPTl9TRUwpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlY3Rpb25zLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VjdGlvbiA9IHNlY3Rpb25zW2ldO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlc1dyYXAgPSAkKFNMSURFU19XUkFQUEVSX1NFTCwgc2VjdGlvbilbMF07XHJcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGVzID0gJChTTElERV9TRUwsIHNlY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vYWRqdXN0aW5nIHRoZSBoZWlnaHQgb2YgdGhlIHRhYmxlLWNlbGwgZm9yIElFIGFuZCBGaXJlZm94XHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zLnZlcnRpY2FsQ2VudGVyZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNzcygkKFRBQkxFX0NFTExfU0VMLCBzZWN0aW9uKSwgeydoZWlnaHQnOiBnZXRUYWJsZUhlaWdodChzZWN0aW9uKSArICdweCd9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjc3Moc2VjdGlvbiwgeydoZWlnaHQnOiB3aW5kb3dzSGVpZ2h0ICsgJ3B4J30pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vYWRqdXN0aW5nIHRoZSBwb3NpdGlvbiBmbyB0aGUgRlVMTCBXSURUSCBzbGlkZXMuLi5cclxuICAgICAgICAgICAgICAgIGlmIChzbGlkZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmRzY2FwZVNjcm9sbChzbGlkZXNXcmFwLCAkKFNMSURFX0FDVElWRV9TRUwsIHNsaWRlc1dyYXApWzBdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5zY3JvbGxPdmVyZmxvdyl7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxCYXJIYW5kbGVyLmNyZWF0ZVNjcm9sbEJhckZvckFsbCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgYWN0aXZlU2VjdGlvbiA9ICQoU0VDVElPTl9BQ1RJVkVfU0VMKVswXTtcclxuICAgICAgICAgICAgdmFyIHNlY3Rpb25JbmRleCA9IGluZGV4KGFjdGl2ZVNlY3Rpb24sIFNFQ1RJT05fU0VMKTtcclxuXHJcbiAgICAgICAgICAgIC8vaXNuJ3QgaXQgdGhlIGZpcnN0IHNlY3Rpb24/XHJcbiAgICAgICAgICAgIGlmKHNlY3Rpb25JbmRleCl7XHJcbiAgICAgICAgICAgICAgICAvL2FkanVzdGluZyB0aGUgcG9zaXRpb24gZm9yIHRoZSBjdXJyZW50IHNlY3Rpb25cclxuICAgICAgICAgICAgICAgIHNpbGVudE1vdmVUbyhzZWN0aW9uSW5kZXggKyAxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaXNSZXNpemluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZihpc0Z1bmN0aW9uKCBvcHRpb25zLmFmdGVyUmVzaXplICkgJiYgcmVzaXppbmcpe1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5hZnRlclJlc2l6ZS5jYWxsKGNvbnRhaW5lciwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaXNGdW5jdGlvbiggb3B0aW9ucy5hZnRlclJlQnVpbGQgKSAmJiAhcmVzaXppbmcpe1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5hZnRlclJlQnVpbGQuY2FsbChjb250YWluZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIERldGVybWluZXMgd2hldGhlciBmdWxscGFnZS5qcyBpcyBpbiByZXNwb25zaXZlIG1vZGUgb3Igbm90LlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gaXNSZXNwb25zaXZlTW9kZSgpe1xyXG4gICAgICAgICAgIHJldHVybiBoYXNDbGFzcygkYm9keSwgUkVTUE9OU0lWRSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFR1cm5zIGZ1bGxQYWdlLmpzIHRvIG5vcm1hbCBzY3JvbGxpbmcgbW9kZSB3aGVuIHRoZSB2aWV3cG9ydCBgd2lkdGhgIG9yIGBoZWlnaHRgXHJcbiAgICAgICAgKiBhcmUgc21hbGxlciB0aGFuIHRoZSBzZXQgbGltaXQgdmFsdWVzLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0UmVzcG9uc2l2ZShhY3RpdmUpe1xyXG4gICAgICAgICAgICB2YXIgaXNSZXNwb25zaXZlID0gaXNSZXNwb25zaXZlTW9kZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYoYWN0aXZlKXtcclxuICAgICAgICAgICAgICAgIGlmKCFpc1Jlc3BvbnNpdmUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEF1dG9TY3JvbGxpbmcoZmFsc2UsICdpbnRlcm5hbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEZpdFRvU2VjdGlvbihmYWxzZSwgJ2ludGVybmFsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZSgkKFNFQ1RJT05fTkFWX1NFTCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZENsYXNzKCRib2R5LCBSRVNQT05TSVZFKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihpc0Z1bmN0aW9uKCBvcHRpb25zLmFmdGVyUmVzcG9uc2l2ZSApKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5hZnRlclJlc3BvbnNpdmUuY2FsbCggY29udGFpbmVyLCBhY3RpdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy93aGVuIG9uIHBhZ2UgbG9hZCwgd2Ugd2lsbCByZW1vdmUgc2Nyb2xsb3ZlcmZsb3cgaWYgbmVjZXNzYXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgaWYob3B0aW9ucy5zY3JvbGxPdmVyZmxvdyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbEJhckhhbmRsZXIuY3JlYXRlU2Nyb2xsQmFyRm9yQWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoaXNSZXNwb25zaXZlKXtcclxuICAgICAgICAgICAgICAgIHNldEF1dG9TY3JvbGxpbmcob3JpZ2luYWxzLmF1dG9TY3JvbGxpbmcsICdpbnRlcm5hbCcpO1xyXG4gICAgICAgICAgICAgICAgc2V0Rml0VG9TZWN0aW9uKG9yaWdpbmFscy5hdXRvU2Nyb2xsaW5nLCAnaW50ZXJuYWwnKTtcclxuICAgICAgICAgICAgICAgIHNob3coJChTRUNUSU9OX05BVl9TRUwpKTtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKCRib2R5LCBSRVNQT05TSVZFKTtcclxuICAgICAgICAgICAgICAgIGlmKGlzRnVuY3Rpb24oIG9wdGlvbnMuYWZ0ZXJSZXNwb25zaXZlICkpe1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuYWZ0ZXJSZXNwb25zaXZlLmNhbGwoIGNvbnRhaW5lciwgYWN0aXZlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoY29udGFpbmVyKXtcclxuICAgICAgICAgICAgLy9wdWJsaWMgZnVuY3Rpb25zXHJcbiAgICAgICAgICAgIEZQLnZlcnNpb24gPSAnMy4wLjgnO1xyXG4gICAgICAgICAgICBGUC5zZXRBdXRvU2Nyb2xsaW5nID0gc2V0QXV0b1Njcm9sbGluZztcclxuICAgICAgICAgICAgRlAuc2V0UmVjb3JkSGlzdG9yeSA9IHNldFJlY29yZEhpc3Rvcnk7XHJcbiAgICAgICAgICAgIEZQLnNldFNjcm9sbGluZ1NwZWVkID0gc2V0U2Nyb2xsaW5nU3BlZWQ7XHJcbiAgICAgICAgICAgIEZQLnNldEZpdFRvU2VjdGlvbiA9IHNldEZpdFRvU2VjdGlvbjtcclxuICAgICAgICAgICAgRlAuc2V0TG9ja0FuY2hvcnMgPSBzZXRMb2NrQW5jaG9ycztcclxuICAgICAgICAgICAgRlAuc2V0TW91c2VXaGVlbFNjcm9sbGluZyA9IHNldE1vdXNlV2hlZWxTY3JvbGxpbmc7XHJcbiAgICAgICAgICAgIEZQLnNldEFsbG93U2Nyb2xsaW5nID0gc2V0QWxsb3dTY3JvbGxpbmc7XHJcbiAgICAgICAgICAgIEZQLnNldEtleWJvYXJkU2Nyb2xsaW5nID0gc2V0S2V5Ym9hcmRTY3JvbGxpbmc7XHJcbiAgICAgICAgICAgIEZQLm1vdmVTZWN0aW9uVXAgPSBtb3ZlU2VjdGlvblVwO1xyXG4gICAgICAgICAgICBGUC5tb3ZlU2VjdGlvbkRvd24gPSBtb3ZlU2VjdGlvbkRvd247XHJcbiAgICAgICAgICAgIEZQLnNpbGVudE1vdmVUbyA9IHNpbGVudE1vdmVUbztcclxuICAgICAgICAgICAgRlAubW92ZVRvID0gbW92ZVRvO1xyXG4gICAgICAgICAgICBGUC5tb3ZlU2xpZGVSaWdodCA9IG1vdmVTbGlkZVJpZ2h0O1xyXG4gICAgICAgICAgICBGUC5tb3ZlU2xpZGVMZWZ0ID0gbW92ZVNsaWRlTGVmdDtcclxuICAgICAgICAgICAgRlAuZml0VG9TZWN0aW9uID0gZml0VG9TZWN0aW9uO1xyXG4gICAgICAgICAgICBGUC5yZUJ1aWxkID0gcmVCdWlsZDtcclxuICAgICAgICAgICAgRlAuc2V0UmVzcG9uc2l2ZSA9IHNldFJlc3BvbnNpdmU7XHJcbiAgICAgICAgICAgIEZQLmdldEZ1bGxwYWdlRGF0YSA9IGZ1bmN0aW9uKCl7IHJldHVybiBvcHRpb25zOyB9O1xyXG4gICAgICAgICAgICBGUC5kZXN0cm95ID0gZGVzdHJveTtcclxuICAgICAgICAgICAgRlAuZ2V0QWN0aXZlU2VjdGlvbiA9IGdldEFjdGl2ZVNlY3Rpb247XHJcbiAgICAgICAgICAgIEZQLmdldEFjdGl2ZVNsaWRlID0gZ2V0QWN0aXZlU2xpZGU7XHJcblxyXG4gICAgICAgICAgICBGUC50ZXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAnMHB4JyxcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTNkOiAndHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCknLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlM2RIOiAoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCAkKG9wdGlvbnMuc2VjdGlvblNlbGVjdG9yLCBjb250YWluZXIpLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYS5wdXNoKCd0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICAgICAgICAgIH0pKCksXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCAkKG9wdGlvbnMuc2VjdGlvblNlbGVjdG9yLCBjb250YWluZXIpLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYS5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICAgICAgICAgIH0pKCksXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgc2V0QXV0b1Njcm9sbGluZzogc2V0QXV0b1Njcm9sbGluZ1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy9mdW5jdGlvbnMgd2Ugd2FudCB0byBzaGFyZSBhY3Jvc3MgZmlsZXMgYnV0IHdoaWNoIGFyZSBub3RcclxuICAgICAgICAgICAgLy9tZWFuIHRvIGJlIHVzZWQgb24gdGhlaXIgb3duIGJ5IGRldmVsb3BlcnNcclxuICAgICAgICAgICAgRlAuc2hhcmVkID0ge1xyXG4gICAgICAgICAgICAgICAgYWZ0ZXJSZW5kZXJBY3Rpb25zOiBhZnRlclJlbmRlckFjdGlvbnMsXHJcbiAgICAgICAgICAgICAgICBpc05vcm1hbFNjcm9sbEVsZW1lbnQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB3aW5kb3cuZnVsbHBhZ2VfYXBpID0gRlA7XHJcblxyXG4gICAgICAgICAgICAvL3VzaW5nIGpRdWVyeSBpbml0aWFsaXphdGlvbj8gQ3JlYXRpbmcgdGhlICQuZm4uZnVsbHBhZ2Ugb2JqZWN0XHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuJCl7XHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhGUCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuJC5mbi5mdWxscGFnZVtrZXldID0gRlBba2V5XTsgICBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbml0KCk7XHJcblxyXG4gICAgICAgICAgICBiaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICAgICAgICAgIC8vaWYgY3NzMyBpcyBub3Qgc3VwcG9ydGVkLCBpdCB3aWxsIHVzZSBqUXVlcnkgYW5pbWF0aW9uc1xyXG4gICAgICAgICAgICBpZihvcHRpb25zLmNzczMpe1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5jc3MzID0gc3VwcG9ydDNkKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG9wdGlvbnMuc2Nyb2xsQmFyID0gb3B0aW9ucy5zY3JvbGxCYXIgfHwgb3B0aW9ucy5oeWJyaWQ7XHJcblxyXG4gICAgICAgICAgICBzZXRPcHRpb25zRnJvbURPTSgpO1xyXG4gICAgICAgICAgICBwcmVwYXJlRG9tKCk7XHJcbiAgICAgICAgICAgIHNldEFsbG93U2Nyb2xsaW5nKHRydWUpO1xyXG4gICAgICAgICAgICBzZXRNb3VzZUhpamFjayh0cnVlKTtcclxuICAgICAgICAgICAgc2V0QXV0b1Njcm9sbGluZyhvcHRpb25zLmF1dG9TY3JvbGxpbmcsICdpbnRlcm5hbCcpO1xyXG4gICAgICAgICAgICByZXNwb25zaXZlKCk7XHJcblxyXG4gICAgICAgICAgICAvL3NldHRpbmcgdGhlIGNsYXNzIGZvciB0aGUgYm9keSBlbGVtZW50XHJcbiAgICAgICAgICAgIHNldEJvZHlDbGFzcygpO1xyXG5cclxuICAgICAgICAgICAgaWYoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJyl7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb0FuY2hvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgc2Nyb2xsVG9BbmNob3IpO1xyXG5cclxuICAgICAgICAgICAgLy9pZiB3ZSB1c2Ugc2Nyb2xsT3ZlcmZsb3cgd2UnbGwgZmlyZSBhZnRlclJlbmRlciBpbiB0aGUgc2Nyb2xsb3ZlcmZsb3cgZmlsZVxyXG4gICAgICAgICAgICBpZighb3B0aW9ucy5zY3JvbGxPdmVyZmxvdyl7XHJcbiAgICAgICAgICAgICAgICBhZnRlclJlbmRlckFjdGlvbnMoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZG91YmxlQ2hlY2tIZWlnaHQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGJpbmRFdmVudHMoKXtcclxuXHJcbiAgICAgICAgICAgIC8vd2hlbiBzY3JvbGxpbmcuLi5cclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgLy9kZXRlY3RpbmcgYW55IGNoYW5nZSBvbiB0aGUgVVJMIHRvIHNjcm9sbCB0byB0aGUgZ2l2ZW4gYW5jaG9yIGxpbmtcclxuICAgICAgICAgICAgLy8oYSB3YXkgdG8gZGV0ZWN0IGJhY2sgaGlzdG9yeSBidXR0b24gYXMgd2UgcGxheSB3aXRoIHRoZSBoYXNoZXMgb24gdGhlIFVSTClcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBoYXNoQ2hhbmdlSGFuZGxlcik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBvbiB3aW5kb3cgZm9jdXNcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZm9jdXNIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgICAgIC8vd2hlbiBvcGVuaW5nIGEgbmV3IHRhYiAoY3RybCArIHQpLCBgY29udHJvbGAgd29uJ3QgYmUgcHJlc3NlZCB3aGVuIGNvbWluZyBiYWNrLlxyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGJsdXJIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgICAgIC8vd2hlbiByZXNpemluZyB0aGUgc2l0ZSwgd2UgYWRqdXN0IHRoZSBoZWlnaHRzIG9mIHRoZSBzZWN0aW9ucywgc2xpbVNjcm9sbC4uLlxyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplSGFuZGxlcik7XHJcblxyXG4gICAgICAgICAgICAvL1NsaWRpbmcgd2l0aCBhcnJvdyBrZXlzLCBib3RoLCB2ZXJ0aWNhbCBhbmQgaG9yaXpvbnRhbFxyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5ZG93bkhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgLy90byBwcmV2ZW50IHNjcm9sbGluZyB3aGlsZSB6b29taW5nXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywga2V5VXBIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgICAgIC8vU2Nyb2xscyB0byB0aGUgc2VjdGlvbiB3aGVuIGNsaWNraW5nIHRoZSBuYXZpZ2F0aW9uIGJ1bGxldFxyXG4gICAgICAgICAgICAvL3NpbXVsYXRpbmcgdGhlIGpRdWVyeSAub24oJ2NsaWNrJykgZXZlbnQgdXNpbmcgZGVsZWdhdGlvblxyXG4gICAgICAgICAgICBbJ2NsaWNrJywgJ3RvdWNoc3RhcnQnXS5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50TmFtZSl7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZGVsZWdhdGVkRXZlbnRzKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgKiBBcHBseWluZyBub3JtYWxTY3JvbGwgZWxlbWVudHMuXHJcbiAgICAgICAgICAgICogSWdub3JpbmcgdGhlIHNjcm9sbHMgb3ZlciB0aGUgc3BlY2lmaWVkIHNlbGVjdG9ycy5cclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5ub3JtYWxTY3JvbGxFbGVtZW50cyl7XHJcbiAgICAgICAgICAgICAgICBbJ21vdXNlZW50ZXInLCAndG91Y2hzdGFydCddLmZvckVhY2goZnVuY3Rpb24oZXZlbnROYW1lKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3JNb3VzZUxlYXZlT3JUb3VjaChldmVudE5hbWUsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIFsnbW91c2VsZWF2ZScsICd0b3VjaGVuZCddLmZvckVhY2goZnVuY3Rpb24oZXZlbnROYW1lKXtcclxuICAgICAgICAgICAgICAgICAgIGZvck1vdXNlTGVhdmVPclRvdWNoKGV2ZW50TmFtZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZGVsZWdhdGVkRXZlbnRzKGUpe1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICBpZih0YXJnZXQgJiYgY2xvc2VzdCh0YXJnZXQsIFNFQ1RJT05fTkFWX1NFTCArICcgYScpKXtcclxuICAgICAgICAgICAgICAgIHNlY3Rpb25CdWxsZXRIYW5kbGVyLmNhbGwodGFyZ2V0LCBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKG1hdGNoZXModGFyZ2V0LCBTRUNUSU9OX05BVl9UT09MVElQX1NFTCkpe1xyXG4gICAgICAgICAgICAgICAgdG9vbHRpcFRleHRIYW5kbGVyLmNhbGwodGFyZ2V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKG1hdGNoZXModGFyZ2V0LCBTTElERVNfQVJST1dfU0VMKSl7XHJcbiAgICAgICAgICAgICAgICBzbGlkZUFycm93SGFuZGxlci5jYWxsKHRhcmdldCwgZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihtYXRjaGVzKHRhcmdldCwgU0xJREVTX05BVl9MSU5LX1NFTCkgfHwgY2xvc2VzdCh0YXJnZXQsIFNMSURFU19OQVZfTElOS19TRUwpICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgc2xpZGVCdWxsZXRIYW5kbGVyLmNhbGwodGFyZ2V0LCBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGNsb3Nlc3QodGFyZ2V0LCBvcHRpb25zLm1lbnUgKyAnIFtkYXRhLW1lbnVhbmNob3JdJykpe1xyXG4gICAgICAgICAgICAgICAgbWVudUl0ZW1zSGFuZGxlci5jYWxsKHRhcmdldCwgZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGZvck1vdXNlTGVhdmVPclRvdWNoKGV2ZW50TmFtZSwgYWxsb3dTY3JvbGxpbmcpe1xyXG4gICAgICAgICAgICAvL2Egd2F5IHRvIHBhc3MgYXJndW1lbnRzIHRvIHRoZSBvbk1vdXNlRW50ZXJPckxlYXZlIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgIGRvY3VtZW50WydmcF8nICsgZXZlbnROYW1lXSA9IGFsbG93U2Nyb2xsaW5nO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgb25Nb3VzZUVudGVyT3JMZWF2ZSwgdHJ1ZSk7IC8vY2FwdHVyaW5nIHBoYXNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvbk1vdXNlRW50ZXJPckxlYXZlKGUpIHtcclxuICAgICAgICAgICAgdmFyIHR5cGUgPSBlLnR5cGU7XHJcbiAgICAgICAgICAgIHZhciBpc0luc2lkZU9uZU5vcm1hbFNjcm9sbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgaXNVc2luZ1Njcm9sbE92ZXJmbG93ID0gb3B0aW9ucy5zY3JvbGxPdmVyZmxvdztcclxuXHJcbiAgICAgICAgICAgIC8vb25Nb3VzZUxlYXZlIHdpbGwgdXNlIHRoZSBkZXN0aW5hdGlvbiB0YXJnZXQsIG5vdCB0aGUgb25lIHdlIGFyZSBtb3ZpbmcgYXdheSBmcm9tXHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSB0eXBlID09PSAnbW91c2VsZWF2ZScgPyBlLnRvRWxlbWVudCB8fCBlLnJlbGF0ZWRUYXJnZXQgOiBlLnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIC8vY29taW5nIGZyb20gY2xvc2luZyBhIG5vcm1hbFNjcm9sbEVsZW1lbnRzIG1vZGFsIG9yIG1vdmluZyBvdXRzaWRlIHZpZXdwb3J0P1xyXG4gICAgICAgICAgICBpZih0YXJnZXQgPT0gZG9jdW1lbnQgfHwgIXRhcmdldCl7XHJcbiAgICAgICAgICAgICAgICBzZXRNb3VzZUhpamFjayh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihpc1VzaW5nU2Nyb2xsT3ZlcmZsb3cpe1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLnNldElzY3JvbGwodGFyZ2V0LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodHlwZSA9PT0gJ3RvdWNoZW5kJyl7XHJcbiAgICAgICAgICAgICAgICBnX2NhbkZpcmVNb3VzZUVudGVyTm9ybWFsU2Nyb2xsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZ19jYW5GaXJlTW91c2VFbnRlck5vcm1hbFNjcm9sbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9LCA4MDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL3ByZXZlbnRpbmcgbW91c2VlbnRlciBldmVudCB0byBkbyBhbnl0aGluZyB3aGVuIGNvbWluZyBmcm9tIGEgdG91Y2hFbmQgZXZlbnRcclxuICAgICAgICAgICAgLy9maXhpbmcgaXNzdWUgIzM1NzZcclxuICAgICAgICAgICAgaWYodHlwZSA9PT0gJ21vdXNlZW50ZXInICYmICFnX2NhbkZpcmVNb3VzZUVudGVyTm9ybWFsU2Nyb2xsKXtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIG5vcm1hbFNlbGVjdG9ycyA9IG9wdGlvbnMubm9ybWFsU2Nyb2xsRWxlbWVudHMuc3BsaXQoJywnKTtcclxuXHJcbiAgICAgICAgICAgIG5vcm1hbFNlbGVjdG9ycy5mb3JFYWNoKGZ1bmN0aW9uKG5vcm1hbFNlbGVjdG9yKXtcclxuICAgICAgICAgICAgICAgIGlmKCFpc0luc2lkZU9uZU5vcm1hbFNjcm9sbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzTm9ybWFsU2Nyb2xsVGFyZ2V0ID0gbWF0Y2hlcyh0YXJnZXQsIG5vcm1hbFNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9sZWF2aW5nIGEgY2hpbGQgaW5zaWRlIHRoZSBub3JtYWxTY29sbCBlbGVtZW50IGlzIG5vdCBsZWF2aW5nIHRoZSBub3JtYWxTY3JvbGwgIzM2NjFcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNOb3JtYWxTY3JvbGxDaGlsZEZvY3VzZWQgPSBjbG9zZXN0KHRhcmdldCwgbm9ybWFsU2VsZWN0b3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihpc05vcm1hbFNjcm9sbFRhcmdldCB8fMKgaXNOb3JtYWxTY3JvbGxDaGlsZEZvY3VzZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighRlAuc2hhcmVkLmlzTm9ybWFsU2Nyb2xsRWxlbWVudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNb3VzZUhpamFjayhmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNVc2luZ1Njcm9sbE92ZXJmbG93KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnNjcm9sbE92ZXJmbG93SGFuZGxlci5zZXRJc2Nyb2xsKHRhcmdldCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZQLnNoYXJlZC5pc05vcm1hbFNjcm9sbEVsZW1lbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0luc2lkZU9uZU5vcm1hbFNjcm9sbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vbm90IGluc2lkZSBhIHNpbmdsZSBub3JtYWwgc2Nyb2xsIGVsZW1lbnQgYW55bW9yZT9cclxuICAgICAgICAgICAgaWYoIWlzSW5zaWRlT25lTm9ybWFsU2Nyb2xsICYmIEZQLnNoYXJlZC5pc05vcm1hbFNjcm9sbEVsZW1lbnQpe1xyXG4gICAgICAgICAgICAgICAgc2V0TW91c2VIaWphY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKGlzVXNpbmdTY3JvbGxPdmVyZmxvdyl7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5zY3JvbGxPdmVyZmxvd0hhbmRsZXIuc2V0SXNjcm9sbCh0YXJnZXQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEZQLnNoYXJlZC5pc05vcm1hbFNjcm9sbEVsZW1lbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBDaGVja3MgdGhlIHZpZXdwb3J0IGEgZmV3IHRpbWVzIG9uIGEgZGVmaW5lIGludGVydmFsIG9mIHRpbWUgdG8gXHJcbiAgICAgICAgKiBzZWUgaWYgaXQgaGFzIGNoYW5nZWQgaW4gYW55IG9mIHRob3NlLiBJZiB0aGF0J3MgdGhlIGNhc2UsIGl0IHJlc2l6ZXMuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBkb3VibGVDaGVja0hlaWdodCgpe1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAxOyBpIDwgNDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGdfZG91YmxlQ2hlY2tIZWlnaHRJZCA9IHNldFRpbWVvdXQoYWRqdXN0VG9OZXdWaWV3cG9ydCwgMzUwICogaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQWRqdXN0cyBhIHNlY3Rpb24gdG8gdGhlIHZpZXdwb3J0IGlmIGl0IGhhcyBjaGFuZ2VkLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gYWRqdXN0VG9OZXdWaWV3cG9ydCgpe1xyXG4gICAgICAgICAgICB2YXIgbmV3V2luZG93SGVpZ2h0ID0gZ2V0V2luZG93SGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIHZhciBuZXdXaW5kb3dXaWR0aCA9IGdldFdpbmRvd1dpZHRoKCk7XHJcblxyXG4gICAgICAgICAgICBpZih3aW5kb3dzSGVpZ2h0ICE9PSBuZXdXaW5kb3dIZWlnaHQgfHwgd2luZG93c1dpZHRoICE9PSBuZXdXaW5kb3dXaWR0aCl7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3dzSGVpZ2h0ID0gbmV3V2luZG93SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgd2luZG93c1dpZHRoID0gbmV3V2luZG93V2lkdGg7XHJcbiAgICAgICAgICAgICAgICByZUJ1aWxkKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNldHRpbmcgb3B0aW9ucyBmcm9tIERPTSBlbGVtZW50cyBpZiB0aGV5IGFyZSBub3QgcHJvdmlkZWQuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzZXRPcHRpb25zRnJvbURPTSgpe1xyXG5cclxuICAgICAgICAgICAgLy9ubyBhbmNob3JzIG9wdGlvbj8gQ2hlY2tpbmcgZm9yIHRoZW0gaW4gdGhlIERPTSBhdHRyaWJ1dGVzXHJcbiAgICAgICAgICAgIGlmKCFvcHRpb25zLmFuY2hvcnMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHZhciBhbmNob3JzQXR0cmlidXRlID0gJ1tkYXRhLWFuY2hvcl0nO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFuY2hvcnMgPSAkKG9wdGlvbnMuc2VjdGlvblNlbGVjdG9yLnNwbGl0KCcsJykuam9pbihhbmNob3JzQXR0cmlidXRlICsgJywnKSArIGFuY2hvcnNBdHRyaWJ1dGUsIGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICBpZihhbmNob3JzLmxlbmd0aCAmJiBhbmNob3JzLmxlbmd0aCA9PT0gJChTRUNUSU9OX1NFTCkubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICBnX2luaXRpYWxBbmNob3JzSW5Eb20gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuY2hvcnMuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5hbmNob3JzLnB1c2goaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW5jaG9yJykudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vbm8gdG9vbHRpcHMgb3B0aW9uPyBDaGVja2luZyBmb3IgdGhlbSBpbiB0aGUgRE9NIGF0dHJpYnV0ZXNcclxuICAgICAgICAgICAgaWYoIW9wdGlvbnMubmF2aWdhdGlvblRvb2x0aXBzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9vbHRpcHNBdHRyaWJ1dGUgPSAnW2RhdGEtdG9vbHRpcF0nO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvb2x0aXBzID0gJChvcHRpb25zLnNlY3Rpb25TZWxlY3Rvci5zcGxpdCgnLCcpLmpvaW4odG9vbHRpcHNBdHRyaWJ1dGUgKyAnLCcpICsgdG9vbHRpcHNBdHRyaWJ1dGUsIGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICBpZih0b29sdGlwcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXBzLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMubmF2aWdhdGlvblRvb2x0aXBzLnB1c2goaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9vbHRpcCcpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFdvcmtzIG92ZXIgdGhlIERPTSBzdHJ1Y3R1cmUgdG8gc2V0IGl0IHVwIGZvciB0aGUgY3VycmVudCBmdWxscGFnZSBvcHRpb25zLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gcHJlcGFyZURvbSgpe1xyXG4gICAgICAgICAgICBjc3MoY29udGFpbmVyLCB7XHJcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JzogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ3JlbGF0aXZlJ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vYWRkaW5nIGEgY2xhc3MgdG8gcmVjb2duaXplIHRoZSBjb250YWluZXIgaW50ZXJuYWxseSBpbiB0aGUgY29kZVxyXG4gICAgICAgICAgICBhZGRDbGFzcyhjb250YWluZXIsIFdSQVBQRVIpO1xyXG4gICAgICAgICAgICBhZGRDbGFzcygkaHRtbCwgRU5BQkxFRCk7XHJcblxyXG4gICAgICAgICAgICAvL2R1ZSB0byBodHRwczovL2dpdGh1Yi5jb20vYWx2YXJvdHJpZ28vZnVsbFBhZ2UuanMvaXNzdWVzLzE1MDJcclxuICAgICAgICAgICAgd2luZG93c0hlaWdodCA9IGdldFdpbmRvd0hlaWdodCgpO1xyXG5cclxuICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoY29udGFpbmVyLCBERVNUUk9ZRUQpOyAvL2luIGNhc2UgaXQgd2FzIGRlc3Ryb3llZCBiZWZvcmUgaW5pdGlhbGl6aW5nIGl0IGFnYWluXHJcblxyXG4gICAgICAgICAgICBhZGRJbnRlcm5hbFNlbGVjdG9ycygpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNlY3Rpb25zID0gJChTRUNUSU9OX1NFTCk7XHJcblxyXG4gICAgICAgICAgICAvL3N0eWxpbmcgdGhlIHNlY3Rpb25zIC8gc2xpZGVzIC8gbWVudVxyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpPHNlY3Rpb25zLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIHZhciBzZWN0aW9uSW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlY3Rpb24gPSBzZWN0aW9uc1tpXTtcclxuICAgICAgICAgICAgICAgIHZhciBzbGlkZXMgPSAkKFNMSURFX1NFTCwgc2VjdGlvbik7XHJcbiAgICAgICAgICAgICAgICB2YXIgbnVtU2xpZGVzID0gc2xpZGVzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2NhY2hpbmcgdGhlIG9yaWdpbmFsIHN0eWxlcyB0byBhZGQgdGhlbSBiYWNrIG9uIGRlc3Ryb3koJ2FsbCcpXHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uLnNldEF0dHJpYnV0ZSgnZGF0YS1mcC1zdHlsZXMnLCBzZWN0aW9uLmdldEF0dHJpYnV0ZSgnc3R5bGUnKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc3R5bGVTZWN0aW9uKHNlY3Rpb24sIHNlY3Rpb25JbmRleCk7XHJcbiAgICAgICAgICAgICAgICBzdHlsZU1lbnUoc2VjdGlvbiwgc2VjdGlvbkluZGV4KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGVyZSdzIGFueSBzbGlkZVxyXG4gICAgICAgICAgICAgICAgaWYgKG51bVNsaWRlcyA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNsaWRlcyhzZWN0aW9uLCBzbGlkZXMsIG51bVNsaWRlcyk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBpZihvcHRpb25zLnZlcnRpY2FsQ2VudGVyZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRUYWJsZUNsYXNzKHNlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9maXhlZCBlbGVtZW50cyBuZWVkIHRvIGJlIG1vdmVkIG91dCBvZiB0aGUgcGx1Z2luIGNvbnRhaW5lciBkdWUgdG8gcHJvYmxlbXMgd2l0aCBDU1MzLlxyXG4gICAgICAgICAgICBpZihvcHRpb25zLmZpeGVkRWxlbWVudHMgJiYgb3B0aW9ucy5jc3MzKXtcclxuICAgICAgICAgICAgICAgICQob3B0aW9ucy5maXhlZEVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xyXG4gICAgICAgICAgICAgICAgICAgICRib2R5LmFwcGVuZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vdmVydGljYWwgY2VudGVyZWQgb2YgdGhlIG5hdmlnYXRpb24gKyBhY3RpdmUgYnVsbGV0XHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMubmF2aWdhdGlvbil7XHJcbiAgICAgICAgICAgICAgICBhZGRWZXJ0aWNhbE5hdmlnYXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZW5hYmxlWW91dHViZUFQSSgpO1xyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5zY3JvbGxPdmVyZmxvdyl7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxCYXJIYW5kbGVyID0gb3B0aW9ucy5zY3JvbGxPdmVyZmxvd0hhbmRsZXIuaW5pdChvcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTdHlsZXMgdGhlIGhvcml6b250YWwgc2xpZGVzIGZvciBhIHNlY3Rpb24uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzdHlsZVNsaWRlcyhzZWN0aW9uLCBzbGlkZXMsIG51bVNsaWRlcyl7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZXJXaWR0aCA9IG51bVNsaWRlcyAqIDEwMDtcclxuICAgICAgICAgICAgdmFyIHNsaWRlV2lkdGggPSAxMDAgLyBudW1TbGlkZXM7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2xpZGVzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBzbGlkZXNXcmFwcGVyLmNsYXNzTmFtZSA9IFNMSURFU19XUkFQUEVSOyAvL2ZwLXNsaWRlc1xyXG4gICAgICAgICAgICB3cmFwQWxsKHNsaWRlcywgc2xpZGVzV3JhcHBlcik7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2xpZGVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHNsaWRlc0NvbnRhaW5lci5jbGFzc05hbWUgPSBTTElERVNfQ09OVEFJTkVSOyAvL2ZwLXNsaWRlc0NvbnRhaW5lclxyXG4gICAgICAgICAgICB3cmFwQWxsKHNsaWRlcywgc2xpZGVzQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIGNzcygkKFNMSURFU19DT05UQUlORVJfU0VMLCBzZWN0aW9uKSwgeyd3aWR0aCc6IHNsaWRlcldpZHRoICsgJyUnfSk7XHJcblxyXG4gICAgICAgICAgICBpZihudW1TbGlkZXMgPiAxKXtcclxuICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMuY29udHJvbEFycm93cyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlU2xpZGVBcnJvd3Moc2VjdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9ucy5zbGlkZXNOYXZpZ2F0aW9uKXtcclxuICAgICAgICAgICAgICAgICAgICBhZGRTbGlkZXNOYXZpZ2F0aW9uKHNlY3Rpb24sIG51bVNsaWRlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNsaWRlcy5mb3JFYWNoKGZ1bmN0aW9uKHNsaWRlKSB7XHJcbiAgICAgICAgICAgICAgICBjc3Moc2xpZGUsIHsnd2lkdGgnOiBzbGlkZVdpZHRoICsgJyUnfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9ucy52ZXJ0aWNhbENlbnRlcmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUYWJsZUNsYXNzKHNsaWRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgc3RhcnRpbmdTbGlkZSA9ICQoU0xJREVfQUNUSVZFX1NFTCwgc2VjdGlvbilbMF07XHJcblxyXG4gICAgICAgICAgICAvL2lmIHRoZSBzbGlkZSB3b24ndCBiZSBhbiBzdGFydGluZyBwb2ludCwgdGhlIGRlZmF1bHQgd2lsbCBiZSB0aGUgZmlyc3Qgb25lXHJcbiAgICAgICAgICAgIC8vdGhlIGFjdGl2ZSBzZWN0aW9uIGlzbid0IHRoZSBmaXJzdCBvbmU/IElzIG5vdCB0aGUgZmlyc3Qgc2xpZGUgb2YgdGhlIGZpcnN0IHNlY3Rpb24/IFRoZW4gd2UgbG9hZCB0aGF0IHNlY3Rpb24vc2xpZGUgYnkgZGVmYXVsdC5cclxuICAgICAgICAgICAgaWYoIHN0YXJ0aW5nU2xpZGUgIT0gbnVsbCAmJiAoaW5kZXgoJChTRUNUSU9OX0FDVElWRV9TRUwpLCBTRUNUSU9OX1NFTCkgIT09IDAgfHwgKGluZGV4KCQoU0VDVElPTl9BQ1RJVkVfU0VMKSwgU0VDVElPTl9TRUwpID09PSAwICYmIGluZGV4KHN0YXJ0aW5nU2xpZGUpICE9PSAwKSkpe1xyXG4gICAgICAgICAgICAgICAgc2lsZW50TGFuZHNjYXBlU2Nyb2xsKHN0YXJ0aW5nU2xpZGUsICdpbnRlcm5hbCcpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGFkZENsYXNzKHNsaWRlc1swXSwgQUNUSVZFKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTdHlsaW5nIHZlcnRpY2FsIHNlY3Rpb25zXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzdHlsZVNlY3Rpb24oc2VjdGlvbiwgaW5kZXgpe1xyXG4gICAgICAgICAgICAvL2lmIG5vIGFjdGl2ZSBzZWN0aW9uIGlzIGRlZmluZWQsIHRoZSAxc3Qgb25lIHdpbGwgYmUgdGhlIGRlZmF1bHQgb25lXHJcbiAgICAgICAgICAgIGlmKCFpbmRleCAmJiAkKFNFQ1RJT05fQUNUSVZFX1NFTClbMF0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgYWRkQ2xhc3Moc2VjdGlvbiwgQUNUSVZFKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGFydGluZ1NlY3Rpb24gPSAkKFNFQ1RJT05fQUNUSVZFX1NFTClbMF07XHJcblxyXG4gICAgICAgICAgICBjc3Moc2VjdGlvbiwgeydoZWlnaHQnOiB3aW5kb3dzSGVpZ2h0ICsgJ3B4J30pO1xyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5wYWRkaW5nVG9wKXtcclxuICAgICAgICAgICAgICAgIGNzcyhzZWN0aW9uLCB7J3BhZGRpbmctdG9wJzogb3B0aW9ucy5wYWRkaW5nVG9wfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMucGFkZGluZ0JvdHRvbSl7XHJcbiAgICAgICAgICAgICAgICBjc3Moc2VjdGlvbiwgeydwYWRkaW5nLWJvdHRvbSc6IG9wdGlvbnMucGFkZGluZ0JvdHRvbX0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuc2VjdGlvbnNDb2xvcltpbmRleF0gIT09ICAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgY3NzKHNlY3Rpb24sIHsnYmFja2dyb3VuZC1jb2xvcic6IG9wdGlvbnMuc2VjdGlvbnNDb2xvcltpbmRleF19KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmFuY2hvcnNbaW5kZXhdICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgc2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYW5jaG9yJywgb3B0aW9ucy5hbmNob3JzW2luZGV4XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2V0cyB0aGUgZGF0YS1hbmNob3IgYXR0cmlidXRlcyB0byB0aGUgbWVudSBlbGVtZW50cyBhbmQgYWN0aXZhdGVzIHRoZSBjdXJyZW50IG9uZS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHN0eWxlTWVudShzZWN0aW9uLCBpbmRleCl7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5hbmNob3JzW2luZGV4XSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIC8vYWN0aXZhdGluZyB0aGUgbWVudSAvIG5hdiBlbGVtZW50IG9uIGxvYWRcclxuICAgICAgICAgICAgICAgIGlmKGhhc0NsYXNzKHNlY3Rpb24sIEFDVElWRSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2YXRlTWVudUFuZE5hdihvcHRpb25zLmFuY2hvcnNbaW5kZXhdLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vbW92aW5nIHRoZSBtZW51IG91dHNpZGUgdGhlIG1haW4gY29udGFpbmVyIGlmIGl0IGlzIGluc2lkZSAoYXZvaWQgcHJvYmxlbXMgd2l0aCBmaXhlZCBwb3NpdGlvbnMgd2hlbiB1c2luZyBDU1MzIHRyYW5mb3JtcylcclxuICAgICAgICAgICAgaWYob3B0aW9ucy5tZW51ICYmIG9wdGlvbnMuY3NzMyAmJiBjbG9zZXN0KCQob3B0aW9ucy5tZW51KVswXSwgV1JBUFBFUl9TRUwpICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgJChvcHRpb25zLm1lbnUpLmZvckVhY2goZnVuY3Rpb24obWVudSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRib2R5LmFwcGVuZENoaWxkKG1lbnUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQWRkcyBpbnRlcm5hbCBjbGFzc2VzIHRvIGJlIGFibGUgdG8gcHJvdmlkZSBjdXN0b21pemFibGUgc2VsZWN0b3JzXHJcbiAgICAgICAgKiBrZWVwaW5nIHRoZSBsaW5rIHdpdGggdGhlIHN0eWxlIHNoZWV0LlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkSW50ZXJuYWxTZWxlY3RvcnMoKXtcclxuICAgICAgICAgICAgYWRkQ2xhc3MoJChvcHRpb25zLnNlY3Rpb25TZWxlY3RvciwgY29udGFpbmVyKSwgU0VDVElPTik7XHJcbiAgICAgICAgICAgIGFkZENsYXNzKCQob3B0aW9ucy5zbGlkZVNlbGVjdG9yLCBjb250YWluZXIpLCBTTElERSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIENyZWF0ZXMgdGhlIGNvbnRyb2wgYXJyb3dzIGZvciB0aGUgZ2l2ZW4gc2VjdGlvblxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlU2xpZGVBcnJvd3Moc2VjdGlvbil7XHJcbiAgICAgICAgICAgIHZhciBhcnJvd3MgPSBbY3JlYXRlRWxlbWVudEZyb21IVE1MKCc8ZGl2IGNsYXNzPVwiJyArIFNMSURFU19BUlJPV19QUkVWICsgJ1wiPjwvZGl2PicpLCBjcmVhdGVFbGVtZW50RnJvbUhUTUwoJzxkaXYgY2xhc3M9XCInICsgU0xJREVTX0FSUk9XX05FWFQgKyAnXCI+PC9kaXY+JyldO1xyXG4gICAgICAgICAgICBhZnRlcigkKFNMSURFU19XUkFQUEVSX1NFTCwgc2VjdGlvbilbMF0sIGFycm93cyk7XHJcblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLmNvbnRyb2xBcnJvd0NvbG9yICE9PSAnI2ZmZicpe1xyXG4gICAgICAgICAgICAgICAgY3NzKCQoU0xJREVTX0FSUk9XX05FWFRfU0VMLCBzZWN0aW9uKSwgeydib3JkZXItY29sb3InOiAndHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgJytvcHRpb25zLmNvbnRyb2xBcnJvd0NvbG9yfSk7XHJcbiAgICAgICAgICAgICAgICBjc3MoJChTTElERVNfQVJST1dfUFJFVl9TRUwsIHNlY3Rpb24pLCB7J2JvcmRlci1jb2xvcic6ICd0cmFuc3BhcmVudCAnKyBvcHRpb25zLmNvbnRyb2xBcnJvd0NvbG9yICsgJyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCd9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoIW9wdGlvbnMubG9vcEhvcml6b250YWwpe1xyXG4gICAgICAgICAgICAgICAgaGlkZSgkKFNMSURFU19BUlJPV19QUkVWX1NFTCwgc2VjdGlvbikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIENyZWF0ZXMgYSB2ZXJ0aWNhbCBuYXZpZ2F0aW9uIGJhci5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGFkZFZlcnRpY2FsTmF2aWdhdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgbmF2aWdhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBTRUNUSU9OX05BVik7XHJcblxyXG4gICAgICAgICAgICB2YXIgZGl2VWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uLmFwcGVuZENoaWxkKGRpdlVsKTtcclxuXHJcbiAgICAgICAgICAgIGFwcGVuZFRvKG5hdmlnYXRpb24sICRib2R5KTtcclxuICAgICAgICAgICAgdmFyIG5hdiA9ICQoU0VDVElPTl9OQVZfU0VMKVswXTtcclxuXHJcbiAgICAgICAgICAgIGFkZENsYXNzKG5hdiwgJ2ZwLScgKyBvcHRpb25zLm5hdmlnYXRpb25Qb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLnNob3dBY3RpdmVUb29sdGlwKXtcclxuICAgICAgICAgICAgICAgIGFkZENsYXNzKG5hdiwgU0hPV19BQ1RJVkVfVE9PTFRJUCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBsaSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkKFNFQ1RJT05fU0VMKS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxpbmsgPSAnJztcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmFuY2hvcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluayA9IG9wdGlvbnMuYW5jaG9yc1tpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsaSArPSAnPGxpPjxhIGhyZWY9XCIjJyArIGxpbmsgKyAnXCI+PHNwYW4gY2xhc3M9XCJmcC1zci1vbmx5XCI+JyArIGdldEJ1bGxldExpbmtOYW1lKGksICdTZWN0aW9uJykgKyAnPC9zcGFuPjxzcGFuPjwvc3Bhbj48L2E+JztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBPbmx5IGFkZCB0b29sdGlwIGlmIG5lZWRlZCAoZGVmaW5lZCBieSB1c2VyKVxyXG4gICAgICAgICAgICAgICAgdmFyIHRvb2x0aXAgPSBvcHRpb25zLm5hdmlnYXRpb25Ub29sdGlwc1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRvb2x0aXAgIT09ICd1bmRlZmluZWQnICYmIHRvb2x0aXAgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGkgKz0gJzxkaXYgY2xhc3M9XCInICsgU0VDVElPTl9OQVZfVE9PTFRJUCArICcgZnAtJyArIG9wdGlvbnMubmF2aWdhdGlvblBvc2l0aW9uICsgJ1wiPicgKyB0b29sdGlwICsgJzwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGkgKz0gJzwvbGk+JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKCd1bCcsIG5hdilbMF0uaW5uZXJIVE1MID0gbGk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL2FjdGl2YXRpbmcgdGhlIGN1cnJlbnQgYWN0aXZlIHNlY3Rpb25cclxuXHJcbiAgICAgICAgICAgIHZhciBidWxsZXQgPSAkKCdsaScsICQoU0VDVElPTl9OQVZfU0VMKVswXSlbaW5kZXgoJChTRUNUSU9OX0FDVElWRV9TRUwpWzBdLCBTRUNUSU9OX1NFTCldO1xyXG4gICAgICAgICAgICBhZGRDbGFzcygkKCdhJywgYnVsbGV0KSwgQUNUSVZFKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogR2V0cyB0aGUgbmFtZSBmb3Igc2NyZWVuIHJlYWRlcnMgZm9yIGEgc2VjdGlvbi9zbGlkZSBuYXZpZ2F0aW9uIGJ1bGxldC5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldEJ1bGxldExpbmtOYW1lKGksIGRlZmF1bHROYW1lLCBpdGVtKXtcclxuICAgICAgICAgICAgdmFyIGFuY2hvciA9IGRlZmF1bHROYW1lID09PSAnU2VjdGlvbicgPyBvcHRpb25zLmFuY2hvcnNbaV0gOiBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1hbmNob3InKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMubmF2aWdhdGlvblRvb2x0aXBzW2ldXHJcbiAgICAgICAgICAgICAgICB8fCBhbmNob3JcclxuICAgICAgICAgICAgICAgIHx8IGRlZmF1bHROYW1lICsgJyAnICsgKGkrMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICogRW5hYmxlcyB0aGUgWW91dHViZSB2aWRlb3MgQVBJIHNvIHdlIGNhbiBjb250cm9sIHRoZWlyIGZsb3cgaWYgbmVjZXNzYXJ5LlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZW5hYmxlWW91dHViZUFQSSgpe1xyXG4gICAgICAgICAgICAkKCdpZnJhbWVbc3JjKj1cInlvdXR1YmUuY29tL2VtYmVkL1wiXScsIGNvbnRhaW5lcikuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICAgICAgICAgIGFkZFVSTFBhcmFtKGl0ZW0sICdlbmFibGVqc2FwaT0xJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBBZGRzIGEgbmV3IHBhcmFtZXRlciBhbmQgaXRzIHZhbHVlIHRvIHRoZSBgc3JjYCBvZiBhIGdpdmVuIGVsZW1lbnRcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGFkZFVSTFBhcmFtKGVsZW1lbnQsIG5ld1BhcmFtKXtcclxuICAgICAgICAgICAgdmFyIG9yaWdpbmFsU3JjID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnc3JjJywgb3JpZ2luYWxTcmMgKyBnZXRVcmxQYXJhbVNpZ24ob3JpZ2luYWxTcmMpICsgbmV3UGFyYW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAqIFJldHVybnMgdGhlIHByZWZpeCBzaWduIHRvIHVzZSBmb3IgYSBuZXcgcGFyYW1ldGVyIGluIGFuIGV4aXN0ZW4gVVJMLlxyXG4gICAgICAgICpcclxuICAgICAgICAqIEByZXR1cm4ge1N0cmluZ30gID8gfCAmXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZXRVcmxQYXJhbVNpZ24odXJsKXtcclxuICAgICAgICAgICAgcmV0dXJuICggIS9cXD8vLnRlc3QoIHVybCApICkgPyAnPycgOiAnJic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEFjdGlvbnMgYW5kIGNhbGxiYWNrcyB0byBmaXJlIGFmdGVyUmVuZGVyXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBhZnRlclJlbmRlckFjdGlvbnMoKXtcclxuICAgICAgICAgICAgdmFyIHNlY3Rpb24gPSAkKFNFQ1RJT05fQUNUSVZFX1NFTClbMF07XHJcblxyXG4gICAgICAgICAgICBhZGRDbGFzcyhzZWN0aW9uLCBDT01QTEVURUxZKTtcclxuXHJcbiAgICAgICAgICAgIGxhenlMb2FkKHNlY3Rpb24pO1xyXG4gICAgICAgICAgICBsYXp5TG9hZE90aGVycygpO1xyXG4gICAgICAgICAgICBwbGF5TWVkaWEoc2VjdGlvbik7XHJcblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLnNjcm9sbE92ZXJmbG93KXtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLmFmdGVyTG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihpc0Rlc3RpbnlUaGVTdGFydGluZ1NlY3Rpb24oKSAmJiBpc0Z1bmN0aW9uKG9wdGlvbnMuYWZ0ZXJMb2FkKSApe1xyXG4gICAgICAgICAgICAgICAgZmlyZUNhbGxiYWNrKCdhZnRlckxvYWQnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlU2VjdGlvbjogc2VjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBzZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogbnVsbCxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9mb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgY2FsbGJhY2sgKHRvIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUhKVxyXG4gICAgICAgICAgICAgICAgICAgIGFuY2hvckxpbms6IHNlY3Rpb24uZ2V0QXR0cmlidXRlKCdkYXRhLWFuY2hvcicpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlY3Rpb25JbmRleDogaW5kZXgoc2VjdGlvbiwgU0VDVElPTl9TRUwpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoaXNGdW5jdGlvbihvcHRpb25zLmFmdGVyUmVuZGVyKSl7XHJcbiAgICAgICAgICAgICAgICBmaXJlQ2FsbGJhY2soJ2FmdGVyUmVuZGVyJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogRGV0ZXJtaW5lcyBpZiB0aGUgVVJMIGFuY2hvciBkZXN0aW55IGlzIHRoZSBzdGFydGluZyBzZWN0aW9uICh0aGUgb25lIHVzaW5nICdhY3RpdmUnIGNsYXNzIGJlZm9yZSBpbml0aWFsaXphdGlvbilcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGlzRGVzdGlueVRoZVN0YXJ0aW5nU2VjdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgYW5jaG9yID0gZ2V0QW5jaG9yc1VSTCgpO1xyXG4gICAgICAgICAgICB2YXIgZGVzdGluYXRpb25TZWN0aW9uID0gZ2V0U2VjdGlvbkJ5QW5jaG9yKGFuY2hvci5zZWN0aW9uKTtcclxuICAgICAgICAgICAgcmV0dXJuICFhbmNob3Iuc2VjdGlvbiB8fCAhZGVzdGluYXRpb25TZWN0aW9uIHx8IHR5cGVvZiBkZXN0aW5hdGlvblNlY3Rpb24gIT09J3VuZGVmaW5lZCcgJiYgaW5kZXgoZGVzdGluYXRpb25TZWN0aW9uKSA9PT0gaW5kZXgoc3RhcnRpbmdTZWN0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBpc1Njcm9sbGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBsYXN0U2Nyb2xsID0gMDtcclxuXHJcbiAgICAgICAgLy93aGVuIHNjcm9sbGluZy4uLlxyXG4gICAgICAgIGZ1bmN0aW9uIHNjcm9sbEhhbmRsZXIoKXtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRTZWN0aW9uO1xyXG5cclxuICAgICAgICAgICAgaWYoaXNSZXNpemluZyl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKCFvcHRpb25zLmF1dG9TY3JvbGxpbmcgfHwgb3B0aW9ucy5zY3JvbGxCYXIpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRTY3JvbGwgPSBnZXRTY3JvbGxUb3AoKTtcclxuICAgICAgICAgICAgICAgIHZhciBzY3JvbGxEaXJlY3Rpb24gPSBnZXRTY3JvbGxEaXJlY3Rpb24oY3VycmVudFNjcm9sbCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmlzaWJsZVNlY3Rpb25JbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2NyZWVuX21pZCA9IGN1cnJlbnRTY3JvbGwgKyAoZ2V0V2luZG93SGVpZ2h0KCkgLyAyLjApO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlzQXRCb3R0b20gPSAkYm9keS5vZmZzZXRIZWlnaHQgLSBnZXRXaW5kb3dIZWlnaHQoKSA9PT0gY3VycmVudFNjcm9sbDtcclxuICAgICAgICAgICAgICAgIHZhciBzZWN0aW9ucyA9ICAkKFNFQ1RJT05fU0VMKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3doZW4gdXNpbmcgYGF1dG8taGVpZ2h0YCBmb3IgYSBzbWFsbCBsYXN0IHNlY3Rpb24gaXQgd29uJ3QgYmUgY2VudGVyZWQgaW4gdGhlIHZpZXdwb3J0XHJcbiAgICAgICAgICAgICAgICBpZihpc0F0Qm90dG9tKXtcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlU2VjdGlvbkluZGV4ID0gc2VjdGlvbnMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vaXMgYXQgdG9wPyB3aGVuIHVzaW5nIGBhdXRvLWhlaWdodGAgZm9yIGEgc21hbGwgZmlyc3Qgc2VjdGlvbiBpdCB3b24ndCBiZSBjZW50ZXJlZCBpbiB0aGUgdmlld3BvcnRcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoIWN1cnJlbnRTY3JvbGwpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGVTZWN0aW9uSW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vdGFraW5nIHRoZSBzZWN0aW9uIHdoaWNoIGlzIHNob3dpbmcgbW9yZSBjb250ZW50IGluIHRoZSB2aWV3cG9ydFxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlY3Rpb25zLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZWN0aW9uID0gc2VjdGlvbnNbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQaWNrIHRoZSB0aGUgbGFzdCBzZWN0aW9uIHdoaWNoIHBhc3NlcyB0aGUgbWlkZGxlIGxpbmUgb2YgdGhlIHNjcmVlbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlY3Rpb24ub2Zmc2V0VG9wIDw9IHNjcmVlbl9taWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGVTZWN0aW9uSW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKGlzQ29tcGxldGVseUluVmlld1BvcnQoc2Nyb2xsRGlyZWN0aW9uKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIWhhc0NsYXNzKCQoU0VDVElPTl9BQ1RJVkVfU0VMKVswXSwgQ09NUExFVEVMWSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRDbGFzcygkKFNFQ1RJT05fQUNUSVZFX1NFTClbMF0sIENPTVBMRVRFTFkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVDbGFzcyhzaWJsaW5ncygkKFNFQ1RJT05fQUNUSVZFX1NFTClbMF0pLCBDT01QTEVURUxZKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy9nZXRpbmcgdGhlIGxhc3Qgb25lLCB0aGUgY3VycmVudCBvbmUgb24gdGhlIHNjcmVlblxyXG4gICAgICAgICAgICAgICAgY3VycmVudFNlY3Rpb24gPSBzZWN0aW9uc1t2aXNpYmxlU2VjdGlvbkluZGV4XTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3NldHRpbmcgdGhlIHZpc2libGUgc2VjdGlvbiBhcyBhY3RpdmUgd2hlbiBtYW51YWxseSBzY3JvbGxpbmdcclxuICAgICAgICAgICAgICAgIC8vZXhlY3V0aW5nIG9ubHkgb25jZSB0aGUgZmlyc3QgdGltZSB3ZSByZWFjaCB0aGUgc2VjdGlvblxyXG4gICAgICAgICAgICAgICAgaWYoIWhhc0NsYXNzKGN1cnJlbnRTZWN0aW9uLCBBQ1RJVkUpKXtcclxuICAgICAgICAgICAgICAgICAgICBpc1Njcm9sbGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlYXZpbmdTZWN0aW9uID0gJChTRUNUSU9OX0FDVElWRV9TRUwpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsZWF2aW5nU2VjdGlvbkluZGV4ID0gaW5kZXgobGVhdmluZ1NlY3Rpb24sIFNFQ1RJT05fU0VMKSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHlNb3ZlbWVudCA9IGdldFltb3ZlbWVudChjdXJyZW50U2VjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFuY2hvckxpbmsgID0gY3VycmVudFNlY3Rpb24uZ2V0QXR0cmlidXRlKCdkYXRhLWFuY2hvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWN0aW9uSW5kZXggPSBpbmRleChjdXJyZW50U2VjdGlvbiwgU0VDVElPTl9TRUwpICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aXZlU2xpZGUgPSAkKFNMSURFX0FDVElWRV9TRUwsIGN1cnJlbnRTZWN0aW9uKVswXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVBbmNob3JMaW5rO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjYWxsYmFja3NQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVNlY3Rpb246IGxlYXZpbmdTZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uSW5kZXg6IHNlY3Rpb25JbmRleCAtMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yTGluazogYW5jaG9yTGluayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogY3VycmVudFNlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZpbmdTZWN0aW9uOiBsZWF2aW5nU2VjdGlvbkluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IHlNb3ZlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGFjdGl2ZVNsaWRlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVBbmNob3JMaW5rID0gYWN0aXZlU2xpZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWFuY2hvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZUluZGV4ID0gaW5kZXgoYWN0aXZlU2xpZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY2FuU2Nyb2xsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkQ2xhc3MoY3VycmVudFNlY3Rpb24sIEFDVElWRSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKHNpYmxpbmdzKGN1cnJlbnRTZWN0aW9uKSwgQUNUSVZFKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzRnVuY3Rpb24oIG9wdGlvbnMub25MZWF2ZSApKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcmVDYWxsYmFjaygnb25MZWF2ZScsIGNhbGxiYWNrc1BhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNGdW5jdGlvbiggb3B0aW9ucy5hZnRlckxvYWQgKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJlQ2FsbGJhY2soJ2FmdGVyTG9hZCcsIGNhbGxiYWNrc1BhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BNZWRpYShsZWF2aW5nU2VjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhenlMb2FkKGN1cnJlbnRTZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheU1lZGlhKGN1cnJlbnRTZWN0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2YXRlTWVudUFuZE5hdihhbmNob3JMaW5rLCBzZWN0aW9uSW5kZXggLSAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMuYW5jaG9ycy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9uZWVkZWQgdG8gZW50ZXIgaW4gaGFzaENoYW5nZSBldmVudCB3aGVuIHVzaW5nIHRoZSBtZW51IHdpdGggYW5jaG9yIGxpbmtzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0U2Nyb2xsZWREZXN0aW55ID0gYW5jaG9yTGluaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZShzbGlkZUluZGV4LCBzbGlkZUFuY2hvckxpbmssIGFuY2hvckxpbmssIHNlY3Rpb25JbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL3NtYWxsIHRpbWVvdXQgaW4gb3JkZXIgdG8gYXZvaWQgZW50ZXJpbmcgaW4gaGFzaENoYW5nZSBldmVudCB3aGVuIHNjcm9sbGluZyBpcyBub3QgZmluaXNoZWQgeWV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHNjcm9sbElkKTtcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTY3JvbGxpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMuZml0VG9TZWN0aW9uKXtcclxuICAgICAgICAgICAgICAgICAgICAvL2ZvciB0aGUgYXV0byBhZGp1c3Qgb2YgdGhlIHZpZXdwb3J0IHRvIGZpdCBhIHdob2xlIHNlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoc2Nyb2xsSWQyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsSWQyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NoZWNraW5nIGl0IGFnYWluIGluIGNhc2UgaXQgY2hhbmdlZCBkdXJpbmcgdGhlIGRlbGF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMuZml0VG9TZWN0aW9uICYmXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pcyB0aGUgZGVzdGluYXRpb24gZWxlbWVudCBiaWdnZXIgdGhhbiB0aGUgdmlld3BvcnQ/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFNFQ1RJT05fQUNUSVZFX1NFTClbMF0ub2Zmc2V0SGVpZ2h0IDw9IHdpbmRvd3NIZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpdFRvU2VjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgb3B0aW9ucy5maXRUb1NlY3Rpb25EZWxheSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogRml0cyB0aGUgc2l0ZSB0byB0aGUgbmVhcmVzdCBhY3RpdmUgc2VjdGlvblxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZml0VG9TZWN0aW9uKCl7XHJcbiAgICAgICAgICAgIC8vY2hlY2tpbmcgZml0VG9TZWN0aW9uIGFnYWluIGluIGNhc2UgaXQgd2FzIHNldCB0byBmYWxzZSBiZWZvcmUgdGhlIHRpbWVvdXQgZGVsYXlcclxuICAgICAgICAgICAgaWYoY2FuU2Nyb2xsKXtcclxuICAgICAgICAgICAgICAgIC8vYWxsb3dzIHRvIHNjcm9sbCB0byBhbiBhY3RpdmUgc2VjdGlvbiBhbmRcclxuICAgICAgICAgICAgICAgIC8vaWYgdGhlIHNlY3Rpb24gaXMgYWxyZWFkeSBhY3RpdmUsIHdlIHByZXZlbnQgZmlyaW5nIGNhbGxiYWNrc1xyXG4gICAgICAgICAgICAgICAgaXNSZXNpemluZyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsUGFnZSgkKFNFQ1RJT05fQUNUSVZFX1NFTClbMF0pO1xyXG4gICAgICAgICAgICAgICAgaXNSZXNpemluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIERldGVybWluZXMgd2hldGhlciB0aGUgYWN0aXZlIHNlY3Rpb24gaGFzIHNlZW4gaW4gaXRzIHdob2xlIG9yIG5vdC5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGlzQ29tcGxldGVseUluVmlld1BvcnQobW92ZW1lbnQpe1xyXG4gICAgICAgICAgICB2YXIgdG9wID0gJChTRUNUSU9OX0FDVElWRV9TRUwpWzBdLm9mZnNldFRvcDtcclxuICAgICAgICAgICAgdmFyIGJvdHRvbSA9IHRvcCArIGdldFdpbmRvd0hlaWdodCgpO1xyXG5cclxuICAgICAgICAgICAgaWYobW92ZW1lbnQgPT0gJ3VwJyl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYm90dG9tID49IChnZXRTY3JvbGxUb3AoKSArIGdldFdpbmRvd0hlaWdodCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdG9wIDw9IGdldFNjcm9sbFRvcCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBzZWN0aW9uIGlzIGluIHRoZSB2aWV3cG9ydCBvciBub3QuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBpc1NlY3Rpb25JblZpZXdwb3J0IChlbCkge1xyXG4gICAgICAgICAgICB2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICB2YXIgdG9wID0gcmVjdC50b3A7XHJcbiAgICAgICAgICAgIHZhciBib3R0b20gPSByZWN0LmJvdHRvbTtcclxuXHJcbiAgICAgICAgICAgIC8vc29tZXRpbWVzIHRoZXJlJ3MgYSAxcHggb2Zmc2V0IG9uIHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbiBldmVuIHdoZW4gdGhlIFxyXG4gICAgICAgICAgICAvL3NlY3Rpb24ncyBoZWlnaHQgaXMgdGhlIHdpbmRvdy5pbm5lckhlaWdodCBvbmUuIEkgZ3Vlc3MgYmVjYXVzZSBwaXhlbHMgd29uJ3QgYWxsb3cgZGVjaW1hbHMuXHJcbiAgICAgICAgICAgIC8vdXNpbmcgdGhpcyBwcmV2ZW50cyBmcm9tIGxhenlMb2FkaW5nIHRoZSBzZWN0aW9uIHRoYXQgaXMgbm90IHlldCB2aXNpYmxlIFxyXG4gICAgICAgICAgICAvLyhvbmx5IDEgcGl4ZWwgb2Zmc2V0IGlzKVxyXG4gICAgICAgICAgICB2YXIgcGl4ZWxPZmZzZXQgPSAyO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGlzVG9wSW5WaWV3ID0gdG9wICsgcGl4ZWxPZmZzZXQgPCB3aW5kb3dzSGVpZ2h0ICYmIHRvcCA+IDA7XHJcbiAgICAgICAgICAgIHZhciBpc0JvdHRvbUluVmlldyA9IGJvdHRvbSA+IHBpeGVsT2Zmc2V0ICYmIGJvdHRvbSA8IHdpbmRvd3NIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gaXNUb3BJblZpZXcgfHwgaXNCb3R0b21JblZpZXc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEdldHMgdGhlIGRpcmVjdG9uIG9mIHRoZSB0aGUgc2Nyb2xsaW5nIGZpcmVkIGJ5IHRoZSBzY3JvbGwgZXZlbnQuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZXRTY3JvbGxEaXJlY3Rpb24oY3VycmVudFNjcm9sbCl7XHJcbiAgICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSBjdXJyZW50U2Nyb2xsID4gbGFzdFNjcm9sbCA/ICdkb3duJyA6ICd1cCc7XHJcblxyXG4gICAgICAgICAgICBsYXN0U2Nyb2xsID0gY3VycmVudFNjcm9sbDtcclxuXHJcbiAgICAgICAgICAgIC8vbmVlZGVkIGZvciBhdXRvLWhlaWdodCBzZWN0aW9ucyB0byBkZXRlcm1pbmUgaWYgd2Ugd2FudCB0byBzY3JvbGwgdG8gdGhlIHRvcCBvciBib3R0b20gb2YgdGhlIGRlc3RpbmF0aW9uXHJcbiAgICAgICAgICAgIHByZXZpb3VzRGVzdFRvcCA9IGN1cnJlbnRTY3JvbGw7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBEZXRlcm1pbmVzIHRoZSB3YXkgb2Ygc2Nyb2xsaW5nIHVwIG9yIGRvd246XHJcbiAgICAgICAgKiBieSAnYXV0b21hdGljYWxseScgc2Nyb2xsaW5nIGEgc2VjdGlvbiBvciBieSB1c2luZyB0aGUgZGVmYXVsdCBhbmQgbm9ybWFsIHNjcm9sbGluZy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNjcm9sbGluZyh0eXBlKXtcclxuICAgICAgICAgICAgaWYgKCFpc1Njcm9sbEFsbG93ZWQubVt0eXBlXSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBzY3JvbGxTZWN0aW9uID0gKHR5cGUgPT09ICdkb3duJykgPyBtb3ZlU2VjdGlvbkRvd24gOiBtb3ZlU2VjdGlvblVwO1xyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5zY3JvbGxPdmVyZmxvdyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsYWJsZSA9IG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLnNjcm9sbGFibGUoJChTRUNUSU9OX0FDVElWRV9TRUwpWzBdKTtcclxuICAgICAgICAgICAgICAgIHZhciBjaGVjayA9ICh0eXBlID09PSAnZG93bicpID8gJ2JvdHRvbScgOiAndG9wJztcclxuXHJcbiAgICAgICAgICAgICAgICBpZihzY3JvbGxhYmxlICE9IG51bGwgKXtcclxuICAgICAgICAgICAgICAgICAgICAvL2lzIHRoZSBzY3JvbGxiYXIgYXQgdGhlIHN0YXJ0L2VuZCBvZiB0aGUgc2Nyb2xsP1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLmlzU2Nyb2xsZWQoY2hlY2ssIHNjcm9sbGFibGUpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsU2VjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtb3ZlZCB1cC9kb3duXHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsU2VjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIC8vIG1vdmVkIHVwL2Rvd25cclxuICAgICAgICAgICAgICAgIHNjcm9sbFNlY3Rpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAqIFByZXZlbnRpbmcgYm91bmNpbmcgaW4gaU9TICMyMjg1XHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBwcmV2ZW50Qm91bmNpbmcoZSl7XHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuYXV0b1Njcm9sbGluZyAmJiBpc1JlYWxseVRvdWNoKGUpICYmIGlzU2Nyb2xsQWxsb3dlZC5tLnVwKXtcclxuICAgICAgICAgICAgICAgIC8vcHJldmVudGluZyB0aGUgZWFzaW5nIG9uIGlPUyBkZXZpY2VzXHJcbiAgICAgICAgICAgICAgICBwcmV2ZW50RGVmYXVsdChlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHRvdWNoU3RhcnRZID0gMDtcclxuICAgICAgICB2YXIgdG91Y2hTdGFydFggPSAwO1xyXG4gICAgICAgIHZhciB0b3VjaEVuZFkgPSAwO1xyXG4gICAgICAgIHZhciB0b3VjaEVuZFggPSAwO1xyXG5cclxuICAgICAgICAvKiBEZXRlY3RpbmcgdG91Y2ggZXZlbnRzXHJcblxyXG4gICAgICAgICogQXMgd2UgYXJlIGNoYW5naW5nIHRoZSB0b3AgcHJvcGVydHkgb2YgdGhlIHBhZ2Ugb24gc2Nyb2xsaW5nLCB3ZSBjYW4gbm90IHVzZSB0aGUgdHJhZGl0aW9uYWwgd2F5IHRvIGRldGVjdCBpdC5cclxuICAgICAgICAqIFRoaXMgd2F5LCB0aGUgdG91Y2hzdGFydCBhbmQgdGhlIHRvdWNoIG1vdmVzIHNob3dzIGFuIHNtYWxsIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGVtIHdoaWNoIGlzIHRoZVxyXG4gICAgICAgICogdXNlZCBvbmUgdG8gZGV0ZXJtaW5lIHRoZSBkaXJlY3Rpb24uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiB0b3VjaE1vdmVIYW5kbGVyKGUpe1xyXG4gICAgICAgICAgICB2YXIgYWN0aXZlU2VjdGlvbiA9IGNsb3Nlc3QoZS50YXJnZXQsIFNFQ1RJT05fU0VMKSB8fMKgJChTRUNUSU9OX0FDVElWRV9TRUwpWzBdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzUmVhbGx5VG91Y2goZSkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9ucy5hdXRvU2Nyb2xsaW5nKXtcclxuICAgICAgICAgICAgICAgICAgICAvL3ByZXZlbnRpbmcgdGhlIGVhc2luZyBvbiBpT1MgZGV2aWNlc1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0b3VjaEV2ZW50cyA9IGdldEV2ZW50c1BhZ2UoZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdG91Y2hFbmRZID0gdG91Y2hFdmVudHMueTtcclxuICAgICAgICAgICAgICAgIHRvdWNoRW5kWCA9IHRvdWNoRXZlbnRzLng7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9pZiBtb3ZlbWVudCBpbiB0aGUgWCBheHlzIGlzIGdyZWF0ZXIgdGhhbiBpbiB0aGUgWSBhbmQgdGhlIGN1cnJlY3Qgc2VjdGlvbiBoYXMgc2xpZGVzLi4uXHJcbiAgICAgICAgICAgICAgICBpZiAoJChTTElERVNfV1JBUFBFUl9TRUwsIGFjdGl2ZVNlY3Rpb24pLmxlbmd0aCAmJiBNYXRoLmFicyh0b3VjaFN0YXJ0WCAtIHRvdWNoRW5kWCkgPiAoTWF0aC5hYnModG91Y2hTdGFydFkgLSB0b3VjaEVuZFkpKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2lzIHRoZSBtb3ZlbWVudCBncmVhdGVyIHRoYW4gdGhlIG1pbmltdW0gcmVzaXN0YW5jZSB0byBzY3JvbGw/XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzbGlkZU1vdmluZyAmJiBNYXRoLmFicyh0b3VjaFN0YXJ0WCAtIHRvdWNoRW5kWCkgPiAoZ2V0V2luZG93V2lkdGgoKSAvIDEwMCAqIG9wdGlvbnMudG91Y2hTZW5zaXRpdml0eSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvdWNoU3RhcnRYID4gdG91Y2hFbmRYKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc1Njcm9sbEFsbG93ZWQubS5yaWdodCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVNsaWRlUmlnaHQoYWN0aXZlU2VjdGlvbik7IC8vbmV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNTY3JvbGxBbGxvd2VkLm0ubGVmdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVNsaWRlTGVmdChhY3RpdmVTZWN0aW9uKTsgLy9wcmV2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy92ZXJ0aWNhbCBzY3JvbGxpbmcgKG9ubHkgd2hlbiBhdXRvU2Nyb2xsaW5nIGlzIGVuYWJsZWQpXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKG9wdGlvbnMuYXV0b1Njcm9sbGluZyAmJiBjYW5TY3JvbGwpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2lzIHRoZSBtb3ZlbWVudCBncmVhdGVyIHRoYW4gdGhlIG1pbmltdW0gcmVzaXN0YW5jZSB0byBzY3JvbGw/XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRvdWNoU3RhcnRZIC0gdG91Y2hFbmRZKSA+ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAxMDAgKiBvcHRpb25zLnRvdWNoU2Vuc2l0aXZpdHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b3VjaFN0YXJ0WSA+IHRvdWNoRW5kWSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsaW5nKCdkb3duJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodG91Y2hFbmRZID4gdG91Y2hTdGFydFkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGluZygndXAnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBBcyBJRSA+PSAxMCBmaXJlcyBib3RoIHRvdWNoIGFuZCBtb3VzZSBldmVudHMgd2hlbiB1c2luZyBhIG1vdXNlIGluIGEgdG91Y2hzY3JlZW5cclxuICAgICAgICAqIHRoaXMgd2F5IHdlIG1ha2Ugc3VyZSB0aGF0IGlzIHJlYWxseSBhIHRvdWNoIGV2ZW50IHdoYXQgSUUgaXMgZGV0ZWN0aW5nLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gaXNSZWFsbHlUb3VjaChlKXtcclxuICAgICAgICAgICAgLy9pZiBpcyBub3QgSUUgICB8fCAgSUUgaXMgZGV0ZWN0aW5nIGB0b3VjaGAgb3IgYHBlbmBcclxuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBlLnBvaW50ZXJUeXBlID09PSAndW5kZWZpbmVkJyB8fCBlLnBvaW50ZXJUeXBlICE9ICdtb3VzZSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEhhbmRsZXIgZm9yIHRoZSB0b3VjaCBzdGFydCBldmVudC5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHRvdWNoU3RhcnRIYW5kbGVyKGUpe1xyXG5cclxuICAgICAgICAgICAgLy9zdG9wcGluZyB0aGUgYXV0byBzY3JvbGwgdG8gYWRqdXN0IHRvIGEgc2VjdGlvblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLmZpdFRvU2VjdGlvbil7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVBbmltYXRpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoaXNSZWFsbHlUb3VjaChlKSl7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG91Y2hFdmVudHMgPSBnZXRFdmVudHNQYWdlKGUpO1xyXG4gICAgICAgICAgICAgICAgdG91Y2hTdGFydFkgPSB0b3VjaEV2ZW50cy55O1xyXG4gICAgICAgICAgICAgICAgdG91Y2hTdGFydFggPSB0b3VjaEV2ZW50cy54O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEdldHMgdGhlIGF2ZXJhZ2Ugb2YgdGhlIGxhc3QgYG51bWJlcmAgZWxlbWVudHMgb2YgdGhlIGdpdmVuIGFycmF5LlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0QXZlcmFnZShlbGVtZW50cywgbnVtYmVyKXtcclxuICAgICAgICAgICAgdmFyIHN1bSA9IDA7XHJcblxyXG4gICAgICAgICAgICAvL3Rha2luZyBgbnVtYmVyYCBlbGVtZW50cyBmcm9tIHRoZSBlbmQgdG8gbWFrZSB0aGUgYXZlcmFnZSwgaWYgdGhlcmUgYXJlIG5vdCBlbm91Z2h0LCAxXHJcbiAgICAgICAgICAgIHZhciBsYXN0RWxlbWVudHMgPSBlbGVtZW50cy5zbGljZShNYXRoLm1heChlbGVtZW50cy5sZW5ndGggLSBudW1iZXIsIDEpKTtcclxuXHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsYXN0RWxlbWVudHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgc3VtID0gc3VtICsgbGFzdEVsZW1lbnRzW2ldO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5jZWlsKHN1bS9udW1iZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGV0ZWN0aW5nIG1vdXNld2hlZWwgc2Nyb2xsaW5nXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBodHRwOi8vYmxvZ3Muc2l0ZXBvaW50c3RhdGljLmNvbS9leGFtcGxlcy90ZWNoL21vdXNlLXdoZWVsL2luZGV4Lmh0bWxcclxuICAgICAgICAgKiBodHRwOi8vd3d3LnNpdGVwb2ludC5jb20vaHRtbDUtamF2YXNjcmlwdC1tb3VzZS13aGVlbC9cclxuICAgICAgICAgKi9cclxuICAgICAgICB2YXIgcHJldlRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gTW91c2VXaGVlbEhhbmRsZXIoZSkge1xyXG4gICAgICAgICAgICB2YXIgY3VyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICB2YXIgaXNOb3JtYWxTY3JvbGwgPSBoYXNDbGFzcygkKENPTVBMRVRFTFlfU0VMKVswXSwgTk9STUFMX1NDUk9MTCk7XHJcblxyXG4gICAgICAgICAgICAvL2lzIHNjcm9sbCBhbGxvd2VkP1xyXG4gICAgICAgICAgICBpZiAoIWlzU2Nyb2xsQWxsb3dlZC5tLmRvd24gJiYgIWlzU2Nyb2xsQWxsb3dlZC5tLnVwKSB7XHJcbiAgICAgICAgICAgICAgICBwcmV2ZW50RGVmYXVsdChlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9hdXRvc2Nyb2xsaW5nIGFuZCBub3Qgem9vbWluZz9cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5hdXRvU2Nyb2xsaW5nICYmICFjb250cm9sUHJlc3NlZCAmJiAhaXNOb3JtYWxTY3JvbGwpe1xyXG4gICAgICAgICAgICAgICAgLy8gY3Jvc3MtYnJvd3NlciB3aGVlbCBkZWx0YVxyXG4gICAgICAgICAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gZS53aGVlbERlbHRhIHx8IC1lLmRlbHRhWSB8fCAtZS5kZXRhaWw7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGVsdGEgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgdmFsdWUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaG9yaXpvbnRhbERldGVjdGlvbiA9IHR5cGVvZiBlLndoZWVsRGVsdGFYICE9PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZS5kZWx0YVggIT09ICd1bmRlZmluZWQnO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlzU2Nyb2xsaW5nVmVydGljYWxseSA9IChNYXRoLmFicyhlLndoZWVsRGVsdGFYKSA8IE1hdGguYWJzKGUud2hlZWxEZWx0YSkpIHx8IChNYXRoLmFicyhlLmRlbHRhWCApIDwgTWF0aC5hYnMoZS5kZWx0YVkpIHx8ICFob3Jpem9udGFsRGV0ZWN0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL0xpbWl0aW5nIHRoZSBhcnJheSB0byAxNTAgKGxldHMgbm90IHdhc3RlIG1lbW9yeSEpXHJcbiAgICAgICAgICAgICAgICBpZihzY3JvbGxpbmdzLmxlbmd0aCA+IDE0OSl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsaW5ncy5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8va2VlcGluZyByZWNvcmQgb2YgdGhlIHByZXZpb3VzIHNjcm9sbGluZ3NcclxuICAgICAgICAgICAgICAgIHNjcm9sbGluZ3MucHVzaChNYXRoLmFicyh2YWx1ZSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vcHJldmVudGluZyB0byBzY3JvbGwgdGhlIHNpdGUgb24gbW91c2Ugd2hlZWwgd2hlbiBzY3JvbGxiYXIgaXMgcHJlc2VudFxyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9ucy5zY3JvbGxCYXIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vdGltZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIGxhc3Qgc2Nyb2xsIGFuZCB0aGUgY3VycmVudCBvbmVcclxuICAgICAgICAgICAgICAgIHZhciB0aW1lRGlmZiA9IGN1clRpbWUtcHJldlRpbWU7XHJcbiAgICAgICAgICAgICAgICBwcmV2VGltZSA9IGN1clRpbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9oYXZlbid0IHRoZXkgc2Nyb2xsZWQgaW4gYSB3aGlsZT9cclxuICAgICAgICAgICAgICAgIC8vKGVub3VnaCB0byBiZSBjb25zaWRlciBhIGRpZmZlcmVudCBzY3JvbGxpbmcgYWN0aW9uIHRvIHNjcm9sbCBhbm90aGVyIHNlY3Rpb24pXHJcbiAgICAgICAgICAgICAgICBpZih0aW1lRGlmZiA+IDIwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9lbXB0eWluZyB0aGUgYXJyYXksIHdlIGRvbnQgY2FyZSBhYm91dCBvbGQgc2Nyb2xsaW5ncyBmb3Igb3VyIGF2ZXJhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsaW5ncyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKGNhblNjcm9sbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF2ZXJhZ2VFbmQgPSBnZXRBdmVyYWdlKHNjcm9sbGluZ3MsIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXZlcmFnZU1pZGRsZSA9IGdldEF2ZXJhZ2Uoc2Nyb2xsaW5ncywgNzApO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpc0FjY2VsZXJhdGluZyA9IGF2ZXJhZ2VFbmQgPj0gYXZlcmFnZU1pZGRsZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy90byBhdm9pZCBkb3VibGUgc3dpcGVzLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXNBY2NlbGVyYXRpbmcgJiYgaXNTY3JvbGxpbmdWZXJ0aWNhbGx5KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9zY3JvbGxpbmcgZG93bj9cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlbHRhIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsaW5nKCdkb3duJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3Njcm9sbGluZyB1cD9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsaW5nKCd1cCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5maXRUb1NlY3Rpb24pe1xyXG4gICAgICAgICAgICAgICAgLy9zdG9wcGluZyB0aGUgYXV0byBzY3JvbGwgdG8gYWRqdXN0IHRvIGEgc2VjdGlvblxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQW5pbWF0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2xpZGVzIGEgc2xpZGVyIHRvIHRoZSBnaXZlbiBkaXJlY3Rpb24uXHJcbiAgICAgICAgKiBPcHRpb25hbCBgc2VjdGlvbmAgcGFyYW0uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBtb3ZlU2xpZGUoZGlyZWN0aW9uLCBzZWN0aW9uKXtcclxuICAgICAgICAgICAgdmFyIGFjdGl2ZVNlY3Rpb24gPSBzZWN0aW9uID09IG51bGwgPyAkKFNFQ1RJT05fQUNUSVZFX1NFTClbMF0gOiBzZWN0aW9uO1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVzID0gJChTTElERVNfV1JBUFBFUl9TRUwsIGFjdGl2ZVNlY3Rpb24pWzBdO1xyXG5cclxuICAgICAgICAgICAgLy8gbW9yZSB0aGFuIG9uZSBzbGlkZSBuZWVkZWQgYW5kIG5vdGhpbmcgc2hvdWxkIGJlIHNsaWRpbmdcclxuICAgICAgICAgICAgaWYgKHNsaWRlcyA9PSBudWxsIHx8IHNsaWRlTW92aW5nIHx8ICQoU0xJREVfU0VMLCBzbGlkZXMpLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRTbGlkZSA9ICQoU0xJREVfQUNUSVZFX1NFTCwgc2xpZGVzKVswXTtcclxuICAgICAgICAgICAgdmFyIGRlc3RpbnkgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYoZGlyZWN0aW9uID09PSAnbGVmdCcpe1xyXG4gICAgICAgICAgICAgICAgZGVzdGlueSA9IHByZXZVbnRpbChjdXJyZW50U2xpZGUsIFNMSURFX1NFTCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgZGVzdGlueSA9IG5leHRVbnRpbChjdXJyZW50U2xpZGUsIFNMSURFX1NFTCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vaXNuJ3QgdGhlcmUgYSBuZXh0IHNsaWRlIGluIHRoZSBzZWN1ZW5jZT9cclxuICAgICAgICAgICAgaWYoZGVzdGlueSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIC8vcmVzcGVjdCBsb29wSG9yaXpvbnRhbCBzZXR0aW5cclxuICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucy5sb29wSG9yaXpvbnRhbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzbGlkZVNpYmxpbmdzID0gc2libGluZ3MoY3VycmVudFNsaWRlKTtcclxuICAgICAgICAgICAgICAgIGlmKGRpcmVjdGlvbiA9PT0gJ2xlZnQnKXtcclxuICAgICAgICAgICAgICAgICAgICBkZXN0aW55ID0gc2xpZGVTaWJsaW5nc1tzbGlkZVNpYmxpbmdzLmxlbmd0aCAtIDFdOyAvL2xhc3RcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbnkgPSBzbGlkZVNpYmxpbmdzWzBdOyAvL2ZpcnN0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNsaWRlTW92aW5nID0gdHJ1ZSAmJiAhRlAudGVzdC5pc1Rlc3Rpbmc7XHJcbiAgICAgICAgICAgIGxhbmRzY2FwZVNjcm9sbChzbGlkZXMsIGRlc3RpbnksIGRpcmVjdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIE1haW50YWlucyB0aGUgYWN0aXZlIHNsaWRlcyBpbiB0aGUgdmlld3BvcnRcclxuICAgICAgICAqIChCZWNhdXNlIHRoZSBgc2Nyb2xsYCBhbmltYXRpb24gbWlnaHQgZ2V0IGxvc3Qgd2l0aCBzb21lIGFjdGlvbnMsIHN1Y2ggYXMgd2hlbiB1c2luZyBjb250aW51b3VzVmVydGljYWwpXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBrZWVwU2xpZGVzUG9zaXRpb24oKXtcclxuICAgICAgICAgICAgdmFyIGFjdGl2ZVNsaWRlcyA9ICQoU0xJREVfQUNUSVZFX1NFTCk7XHJcbiAgICAgICAgICAgIGZvciggdmFyIGkgPTA7IGk8YWN0aXZlU2xpZGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIHNpbGVudExhbmRzY2FwZVNjcm9sbChhY3RpdmVTbGlkZXNbaV0sICdpbnRlcm5hbCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcHJldmlvdXNEZXN0VG9wID0gMDtcclxuICAgICAgICAvKipcclxuICAgICAgICAqIFJldHVybnMgdGhlIGRlc3RpbmF0aW9uIFkgcG9zaXRpb24gYmFzZWQgb24gdGhlIHNjcm9sbGluZyBkaXJlY3Rpb24gYW5kXHJcbiAgICAgICAgKiB0aGUgaGVpZ2h0IG9mIHRoZSBzZWN0aW9uLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0RGVzdGluYXRpb25Qb3NpdGlvbihlbGVtZW50KXtcclxuICAgICAgICAgICAgdmFyIGVsZW1lbnRIZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgdmFyIGVsZW1lbnRUb3AgPSBlbGVtZW50Lm9mZnNldFRvcDtcclxuXHJcbiAgICAgICAgICAgIC8vdG9wIG9mIHRoZSBkZXNpbmF0aW9uIHdpbGwgYmUgYXQgdGhlIHRvcCBvZiB0aGUgdmlld3BvcnRcclxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gZWxlbWVudFRvcDtcclxuICAgICAgICAgICAgdmFyIGlzU2Nyb2xsaW5nRG93biA9ICBlbGVtZW50VG9wID4gcHJldmlvdXNEZXN0VG9wO1xyXG4gICAgICAgICAgICB2YXIgc2VjdGlvbkJvdHRvbSA9IHBvc2l0aW9uIC0gd2luZG93c0hlaWdodCArIGVsZW1lbnRIZWlnaHQ7XHJcbiAgICAgICAgICAgIHZhciBiaWdTZWN0aW9uc0Rlc3RpbmF0aW9uID0gb3B0aW9ucy5iaWdTZWN0aW9uc0Rlc3RpbmF0aW9uO1xyXG5cclxuICAgICAgICAgICAgLy9pcyB0aGUgZGVzdGluYXRpb24gZWxlbWVudCBiaWdnZXIgdGhhbiB0aGUgdmlld3BvcnQ/XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnRIZWlnaHQgPiB3aW5kb3dzSGVpZ2h0KXtcclxuICAgICAgICAgICAgICAgIC8vc2Nyb2xsaW5nIHVwP1xyXG4gICAgICAgICAgICAgICAgaWYoIWlzU2Nyb2xsaW5nRG93biAmJiAhYmlnU2VjdGlvbnNEZXN0aW5hdGlvbiB8fCBiaWdTZWN0aW9uc0Rlc3RpbmF0aW9uID09PSAnYm90dG9tJyApe1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gc2VjdGlvbkJvdHRvbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9zZWN0aW9ucyBlcXVhbCBvciBzbWFsbGVyIHRoYW4gdGhlIHZpZXdwb3J0IGhlaWdodCAmJiBzY3JvbGxpbmcgZG93bj8gfHwgIGlzIHJlc2l6aW5nIGFuZCBpdHMgaW4gdGhlIGxhc3Qgc2VjdGlvblxyXG4gICAgICAgICAgICBlbHNlIGlmKGlzU2Nyb2xsaW5nRG93biB8fCAoaXNSZXNpemluZyAmJiBuZXh0KGVsZW1lbnQpID09IG51bGwpICl7XHJcbiAgICAgICAgICAgICAgICAvL1RoZSBib3R0b20gb2YgdGhlIGRlc3RpbmF0aW9uIHdpbGwgYmUgYXQgdGhlIGJvdHRvbSBvZiB0aGUgdmlld3BvcnRcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gc2VjdGlvbkJvdHRvbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgS2VlcGluZyByZWNvcmQgb2YgdGhlIGxhc3Qgc2Nyb2xsZWQgcG9zaXRpb24gdG8gZGV0ZXJtaW5lIHRoZSBzY3JvbGxpbmcgZGlyZWN0aW9uLlxyXG4gICAgICAgICAgICBObyBjb252ZW50aW9uYWwgbWV0aG9kcyBjYW4gYmUgdXNlZCBhcyB0aGUgc2Nyb2xsIGJhciBtaWdodCBub3QgYmUgcHJlc2VudFxyXG4gICAgICAgICAgICBBTkQgdGhlIHNlY3Rpb24gbWlnaHQgbm90IGJlIGFjdGl2ZSBpZiBpdCBpcyBhdXRvLWhlaWdodCBhbmQgZGlkbnQgcmVhY2ggdGhlIG1pZGRsZVxyXG4gICAgICAgICAgICBvZiB0aGUgdmlld3BvcnQuXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHByZXZpb3VzRGVzdFRvcCA9IHBvc2l0aW9uO1xyXG4gICAgICAgICAgICByZXR1cm4gcG9zaXRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNjcm9sbHMgdGhlIHNpdGUgdG8gdGhlIGdpdmVuIGVsZW1lbnQgYW5kIHNjcm9sbHMgdG8gdGhlIHNsaWRlIGlmIGEgY2FsbGJhY2sgaXMgZ2l2ZW4uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzY3JvbGxQYWdlKGVsZW1lbnQsIGNhbGxiYWNrLCBpc01vdmVtZW50VXApe1xyXG4gICAgICAgICAgICBpZihlbGVtZW50ID09IG51bGwpeyByZXR1cm47IH0gLy90aGVyZSdzIG5vIGVsZW1lbnQgdG8gc2Nyb2xsLCBsZWF2aW5nIHRoZSBmdW5jdGlvblxyXG5cclxuICAgICAgICAgICAgdmFyIGR0b3AgPSBnZXREZXN0aW5hdGlvblBvc2l0aW9uKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVBbmNob3JMaW5rO1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVJbmRleDtcclxuXHJcbiAgICAgICAgICAgIC8vbG9jYWwgdmFyaWFibGVzXHJcbiAgICAgICAgICAgIHZhciB2ID0ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcclxuICAgICAgICAgICAgICAgIGlzTW92ZW1lbnRVcDogaXNNb3ZlbWVudFVwLFxyXG4gICAgICAgICAgICAgICAgZHRvcDogZHRvcCxcclxuICAgICAgICAgICAgICAgIHlNb3ZlbWVudDogZ2V0WW1vdmVtZW50KGVsZW1lbnQpLFxyXG4gICAgICAgICAgICAgICAgYW5jaG9yTGluazogZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW5jaG9yJyksXHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uSW5kZXg6IGluZGV4KGVsZW1lbnQsIFNFQ1RJT05fU0VMKSxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVNsaWRlOiAkKFNMSURFX0FDVElWRV9TRUwsIGVsZW1lbnQpWzBdLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlU2VjdGlvbjogJChTRUNUSU9OX0FDVElWRV9TRUwpWzBdLFxyXG4gICAgICAgICAgICAgICAgbGVhdmluZ1NlY3Rpb246IGluZGV4KCQoU0VDVElPTl9BQ1RJVkVfU0VMKSwgU0VDVElPTl9TRUwpICsgMSxcclxuXHJcbiAgICAgICAgICAgICAgICAvL2NhY2hpbmcgdGhlIHZhbHVlIG9mIGlzUmVzaXppbmcgYXQgdGhlIG1vbW1lbnQgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZFxyXG4gICAgICAgICAgICAgICAgLy9iZWNhdXNlIGl0IHdpbGwgYmUgY2hlY2tlZCBsYXRlciBpbnNpZGUgYSBzZXRUaW1lb3V0IGFuZCB0aGUgdmFsdWUgbWlnaHQgY2hhbmdlXHJcbiAgICAgICAgICAgICAgICBsb2NhbElzUmVzaXppbmc6IGlzUmVzaXppbmdcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vcXVpdGluZyB3aGVuIGRlc3RpbmF0aW9uIHNjcm9sbCBpcyB0aGUgc2FtZSBhcyB0aGUgY3VycmVudCBvbmVcclxuICAgICAgICAgICAgaWYoKHYuYWN0aXZlU2VjdGlvbiA9PSBlbGVtZW50ICYmICFpc1Jlc2l6aW5nKSB8fCAob3B0aW9ucy5zY3JvbGxCYXIgJiYgZ2V0U2Nyb2xsVG9wKCkgPT09IHYuZHRvcCAmJiAhaGFzQ2xhc3MoZWxlbWVudCwgQVVUT19IRUlHSFQpICkpeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgICAgIGlmKHYuYWN0aXZlU2xpZGUgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBzbGlkZUFuY2hvckxpbmsgPSB2LmFjdGl2ZVNsaWRlLmdldEF0dHJpYnV0ZSgnZGF0YS1hbmNob3InKTtcclxuICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSBpbmRleCh2LmFjdGl2ZVNsaWRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9jYWxsYmFjayAob25MZWF2ZSkgaWYgdGhlIHNpdGUgaXMgbm90IGp1c3QgcmVzaXppbmcgYW5kIHJlYWRqdXN0aW5nIHRoZSBzbGlkZXNcclxuICAgICAgICAgICAgaWYoIXYubG9jYWxJc1Jlc2l6aW5nKXtcclxuICAgICAgICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSB2LnlNb3ZlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3JlcXVpcmVkIGZvciBjb250aW5vdXNWZXJ0aWNhbFxyXG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIGlzTW92ZW1lbnRVcCAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IGlzTW92ZW1lbnRVcCA/ICd1cCcgOiAnZG93bic7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy9mb3IgdGhlIGNhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICB2LmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihpc0Z1bmN0aW9uKG9wdGlvbnMub25MZWF2ZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGZpcmVDYWxsYmFjaygnb25MZWF2ZScsIHYpID09PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElmIGNvbnRpbnVvdXNWZXJ0aWNhbCAmJiB3ZSBuZWVkIHRvIHdyYXAgYXJvdW5kXHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmF1dG9TY3JvbGxpbmcgJiYgb3B0aW9ucy5jb250aW51b3VzVmVydGljYWwgJiYgdHlwZW9mICh2LmlzTW92ZW1lbnRVcCkgIT09IFwidW5kZWZpbmVkXCIgJiZcclxuICAgICAgICAgICAgICAgICgoIXYuaXNNb3ZlbWVudFVwICYmIHYueU1vdmVtZW50ID09ICd1cCcpIHx8IC8vIEludGVuZGluZyB0byBzY3JvbGwgZG93biBidXQgYWJvdXQgdG8gZ28gdXAgb3JcclxuICAgICAgICAgICAgICAgICh2LmlzTW92ZW1lbnRVcCAmJiB2LnlNb3ZlbWVudCA9PSAnZG93bicpKSkgeyAvLyBpbnRlbmRpbmcgdG8gc2Nyb2xsIHVwIGJ1dCBhYm91dCB0byBnbyBkb3duXHJcblxyXG4gICAgICAgICAgICAgICAgdiA9IGNyZWF0ZUluZmluaXRlU2VjdGlvbnModik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vcGF1c2luZyBtZWRpYSBvZiB0aGUgbGVhdmluZyBzZWN0aW9uIChpZiB3ZSBhcmUgbm90IGp1c3QgcmVzaXppbmcsIGFzIGRlc3RpbmF0aW5vIHdpbGwgYmUgdGhlIHNhbWUgb25lKVxyXG4gICAgICAgICAgICBpZighdi5sb2NhbElzUmVzaXppbmcpe1xyXG4gICAgICAgICAgICAgICAgc3RvcE1lZGlhKHYuYWN0aXZlU2VjdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3cpe1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5zY3JvbGxPdmVyZmxvd0hhbmRsZXIuYmVmb3JlTGVhdmUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgQUNUSVZFKTtcclxuICAgICAgICAgICAgcmVtb3ZlQ2xhc3Moc2libGluZ3MoZWxlbWVudCksIEFDVElWRSk7XHJcbiAgICAgICAgICAgIGxhenlMb2FkKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5zY3JvbGxPdmVyZmxvdyl7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLnNjcm9sbE92ZXJmbG93SGFuZGxlci5vbkxlYXZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vcHJldmVudGluZyBmcm9tIGFjdGl2YXRpbmcgdGhlIE1vdXNlV2hlZWxIYW5kbGVyIGV2ZW50XHJcbiAgICAgICAgICAgIC8vbW9yZSB0aGFuIG9uY2UgaWYgdGhlIHBhZ2UgaXMgc2Nyb2xsaW5nXHJcbiAgICAgICAgICAgIGNhblNjcm9sbCA9IGZhbHNlIHx8IEZQLnRlc3QuaXNUZXN0aW5nO1xyXG5cclxuICAgICAgICAgICAgc2V0U3RhdGUoc2xpZGVJbmRleCwgc2xpZGVBbmNob3JMaW5rLCB2LmFuY2hvckxpbmssIHYuc2VjdGlvbkluZGV4KTtcclxuXHJcbiAgICAgICAgICAgIHBlcmZvcm1Nb3ZlbWVudCh2KTtcclxuXHJcbiAgICAgICAgICAgIC8vZmxhZyB0byBhdm9pZCBjYWxsaW5nbiBgc2Nyb2xsUGFnZSgpYCB0d2ljZSBpbiBjYXNlIG9mIHVzaW5nIGFuY2hvciBsaW5rc1xyXG4gICAgICAgICAgICBsYXN0U2Nyb2xsZWREZXN0aW55ID0gdi5hbmNob3JMaW5rO1xyXG5cclxuICAgICAgICAgICAgLy9hdm9pZCBmaXJpbmcgaXQgdHdpY2UgKGFzIGl0IGRvZXMgYWxzbyBvbiBzY3JvbGwpXHJcbiAgICAgICAgICAgIGFjdGl2YXRlTWVudUFuZE5hdih2LmFuY2hvckxpbmssIHYuc2VjdGlvbkluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogRGlzcGF0Y2ggZXZlbnRzICYgY2FsbGJhY2tzIG1ha2luZyBzdXJlIGl0IGRvZXMgaXQgb24gdGhlIHJpZ2h0IGZvcm1hdCwgZGVwZW5kaW5nIG9uXHJcbiAgICAgICAgKiB3aGV0aGVyIHYyY29tcGF0aWJsZSBpcyBiZWluZyB1c2VkIG9yIG5vdC5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGZpcmVDYWxsYmFjayhldmVudE5hbWUsIHYpe1xyXG4gICAgICAgICAgICB2YXIgZXZlbnREYXRhID0gZ2V0RXZlbnREYXRhKGV2ZW50TmFtZSwgdik7XHJcblxyXG4gICAgICAgICAgICBpZighb3B0aW9ucy52MmNvbXBhdGlibGUpe1xyXG4gICAgICAgICAgICAgICAgdHJpZ2dlcihjb250YWluZXIsIGV2ZW50TmFtZSwgZXZlbnREYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zW2V2ZW50TmFtZV0uYXBwbHkoZXZlbnREYXRhW09iamVjdC5rZXlzKGV2ZW50RGF0YSlbMF1dLCB0b0FycmF5KGV2ZW50RGF0YSkpID09PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zW2V2ZW50TmFtZV0uYXBwbHkoZXZlbnREYXRhWzBdLCBldmVudERhdGEuc2xpY2UoMSkpID09PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogTWFrZXMgc3VyZSB0byBvbmx5IGNyZWF0ZSBhIFBhbmVsIG9iamVjdCBpZiB0aGUgZWxlbWVudCBleGlzdFxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gbnVsbE9yU2VjdGlvbihlbCl7XHJcbiAgICAgICAgICAgIHJldHVybiBlbCA/IG5ldyBTZWN0aW9uKGVsKSA6IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBudWxsT3JTbGlkZShlbCl7XHJcbiAgICAgICAgICAgIHJldHVybiBlbCA/IG5ldyBTbGlkZShlbCkgOiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBHZXRzIHRoZSBldmVudCdzIGRhdGEgZm9yIHRoZSBnaXZlbiBldmVudCBvbiB0aGUgcmlnaHQgZm9ybWF0LiBEZXBlbmRpbmcgb24gd2hldGhlclxyXG4gICAgICAgICogdjJjb21wYXRpYmxlIGlzIGJlaW5nIHVzZWQgb3Igbm90LlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0RXZlbnREYXRhKGV2ZW50TmFtZSwgdil7XHJcbiAgICAgICAgICAgIHZhciBwYXJhbXNQZXJFdmVudDtcclxuXHJcbiAgICAgICAgICAgIGlmKCFvcHRpb25zLnYyY29tcGF0aWJsZSl7XHJcblxyXG4gICAgICAgICAgICAgICAgLy91c2luZyBmdW5jdGlvbnMgdG8gcnVuIG9ubHkgdGhlIG5lY2Vzc2FyeSBiaXRzIHdpdGhpbiB0aGUgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICBwYXJhbXNQZXJFdmVudCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb246IG51bGxPclNlY3Rpb24oJChTRUNUSU9OX0FDVElWRV9TRUwpWzBdKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlOiBudWxsT3JTbGlkZSgkKFNMSURFX0FDVElWRV9TRUwsICQoU0VDVElPTl9BQ1RJVkVfU0VMKVswXSlbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBvbkxlYXZlOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiBudWxsT3JTZWN0aW9uKHYuYWN0aXZlU2VjdGlvbiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogbnVsbE9yU2VjdGlvbih2LmVsZW1lbnQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiB2LmRpcmVjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFmdGVyTG9hZDogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtc1BlckV2ZW50Lm9uTGVhdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBhZnRlclNsaWRlTG9hZDogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb246IG51bGxPclNlY3Rpb24odi5zZWN0aW9uKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbjogbnVsbE9yU2xpZGUodi5wcmV2U2xpZGUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb246IG51bGxPclNsaWRlKHYuZGVzdGlueSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IHYuZGlyZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb25TbGlkZUxlYXZlOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW1zUGVyRXZlbnQuYWZ0ZXJTbGlkZUxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXNQZXJFdmVudCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24oKXsgcmV0dXJuIFtjb250YWluZXJdOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uTGVhdmU6IGZ1bmN0aW9uKCl7IHJldHVybiBbdi5hY3RpdmVTZWN0aW9uLCB2LmxlYXZpbmdTZWN0aW9uLCAodi5zZWN0aW9uSW5kZXggKyAxKSwgdi5kaXJlY3Rpb25dOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGFmdGVyTG9hZDogZnVuY3Rpb24oKXsgcmV0dXJuIFt2LmVsZW1lbnQsIHYuYW5jaG9yTGluaywgKHYuc2VjdGlvbkluZGV4ICsgMSldOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGFmdGVyU2xpZGVMb2FkOiBmdW5jdGlvbigpeyByZXR1cm4gW3YuZGVzdGlueSwgdi5hbmNob3JMaW5rLCAodi5zZWN0aW9uSW5kZXggKyAxKSwgdi5zbGlkZUFuY2hvciwgdi5zbGlkZUluZGV4XTsgfSxcclxuICAgICAgICAgICAgICAgICAgICBvblNsaWRlTGVhdmU6IGZ1bmN0aW9uKCl7IHJldHVybiBbdi5wcmV2U2xpZGUsIHYuYW5jaG9yTGluaywgKHYuc2VjdGlvbkluZGV4ICsgMSksIHYucHJldlNsaWRlSW5kZXgsIHYuZGlyZWN0aW9uLCB2LnNsaWRlSW5kZXhdOyB9LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHBhcmFtc1BlckV2ZW50W2V2ZW50TmFtZV0oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogUGVyZm9ybXMgdGhlIHZlcnRpY2FsIG1vdmVtZW50IChieSBDU1MzIG9yIGJ5IGpRdWVyeSlcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHBlcmZvcm1Nb3ZlbWVudCh2KXtcclxuICAgICAgICAgICAgdmFyIGlzRmFzdFNwZWVkID0gb3B0aW9ucy5zY3JvbGxpbmdTcGVlZCA8IDcwMDtcclxuICAgICAgICAgICAgdmFyIHRyYW5zaXRpb25MYXBzZSA9IGlzRmFzdFNwZWVkID8gNzAwIDogb3B0aW9ucy5zY3JvbGxpbmdTcGVlZDsgXHJcblxyXG4gICAgICAgICAgICAvLyB1c2luZyBDU1MzIHRyYW5zbGF0ZSBmdW5jdGlvbmFsaXR5XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmNzczMgJiYgb3B0aW9ucy5hdXRvU2Nyb2xsaW5nICYmICFvcHRpb25zLnNjcm9sbEJhcikge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFRoZSBmaXJzdCBzZWN0aW9uIGNhbiBoYXZlIGEgbmVnYXRpdmUgdmFsdWUgaW4gaU9TIDEwLiBOb3QgcXVpdGUgc3VyZSB3aHk6IC0wLjAxNDI4MjIyNjU2MjVcclxuICAgICAgICAgICAgICAgIC8vIHRoYXQncyB3aHkgd2Ugcm91bmQgaXQgdG8gMC5cclxuICAgICAgICAgICAgICAgIHZhciB0cmFuc2xhdGUzZCA9ICd0cmFuc2xhdGUzZCgwcHgsIC0nICsgTWF0aC5yb3VuZCh2LmR0b3ApICsgJ3B4LCAwcHgpJztcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybUNvbnRhaW5lcih0cmFuc2xhdGUzZCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9ldmVuIHdoZW4gdGhlIHNjcm9sbGluZ1NwZWVkIGlzIDAgdGhlcmUncyBhIGxpdHRsZSBkZWxheSwgd2hpY2ggbWlnaHQgY2F1c2UgdGhlXHJcbiAgICAgICAgICAgICAgICAvL3Njcm9sbGluZ1NwZWVkIHRvIGNoYW5nZSBpbiBjYXNlIG9mIHVzaW5nIHNpbGVudE1vdmVUbygpO1xyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9ucy5zY3JvbGxpbmdTcGVlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGFmdGVyU2VjdGlvbkxvYWRzSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFmdGVyU2VjdGlvbkxvYWRzSWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJTZWN0aW9uTG9hZHModik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2Rpc2FibGluZyBjYW5TY3JvbGwgd2hlbiB1c2luZyBmYXN0U3BlZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuU2Nyb2xsID0gIWlzRmFzdFNwZWVkO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIG9wdGlvbnMuc2Nyb2xsaW5nU3BlZWQpOyAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGFmdGVyU2VjdGlvbkxvYWRzKHYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyB1c2luZyBKUyB0byBhbmltYXRlXHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsU2V0dGluZ3MgPSBnZXRTY3JvbGxTZXR0aW5ncyh2LmR0b3ApO1xyXG4gICAgICAgICAgICAgICAgRlAudGVzdC50b3AgPSAtdi5kdG9wICsgJ3B4JztcclxuXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUbyhzY3JvbGxTZXR0aW5ncy5lbGVtZW50LCBzY3JvbGxTZXR0aW5ncy5vcHRpb25zLCBvcHRpb25zLnNjcm9sbGluZ1NwZWVkLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMuc2Nyb2xsQmFyKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIEhhY2shXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZSB0aW1lb3V0IHByZXZlbnRzIHNldHRpbmcgdGhlIG1vc3QgZG9taW5hbnQgc2VjdGlvbiBpbiB0aGUgdmlld3BvcnQgYXMgXCJhY3RpdmVcIiB3aGVuIHRoZSB1c2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGVkIHRvIGEgc21hbGxlciBzZWN0aW9uIGJ5IHVzaW5nIHRoZSBtb3VzZXdoZWVsIChhdXRvIHNjcm9sbGluZykgcmF0aGVyIHRoYW4gZHJhZ2luZyB0aGUgc2Nyb2xsIGJhci5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdoZW4gdXNpbmcgc2Nyb2xsQmFyOnRydWUgSXQgc2VlbXMgbGlrZSB0aGUgc2Nyb2xsIGV2ZW50cyBzdGlsbCBnZXR0aW5nIHByb3BhZ2F0ZWQgZXZlbiBhZnRlciB0aGUgc2Nyb2xsaW5nIGFuaW1hdGlvbiBoYXMgZmluaXNoZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyU2VjdGlvbkxvYWRzKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LDMwKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyU2VjdGlvbkxvYWRzKHYpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9kaXNhYmxpbmcgY2FuU2Nyb2xsIHdoZW4gdXNpbmcgZmFzdFNwZWVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhblNjcm9sbCA9ICFpc0Zhc3RTcGVlZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gZW5hYmxpbmcgY2FuU2Nyb2xsIGFmdGVyIHRoZSBtaW5pbXVtIHRyYW5zaXRpb24gbGFwc1xyXG4gICAgICAgICAgICBpZihpc0Zhc3RTcGVlZCl7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoZ190cmFuc2l0aW9uTGFwc2VJZCk7XHJcbiAgICAgICAgICAgICAgICBnX3RyYW5zaXRpb25MYXBzZUlkID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhblNjcm9sbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9LCB0cmFuc2l0aW9uTGFwc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEdldHMgdGhlIHNjcm9sbGluZyBzZXR0aW5ncyBkZXBlbmRpbmcgb24gdGhlIHBsdWdpbiBhdXRvU2Nyb2xsaW5nIG9wdGlvblxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0U2Nyb2xsU2V0dGluZ3ModG9wKXtcclxuICAgICAgICAgICAgdmFyIHNjcm9sbCA9IHt9O1xyXG5cclxuICAgICAgICAgICAgLy90b3AgcHJvcGVydHkgYW5pbWF0aW9uXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuYXV0b1Njcm9sbGluZyAmJiAhb3B0aW9ucy5zY3JvbGxCYXIpe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsLm9wdGlvbnMgPSAtdG9wO1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsLmVsZW1lbnQgPSAkKFdSQVBQRVJfU0VMKVswXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy93aW5kb3cgcmVhbCBzY3JvbGxpbmdcclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHNjcm9sbC5vcHRpb25zID0gdG9wO1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsLmVsZW1lbnQgPSB3aW5kb3c7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzY3JvbGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEFkZHMgc2VjdGlvbnMgYmVmb3JlIG9yIGFmdGVyIHRoZSBjdXJyZW50IG9uZSB0byBjcmVhdGUgdGhlIGluZmluaXRlIGVmZmVjdC5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUluZmluaXRlU2VjdGlvbnModil7XHJcbiAgICAgICAgICAgIC8vIFNjcm9sbGluZyBkb3duXHJcbiAgICAgICAgICAgIGlmICghdi5pc01vdmVtZW50VXApIHtcclxuICAgICAgICAgICAgICAgIC8vIE1vdmUgYWxsIHByZXZpb3VzIHNlY3Rpb25zIHRvIGFmdGVyIHRoZSBhY3RpdmUgc2VjdGlvblxyXG4gICAgICAgICAgICAgICAgYWZ0ZXIoJChTRUNUSU9OX0FDVElWRV9TRUwpWzBdLCBwcmV2QWxsKHYuYWN0aXZlU2VjdGlvbiwgU0VDVElPTl9TRUwpLnJldmVyc2UoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7IC8vIFNjcm9sbGluZyB1cFxyXG4gICAgICAgICAgICAgICAgLy8gTW92ZSBhbGwgbmV4dCBzZWN0aW9ucyB0byBiZWZvcmUgdGhlIGFjdGl2ZSBzZWN0aW9uXHJcbiAgICAgICAgICAgICAgICBiZWZvcmUoJChTRUNUSU9OX0FDVElWRV9TRUwpWzBdLCBuZXh0QWxsKHYuYWN0aXZlU2VjdGlvbiwgU0VDVElPTl9TRUwpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gTWFpbnRhaW4gdGhlIGRpc3BsYXllZCBwb3NpdGlvbiAobm93IHRoYXQgd2UgY2hhbmdlZCB0aGUgZWxlbWVudCBvcmRlcilcclxuICAgICAgICAgICAgc2lsZW50U2Nyb2xsKCQoU0VDVElPTl9BQ1RJVkVfU0VMKVswXS5vZmZzZXRUb3ApO1xyXG5cclxuICAgICAgICAgICAgLy8gTWFpbnRhaW4gdGhlIGFjdGl2ZSBzbGlkZXMgdmlzaWJsZSBpbiB0aGUgdmlld3BvcnRcclxuICAgICAgICAgICAga2VlcFNsaWRlc1Bvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBzYXZlIGZvciBsYXRlciB0aGUgZWxlbWVudHMgdGhhdCBzdGlsbCBuZWVkIHRvIGJlIHJlb3JkZXJlZFxyXG4gICAgICAgICAgICB2LndyYXBBcm91bmRFbGVtZW50cyA9IHYuYWN0aXZlU2VjdGlvbjtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlY2FsY3VsYXRlIGFuaW1hdGlvbiB2YXJpYWJsZXNcclxuICAgICAgICAgICAgdi5kdG9wID0gdi5lbGVtZW50Lm9mZnNldFRvcDtcclxuICAgICAgICAgICAgdi55TW92ZW1lbnQgPSBnZXRZbW92ZW1lbnQodi5lbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB2O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBGaXggc2VjdGlvbiBvcmRlciBhZnRlciBjb250aW51b3VzVmVydGljYWwgY2hhbmdlcyBoYXZlIGJlZW4gYW5pbWF0ZWRcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGNvbnRpbnVvdXNWZXJ0aWNhbEZpeFNlY3Rpb25PcmRlciAodikge1xyXG4gICAgICAgICAgICAvLyBJZiBjb250aW51b3VzVmVydGljYWwgaXMgaW4gZWZmZWN0IChhbmQgYXV0b1Njcm9sbGluZyB3b3VsZCBhbHNvIGJlIGluIGVmZmVjdCB0aGVuKSxcclxuICAgICAgICAgICAgLy8gZmluaXNoIG1vdmluZyB0aGUgZWxlbWVudHMgYXJvdW5kIHNvIHRoZSBkaXJlY3QgbmF2aWdhdGlvbiB3aWxsIGZ1bmN0aW9uIG1vcmUgc2ltcGx5XHJcbiAgICAgICAgICAgIGlmICh2LndyYXBBcm91bmRFbGVtZW50cyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh2LmlzTW92ZW1lbnRVcCkge1xyXG4gICAgICAgICAgICAgICAgYmVmb3JlKCQoU0VDVElPTl9TRUwpWzBdLCB2LndyYXBBcm91bmRFbGVtZW50cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhZnRlcigkKFNFQ1RJT05fU0VMKVskKFNFQ1RJT05fU0VMKS5sZW5ndGgtMV0sIHYud3JhcEFyb3VuZEVsZW1lbnRzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2lsZW50U2Nyb2xsKCQoU0VDVElPTl9BQ1RJVkVfU0VMKVswXS5vZmZzZXRUb3ApO1xyXG5cclxuICAgICAgICAgICAgLy8gTWFpbnRhaW4gdGhlIGFjdGl2ZSBzbGlkZXMgdmlzaWJsZSBpbiB0aGUgdmlld3BvcnRcclxuICAgICAgICAgICAga2VlcFNsaWRlc1Bvc2l0aW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEFjdGlvbnMgdG8gZG8gb25jZSB0aGUgc2VjdGlvbiBpcyBsb2FkZWQuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBhZnRlclNlY3Rpb25Mb2FkcyAodil7XHJcbiAgICAgICAgICAgIGNvbnRpbnVvdXNWZXJ0aWNhbEZpeFNlY3Rpb25PcmRlcih2KTtcclxuXHJcbiAgICAgICAgICAgIC8vY2FsbGJhY2sgKGFmdGVyTG9hZCkgaWYgdGhlIHNpdGUgaXMgbm90IGp1c3QgcmVzaXppbmcgYW5kIHJlYWRqdXN0aW5nIHRoZSBzbGlkZXNcclxuICAgICAgICAgICAgaWYoaXNGdW5jdGlvbihvcHRpb25zLmFmdGVyTG9hZCkgJiYgIXYubG9jYWxJc1Jlc2l6aW5nKXtcclxuICAgICAgICAgICAgICAgIGZpcmVDYWxsYmFjaygnYWZ0ZXJMb2FkJywgdik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3cpe1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5zY3JvbGxPdmVyZmxvd0hhbmRsZXIuYWZ0ZXJMb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKCF2LmxvY2FsSXNSZXNpemluZyl7XHJcbiAgICAgICAgICAgICAgICBwbGF5TWVkaWEodi5lbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYWRkQ2xhc3Modi5lbGVtZW50LCBDT01QTEVURUxZKTtcclxuICAgICAgICAgICAgcmVtb3ZlQ2xhc3Moc2libGluZ3Modi5lbGVtZW50KSwgQ09NUExFVEVMWSk7XHJcbiAgICAgICAgICAgIGxhenlMb2FkT3RoZXJzKCk7XHJcblxyXG4gICAgICAgICAgICBjYW5TY3JvbGwgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYoaXNGdW5jdGlvbih2LmNhbGxiYWNrKSl7XHJcbiAgICAgICAgICAgICAgICB2LmNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2V0cyB0aGUgdmFsdWUgZm9yIHRoZSBnaXZlbiBhdHRyaWJ1dGUgZnJvbSB0aGUgYGRhdGEtYCBhdHRyaWJ1dGUgd2l0aCB0aGUgc2FtZSBzdWZmaXhcclxuICAgICAgICAqIGllOiBkYXRhLXNyY3NldCA9PT4gc3Jjc2V0ICB8ICBkYXRhLXNyYyA9PT4gc3JjXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzZXRTcmMoZWxlbWVudCwgYXR0cmlidXRlKXtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS0nICsgYXR0cmlidXRlKSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLScgKyBhdHRyaWJ1dGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBNYWtlcyBzdXJlIGxhenlsb2FkIGlzIGRvbmUgZm9yIG90aGVyIHNlY3Rpb25zIGluIHRoZSB2aWV3cG9ydCB0aGF0IGFyZSBub3QgdGhlXHJcbiAgICAgICAgKiBhY3RpdmUgb25lLiBcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGxhenlMb2FkT3RoZXJzKCl7XHJcbiAgICAgICAgICAgIHZhciBoYXNBdXRvSGVpZ2h0U2VjdGlvbnMgPSAkKEFVVE9fSEVJR0hUX1NFTClbMF0gfHwgaXNSZXNwb25zaXZlTW9kZSgpICYmICQoQVVUT19IRUlHSFRfUkVTUE9OU0lWRV9TRUwpWzBdO1xyXG5cclxuICAgICAgICAgICAgLy9xdWl0dGluZyB3aGVuIGl0IGRvZXNuJ3QgYXBwbHlcclxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmxhenlMb2FkaW5nIHx8ICFoYXNBdXRvSGVpZ2h0U2VjdGlvbnMpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL21ha2luZyBzdXJlIHRvIGxhenkgbG9hZCBhdXRvLWhlaWdodCBzZWN0aW9ucyB0aGF0IGFyZSBpbiB0aGUgdmlld3BvcnRcclxuICAgICAgICAgICAgJChTRUNUSU9OX1NFTCArICc6bm90KCcgKyBBQ1RJVkVfU0VMICsgJyknKS5mb3JFYWNoKGZ1bmN0aW9uKHNlY3Rpb24pe1xyXG4gICAgICAgICAgICAgICAgaWYoaXNTZWN0aW9uSW5WaWV3cG9ydChzZWN0aW9uKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF6eUxvYWQoc2VjdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBMYXp5IGxvYWRzIGltYWdlLCB2aWRlbyBhbmQgYXVkaW8gZWxlbWVudHMuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBsYXp5TG9hZChkZXN0aW55KXtcclxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmxhenlMb2FkaW5nKXtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHBhbmVsID0gZ2V0U2xpZGVPclNlY3Rpb24oZGVzdGlueSk7XHJcblxyXG4gICAgICAgICAgICAkKCdpbWdbZGF0YS1zcmNdLCBpbWdbZGF0YS1zcmNzZXRdLCBzb3VyY2VbZGF0YS1zcmNdLCBzb3VyY2VbZGF0YS1zcmNzZXRdLCB2aWRlb1tkYXRhLXNyY10sIGF1ZGlvW2RhdGEtc3JjXSwgaWZyYW1lW2RhdGEtc3JjXScsIHBhbmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpe1xyXG4gICAgICAgICAgICAgICAgWydzcmMnLCAnc3Jjc2V0J10uZm9yRWFjaChmdW5jdGlvbih0eXBlKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXR0cmlidXRlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGF0dHJpYnV0ZSAhPSBudWxsICYmIGF0dHJpYnV0ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNyYyhlbGVtZW50LCB0eXBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTWVkaWFMb2FkKGRlc3RpbnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihtYXRjaGVzKGVsZW1lbnQsICdzb3VyY2UnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRUb1BsYXkgPSAgY2xvc2VzdChlbGVtZW50LCAndmlkZW8sIGF1ZGlvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudFRvUGxheSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUb1BsYXkubG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VG9QbGF5Lm9ubG9hZGVkZGF0YSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1lZGlhTG9hZChkZXN0aW55KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBDYWxsYmFjayBmaXJpbmcgd2hlbiBhIGxhenkgbG9hZCBtZWRpYSBlbGVtZW50IGhhcyBsb2FkZWQuXHJcbiAgICAgICAgKiBNYWtpbmcgc3VyZSBpdCBvbmx5IGZpcmVzIG9uZSBwZXIgc2VjdGlvbiBpbiBub3JtYWwgY29uZGl0aW9ucyAoaWYgbG9hZCB0aW1lIGlzIG5vdCBodWdlKVxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gb25NZWRpYUxvYWQoc2VjdGlvbil7XHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3cpe1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGdfbWVkaWFMb2FkZWRJZCk7XHJcbiAgICAgICAgICAgICAgICBnX21lZGlhTG9hZGVkSWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIWhhc0NsYXNzKCRib2R5LCBSRVNQT05TSVZFKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbEJhckhhbmRsZXIuY3JlYXRlU2Nyb2xsQmFyKHNlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDIwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogUGxheXMgdmlkZW8gYW5kIGF1ZGlvIGVsZW1lbnRzLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gcGxheU1lZGlhKGRlc3Rpbnkpe1xyXG4gICAgICAgICAgICB2YXIgcGFuZWwgPSBnZXRTbGlkZU9yU2VjdGlvbihkZXN0aW55KTtcclxuXHJcbiAgICAgICAgICAgIC8vcGxheWluZyBIVE1MNSBtZWRpYSBlbGVtZW50c1xyXG4gICAgICAgICAgICAkKCd2aWRlbywgYXVkaW8nLCBwYW5lbCkuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KXtcclxuICAgICAgICAgICAgICAgIGlmKCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1hdXRvcGxheScpICYmIHR5cGVvZiBlbGVtZW50LnBsYXkgPT09ICdmdW5jdGlvbicgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy95b3V0dWJlIHZpZGVvc1xyXG4gICAgICAgICAgICAkKCdpZnJhbWVbc3JjKj1cInlvdXR1YmUuY29tL2VtYmVkL1wiXScsIHBhbmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpe1xyXG4gICAgICAgICAgICAgICAgaWYgKCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1hdXRvcGxheScpICl7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheVlvdXR1YmUoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy9pbiBjYXNlIHRoZSBVUkwgd2FzIG5vdCBsb2FkZWQgeWV0LiBPbiBwYWdlIGxvYWQgd2UgbmVlZCB0aW1lIGZvciB0aGUgbmV3IFVSTCAod2l0aCB0aGUgQVBJIHN0cmluZykgdG8gbG9hZC5cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1hdXRvcGxheScpICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlZb3V0dWJlKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBQbGF5cyBhIHlvdXR1YmUgdmlkZW9cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHBsYXlZb3V0dWJlKGVsZW1lbnQpe1xyXG4gICAgICAgICAgICBlbGVtZW50LmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoJ3tcImV2ZW50XCI6XCJjb21tYW5kXCIsXCJmdW5jXCI6XCJwbGF5VmlkZW9cIixcImFyZ3NcIjpcIlwifScsICcqJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFN0b3BzIHZpZGVvIGFuZCBhdWRpbyBlbGVtZW50cy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHN0b3BNZWRpYShkZXN0aW55KXtcclxuICAgICAgICAgICAgdmFyIHBhbmVsID0gZ2V0U2xpZGVPclNlY3Rpb24oZGVzdGlueSk7XHJcblxyXG4gICAgICAgICAgICAvL3N0b3BwaW5nIEhUTUw1IG1lZGlhIGVsZW1lbnRzXHJcbiAgICAgICAgICAgICQoJ3ZpZGVvLCBhdWRpbycsIHBhbmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpe1xyXG4gICAgICAgICAgICAgICAgaWYoICFlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1rZWVwcGxheWluZycpICYmIHR5cGVvZiBlbGVtZW50LnBhdXNlID09PSAnZnVuY3Rpb24nICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL3lvdXR1YmUgdmlkZW9zXHJcbiAgICAgICAgICAgICQoJ2lmcmFtZVtzcmMqPVwieW91dHViZS5jb20vZW1iZWQvXCJdJywgcGFuZWwpLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCl7XHJcbiAgICAgICAgICAgICAgICBpZiggL3lvdXR1YmVcXC5jb21cXC9lbWJlZFxcLy8udGVzdChlbGVtZW50LmdldEF0dHJpYnV0ZSgnc3JjJykpICYmICFlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1rZWVwcGxheWluZycpKXtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoJ3tcImV2ZW50XCI6XCJjb21tYW5kXCIsXCJmdW5jXCI6XCJwYXVzZVZpZGVvXCIsXCJhcmdzXCI6XCJcIn0nLCcqJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBHZXRzIHRoZSBhY3RpdmUgc2xpZGUgKG9yIHNlY3Rpb24pIGZvciB0aGUgZ2l2ZW4gc2VjdGlvblxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0U2xpZGVPclNlY3Rpb24oZGVzdGlueSl7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZSA9ICQoU0xJREVfQUNUSVZFX1NFTCwgZGVzdGlueSk7XHJcbiAgICAgICAgICAgIGlmKCBzbGlkZS5sZW5ndGggKSB7XHJcbiAgICAgICAgICAgICAgICBkZXN0aW55ID0gc2xpZGVbMF07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkZXN0aW55O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTY3JvbGxzIHRvIHRoZSBhbmNob3IgaW4gdGhlIFVSTCB3aGVuIGxvYWRpbmcgdGhlIHNpdGVcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNjcm9sbFRvQW5jaG9yKCl7XHJcbiAgICAgICAgICAgIHZhciBhbmNob3JzID0gIGdldEFuY2hvcnNVUkwoKTtcclxuICAgICAgICAgICAgdmFyIHNlY3Rpb25BbmNob3IgPSBhbmNob3JzLnNlY3Rpb247XHJcbiAgICAgICAgICAgIHZhciBzbGlkZUFuY2hvciA9IGFuY2hvcnMuc2xpZGU7XHJcblxyXG4gICAgICAgICAgICBpZihzZWN0aW9uQW5jaG9yKXsgIC8vaWYgdGhlcmVzIGFueSAjXHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zLmFuaW1hdGVBbmNob3Ipe1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFBhZ2VBbmRTbGlkZShzZWN0aW9uQW5jaG9yLCBzbGlkZUFuY2hvcik7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBzaWxlbnRNb3ZlVG8oc2VjdGlvbkFuY2hvciwgc2xpZGVBbmNob3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIERldGVjdGluZyBhbnkgY2hhbmdlIG9uIHRoZSBVUkwgdG8gc2Nyb2xsIHRvIHRoZSBnaXZlbiBhbmNob3IgbGlua1xyXG4gICAgICAgICogKGEgd2F5IHRvIGRldGVjdCBiYWNrIGhpc3RvcnkgYnV0dG9uIGFzIHdlIHBsYXkgd2l0aCB0aGUgaGFzaGVzIG9uIHRoZSBVUkwpXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBoYXNoQ2hhbmdlSGFuZGxlcigpe1xyXG4gICAgICAgICAgICBpZighaXNTY3JvbGxpbmcgJiYgIW9wdGlvbnMubG9ja0FuY2hvcnMpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGFuY2hvcnMgPSBnZXRBbmNob3JzVVJMKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VjdGlvbkFuY2hvciA9IGFuY2hvcnMuc2VjdGlvbjtcclxuICAgICAgICAgICAgICAgIHZhciBzbGlkZUFuY2hvciA9IGFuY2hvcnMuc2xpZGU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy93aGVuIG1vdmluZyB0byBhIHNsaWRlIGluIHRoZSBmaXJzdCBzZWN0aW9uIGZvciB0aGUgZmlyc3QgdGltZSAoZmlyc3QgdGltZSB0byBhZGQgYW4gYW5jaG9yIHRvIHRoZSBVUkwpXHJcbiAgICAgICAgICAgICAgICB2YXIgaXNGaXJzdFNsaWRlTW92ZSA9ICAodHlwZW9mIGxhc3RTY3JvbGxlZERlc3RpbnkgPT09ICd1bmRlZmluZWQnKTtcclxuICAgICAgICAgICAgICAgIHZhciBpc0ZpcnN0U2Nyb2xsTW92ZSA9ICh0eXBlb2YgbGFzdFNjcm9sbGVkRGVzdGlueSA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHNsaWRlQW5jaG9yID09PSAndW5kZWZpbmVkJyAmJiAhc2xpZGVNb3ZpbmcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHNlY3Rpb25BbmNob3IgJiYgc2VjdGlvbkFuY2hvci5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8qaW4gb3JkZXIgdG8gY2FsbCBzY3JvbGxwYWdlKCkgb25seSBvbmNlIGZvciBlYWNoIGRlc3RpbmF0aW9uIGF0IGEgdGltZVxyXG4gICAgICAgICAgICAgICAgICAgIEl0IGlzIGNhbGxlZCB0d2ljZSBmb3IgZWFjaCBzY3JvbGwgb3RoZXJ3aXNlLCBhcyBpbiBjYXNlIG9mIHVzaW5nIGFuY2hvcmxpbmtzIGBoYXNoQ2hhbmdlYFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50IGlzIGZpcmVkIG9uIGV2ZXJ5IHNjcm9sbCB0b28uKi9cclxuICAgICAgICAgICAgICAgICAgICBpZiAoKHNlY3Rpb25BbmNob3IgJiYgc2VjdGlvbkFuY2hvciAhPT0gbGFzdFNjcm9sbGVkRGVzdGlueSkgJiYgIWlzRmlyc3RTbGlkZU1vdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgaXNGaXJzdFNjcm9sbE1vdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgKCFzbGlkZU1vdmluZyAmJiBsYXN0U2Nyb2xsZWRTbGlkZSAhPSBzbGlkZUFuY2hvciApKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFBhZ2VBbmRTbGlkZShzZWN0aW9uQW5jaG9yLCBzbGlkZUFuY2hvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2dldHMgdGhlIFVSTCBhbmNob3JzIChzZWN0aW9uIGFuZCBzbGlkZSlcclxuICAgICAgICBmdW5jdGlvbiBnZXRBbmNob3JzVVJMKCl7XHJcbiAgICAgICAgICAgIHZhciBzZWN0aW9uO1xyXG4gICAgICAgICAgICB2YXIgc2xpZGU7XHJcbiAgICAgICAgICAgIHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XHJcblxyXG4gICAgICAgICAgICBpZihoYXNoLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAvL2dldHRpbmcgdGhlIGFuY2hvciBsaW5rIGluIHRoZSBVUkwgYW5kIGRlbGV0aW5nIHRoZSBgI2BcclxuICAgICAgICAgICAgICAgIHZhciBhbmNob3JzUGFydHMgPSAgaGFzaC5yZXBsYWNlKCcjJywgJycpLnNwbGl0KCcvJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy91c2luZyAvIGZvciB2aXN1YWwgcmVhc29ucyBhbmQgbm90IGFzIGEgc2VjdGlvbi9zbGlkZSBzZXBhcmF0b3IgIzI4MDNcclxuICAgICAgICAgICAgICAgIHZhciBpc0Z1bmt5QW5jaG9yID0gaGFzaC5pbmRleE9mKCcjLycpID4gLTE7XHJcblxyXG4gICAgICAgICAgICAgICAgc2VjdGlvbiA9IGlzRnVua3lBbmNob3IgPyAnLycgKyBhbmNob3JzUGFydHNbMV0gOiBkZWNvZGVVUklDb21wb25lbnQoYW5jaG9yc1BhcnRzWzBdKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGVBbmNob3IgPSBpc0Z1bmt5QW5jaG9yID8gYW5jaG9yc1BhcnRzWzJdIDogYW5jaG9yc1BhcnRzWzFdO1xyXG4gICAgICAgICAgICAgICAgaWYoc2xpZGVBbmNob3IgJiYgc2xpZGVBbmNob3IubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZSA9IGRlY29kZVVSSUNvbXBvbmVudChzbGlkZUFuY2hvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uOiBzZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgc2xpZGU6IHNsaWRlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1NsaWRpbmcgd2l0aCBhcnJvdyBrZXlzLCBib3RoLCB2ZXJ0aWNhbCBhbmQgaG9yaXpvbnRhbFxyXG4gICAgICAgIGZ1bmN0aW9uIGtleWRvd25IYW5kbGVyKGUpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGtleWRvd25JZCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHZhciBrZXlDb2RlID0gZS5rZXlDb2RlO1xyXG5cclxuICAgICAgICAgICAgLy90YWI/XHJcbiAgICAgICAgICAgIGlmKGtleUNvZGUgPT09IDkpe1xyXG4gICAgICAgICAgICAgICAgb25UYWIoZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGVsc2UgaWYoIW1hdGNoZXMoYWN0aXZlRWxlbWVudCwgJ3RleHRhcmVhJykgJiYgIW1hdGNoZXMoYWN0aXZlRWxlbWVudCwgJ2lucHV0JykgJiYgIW1hdGNoZXMoYWN0aXZlRWxlbWVudCwgJ3NlbGVjdCcpICYmXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVFbGVtZW50LmdldEF0dHJpYnV0ZSgnY29udGVudEVkaXRhYmxlJykgIT09IFwidHJ1ZVwiICYmIGFjdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjb250ZW50RWRpdGFibGUnKSAhPT0gJycgJiZcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMua2V5Ym9hcmRTY3JvbGxpbmcgJiYgb3B0aW9ucy5hdXRvU2Nyb2xsaW5nKXtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3ByZXZlbnRpbmcgdGhlIHNjcm9sbCB3aXRoIGFycm93IGtleXMgJiBzcGFjZWJhciAmIFBhZ2UgVXAgJiBEb3duIGtleXNcclxuICAgICAgICAgICAgICAgIHZhciBrZXlDb250cm9scyA9IFs0MCwgMzgsIDMyLCAzMywgMzRdO1xyXG4gICAgICAgICAgICAgICAgaWYoa2V5Q29udHJvbHMuaW5kZXhPZihrZXlDb2RlKSA+IC0xKXtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2ZW50RGVmYXVsdChlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb250cm9sUHJlc3NlZCA9IGUuY3RybEtleTtcclxuXHJcbiAgICAgICAgICAgICAgICBrZXlkb3duSWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgb25rZXlkb3duKGUpO1xyXG4gICAgICAgICAgICAgICAgfSwxNTApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b29sdGlwVGV4dEhhbmRsZXIoKXtcclxuICAgICAgICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cclxuICAgICAgICAgICAgdHJpZ2dlcihwcmV2KHRoaXMpLCAnY2xpY2snKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vdG8gcHJldmVudCBzY3JvbGxpbmcgd2hpbGUgem9vbWluZ1xyXG4gICAgICAgIGZ1bmN0aW9uIGtleVVwSGFuZGxlcihlKXtcclxuICAgICAgICAgICAgaWYoaXNXaW5kb3dGb2N1c2VkKXsgLy90aGUga2V5dXAgZ2V0cyBmaXJlZCBvbiBuZXcgdGFiIGN0cmwgKyB0IGluIEZpcmVmb3hcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xQcmVzc2VkID0gZS5jdHJsS2V5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2JpbmRpbmcgdGhlIG1vdXNlbW92ZSB3aGVuIHRoZSBtb3VzZSdzIG1pZGRsZSBidXR0b24gaXMgcmVsZWFzZWRcclxuICAgICAgICBmdW5jdGlvbiBtb3VzZURvd25IYW5kbGVyKGUpe1xyXG4gICAgICAgICAgICAvL21pZGRsZSBidXR0b25cclxuICAgICAgICAgICAgaWYgKGUud2hpY2ggPT0gMil7XHJcbiAgICAgICAgICAgICAgICBvbGRQYWdlWSA9IGUucGFnZVk7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlSGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vdW5iaW5kaW5nIHRoZSBtb3VzZW1vdmUgd2hlbiB0aGUgbW91c2UncyBtaWRkbGUgYnV0dG9uIGlzIHJlbGVhc2VkXHJcbiAgICAgICAgZnVuY3Rpb24gbW91c2VVcEhhbmRsZXIoZSl7XHJcbiAgICAgICAgICAgIC8vbWlkZGxlIGJ1dHRvblxyXG4gICAgICAgICAgICBpZiAoZS53aGljaCA9PSAyKXtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVIYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBNYWtlcyBzdXJlIHRoZSB0YWIga2V5IHdpbGwgb25seSBmb2N1cyBlbGVtZW50cyB3aXRoaW4gdGhlIGN1cnJlbnQgc2VjdGlvbi9zbGlkZVxyXG4gICAgICAgICogcHJldmVudGluZyB0aGlzIHdheSBmcm9tIGJyZWFraW5nIHRoZSBwYWdlLlxyXG4gICAgICAgICogQmFzZWQgb24gXCJNb2RhbHMgYW5kIGtleWJvYXJkIHRyYXBzXCJcclxuICAgICAgICAqIGZyb20gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL2Z1bmRhbWVudGFscy9hY2Nlc3NpYmlsaXR5L2ZvY3VzL3VzaW5nLXRhYmluZGV4XHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBvblRhYihlKXtcclxuICAgICAgICAgICAgdmFyIGlzU2hpZnRQcmVzc2VkID0gZS5zaGlmdEtleTtcclxuICAgICAgICAgICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG4gICAgICAgICAgICB2YXIgZm9jdXNhYmxlRWxlbWVudHMgPSBnZXRGb2N1c2FibGVzKGdldFNsaWRlT3JTZWN0aW9uKCQoU0VDVElPTl9BQ1RJVkVfU0VMKVswXSkpO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcHJldmVudEFuZEZvY3VzRmlyc3QoZSl7XHJcbiAgICAgICAgICAgICAgICBwcmV2ZW50RGVmYXVsdChlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb2N1c2FibGVFbGVtZW50c1swXSA/IGZvY3VzYWJsZUVsZW1lbnRzWzBdLmZvY3VzKCkgOiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL291dHNpZGUgYW55IHNlY3Rpb24gb3Igc2xpZGU/IExldCdzIG5vdCBoaWphY2sgdGhlIHRhYiFcclxuICAgICAgICAgICAgaWYoaXNGb2N1c091dHNpZGUoZSkpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2lzIHRoZXJlIGFuIGVsZW1lbnQgd2l0aCBmb2N1cz9cclxuICAgICAgICAgICAgaWYoYWN0aXZlRWxlbWVudCl7XHJcbiAgICAgICAgICAgICAgICBpZihjbG9zZXN0KGFjdGl2ZUVsZW1lbnQsIFNFQ1RJT05fQUNUSVZFX1NFTCArICcsJyArIFNFQ1RJT05fQUNUSVZFX1NFTCArICcgJyArIFNMSURFX0FDVElWRV9TRUwpID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBwcmV2ZW50QW5kRm9jdXNGaXJzdChlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9ubyBlbGVtZW50IGlmIGZvY3VzZWQ/IExldCdzIGZvY3VzIHRoZSBmaXJzdCBvbmUgb2YgdGhlIHNlY3Rpb24vc2xpZGVcclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHByZXZlbnRBbmRGb2N1c0ZpcnN0KGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL3doZW4gcmVhY2hlZCB0aGUgZmlyc3Qgb3IgbGFzdCBmb2N1c2FibGUgZWxlbWVudCBvZiB0aGUgc2VjdGlvbi9zbGlkZVxyXG4gICAgICAgICAgICAvL3dlIHByZXZlbnQgdGhlIHRhYiBhY3Rpb24gdG8ga2VlcCBpdCBpbiB0aGUgbGFzdCBmb2N1c2FibGUgZWxlbWVudFxyXG4gICAgICAgICAgICBpZighaXNTaGlmdFByZXNzZWQgJiYgYWN0aXZlRWxlbWVudCA9PSBmb2N1c2FibGVFbGVtZW50c1tmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggLSAxXSB8fFxyXG4gICAgICAgICAgICAgICAgaXNTaGlmdFByZXNzZWQgJiYgYWN0aXZlRWxlbWVudCA9PSBmb2N1c2FibGVFbGVtZW50c1swXVxyXG4gICAgICAgICAgICApe1xyXG4gICAgICAgICAgICAgICAgcHJldmVudERlZmF1bHQoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogR2V0cyBhbGwgdGhlIGZvY3VzYWJsZSBlbGVtZW50cyBpbnNpZGUgdGhlIHBhc3NlZCBlbGVtZW50LlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0Rm9jdXNhYmxlcyhlbCl7XHJcbiAgICAgICAgICAgIHJldHVybiBbXS5zbGljZS5jYWxsKCQoZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcsIGVsKSkuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykgIT09ICctMSdcclxuICAgICAgICAgICAgICAgICAgICAvL2FyZSBhbHNvIG5vdCBoaWRkZW4gZWxlbWVudHMgKG9yIHdpdGggaGlkZGVuIHBhcmVudHMpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgaXRlbS5vZmZzZXRQYXJlbnQgIT09IG51bGw7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGZvY3VzIGlzIG91dHNpZGUgZnVsbHBhZ2UuanMgc2VjdGlvbnMvc2xpZGVzIG9yIG5vdC5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGlzRm9jdXNPdXRzaWRlKGUpe1xyXG4gICAgICAgICAgICB2YXIgYWxsRm9jdXNhYmxlcyA9IGdldEZvY3VzYWJsZXMoZG9jdW1lbnQpO1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudEZvY3VzSW5kZXggPSBhbGxGb2N1c2FibGVzLmluZGV4T2YoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgICAgIHZhciBmb2N1c0Rlc3RpbmF0aW9uSW5kZXggPSBlLnNoaWZ0S2V5ID8gY3VycmVudEZvY3VzSW5kZXggLSAxIDogY3VycmVudEZvY3VzSW5kZXggKyAxO1xyXG4gICAgICAgICAgICB2YXIgZm9jdXNEZXN0aW5hdGlvbiA9IGFsbEZvY3VzYWJsZXNbZm9jdXNEZXN0aW5hdGlvbkluZGV4XTtcclxuICAgICAgICAgICAgdmFyIGRlc3RpbmF0aW9uSXRlbVNsaWRlID0gbnVsbE9yU2xpZGUoY2xvc2VzdChmb2N1c0Rlc3RpbmF0aW9uLCBTTElERV9TRUwpKTtcclxuICAgICAgICAgICAgdmFyIGRlc3RpbmF0aW9uSXRlbVNlY3Rpb24gPSBudWxsT3JTZWN0aW9uKGNsb3Nlc3QoZm9jdXNEZXN0aW5hdGlvbiwgU0VDVElPTl9TRUwpKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAhZGVzdGluYXRpb25JdGVtU2xpZGUgJiYgIWRlc3RpbmF0aW9uSXRlbVNlY3Rpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1Njcm9sbGluZyBob3Jpem9udGFsbHkgd2hlbiBjbGlja2luZyBvbiB0aGUgc2xpZGVyIGNvbnRyb2xzLlxyXG4gICAgICAgIGZ1bmN0aW9uIHNsaWRlQXJyb3dIYW5kbGVyKCl7XHJcbiAgICAgICAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXHJcbiAgICAgICAgICAgIHZhciBzZWN0aW9uID0gY2xvc2VzdCh0aGlzLCBTRUNUSU9OX1NFTCk7XHJcblxyXG4gICAgICAgICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xyXG4gICAgICAgICAgICBpZiAoaGFzQ2xhc3ModGhpcywgU0xJREVTX1BSRVYpKSB7XHJcbiAgICAgICAgICAgICAgICBpZihpc1Njcm9sbEFsbG93ZWQubS5sZWZ0KXtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlU2xpZGVMZWZ0KHNlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYoaXNTY3JvbGxBbGxvd2VkLm0ucmlnaHQpe1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVTbGlkZVJpZ2h0KHNlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNoYW5naW5nIGlzV2luZG93Rm9jdXNlZCB0byB0cnVlIG9uIGZvY3VzIGV2ZW50XHJcbiAgICAgICAgZnVuY3Rpb24gZm9jdXNIYW5kbGVyKCl7XHJcbiAgICAgICAgICAgIGlzV2luZG93Rm9jdXNlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3doZW4gb3BlbmluZyBhIG5ldyB0YWIgKGN0cmwgKyB0KSwgYGNvbnRyb2xgIHdvbid0IGJlIHByZXNzZWQgd2hlbiBjb21pbmcgYmFjay5cclxuICAgICAgICBmdW5jdGlvbiBibHVySGFuZGxlcigpe1xyXG4gICAgICAgICAgICBpc1dpbmRvd0ZvY3VzZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29udHJvbFByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vU2Nyb2xscyB0byB0aGUgc2VjdGlvbiB3aGVuIGNsaWNraW5nIHRoZSBuYXZpZ2F0aW9uIGJ1bGxldFxyXG4gICAgICAgIGZ1bmN0aW9uIHNlY3Rpb25CdWxsZXRIYW5kbGVyKGUpe1xyXG4gICAgICAgICAgICBwcmV2ZW50RGVmYXVsdChlKTtcclxuXHJcbiAgICAgICAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXHJcbiAgICAgICAgICAgIHZhciBpbmRleEJ1bGxldCA9IGluZGV4KGNsb3Nlc3QodGhpcywgU0VDVElPTl9OQVZfU0VMICsgJyBsaScpKTtcclxuICAgICAgICAgICAgc2Nyb2xsUGFnZSgkKFNFQ1RJT05fU0VMKVtpbmRleEJ1bGxldF0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9TY3JvbGxzIHRoZSBzbGlkZXIgdG8gdGhlIGdpdmVuIHNsaWRlIGRlc3RpbmF0aW9uIGZvciB0aGUgZ2l2ZW4gc2VjdGlvblxyXG4gICAgICAgIGZ1bmN0aW9uIHNsaWRlQnVsbGV0SGFuZGxlcihlKXtcclxuICAgICAgICAgICAgcHJldmVudERlZmF1bHQoZSk7XHJcblxyXG4gICAgICAgICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVzID0gJChTTElERVNfV1JBUFBFUl9TRUwsIGNsb3Nlc3QodGhpcywgU0VDVElPTl9TRUwpKVswXTtcclxuICAgICAgICAgICAgdmFyIGRlc3RpbnkgPSAkKFNMSURFX1NFTCwgc2xpZGVzKVtpbmRleChjbG9zZXN0KHRoaXMsICdsaScpKV07XHJcblxyXG4gICAgICAgICAgICBsYW5kc2NhcGVTY3JvbGwoc2xpZGVzLCBkZXN0aW55KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vTWVudSBpdGVtIGhhbmRsZXIgd2hlbiBub3QgdXNpbmcgYW5jaG9ycyBvciB1c2luZyBsb2NrQW5jaG9yczp0cnVlXHJcbiAgICAgICAgZnVuY3Rpb24gbWVudUl0ZW1zSGFuZGxlcihlKXtcclxuICAgICAgICAgICAgaWYoJChvcHRpb25zLm1lbnUpWzBdICYmIChvcHRpb25zLmxvY2tBbmNob3JzIHx8ICFvcHRpb25zLmFuY2hvcnMubGVuZ3RoKSl7XHJcbiAgICAgICAgICAgICAgICBwcmV2ZW50RGVmYXVsdChlKTtcclxuICAgICAgICAgICAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXHJcbiAgICAgICAgICAgICAgICBtb3ZlVG8odGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWVudWFuY2hvcicpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBLZXlkb3duIGV2ZW50XHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBvbmtleWRvd24oZSl7XHJcbiAgICAgICAgICAgIHZhciBzaGlmdFByZXNzZWQgPSBlLnNoaWZ0S2V5O1xyXG4gICAgICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHZhciBpc01lZGlhRm9jdXNlZCA9IG1hdGNoZXMoYWN0aXZlRWxlbWVudCwgJ3ZpZGVvJykgfHwgbWF0Y2hlcyhhY3RpdmVFbGVtZW50LCAnYXVkaW8nKTtcclxuXHJcbiAgICAgICAgICAgIC8vZG8gbm90aGluZyBpZiB3ZSBjYW4gbm90IHNjcm9sbCBvciB3ZSBhcmUgbm90IHVzaW5nIGhvcml6b3RuYWwga2V5IGFycm93cy5cclxuICAgICAgICAgICAgaWYoIWNhblNjcm9sbCAmJiBbMzcsMzldLmluZGV4T2YoZS5rZXlDb2RlKSA8IDApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgICAgICAgICAgLy91cFxyXG4gICAgICAgICAgICAgICAgY2FzZSAzODpcclxuICAgICAgICAgICAgICAgIGNhc2UgMzM6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXNTY3JvbGxBbGxvd2VkLmsudXApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlU2VjdGlvblVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vZG93blxyXG4gICAgICAgICAgICAgICAgY2FzZSAzMjogLy9zcGFjZWJhclxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihzaGlmdFByZXNzZWQgJiYgaXNTY3JvbGxBbGxvd2VkLmsudXAgJiYgIWlzTWVkaWFGb2N1c2VkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVNlY3Rpb25VcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXHJcbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAzNDpcclxuICAgICAgICAgICAgICAgICAgICBpZihpc1Njcm9sbEFsbG93ZWQuay5kb3duKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3BhY2UgYmFyP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlLmtleUNvZGUgIT09IDMyIHx8ICFpc01lZGlhRm9jdXNlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlU2VjdGlvbkRvd24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAvL0hvbWVcclxuICAgICAgICAgICAgICAgIGNhc2UgMzY6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXNTY3JvbGxBbGxvd2VkLmsudXApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlVG8oMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vRW5kXHJcbiAgICAgICAgICAgICAgICBjYXNlIDM1OlxyXG4gICAgICAgICAgICAgICAgICAgICBpZihpc1Njcm9sbEFsbG93ZWQuay5kb3duKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVRvKCAkKFNFQ1RJT05fU0VMKS5sZW5ndGggKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9sZWZ0XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGlzU2Nyb2xsQWxsb3dlZC5rLmxlZnQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlU2xpZGVMZWZ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vcmlnaHRcclxuICAgICAgICAgICAgICAgIGNhc2UgMzk6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXNTY3JvbGxBbGxvd2VkLmsucmlnaHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlU2xpZGVSaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjsgLy8gZXhpdCB0aGlzIGhhbmRsZXIgZm9yIG90aGVyIGtleXNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBEZXRlY3RpbmcgdGhlIGRpcmVjdGlvbiBvZiB0aGUgbW91c2UgbW92ZW1lbnQuXHJcbiAgICAgICAgKiBVc2VkIG9ubHkgZm9yIHRoZSBtaWRkbGUgYnV0dG9uIG9mIHRoZSBtb3VzZS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIHZhciBvbGRQYWdlWSA9IDA7XHJcbiAgICAgICAgZnVuY3Rpb24gbW91c2VNb3ZlSGFuZGxlcihlKXtcclxuICAgICAgICAgICAgaWYoIW9wdGlvbnMuYXV0b1Njcm9sbGluZyl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoY2FuU2Nyb2xsKXtcclxuICAgICAgICAgICAgICAgIC8vIG1vdmluZyB1cFxyXG4gICAgICAgICAgICAgICAgaWYgKGUucGFnZVkgPCBvbGRQYWdlWSAmJiBpc1Njcm9sbEFsbG93ZWQubS51cCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZVNlY3Rpb25VcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIG1vdmluZyBkb3duXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKGUucGFnZVkgPiBvbGRQYWdlWSAmJiBpc1Njcm9sbEFsbG93ZWQubS5kb3duKXtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlU2VjdGlvbkRvd24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvbGRQYWdlWSA9IGUucGFnZVk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNjcm9sbHMgaG9yaXpvbnRhbCBzbGlkZXJzLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gbGFuZHNjYXBlU2Nyb2xsKHNsaWRlcywgZGVzdGlueSwgZGlyZWN0aW9uKXtcclxuICAgICAgICAgICAgdmFyIHNlY3Rpb24gPSBjbG9zZXN0KHNsaWRlcywgU0VDVElPTl9TRUwpO1xyXG4gICAgICAgICAgICB2YXIgdiA9IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlczogc2xpZGVzLFxyXG4gICAgICAgICAgICAgICAgZGVzdGlueTogZGVzdGlueSxcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgZGVzdGlueVBvczoge2xlZnQ6IGRlc3Rpbnkub2Zmc2V0TGVmdH0sXHJcbiAgICAgICAgICAgICAgICBzbGlkZUluZGV4OiBpbmRleChkZXN0aW55KSxcclxuICAgICAgICAgICAgICAgIHNlY3Rpb246IHNlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uSW5kZXg6IGluZGV4KHNlY3Rpb24sIFNFQ1RJT05fU0VMKSxcclxuICAgICAgICAgICAgICAgIGFuY2hvckxpbms6IHNlY3Rpb24uZ2V0QXR0cmlidXRlKCdkYXRhLWFuY2hvcicpLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzTmF2OiAkKFNMSURFU19OQVZfU0VMLCBzZWN0aW9uKVswXSxcclxuICAgICAgICAgICAgICAgIHNsaWRlQW5jaG9yOiBnZXRBbmNob3IoZGVzdGlueSksXHJcbiAgICAgICAgICAgICAgICBwcmV2U2xpZGU6ICQoU0xJREVfQUNUSVZFX1NFTCwgc2VjdGlvbilbMF0sXHJcbiAgICAgICAgICAgICAgICBwcmV2U2xpZGVJbmRleDogaW5kZXgoJChTTElERV9BQ1RJVkVfU0VMLCBzZWN0aW9uKVswXSksXHJcblxyXG4gICAgICAgICAgICAgICAgLy9jYWNoaW5nIHRoZSB2YWx1ZSBvZiBpc1Jlc2l6aW5nIGF0IHRoZSBtb21tZW50IHRoZSBmdW5jdGlvbiBpcyBjYWxsZWRcclxuICAgICAgICAgICAgICAgIC8vYmVjYXVzZSBpdCB3aWxsIGJlIGNoZWNrZWQgbGF0ZXIgaW5zaWRlIGEgc2V0VGltZW91dCBhbmQgdGhlIHZhbHVlIG1pZ2h0IGNoYW5nZVxyXG4gICAgICAgICAgICAgICAgbG9jYWxJc1Jlc2l6aW5nOiBpc1Jlc2l6aW5nXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHYueE1vdmVtZW50ID0gZ2V0WG1vdmVtZW50KHYucHJldlNsaWRlSW5kZXgsIHYuc2xpZGVJbmRleCk7XHJcbiAgICAgICAgICAgIHYuZGlyZWN0aW9uID0gdi5kaXJlY3Rpb24gPyB2LmRpcmVjdGlvbiA6IHYueE1vdmVtZW50O1xyXG5cclxuICAgICAgICAgICAgLy9pbXBvcnRhbnQhISBPbmx5IGRvIGl0IHdoZW4gbm90IHJlc2l6aW5nXHJcbiAgICAgICAgICAgIGlmKCF2LmxvY2FsSXNSZXNpemluZyl7XHJcbiAgICAgICAgICAgICAgICAvL3ByZXZlbnRpbmcgZnJvbSBzY3JvbGxpbmcgdG8gdGhlIG5leHQvcHJldiBzZWN0aW9uIHdoZW4gdXNpbmcgc2Nyb2xsSG9yaXpvbnRhbGx5XHJcbiAgICAgICAgICAgICAgICBjYW5TY3JvbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5vblNsaWRlTGVhdmUpe1xyXG5cclxuICAgICAgICAgICAgICAgIC8vaWYgdGhlIHNpdGUgaXMgbm90IGp1c3QgcmVzaXppbmcgYW5kIHJlYWRqdXN0aW5nIHRoZSBzbGlkZXNcclxuICAgICAgICAgICAgICAgIGlmKCF2LmxvY2FsSXNSZXNpemluZyAmJiB2LnhNb3ZlbWVudCE9PSdub25lJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXNGdW5jdGlvbiggb3B0aW9ucy5vblNsaWRlTGVhdmUgKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBmaXJlQ2FsbGJhY2soJ29uU2xpZGVMZWF2ZScsIHYpID09PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZU1vdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhZGRDbGFzcyhkZXN0aW55LCBBQ1RJVkUpO1xyXG4gICAgICAgICAgICByZW1vdmVDbGFzcyhzaWJsaW5ncyhkZXN0aW55KSwgQUNUSVZFKTtcclxuXHJcbiAgICAgICAgICAgIGlmKCF2LmxvY2FsSXNSZXNpemluZyl7XHJcbiAgICAgICAgICAgICAgICBzdG9wTWVkaWEodi5wcmV2U2xpZGUpO1xyXG4gICAgICAgICAgICAgICAgbGF6eUxvYWQoZGVzdGlueSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKCFvcHRpb25zLmxvb3BIb3Jpem9udGFsICYmIG9wdGlvbnMuY29udHJvbEFycm93cyl7XHJcbiAgICAgICAgICAgICAgICAvL2hpZGRpbmcgaXQgZm9yIHRoZSBmaXN0IHNsaWRlLCBzaG93aW5nIGZvciB0aGUgcmVzdFxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlKCQoU0xJREVTX0FSUk9XX1BSRVZfU0VMLCBzZWN0aW9uKSwgdi5zbGlkZUluZGV4IT09MCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9oaWRkaW5nIGl0IGZvciB0aGUgbGFzdCBzbGlkZSwgc2hvd2luZyBmb3IgdGhlIHJlc3RcclxuICAgICAgICAgICAgICAgIHRvZ2dsZSgkKFNMSURFU19BUlJPV19ORVhUX1NFTCwgc2VjdGlvbiksIG5leHQoZGVzdGlueSkgIT0gbnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vb25seSBjaGFuZ2luZyB0aGUgVVJMIGlmIHRoZSBzbGlkZXMgYXJlIGluIHRoZSBjdXJyZW50IHNlY3Rpb24gKG5vdCBmb3IgcmVzaXplIHJlLWFkanVzdGluZylcclxuICAgICAgICAgICAgaWYoaGFzQ2xhc3Moc2VjdGlvbiwgQUNUSVZFKSAmJiAhdi5sb2NhbElzUmVzaXppbmcpe1xyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUodi5zbGlkZUluZGV4LCB2LnNsaWRlQW5jaG9yLCB2LmFuY2hvckxpbmssIHYuc2VjdGlvbkluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGVyZm9ybUhvcml6b250YWxNb3ZlKHNsaWRlcywgdiwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYWZ0ZXJTbGlkZUxvYWRzKHYpe1xyXG4gICAgICAgICAgICBhY3RpdmVTbGlkZXNOYXZpZ2F0aW9uKHYuc2xpZGVzTmF2LCB2LnNsaWRlSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgLy9pZiB0aGUgc2l0ZSBpcyBub3QganVzdCByZXNpemluZyBhbmQgcmVhZGp1c3RpbmcgdGhlIHNsaWRlc1xyXG4gICAgICAgICAgICBpZighdi5sb2NhbElzUmVzaXppbmcpe1xyXG4gICAgICAgICAgICAgICAgaWYoaXNGdW5jdGlvbiggb3B0aW9ucy5hZnRlclNsaWRlTG9hZCApKXtcclxuICAgICAgICAgICAgICAgICAgICBmaXJlQ2FsbGJhY2soJ2FmdGVyU2xpZGVMb2FkJywgdik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy9uZWVkcyB0byBiZSBpbnNpZGUgdGhlIGNvbmRpdGlvbiB0byBwcmV2ZW50IHByb2JsZW1zIHdpdGggY29udGludW91c1ZlcnRpY2FsIGFuZCBzY3JvbGxIb3Jpem9udGFsbHlcclxuICAgICAgICAgICAgICAgIC8vYW5kIHRvIHByZXZlbnQgZG91YmxlIHNjcm9sbCByaWdodCBhZnRlciBhIHdpbmRvd3MgcmVzaXplXHJcbiAgICAgICAgICAgICAgICBjYW5TY3JvbGwgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHBsYXlNZWRpYSh2LmRlc3RpbnkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2xldHRpbmcgdGhlbSBzbGlkZSBhZ2FpblxyXG4gICAgICAgICAgICBzbGlkZU1vdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBQZXJmb3JtcyB0aGUgaG9yaXpvbnRhbCBtb3ZlbWVudC4gKENTUzMgb3IgalF1ZXJ5KVxyXG4gICAgICAgICpcclxuICAgICAgICAqIEBwYXJhbSBmaXJlQ2FsbGJhY2sge0Jvb2x9IC0gZGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0byBmaXJlIHRoZSBjYWxsYmFja1xyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gcGVyZm9ybUhvcml6b250YWxNb3ZlKHNsaWRlcywgdiwgZmlyZUNhbGxiYWNrKXtcclxuICAgICAgICAgICAgdmFyIGRlc3RpbnlQb3MgPSB2LmRlc3RpbnlQb3M7XHJcblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLmNzczMpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZTNkID0gJ3RyYW5zbGF0ZTNkKC0nICsgTWF0aC5yb3VuZChkZXN0aW55UG9zLmxlZnQpICsgJ3B4LCAwcHgsIDBweCknO1xyXG5cclxuICAgICAgICAgICAgICAgIEZQLnRlc3QudHJhbnNsYXRlM2RIW3Yuc2VjdGlvbkluZGV4XSA9IHRyYW5zbGF0ZTNkO1xyXG4gICAgICAgICAgICAgICAgY3NzKGFkZEFuaW1hdGlvbigkKFNMSURFU19DT05UQUlORVJfU0VMLCBzbGlkZXMpKSwgZ2V0VHJhbnNmb3Jtcyh0cmFuc2xhdGUzZCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGFmdGVyU2xpZGVMb2Fkc0lkID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGZpcmVDYWxsYmFjayl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyU2xpZGVMb2Fkcyh2KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCBvcHRpb25zLnNjcm9sbGluZ1NwZWVkKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBGUC50ZXN0LmxlZnRbdi5zZWN0aW9uSW5kZXhdID0gTWF0aC5yb3VuZChkZXN0aW55UG9zLmxlZnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNjcm9sbFRvKHNsaWRlcywgTWF0aC5yb3VuZChkZXN0aW55UG9zLmxlZnQpLCBvcHRpb25zLnNjcm9sbGluZ1NwZWVkLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGZpcmVDYWxsYmFjayl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyU2xpZGVMb2Fkcyh2KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTZXRzIHRoZSBzdGF0ZSBmb3IgdGhlIGhvcml6b250YWwgYnVsbGV0IG5hdmlnYXRpb25zLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gYWN0aXZlU2xpZGVzTmF2aWdhdGlvbihzbGlkZXNOYXYsIHNsaWRlSW5kZXgpe1xyXG4gICAgICAgICAgICBpZihvcHRpb25zLnNsaWRlc05hdmlnYXRpb24gJiYgc2xpZGVzTmF2ICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoJChBQ1RJVkVfU0VMLCBzbGlkZXNOYXYpLCBBQ1RJVkUpO1xyXG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoICQoJ2EnLCAkKCdsaScsIHNsaWRlc05hdilbc2xpZGVJbmRleF0gKSwgQUNUSVZFKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHByZXZpb3VzSGVpZ2h0ID0gd2luZG93c0hlaWdodDtcclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAqIFJlc2l6ZSBldmVudCBoYW5kbGVyLlxyXG4gICAgICAgICovICAgICAgICBcclxuICAgICAgICBmdW5jdGlvbiByZXNpemVIYW5kbGVyKCl7XHJcbiAgICAgICAgICAgIGlzUmVzaXppbmcgPSB0cnVlO1xyXG4gXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChyZXNpemVJZCk7XHJcblxyXG4gICAgICAgICAgICAvL2luIG9yZGVyIHRvIGNhbGwgdGhlIGZ1bmN0aW9ucyBvbmx5IHdoZW4gdGhlIHJlc2l6ZSBpcyBmaW5pc2hlZFxyXG4gICAgICAgICAgICAvL2h0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDI5ODYxMi9qcXVlcnktaG93LXRvLWNhbGwtcmVzaXplLWV2ZW50LW9ubHktb25jZS1pdHMtZmluaXNoZWQtcmVzaXppbmcgICAgXHJcbiAgICAgICAgICAgIHJlc2l6ZUlkID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAgICAgICAgIC8vaXNzdWUgIzMzMzYgXHJcbiAgICAgICAgICAgICAgICAvLyhzb21lIGFwcHMgb3IgYnJvd3NlcnMsIGxpa2UgQ2hyb21lL0ZpcmVmb3ggZm9yIE1vYmlsZSB0YWtlIHRpbWUgdG8gcmVwb3J0IHRoZSByZWFsIGhlaWdodClcclxuICAgICAgICAgICAgICAgIC8vc28gd2UgY2hlY2sgaXQgMyB0aW1lcyB3aXRoIGludGVydmFscyBpbiB0aGF0IGNhc2VcclxuICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGk8IDQ7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzaXplSGFuZGxlcklkID0gc2V0VGltZW91dChyZXNpemVBY3Rpb25zLCAyMDAgKiBpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMjAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogV2hlbiByZXNpemluZyB0aGUgc2l0ZSwgd2UgYWRqdXN0IHRoZSBoZWlnaHRzIG9mIHRoZSBzZWN0aW9ucywgc2xpbVNjcm9sbC4uLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gcmVzaXplQWN0aW9ucygpe1xyXG5cclxuICAgICAgICAgICAgLy9jaGVja2luZyBpZiBpdCBuZWVkcyB0byBnZXQgcmVzcG9uc2l2ZVxyXG4gICAgICAgICAgICByZXNwb25zaXZlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyByZWJ1aWxkIGltbWVkaWF0ZWx5IG9uIHRvdWNoIGRldmljZXNcclxuICAgICAgICAgICAgaWYgKGlzVG91Y2hEZXZpY2UpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2lmIHRoZSBrZXlib2FyZCBpcyBOT1QgdmlzaWJsZVxyXG4gICAgICAgICAgICAgICAgaWYgKCFtYXRjaGVzKGFjdGl2ZUVsZW1lbnQsICd0ZXh0YXJlYScpICYmICFtYXRjaGVzKGFjdGl2ZUVsZW1lbnQsICdpbnB1dCcpICYmICFtYXRjaGVzKGFjdGl2ZUVsZW1lbnQsICdzZWxlY3QnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50SGVpZ2h0ID0gZ2V0V2luZG93SGVpZ2h0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vbWFraW5nIHN1cmUgdGhlIGNoYW5nZSBpbiB0aGUgdmlld3BvcnQgc2l6ZSBpcyBlbm91Z2ggdG8gZm9yY2UgYSByZWJ1aWxkLiAoMjAgJSBvZiB0aGUgd2luZG93IHRvIGF2b2lkIHByb2JsZW1zIHdoZW4gaGlkZGluZyBzY3JvbGwgYmFycylcclxuICAgICAgICAgICAgICAgICAgICBpZiggTWF0aC5hYnMoY3VycmVudEhlaWdodCAtIHByZXZpb3VzSGVpZ2h0KSA+ICgyMCAqIE1hdGgubWF4KHByZXZpb3VzSGVpZ2h0LCBjdXJyZW50SGVpZ2h0KSAvIDEwMCkgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVCdWlsZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNIZWlnaHQgPSBjdXJyZW50SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgYWRqdXN0VG9OZXdWaWV3cG9ydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIENoZWNrcyBpZiB0aGUgc2l0ZSBuZWVkcyB0byBnZXQgcmVzcG9uc2l2ZSBhbmQgZGlzYWJsZXMgYXV0b1Njcm9sbGluZyBpZiBzby5cclxuICAgICAgICAqIEEgY2xhc3MgYGZwLXJlc3BvbnNpdmVgIGlzIGFkZGVkIHRvIHRoZSBwbHVnaW4ncyBjb250YWluZXIgaW4gY2FzZSB0aGUgdXNlciB3YW50cyB0byB1c2UgaXQgZm9yIGhpcyBvd24gcmVzcG9uc2l2ZSBDU1MuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiByZXNwb25zaXZlKCl7XHJcbiAgICAgICAgICAgIHZhciB3aWR0aExpbWl0ID0gb3B0aW9ucy5yZXNwb25zaXZlIHx8IG9wdGlvbnMucmVzcG9uc2l2ZVdpZHRoOyAvL2JhY2t3YXJkcyBjb21wYXRpYmxpdHlcclxuICAgICAgICAgICAgdmFyIGhlaWdodExpbWl0ID0gb3B0aW9ucy5yZXNwb25zaXZlSGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgLy9vbmx5IGNhbGN1bGF0aW5nIHdoYXQgd2UgbmVlZC4gUmVtZW1iZXIgaXRzIGNhbGxlZCBvbiB0aGUgcmVzaXplIGV2ZW50LlxyXG4gICAgICAgICAgICB2YXIgaXNCcmVha2luZ1BvaW50V2lkdGggPSB3aWR0aExpbWl0ICYmIHdpbmRvdy5pbm5lcldpZHRoIDwgd2lkdGhMaW1pdDtcclxuICAgICAgICAgICAgdmFyIGlzQnJlYWtpbmdQb2ludEhlaWdodCA9IGhlaWdodExpbWl0ICYmIHdpbmRvdy5pbm5lckhlaWdodCA8IGhlaWdodExpbWl0O1xyXG5cclxuICAgICAgICAgICAgaWYod2lkdGhMaW1pdCAmJiBoZWlnaHRMaW1pdCl7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXNwb25zaXZlKGlzQnJlYWtpbmdQb2ludFdpZHRoIHx8IGlzQnJlYWtpbmdQb2ludEhlaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZih3aWR0aExpbWl0KXtcclxuICAgICAgICAgICAgICAgIHNldFJlc3BvbnNpdmUoaXNCcmVha2luZ1BvaW50V2lkdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoaGVpZ2h0TGltaXQpe1xyXG4gICAgICAgICAgICAgICAgc2V0UmVzcG9uc2l2ZShpc0JyZWFraW5nUG9pbnRIZWlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEFkZHMgdHJhbnNpdGlvbiBhbmltYXRpb25zIGZvciB0aGUgZ2l2ZW4gZWxlbWVudFxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkQW5pbWF0aW9uKGVsZW1lbnQpe1xyXG4gICAgICAgICAgICB2YXIgdHJhbnNpdGlvbiA9ICdhbGwgJyArIG9wdGlvbnMuc2Nyb2xsaW5nU3BlZWQgKyAnbXMgJyArIG9wdGlvbnMuZWFzaW5nY3NzMztcclxuXHJcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIE5PX1RSQU5TSVRJT04pO1xyXG4gICAgICAgICAgICByZXR1cm4gY3NzKGVsZW1lbnQsIHtcclxuICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zaXRpb24nOiB0cmFuc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgJ3RyYW5zaXRpb24nOiB0cmFuc2l0aW9uXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBSZW1vdmUgdHJhbnNpdGlvbiBhbmltYXRpb25zIGZvciB0aGUgZ2l2ZW4gZWxlbWVudFxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlQW5pbWF0aW9uKGVsZW1lbnQpe1xyXG4gICAgICAgICAgICByZXR1cm4gYWRkQ2xhc3MoZWxlbWVudCwgTk9fVFJBTlNJVElPTik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEFjdGl2YXRpbmcgdGhlIHZlcnRpY2FsIG5hdmlnYXRpb24gYnVsbGV0cyBhY2NvcmRpbmcgdG8gdGhlIGdpdmVuIHNsaWRlIG5hbWUuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBhY3RpdmF0ZU5hdkRvdHMobmFtZSwgc2VjdGlvbkluZGV4KXtcclxuICAgICAgICAgICAgaWYob3B0aW9ucy5uYXZpZ2F0aW9uICYmICQoU0VDVElPTl9OQVZfU0VMKVswXSAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVDbGFzcygkKEFDVElWRV9TRUwsICQoU0VDVElPTl9OQVZfU0VMKVswXSksIEFDVElWRSk7XHJcbiAgICAgICAgICAgICAgICBpZihuYW1lKXtcclxuICAgICAgICAgICAgICAgICAgICBhZGRDbGFzcyggJCgnYVtocmVmPVwiIycgKyBuYW1lICsgJ1wiXScsICQoU0VDVElPTl9OQVZfU0VMKVswXSksIEFDVElWRSk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBhZGRDbGFzcygkKCdhJywgJCgnbGknLCAkKFNFQ1RJT05fTkFWX1NFTClbMF0pW3NlY3Rpb25JbmRleF0pLCBBQ1RJVkUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEFjdGl2YXRpbmcgdGhlIHdlYnNpdGUgbWFpbiBtZW51IGVsZW1lbnRzIGFjY29yZGluZyB0byB0aGUgZ2l2ZW4gc2xpZGUgbmFtZS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGFjdGl2YXRlTWVudUVsZW1lbnQobmFtZSl7XHJcbiAgICAgICAgICAgICQob3B0aW9ucy5tZW51KS5mb3JFYWNoKGZ1bmN0aW9uKG1lbnUpIHtcclxuICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMubWVudSAmJiBtZW51ICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKCQoQUNUSVZFX1NFTCwgbWVudSksIEFDVElWRSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkQ2xhc3MoJCgnW2RhdGEtbWVudWFuY2hvcj1cIicrbmFtZSsnXCJdJywgbWVudSksIEFDVElWRSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTZXRzIHRvIGFjdGl2ZSB0aGUgY3VycmVudCBtZW51IGFuZCB2ZXJ0aWNhbCBuYXYgaXRlbXMuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBhY3RpdmF0ZU1lbnVBbmROYXYoYW5jaG9yLCBpbmRleCl7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlTWVudUVsZW1lbnQoYW5jaG9yKTtcclxuICAgICAgICAgICAgYWN0aXZhdGVOYXZEb3RzKGFuY2hvciwgaW5kZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBSZXR1bnMgYHVwYCBvciBgZG93bmAgZGVwZW5kaW5nIG9uIHRoZSBzY3JvbGxpbmcgbW92ZW1lbnQgdG8gcmVhY2ggaXRzIGRlc3RpbmF0aW9uXHJcbiAgICAgICAgKiBmcm9tIHRoZSBjdXJyZW50IHNlY3Rpb24uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZXRZbW92ZW1lbnQoZGVzdGlueSl7XHJcbiAgICAgICAgICAgIHZhciBmcm9tSW5kZXggPSBpbmRleCgkKFNFQ1RJT05fQUNUSVZFX1NFTClbMF0sIFNFQ1RJT05fU0VMKTtcclxuICAgICAgICAgICAgdmFyIHRvSW5kZXggPSBpbmRleChkZXN0aW55LCBTRUNUSU9OX1NFTCk7XHJcbiAgICAgICAgICAgIGlmKCBmcm9tSW5kZXggPT0gdG9JbmRleCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ25vbmUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGZyb21JbmRleCA+IHRvSW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICd1cCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICdkb3duJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogUmV0dW5zIGByaWdodGAgb3IgYGxlZnRgIGRlcGVuZGluZyBvbiB0aGUgc2Nyb2xsaW5nIG1vdmVtZW50IHRvIHJlYWNoIGl0cyBkZXN0aW5hdGlvblxyXG4gICAgICAgICogZnJvbSB0aGUgY3VycmVudCBzbGlkZS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFhtb3ZlbWVudChmcm9tSW5kZXgsIHRvSW5kZXgpe1xyXG4gICAgICAgICAgICBpZiggZnJvbUluZGV4ID09IHRvSW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdub25lJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihmcm9tSW5kZXggPiB0b0luZGV4KXtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnbGVmdCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICdyaWdodCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBhZGRUYWJsZUNsYXNzKGVsZW1lbnQpe1xyXG4gICAgICAgICAgICAvL0luIGNhc2Ugd2UgYXJlIHN0eWxpbmcgZm9yIHRoZSAybmQgdGltZSBhcyBpbiB3aXRoIHJlcG9uc2l2ZVNsaWRlc1xyXG4gICAgICAgICAgICBpZighaGFzQ2xhc3MoZWxlbWVudCwgVEFCTEUpKXtcclxuICAgICAgICAgICAgICAgIHZhciB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTmFtZSA9IFRBQkxFX0NFTEw7XHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyLnN0eWxlLmhlaWdodCA9IGdldFRhYmxlSGVpZ2h0KGVsZW1lbnQpICsgJ3B4JztcclxuXHJcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhlbGVtZW50LCBUQUJMRSk7XHJcbiAgICAgICAgICAgICAgICB3cmFwSW5uZXIoZWxlbWVudCwgd3JhcHBlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldFRhYmxlSGVpZ2h0KGVsZW1lbnQpe1xyXG4gICAgICAgICAgICB2YXIgc2VjdGlvbkhlaWdodCA9IHdpbmRvd3NIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLnBhZGRpbmdUb3AgfHwgb3B0aW9ucy5wYWRkaW5nQm90dG9tKXtcclxuICAgICAgICAgICAgICAgIHZhciBzZWN0aW9uID0gZWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGlmKCFoYXNDbGFzcyhzZWN0aW9uLCBTRUNUSU9OKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VjdGlvbiA9IGNsb3Nlc3QoZWxlbWVudCwgU0VDVElPTl9TRUwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwYWRkaW5ncyA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoc2VjdGlvbilbJ3BhZGRpbmctdG9wJ10pICsgcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShzZWN0aW9uKVsncGFkZGluZy1ib3R0b20nXSk7XHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uSGVpZ2h0ID0gKHdpbmRvd3NIZWlnaHQgLSBwYWRkaW5ncyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzZWN0aW9uSGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBBZGRzIGEgY3NzMyB0cmFuc2Zvcm0gcHJvcGVydHkgdG8gdGhlIGNvbnRhaW5lciBjbGFzcyB3aXRoIG9yIHdpdGhvdXQgYW5pbWF0aW9uIGRlcGVuZGluZyBvbiB0aGUgYW5pbWF0ZWQgcGFyYW0uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiB0cmFuc2Zvcm1Db250YWluZXIodHJhbnNsYXRlM2QsIGFuaW1hdGVkKXtcclxuICAgICAgICAgICAgaWYoYW5pbWF0ZWQpe1xyXG4gICAgICAgICAgICAgICAgYWRkQW5pbWF0aW9uKGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQW5pbWF0aW9uKGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNzcyhjb250YWluZXIsIGdldFRyYW5zZm9ybXModHJhbnNsYXRlM2QpKTtcclxuICAgICAgICAgICAgRlAudGVzdC50cmFuc2xhdGUzZCA9IHRyYW5zbGF0ZTNkO1xyXG5cclxuICAgICAgICAgICAgLy9zeW5jcm9ub3VzbHkgcmVtb3ZpbmcgdGhlIGNsYXNzIGFmdGVyIHRoZSBhbmltYXRpb24gaGFzIGJlZW4gYXBwbGllZC5cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoY29udGFpbmVyLCBOT19UUkFOU0lUSU9OKTtcclxuICAgICAgICAgICAgfSwxMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEdldHMgYSBzZWN0aW9uIGJ5IGl0cyBhbmNob3IgLyBpbmRleFxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0U2VjdGlvbkJ5QW5jaG9yKHNlY3Rpb25BbmNob3Ipe1xyXG4gICAgICAgICAgICB2YXIgc2VjdGlvbiA9ICQoU0VDVElPTl9TRUwgKyAnW2RhdGEtYW5jaG9yPVwiJytzZWN0aW9uQW5jaG9yKydcIl0nLCBjb250YWluZXIpWzBdO1xyXG4gICAgICAgICAgICBpZighc2VjdGlvbil7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VjdGlvbkluZGV4ID0gdHlwZW9mIHNlY3Rpb25BbmNob3IgIT09ICd1bmRlZmluZWQnID8gc2VjdGlvbkFuY2hvciAtMSA6IDA7XHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uID0gJChTRUNUSU9OX1NFTClbc2VjdGlvbkluZGV4XTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNlY3Rpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEdldHMgYSBzbGlkZSBpbnNpZGUgYSBnaXZlbiBzZWN0aW9uIGJ5IGl0cyBhbmNob3IgLyBpbmRleFxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0U2xpZGVCeUFuY2hvcihzbGlkZUFuY2hvciwgc2VjdGlvbil7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZSA9ICQoU0xJREVfU0VMICsgJ1tkYXRhLWFuY2hvcj1cIicrc2xpZGVBbmNob3IrJ1wiXScsIHNlY3Rpb24pWzBdO1xyXG4gICAgICAgICAgICBpZihzbGlkZSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIHNsaWRlQW5jaG9yID0gdHlwZW9mIHNsaWRlQW5jaG9yICE9PSAndW5kZWZpbmVkJyA/IHNsaWRlQW5jaG9yIDogMDtcclxuICAgICAgICAgICAgICAgIHNsaWRlID0gJChTTElERV9TRUwsIHNlY3Rpb24pW3NsaWRlQW5jaG9yXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNsaWRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTY3JvbGxzIHRvIHRoZSBnaXZlbiBzZWN0aW9uIGFuZCBzbGlkZSBhbmNob3JzXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzY3JvbGxQYWdlQW5kU2xpZGUoc2VjdGlvbkFuY2hvciwgc2xpZGVBbmNob3Ipe1xyXG4gICAgICAgICAgICB2YXIgc2VjdGlvbiA9IGdldFNlY3Rpb25CeUFuY2hvcihzZWN0aW9uQW5jaG9yKTtcclxuXHJcbiAgICAgICAgICAgIC8vZG8gbm90aGluZyBpZiB0aGVyZSdzIG5vIHNlY3Rpb24gd2l0aCB0aGUgZ2l2ZW4gYW5jaG9yIG5hbWVcclxuICAgICAgICAgICAgaWYoc2VjdGlvbiA9PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB2YXIgc2xpZGUgPSBnZXRTbGlkZUJ5QW5jaG9yKHNsaWRlQW5jaG9yLCBzZWN0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIC8vd2UgbmVlZCB0byBzY3JvbGwgdG8gdGhlIHNlY3Rpb24gYW5kIHRoZW4gdG8gdGhlIHNsaWRlXHJcbiAgICAgICAgICAgIGlmIChnZXRBbmNob3Ioc2VjdGlvbikgIT09IGxhc3RTY3JvbGxlZERlc3RpbnkgJiYgIWhhc0NsYXNzKHNlY3Rpb24sIEFDVElWRSkpe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsUGFnZShzZWN0aW9uLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFNsaWRlcihzbGlkZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2lmIHdlIHdlcmUgYWxyZWFkeSBpbiB0aGUgc2VjdGlvblxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsU2xpZGVyKHNsaWRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTY3JvbGxzIHRoZSBzbGlkZXIgdG8gdGhlIGdpdmVuIHNsaWRlIGRlc3RpbmF0aW9uIGZvciB0aGUgZ2l2ZW4gc2VjdGlvblxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsU2xpZGVyKHNsaWRlKXtcclxuICAgICAgICAgICAgaWYoc2xpZGUgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBsYW5kc2NhcGVTY3JvbGwoY2xvc2VzdChzbGlkZSwgU0xJREVTX1dSQVBQRVJfU0VMKSwgc2xpZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIENyZWF0ZXMgYSBsYW5kc2NhcGUgbmF2aWdhdGlvbiBiYXIgd2l0aCBkb3RzIGZvciBob3Jpem9udGFsIHNsaWRlcnMuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBhZGRTbGlkZXNOYXZpZ2F0aW9uKHNlY3Rpb24sIG51bVNsaWRlcyl7XHJcbiAgICAgICAgICAgIGFwcGVuZFRvKGNyZWF0ZUVsZW1lbnRGcm9tSFRNTCgnPGRpdiBjbGFzcz1cIicgKyBTTElERVNfTkFWICsgJ1wiPjx1bD48L3VsPjwvZGl2PicpLCBzZWN0aW9uKTtcclxuICAgICAgICAgICAgdmFyIG5hdiA9ICQoU0xJREVTX05BVl9TRUwsIHNlY3Rpb24pWzBdO1xyXG5cclxuICAgICAgICAgICAgLy90b3Agb3IgYm90dG9tXHJcbiAgICAgICAgICAgIGFkZENsYXNzKG5hdiwgJ2ZwLScgKyBvcHRpb25zLnNsaWRlc05hdlBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpPCBudW1TbGlkZXM7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGUgPSAkKFNMSURFX1NFTCwgc2VjdGlvbilbaV07XHJcbiAgICAgICAgICAgICAgICBhcHBlbmRUbyhjcmVhdGVFbGVtZW50RnJvbUhUTUwoJzxsaT48YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzPVwiZnAtc3Itb25seVwiPicrIGdldEJ1bGxldExpbmtOYW1lKGksICdTbGlkZScsIHNsaWRlKSArJzwvc3Bhbj48c3Bhbj48L3NwYW4+PC9hPjwvbGk+JyksICQoJ3VsJywgbmF2KVswXSApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2NlbnRlcmluZyBpdFxyXG4gICAgICAgICAgICBjc3MobmF2LCB7J21hcmdpbi1sZWZ0JzogJy0nICsgKG5hdi5pbm5lcldpZHRoLzIpICsgJ3B4J30pO1xyXG5cclxuICAgICAgICAgICAgYWRkQ2xhc3MoJCgnYScsICQoJ2xpJywgbmF2KVswXSApLCBBQ1RJVkUpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2V0cyB0aGUgc3RhdGUgb2YgdGhlIHdlYnNpdGUgZGVwZW5kaW5nIG9uIHRoZSBhY3RpdmUgc2VjdGlvbi9zbGlkZS5cclxuICAgICAgICAqIEl0IGNoYW5nZXMgdGhlIFVSTCBoYXNoIHdoZW4gbmVlZGVkIGFuZCB1cGRhdGVzIHRoZSBib2R5IGNsYXNzLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0U3RhdGUoc2xpZGVJbmRleCwgc2xpZGVBbmNob3IsIGFuY2hvckxpbmssIHNlY3Rpb25JbmRleCl7XHJcbiAgICAgICAgICAgIHZhciBzZWN0aW9uSGFzaCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5hbmNob3JzLmxlbmd0aCAmJiAhb3B0aW9ucy5sb2NrQW5jaG9ycyl7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9pc24ndCBpdCB0aGUgZmlyc3Qgc2xpZGU/XHJcbiAgICAgICAgICAgICAgICBpZihzbGlkZUluZGV4KXtcclxuICAgICAgICAgICAgICAgICAgICBpZihhbmNob3JMaW5rICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uSGFzaCA9IGFuY2hvckxpbms7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL3NsaWRlIHdpdGhvdXQgYW5jaG9yIGxpbms/IFdlIHRha2UgdGhlIGluZGV4IGluc3RlYWQuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoc2xpZGVBbmNob3IgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlQW5jaG9yID0gc2xpZGVJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RTY3JvbGxlZFNsaWRlID0gc2xpZGVBbmNob3I7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VXJsSGFzaChzZWN0aW9uSGFzaCArICcvJyArIHNsaWRlQW5jaG9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2ZpcnN0IHNsaWRlIHdvbid0IGhhdmUgc2xpZGUgYW5jaG9yLCBqdXN0IHRoZSBzZWN0aW9uIG9uZVxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoc2xpZGVJbmRleCAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0U2Nyb2xsZWRTbGlkZSA9IHNsaWRlQW5jaG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVybEhhc2goYW5jaG9yTGluayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy9zZWN0aW9uIHdpdGhvdXQgc2xpZGVzXHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVybEhhc2goYW5jaG9yTGluayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldEJvZHlDbGFzcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTZXRzIHRoZSBVUkwgaGFzaC5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNldFVybEhhc2godXJsKXtcclxuICAgICAgICAgICAgaWYob3B0aW9ucy5yZWNvcmRIaXN0b3J5KXtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhhc2ggPSB1cmw7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgLy9Nb2JpbGUgQ2hyb21lIGRvZXNuJ3Qgd29yayB0aGUgbm9ybWFsIHdheSwgc28uLi4gbGV0cyB1c2UgSFRNTDUgZm9yIHBob25lcyA6KVxyXG4gICAgICAgICAgICAgICAgaWYoaXNUb3VjaERldmljZSB8fCBpc1RvdWNoKXtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUodW5kZWZpbmVkLCB1bmRlZmluZWQsICcjJyArIHVybCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYmFzZVVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoIGJhc2VVcmwgKyAnIycgKyB1cmwgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBHZXRzIHRoZSBhbmNob3IgZm9yIHRoZSBnaXZlbiBzbGlkZSAvIHNlY3Rpb24uIEl0cyBpbmRleCB3aWxsIGJlIHVzZWQgaWYgdGhlcmUncyBub25lLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0QW5jaG9yKGVsZW1lbnQpe1xyXG4gICAgICAgICAgICBpZighZWxlbWVudCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgYW5jaG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW5jaG9yJyk7XHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50SW5kZXggPSBpbmRleChlbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgIC8vU2xpZGUgd2l0aG91dCBhbmNob3IgbGluaz8gV2UgdGFrZSB0aGUgaW5kZXggaW5zdGVhZC5cclxuICAgICAgICAgICAgaWYoYW5jaG9yID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgYW5jaG9yID0gZWxlbWVudEluZGV4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYW5jaG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTZXRzIGEgY2xhc3MgZm9yIHRoZSBib2R5IG9mIHRoZSBwYWdlIGRlcGVuZGluZyBvbiB0aGUgYWN0aXZlIHNlY3Rpb24gLyBzbGlkZVxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0Qm9keUNsYXNzKCl7XHJcbiAgICAgICAgICAgIHZhciBzZWN0aW9uID0gJChTRUNUSU9OX0FDVElWRV9TRUwpWzBdO1xyXG4gICAgICAgICAgICB2YXIgc2xpZGUgPSAkKFNMSURFX0FDVElWRV9TRUwsIHNlY3Rpb24pWzBdO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNlY3Rpb25BbmNob3IgPSBnZXRBbmNob3Ioc2VjdGlvbik7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZUFuY2hvciA9IGdldEFuY2hvcihzbGlkZSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGV4dCA9IFN0cmluZyhzZWN0aW9uQW5jaG9yKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHNsaWRlKXtcclxuICAgICAgICAgICAgICAgIHRleHQgPSB0ZXh0ICsgJy0nICsgc2xpZGVBbmNob3I7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vY2hhbmdpbmcgc2xhc2ggZm9yIGRhc2ggdG8gbWFrZSBpdCBhIHZhbGlkIENTUyBzdHlsZVxyXG4gICAgICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKCcvJywgJy0nKS5yZXBsYWNlKCcjJywnJyk7XHJcblxyXG4gICAgICAgICAgICAvL3JlbW92aW5nIHByZXZpb3VzIGFuY2hvciBjbGFzc2VzXHJcbiAgICAgICAgICAgIHZhciBjbGFzc1JlID0gbmV3IFJlZ0V4cCgnXFxcXGJcXFxccz8nICsgVklFV0lOR19QUkVGSVggKyAnLVteXFxcXHNdK1xcXFxiJywgXCJnXCIpO1xyXG4gICAgICAgICAgICAkYm9keS5jbGFzc05hbWUgPSAkYm9keS5jbGFzc05hbWUucmVwbGFjZShjbGFzc1JlLCAnJyk7XHJcblxyXG4gICAgICAgICAgICAvL2FkZGluZyB0aGUgY3VycmVudCBhbmNob3JcclxuICAgICAgICAgICAgYWRkQ2xhc3MoJGJvZHksIFZJRVdJTkdfUFJFRklYICsgJy0nICsgdGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIENoZWNrcyBmb3IgdHJhbnNsYXRlM2Qgc3VwcG9ydFxyXG4gICAgICAgICogQHJldHVybiBib29sZWFuXHJcbiAgICAgICAgKiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU2NjE2NzEvZGV0ZWN0aW5nLXRyYW5zZm9ybS10cmFuc2xhdGUzZC1zdXBwb3J0XHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzdXBwb3J0M2QoKSB7XHJcbiAgICAgICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSxcclxuICAgICAgICAgICAgICAgIGhhczNkLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAnd2Via2l0VHJhbnNmb3JtJzonLXdlYmtpdC10cmFuc2Zvcm0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdPVHJhbnNmb3JtJzonLW8tdHJhbnNmb3JtJyxcclxuICAgICAgICAgICAgICAgICAgICAnbXNUcmFuc2Zvcm0nOictbXMtdHJhbnNmb3JtJyxcclxuICAgICAgICAgICAgICAgICAgICAnTW96VHJhbnNmb3JtJzonLW1vei10cmFuc2Zvcm0nLFxyXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOid0cmFuc2Zvcm0nXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy9wcmV2ZW50aW5nIHRoZSBzdHlsZSBwOmVtcHR5e2Rpc3BsYXk6IG5vbmU7fSBmcm9tIHJldHVybmluZyB0aGUgd3JvbmcgcmVzdWx0XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgICAgICAgICAgLy8gQWRkIGl0IHRvIHRoZSBib2R5IHRvIGdldCB0aGUgY29tcHV0ZWQgc3R5bGUuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGVsLCBudWxsKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIHQgaW4gdHJhbnNmb3Jtcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsLnN0eWxlW3RdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZVt0XSA9ICd0cmFuc2xhdGUzZCgxcHgsMXB4LDFweCknO1xyXG4gICAgICAgICAgICAgICAgICAgIGhhczNkID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLmdldFByb3BlcnR5VmFsdWUodHJhbnNmb3Jtc1t0XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWwpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChoYXMzZCAhPT0gdW5kZWZpbmVkICYmIGhhczNkLmxlbmd0aCA+IDAgJiYgaGFzM2QgIT09ICdub25lJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFJlbW92ZXMgdGhlIGF1dG8gc2Nyb2xsaW5nIGFjdGlvbiBmaXJlZCBieSB0aGUgbW91c2Ugd2hlZWwgYW5kIHRyYWNrcGFkLlxyXG4gICAgICAgICogQWZ0ZXIgdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQsIHRoZSBtb3VzZXdoZWVsIGFuZCB0cmFja3BhZCBtb3ZlbWVudHMgd29uJ3Qgc2Nyb2xsIHRocm91Z2ggc2VjdGlvbnMuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiByZW1vdmVNb3VzZVdoZWVsSGFuZGxlcigpe1xyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIE1vdXNlV2hlZWxIYW5kbGVyLCBmYWxzZSk7IC8vSUU5LCBDaHJvbWUsIFNhZmFyaSwgT3BlclxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBNb3VzZVdoZWVsSGFuZGxlciwgZmFsc2UpOyAvL0ZpcmVmb3hcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ01vek1vdXNlUGl4ZWxTY3JvbGwnLCBNb3VzZVdoZWVsSGFuZGxlciwgZmFsc2UpOyAvL29sZCBGaXJlZm94XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kZXRhY2hFdmVudCgnb25tb3VzZXdoZWVsJywgTW91c2VXaGVlbEhhbmRsZXIpOyAvL0lFIDYvNy84XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQWRkcyB0aGUgYXV0byBzY3JvbGxpbmcgYWN0aW9uIGZvciB0aGUgbW91c2Ugd2hlZWwgYW5kIHRyYWNrcGFkLlxyXG4gICAgICAgICogQWZ0ZXIgdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQsIHRoZSBtb3VzZXdoZWVsIGFuZCB0cmFja3BhZCBtb3ZlbWVudHMgd2lsbCBzY3JvbGwgdGhyb3VnaCBzZWN0aW9uc1xyXG4gICAgICAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvRXZlbnRzL3doZWVsXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBhZGRNb3VzZVdoZWVsSGFuZGxlcigpe1xyXG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gJyc7XHJcbiAgICAgICAgICAgIHZhciBfYWRkRXZlbnRMaXN0ZW5lcjtcclxuXHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcil7XHJcbiAgICAgICAgICAgICAgICBfYWRkRXZlbnRMaXN0ZW5lciA9IFwiYWRkRXZlbnRMaXN0ZW5lclwiO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIF9hZGRFdmVudExpc3RlbmVyID0gXCJhdHRhY2hFdmVudFwiO1xyXG4gICAgICAgICAgICAgICAgcHJlZml4ID0gJ29uJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gZGV0ZWN0IGF2YWlsYWJsZSB3aGVlbCBldmVudFxyXG4gICAgICAgICAgICB2YXIgc3VwcG9ydCA9ICdvbndoZWVsJyBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSA/ICd3aGVlbCcgOiAvLyBNb2Rlcm4gYnJvd3NlcnMgc3VwcG9ydCBcIndoZWVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2V3aGVlbCAhPT0gdW5kZWZpbmVkID8gJ21vdXNld2hlZWwnIDogLy8gV2Via2l0IGFuZCBJRSBzdXBwb3J0IGF0IGxlYXN0IFwibW91c2V3aGVlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAnRE9NTW91c2VTY3JvbGwnOyAvLyBsZXQncyBhc3N1bWUgdGhhdCByZW1haW5pbmcgYnJvd3NlcnMgYXJlIG9sZGVyIEZpcmVmb3hcclxuICAgICAgICAgICAgdmFyIHBhc3NpdmVFdmVudCA9IGdfc3VwcG9ydHNQYXNzaXZlID8ge3Bhc3NpdmU6IGZhbHNlIH06IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYoc3VwcG9ydCA9PSAnRE9NTW91c2VTY3JvbGwnKXtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50WyBfYWRkRXZlbnRMaXN0ZW5lciBdKHByZWZpeCArICdNb3pNb3VzZVBpeGVsU2Nyb2xsJywgTW91c2VXaGVlbEhhbmRsZXIsIHBhc3NpdmVFdmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vaGFuZGxlIE1vek1vdXNlUGl4ZWxTY3JvbGwgaW4gb2xkZXIgRmlyZWZveFxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnRbIF9hZGRFdmVudExpc3RlbmVyIF0ocHJlZml4ICsgc3VwcG9ydCwgTW91c2VXaGVlbEhhbmRsZXIsIHBhc3NpdmVFdmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQmluZGluZyB0aGUgbW91c2Vtb3ZlIHdoZW4gdGhlIG1vdXNlJ3MgbWlkZGxlIGJ1dHRvbiBpcyBwcmVzc2VkXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBhZGRNaWRkbGVXaGVlbEhhbmRsZXIoKXtcclxuICAgICAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG1vdXNlRG93bkhhbmRsZXIpO1xyXG4gICAgICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBIYW5kbGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogVW5iaW5kaW5nIHRoZSBtb3VzZW1vdmUgd2hlbiB0aGUgbW91c2UncyBtaWRkbGUgYnV0dG9uIGlzIHJlbGVhc2VkXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiByZW1vdmVNaWRkbGVXaGVlbEhhbmRsZXIoKXtcclxuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG1vdXNlRG93bkhhbmRsZXIpO1xyXG4gICAgICAgICAgICBjb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBIYW5kbGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQWRkcyB0aGUgcG9zc2liaWxpdHkgdG8gYXV0byBzY3JvbGwgdGhyb3VnaCBzZWN0aW9ucyBvbiB0b3VjaCBkZXZpY2VzLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkVG91Y2hIYW5kbGVyKCl7XHJcbiAgICAgICAgICAgIGlmKGlzVG91Y2hEZXZpY2UgfHwgaXNUb3VjaCl7XHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zLmF1dG9TY3JvbGxpbmcpe1xyXG4gICAgICAgICAgICAgICAgICAgICRib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRzLnRvdWNobW92ZSwgcHJldmVudEJvdW5jaW5nLCB7cGFzc2l2ZTogZmFsc2V9KTtcclxuICAgICAgICAgICAgICAgICAgICAkYm9keS5hZGRFdmVudExpc3RlbmVyKGV2ZW50cy50b3VjaG1vdmUsIHByZXZlbnRCb3VuY2luZywge3Bhc3NpdmU6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRvdWNoV3JhcHBlciA9IG9wdGlvbnMudG91Y2hXcmFwcGVyO1xyXG4gICAgICAgICAgICAgICAgdG91Y2hXcmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRzLnRvdWNoc3RhcnQsIHRvdWNoU3RhcnRIYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgIHRvdWNoV3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50cy50b3VjaG1vdmUsIHRvdWNoTW92ZUhhbmRsZXIsIHtwYXNzaXZlOiBmYWxzZX0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRvdWNoV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50cy50b3VjaHN0YXJ0LCB0b3VjaFN0YXJ0SGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICB0b3VjaFdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudHMudG91Y2htb3ZlLCB0b3VjaE1vdmVIYW5kbGVyLCB7cGFzc2l2ZTogZmFsc2V9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBSZW1vdmVzIHRoZSBhdXRvIHNjcm9sbGluZyBmb3IgdG91Y2ggZGV2aWNlcy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZVRvdWNoSGFuZGxlcigpe1xyXG4gICAgICAgICAgICBpZihpc1RvdWNoRGV2aWNlIHx8IGlzVG91Y2gpe1xyXG4gICAgICAgICAgICAgICAgLy8gbm9ybWFsU2Nyb2xsRWxlbWVudHMgcmVxdWlyZXMgaXQgb2ZmICMyNjkxXHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zLmF1dG9TY3JvbGxpbmcpe1xyXG4gICAgICAgICAgICAgICAgICAgICRib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRzLnRvdWNobW92ZSwgdG91Y2hNb3ZlSGFuZGxlciwge3Bhc3NpdmU6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudHMudG91Y2htb3ZlLCBwcmV2ZW50Qm91bmNpbmcsIHtwYXNzaXZlOiBmYWxzZX0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0b3VjaFdyYXBwZXIgPSBvcHRpb25zLnRvdWNoV3JhcHBlcjtcclxuICAgICAgICAgICAgICAgIHRvdWNoV3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50cy50b3VjaHN0YXJ0LCB0b3VjaFN0YXJ0SGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICB0b3VjaFdyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudHMudG91Y2htb3ZlLCB0b3VjaE1vdmVIYW5kbGVyLCB7cGFzc2l2ZTogZmFsc2V9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAqIFJldHVybnMgYW5kIG9iamVjdCB3aXRoIE1pY3Jvc29mdCBwb2ludGVycyAoZm9yIElFPDExIGFuZCBmb3IgSUUgPj0gMTEpXHJcbiAgICAgICAgKiBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvZG4zMDQ4ODYodj12cy44NSkuYXNweFxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0TVNQb2ludGVyKCl7XHJcbiAgICAgICAgICAgIHZhciBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgLy9JRSA+PSAxMSAmIHJlc3Qgb2YgYnJvd3NlcnNcclxuICAgICAgICAgICAgaWYod2luZG93LlBvaW50ZXJFdmVudCl7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyID0geyBkb3duOiAncG9pbnRlcmRvd24nLCBtb3ZlOiAncG9pbnRlcm1vdmUnfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9JRSA8IDExXHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyID0geyBkb3duOiAnTVNQb2ludGVyRG93bicsIG1vdmU6ICdNU1BvaW50ZXJNb3ZlJ307XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBHZXRzIHRoZSBwYWdlWCBhbmQgcGFnZVkgcHJvcGVydGllcyBkZXBlbmRpbmcgb24gdGhlIGJyb3dzZXIuXHJcbiAgICAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vYWx2YXJvdHJpZ28vZnVsbFBhZ2UuanMvaXNzdWVzLzE5NCNpc3N1ZWNvbW1lbnQtMzQwNjk4NTRcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldEV2ZW50c1BhZ2UoZSl7XHJcbiAgICAgICAgICAgIHZhciBldmVudHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50cy55ID0gKHR5cGVvZiBlLnBhZ2VZICE9PSAndW5kZWZpbmVkJyAmJiAoZS5wYWdlWSB8fCBlLnBhZ2VYKSA/IGUucGFnZVkgOiBlLnRvdWNoZXNbMF0ucGFnZVkpO1xyXG4gICAgICAgICAgICBldmVudHMueCA9ICh0eXBlb2YgZS5wYWdlWCAhPT0gJ3VuZGVmaW5lZCcgJiYgKGUucGFnZVkgfHwgZS5wYWdlWCkgPyBlLnBhZ2VYIDogZS50b3VjaGVzWzBdLnBhZ2VYKTtcclxuXHJcbiAgICAgICAgICAgIC8vaW4gdG91Y2ggZGV2aWNlcyB3aXRoIHNjcm9sbEJhcjp0cnVlLCBlLnBhZ2VZIGlzIGRldGVjdGVkLCBidXQgd2UgaGF2ZSB0byBkZWFsIHdpdGggdG91Y2ggZXZlbnRzLiAjMTAwOFxyXG4gICAgICAgICAgICBpZihpc1RvdWNoICYmIGlzUmVhbGx5VG91Y2goZSkgJiYgb3B0aW9ucy5zY3JvbGxCYXIgJiYgdHlwZW9mIGUudG91Y2hlcyAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgZXZlbnRzLnkgPSBlLnRvdWNoZXNbMF0ucGFnZVk7XHJcbiAgICAgICAgICAgICAgICBldmVudHMueCA9IGUudG91Y2hlc1swXS5wYWdlWDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2xpZGVzIHNpbGVudGx5ICh3aXRoIG5vIGFuaW1hdGlvbikgdGhlIGFjdGl2ZSBzbGlkZXIgdG8gdGhlIGdpdmVuIHNsaWRlLlxyXG4gICAgICAgICogQHBhcmFtIG5vQ2FsbGJhY2sge2Jvb2x9IHRydWUgb3IgZGVmaW5lZCAtPiBubyBjYWxsYmFja3NcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNpbGVudExhbmRzY2FwZVNjcm9sbChhY3RpdmVTbGlkZSwgbm9DYWxsYmFja3Mpe1xyXG4gICAgICAgICAgICBzZXRTY3JvbGxpbmdTcGVlZCgwLCAnaW50ZXJuYWwnKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBub0NhbGxiYWNrcyAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgLy9wcmV2ZW50aW5nIGZpcmluZyBjYWxsYmFja3MgYWZ0ZXJTbGlkZUxvYWQgZXRjLlxyXG4gICAgICAgICAgICAgICAgaXNSZXNpemluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxhbmRzY2FwZVNjcm9sbChjbG9zZXN0KGFjdGl2ZVNsaWRlLCBTTElERVNfV1JBUFBFUl9TRUwpLCBhY3RpdmVTbGlkZSk7XHJcblxyXG4gICAgICAgICAgICBpZih0eXBlb2Ygbm9DYWxsYmFja3MgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgIGlzUmVzaXppbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2V0U2Nyb2xsaW5nU3BlZWQob3JpZ2luYWxzLnNjcm9sbGluZ1NwZWVkLCAnaW50ZXJuYWwnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2Nyb2xscyBzaWxlbnRseSAod2l0aCBubyBhbmltYXRpb24pIHRoZSBwYWdlIHRvIHRoZSBnaXZlbiBZIHBvc2l0aW9uLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2lsZW50U2Nyb2xsKHRvcCl7XHJcbiAgICAgICAgICAgIC8vIFRoZSBmaXJzdCBzZWN0aW9uIGNhbiBoYXZlIGEgbmVnYXRpdmUgdmFsdWUgaW4gaU9TIDEwLiBOb3QgcXVpdGUgc3VyZSB3aHk6IC0wLjAxNDI4MjIyNjU2MjVcclxuICAgICAgICAgICAgLy8gdGhhdCdzIHdoeSB3ZSByb3VuZCBpdCB0byAwLlxyXG4gICAgICAgICAgICB2YXIgcm91bmRlZFRvcCA9IE1hdGgucm91bmQodG9wKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmNzczMgJiYgb3B0aW9ucy5hdXRvU2Nyb2xsaW5nICYmICFvcHRpb25zLnNjcm9sbEJhcil7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHJhbnNsYXRlM2QgPSAndHJhbnNsYXRlM2QoMHB4LCAtJyArIHJvdW5kZWRUb3AgKyAncHgsIDBweCknO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtQ29udGFpbmVyKHRyYW5zbGF0ZTNkLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihvcHRpb25zLmF1dG9TY3JvbGxpbmcgJiYgIW9wdGlvbnMuc2Nyb2xsQmFyKXtcclxuICAgICAgICAgICAgICAgIGNzcyhjb250YWluZXIsIHsndG9wJzogLXJvdW5kZWRUb3AgKyAncHgnfSk7XHJcbiAgICAgICAgICAgICAgICBGUC50ZXN0LnRvcCA9IC1yb3VuZGVkVG9wICsgJ3B4JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbFNldHRpbmdzID0gZ2V0U2Nyb2xsU2V0dGluZ3Mocm91bmRlZFRvcCk7XHJcbiAgICAgICAgICAgICAgICBzZXRTY3JvbGxpbmcoc2Nyb2xsU2V0dGluZ3MuZWxlbWVudCwgc2Nyb2xsU2V0dGluZ3Mub3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogUmV0dXJucyB0aGUgY3Jvc3MtYnJvd3NlciB0cmFuc2Zvcm0gc3RyaW5nLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0VHJhbnNmb3Jtcyh0cmFuc2xhdGUzZCl7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiB0cmFuc2xhdGUzZCxcclxuICAgICAgICAgICAgICAgICctbW96LXRyYW5zZm9ybSc6IHRyYW5zbGF0ZTNkLFxyXG4gICAgICAgICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOnRyYW5zbGF0ZTNkLFxyXG4gICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6IHRyYW5zbGF0ZTNkXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEFsbG93aW5nIG9yIGRpc2FsbG93aW5nIHRoZSBtb3VzZS9zd2lwZSBzY3JvbGwgaW4gYSBnaXZlbiBkaXJlY3Rpb24uIChub3QgZm9yIGtleWJvYXJkKVxyXG4gICAgICAgICogQHR5cGUgIG0gKG1vdXNlKSBvciBrIChrZXlib2FyZClcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNldElzU2Nyb2xsQWxsb3dlZCh2YWx1ZSwgZGlyZWN0aW9uLCB0eXBlKXtcclxuICAgICAgICAgICAgLy91cCwgZG93biwgbGVmdCwgcmlnaHRcclxuICAgICAgICAgICAgaWYoZGlyZWN0aW9uICE9PSAnYWxsJyl7XHJcbiAgICAgICAgICAgICAgICBpc1Njcm9sbEFsbG93ZWRbdHlwZV1bZGlyZWN0aW9uXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2FsbCBkaXJlY3Rpb25zP1xyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoaXNTY3JvbGxBbGxvd2VkW3R5cGVdKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNTY3JvbGxBbGxvd2VkW3R5cGVdW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICogRGVzdHJveXMgZnVsbHBhZ2UuanMgcGx1Z2luIGV2ZW50cyBhbmQgb3B0aW5hbGx5IGl0cyBodG1sIG1hcmt1cCBhbmQgc3R5bGVzXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBkZXN0cm95KGFsbCl7XHJcbiAgICAgICAgICAgIHNldEF1dG9TY3JvbGxpbmcoZmFsc2UsICdpbnRlcm5hbCcpO1xyXG4gICAgICAgICAgICBzZXRBbGxvd1Njcm9sbGluZyh0cnVlKTtcclxuICAgICAgICAgICAgc2V0TW91c2VIaWphY2soZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRLZXlib2FyZFNjcm9sbGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIGFkZENsYXNzKGNvbnRhaW5lciwgREVTVFJPWUVEKTtcclxuXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIGFmdGVyU2xpZGVMb2Fkc0lkLCBcclxuICAgICAgICAgICAgICAgIGFmdGVyU2VjdGlvbkxvYWRzSWQsXHJcbiAgICAgICAgICAgICAgICByZXNpemVJZCxcclxuICAgICAgICAgICAgICAgIHNjcm9sbElkLFxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsSWQyLFxyXG4gICAgICAgICAgICAgICAgZ19kb3VibGVDaGVja0hlaWdodElkLFxyXG4gICAgICAgICAgICAgICAgcmVzaXplSGFuZGxlcklkLFxyXG4gICAgICAgICAgICAgICAgZ190cmFuc2l0aW9uTGFwc2VJZFxyXG4gICAgICAgICAgICBdLmZvckVhY2goZnVuY3Rpb24odGltZW91dElkKXtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKTtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBoYXNoQ2hhbmdlSGFuZGxlcik7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlkb3duSGFuZGxlcik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywga2V5VXBIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgICAgIFsnY2xpY2snLCAndG91Y2hzdGFydCddLmZvckVhY2goZnVuY3Rpb24oZXZlbnROYW1lKXtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBkZWxlZ2F0ZWRFdmVudHMpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFsnbW91c2VlbnRlcicsICd0b3VjaHN0YXJ0JywgJ21vdXNlbGVhdmUnLCAndG91Y2hlbmQnXS5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50TmFtZSl7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgb25Nb3VzZUVudGVyT3JMZWF2ZSwgdHJ1ZSk7IC8vdHJ1ZSBpcyByZXF1aXJlZCFcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL2xldHMgbWFrZSBhIG1lc3MhXHJcbiAgICAgICAgICAgIGlmKGFsbCl7XHJcbiAgICAgICAgICAgICAgICBkZXN0cm95U3RydWN0dXJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgKiBSZW1vdmVzIGlubGluZSBzdHlsZXMgYWRkZWQgYnkgZnVsbHBhZ2UuanNcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGRlc3Ryb3lTdHJ1Y3R1cmUoKXtcclxuICAgICAgICAgICAgLy9yZXNldGluZyB0aGUgYHRvcGAgb3IgYHRyYW5zbGF0ZWAgcHJvcGVydGllcyB0byAwXHJcbiAgICAgICAgICAgIHNpbGVudFNjcm9sbCgwKTtcclxuXHJcbiAgICAgICAgICAgIC8vbG9hZGluZyBhbGwgdGhlIGxhenkgbG9hZCBjb250ZW50XHJcbiAgICAgICAgICAgICQoJ2ltZ1tkYXRhLXNyY10sIHNvdXJjZVtkYXRhLXNyY10sIGF1ZGlvW2RhdGEtc3JjXSwgaWZyYW1lW2RhdGEtc3JjXScsIGNvbnRhaW5lcikuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICAgICAgICAgIHNldFNyYyhpdGVtLCAnc3JjJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJCgnaW1nW2RhdGEtc3Jjc2V0XScpLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgICAgICAgICBzZXRTcmMoaXRlbSwgJ3NyY3NldCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJlbW92ZSgkKFNFQ1RJT05fTkFWX1NFTCArICcsICcgKyBTTElERVNfTkFWX1NFTCArICAnLCAnICsgU0xJREVTX0FSUk9XX1NFTCkpO1xyXG5cclxuICAgICAgICAgICAgLy9yZW1vdmluZyBpbmxpbmUgc3R5bGVzXHJcbiAgICAgICAgICAgIGNzcygkKFNFQ1RJT05fU0VMKSwge1xyXG4gICAgICAgICAgICAgICAgJ2hlaWdodCc6ICcnLFxyXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InIDogJycsXHJcbiAgICAgICAgICAgICAgICAncGFkZGluZyc6ICcnXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY3NzKCQoU0xJREVfU0VMKSwge1xyXG4gICAgICAgICAgICAgICAgJ3dpZHRoJzogJydcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjc3MoY29udGFpbmVyLCB7XHJcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JzogJycsXHJcbiAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAnJyxcclxuICAgICAgICAgICAgICAgICctbXMtdG91Y2gtYWN0aW9uJzogJycsXHJcbiAgICAgICAgICAgICAgICAndG91Y2gtYWN0aW9uJzogJydcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjc3MoJGh0bWxCb2R5LCB7XHJcbiAgICAgICAgICAgICAgICAnb3ZlcmZsb3cnOiAnJyxcclxuICAgICAgICAgICAgICAgICdoZWlnaHQnOiAnJ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSAuZnAtZW5hYmxlZCBjbGFzc1xyXG4gICAgICAgICAgICByZW1vdmVDbGFzcygkaHRtbCwgRU5BQkxFRCk7XHJcblxyXG4gICAgICAgICAgICAvLyByZW1vdmUgLmZwLXJlc3BvbnNpdmUgY2xhc3NcclxuICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoJGJvZHksIFJFU1BPTlNJVkUpO1xyXG5cclxuICAgICAgICAgICAgLy8gcmVtb3ZlIGFsbCBvZiB0aGUgLmZwLXZpZXdpbmctIGNsYXNzZXNcclxuICAgICAgICAgICAgJGJvZHkuY2xhc3NOYW1lLnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2xhc3NOYW1lLmluZGV4T2YoVklFV0lOR19QUkVGSVgpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoJGJvZHksIGNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy9yZW1vdmluZyBhZGRlZCBjbGFzc2VzXHJcbiAgICAgICAgICAgICQoU0VDVElPTl9TRUwgKyAnLCAnICsgU0xJREVfU0VMKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9ucy5zY3JvbGxPdmVyZmxvd0hhbmRsZXIgJiYgb3B0aW9ucy5zY3JvbGxPdmVyZmxvdyl7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5zY3JvbGxPdmVyZmxvd0hhbmRsZXIucmVtb3ZlKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoaXRlbSwgVEFCTEUgKyAnICcgKyBBQ1RJVkUgKyAnICcgKyBDT01QTEVURUxZKTtcclxuICAgICAgICAgICAgICAgIHZhciBwcmV2aW91c1N0eWxlcyA9IGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWZwLXN0eWxlcycpO1xyXG4gICAgICAgICAgICAgICAgaWYocHJldmlvdXNTdHlsZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdzdHlsZScsIGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWZwLXN0eWxlcycpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL3JlbW92aW5nIGFuY2hvcnMgaWYgdGhleSB3ZXJlIG5vdCBzZXQgdXNpbmcgdGhlIEhUTUwgbWFya3VwXHJcbiAgICAgICAgICAgICAgICBpZihoYXNDbGFzcyhpdGVtLCBTRUNUSU9OKSAmJiAhZ19pbml0aWFsQW5jaG9yc0luRG9tKXtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1hbmNob3InKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL3JlbW92aW5nIHRoZSBhcHBsaWVkIHRyYW5zaXRpb24gZnJvbSB0aGUgZnVsbHBhZ2Ugd3JhcHBlclxyXG4gICAgICAgICAgICByZW1vdmVBbmltYXRpb24oY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIC8vVW53cmFwcGluZyBjb250ZW50XHJcbiAgICAgICAgICAgIFtUQUJMRV9DRUxMX1NFTCwgU0xJREVTX0NPTlRBSU5FUl9TRUwsU0xJREVTX1dSQVBQRVJfU0VMXS5mb3JFYWNoKGZ1bmN0aW9uKHNlbGVjdG9yKXtcclxuICAgICAgICAgICAgICAgICQoc2VsZWN0b3IsIGNvbnRhaW5lcikuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICAgICAgICAgICAgICAvL3Vud3JhcCBub3QgYmVpbmcgdXNlIGluIGNhc2UgdGhlcmUncyBubyBjaGlsZCBlbGVtZW50IGluc2lkZSBhbmQgaXRzIGp1c3QgdGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIHVud3JhcChpdGVtKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vcmVtb3ZpbmcgdGhlIGFwcGxpZWQgdHJhbnNpdGlvbiBmcm9tIHRoZSBmdWxscGFnZSB3cmFwcGVyXHJcbiAgICAgICAgICAgIGNzcyhjb250YWluZXIsIHtcclxuICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zaXRpb24nOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbic6ICdub25lJ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vc2Nyb2xsaW5nIHRoZSBwYWdlIHRvIHRoZSB0b3Agd2l0aCBubyBhbmltYXRpb25cclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG5cclxuICAgICAgICAgICAgLy9yZW1vdmluZyBzZWxlY3RvcnNcclxuICAgICAgICAgICAgdmFyIHVzZWRTZWxlY3RvcnMgPSBbU0VDVElPTiwgU0xJREUsIFNMSURFU19DT05UQUlORVJdO1xyXG4gICAgICAgICAgICB1c2VkU2VsZWN0b3JzLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzcygkKCcuJyArIGl0ZW0pLCBpdGVtKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICogU2V0cyB0aGUgc3RhdGUgZm9yIGEgdmFyaWFibGUgd2l0aCBtdWx0aXBsZSBzdGF0ZXMgKG9yaWdpbmFsLCBhbmQgdGVtcG9yYWwpXHJcbiAgICAgICAgKiBTb21lIHZhcmlhYmxlcyBzdWNoIGFzIGBhdXRvU2Nyb2xsaW5nYCBvciBgcmVjb3JkSGlzdG9yeWAgbWlnaHQgY2hhbmdlIGF1dG9tYXRpY2FsbHkgaXRzIHN0YXRlIHdoZW4gdXNpbmcgYHJlc3BvbnNpdmVgIG9yIGBhdXRvU2Nyb2xsaW5nOmZhbHNlYC5cclxuICAgICAgICAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBrZWVwIHRyYWNrIG9mIGJvdGggc3RhdGVzLCB0aGUgb3JpZ2luYWwgYW5kIHRoZSB0ZW1wb3JhbCBvbmUuXHJcbiAgICAgICAgKiBJZiB0eXBlIGlzIG5vdCAnaW50ZXJuYWwnLCB0aGVuIHdlIGFzc3VtZSB0aGUgdXNlciBpcyBnbG9iYWxseSBjaGFuZ2luZyB0aGUgdmFyaWFibGUuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzZXRWYXJpYWJsZVN0YXRlKHZhcmlhYmxlLCB2YWx1ZSwgdHlwZSl7XHJcbiAgICAgICAgICAgIG9wdGlvbnNbdmFyaWFibGVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGlmKHR5cGUgIT09ICdpbnRlcm5hbCcpe1xyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxzW3ZhcmlhYmxlXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIERpc3BsYXlzIHdhcm5pbmdzXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBkaXNwbGF5V2FybmluZ3MoKXtcclxuICAgICAgICAgICAgdmFyIGwgPSBvcHRpb25zWydsaScgKyAnYycgKyAnZW5zZUsnICsgJ2UnICsgJ3knXTtcclxuICAgICAgICAgICAgdmFyIG1zZ1N0eWxlID0gJ2ZvbnQtc2l6ZTogMTVweDtiYWNrZ3JvdW5kOnllbGxvdzsnO1xyXG5cclxuICAgICAgICAgICAgaWYoIWlzT0spe1xyXG4gICAgICAgICAgICAgICAgc2hvd0Vycm9yKCdlcnJvcicsICdGdWxscGFnZS5qcyB2ZXJzaW9uIDMgaGFzIGNoYW5nZWQgaXRzIGxpY2Vuc2UgdG8gR1BMdjMgYW5kIGl0IHJlcXVpcmVzIGEgYGxpY2Vuc2VLZXlgIG9wdGlvbi4gUmVhZCBhYm91dCBpdCBoZXJlOicpO1xyXG4gICAgICAgICAgICAgICAgc2hvd0Vycm9yKCdlcnJvcicsICdodHRwczovL2dpdGh1Yi5jb20vYWx2YXJvdHJpZ28vZnVsbFBhZ2UuanMjb3B0aW9ucy4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGwgJiYgbC5sZW5ndGggPCAyMCl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJyVjIFRoaXMgd2Vic2l0ZSB3YXMgbWFkZSB1c2luZyBmdWxsUGFnZS5qcyBzbGlkZXIuIE1vcmUgaW5mbyBvbiB0aGUgZm9sbG93aW5nIHdlYnNpdGU6JywgbXNnU3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCclYyBodHRwczovL2FsdmFyb3RyaWdvLmNvbS9mdWxsUGFnZS8nLCBtc2dTdHlsZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGhhc0NsYXNzKCRodG1sLCBFTkFCTEVEKSl7XHJcbiAgICAgICAgICAgICAgICBzaG93RXJyb3IoJ2Vycm9yJywgJ0Z1bGxwYWdlLmpzIGNhbiBvbmx5IGJlIGluaXRpYWxpemVkIG9uY2UgYW5kIHlvdSBhcmUgZG9pbmcgaXQgbXVsdGlwbGUgdGltZXMhJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIERpc2FibGUgbXV0dWFsbHkgZXhjbHVzaXZlIHNldHRpbmdzXHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmNvbnRpbnVvdXNWZXJ0aWNhbCAmJlxyXG4gICAgICAgICAgICAgICAgKG9wdGlvbnMubG9vcFRvcCB8fCBvcHRpb25zLmxvb3BCb3R0b20pKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmNvbnRpbnVvdXNWZXJ0aWNhbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgc2hvd0Vycm9yKCd3YXJuJywgJ09wdGlvbiBgbG9vcFRvcC9sb29wQm90dG9tYCBpcyBtdXR1YWxseSBleGNsdXNpdmUgd2l0aCBgY29udGludW91c1ZlcnRpY2FsYDsgYGNvbnRpbnVvdXNWZXJ0aWNhbGAgZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5zY3JvbGxPdmVyZmxvdyAmJlxyXG4gICAgICAgICAgICAgICAob3B0aW9ucy5zY3JvbGxCYXIgfHwgIW9wdGlvbnMuYXV0b1Njcm9sbGluZykpe1xyXG4gICAgICAgICAgICAgICAgc2hvd0Vycm9yKCd3YXJuJywgJ09wdGlvbnMgc2Nyb2xsQmFyOnRydWUgYW5kIGF1dG9TY3JvbGxpbmc6ZmFsc2UgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZSB3aXRoIHNjcm9sbE92ZXJmbG93OnRydWUuIFNlY3Rpb25zIHdpdGggc2Nyb2xsT3ZlcmZsb3cgbWlnaHQgbm90IHdvcmsgd2VsbCBpbiBGaXJlZm94Jyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuY29udGludW91c1ZlcnRpY2FsICYmIChvcHRpb25zLnNjcm9sbEJhciB8fCAhb3B0aW9ucy5hdXRvU2Nyb2xsaW5nKSl7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmNvbnRpbnVvdXNWZXJ0aWNhbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgc2hvd0Vycm9yKCd3YXJuJywgJ1Njcm9sbCBiYXJzIChgc2Nyb2xsQmFyOnRydWVgIG9yIGBhdXRvU2Nyb2xsaW5nOmZhbHNlYCkgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZSB3aXRoIGBjb250aW51b3VzVmVydGljYWxgOyBgY29udGludW91c1ZlcnRpY2FsYCBkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLnNjcm9sbE92ZXJmbG93ICYmIG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5zY3JvbGxPdmVyZmxvdyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgc2hvd0Vycm9yKCdlcnJvcicsICdUaGUgb3B0aW9uIGBzY3JvbGxPdmVyZmxvdzp0cnVlYCByZXF1aXJlcyB0aGUgZmlsZSBgc2Nyb2xsb3ZlcmZsb3cubWluLmpzYC4gUGxlYXNlIGluY2x1ZGUgaXQgYmVmb3JlIGZ1bGxQYWdlLmpzLicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL3VzaW5nIGV4dGVuc2lvbnM/IFdyb25nIGZpbGUhXHJcbiAgICAgICAgICAgIGV4dGVuc2lvbnMuZm9yRWFjaChmdW5jdGlvbihleHRlbnNpb24pe1xyXG4gICAgICAgICAgICAgICAgLy9pcyB0aGUgb3B0aW9uIHNldCB0byB0cnVlP1xyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9uc1tleHRlbnNpb25dKXtcclxuICAgICAgICAgICAgICAgICAgICBzaG93RXJyb3IoJ3dhcm4nLCAnZnVsbHBhZ2UuanMgZXh0ZW5zaW9ucyByZXF1aXJlIGZ1bGxwYWdlLmV4dGVuc2lvbnMubWluLmpzIGZpbGUgaW5zdGVhZCBvZiB0aGUgdXN1YWwgZnVsbHBhZ2UuanMuIFJlcXVlc3RlZDogJysgZXh0ZW5zaW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL2FuY2hvcnMgY2FuIG5vdCBoYXZlIHRoZSBzYW1lIHZhbHVlIGFzIGFueSBlbGVtZW50IElEIG9yIE5BTUVcclxuICAgICAgICAgICAgb3B0aW9ucy5hbmNob3JzLmZvckVhY2goZnVuY3Rpb24obmFtZSl7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9jYXNlIGluc2Vuc2l0aXZlIHNlbGVjdG9ycyAoaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTk0NjUxODcvMTA4MTM5NilcclxuICAgICAgICAgICAgICAgIHZhciBuYW1lQXR0ciA9IFtdLnNsaWNlLmNhbGwoJCgnW25hbWVdJykpLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZ2V0QXR0cmlidXRlKCduYW1lJykgJiYgaXRlbS5nZXRBdHRyaWJ1dGUoJ25hbWUnKS50b0xvd2VyQ2FzZSgpID09IG5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpZEF0dHIgPSBbXS5zbGljZS5jYWxsKCQoJ1tpZF0nKSkuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5nZXRBdHRyaWJ1dGUoJ2lkJykgJiYgaXRlbS5nZXRBdHRyaWJ1dGUoJ2lkJykudG9Mb3dlckNhc2UoKSA9PSBuYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihpZEF0dHIubGVuZ3RoIHx8IG5hbWVBdHRyLmxlbmd0aCApe1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dFcnJvcignZXJyb3InLCAnZGF0YS1hbmNob3IgdGFncyBjYW4gbm90IGhhdmUgdGhlIHNhbWUgdmFsdWUgYXMgYW55IGBpZGAgZWxlbWVudCBvbiB0aGUgc2l0ZSAob3IgYG5hbWVgIGVsZW1lbnQgZm9yIElFKS4nKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcGVydHlOYW1lID0gaWRBdHRyLmxlbmd0aCA/ICdpZCcgOiAnbmFtZSc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGlkQXR0ci5sZW5ndGggfHwgbmFtZUF0dHIubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0Vycm9yKCdlcnJvcicsICdcIicgKyBuYW1lICsgJ1wiIGlzIGlzIGJlaW5nIHVzZWQgYnkgYW5vdGhlciBlbGVtZW50IGAnKyBwcm9wZXJ0eU5hbWUgKydgIHByb3BlcnR5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogR2V0dGluZyB0aGUgcG9zaXRpb24gb2YgdGhlIGVsZW1lbnQgdG8gc2Nyb2xsIHdoZW4gdXNpbmcgalF1ZXJ5IGFuaW1hdGlvbnNcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFNjcm9sbGVkUG9zaXRpb24oZWxlbWVudCl7XHJcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbjtcclxuXHJcbiAgICAgICAgICAgIC8vaXMgbm90IHRoZSB3aW5kb3cgZWxlbWVudCBhbmQgaXMgYSBzbGlkZT9cclxuICAgICAgICAgICAgaWYoZWxlbWVudC5zZWxmICE9IHdpbmRvdyAmJiBoYXNDbGFzcyhlbGVtZW50LCBTTElERVNfV1JBUFBFUikpe1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSBlbGVtZW50LnNjcm9sbExlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZighb3B0aW9ucy5hdXRvU2Nyb2xsaW5nICB8fCBvcHRpb25zLnNjcm9sbEJhcil7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IGdldFNjcm9sbFRvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IGVsZW1lbnQub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2dldHMgdGhlIHRvcCBwcm9wZXJ0eSBvZiB0aGUgd3JhcHBlclxyXG4gICAgICAgICAgICByZXR1cm4gcG9zaXRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNpbXVsYXRlcyB0aGUgYW5pbWF0ZWQgc2Nyb2xsVG9wIG9mIGpRdWVyeS4gVXNlZCB3aGVuIGNzczM6ZmFsc2Ugb3Igc2Nyb2xsQmFyOnRydWUgb3IgYXV0b1Njcm9sbGluZzpmYWxzZVxyXG4gICAgICAgICogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTYxMzY3ODkvMTA4MTM5NlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsVG8oZWxlbWVudCwgdG8sIGR1cmF0aW9uLCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB2YXIgc3RhcnQgPSBnZXRTY3JvbGxlZFBvc2l0aW9uKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gdG8gLSBzdGFydDtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICAgICAgdmFyIGluY3JlbWVudCA9IDIwO1xyXG4gICAgICAgICAgICBhY3RpdmVBbmltYXRpb24gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdmFyIGFuaW1hdGVTY3JvbGwgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgaWYoYWN0aXZlQW5pbWF0aW9uKXsgLy9pbiBvcmRlciB0byBzdG9wZSBpdCBmcm9tIG90aGVyIGZ1bmN0aW9uIHdoZW5ldmVyIHdlIHdhbnRcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gdG87XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUaW1lICs9IGluY3JlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZHVyYXRpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSB3aW5kb3cuZnBfZWFzaW5nc1tvcHRpb25zLmVhc2luZ10oY3VycmVudFRpbWUsIHN0YXJ0LCBjaGFuZ2UsIGR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFNjcm9sbGluZyhlbGVtZW50LCB2YWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihjdXJyZW50VGltZSA8IGR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoYW5pbWF0ZVNjcm9sbCwgaW5jcmVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZih0eXBlb2YgY2FsbGJhY2sgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZiAoY3VycmVudFRpbWUgPCBkdXJhdGlvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGFuaW1hdGVTY3JvbGwoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2Nyb2xscyB0aGUgcGFnZSAvIHNsaWRlciB0aGUgZ2l2ZW4gbnVtYmVyIG9mIHBpeGVscy5cclxuICAgICAgICAqIEl0IHdpbGwgZG8gaXQgb25lIG9yIGFub3RoZXIgd2F5IGRlcGVuZGlvbmcgb24gdGhlIGxpYnJhcnkncyBjb25maWcuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzZXRTY3JvbGxpbmcoZWxlbWVudCwgdmFsKXtcclxuICAgICAgICAgICAgaWYoIW9wdGlvbnMuYXV0b1Njcm9sbGluZyB8fCBvcHRpb25zLnNjcm9sbEJhciB8fCAoZWxlbWVudC5zZWxmICE9IHdpbmRvdyAmJiBoYXNDbGFzcyhlbGVtZW50LCBTTElERVNfV1JBUFBFUikpKXtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3Njcm9sbGluZyBob3Jpem9udGFsbHkgdGhyb3VnaCB0aGUgc2xpZGVzP1xyXG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudC5zZWxmICE9IHdpbmRvdyAgJiYgaGFzQ2xhc3MoZWxlbWVudCwgU0xJREVTX1dSQVBQRVIpKXtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSB2YWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL3ZlcnRpY2FsIHNjcm9sbFxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNjcm9sbFRvKDAsIHZhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gdmFsICsgJ3B4JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBHZXRzIHRoZSBhY3RpdmUgc2xpZGUuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZXRBY3RpdmVTbGlkZSgpe1xyXG4gICAgICAgICAgICB2YXIgYWN0aXZlU2xpZGUgPSAkKFNMSURFX0FDVElWRV9TRUwsICQoU0VDVElPTl9BQ1RJVkVfU0VMKVswXSlbMF07XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsT3JTbGlkZShhY3RpdmVTbGlkZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEdldHMgdGhlIGFjdGl2ZSBzZWN0aW9uLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0QWN0aXZlU2VjdGlvbigpe1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNlY3Rpb24oJChTRUNUSU9OX0FDVElWRV9TRUwpWzBdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogSXRlbS4gU2xpZGUgb3IgU2VjdGlvbiBvYmplY3RzIHNoYXJlIHRoZSBzYW1lIHByb3BlcnRpZXMuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBJdGVtKGVsLCBzZWxlY3Rvcil7XHJcbiAgICAgICAgICAgIHRoaXMuYW5jaG9yID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWFuY2hvcicpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0gPSBlbDtcclxuICAgICAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4KGVsLCBzZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMYXN0ID0gdGhpcy5pbmRleCA9PT0gZWwucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKS5sZW5ndGggLTE7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGaXJzdCA9ICF0aGlzLmluZGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTZWN0aW9uIG9iamVjdFxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gU2VjdGlvbihlbCl7XHJcbiAgICAgICAgICAgIEl0ZW0uY2FsbCh0aGlzLCBlbCwgU0VDVElPTl9TRUwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTbGlkZSBvYmplY3RcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIFNsaWRlKGVsKXtcclxuICAgICAgICAgICAgSXRlbS5jYWxsKHRoaXMsIGVsLCBTTElERV9TRUwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIEZQO1xyXG4gICAgfSAvL2VuZCBvZiAkLmZuLmZ1bGxwYWdlXHJcblxyXG4gICAgLy91dGlsc1xyXG4gICAgLyoqXHJcbiAgICAqIFNob3dzIGEgbWVzc2FnZSBpbiB0aGUgY29uc29sZSBvZiB0aGUgZ2l2ZW4gdHlwZS5cclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBzaG93RXJyb3IodHlwZSwgdGV4dCl7XHJcbiAgICAgICAgd2luZG93LmNvbnNvbGUgJiYgd2luZG93LmNvbnNvbGVbdHlwZV0gJiYgd2luZG93LmNvbnNvbGVbdHlwZV0oJ2Z1bGxQYWdlOiAnICsgdGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEVxdWl2YWxlbnQgb2YgalF1ZXJ5IGZ1bmN0aW9uICQoKS5cclxuICAgICovXHJcbiAgICBmdW5jdGlvbiAkKHNlbGVjdG9yLCBjb250ZXh0KXtcclxuICAgICAgICBjb250ZXh0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBjb250ZXh0IDogZG9jdW1lbnQ7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRleHQgPyBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogRXh0ZW5kcyBhIGdpdmVuIE9iamVjdCBwcm9wZXJ0aWVzIGFuZCBpdHMgY2hpbGRzLlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGRlZXBFeHRlbmQob3V0KSB7XHJcbiAgICAgICAgb3V0ID0gb3V0IHx8IHt9O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAxLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpe1xyXG4gICAgICAgICAgICB2YXIgb2JqID0gYXJndW1lbnRzW2ldO1xyXG5cclxuICAgICAgICAgICAgaWYoIW9iail7XHJcbiAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvcih2YXIga2V5IGluIG9iail7XHJcbiAgICAgICAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoa2V5KSl7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC8vIGJhc2VkIG9uIGh0dHBzOi8vamF2YXNjcmlwdHdlYmxvZy53b3JkcHJlc3MuY29tLzIwMTEvMDgvMDgvZml4aW5nLXRoZS1qYXZhc2NyaXB0LXR5cGVvZi1vcGVyYXRvci9cclxuICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9ialtrZXldKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpe1xyXG4gICAgICAgICAgICAgICAgb3V0W2tleV0gPSBkZWVwRXh0ZW5kKG91dFtrZXldLCBvYmpba2V5XSk7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIG91dFtrZXldID0gb2JqW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogQ2hlY2tzIGlmIHRoZSBwYXNzZWQgZWxlbWVudCBjb250YWlucyB0aGUgcGFzc2VkIGNsYXNzLlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGhhc0NsYXNzKGVsLCBjbGFzc05hbWUpe1xyXG4gICAgICAgIGlmKGVsID09IG51bGwpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbC5jbGFzc0xpc3Qpe1xyXG4gICAgICAgICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKCcoXnwgKScgKyBjbGFzc05hbWUgKyAnKCB8JCknLCAnZ2knKS50ZXN0KGVsLmNsYXNzTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIHdpbmRvdyBoZWlnaHQuIENyb3NzYnJvd3Nlci5cclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRXaW5kb3dIZWlnaHQoKXtcclxuICAgICAgICByZXR1cm4gJ2lubmVySGVpZ2h0JyBpbiB3aW5kb3cgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSB3aW5kb3cgd2lkdGguXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0V2luZG93V2lkdGgoKXtcclxuICAgICAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFNldCdzIHRoZSBDU1MgcHJvcGVydGllcyBmb3IgdGhlIHBhc3NlZCBpdGVtL3MuXHJcbiAgICAqIEBwYXJhbSB7Tm9kZUxpc3R8SFRNTEVsZW1lbnR9IGl0ZW1zXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBjc3MgcHJvcGVydGllcyBhbmQgdmFsdWVzLlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGNzcyhpdGVtcywgcHJvcHMpIHtcclxuICAgICAgICBpdGVtcyA9IGdldExpc3QoaXRlbXMpO1xyXG5cclxuICAgICAgICB2YXIga2V5O1xyXG4gICAgICAgIGZvciAoa2V5IGluIHByb3BzKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IGl0ZW1zW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0eWxlW2tleV0gPSBwcm9wc1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBHZW5lcmljIGZ1bmN0aW9uIHRvIGdldCB0aGUgcHJldmlvdXMgb3IgbmV4dCBlbGVtZW50LlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIHVudGlsKGl0ZW0sIHNlbGVjdG9yLCBmbil7XHJcbiAgICAgICAgdmFyIHNpYmxpbmcgPSBpdGVtW2ZuXTtcclxuICAgICAgICB3aGlsZShzaWJsaW5nICYmICFtYXRjaGVzKHNpYmxpbmcsIHNlbGVjdG9yKSl7XHJcbiAgICAgICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nW2ZuXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzaWJsaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBwcmV2aW91cyBlbGVtZW50IHRvIHRoZSBwYXNzZWQgZWxlbWVudCB0aGF0IG1hdGNoZXMgdGhlIHBhc3NlZCBzZWxlY3Rvci5cclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBwcmV2VW50aWwoaXRlbSwgc2VsZWN0b3Ipe1xyXG4gICAgICAgIHJldHVybiB1bnRpbChpdGVtLCBzZWxlY3RvciwgJ3ByZXZpb3VzRWxlbWVudFNpYmxpbmcnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogR2V0cyB0aGUgbmV4dCBlbGVtZW50IHRvIHRoZSBwYXNzZWQgZWxlbWVudCB0aGF0IG1hdGNoZXMgdGhlIHBhc3NlZCBzZWxlY3Rvci5cclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBuZXh0VW50aWwoaXRlbSwgc2VsZWN0b3Ipe1xyXG4gICAgICAgIHJldHVybiB1bnRpbChpdGVtLCBzZWxlY3RvciwgJ25leHRFbGVtZW50U2libGluZycpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBwcmV2aW91cyBlbGVtZW50IHRvIHRoZSBwYXNzZWQgZWxlbWVudC5cclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBwcmV2KGl0ZW0pe1xyXG4gICAgICAgIHJldHVybiBpdGVtLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIG5leHQgZWxlbWVudCB0byB0aGUgcGFzc2VkIGVsZW1lbnQuXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gbmV4dChpdGVtKXtcclxuICAgICAgICByZXR1cm4gaXRlbS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIGxhc3QgZWxlbWVudCBmcm9tIHRoZSBwYXNzZWQgbGlzdCBvZiBlbGVtZW50cy5cclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBsYXN0KGl0ZW0pe1xyXG4gICAgICAgIHJldHVybiBpdGVtW2l0ZW0ubGVuZ3RoLTFdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBHZXRzIGluZGV4IGZyb20gdGhlIHBhc3NlZCBlbGVtZW50LlxyXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3IgaXMgb3B0aW9uYWwuXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gaW5kZXgoaXRlbSwgc2VsZWN0b3IpIHtcclxuICAgICAgICBpdGVtID0gaXNBcnJheU9yTGlzdChpdGVtKSA/IGl0ZW1bMF0gOiBpdGVtO1xyXG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHNlbGVjdG9yICE9IG51bGw/ICQoc2VsZWN0b3IsIGl0ZW0ucGFyZW50Tm9kZSkgOiBpdGVtLnBhcmVudE5vZGUuY2hpbGROb2RlcztcclxuICAgICAgICB2YXIgbnVtID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpPTA7IGk8Y2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgIGlmIChjaGlsZHJlbltpXSA9PSBpdGVtKSByZXR1cm4gbnVtO1xyXG4gICAgICAgICAgICAgaWYgKGNoaWxkcmVuW2ldLm5vZGVUeXBlPT0xKSBudW0rKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBHZXRzIGFuIGl0ZXJhYmxlIGVsZW1lbnQgZm9yIHRoZSBwYXNzZWQgZWxlbWVudC9zXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0TGlzdChpdGVtKXtcclxuICAgICAgICByZXR1cm4gIWlzQXJyYXlPckxpc3QoaXRlbSkgPyBbaXRlbV0gOiBpdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBBZGRzIHRoZSBkaXNwbGF5PW5vbmUgcHJvcGVydHkgZm9yIHRoZSBwYXNzZWQgZWxlbWVudC9zXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gaGlkZShlbCl7XHJcbiAgICAgICAgZWwgPSBnZXRMaXN0KGVsKTtcclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxlbC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGVsW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogQWRkcyB0aGUgZGlzcGxheT1ibG9jayBwcm9wZXJ0eSBmb3IgdGhlIHBhc3NlZCBlbGVtZW50L3NcclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBzaG93KGVsKXtcclxuICAgICAgICBlbCA9IGdldExpc3QoZWwpO1xyXG5cclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGVsLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgZWxbaV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogQ2hlY2tzIGlmIHRoZSBwYXNzZWQgZWxlbWVudCBpcyBhbiBpdGVyYWJsZSBlbGVtZW50IG9yIG5vdFxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzQXJyYXlPckxpc3QoZWwpe1xyXG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoIGVsICkgPT09ICdbb2JqZWN0IEFycmF5XScgfHxcclxuICAgICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKCBlbCApID09PSAnW29iamVjdCBOb2RlTGlzdF0nO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBBZGRzIHRoZSBwYXNzZWQgY2xhc3MgdG8gdGhlIHBhc3NlZCBlbGVtZW50L3NcclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBhZGRDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgZWwgPSBnZXRMaXN0KGVsKTtcclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxlbC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gZWxbaV07XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdCl7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgIGl0ZW0uY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZWw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFJlbW92ZXMgdGhlIHBhc3NlZCBjbGFzcyB0byB0aGUgcGFzc2VkIGVsZW1lbnQvc1xyXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gYGNsYXNzTmFtZWAgY2FuIGJlIG11bHRpcGxlIGNsYXNzbmFtZXMgc2VwYXJhdGVkIGJ5IHdoaXRlc3BhY2VcclxuICAgICovXHJcbiAgICBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbCwgY2xhc3NOYW1lKXtcclxuICAgICAgICBlbCA9IGdldExpc3QoZWwpO1xyXG5cclxuICAgICAgICB2YXIgY2xhc3NOYW1lcyA9IGNsYXNzTmFtZS5zcGxpdCgnICcpO1xyXG5cclxuICAgICAgICBmb3IodmFyIGEgPSAwOyBhPGNsYXNzTmFtZXMubGVuZ3RoOyBhKyspe1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWVzW2FdO1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGVsLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gZWxbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3Qpe1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTmFtZSA9IGl0ZW0uY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cCgnKF58XFxcXGIpJyArIGNsYXNzTmFtZS5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcoXFxcXGJ8JCknLCAnZ2knKSwgJyAnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZWw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEFwcGVuZHMgdGhlIGdpdmVuIGVsZW1lbnQgb3QgdGhlIGdpdmVuIHBhcmVudC5cclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBhcHBlbmRUbyhlbCwgcGFyZW50KXtcclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgVXNhZ2U6XHJcblxyXG4gICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHdyYXBwZXIuY2xhc3NOYW1lID0gJ2ZwLXNsaWRlcyc7XHJcbiAgICB3cmFwKCQoJy5zbGlkZScpLCB3cmFwcGVyKTtcclxuXHJcbiAgICBodHRwczovL2pzZmlkZGxlLm5ldC9xd3pjN295My8xNS8gKHZhbmlsbGEpXHJcbiAgICBodHRwczovL2pzZmlkZGxlLm5ldC9veWE2bmRrYS8xLyAoanF1ZXJ5IGVxdWl2YWxlbnQpXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gd3JhcCh0b1dyYXAsIHdyYXBwZXIsIGlzV3JhcEFsbCkge1xyXG4gICAgICAgIHZhciBuZXdQYXJlbnQ7XHJcbiAgICAgICAgd3JhcHBlciA9IHdyYXBwZXIgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRvV3JhcC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gdG9XcmFwW2ldO1xyXG4gICAgICAgICAgICBpZihpc1dyYXBBbGwgJiYgIWkgfHwgIWlzV3JhcEFsbCl7XHJcbiAgICAgICAgICAgICAgICBuZXdQYXJlbnQgPSB3cmFwcGVyLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3UGFyZW50LCBpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuZXdQYXJlbnQuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0b1dyYXA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICBVc2FnZTpcclxuICAgIHZhciB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB3cmFwcGVyLmNsYXNzTmFtZSA9ICdmcC1zbGlkZXMnO1xyXG4gICAgd3JhcCgkKCcuc2xpZGUnKSwgd3JhcHBlcik7XHJcblxyXG4gICAgaHR0cHM6Ly9qc2ZpZGRsZS5uZXQvcXd6YzdveTMvMjcvICh2YW5pbGxhKVxyXG4gICAgaHR0cHM6Ly9qc2ZpZGRsZS5uZXQvb3lhNm5ka2EvNC8gKGpxdWVyeSBlcXVpdmFsZW50KVxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIHdyYXBBbGwodG9XcmFwLCB3cmFwcGVyKSB7XHJcbiAgICAgICAgd3JhcCh0b1dyYXAsIHdyYXBwZXIsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBVc2FnZTpcclxuICAgICogd3JhcElubmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwZXBlJyksICc8ZGl2IGNsYXNzPVwidGVzdFwiPmFmZGFzPC9kaXY+Jyk7XHJcbiAgICAqIHdyYXBJbm5lcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGVwZScpLCBlbGVtZW50KTtcclxuICAgICpcclxuICAgICogaHR0cHM6Ly9qc2ZpZGRsZS5uZXQvemV4eHowdHcvNi9cclxuICAgICpcclxuICAgICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIxODE3NTkwLzEwODEzOTZcclxuICAgICovXHJcbiAgICBmdW5jdGlvbiB3cmFwSW5uZXIocGFyZW50LCB3cmFwcGVyKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3cmFwcGVyID09PSBcInN0cmluZ1wiKXtcclxuICAgICAgICAgICAgd3JhcHBlciA9IGNyZWF0ZUVsZW1lbnRGcm9tSFRNTCh3cmFwcGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcclxuXHJcbiAgICAgICAgd2hpbGUocGFyZW50LmZpcnN0Q2hpbGQgIT09IHdyYXBwZXIpe1xyXG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcclxuICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogVXNhZ2U6XHJcbiAgICAqIHVud3JhcChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGVwZScpKTtcclxuICAgICogdW53cmFwKGVsZW1lbnQpO1xyXG4gICAgKlxyXG4gICAgKiBodHRwczovL2pzZmlkZGxlLm5ldC9zemp0MGh4cS8xL1xyXG4gICAgKlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIHVud3JhcCh3cmFwcGVyKSB7XHJcbiAgICAgICAgdmFyIHdyYXBwZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgIHdoaWxlICh3cmFwcGVyLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgd3JhcHBlckNvbnRlbnQuYXBwZW5kQ2hpbGQod3JhcHBlci5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdyYXBwZXIucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQod3JhcHBlckNvbnRlbnQsIHdyYXBwZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIyMTAwODUzL2RvbS1wdXJlLWphdmFzY3JpcHQtc29sdXRpb24tdG8tanF1ZXJ5LWNsb3Nlc3QtaW1wbGVtZW50YXRpb25cclxuICAgICogUmV0dXJucyB0aGUgZWxlbWVudCBvciBgZmFsc2VgIGlmIHRoZXJlJ3Mgbm9uZVxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGNsb3Nlc3QoZWwsIHNlbGVjdG9yKSB7XHJcbiAgICAgICAgaWYoZWwgJiYgZWwubm9kZVR5cGUgPT09IDEpe1xyXG4gICAgICAgICAgICBpZihtYXRjaGVzKGVsLCBzZWxlY3Rvcikpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjbG9zZXN0KGVsLnBhcmVudE5vZGUsIHNlbGVjdG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFBsYWNlcyBvbmUgZWxlbWVudCAocmVsKSBhZnRlciBhbm90aGVyIG9uZSBvciBncm91cCBvZiB0aGVtIChyZWZlcmVuY2UpLlxyXG4gICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByZWZlcmVuY2VcclxuICAgICogQHBhcmFtIHtIVE1MRWxlbWVudHxOb2RlTGlzdHxTdHJpbmd9IGVsXHJcbiAgICAqIGh0dHBzOi8vanNmaWRkbGUubmV0LzlzOTdoaHp2LzEvXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gYWZ0ZXIocmVmZXJlbmNlLCBlbCkge1xyXG4gICAgICAgIGluc2VydEJlZm9yZShyZWZlcmVuY2UsIHJlZmVyZW5jZS5uZXh0U2libGluZywgZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBQbGFjZXMgb25lIGVsZW1lbnQgKHJlbCkgYmVmb3JlIGFub3RoZXIgb25lIG9yIGdyb3VwIG9mIHRoZW0gKHJlZmVyZW5jZSkuXHJcbiAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJlZmVyZW5jZVxyXG4gICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fE5vZGVMaXN0fFN0cmluZ30gZWxcclxuICAgICogaHR0cHM6Ly9qc2ZpZGRsZS5uZXQvOXM5N2hoenYvMS9cclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBiZWZvcmUocmVmZXJlbmNlLCBlbCkge1xyXG4gICAgICAgIGluc2VydEJlZm9yZShyZWZlcmVuY2UsIHJlZmVyZW5jZSwgZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBCYXNlZCBpbiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTkzMTYwMjQvMTA4MTM5NlxyXG4gICAgKiBhbmQgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ3OTM2MzAvMTA4MTM5NlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGluc2VydEJlZm9yZShyZWZlcmVuY2UsIGJlZm9yZUVsZW1lbnQsIGVsKXtcclxuICAgICAgICBpZighaXNBcnJheU9yTGlzdChlbCkpe1xyXG4gICAgICAgICAgICBpZih0eXBlb2YgZWwgPT0gJ3N0cmluZycpe1xyXG4gICAgICAgICAgICAgICAgZWwgPSBjcmVhdGVFbGVtZW50RnJvbUhUTUwoZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsID0gW2VsXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8ZWwubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICByZWZlcmVuY2UucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxbaV0sIGJlZm9yZUVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL2h0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzQ2NDg3Ni9qYXZhc2NyaXB0LWdldC13aW5kb3cteC15LXBvc2l0aW9uLWZvci1zY3JvbGxcclxuICAgIGZ1bmN0aW9uIGdldFNjcm9sbFRvcCgpe1xyXG4gICAgICAgIHZhciBkb2MgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICAgICAgcmV0dXJuICh3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jLnNjcm9sbFRvcCkgIC0gKGRvYy5jbGllbnRUb3AgfHwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIHNpYmxpbmdzIG9mIHRoZSBwYXNzZWQgZWxlbWVudFxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIHNpYmxpbmdzKGVsKXtcclxuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKGVsLnBhcmVudE5vZGUuY2hpbGRyZW4sIGZ1bmN0aW9uKGNoaWxkKXtcclxuICAgICAgICAgIHJldHVybiBjaGlsZCAhPT0gZWw7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9mb3IgSUUgOSA/XHJcbiAgICBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdChldmVudCl7XHJcbiAgICAgICAgaWYoZXZlbnQucHJldmVudERlZmF1bHQpe1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwYXNzZWQgaXRlbSBpcyBvZiBmdW5jdGlvbiB0eXBlLlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzRnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICB2YXIgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoaXRlbSk7XHJcbiAgICAgIHJldHVybiB0eXBlID09PSAnW29iamVjdCBGdW5jdGlvbl0nIHx8IHR5cGUgPT09ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXSc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFRyaWdnZXIgY3VzdG9tIGV2ZW50c1xyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIHRyaWdnZXIoZWwsIGV2ZW50TmFtZSwgZGF0YSl7XHJcbiAgICAgICAgdmFyIGV2ZW50O1xyXG4gICAgICAgIGRhdGEgPSB0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcgPyB7fSA6IGRhdGE7XHJcblxyXG4gICAgICAgIC8vIE5hdGl2ZVxyXG4gICAgICAgIGlmKHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgPT09IFwiZnVuY3Rpb25cIiApe1xyXG4gICAgICAgICAgICBldmVudCA9IG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHtkZXRhaWw6IGRhdGF9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcclxuICAgICAgICAgICAgZXZlbnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogUG9seWZpbGwgb2YgLm1hdGNoZXMoKVxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIG1hdGNoZXMoZWwsIHNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIChlbC5tYXRjaGVzIHx8IGVsLm1hdGNoZXNTZWxlY3RvciB8fCBlbC5tc01hdGNoZXNTZWxlY3RvciB8fCBlbC5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgZWwud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8IGVsLm9NYXRjaGVzU2VsZWN0b3IpLmNhbGwoZWwsIHNlbGVjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogVG9nZ2xlcyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgcGFzc2VkIGVsZW1lbnQgZWwuXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gdG9nZ2xlKGVsLCB2YWx1ZSl7XHJcbiAgICAgICAgaWYodHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIil7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGk8ZWwubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgZWxbaV0uc3R5bGUuZGlzcGxheSA9IHZhbHVlID8gJ2Jsb2NrJyA6ICdub25lJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL3dlIGRvbid0IHVzZSBpdCBpbiBvdGhlciB3YXksIHNvIG5vIGVsc2UgOilcclxuXHJcbiAgICAgICAgcmV0dXJuIGVsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgSFRNTEVsZW1lbnQgZnJvbSB0aGUgcGFzc2VkIEhUTUwgc3RyaW5nLlxyXG4gICAgKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDk0MzQ4LzEwODEzOTZcclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50RnJvbUhUTUwoaHRtbFN0cmluZykge1xyXG4gICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXYuaW5uZXJIVE1MID0gaHRtbFN0cmluZy50cmltKCk7XHJcblxyXG4gICAgICAgIC8vIENoYW5nZSB0aGlzIHRvIGRpdi5jaGlsZE5vZGVzIHRvIHN1cHBvcnQgbXVsdGlwbGUgdG9wLWxldmVsIG5vZGVzXHJcbiAgICAgICAgcmV0dXJuIGRpdi5maXJzdENoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBSZW1vdmVzIHRoZSBwYXNzZWQgaXRlbS9zIGZyb20gdGhlIERPTS5cclxuICAgICovXHJcbiAgICBmdW5jdGlvbiByZW1vdmUoaXRlbXMpe1xyXG4gICAgICAgIGl0ZW1zID0gZ2V0TGlzdChpdGVtcyk7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxpdGVtcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gaXRlbXNbaV07XHJcbiAgICAgICAgICAgIGlmKGl0ZW0gJiYgaXRlbS5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEZpbHRlcnMgYW4gYXJyYXkgYnkgdGhlIHBhc3NlZCBmaWx0ZXIgZnVudGlvbi5cclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBmaWx0ZXIoZWwsIGZpbHRlckZuKXtcclxuICAgICAgICBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoZWwsIGZpbHRlckZuKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2h0dHBzOi8vanNmaWRkbGUubmV0L3cxcmt0ZWN6L1xyXG4gICAgZnVuY3Rpb24gdW50aWxBbGwoaXRlbSwgc2VsZWN0b3IsIGZuKXtcclxuICAgICAgICB2YXIgc2libGluZyA9IGl0ZW1bZm5dO1xyXG4gICAgICAgIHZhciBzaWJsaW5ncyA9IFtdO1xyXG4gICAgICAgIHdoaWxlKHNpYmxpbmcpe1xyXG4gICAgICAgICAgICBpZihtYXRjaGVzKHNpYmxpbmcsIHNlbGVjdG9yKSB8fCBzZWxlY3RvciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBzaWJsaW5ncy5wdXNoKHNpYmxpbmcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nW2ZuXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzaWJsaW5ncztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogR2V0cyBhbGwgbmV4dCBlbGVtZW50cyBtYXRjaGluZyB0aGUgcGFzc2VkIHNlbGVjdG9yLlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIG5leHRBbGwoaXRlbSwgc2VsZWN0b3Ipe1xyXG4gICAgICAgIHJldHVybiB1bnRpbEFsbChpdGVtLCBzZWxlY3RvciwgJ25leHRFbGVtZW50U2libGluZycpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBHZXRzIGFsbCBwcmV2aW91cyBlbGVtZW50cyBtYXRjaGluZyB0aGUgcGFzc2VkIHNlbGVjdG9yLlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIHByZXZBbGwoaXRlbSwgc2VsZWN0b3Ipe1xyXG4gICAgICAgIHJldHVybiB1bnRpbEFsbChpdGVtLCBzZWxlY3RvciwgJ3ByZXZpb3VzRWxlbWVudFNpYmxpbmcnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogQ29udmVydHMgYW4gb2JqZWN0IHRvIGFuIGFycmF5LlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIHRvQXJyYXkob2JqZWN0RGF0YSl7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdERhdGEpLm1hcChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICByZXR1cm4gb2JqZWN0RGF0YVtrZXldO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBmb3JFYWNoIHBvbHlmaWxsIGZvciBJRVxyXG4gICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTm9kZUxpc3QvZm9yRWFjaCNCcm93c2VyX0NvbXBhdGliaWxpdHlcclxuICAgICovXHJcbiAgICBpZiAod2luZG93Lk5vZGVMaXN0ICYmICFOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCkge1xyXG4gICAgICAgIE5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrLCB0aGlzQXJnKSB7XHJcbiAgICAgICAgICAgIHRoaXNBcmcgPSB0aGlzQXJnIHx8IHdpbmRvdztcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXNbaV0sIGksIHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvL3V0aWxzIGFyZSBwdWJsaWMsIHNvIHdlIGNhbiB1c2UgaXQgd2hlcmV2ZXIgd2Ugd2FudFxyXG4gICAgd2luZG93LmZwX3V0aWxzID0ge1xyXG4gICAgICAgICQ6ICQsXHJcbiAgICAgICAgZGVlcEV4dGVuZDogZGVlcEV4dGVuZCxcclxuICAgICAgICBoYXNDbGFzczogaGFzQ2xhc3MsXHJcbiAgICAgICAgZ2V0V2luZG93SGVpZ2h0OiBnZXRXaW5kb3dIZWlnaHQsXHJcbiAgICAgICAgY3NzOiBjc3MsXHJcbiAgICAgICAgdW50aWw6IHVudGlsLFxyXG4gICAgICAgIHByZXZVbnRpbDogcHJldlVudGlsLFxyXG4gICAgICAgIG5leHRVbnRpbDogbmV4dFVudGlsLFxyXG4gICAgICAgIHByZXY6IHByZXYsXHJcbiAgICAgICAgbmV4dDogbmV4dCxcclxuICAgICAgICBsYXN0OiBsYXN0LFxyXG4gICAgICAgIGluZGV4OiBpbmRleCxcclxuICAgICAgICBnZXRMaXN0OiBnZXRMaXN0LFxyXG4gICAgICAgIGhpZGU6IGhpZGUsXHJcbiAgICAgICAgc2hvdzogc2hvdyxcclxuICAgICAgICBpc0FycmF5T3JMaXN0OiBpc0FycmF5T3JMaXN0LFxyXG4gICAgICAgIGFkZENsYXNzOiBhZGRDbGFzcyxcclxuICAgICAgICByZW1vdmVDbGFzczogcmVtb3ZlQ2xhc3MsXHJcbiAgICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxyXG4gICAgICAgIHdyYXA6IHdyYXAsXHJcbiAgICAgICAgd3JhcEFsbDogd3JhcEFsbCxcclxuICAgICAgICB3cmFwSW5uZXI6IHdyYXBJbm5lcixcclxuICAgICAgICB1bndyYXA6IHVud3JhcCxcclxuICAgICAgICBjbG9zZXN0OiBjbG9zZXN0LFxyXG4gICAgICAgIGFmdGVyOiBhZnRlcixcclxuICAgICAgICBiZWZvcmU6IGJlZm9yZSxcclxuICAgICAgICBpbnNlcnRCZWZvcmU6IGluc2VydEJlZm9yZSxcclxuICAgICAgICBnZXRTY3JvbGxUb3A6IGdldFNjcm9sbFRvcCxcclxuICAgICAgICBzaWJsaW5nczogc2libGluZ3MsXHJcbiAgICAgICAgcHJldmVudERlZmF1bHQ6IHByZXZlbnREZWZhdWx0LFxyXG4gICAgICAgIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXHJcbiAgICAgICAgdHJpZ2dlcjogdHJpZ2dlcixcclxuICAgICAgICBtYXRjaGVzOiBtYXRjaGVzLFxyXG4gICAgICAgIHRvZ2dsZTogdG9nZ2xlLFxyXG4gICAgICAgIGNyZWF0ZUVsZW1lbnRGcm9tSFRNTDogY3JlYXRlRWxlbWVudEZyb21IVE1MLFxyXG4gICAgICAgIHJlbW92ZTogcmVtb3ZlLFxyXG4gICAgICAgIGZpbHRlcjogZmlsdGVyLFxyXG4gICAgICAgIHVudGlsQWxsOiB1bnRpbEFsbCxcclxuICAgICAgICBuZXh0QWxsOiBuZXh0QWxsLFxyXG4gICAgICAgIHByZXZBbGw6IHByZXZBbGwsXHJcbiAgICAgICAgc2hvd0Vycm9yOiBzaG93RXJyb3JcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGluaXRpYWxpc2U7XHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBqUXVlcnkgYWRhcHRlciBmb3IgZnVsbFBhZ2UuanMgMy4wLjBcclxuICovXHJcbmlmKHdpbmRvdy5qUXVlcnkgJiYgd2luZG93LmZ1bGxwYWdlKXtcclxuICAgIChmdW5jdGlvbiAoJCwgZnVsbHBhZ2UpIHtcclxuICAgICAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgICAgIC8vIE5vIGpRdWVyeSBObyBHb1xyXG4gICAgICAgIGlmICghJCB8fCAhZnVsbHBhZ2UpIHtcclxuICAgICAgICAgICAgd2luZG93LmZwX3V0aWxzLnNob3dFcnJvcignZXJyb3InLCAnalF1ZXJ5IGlzIHJlcXVpcmVkIHRvIHVzZSB0aGUgalF1ZXJ5IGZ1bGxwYWdlIGFkYXB0ZXIhJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQuZm4uZnVsbHBhZ2UgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgb3B0aW9ucywgeyckJzogJH0pO1xyXG4gICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgZnVsbHBhZ2UodGhpc1swXSwgb3B0aW9ucyk7XHJcbiAgICAgICAgfTtcclxuICAgIH0pKHdpbmRvdy5qUXVlcnksIHdpbmRvdy5mdWxscGFnZSk7XHJcbn1cclxuIiwiaW1wb3J0IGZ1bGxwYWdlIGZyb20gJ2Z1bGxwYWdlLmpzJztcblxuJChcImJvZHlcIikuYWRkQ2xhc3MoXCJsb2FkaW5nXCIpO1xuXG5jb25zdCBmdWxsUGFnZSA9IG5ldyBmdWxscGFnZSgnI2Z1bGxwYWdlJywge1xuXHRhdXRvU2Nyb2xsaW5nOiB0cnVlLFxuXHRmaXRUb1NlY3Rpb246IHRydWUsXG5cdGZpdFRvU2VjdGlvbkRlbGF5OiAxLFxuXHRlYXNpbmc6ICdlYXNlSW5PdXRDdWJpYycsXG5cdHNjcm9sbGluZ1NwZWVkOiA3MDAsXG5cdGNzczM6IHRydWUsXG5cdGVhc2luZ2NzczM6ICdlYXNlLW91dCcsXG4gIGxvb3BCb3R0b206IGZhbHNlLFxuICBcbiAgbmF2aWdhdGlvbjogdHJ1ZSxcblx0bWVudTogJyNtZW51Jyxcblx0YW5jaG9yczogWydzZWN0aW9uLTEnLCAnc2VjdGlvbi0yJywgJ3NlY3Rpb24tMycsICdmb290ZXInXSxcblx0bmF2aWdhdGlvblRvb2x0aXBzOiBbJ1NlY3Rpb24tMScsICdTZWN0aW9uLTInLCAnU2VjdGlvbi0zJywgJ0Zvb3RlciddLFxuXHRzaG93QWN0aXZlVG9vbHRpcDogZmFsc2UsXG59KTtcblxuXG5cbmNvbnNvbGUubG9nKFwiIyMgQnVuZGxlICMjXCIpIl0sInNvdXJjZVJvb3QiOiIifQ==