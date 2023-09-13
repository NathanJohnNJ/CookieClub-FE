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
                                                <label className="fnLabel" htmlFor="firstName">FIRST NAME:</label>
                                                <br></br>
                                                <p id="firstName" className="fnLabelTxt">{props.newUser.forename}</p>
                                        </div>
                                        <div className='surnamebox'>
                                                <label className="surlabel" htmlFor="lastName">SURNAME:</label>
                                                <br></br>
                                                <p id="lastName" className="surLabelTxt">{props.newUser.surname}</p>
                                        </div>
                                </div>

                                <div className="usernameEmail">
                                        <div className='userbox'>
                                                <label className="userLabel" htmlFor="username">USERNAME:</label>
                                                <br></br>
                                                <p id="username" className="usernameLabelTxt" >{props.newUser.username}</p>
                                        </div>
                                        <div className='emailbox'>
                                                <label className="emailLabel" htmlFor="email">EMAIL:</label>
                                                <br></br>
                                                <p id="email" className="emailLabelTxt" >{props.newUser.email}</p>
                                        </div>
                                </div>
                                <br></br>

                                <div className="modalButtons">
                                        <UsernameModal newUser={props.newUser} setNewUser={props.setNewUser} />
                                        <EmailModal newUser={props.newUser} setNewUser={props.setNewUser} token={props.token} />
                                        <PasswordModal newUser={props.newUser} setNewUser={props.setNewUser} token={props.token} />
                                        <DeleteModal token={props.token} />
                                </div>

                </div>



        )

}

export default Account;