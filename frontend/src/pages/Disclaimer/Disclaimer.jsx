import './Disclaimer.css';
import {Link} from 'react-router-dom';

function Disclaimer() {
    return(

        <main className="disclaimer" >

            <div className="disclaimer-contain">

                <h1 className="disclaimer-title" >Disclaimer</h1>

                <p className="disclaimer-text" >By using FriendQuest, you acknowledge that while we facilitate connections with nearby individuals, your safety and privacy are your responsibility. Exercise caution when meeting new people, ensure interactions are respectful, and use public spaces for meetings. FriendQuest does not guarantee the accuracy of user profiles or interactions and is not liable for any issues that may arise. Please review our privacy policy and terms of service for more details</p>

                <Link to="/register" className="disclaimer-button">
                    Agree
                </Link>

            </div>

        </main>

    );
}

export default Disclaimer;