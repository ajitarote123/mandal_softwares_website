// import React from 'react';
// 
// const GoogleTagManager = () => {
//   const tagManagerCode = `
//     <noscript>
//       <iframe 
//         src="https://www.googletagmanager.com/ns.html?id=GTM-M2BCZZR"
//         height="0" width="0" style="display:none;visibility:hidden"></iframe>
//     </noscript>
//   `;
// 
//   return <div dangerouslySetInnerHTML={{ __html: tagManagerCode }} />;
// };
// 
// export default GoogleTagManager;
// 

import React from 'react';
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'GTM-M2BCZZR'
}

TagManager.initialize(tagManagerArgs)

const GoogleTagManager = () => {
    return null
}

export default GoogleTagManager;
