import useStyles from "./layoutstyles";
import { useTheme } from "react-jss";
import { useEffect, useRef } from "react";

export default function Section(props) {
  const{post} = props;
  const sectionRef = useRef(null);
  
  const theme = useTheme();
  const classes = useStyles({theme});

  return(
    <section className={classes.section} ref={sectionRef}>
      <span className={classes.date}>{post.date}</span>
      <h2 className={classes.sectionTitle}>{post.title}</h2>
      <div className={classes.content} dangerouslySetInnerHTML={{__html: post.content}} />
    </section>
  )
}