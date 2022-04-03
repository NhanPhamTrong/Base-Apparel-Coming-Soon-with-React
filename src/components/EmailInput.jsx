import React from "react";
import $ from "jquery";

function CheckEmail() {
    const emailAddress = $("#email-input input");
    const emailInputSection = $("#email-input");
    const emailRegex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (emailRegex.test(emailAddress.val()) === false) {
        emailInputSection.addClass("error");
    }
    else {
        emailInputSection.removeClass("error");
    }
}

function GetEmailOnEnter(e) {
    if (e.key === "Enter") {
        CheckEmail();
    }
}

function EmailInput() {
    return (
        <div id="email-input">
            <div className="container">
                <input type="email" onKeyDown={GetEmailOnEnter} placeholder="Email Address..." />
                <button type="button" onClick={CheckEmail} aria-label="Submit email"></button>
                <p>Please provide a valid email</p>
                <span></span>
            </div>
        </div>
    );
}

export default EmailInput;