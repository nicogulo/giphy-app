const Image = ({ title, url }) => {
  return (
    <div style={{ padding: '1em' }}>
      <img src={url} alt={title} />
      <h6>{title}</h6>
    </div>
  );
};

export default Image;
