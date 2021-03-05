import Head from 'next/head'


import { ExperienceBar } from "../compoments/ExperienceBar";

import React from 'react';
import { Profile } from '../compoments/profile';

import styles from '../styles/pages/Home.module.css'
import { CompletedChallenges } from '../compoments/CompletedChallenges';
import { Countdown } from '../compoments/Countdown';
import { ChallengeBox } from '../compoments/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';
import { GetServerSideProps } from 'next';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps {
   level: number;
   currentExperience: number;
   challengesCompleted: number;
}

export default function Home(Props) {
  console.log(Props)
  return (
    <ChallengesProvider level={Props.level} 
    currentExperience={Props.currentExperience}
     challengesCompleted={Props.challengesCompleted}  >
      <div className={styles.container}> 
      <Head>
        <title>Incio </title>
        </Head>   
      <ExperienceBar />

      <CountdownProvider>
          <section> 
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />

            </div>
          </section>
      </CountdownProvider>
    </div>
    </ChallengesProvider>
);
}


export const getServerSideProps: GetServerSideProps = async ctx => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  return {props: {level: Number(level), 
    currentExperience: Number(currentExperience), 
    challengesCompleted: Number(challengesCompleted) }};

  const user = {
    level: 1,
    currentExperience: 50,
    challengesCompleted: 3
  }

 
}



