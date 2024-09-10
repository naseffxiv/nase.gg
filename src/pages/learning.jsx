import React from 'react';
import Layout from '@theme/Layout';

const LearningPartiesPage = () => (
  <Layout>
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Learning Parties</h1>
        <p style={styles.paragraph}>
          NASE offers regular learning parties for the current Savage tier, led by our Teachers and assisted by our Helpers. 
          We provide scheduled parties based on availability which include calls and guidance from players who have cleared the tier that experienced teachers and community members.
        </p>
        <p style={styles.paragraph}>
          Learning parties are designed to teach NASE (Party Finder) strategies and help players clear each fight. 
          Whether you are new to Savage content and looking for a helping hand to step into your first tier, or a long-time player wanting to learn Party Finder strategies in a relaxed setting led by experienced teachers and helpers, these opportunities are perfect for you!
        </p>
        
        <h2 style={styles.heading}>Interested in Signing Up for a Learning Party?</h2>
        <p style={styles.paragraph}>
          <a href="https://forms.gle/ryixr6eCY744MhFh8" style={styles.link}>» Click Here «</a> to sign up.
        </p>
        <p style={styles.paragraph}>
          Before submitting the sign-up form, please check out the <a href="https://discord.com/channels/1277285922328678452" style={styles.inlineLink}>#learning-parties</a> channel in our Discord to see if any listed parties match your availability and progression point. 
          If you have any questions about the party, feel free to reach out to the listed teacher or contact Symph (.symph. on Discord).
        </p>

        <h1 style={styles.heading}>Looking to Be a Teacher or Helper?</h1>
        <p style={styles.paragraph}>
          Teachers <strong>do not</strong> have a strict requirement for leading parties, but it would be appreciated if they could lead 1-2 parties or lockouts per week. 
          Teachers and staff work together to organize progression and clear parties based on leader availability and learner interest. Additionally, teachers <strong>may</strong> lead impromptu, unscheduled learning parties.
        </p>
        <p style={styles.paragraph}>
          Teachers and Helpers are not required to have alternate accounts, but if you have the time and flexibility to provide an alt for NASE parties, it would be greatly appreciated by those progressing!
        </p>

        <h2 style={styles.heading}>Interested in Applying to Be a Teacher or Helper?</h2>
        <p style={styles.paragraph}>
          <a href="https://forms.gle/iDWZbD4eLpN5Jfyt7" style={styles.link}>» Click Here «</a> to apply.
        </p>
        <p style={styles.paragraph}>
          If you're interested but unsure whether you meet all of the requirements, feel free to apply and tell us more about yourself in the application. You can also DM Symph with any additional questions.
        </p>
      </div>
    </div>
  </Layout>
);

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
  },
  content: {
    maxWidth: '800px',
    textAlign: 'left',
  },
  heading: {
    marginBottom: '16px',
  },
  paragraph: {
    lineHeight: '1.6',
    marginBottom: '16px',
  },
  link: {
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  inlineLink: {
    textDecoration: 'underline',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  
};

export default LearningPartiesPage;
