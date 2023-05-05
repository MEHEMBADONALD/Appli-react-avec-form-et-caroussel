import React,{useState} from 'react';   // a chaque fois qu'on utilise useState on l'importe toujours
import $ from 'jquery'
import emailjs from '@emailjs/browser';   // on importe emailjs 
import { FaSpinner } from "react-icons/fa";   // on importe le nom de la librerie et le nom de l'icon


 const Contact = ()=> {


 const [nom, setnom] = useState("")             // declaration des variables nom,email,comment avec useState
 const [email, setemail] = useState("")
 const [comment, setcomment] = useState("")
 
 const [load, setload] = useState(false)           // constante pour la fonction load qui affiche l'icon lorsqu'on soumet un formulaire
 const [succes, setsucces] = useState(false)       // constante pour la fonction succes qui affiche lz message 'envoyé avec succes' apres avoir soumis




  const submit =(e)=> {                            // condition pour le formulaire lorsqu'on veut remplir les champs
        e.preventDefault()
        if (nom===''){
             $('input[type=text]').addClass('is-invalid')
       }else if(email===''){
            $('input[type=text]').removeClass('is-invalid')
            $('input[type=email]').addClass('is-invalid')
       }else if (comment===''){
            $('input[type=text]').removeClass('is-invalid')
            $('input[type=email]').removeClass('is-invalid')
            $('textarea').addClass('is-invalid')
       }else{
            setload(true)                                 // si les champs sont remplies; ca enlève la classe invalid et ca met l'icon load
            $('input[type=text]').removeClass('is-invalid')
            $('input[type=email]').removeClass('is-invalid')
            $('textarea').removeClass('is-invalid')


            var templateParams = {          // ici c'est le code copié dans emailjs.send dans le navigateur
                name: nom,                   // on a modifié ce qui etait là par nom....
                mail: email,
                description:comment
            };
             
            emailjs.send('service_2r72yei', 'template_9uzkk8w', templateParams,'Y2A19I1sOltn6nftz')
                .then(function(response) {


                    setnom('')         // quand le message part, les champs redeviennent vides
                    setemail('')
                    setcomment('')
                    
                        setsucces(true)      // si le message est envoyé, ca envoie soumis avec succces pour 3s

                        setTimeout(() => {
                            setsucces(false)          //  apres 3s le message disparait
                        }, 3000);

                        setload(false)  // quand le message part, l'icon load part

                }, function(error) {
                   console.log('FAILED...', error);
                });

       }
    }

    return (

        <main className='container mt-5'>
            <p className='display-6 text-center'>Envoyer Nous Un Mail</p>
                <section className='row d-flex justify-content-center'>
                    <div className='col-md-7'>

                        {
                              succes &&  <div className='alert alert-success'>Email Envoyé Avec Succes</div>
                        }

                        <form onSubmit={(e)=>submit(e)}>
                             <div className='mb-3'>
                                  <input type="text" value={nom} onChange={(e)=>setnom(e.target.value)} className='form-control' placeholder='Votre Nom' />
                             </div>
                             <div className='mb-3'>
                                  <input type="email"  value={email} onChange={(e)=>setemail(e.target.value)} className='form-control' placeholder='Votre Email' />
                             </div>
                             <div className='mb-3'>
                                  <textarea className='form-control'  value={comment} onChange={(e)=>setcomment(e.target.value)} placeholder='Entrer Votre Description' rows="3"></textarea>
                             </div>
                                  <button type='submit' className='btn btn-secondary text-center w-50'>
                                    {
                                          load && <FaSpinner className='me-3'/>
                                    }
                                    Soumettre
                                    </button>
                        </form>

                    </div>
                </section>
        </main> 
    );
};

export default Contact;