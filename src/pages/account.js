import "./account.css"
import UsernameModal from '../components/usernameModal';
import EmailModal from '../components/emailModal';
import PasswordModal from '../components/passwordModal';
import DeleteModal from '../components/deleteModal';

const Account = (props) => {
        return (
                <div className="accountPage">
                                <h1 className="accountTitle">Account Details</h1>

                                <div className='name'>
                                        <div className="firstnamebox">
                                                <p className="fnLabel">FIRST NAME:</p>
                                                <p id="firstName" className="fnLabelTxt">{props.newUser.firstName}</p>
                                        </div>
                                        <div className='surnamebox'>
                                                <p className="surlabel">SURNAME:</p>
                                                <p id="lastName" className="surLabelTxt">{props.newUser.lastName}</p>
                                        </div>
                                </div>

                                <div className="usernameEmail">
                                        <div className='userbox'>
                                                <p className="userLabel">USERNAME:</p>
                                                <p id="username" className="usernameLabelTxt" >{props.newUser.username}</p>
                                        </div>
                                        <div className='emailbox'>
                                                <p className="emailLabel">EMAIL:</p>
                                                <p id="email" className="emailLabelTxt" >{props.newUser.email}</p>
                                        </div>
                                </div>
                                <br></br>

                                <div className="modalButtons">
                                        <UsernameModal newUser={props.newUser} setNewUser={props.setNewUser} token={props.token} />
                                        <EmailModal newUser={props.newUser} setNewUser={props.setNewUser} token={props.token} />
                                        <PasswordModal newUser={props.newUser} setNewUser={props.setNewUser} token={props.token} />
                                        <DeleteModal setNewUser={props.setNewUser} newUser={props.newUser} token={props.token} />
                                </div>

                </div>



        )

}

export default Account;