import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './styles/home.module.scss'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <nav className={styles.nav}>
          <h2>Muro's Sports Accessories</h2>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About Us</Link>
            </li>
          </ul>
        </nav>
        <p>We are chief suppliers of Sports Accessories in Tanzania our products are of good quality and standard. Our sports accessories covers a wide range of games such as Football,Basketball,Boxing and Tennis. Our prices are affordable and we do delivery </p>
        <div className={styles.container}>
      <h1>About Muro's Sports Accessories</h1>
      <div className={styles.companyInfo}>
        {/* <div className={styles.imageContainer}>
          <Image
            src="/01.jpg"
            alt="Muro's Sports Accessories Logo"
            width={200}
            height={200}
          />
        </div> */}
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
        <h1>Categories</h1>
        <div className={styles.categories}>
          <div className={styles.item}>
            <img src='01.jpg' />
            <h1>Football</h1>
          </div>
          <div className={styles.item}>
            <img src='02.jpg' />
            <h1>Basketball</h1>
          </div>
          <div className={styles.item}>
            <img src='02.jpg' />
            <h1>Basketball</h1>
          </div>
          <div className={styles.item}>
            <img src='02.jpg' />
            <h1>Basketball</h1>
          </div>
          <div className={styles.item}>
            <img src='02.jpg' />
            <h1>Basketball</h1>
          </div>
        </div>
        <div className={styles.products}>
          <h1>Our Products</h1>
          <div className={styles.items}>
            <div className={styles.item}>
              <img src='01.jpg' />
              <h1>Football</h1>
            </div>
            <div className={styles.item}>
              <img src='02.jpg' />
              <h1>Basketball</h1>
            </div>
            <div className={styles.item}>
              <img src='02.jpg' />
              <h1>Basketball</h1>
            </div>
            <div className={styles.item}>
              <img src='02.jpg' />
              <h1>Basketball</h1>
            </div>
            <div className={styles.item}>
              <img src='02.jpg' />
              <h1>Basketball</h1>
            </div>
          </div>
        </div>
        <div className={styles.table}>
          <table>
            <tr>
              <th>Accessory</th>
              <th>Price</th>
              <th>Wholesale Price</th>
            </tr>
            <tr>
              <td>Nike Accessory</td>
              <td>$29.99</td>
              <td>$24.99</td>
            </tr>
            <tr>
              <td>Adidas Accessory</td>
              <td>$24.99</td>
              <td>$19.99</td>
            </tr>
            <tr>
              <td>Puma Accessory</td>
              <td>$19.99</td>
              <td>$14.99</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  )
}
