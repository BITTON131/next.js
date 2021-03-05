import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'


export function Profile() {
  const {level} = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://scontent.frbr2-1.fna.fbcdn.net/v/t1.0-9/68257143_106453617385719_8983240814767374336_n.jpg?_nc_cat=104&ccb=3&_nc_sid=09cbfe&_nc_ohc=LXRUBQa8D04AX9HzU4X&_nc_ht=scontent.frbr2-1.fna&oh=4084ceff32a0f8e4940d8cfb2084beea&oe=6063F0DA" alt="Bruno Ivis Delicia" />
            <div>
                <strong>Bruno Ivis</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    level {level}
                    </p>
            </div>
        
        </div>
    );
}