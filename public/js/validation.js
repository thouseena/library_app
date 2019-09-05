function signUp()                                    
{ 
    var firstName = document.forms["RegForm"]["first_name"].value;               
    var lastName = document.forms["RegForm"]["last_name"].value;               
    var email = document.forms["RegForm"]["email"];    
    var phone = document.forms["RegForm"]["number"].value;  
    var password = document.forms["RegForm"]["password"].value;  
    var confirmPassword = document.forms["RegForm"]["confirm_password"].value;  
   
    if (firstName == "")                                  
    { 
        alert("Please enter your first name"); 
        return false; 
    } 
   
    if (lastName == "")                               
    { 
        alert("Please enter your last name"); 
        return false; 
    } 
       
    if (email.value == "")                                   
    { 
        alert("Please enter a valid e-mail address."); 
        return false; 
    } 
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        alert("Please enter a valid e-mail address."); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        alert("Please enter a valid e-mail address."); 
        return false; 
    } 
    if (phone == "")                           
    { 
        alert("Please enter your mobile number."); 
        return false; 
    }   
    if (!Number.isInteger(Number(phone)))                           
    { 
        alert("Please a valid mobile number."); 
        return false; 
    } 
    if (phone.length != 10)                           
    { 
        alert("Please a valid mobile number."); 
        return false; 
    } 
   
    if (password == "")                        
    { 
        alert("Please enter your password"); 
        return false; 
    } 
    if (password.length < 8)                        
    { 
        alert("Password must contain 8 letters"); 
        return false; 
    } 
   
    if (confirmPassword == "")                        
    { 
        alert("Please enter your confirm Password"); 
        return false; 
    } 
    if (confirmPassword != password)                        
    { 
        alert("Missmatch on confirm password"); 
        return false; 
    } 
    window.location = "/dashboard";
    alert("Welcome " + firstName + " " + lastName);
    // return true; 
}
function signIn()
{


    var semail = document.forms["signin"]["semail"];    
    var spassword = document.forms["signin"]["spassword"].value;  



    if (semail.value == "")                                   
    { 
        alert("Please enter a valid e-mail address."); 
        return false; 
    } 
   
    if (semail.value.indexOf("@", 0) < 0)                 
    { 
        alert("Please enter a valid e-mail address."); 
        return false; 
    } 
   
    if (semail.value.indexOf(".", 0) < 0)                 
    { 
        alert("Please enter a valid e-mail address."); 
        return false; 
    } 
    if (spassword == "")                        
    { 
        alert("Please enter your password"); 
        return false; 
    } 
    if (spassword.length < 8)                        
    { 
        alert("Password must contain 8 letters"); 
        return false; 
    } 
    window.location = "/dashboard";
    alert("You are successfully signed in");
    // return true;
}


function addBooks()                                    
{ 
    var book_title = document.forms["AddBooks"]["book_title"].value;               
    var genre = document.forms["AddBooks"]["genre"].value;               
    var author = document.forms["AddBooks"]["author"].value;  
    var image = document.forms["AddBooks"]["image"].value;  
   
    if (book_title == "")                                  
    { 
        alert("Please enter your book title"); 
        return false; 
    } 
   
    if (genre == "")                               
    { 
        alert("Please enter your genre"); 
        return false; 
    } 
    if (author == "")                                  
    { 
        alert("Please enter your author"); 
        return false; 
    } 
   
    if (image == "")                               
    { 
        alert("Please enter your image"); 
        return false; 
    } 
    alert("Sucessfully added the book "+ book_title);
}


function addAuthors()                                    
{ 
    var name = document.forms["AddBooks"]["name"].value;               
    var dob = document.forms["AddBooks"]["dob"].value;               
    var place = document.forms["AddBooks"]["place"].value;  
    var image = document.forms["AddBooks"]["image"].value;  
   
    if (name == "")                                  
    { 
        alert("Please enter Author name"); 
        return false; 
    } 
   
    if (dob == "")                               
    { 
        alert("Please enter dob"); 
        return false; 
    } 
    if (place == "")                                  
    { 
        alert("Please enter the place"); 
        return false; 
    } 
   
    if (image == "")                               
    { 
        alert("Please enter image"); 
        return false; 
    } 
    alert("Sucessfully added the author "+ name);
}