import React from 'react'
import styles from './Home.module.css'
import { Link, useNavigate } from 'react-router-dom'
import Card from '../../components/shared/Card/Card'
import Button from '../../components/shared/Button/Button'
const Home = () => {
  const navigate=useNavigate();
  const signInLinkStyle={
    color: '#0077ff',
    fontWeight: 'bold',
    textDecoration: 'none',
    marginLeft: '10px',
  }

  const startRegister=()=>{
    navigate('/register');
  }

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome To CoderHouse" icon="logo" >

        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi obcaecati consequuntur totam omnis, eveniet harum saepe porro nemo iusto error ad. Dolorum odio laudantium, praesentium sunt in earum dolor eum?
        </p>
        <div>
          <Button onClick={startRegister} text="Get Your username"/>
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite Text?</span>
          <Link style={signInLinkStyle} to="/login">Sign in</Link>
        </div>

      </Card>
    </div>
  )
}

export default Home
