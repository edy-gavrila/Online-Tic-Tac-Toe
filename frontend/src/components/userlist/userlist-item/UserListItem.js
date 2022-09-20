import avatarImg from "../../../assets/images/avatar.png";

import styles from "./styles";

export default function UserlistItem({ name, ranking, status }) {
  let avatarStyles = styles.avatarEngaged;
  let buttonStyles = styles.disabledActionButton;
  let buttonText = "Playing...";
  if (status === "available") {
    avatarStyles = styles.avatarFree;
    buttonStyles = styles.enabledActionButton;
    buttonText = "Challenge";
  }
  return (
    <div className={styles.container}>
      <img className={avatarStyles} alt="avatar" src={avatarImg} />
      <div>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.ranking}>{ranking}</p>
      </div>
      <button className={buttonStyles}>{buttonText}</button>
    </div>
  );
}
