import React, {useEffect}from 'react';
import './Chatbot.css'

export const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js"
    script.async = true
    document.body.appendChild(script)
 
    script.onload = () => {
        window.botpress.init({
  "botId": "3f15d56c-95d7-44e1-a170-525806a0cbec",
  "configuration": {
    "website": {},
    "email": {},
    "phone": {},
    "termsOfService": {},
    "privacyPolicy": {},
    "color": "#b8336a",
    "variant": "solid",
    "themeMode": "light",
    "fontFamily": "inter",
    "radius": 1
  },
  "clientId": "3f15d56c-95d7-44e1-a170-525806a0cbec"
});
    }
    return () => {
        document.body.removeChild(script); // Cleanup on unmount
      };
  }, [])
   

  //useffect and return webchat 2 line starting -> css also enabled diplay:none
  /*return (<>
  <div class="webchat" style={{height: '600px',width: '400px'}}>
   <iframe
     style={{height: '100%', width: '100%', border: 'none'}}
     srcdoc='
     <!doctype html>
     <html lang="en">
       <head></head>
       <body>
         <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
         <script src="https://files.bpcontent.cloud/2025/02/10/15/20250210150718-APGX41Q5.js"></script>
         <script defer>
           window.botpress.on("webchat:ready", (conversationId) => {
             botpress.open();
           });
         window.botpress.init({
   "botId": "3f15d56c-95d7-44e1-a170-525806a0cbec",
   "configuration": {
     "website": {},
     "email": {},
     "phone": {},
     "termsOfService": {},
     "privacyPolicy": {},
     "color": "#b8336a",
     "variant": "solid",
     "themeMode": "light",
     "fontFamily": "inter",
     "radius": 1
   },
   "clientId": "3f15d56c-95d7-44e1-a170-525806a0cbec"
 });
         </script>
       </body>
     </html>'
   ></iframe>
 </div>
 </> )*/
}