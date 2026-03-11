import classes from "./SearchForm.module.css";

export default function SearchForm({ handleSubmit }) {
  return (
    <div className={classes.container}>
      <button onClick={handleSubmit}>Let's GO</button>
    </div>
  );
}
