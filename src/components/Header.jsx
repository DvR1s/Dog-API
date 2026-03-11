import classes from "./Header.module.css";

export default function Header() {
  return (
    <div className={classes.container}>
      <h1>Dog Facts Explorer</h1>
      <p>
        Welcome to Dog Facts Explorer! This website is designed to help you
        learn more about dogs through a collection of interesting and fun facts.
        Dogs are one of the most beloved animals in the world, known for their
        loyalty, intelligence, and unique personalities. On this page, you will
        find five different facts about dogs that highlight some of their
        fascinating traits, behaviors, and history. Take a moment to explore
        these facts and discover something new about our favorite four-legged
        companions.
      </p>
    </div>
  );
}
