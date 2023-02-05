import PropTypes from "prop-types";
import styles from "./Button.module.css";


export default

function Btn({ text }) {
    return <button className={styles.Btn}>{text}</button>;
}

Btn.prototype = {
    text: PropTypes.string.isRequired,
};