import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar(){
   const{ currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
   const precentToNextLevel = Math.round(currentExperience *100)/ experienceToNextLevel;


    return (
        <header className={styles.exeperienceBar}>
            <span>0 XP</span>
            <div>
                <div style={{  width: `${precentToNextLevel}%` }} />

                <span className={styles.currentexperience} style={{ left: `${precentToNextLevel}%` }}>
                    {currentExperience} XP</span>
            </div>
            <span>{experienceToNextLevel} XP</span>
        </header>
    );
}