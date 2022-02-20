import React, {Component} from 'react';

function ListContacts(props){
    return(
        <ol className='contact-list'>
                {props.contacts.map((contact)=>(
                    <li key={contact.id} className='contact-list-item'>
                        <div 
                        className='contact-avatar'
                        style={{
                            backgroundImage: `url(${contact.avatarURL})`
                        }}
                        ></div>
                        <div className='contact-details'>
                            <p>{contact.name}</p>
                            <p>{contact.handle}</p>
                        </div>
                        <button className='contact-remove'>Remove</button>
                    </li>
                ))}
            </ol>
    )
}

// class ListContacts extends Component{
//     render(){
//         // console.log('Props ', this.props)
//         return(
//             <ol className='contact-list'>
//                 {this.props.contacts.map((contact)=>(
//                     <li key={contact.id} className='contact-list-item'>
//                         <div 
//                         className='contact-avatar'
//                         style={{
//                             backgroundImage: `url(${contact.avatarURL})`
//                         }}
//                         ></div>
//                         <div className='contact-details'>
//                             <p>{contact.name}</p>
//                             <p>{contact.handle}</p>
//                         </div>
//                         <button className='contact-remove'>Remove</button>
//                     </li>
//                 ))}
//             </ol>
//         )
//     }
// }

export default ListContacts