import React, { useEffect } from 'react';

function ChatBot() {
    useEffect(() => {
        (function(d, m) {
            var kommunicateSettings = {
                "appId": "34d5e502c585adb8b2250f024a3affbeb",
                "popupWidget": true,
                "automaticChatOpenOnNavigation": true
            };
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    }, []); 

    return (
        <div>
        
        </div>
    );
}

export default ChatBot;
