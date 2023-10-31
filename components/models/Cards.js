import { motion } from "framer-motion";
import Image from "next/image";

const Card = ({ league }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const Url = league[0].league.logo;

  return (
    <motion.div
      className="card"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      {/* <Image src={Url} height={90} alt={"fdsf"} width={90} /> */}
    </motion.div>
  );
};

export default Card;
