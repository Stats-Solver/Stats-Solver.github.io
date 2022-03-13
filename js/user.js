import {API_URL} from "./constants.js"

$(document).ready(function(){
    const buttonText = $("#text");
    const buttonLoading = $("#button-loading");
    $("#login").click(function(e){
        e.preventDefault();
        const email = $("#email").val().trim();
        const password = $("#password").val().trim();
        buttonLoading.css("display", "inline-block");
        buttonText.css("display", "none");
        $.ajax({
            url: `${API_URL}/user/login`,
            type: "post",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify({
                "email":email,
                "password":password
            }),
            success: function(res, textStatus, xhr){
                if(xhr.status === 200){
                    location.href="/"
                } else {
                    console.log("Login failed");
                }
            },
            error: function(){
                buttonLoading.css("display", "none");
                buttonText.css("display", "inline-block");
            }
        })
    })
    $("#register").click(function(e){
        e.preventDefault();
        const email = $("#email").val();
        const password = $("#password").val();
        buttonLoading.css("display", "inline-block");
        buttonText.css("display", "none");
        $.ajax({
            url: `${API_URL}/user/register`,
            type: "post",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify({
                "email":email,
                "password":password
            }),
            success: function(res, textStatus, xhr){
                if(xhr.status === 201){
                    location.href="/"
                } else {
                    console.log("Registration failed");
                }
            },
            error: function(){
                buttonLoading.css("display", "none");
                buttonText.css("display", "inline-block");
            }
        })
    })
})