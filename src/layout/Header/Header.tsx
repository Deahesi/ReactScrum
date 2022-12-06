import styles from './Header.module.css'
import {HeaderProps} from "./Header.props";
import cn from "classnames";

export const Header = ({ className, ...props }: HeaderProps) => {
    return (
        <header className={cn(styles.header, className)} {...props}>
            <div className={styles.logo}>React Scrum</div>
        </header>
    )

}
