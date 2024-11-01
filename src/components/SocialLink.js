const SocialLink = ({ href, icon, itemClass }) => {
  return (
    <>
      <line>
        <a href={href} target="_blank" rel="noreferrer" className={itemClass}>
          <i className={icon}></i>
        </a>
      </line>
    </>
  );
};

export default SocialLink;
