import { motion } from "framer-motion";

const ProgressBar = (props) => {
  const { bgcolor, description, current, aim } = props;
  const completed = Math.round((current / aim) * 100);

  const containerStyles = {
    height: 20,
    maxWidth: "500px",
    minWidth: "200px",

    backgroundColor: "var(--themecolor-default)",
    borderRadius: 50,
    marginBottom: 80,
    marginRight: 50,
    position: "relative",
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  const descriptionStyles = {
    position: "absolute",
    left: 0,
    color: bgcolor,
    paddingTop: "20px",
    fontSize: "20px",
  };

  return (
    <div className="progress" style={containerStyles}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${completed}%` }}
        transition={{ delay: 0.5, duration: 1 }}
        style={fillerStyles}
      >
        <span style={labelStyles}>
          {current}/{aim}
        </span>
      </motion.div>
      <div style={descriptionStyles}>{description}</div>
    </div>
  );
};

export default ProgressBar;
