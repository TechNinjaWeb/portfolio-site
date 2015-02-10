// Angular has a .run(function(){}); method 
// that can be called to 'do stuff' or 
// initialize script at the beginning of
// the application load

// We'll be initializing a Parse Test Object
angular.module('ParseServices')
    .factory('UsersPosts', ['$rootScope', function($rootScope) {
        var userPosts = {};
        
        var rObject;
        var postID;
        var parentID;
        var postTitle;
        var postContent;
        
        var userPostCollection = [];
        // Create empty variables for each new Post and Comment
        var newPost, newComment;
        
        userPosts.getMyPosts = function(userPosts) {
            
            console.log("Pressed Get Posts Button");
            
            $rootScope.postQuery.find({
                success: function(res) {
        
                    for (i = 0; res.length - 1 >= i; i++) {
                        rObject = res[i];
                        postID = res[i].id;
                        parentID = res[i]["_serverData"]["parent"].id;
                        postTitle = res[i]["_serverData"]["title"];
                        postContent = res[i]["_serverData"]["content"];
        
                        console.log("------------- Here is the $rootScope.postQuery Response  -------------");
                        console.log("Post ID", postID);
                        console.log("Post Title: " + postTitle);
                        console.log("Post Content: " + postContent);
                        console.log("Parent ID:", parentID);
                        // console.log("Post ID", rObject);
                        console.log("------------- End of Resonse  -------------");
        
                        if (parentID === $rootScope.sessionUserId) {
                            var fetchArray = [rObject, postID, parentID];
        
                            userPostCollection.push(fetchArray[0]);
                            console.log("Post saved to userPostCollection");
                        }
                        else {
                            console.log("rejected object");
                        }
        
                        var objectData = JSON.stringify(userPostCollection);
                        var postData = JSON.parse(objectData);
                        $rootScope.userPostCollection = postData;
                        
                        return userPostCollection;
                    }
        
                },
                error: function(err, obj) {
                    console.log(err, obj);
                }
            });
        };

        
        console.warn("Here's the User Posts Collection  ------------->", $rootScope.userPostCollection);
        
        
        return userPosts;
    }]);