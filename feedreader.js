/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */


    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('allFeeds variable is defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('loops through and ensures the URL is defined', function() {
           for (feed of allFeeds) {
            expect(feed.url).toBeDefined();
            expect(feed.url.length).not.toBe(0);
          };
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('loops through and ensures feed has a name', function() {
           for (feed of allFeeds) {
             expect(feed.name.length).not.toBe(0);
             expect(feed.name).toBeDefined();
           }
         });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('menu element hidden by default', function() {
           expect($('body').class).not.toMatch('menu-hidden');
         });
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('menu changes visibiliy when menu icon clicked', function() {
            $('a.menu-icon-list').click(); //This is the first click of the hamburger menu
              expect($('body').class).not.toContain('menu-hidden');
            $('a.menu-icon.list').click(); //This is the second click of the hamburger menu
              expect($('body').class).toBeNull;
          });
    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         it('there is a .entry element in the .feed container', function(done) {
           expect($('div.feed a.entry-link article.entry')).toBeDefined();
           done();
         });
       });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         let oldFeed;
         let newFeed;
         //let feed = $('.feed').html();

         beforeEach(function(done) {
           loadFeed(0, function() {
             oldFeed = $('.feed').html();//captures original value
             done();
           });//end beforeEach
          afterEach(function(done) {//after the rss updates...
           loadFeed(0, function() {
             newFeed = $('.feed').html();//captures new value
             done();
           });//end loadFeed1
         });//end loadFeed0
       });//end beforeEach

       it('ensures a new feed is loaded by the loadFeed function with new content', function() {
         expect(oldFeed).not.toBe(newFeed);//Compares original and new values
       });//end it 'ensures...'
     });

//Extra credit:
     describe('Menu items have been named (additional bonus test)', function() {
       /* This test jsut ensures there is text content in the menu items.
       * This is a bonus test that I made to make sure I understand how
       * to do this from scratch.
       */
       it('the menu items have names', function() {
         //This loops through the menu items to ensure the names exist.
         for (feed of allFeeds) {
           expect(feed.name.length).not.toBe(0);
         };
       });
     });

}());
