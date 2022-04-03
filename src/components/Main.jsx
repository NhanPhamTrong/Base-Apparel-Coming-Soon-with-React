import React from "react";
import HeroImage from "./HeroImage";
import EmailInput from "./EmailInput";
import Brand from "./Brand";

function Main() {
    return (
        <main>
            <Brand />
            <HeroImage />
            <div id="content">
                <div id="text">
                    <div className="container">
                        <h1>We're <span>coming soon</span></h1>
                        <p>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to state up-to-date with announcements and our launch deals.</p>
                    </div>
                </div>
                <EmailInput />
            </div>
        </main>
    );
}

export default Main;