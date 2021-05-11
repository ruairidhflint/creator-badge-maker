export const htmlCreate = (type, name, url, image) => {
  let icon;
  switch (type) {
    case 'Twitter':
      icon = `<svg width="18px" height="18px" viewBox="328 355 335 276" xmlns="http://www.w3.org/2000/svg">
        <path d=" M 630, 425 A 195, 195 0 0 1 331, 600 A 142, 142 0 0 0 428, 570 A  70,  70 0 0 1 370, 523 A  70,  70 0 0 0 401, 521 A  70,  70 0 0 1 344, 455 A  70,  70 0 0 0 372, 460 A  70,  70 0 0 1 354, 370 A 195, 195 0 0 0 495, 442 A  67,  67 0 0 1 611, 380 A 117, 117 0 0 0 654, 363 A  65,  65 0 0 1 623, 401 A 117, 117 0 0 0 662, 390 A  65,  65 0 0 1 630, 425 Z"style='fill: #3BA9EE;'/></svg>`;
      break;
    case 'GitHub':
      icon = `<svg height="22" viewBox="0 0 16 16" version="1.1" width="22" aria-hidden="true"><path fill-rule="evenodd"
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>`;
      break;
    case 'Custom':
      icon = '<img src="' + image + '" alt="Personal icon" width="22px" height="22px" style="border-radius: 50%"/>';
      break;
    default:
      break;
  }
  return `<a
      target="_blank"
      rel="noreferrer noopener"
      href="${url}"
      style="
      background-attachment: scroll;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      right: 0;
      bottom: 0;
      position: fixed;
      z-index: 100;
      border-top-left-radius: 5px;
      padding-top: 5px;
      padding-bottom: 6px;
      padding-right: 15px;
      padding-left: 5px;
      border-top-width: 1px;
      border-top-style: solid;
      border-top-color: #efefef;
      border-left-width: 1px;
      border-left-style: solid;
      border-left-color: #efefef;
      background-color: #fff;
      background-image: none;
      background-repeat: repeat;
      background-position: top left;
      color: #6f6f6f;
      text-decoration: none;
      display: flex;
      align-items: center;
      font-size: 12px;
    "
    >
   ${icon}
      <span class="text" style="margin-left: 7px">
        ${name}
      </span>
    </a>`;
};

export const reactCreate = (type, name, url, image) => {
  let icon;
  switch (type) {
    case 'Twitter':
      icon = `<svg width="18px" height="18px" viewBox="328 355 335 276" xmlns="http://www.w3.org/2000/svg">
          <path d=" M 630, 425 A 195, 195 0 0 1 331, 600 A 142, 142 0 0 0 428, 570 A  70,  70 0 0 1 370, 523 A  70,  70 0 0 0 401, 521 A  70,  70 0 0 1 344, 455 A  70,  70 0 0 0 372, 460 A  70,  70 0 0 1 354, 370 A 195, 195 0 0 0 495, 442 A  67,  67 0 0 1 611, 380 A 117, 117 0 0 0 654, 363 A  65,  65 0 0 1 623, 401 A 117, 117 0 0 0 662, 390 A  65,  65 0 0 1 630, 425 Z" style={{fill: '#3BA9EE'}}/></svg>`;
      break;
    case 'GitHub':
      icon = `<svg height="22" viewBox="0 0 16 16" version="1.1" width="22" ariaHidden="true"><path fillRule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>`;
      break;
    case 'Custom':
      icon =
        '<img src="' + image + '" alt="Personal icon"  style={{borderRadius: "50%", width:"22px", height:"22px"}}/>';
      break;
    default:
      break;
  }
  return `const MakerBadge = () => {
    return (
      <a target="_blank" rel="noreferrer noopener" href="${url}" style={linkStyle}>
        ${icon}
        <span className="text" style={{ marginLeft: '7px' }}>
          ${name}
        </span>
      </a>
    );
  };
  
  export default MakerBadge;
  
  const linkStyle = {
    backgroundAttachment: 'scroll',
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    right: '0',
    bottom: '0',
    position: 'fixed',
    zIndex: '100',
    borderTopLeftRadius: '5px',
    paddingTop: '5px',
    paddingBottom: '6px',
    paddingRight: '15px',
    paddingLeft: '7px',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: '#efefef',
    borderLeftWidth: '1px',
    borderLeftStyle: 'solid',
    borderLeftColor: '#efefef',
    backgroundColor: '#fff',
    backgroundImage: 'none',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'top left',
    color: '#6f6f6f',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    fontSize: '12px',
  };
  `;
};
