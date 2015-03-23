angular.module('tnApp.controllers').controller('SupportTicketCtrl',['$scope','$state','$rootScope','ngTableParams','SupportTickets','TicketService',function($scope,$state,$rootScope,Table,Ticket,Messages){$scope.alias='Support Ticket Controller';$scope.ticketInView=function(){var location=window.location.pathname;if(location.contains('ticket'))return true;else
return false;};var params={"where":{"postedBy":Parse.User.current().get('username')}}
var query=Messages;query.get(params,function(res){$scope.supportTickets=res.results;$scope.ticketThread=res.results[0].supportTickets;});$scope.createTicket=function(subject,body){var today=new Date();var dd=today.getDate();var mm=today.getMonth()+1;var yyyy=today.getFullYear();var ticketSubject=subject,ticketBody=[],body={createdAt:today,ticketBody:body,replyFrom:Parse.User.current().get('username')}
ticketBody.push(body);var params={"postedBy":Parse.User.current().get('username'),"ticketSubject":ticketSubject,"ticketBody":ticketBody,"ticketStatus":"open"}
JSON.stringify(params);query.post(params,function(res){console.log("Post Ticket ",res)
if($('.close').length>0)$('.close').click();console.warn("Hope that this updated with new message!",$scope.supportTickets)});}
$scope.updateTicket=function(subject,body){}
$scope.deleteTicket=function(stateParams){console.log("StateParams ObjectId",stateParams);}}]);