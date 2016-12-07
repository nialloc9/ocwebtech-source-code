import React from 'react'

export default class Code extends React.Component{
    render(){
      return(
          <div class="portfolio_block_wrapper">
            <div class="portfolio_block">
              <div className="igoaloCode">
                <img src="../../../resources/images/projects/igoalo/coding.jpg" className="portfolio_block_image" alt="picture of binary code"/>
                <br /><br />
                <p>
                    All of the source for iGoalo was written and is maintained by Niall O’ Connor. If you would like an overview of what languages
                    are used please go to the languages tab. Here I will be going through some code examples from iGoalo. Due to iGoalo having so
                    many intertwined features I may have to skip over explanations for some. If I do I will direct you to another project that has an
                    explanation for what the operation is doing. First let’s look at an example from the backend. For this example we look at the friend
                    button controller which is a php script that is responsible for handling incoming AJAX requests dealing with the friendship buttons
                    that are required for creating and maintaining friendships. It’s important to note that a separate script is then called upon. This
                    separate script houses a php class with methods for updating the database using SQL which we will look at further down.
                </p>
                <br /><br />

                <div className="codeBlock">
                    <pre>
                        {`
//delete a friend
if(isset($_POST['delete_friend_auth_id']) && isset($_POST['delete_friend_user_id']) && isset($_POST['token']) && !empty($_POST['delete_friend_auth_id']) && !empty($_POST['delete_friend_user_id']) && !empty($_POST['token'])){
    $auth = $_POST['delete_friend_auth_id'];
    $user = $_POST['delete_friend_user_id'];
    $token = $_POST['token'];

    if(Token::check($token)){
    if(User::deleteFriend($auth, $user, $db)){}else{
        User::deleteFriend($user, $auth, $db);
    }else{
        return false;
        }
    }else{
        return false;
        }
        }
//Other controllers to deal with things such as delete friendship and cancel a friend request.
    `}
                    </pre>
                </div>

                <br /><br />
                <p>
                    As you can see a post request is passed here from a ajax request in the client side. This script then takes the information passed and checks to see if it is valid.
                    If it is it passes it into a check method from the Token class. This class is for protecting against CSRF attacks. If you want to
                    learn more about this go to the Javascript portfolio page and check out CSRF Generator project but here we will concentrate on just
                    the delete friend operation. After the token is accepted by the token check it is now passed to a deleteFriend method from the
                    separate script we discussed above. Let’s look at it below:
                </p>
                <br /><br />

                <div className="codeBlock">
                    <pre>
{`
//Delete a friend
public function deleteFriend($auth_id, $user_id, $db){
    $stmt = $db->prepare("DELETE FROM friends WHERE user_id = ? AND friend_id = ? AND accepted = '1'");
    $stmt->bindParam(1, $auth_id);
    $stmt->bindParam(2, $user_id);

    if ($stmt->execute();) {
        return true;
    } else {
        return false;
    }
}
//Other methods to do things like getting a friends list
    `}
                    </pre>
                </div>
                <br /><br />
                <p>
                    As you can see above the delete friend method takes 3 arguments. The auth id, user id, and the database to be used.
                    Let’s discuss the difference between auth_id and user_id which isn’t important for this operation as I included a
                    check above to call the swap the values if they failed. This isn’t necessary as the first 'function' is always called
                    but I believe when building applications especially complicated ones we can’t always foresee every potential problem
                    so to prepare for the ones we can. In this I know to pass in the values in the correct order of auth_id first and
                    user_id second but someday another developer may be working on this site with me and they may not know the in-depth
                    workings of every script as I do.
                </p>
                <br /><br />
                <p>
                    Anyway this information is passed into a SQL query to update the database. This query is handled by PDO(php data objects).
                    PDO is great for accessing databases as it creates a consistent way of handling queries. The SQL statement takes 2 parameters
                    that are referenced using ?. These are then added in order using bindParam(). As you can see the auth_id takes a 1 as its first
                    argument to bind it to the first parameters? in the query and the user_id takes a 2 to bind it to the second.  Using PDO prepared
                    statements helps to prevent sql injection. The execute method returns a Boolean value of true for success and false for failure so
                    we can pass this into a selection statement to check it and then return a value.
                </p>
                <br /><br />
                <p>
                    Now let’s look at a front end example. Let’s look at how the user can change conversations in the
                    instant messenger to use a different chat history and to message a different person all without
                    reloading the page.
                </p>
                <br /><br />

                <div className="codeBlock">
                    <pre>
{`
$("#chat_friend_search_input").keypress(function (e) {
    if (e.keyCode == 13) {
        var auth_id = $('#chat_friend_search_auth_id').val();
        var search = $('#chat_friend_search_input').val();

        var token = $('#hidden_csrf_token').val();

        if(search !== '' && auth_id !== ''){
            $.get('ajax/chat/ajax_chat.php', {
                task: 'chat_friend_search',
                auth_id: auth_id,
                search: search,
                token: token
            }).success(function(data){
                $('#chat_avail').html(data);
            }).error(function(){
                //alert('error');
            });
        }
    }
});
//other chat operations
    `}
                    </pre>
                </div>

                <br /><br />
                <p>
                    As we can see from above when an input with the id of ‘chat_friend_search_input’ has a key pressed it will check to see what key was pressed and if it was
                    the enter key(keyCode 13) then it will continue and grab the auth_id and the token from hidden inputs. It will also get the search
                    value that the user inputted. These values are passed to the backend where the token is checked using the Token::check() method. If
                    it passes this test it will then search the database for a friend with the username or name that is similar to the inputted search
                    value. It will then pass these back in a list that is created in the backend and output this to the screen in the area with the id
                    of ‘chat_avail’. Each friend in the list will have an onClick() event attached to it that will call the get_messages() 'function'
                    shown below:
                </p>
                <br /><br />

                <div className="codeBlock">
                    <pre>
{`
function get_messages(friend_id){
    var auth_id = $('#chat_auth').val();
    $('#user2').val(friend_id);

    var token = $('#hidden_csrf_token').val();

    if(auth_id !== '' && friend_id !== ''){
        $.get('ajax/chat/ajax_chat.php', {
            task: 'get_chat_friend',
            auth_id: auth_id,
            friend_id: friend_id,
            token: token
        }).success(function(data){
            $('#message_area').html(data);
        }).error(function(){
            //alert('error');
        });
    }
}
`}
                    </pre>
                </div>

                <br /><br />
                <p>
                    The auth_id will be passed with the friend_id along with a token that will do a Token:check() and if successful will return the chat history from the back end and
                    put it in the message area. It will also prior to this change the hidden input with the id of ‘user2’ to the friend_id. This input value will be used then when
                    sending messages so that the new messages are stored with the correct user id’s.
                </p>
                  </div>
            </div>
          </div>
      )
    }
}
