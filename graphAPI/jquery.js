 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {

    var myFacebookToken = 'EAACEdEose0cBAAXI3CAyrHA2cAcyQgXzPlewG0tvdBoWKo8nLHAkbfsn1sYphMq0fZAezZBTWaOtMchT8dbuc85ZBnZA4K00uglj7ZBXoZCr289CcEQZCQsGaxSGZAL1oXnMYVLGXihiZAudW1o0gu5SBUb7kbNy6CFmqiAwXqbCkXYQDq0PZCDfWS3jtVSOPxeflAyITDZCunP2AZDZD';   
         function getFacebookInfo(){

        $.ajax('https://graph.facebook.com/me?fields=name,birthday,email,education,hometown&access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    $("#myEmail").text(response.email);
                    $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                    $("#myHomeTown").text(response.hometown.name);
                    $("#myBirthday").text(response.birthday);
                    },
                    error : function(request,errorType,errorMessage){
                    console.log(request);
                    console.log(errorType);
                    document.write('<h2>'+response.userMessage+'</h2>')
                    },
                    timeout:3000,
            }//end argument list 



        );// end ajax call 


    }

    
    $("#facebookBtn").on('click',getFacebookInfo);

    function getFacebookPostsInfo(){
          $.ajax('https://graph.facebook.com/me/?fields=name,feed&access_token='+myFacebookToken,{
                success : function(response){
                    console.log(response);
                    console.log(response.data);
                    console.log(response.feed.data);
                    console.log(typeof(response));
                    $(".myName").text(response.name); //Gets name
                    $(".myPost1Message").text(response.feed.data[0].message); //Gets name
                    $(".myPost2Message").text(response.feed.data[1].message); //Gets name
                    $(".myPost3Message").text(response.feed.data[2].message); //Gets name
                    $(".myPost4Message").text(response.feed.data[3].message); //Gets name
                    $(".myPost5Message").text(response.feed.data[4].message); //Gets name
                    $(".myPost6Message").text(response.feed.data[5].message);
                    },
                    error : function(request,errorType,errorMessage){
                    console.log(request);
                    console.log(errorType);
                    document.write('<h2>'+response.userMessage+'</h2>')
                    },
                    timeout:3000,
                }
            //end argument list 
        );// end ajax call 
    }// end get facebook info
    $("#facebookPostsBtn").on('click',getFacebookPostsInfo)



  });