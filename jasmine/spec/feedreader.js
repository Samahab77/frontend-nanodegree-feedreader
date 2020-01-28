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
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it(' URL  is defined', function() {
            //loops through each allfeed url
        for (const i of allFeeds) {
            expect(i.url).toBeDefined()//check if it define
            expect(i.url.length).not.toBe(0);//check if it not empty 
        };
        });
        
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('  name is defined', function () {
             //loops through each allfeed name
             for (const i of allFeeds) {
                 expect(i.name).toBeDefined() //check if it define
                 expect(i.name.length).not.toBe(0); //check if it not empty 
             };
         });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('menu',function(){
         /* TODO: Write a test that ensures the menu element is
          * hidden by default. You'll have to analyze the HTML and
          * the CSS to determine how we're performing the
          * hiding/showing of the menu element.
          */
        let body = $('body')[0]//store the body 
        let menue = $('.menu-icon-link')//store menue icon class


        it(' menu element is hidden bydefault ',function(){
            // check for the class menu-hidden in the body tag
            expect(body.classList.contains("menu-hidden")).toBe(true);

          })
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

        it('hidden/show on click',function(){
            // check for the class menu-hidden in the body tag
            expect(body.classList.contains("menu-hidden")).toBe(true);
            menue.click();// whene menue icon clecked 
            // check for the class menu-hidden is removed from the body tag
            expect(body.classList.contains("menu-hidden")).toBe(false);
            menue.click();
              // check for the class menu-hidden is added back in the body tag
            expect(body.classList.contains("menu-hidden")).toBe(true);
         })
         
    })
       

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries',function(){
         beforeEach(function (done) {
                loadFeed(0, function () {
                 done();
             });
});
  /* TODO: Write a test that ensures when the loadFeed
   * function is called and completes its work, there is at least
   * a single .entry element within the .feed container.
   * Remember, loadFeed() is asynchronous so this test will require
   * the use of Jasmine's beforeEach and asynchronous done() function.
   */
        it(' loadFeed is called and complete whene it has one entry',function(done){
            let entry = document.querySelectorAll('.feed .entry');
            expect(entry.length).toBeGreaterThan(0)// check for at least one entry 
            done();
        })
             


    })
      

    /* TODO: Write a new test suite named "New Feed Selection" */

    describe('New Feed Selection',function(){
         let oFeed;
         beforeEach(function (done) {
             loadFeed(0, function () {
                 let oFeed = document.querySelector(".feed").innerHTML
            
             loadFeed(1, function () {
                done();
                 });
             });
         });

         it('load new  content', function (done) {

             let nfeed = document.querySelector(".feed").innerHTML
            expect(oFeed).not.toBe(nfeed)// to make sure the content of the feeds are changed
         })
         

    })
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
