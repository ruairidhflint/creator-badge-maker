const MakerBadge = () => {
  return (
    <a target="_blank" rel="noreferrer noopener" href="https://www.twitter.com/MrRoryFlint" style={linkStyle}>
      <svg width="18px" height="18px" viewBox="328 355 335 276" xmlns="http://www.w3.org/2000/svg">
        <path
          d=" M 630, 425 A 195, 195 0 0 1 331, 600 A 142, 142 0 0 0 428, 570 A  70,  70 0 0 1 370, 523 A  70,  70 0 0 0 401, 521 A  70,  70 0 0 1 344, 455 A  70,  70 0 0 0 372, 460 A  70,  70 0 0 1 354, 370 A 195, 195 0 0 0 495, 442 A  67,  67 0 0 1 611, 380 A 117, 117 0 0 0 654, 363 A  65,  65 0 0 1 623, 401 A 117, 117 0 0 0 662, 390 A  65,  65 0 0 1 630, 425 Z"
          style={{ fill: '#3BA9EE' }}
        />
      </svg>
      <span class="text" style={{ marginLeft: '7px' }}>
        MrRoryFlint
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
