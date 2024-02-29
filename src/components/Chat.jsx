import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import $ from "jquery";

import styles from "../styles/Chat.module.css";
import Messages from "./Messages";

const Chat = () => {
  
    function sendText(textMes){
        const data = {
            name: 'textMes',
          };
//               $.ajax({
//         // url: 'http://localhost:8888/basic/web/index.php?r=post%2Findex',
//     //    url: 'http://localhost:8888/basic/web/post/ajax',
//         url: 'http://tatarin.site/back/web/post/ajax',
//         type: 'post',
//         dataType: 'json',
//         data: {param1: textMes},
//         success: function(res){
//             console.log('hi');
//         },
//         error: function(er){
//             console.log(er.responseText);
//             setState((_state) => [..._state, {user: "admin", message: er.responseText}])
//         }
// });

        fetch('http://tatarin.site/back/web/post/ajax', {
        method: 'POST',
        referrerPolicy: "unsafe_url", 
        headers: {
          'Content-Type': 'application/json'
        },
        // body: JSON.stringify({params1: "privet"})
        body: JSON.stringify("privet")
      })
      .then(response => {
        if (response.ok) {
          console.log('Data sent successfully!');
          response.text().then(value => {
            console.log(value);
          });
        } else {
          console.log('Failed to send data');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });

    


    // const resp = fetch('http://localhost:8888/basic/web/post/ajax', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    //   })
    //   console.log(resp.json());

        // fetch("http://tatarin.site/web/index.php?r=site%2Findex",{
        //   method : 'POST',
        //   header : {
        //     'Content-Type': 'application/x-ww-form-urlencode',
        //   },
        //   body : JSON.stringify({action : 1})
        // })
        // .then (response => response.text())
        // .then (response => {
        //   console.log(response);
        // })
    //     $.ajax({
    //       type: "POST",
    //       // url: 'http://tatarin.site/web/index.php?r=site%2Findex',
           
    //       // url: 'http://localhost:8888/testYii2/web/index.php?r=site%2Findex',
    //       data: {test: '123'},
    //       mode: 'no-cors',
    //       success() {
    //           console.log('HelloBud');
    //       },
    //       error(){

    //       }
    //   });
      }
    const [state, setState] = useState([{user: "sal", message: "Добрый день,(имя пользователя). Вас приветствует виртуальный помомошник школы Гармония. Рад вас видеть. Чем я могу помочь? Выбирете нужную категорию"}]);
    const [message, setMessage] = useState("");

    const handleChange = ({target: {value}}) => {
        setMessage(value);
      
      };
      
    const handleSubmit = (e) => {
      alert('sdfsd');
       
        e.preventDefault();
      
        if (!message) {
            console.log('end');
            return;};
        console.log('yes');
      
      };
    const OutPut = (e) => {
        // console.log('Pressed');
        e.preventDefault();
      
        if (!message) {
            console.log('end');
            return;};
        setState((_state) => [..._state, {user: "user", message: message }])
        sendText(message);

    }
      



    return(
<div className={styles.wrap}>
    <div className={styles.messages}>
        <div className={styles.message}>
            <Messages messages={state} name={state} />
        </div>
        <form className={styles.form}>
            <div className={styles.input}>
                <input
                    type="text"
                    name="message"
                    placeholder="Write"
                    value={message}
                    onChange={handleChange} />
            </div>
            <div className={styles.button}>
            {/* <input type="submit" onSubmit={handleSubmit} value="Отправить" /> */}
            <button onClick={OutPut} className={styles.buttonTwo}>Отправить</button>
        </div>
        </form>
        <div className={styles.button}>
            {/* <input type="submit" onSubmit={handleSubmit} value="ОТправить" /> */}
            <button onClick={OutPut} className={styles.buttonTwo}>Отправить</button>
        </div>
    </div>
</div>

    )
}

export default Chat;