import Image from 'next/image';
import styles from './about.module.scss';

const About = () => {
  return (
    <div className={styles.container}>
      <h1>About Muro's Sports Accessories</h1>
      <div className={styles.companyInfo}>
        <div className={styles.imageContainer}>
          <Image
            src="/01.jpg"
            alt="Muro's Sports Accessories Logo"
            width={200}
            height={200}
          />
        </div>
        <div className={styles.info}>
          <p>
            Muro's Sports Accessories is a company that was founded in 2002. We are located at Mwenge Rufungira, opposite Tanzanite Tower. With a team of five dedicated employees, our vision is to become the chief and trusted supplier of sports accessories.
          </p>
          <p>
            Our mission is to provide quality sports accessories at an affordable price, enabling sports enthusiasts to excel in their activities without breaking the bank.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
