import classes from "./Fact.module.css";

export default function Fact({ data }) {
  return (
    <div className={classes.card}>
      <p>{data.attributes.body}</p>
    </div>
  );
}
