const SectionHeader = ({ text, id, children }) => {
  return (
    <section id={id}>
      <div className="header">{text} </div>
      {children}
    </section>
  );
};

export default SectionHeader;
