// Angular has a .run(function(){}); method 
// that can be called to 'do stuff' or 
// initialize script at the beginning of
// the application load

// We'll be initializing a Parse Test Object
angular.module('tnApp.parseModel', [])
    .factory('UserList', ['$rootScope', function($rootScope) {
        var userList = {};

        // Create empty variables for each new Post and Comment
        var newPost, newComment;

        userList.createPost = function(postTitle, postContent) {
            newPost = new $rootScope.Posts;
            console.log(newPost);
            // Set Attributes of new Post
            newPost.set("title", postTitle);
            newPost.set("content", postContent);
            newPost.set("parent", $rootScope.sessionUser);
            // This will save both newPost and myComment
            newPost.save(null, {
                success: function(newPost) {
                    console.log("here's the newPost Object: ", newPost);
                },
                error: function(newPost, err) {
                    console.log("newPost caused an error", newPost, err);
                }
            });
            // console.log(newPost.id);
        };

        userList.createComment = function(commentContent) {
            newComment = new $rootScope.Comment();
            // Set Attributes of new Post
            if (newPost) {
                newComment.set("content", commentContent);
                // Add the post as a value in the comment
                newComment.set("parent", newPost);
                // This will save both newPost and newComment
                newComment.save(null, {
                    success: function(newComment) {
                        console.log('Made it into the success function!', newComment);
                        for (var i = 0; i < newComment.length; i++) {}
                    },
                    error: function(newComment, err) {
                        console.log("newComment caused an error", newComment, err);
                    }
                });
            }
            else {
                console.log("You Must First Create a Post and then add a Comment");
            }
            console.log("here's the newComment Object: ", newComment);
        };

        userList.usersInGoalClass = function() {
            console.log($rootScope.sessionUser.get('email'));


        };


        return userList;
    }]);