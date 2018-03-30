'use strict';

angular.module('dsProjectApp')
  .controller('MainCtrl', function ($scope, $http, $location, $state) {


    $scope.searchBox = "";
    $scope.parsed_result = '{ "name":"John", "age":30, "city":"New York"}';
    $scope.result = ""


    $scope.dsSearch = function() {
      console.log("$scope.searchBox", $scope.searchBox);

      var url = "http://localhost:9000/api/search/"
      var data = {
        "words":$scope.searchBox
      }

      var result = $http({
        method: 'POST',
        url: url,
        data: JSON.stringify(data)
      }).then(function (success) {
        return success
        console.log("result:", success);
      }, function (error) {
        return error
        console.log(error.data);
      });

      // var ar = []

      // ar.push(JSON.parse('{ "name":"John", "age":30, "city":"New York"}'))
      // $scope.result = ar

       var jsonData = [{
            "_index": "ds_project",
            "_type": "review_data",
            "_id": "A18V52M2SGMKXE1343779200",
            "_score": 2,
            "_source": {
                "reviewerID": "A18V52M2SGMKXE",
                "asin": "B008I5Q2YM",
                "reviewerName": "Nell Daley",
                "helpful": [
                    0,
                    0
                ],
                "reviewText": "I really liked this book, it was well written and it kept me interested enough to purchase book 2 of the Hollow Reed series. (Book 2 is Unsheathed Swords). I have a Japanese daughter-in-law and have visited Japan twice, and am sure I enjoyed the book more due to that.  I love the country of Japan.  The only problem is that the characters are hard to keep straight due to the strangeness of the Japanese names as opposed to the American names we are familiar with in this country.  But with the search feature of the Kindle ap on my phone, it was pretty easy to search for the first time a name appears in the story and then you realize who the character is.  I would definitely recommend this book, especially to anyone familiar with Japan.  I have a feeling I will end up reading the entire series if book 2 is as good as book 1 was!",
                "overall": 4,
                "summary": "I got hooked on this free book and bought the next in the series",
                "unixReviewTime": 1343779200,
                "reviewTime": "08 1, 2012",
                "unixReviewTimeFormatted": "2012-07-31 17:00:00"
            }
        },
        {
            "_index": "ds_project",
            "_type": "review_data",
            "_id": "A1YZJWM17ULMD91368662400",
            "_score": 2,
            "_source": {
                "reviewerID": "A1YZJWM17ULMD9",
                "asin": "B007PPJOGO",
                "reviewerName": "angela eckman",
                "helpful": [
                    3,
                    3
                ],
                "reviewText": "good book easy to find and have for a long time on my kindle  fire, will buy agin love it",
                "overall": 4,
                "summary": "The Rancher Takes a bride",
                "unixReviewTime": 1368662400,
                "reviewTime": "05 16, 2013",
                "unixReviewTimeFormatted": "2013-05-15 17:00:00"
            }
        },
        {
            "_index": "ds_project",
            "_type": "review_data",
            "_id": "A151OS31J9VBDP1376092800",
            "_score": 2,
            "_source": {
                "reviewerID": "A151OS31J9VBDP",
                "asin": "B00AXOP7MY",
                "reviewerName": "Emily Rachelle",
                "helpful": [
                    1,
                    2
                ],
                "reviewText": "I love Valeria, the princess who lives for her palate, the girl who stays true to what she loves even when nobody else understands it.  I love all the food.  I love the contrasts between the made-up countries and how I could easily see those countries being real and on a map of Europe.  (I imagine Amaranta as an island off of Greece: beautiful, calm, slow pace of life, lots of water, lots of sunshine, great food...)  I could do with a bit more description of people's appearances and specifically their outfits, but since the story was from Valeria's point of view and Valeria loves her food but couldn't care less about dresses and decorum, it worked.I didn't love the pacing.  It was awful.  It seemed to take a good while - at least half the book - to get to where Valeria is actually at the Academy.  That part would actually be paced really well if the rest of the scenes were in proper proportion to it.  But the travels seemed a little too short for such a far-off trip.  And once Valeria was at the Academy, I felt like the author was rushing to make everything happen, as if she was scribbling down her thoughts and checking them off her outline without making sure the flow was natural in the story.I didn't love the prince and Valeria's relationship to him; again - too fast!  I mean, there was hardly any romance, at all, ever!  Little hints, yes, but that's just a good start, not a whole love story.  And then near the end all this stuff about Ralph suddenly being constantly worried and jealous and insecure... it was a bit ridiculous.There were a few places with just plain poor writing.  The grammar was out of whack and the word choices and vocabulary seemed too limited and simplistic for the story.  And the first major scene with Prince Ralph... ugh.  The whole rest of the book, both before and after this scene, does well to stay in Valeria's head.  But the first scene with Ralph and Valeria in the kitchen drove me crazy.  If we are reading Valeria's POV, and Valeria does not read minds, we do not see what is in Ralph's head.  We can. not. see. what is in Ralph's head.  It's not natural, it doesn't work - just a big no-no.  I don't know if Aya has a professional editor, but if she doesn't, she needs one, and if she does, she needs a new one.After all that negative, I have to bring up one other thing I really did love - two, actually: Valeria's maids.  Effie and Winnifred were awesome and it's easy to identify their personalities and feel like you know them well.  Honestly, I was a bit surprised - its seems the author put a lot of effort into developing these side characters, while Ralph and the people related to him still feel like they need work.  Regardless, Effie is one of those people you either love or are driven crazy by.  Personally, I think it's a bit of both - in a good way.My advice to the author?  Pull this off the market; take a few lessons in craft; do a major rewrite; and republish for the world to enjoy.  I mean, the story and main character are amazing; the prince's character and the structure just need work.  This book could really go places with a rewrite and proper editing. I give this book 2.5 stars.I received this book for free through LibraryThing's Member Giveaways in exchange for a review.  All opinions expressed are entirely my own.",
                "overall": 3,
                "summary": "Sweet Story, Just Poorly Paced",
                "unixReviewTime": 1376092800,
                "reviewTime": "08 10, 2013",
                "unixReviewTimeFormatted": "2013-08-09 17:00:00"
            }
        },
        {
            "_index": "ds_project",
            "_type": "review_data",
            "_id": "A179INWJ0ZLOB41382832000",
            "_score": 2,
            "_source": {
                "reviewerID": "A179INWJ0ZLOB4",
                "asin": "B00DFQDFY4",
                "reviewerName": "Denise Van plew",
                "helpful": [
                    0,
                    0
                ],
                "reviewText": "How would you handle it if you felt everyone close to you their emotions so intense (and not always one at a time mind you) it could if you let it would seem to choke you? Would you collapse under the weight of it or run away never to be around others. What if also you denied yourself the love of that one in order to spare them the same? Or would you risk it for love? In this series Maddox (one of my favorites in this pack) is the Omega and was carrying around alot of weight these days and not just from being who he was but also denying himself of a mate-Ellie. Noble man that he thought he was his twin brother North he thought would make a far better mate than he but what does he know. Funny how he thinks he knows better even though his emotions on this are smacking him right in the face and silly man bears the unnecessary pain that goes with it. But it causes her pain also (the art of being noble forgets stuff like this) and now there are 2 being torn apart and she believes she is not good enough. Circumstances changes things for the 3 of them and they are forced to temporarily leave and also told to work it out between them once and for all. Can't fool parents and certainly not these. You think alright finally but oh not so easy either . Their is turmoil and fighting going on after all. Drama filled edge of your seat action but wait that is not all, beautifully written passion filled dance as Maddox and Ellie come together and quit fighting the desires of their hearts and souls. Great story comes to light also on the scar on his face and who was in place to release him so that he is even able to be here at this time. As with fighting there could be some hostages and during a rescue a discovery is made concerning another one in the clutches of her evil brother that also has a big impact on their lives. During a rescue death tries to enter in and oh joy does love enable to bring back love that lasts a lifetime. Love the way this author weaves together each story for this series and brings the characters alive that you also fall in love with them and care for them so by the time you are done and reached the last page you are panting for more after a rest and cool down for sure.",
                "overall": 5,
                "summary": "Shattered Emotions",
                "unixReviewTime": 1382832000,
                "reviewTime": "10 27, 2013",
                "unixReviewTimeFormatted": "2013-10-26 17:00:00"
            }
        },
        {
            "_index": "ds_project",
            "_type": "review_data",
            "_id": "A3THLI10635V4V1384646400",
            "_score": 2,
            "_source": {
                "reviewerID": "A3THLI10635V4V",
                "asin": "B00DFRJK9C",
                "reviewerName": "The Every Free Chance Reader",
                "helpful": [
                    0,
                    0
                ],
                "reviewText": "Did I enjoy this book: I did but not as much as I hoped to. The Art of Love has a lot of potential but some flaws. It took a bit longer to get through than I expected, too.The concept is great. The girl that runs away to get away from a past that is revealed later in the book. She ends up in the big city with no where to go and knowing no one. Marina happens to stumble upon an art exhibit with free food. She then becomes the unwilling participant of the exhibit. Fitz is the performance artist who zeroes in on Marina. After the show, he takes her back to his place to give her shelter and a place to say. Then, the story progresses and other friendships are formed. Marina&#8217;s past then starts tracking her down.As I said, a great story line with lots of potential. But there were some flaws. I had a hard time determining how old Marina was at the start of the book. I wish this had been revealed at the beginning. It would have helped me understand her a bit more. I saw her as a late-teen until I was told otherwise. Marina seems young, sheltered, and naive at times. Then, she seems worldly, sassy, and confident. It was hard to get used to her and like her. I did like her but she also got on my nerves at times. It kind of bugged me that &#8211; and I&#8217;m going to be vague here so I don&#8217;t completely spoil anything - she thought at her age that she would be forced by authorities to go back to her past. That made no sense to me at all. I understand her fear and mindset about the person tracking her down but I couldn&#8217;t get my head around her reaction to the search. And, on that note, I was also surprised that the authorities would go to such lengths given her age. I&#8217;m surprised they didn&#8217;t deem her as a runaway.But I loved Marina&#8217;s growing confidence in determining who she is and what she wants out of life. Her story could have ended many different ways. I am happy that it went the way it did. She didn&#8217;t take the easy way out. That made me like her in the end.Fitz was a romantic character and very trusting and caring. He was your typical trust fund boy who is &#8220;finding himself&#8221; while rebelling against his bankrolling father. While he does have these issues, I think his interest in being an artist is genuine. But he is not a starving artist like so many others. Fitz is very trusting to take in some girl he knows absolutely nothing about. That is unbelievable to me. He also experiences almost-insta-love with Marina. But his protection and love for her is genuine. That is apparent.I would like to see a sequel to this book. I want to see what happens with all of these characters&#8230;and I don&#8217;t just mean the main two. I want to know what happens with all of them &#8211; Viridian, Derek, Fitz, Fitz&#8217;s father, Marina, Marina&#8217;s father, and Ruth.This was a tough book to rate because there were parts of the book that bugged me and that I couldn&#8217;t get behind. However, the overall story and connection between Marina and Fitz were good and new. So, I would give this book&#8230;Would I recommend it: I would recommend The Art of Love if you like NA and a somewhat new but not completely novel plot line.Will I read it again: I will not.(I received a copy of this book for review purposes.)",
                "overall": 3,
                "summary": "A somewhat new plot line.",
                "unixReviewTime": 1384646400,
                "reviewTime": "11 17, 2013",
                "unixReviewTimeFormatted": "2013-11-16 16:00:00"
            }
        },
        {
            "_index": "ds_project",
            "_type": "review_data",
            "_id": "A1WAOQHH3TH2ZS1402099200",
            "_score": 2,
            "_source": {
                "reviewerID": "A1WAOQHH3TH2ZS",
                "asin": "B00HZNLYQO",
                "reviewerName": "Patricia H. Caylor \"phc\"",
                "helpful": [
                    1,
                    1
                ],
                "reviewText": "Easy and entertaining read as are each of the books I have read by this author. Good clean suspense! Not the usual venue for too many suspense writers who seem to think the reader wants bad language and explicit love scenes.A wholesome, yet exciting book.",
                "overall": 5,
                "summary": "More Det. Jason Strong",
                "unixReviewTime": 1402099200,
                "reviewTime": "06 7, 2014",
                "unixReviewTimeFormatted": "2014-06-06 17:00:00"
            }
        },
        {
            "_index": "ds_project",
            "_type": "review_data",
            "_id": "A18ENLQJ88H2FS1390694400",
            "_score": 2,
            "_source": {
                "reviewerID": "A18ENLQJ88H2FS",
                "asin": "B00HZWLJ60",
                "reviewerName": "Zal",
                "helpful": [
                    2,
                    2
                ],
                "reviewText": "I love it! It is detailed enough and very easy to understand.  Even though I know the story of Noah, I found it to be quite an interesting read.  I bought it for my son and he loved it too. After reading it, I knew he would.  He loved the progression of the story and followed it easily. Now, he wants to read more bible stories.  Great!",
                "overall": 5,
                "summary": "Noah- a good read",
                "unixReviewTime": 1390694400,
                "reviewTime": "01 26, 2014",
                "unixReviewTimeFormatted": "2014-01-25 16:00:00"
            }
        },
        {
            "_index": "ds_project",
            "_type": "review_data",
            "_id": "A3N1PHRWTBOXVE1402099200",
            "_score": 2,
            "_source": {
                "reviewerID": "A3N1PHRWTBOXVE",
                "asin": "B00I021JOG",
                "reviewerName": "D. Dillon \"Voracious Reader\"",
                "helpful": [
                    0,
                    0
                ],
                "reviewText": "Although it was somewhat easy for me to figure out who the bad guys were, I loved this book and the entire series. Good, quick reads if you love happily ever after!",
                "overall": 5,
                "summary": "The Entire Series ROCKED!",
                "unixReviewTime": 1402099200,
                "reviewTime": "06 7, 2014",
                "unixReviewTimeFormatted": "2014-06-06 17:00:00"
            }
        },
        {
            "_index": "ds_project",
            "_type": "review_data",
            "_id": "A13TLUQKSW123I1404259200",
            "_score": 2,
            "_source": {
                "reviewerID": "A13TLUQKSW123I",
                "asin": "B00I15VKSW",
                "reviewerName": "Adria",
                "helpful": [
                    0,
                    0
                ],
                "reviewText": "Author Christi Barth brings the charm of a small town romance while adding quite a bit of humor and conflict to make Up to Me an enjoyable, light read.Graydon Locke&#8217;s job is to go undercover, assess businesses and if necessary, recommend it for closure, all while avoiding discovery by residents. He doesn&#8217;t seem to think much of small towns so when his job sends him to Mayhew Manor, a health spa, Gray thinks it will be a simple in, done and gone job.Ella Mayhew has been through her share of tragedy. After losing her parents in an accident, she&#8217;s thrown herself into Mayhew Manor, the only thing she has left of her parents. The arrival of a handsome guest wasn&#8217;t in her plans but Ella can&#8217;t seem to resist the pull between her and Gray. Unfortunately she doesn&#8217;t know the real reason why he&#8217;s in town.Up to Me proves that a romance novel doesn&#8217;t always have to be complicated and messy to be good. Sometimes a reader like me wants a steamy romance without too many obstacles for the couple. That&#8217;s what this book delivers.While the &#8220;instant love&#8221; between Gray and Ella was a bit farfetched, it didn&#8217;t come close to the attitudes and involvement of the town&#8217;s residents. Now, I&#8217;m not a fan of over the top, nosy and meddling characters so having a whole town full of them was a little hard to get past. How Ella dealt with it without cracking some skulls is a mystery. That was a little too much for me. Other than that though, Up to Me was a lot of fun.What I definitely want to point out about this book is that the romance between Gray and Ella isn&#8217;t always such a serious affair. Sure there&#8217;s attraction and sexual tension but there&#8217;s also goofy and funny thrown in to lighten the atmosphere and since I would put Up to Me in the &#8220;sweetly romantic&#8221; category, I recommend it for fans of light and sexy romance without graphic sex scenes or heavy conflicts.Final Verdict: Fun and flirty, Up to Me is a book I would definitely recommend to fans of the light side of romance. The main characters are easy to understand and likable.",
                "overall": 3,
                "summary": "Flirty and fun without all the drama",
                "unixReviewTime": 1404259200,
                "reviewTime": "07 2, 2014",
                "unixReviewTimeFormatted": "2014-07-01 17:00:00"
            }
        },
        {
            "_index": "ds_project",
            "_type": "review_data",
            "_id": "A3S0H2HV6U1I7F1402272000",
            "_score": 2,
            "_source": {
                "reviewerID": "A3S0H2HV6U1I7F",
                "asin": "B00I15VL1I",
                "reviewerName": "Merissa",
                "helpful": [
                    0,
                    0
                ],
                "reviewText": "I received this book from Barclay Publicity in return for a fair and honest review.I really enjoyed this book. I wasn't too sure what to expect but I was drawn in from the beginning. If you want a story that is HOT!!! but also tender, will tug on your heartstrings, make you laugh out loud then you should probably give this one a go!One thing I have to say though is that although Meredith is the main character, I actually loved it when Blaine and Charlie got together. The love scene between them simply sparked off the pages. There were two things with Meredith that bugged me slightly - one is that you only had to say the word &#34;sex&#34; and she appeared 'drunk on it' (author's words, not mine). Even though she gave a very good scientific explanation of why this happens, it still took something away for me. And the other thing is her ditzy act. I just don't get it. On the one hand we are told that she always dresses smartly and has her hair tied back in a severe bun to make herself look older than she is but then she puts on this act which just makes her look young again. Confused!I can understand the other side of the story though and thought that it was written very well. It's not easy to make - and continually live with - a decision in which your head says one thing and your heart another. So the reasons given, the continual heartbreak that peaks 4 times a year, the trepidation and anticipation of making changes - all brilliantly done.I certainly enjoyed this book and would definitely recommend it to my friends who like M/M and M&eacute;nage stories. I'll be reading books 1 and 2 very shortly as I've just gone and one-clicked ;)",
                "overall": 4,
                "summary": "Tempting Meredith",
                "unixReviewTime": 1402272000,
                "reviewTime": "06 9, 2014",
                "unixReviewTimeFormatted": "2014-06-08 17:00:00"
            }
        }
    ]
    // console.log(jsonData)
    // var arr = [];
    // for (var i = 0; i < jsonData.length; i++) {

    //   console.log("len", jsonData.length);
    //   arr.push(jsonData[i])
    // }

    // console.log(arr)

      // parsed_arr = JSON.parse(jsonData)
      // console.log("parsed_arr",parsed_arr)
      // $scope.result = parsed_arr


      $scope.result = jsonData
      
      // console.log("parse result:", $scope.result)







      


      // $scope.parsed_result = JSON.parse(result);

      // console.log("parse result:", $scope.parsed_result)



      // return $http.post('http://localhost:9000/api/search/' + $scope.searchBox)
      //   .then(function(result) {

      //     if (result.status == 200) {
      //       console.log("result:", result);
      //       return result
      //     } else {
      //       console.log("Error Occured!")
      //     }
      //   }, function(error) {
      //     console.log("Error:", error);
      //     return error
      //   });
    };

    // $scope.review_detail = function(index) {
    //   console.log("index:::", index);
    //   $state.go('detail');
    //   // $location.path('http://localhost:9000/review_detail.html/').search({param: index});
    // };

    /*$scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.getColor = function($index) {
      var _d = ($index + 1) % 11;
      var bg = '';

      switch(_d) {
        case 1:       bg = 'red';         break;
        case 2:       bg = 'green';       break;
        case 3:       bg = 'darkBlue';    break;
        case 4:       bg = 'blue';        break;
        case 5:       bg = 'yellow';      break;
        case 6:       bg = 'pink';        break;
        case 7:       bg = 'darkBlue';    break;
        case 8:       bg = 'purple';      break;
        case 9:       bg = 'deepBlue';    break;
        case 10:      bg = 'lightPurple'; break;
        default:      bg = 'yellow';      break;
      }

      return bg;
    };

    $scope.getSpan = function($index) {
      var _d = ($index + 1) % 11;

      if (_d === 1 || _d === 5) {
        return 2;
      }
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };*/
  });
