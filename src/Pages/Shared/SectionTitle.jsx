const SectionTitle = ({ title }) => {
  const hrColor = "rgb(227, 116, 216)";
  return (
    <div className="mx-auto text-center my-8">
      <hr
        className={`border-t-2 border-solid border-t-red-600 w-32 mx-auto mb-4`}
        style={{ borderColor: hrColor }}
      />
      <h3 className="text-3xl font-bold text-cyan-400">{title}</h3>
      <hr
        className={`border-t-2 border-solid border-blue-500 w-32 mx-auto mt-4`}
        style={{ borderColor: hrColor }}
      />
    </div>
  );
};

export default SectionTitle;
