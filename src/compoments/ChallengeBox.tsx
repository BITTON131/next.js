import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox () {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handleChellengeSucceded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChellengefailed() {
        resetChallenge();
        resetCountdown();
    }


    return (
        <div className={styles.ChallengeBoxContainer}>
           {  activeChallenge ? (
               <div className={styles.challengenotActive}>
                   <header>Ganhe {activeChallenge.amount} XP</header>

                   <main>
                       <img src={`icons/${activeChallenge.type}.svg`} />

                       <strong>Novo desafio</strong>
                       <p>{activeChallenge.description}</p>
                   </main>

                   <footer>
                       <button
                        type="button"
                        className={styles.challengeFailedButton}
                        onClick={handleChellengefailed}
                        >
                            Falhei</button>
                       <button
                        type="button"
                        className={styles.challengeSuccededButton}
                        onClick={handleChellengeSucceded}
                        >
                            Completei</button>
                   </footer>
               </div>
           ) : (
               <div className={styles.challengenotActive}>
                <strong>
                    Finalize um ciclo para receber um desafio hardcore</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level up"/>
                        Avance de level completando desafios.
                    </p>
            </div>)  }
        </div>
    )
}