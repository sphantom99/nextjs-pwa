import React, {useState, useEffect} from 'react'
import styles from '../styles/Home.module.css'
function CreateNotification() {
    const [notificationBody, setNotificationBody] = useState('')
    const [notificationTitle, setNotificationTitle] = useState('')
    const makeNotification = () => {
        if(Notification.permission==='granted'){
            navigator.serviceWorker.ready.then((reg)=> {
                // setTimeout(() => {
                //     const not = new Notification(notificationTitle, { body: notificationBody, icon: '/mark.png', })
                // not.addEventListener('click',()=> {console.log("Heloooooo")})
                // }, 5000);
                
                const not = reg.showNotification(notificationTitle, { body: notificationBody, icon: '/mark.png', actions: [{action: 'follow', title: 'Follow Me!'}]})
                // not.onclick =  () => {console.log('hi')}
            })
        }
        
        // })
    }
    const askForPush = () => {
        navigator.serviceWorker.ready.then(async (reg)=>{
            reg.pushManager.getSubscription().then(function(sub) {
                if (sub === null) {
                  // Update UI to ask user to register for Push
                  console.log('Not subscribed to push service!');
                    reg.pushManager.subscribe({
                        userVisibleOnly: true,
                        // applicationServerKey: 'dGhpc2lzbXlzZWNyZXRrZXk'
                    }).then(function(sub) {
                        console.log('Endpoint URL: ', sub.endpoint);
                    }).catch(function(e) {
                        if (Notification.permission === 'denied') {
                        console.warn('Permission for notifications was denied');
                        } else {
                        console.error('Unable to subscribe to push', e);
                        }
                    });
                } else {
                  // We have a subscription, update the database
                  console.log('Subscription object: ', sub);
                }
              });
            })
    }
    // self.addEventListener(onnotificationclick)
    // self.on('notificationclick', (event) => {
    //     console.log('Clicked on Notification')
    // })



  return (
      <main className={styles.main}>
        <h3 className={styles.title} style={{fontSize: "2em", marginBottom: '2em'}}>Welcome, Create your Notification</h3>
        <form>
        <a className={styles.card} style={{padding: '.5em', textAlign: 'center' }} onClick={()=> {askForPush()}}>
                Enable Push Messages
            </a>
            <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'nowrap'}}>
            <input style={{borderRadius: '.5rem', borderColor: 'cyan', width: '20em', height: '3em', marginTop: '1em', marginBottom: '1em'}} placeholder="Title e.x. Today's News!" onChange={(e)=> setNotificationTitle(e.target.value)}/>
            <input style={{borderRadius: '.5rem', borderColor: 'cyan', width: '20em', height: '3em', marginTop: '1em', marginBottom: '1em'}} placeholder="Body" onChange={(e)=> setNotificationBody(e.target.value)}/>
            <input style={{borderRadius: '.5rem', borderColor: 'cyan', width: '20em', height: '3em', marginTop: '1em', marginBottom: '1em'}} placeholder="action1"/>
            <input style={{borderRadius: '.5rem', borderColor: 'cyan', width: '20em', height: '3em', marginTop: '1em', marginBottom: '1em'}} placeholder="action2"/>
            
            <a className={styles.card} style={{padding: '.5em', textAlign: 'center' }} onClick={()=> {makeNotification()}}>
                Create Notification
            </a>
            </div>
        </form>
    </main>
  )
}

export default CreateNotification